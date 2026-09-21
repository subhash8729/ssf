import nodemailer from "nodemailer";
import { ApplicationFormData } from "./validation";

interface SendMailResult {
  success: boolean;
  messageId?: string;
  isDevFallback?: boolean;
}

export async function sendApplicationNotification(
  data: ApplicationFormData
): Promise<SendMailResult> {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const targetEmail = process.env.FOUNDATION_EMAIL || "admissions@sushilsharda.org";

  // Development Fallback: If credentials are not set, log safely and succeed
  if (!host || !user || !pass) {
    console.log("[DEV MODE] New Student Application Received (SMTP credentials not configured):", {
      timestamp: new Date().toISOString(),
      studentName: data.fullName,
      email: data.email,
      phone: data.phone,
      city: data.city,
      currentClass: data.currentClass,
      institution: data.institution,
      englishMarks: data.englishMarks,
      mathsMarks: data.mathsMarks,
      reasonPreview: data.reasonForSupport.slice(0, 100) + "...",
    });

    return {
      success: true,
      isDevFallback: true,
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <div style="background-color: #AA331D; padding: 16px; border-radius: 6px; text-align: center; color: white;">
          <h2 style="margin: 0; font-size: 20px;">Shri Sushil Sharda Foundation</h2>
          <p style="margin: 4px 0 0; font-size: 14px;">New Free ACCA Tuition Application</p>
        </div>
        
        <div style="padding: 20px 0;">
          <h3 style="color: #333; border-bottom: 2px solid #AA331D; padding-bottom: 8px;">Student Profile</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #666; width: 160px;"><strong>Full Name:</strong></td><td>${data.fullName}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>Phone:</strong></td><td>${data.phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>City / State:</strong></td><td>${data.city}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>Current Class:</strong></td><td>${data.currentClass}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>School / College:</strong></td><td>${data.institution}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>English Score:</strong></td><td>${data.englishMarks}%</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>Maths/Accounts Score:</strong></td><td>${data.mathsMarks}%</td></tr>
          </table>

          <h3 style="color: #333; border-bottom: 2px solid #AA331D; padding-bottom: 8px; margin-top: 24px;">Financial Support Need</h3>
          <p style="background-color: #f9f9f9; padding: 12px; border-left: 4px solid #AA331D; font-size: 14px; line-height: 1.6;">
            ${data.reasonForSupport}
          </p>

          ${
            data.message
              ? `
              <h3 style="color: #333; margin-top: 20px; font-size: 15px;">Additional Notes:</h3>
              <p style="font-size: 14px; color: #444;">${data.message}</p>
            `
              : ""
          }
        </div>

        <div style="border-top: 1px solid #e0e0e0; padding-top: 12px; font-size: 12px; color: #888; text-align: center;">
          Received via Shri Sushil Sharda Foundation Web Portal • Confidential Application
        </div>
      </div>
    `;

    const info = await transporter.sendMail({
      from: `"SSSF Portal" <${user}>`,
      to: targetEmail,
      replyTo: data.email,
      subject: `New ACCA Support Application: ${data.fullName} (${data.englishMarks}% Eng / ${data.mathsMarks}% Math)`,
      html: emailHtml,
    });

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error("Failed to send email via SMTP:", error);
    // Return gracefully so student does not receive a cryptic crash
    return {
      success: false,
    };
  }
}
