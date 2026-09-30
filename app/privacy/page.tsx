import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, EyeOff, ServerOff, Mail, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — FastTrack Local-First Data Commitment",
  description:
    "FastTrack privacy policy accurately detailing our local-first calculator architecture, contact form data handling, zero tracking cookies, and owner information.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-10 sm:py-16">
      {/* Page Header */}
      <header className="flex items-start gap-3.5 mb-8">
        <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center flex-shrink-0 shadow-sm mt-1">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <span className="font-label-sm text-xs text-secondary font-bold uppercase tracking-widest">
            Truthful Data Commitment
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl font-bold text-primary tracking-tight mt-1">
            Privacy Policy
          </h1>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2">
            Effective Date: September 2026 • Site Owner: Muhammad Usama
          </p>
        </div>
      </header>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="p-4 bg-surface-container-low rounded-xl border border-surface-container flex flex-col gap-2">
          <ServerOff className="w-5 h-5 text-primary" />
          <span className="font-headline text-sm font-bold text-on-surface">Client-Side Engine</span>
          <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
            All calculator calculations and biometric inputs execute strictly in your browser runtime.
          </p>
        </div>

        <div className="p-4 bg-surface-container-low rounded-xl border border-surface-container flex flex-col gap-2">
          <Lock className="w-5 h-5 text-secondary" />
          <span className="font-headline text-sm font-bold text-on-surface">Zero User Accounts</span>
          <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
            No registration, passwords, logins, or authentication cookies are required or implemented.
          </p>
        </div>

        <div className="p-4 bg-surface-container-low rounded-xl border border-surface-container flex flex-col gap-2">
          <EyeOff className="w-5 h-5 text-on-tertiary-container" />
          <span className="font-headline text-sm font-bold text-on-surface">No Ad Tracking</span>
          <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
            Zero third-party tracking pixels, marketing cookies, or behavioral data brokers.
          </p>
        </div>
      </div>

      <div className="space-y-8 text-on-surface font-body-md text-base leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface">
            1. Fasting Calculator &amp; Biometric Inputs
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
            When you use the FastTrack intermittent fasting calculator, you may select protocols (e.g., 16:8, 14:10, OMAD, 5:2), enter your last meal finish time, and optionally input current weight, goal weight, activity level, or primary fasting focus:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-on-surface-variant">
            <li>
              <strong>100% Client-Side Processing:</strong> All schedule algorithms run entirely inside your browser&apos;s JavaScript environment.
            </li>
            <li>
              <strong>No Remote Storage:</strong> These values are <em>never</em> transmitted to a database, cloud storage bucket, or remote server.
            </li>
            <li>
              <strong>Ephemeral Lifecycle:</strong> If you refresh or close your browser tab, your calculator session inputs are reset.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface">
            2. Browser Storage, Calendar Export &amp; Printing
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
            FastTrack does not store persistent tracking cookies. If you click <strong>Add to Calendar (.ics)</strong> or <strong>Print Fasting Plan</strong>, the calendar file and print stylesheet are generated dynamically in your browser&apos;s local memory using client-side JavaScript Blob APIs. No external file server is queried or notified of your export.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface">
            3. Contact Form &amp; Email Communications
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
            If you voluntarily choose to contact site owner Muhammad Usama through our <Link href="/contact" className="text-primary font-medium hover:underline">Contact Form</Link>, we collect:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-on-surface-variant">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your message subject and text content</li>
          </ul>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mt-2">
            <strong>How We Use Contact Data:</strong> This information is transmitted over encrypted HTTPS to process your inquiry for Muhammad Usama at <code>Usssamaa@gmail.com</code> solely to respond to your specific question, feedback, or inquiry.
          </p>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
            <strong>What We Never Do:</strong> We do not add contact form emails to promotional newsletters, sell contact data to third parties, or share your messages with advertisers.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface">
            4. Cookies &amp; Third-Party Analytics
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-on-surface-variant">
            <li>
              <strong>No Tracking Cookies:</strong> FastTrack does not use persistent cookies for user profiling, retargeting, or advertising.
            </li>
            <li>
              <strong>No Behavioral Analytics:</strong> We do not deploy Google Analytics, Meta Pixel, Hotjar, or similar session recording scripts.
            </li>
            <li>
              <strong>Self-Hosted Typography:</strong> Web fonts are compiled directly into the application at build time via Next.js font optimization, preventing third-party font servers from logging your IP address during font loading.
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface">
            5. Web Hosting &amp; Server Infrastructure Logs
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
            Like standard web applications, our web hosting infrastructure automatically processes standard HTTP request headers (including browser user-agent, operating system, and IP address) strictly for transmission routing, DDoS defense, and infrastructure security. These ephemeral network logs do not contain personal health information and are cycled according to standard host retention cycles.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface">
            6. Data Retention &amp; Security
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
            Because FastTrack does not store calculator inputs or biometrics on servers, there is no personal health database to retain or breach. Contact form correspondence sent to Muhammad Usama is retained within his email inbox only as long as required to assist you or resolve your request.
          </p>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
            All data in transit is protected using modern Transport Layer Security (TLS/HTTPS).
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface">
            7. Children&apos;s Privacy
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
            FastTrack is designed exclusively for healthy adults aged 18 and older. Intermittent fasting is clinically contraindicated for children and growing adolescents. We do not knowingly solicit or collect personal information from individuals under 18 years of age.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-3">
          <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface">
            8. User Rights &amp; Contact Information
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
            If you have submitted a message to us and would like to review, update, or request the deletion of your correspondence, you may contact site owner Muhammad Usama at any time:
          </p>
          <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container text-sm space-y-1">
            <p className="font-semibold text-on-surface">Muhammad Usama — FastTrack Site Owner</p>
            <p className="text-on-surface-variant">
              Email:{" "}
              <a href="mailto:Usssamaa@gmail.com" className="text-primary font-medium hover:underline">
                Usssamaa@gmail.com
              </a>
            </p>
            <p className="text-on-surface-variant">
              Web Contact Form:{" "}
              <Link href="/contact" className="text-primary font-medium hover:underline">
                fasttrackfastingcalculator.com/contact
              </Link>
            </p>
          </div>
        </section>

        {/* Section 9 */}
        <section className="space-y-3">
          <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface">
            9. Changes to This Privacy Policy
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
            If FastTrack introduces new functionality (such as opt-in account syncing or cloud timers in future versions), this policy will be promptly updated before such features become active.
          </p>
        </section>

        <div className="pt-6 border-t border-surface-container flex flex-wrap items-center justify-between gap-4 text-xs text-on-surface-variant">
          <span>Last revised: September 2026</span>
          <div className="flex items-center gap-3">
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/medical-disclaimer" className="hover:text-primary transition-colors">
              Medical Disclaimer
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact Owner
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
