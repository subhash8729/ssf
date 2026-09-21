import { NextRequest, NextResponse } from "next/server";
import { validateApplicationForm, ApplicationFormData } from "@/lib/validation";
import { sendApplicationNotification } from "@/lib/mail";

// Simple in-memory rate limiting map (IP -> Array of timestamps)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 6;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);

  // Periodically clean up old entries if map gets large
  if (rateLimitMap.size > 2000) {
    for (const [key, times] of rateLimitMap.entries()) {
      if (times.every((t) => now - t > RATE_LIMIT_WINDOW_MS)) {
        rateLimitMap.delete(key);
      }
    }
  }

  return false;
}

export async function POST(req: NextRequest) {
  try {
    // 1. Basic request size check (max 50KB payload)
    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 50 * 1024) {
      return NextResponse.json(
        { success: false, message: "Payload too large." },
        { status: 413 }
      );
    }

    // 2. Simple client identification for rate limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown-client";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many submissions from your connection. Please wait a few minutes before trying again.",
        },
        { status: 429 }
      );
    }

    // 3. Parse JSON body
    let body: Partial<ApplicationFormData>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid JSON format." },
        { status: 400 }
      );
    }

    // 4. Server-side validation
    const validation = validateApplicationForm(body);
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the highlighted errors.",
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const applicationData = body as ApplicationFormData;

    // 5. Send notification email via SMTP or development fallback
    const mailResult = await sendApplicationNotification(applicationData);

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you. Your application has been received. Our team will review your information and contact you.",
        isDevMode: mailResult.isDevFallback || false,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Application API error:", err);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}
