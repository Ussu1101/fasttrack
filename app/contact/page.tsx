import React from "react";
import type { Metadata } from "next";
import { Mail, User, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact FastTrack — Site Owner & Support Inquiries",
  description:
    "Get in touch with FastTrack site owner Muhammad Usama for questions regarding the fasting calculator, calculation methodology, or platform inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-10 sm:py-16">
      {/* Page Header */}
      <header className="max-w-2xl mb-8">
        <span className="font-label-sm text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest flex items-center gap-1.5">
          <Mail className="w-4 h-4" />
          <span>Support &amp; Owner Inquiries</span>
        </span>
        <h1 className="font-headline text-3xl sm:text-5xl font-bold text-primary tracking-tight mt-2">
          Contact FastTrack
        </h1>
        <p className="font-body-md text-base sm:text-lg text-on-surface-variant mt-3 leading-relaxed">
          Have questions about the FastTrack calculation engine, educational content, or platform feedback? Send a message directly to site owner Muhammad Usama.
        </p>
      </header>

      {/* Trust & Contact Information Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low border border-surface-container flex items-start gap-3">
          <User className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-label-sm text-xs font-bold text-on-surface block uppercase tracking-wider">
              Site Owner &amp; Contact Person
            </span>
            <span className="font-headline text-sm font-semibold text-on-surface mt-0.5 block">
              Muhammad Usama
            </span>
            <span className="font-body-sm text-xs text-on-surface-variant mt-0.5 block">
              Independent Platform Developer
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low border border-surface-container flex items-start gap-3">
          <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-label-sm text-xs font-bold text-on-surface block uppercase tracking-wider">
              Direct Inquiries Email
            </span>
            <a
              href="mailto:Usssamaa@gmail.com"
              className="font-headline text-sm font-semibold text-primary hover:underline mt-0.5 block"
            >
              Usssamaa@gmail.com
            </a>
            <span className="font-body-sm text-xs text-on-surface-variant mt-0.5 block">
              Standard response within 1–2 business days
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Form Component */}
      <ContactForm />

      {/* Privacy Notice */}
      <div className="mt-8 p-4 rounded-xl bg-surface-container-low/50 border border-surface-container flex items-start gap-2.5 text-xs text-on-surface-variant">
        <ShieldCheck className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
        <p>
          Information submitted through this form is used strictly to respond to your specific inquiry. FastTrack never sells, brokers, or utilizes contact information for marketing lists. Review our full{" "}
          <a href="/privacy" className="text-primary font-medium hover:underline">
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  );
}
