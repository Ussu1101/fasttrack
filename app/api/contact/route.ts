import { NextRequest, NextResponse } from "next/server";
import { deliverContactMessage } from "@/lib/email/contactDelivery";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, honeypot } = body;

    // Spam / Bot Protection: Reject if honeypot field is filled
    if (honeypot && String(honeypot).trim().length > 0) {
      return NextResponse.json(
        { error: "Spam detected." },
        { status: 400 }
      );
    }

    // Input Sanitization & Validation
    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const trimmedSubject = typeof subject === "string" ? subject.trim() : "";
    const trimmedMessage = typeof message === "string" ? message.trim() : "";

    const errors: Record<string, string> = {};

    if (!trimmedName || trimmedName.length < 2) {
      errors.name = "Name must be at least 2 characters.";
    } else if (trimmedName.length > 100) {
      errors.name = "Name cannot exceed 100 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      errors.email = "Please provide a valid email address.";
    } else if (trimmedEmail.length > 150) {
      errors.email = "Email cannot exceed 150 characters.";
    }

    if (!trimmedSubject || trimmedSubject.length < 3) {
      errors.subject = "Subject must be at least 3 characters.";
    } else if (trimmedSubject.length > 150) {
      errors.subject = "Subject cannot exceed 150 characters.";
    }

    if (!trimmedMessage || trimmedMessage.length < 10) {
      errors.message = "Message must be at least 10 characters.";
    } else if (trimmedMessage.length > 3000) {
      errors.message = "Message cannot exceed 3000 characters.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: "Validation failed.", details: errors },
        { status: 422 }
      );
    }

    // Deliver via service abstraction
    const result = await deliverContactMessage({
      name: trimmedName,
      email: trimmedEmail,
      subject: trimmedSubject,
      message: trimmedMessage,
    });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || "Delivery failed.", result },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      providerConfigured: result.providerConfigured,
      delivered: result.delivered,
      message: result.infoMessage,
    });
  } catch (error: unknown) {
    console.error("[FastTrack Contact API] Exception:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred processing your request." },
      { status: 500 }
    );
  }
}
