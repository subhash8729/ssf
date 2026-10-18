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
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const targetEmail = process.env.FOUNDATION_EMAIL;

  // Development Fallback: If credentials are not set in .env, log safely and succeed
  if (!host || !user || !pass || !targetEmail) {
    console.warn(
      "[DEV MODE] Application received but SMTP is not fully configured:",
      {
        hasHost: Boolean(host),
        hasUser: Boolean(user),
        hasPass: Boolean(pass),
        hasTargetEmail: Boolean(targetEmail),
        studentName: data.fullName,
        email: data.email,
      }
    );

    return {
      success: true,
      isDevFallback: true,
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
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
            <tr><td style="padding: 8px 0; color: #666;"><strong>10th Marksheet:</strong></td><td>${data.marksheet10th ? data.marksheet10th.name : "Not provided"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>12th Marksheet:</strong></td><td>${data.marksheet12th ? data.marksheet12th.name : "Not provided"}</td></tr>
          </table>

          <h3 style="color: #333; border-bottom: 2px solid #AA331D; padding-bottom: 8px; margin-top: 24px;">Financial Support Need</h3>
          <p style="background-color: #f9f9f9; padding: 12px; border-left: 4px solid #AA331D; font-size: 14px; line-height: 1.6;">
            ${data.reasonForSupport}
          </p>
        </div>

        <div style="border-top: 1px solid #e0e0e0; padding-top: 12px; font-size: 12px; color: #888; text-align: center;">
          Received via Shri Sushil Sharda Foundation Web Portal • Confidential Application
        </div>
      </div>
    `;

    // Prepare attachments if base64 dataUrl is present
    const attachments = [];
    if (data.marksheet10th?.dataUrl) {
      const match = data.marksheet10th.dataUrl.match(/^data:(.+);base64,(.+)$/);
      if (match) {
        attachments.push({
          filename: data.marksheet10th.name,
          content: Buffer.from(match[2], "base64"),
          contentType: match[1],
        });
      }
    }
    if (data.marksheet12th?.dataUrl) {
      const match = data.marksheet12th.dataUrl.match(/^data:(.+);base64,(.+)$/);
      if (match) {
        attachments.push({
          filename: data.marksheet12th.name,
          content: Buffer.from(match[2], "base64"),
          contentType: match[1],
        });
      }
    }

    const info = await transporter.sendMail({
      from: `"SSSF Portal" <${user}>`,
      to: targetEmail,
      replyTo: data.email,
      subject: `New ACCA Support Application: ${data.fullName}`,
      html: emailHtml,
      attachments,
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
