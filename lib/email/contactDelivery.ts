/**
 * FastTrack Email Delivery Service Abstraction
 * 
 * Secure, environment-variable-grounded email delivery service.
 * Supports provider integration (e.g., Resend, SendGrid) without hardcoding credentials.
 * If an API key is not present in the runtime environment, safely handles the submission
 * without pretending that delivery occurred.
 */

export interface ContactMessagePayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface DeliveryResult {
  success: boolean;
  providerConfigured: boolean;
  delivered: boolean;
  infoMessage: string;
  error?: string;
}

export async function deliverContactMessage(payload: ContactMessagePayload): Promise<DeliveryResult> {
  const { name, email, subject, message } = payload;

  const recipientEmail = process.env.CONTACT_EMAIL_RECIPIENT || "Usssamaa@gmail.com";
  const apiKey = process.env.RESEND_API_KEY || process.env.EMAIL_SERVICE_API_KEY;
  const emailFrom = process.env.EMAIL_FROM || "FastTrack Contact <onboarding@resend.dev>";

  // Check if live email provider credentials are provided
  if (!apiKey) {
    // Log safely to server console for local/development auditing without exposing sensitive data
    console.info(
      `[FastTrack Contact Service] Submission received for ${recipientEmail} from ${name} (${email}): "${subject}". Live delivery paused: RESEND_API_KEY environment variable is not configured.`
    );

    return {
      success: true,
      providerConfigured: false,
      delivered: false,
      infoMessage:
        "Submission received by the application. To enable live inbox delivery to Usssamaa@gmail.com, configure the RESEND_API_KEY environment variable.",
    };
  }

  try {
    // Live delivery via Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: emailFrom,
        to: [recipientEmail],
        reply_to: email,
        subject: `[FastTrack Inquiry] ${subject} - from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\n---\nSent via FastTrack Contact Form`,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[FastTrack Contact Service] Resend API error: ${response.status} ${errorText}`);
      return {
        success: false,
        providerConfigured: true,
        delivered: false,
        infoMessage: "Failed to dispatch email via provider.",
        error: `Provider error code: ${response.status}`,
      };
    }

    return {
      success: true,
      providerConfigured: true,
      delivered: true,
      infoMessage: "Message successfully delivered to site owner inbox.",
    };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Unknown network error";
    console.error(`[FastTrack Contact Service] Network delivery exception:`, errorMessage);
    return {
      success: false,
      providerConfigured: true,
      delivered: false,
      infoMessage: "Network error occurred while communicating with email provider.",
      error: errorMessage,
    };
  }
}
