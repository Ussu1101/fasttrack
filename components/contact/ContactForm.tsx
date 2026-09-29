"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Send, RefreshCw, Mail, ShieldAlert } from "lucide-react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    delivered: boolean;
    providerConfigured: boolean;
    message: string;
  } | null>(null);

  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!name.trim() || name.trim().length < 2) {
      errors.name = "Please enter your name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!subject.trim() || subject.trim().length < 3) {
      errors.subject = "Please enter a subject (at least 3 characters).";
    }

    if (!message.trim() || message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null);

    // Spam honeypot triggered
    if (honeypot.trim().length > 0) {
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
          honeypot: honeypot.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.details) {
          setFieldErrors(data.details);
        } else {
          setGeneralError(data.error || "Failed to process message submission.");
        }
        return;
      }

      setSubmissionResult({
        delivered: data.delivered,
        providerConfigured: data.providerConfigured,
        message: data.message,
      });

      // Clear form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setFieldErrors({});
    } catch {
      setGeneralError("A network error occurred while sending your message. Please try again or email Usssamaa@gmail.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setGeneralError(null);
    setFieldErrors({});
  };

  return (
    <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-surface-container shadow-sm">
      {submissionResult ? (
        <div className="p-6 sm:p-8 text-center flex flex-col items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-secondary-container/50 border border-secondary/30 flex items-center justify-center text-secondary">
            <CheckCircle2 className="w-8 h-8 text-secondary" />
          </div>

          <h2 className="font-headline text-2xl font-bold text-on-surface">
            Message Successfully Received
          </h2>

          <p className="font-body-md text-sm text-on-surface-variant max-w-md leading-relaxed">
            Thank you for reaching out. Your inquiry has been processed for site owner Muhammad Usama.
          </p>

          {!submissionResult.providerConfigured && (
            <div className="w-full max-w-lg p-3.5 rounded-xl bg-surface-container-low border border-surface-container text-xs text-on-surface-variant text-left flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-semibold text-on-surface block">Live Delivery Notice</span>
                <p>
                  The application has recorded your submission. Because this starter platform is deployed without a live email API key (e.g., <code>RESEND_API_KEY</code>), messages are logged safely in server logs. You can also contact Muhammad Usama directly at{" "}
                  <a href="mailto:Usssamaa@gmail.com" className="text-primary font-semibold underline">
                    Usssamaa@gmail.com
                  </a>.
                </p>
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={handleReset}
            className="mt-2 px-5 py-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold text-sm rounded-lg transition-colors inline-flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Send Another Message</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {generalError && (
            <div
              className="p-3.5 rounded-xl bg-error-container/20 border border-error/30 text-xs sm:text-sm text-error flex items-start gap-2.5"
              role="alert"
            >
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-error" />
              <span>{generalError}</span>
            </div>
          )}

          {/* Spam Honeypot Field (Visually Hidden) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company_website_hp">Leave this empty</label>
            <input
              id="company_website_hp"
              type="text"
              name="company_website_hp"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact_name" className="block text-xs font-semibold text-on-surface mb-1.5">
                Your Name <span className="text-error">*</span>
              </label>
              <input
                id="contact_name"
                name="name"
                type="text"
                required
                aria-required="true"
                aria-invalid={!!fieldErrors.name}
                aria-describedby={fieldErrors.name ? "name-error" : undefined}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: "" });
                }}
                placeholder="Muhammad Usama"
                className={`w-full bg-surface-container-low text-on-surface text-sm px-3.5 py-2.5 rounded-lg border ${
                  fieldErrors.name ? "border-error ring-1 ring-error" : "border-surface-container"
                } focus:ring-2 focus:ring-primary focus:outline-none transition-all`}
              />
              {fieldErrors.name && (
                <p id="name-error" className="text-xs text-error mt-1" role="alert">
                  {fieldErrors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact_email" className="block text-xs font-semibold text-on-surface mb-1.5">
                Email Address <span className="text-error">*</span>
              </label>
              <input
                id="contact_email"
                name="email"
                type="email"
                required
                aria-required="true"
                aria-invalid={!!fieldErrors.email}
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: "" });
                }}
                placeholder="your.email@example.com"
                className={`w-full bg-surface-container-low text-on-surface text-sm px-3.5 py-2.5 rounded-lg border ${
                  fieldErrors.email ? "border-error ring-1 ring-error" : "border-surface-container"
                } focus:ring-2 focus:ring-primary focus:outline-none transition-all`}
              />
              {fieldErrors.email && (
                <p id="email-error" className="text-xs text-error mt-1" role="alert">
                  {fieldErrors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="contact_subject" className="block text-xs font-semibold text-on-surface mb-1.5">
              Subject <span className="text-error">*</span>
            </label>
            <input
              id="contact_subject"
              name="subject"
              type="text"
              required
              aria-required="true"
              aria-invalid={!!fieldErrors.subject}
              aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
                if (fieldErrors.subject) setFieldErrors({ ...fieldErrors, subject: "" });
              }}
              placeholder="Question about 16:8 calculation or transfer inquiries"
              className={`w-full bg-surface-container-low text-on-surface text-sm px-3.5 py-2.5 rounded-lg border ${
                fieldErrors.subject ? "border-error ring-1 ring-error" : "border-surface-container"
              } focus:ring-2 focus:ring-primary focus:outline-none transition-all`}
            />
            {fieldErrors.subject && (
              <p id="subject-error" className="text-xs text-error mt-1" role="alert">
                {fieldErrors.subject}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact_message" className="block text-xs font-semibold text-on-surface mb-1.5">
              Message <span className="text-error">*</span>
            </label>
            <textarea
              id="contact_message"
              name="message"
              required
              aria-required="true"
              aria-invalid={!!fieldErrors.message}
              aria-describedby={fieldErrors.message ? "message-error" : undefined}
              rows={5}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: "" });
              }}
              placeholder="How can we assist you with FastTrack?"
              className={`w-full bg-surface-container-low text-on-surface text-sm px-3.5 py-2.5 rounded-lg border ${
                fieldErrors.message ? "border-error ring-1 ring-error" : "border-surface-container"
              } focus:ring-2 focus:ring-primary focus:outline-none transition-all`}
            />
            {fieldErrors.message && (
              <p id="message-error" className="text-xs text-error mt-1" role="alert">
                {fieldErrors.message}
              </p>
            )}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-primary text-on-primary font-semibold text-sm rounded-lg hover:bg-primary-container transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-60 active:scale-[0.98]"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Transmitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            <span className="font-label-sm text-[11px] text-on-surface-variant flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
              <span>Direct delivery to site owner: Usssamaa@gmail.com</span>
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
