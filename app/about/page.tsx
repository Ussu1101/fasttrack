import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Sparkles, ShieldCheck, HeartHandshake, Mail, User, AlertCircle, ArrowRight } from "lucide-react";
import { getSiteUrl } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "About FastTrack — Independent Fasting Platform",
  description:
    "Learn about FastTrack, an independent, private intermittent fasting schedule calculator founded and maintained by Muhammad Usama.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const siteUrl = getSiteUrl();

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${siteUrl}/about#webpage`,
    "url": `${siteUrl}/about`,
    "name": "About FastTrack — Independent Fasting Platform",
    "description":
      "Learn about FastTrack, an independent, private intermittent fasting schedule calculator founded and maintained by Muhammad Usama.",
    "mainEntity": {
      "@type": "Person",
      "name": "Muhammad Usama",
      "jobTitle": "Independent Software Developer & Platform Creator",
      "email": "mailto:Usssamaa@gmail.com",
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      {/* Page Header */}
      <header className="max-w-2xl mb-10">
        <span className="font-label-sm text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest flex items-center gap-1.5">
          <Compass className="w-4 h-4" />
          <span>Independent Educational Platform</span>
        </span>
        <h1 className="font-headline text-3xl sm:text-5xl font-bold text-primary tracking-tight mt-2">
          About FastTrack
        </h1>
        <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mt-4 leading-relaxed">
          FastTrack is an independent intermittent fasting schedule builder and educational resource designed to calculate clean, circadian-aligned fasting and eating windows without invasive tracking or subscriptions.
        </p>
      </header>

      <div className="space-y-8 text-on-surface font-body-md text-base leading-relaxed">
        {/* Core Mission Section */}
        <section className="p-6 sm:p-8 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-4">
          <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-secondary" />
            <span>Why FastTrack Was Built</span>
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Many contemporary wellness applications rely on forced account creation, mandatory subscriptions, push notifications, and invasive data harvesting. FastTrack was created as a quiet, functional alternative: a fast, local-first web utility that does one job cleanly—calculating your daily fasting intervals and visualizing your circadian rhythm.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            All calculator logic executes purely inside your web browser. Your meal times, optional biometrics, and preferred protocols remain strictly on your own device.
          </p>
        </section>

        {/* What FastTrack Is & Is NOT */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 rounded-xl bg-surface-container-low border border-surface-container flex flex-col justify-between">
            <div className="space-y-3">
              <span className="font-label-sm text-xs font-bold uppercase tracking-wider text-primary">
                What We Provide
              </span>
              <h3 className="font-headline text-lg font-bold text-on-surface">
                Mathematical Timing &amp; Science Context
              </h3>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Precise calculation of 12:12, 14:10, 16:8, 18:6, 20:4, OMAD, and 5:2 schedules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Interactive 24-hour circadian horizon and circular progress indicators.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Educational articles detailing consensus physiological and hydration principles.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-surface-container-low border border-surface-container flex flex-col justify-between">
            <div className="space-y-3">
              <span className="font-label-sm text-xs font-bold uppercase tracking-wider text-error">
                What We Do NOT Provide
              </span>
              <h3 className="font-headline text-lg font-bold text-on-surface">
                Non-Clinical Positioning
              </h3>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-error mt-2 flex-shrink-0" />
                  <span>No personalized medical diagnoses, prescriptions, or clinical treatments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-error mt-2 flex-shrink-0" />
                  <span>No proprietary claims or clinical promises of guaranteed weight loss.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-error mt-2 flex-shrink-0" />
                  <span>FastTrack does not replace professional medical supervision or dietetic care.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Owner & Authorship Information */}
        <section className="p-6 sm:p-8 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface">
              Ownership &amp; Editorial Transparency
            </h2>
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            FastTrack is owned, developed, and maintained by <strong>Muhammad Usama</strong> as an independent web application and educational fasting project.
          </p>
          <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container text-sm text-on-surface-variant space-y-2">
            <p>
              <strong>Clear Credential Statement:</strong> Muhammad Usama is an independent software developer and site owner. He does not hold medical qualifications, clinical certifications, or institutional research affiliations.
            </p>
            <p>
              The educational materials published across FastTrack synthesize publicly accessible peer-reviewed research in circadian chronobiology, nutritional biochemistry, and time-restricted feeding for general informational literacy.
            </p>
          </div>
          <div className="pt-2 flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center gap-1.5 text-on-surface font-semibold">
              <Mail className="w-4 h-4 text-primary" />
              <span>Contact Person: Muhammad Usama</span>
            </span>
            <a
              href="mailto:Usssamaa@gmail.com"
              className="text-primary hover:underline font-medium"
            >
              Usssamaa@gmail.com
            </a>
          </div>
        </section>

        {/* Safety Reminder */}
        <section className="p-5 rounded-xl bg-surface-container-low border border-surface-container flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-on-surface-variant space-y-1">
            <p className="font-semibold text-on-surface">Medical Consultation Recommended</p>
            <p>
              Intermittent fasting is strictly intended for healthy adults. Anyone who is pregnant, nursing, under 18, has a history of disordered eating, or takes prescription medications (especially for diabetes or hypertension) must speak with their licensed physician before modifying their meal schedule. Review our full{" "}
              <Link href="/medical-disclaimer" className="text-primary font-medium hover:underline">
                Medical Disclaimer
              </Link>.
            </p>
          </div>
        </section>

        {/* Internal Navigation Links */}
        <div className="pt-6 border-t border-surface-container flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#calculator"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-semibold text-sm rounded-lg hover:bg-primary-container transition-all shadow-sm"
          >
            <span>Launch FastTrack Calculator</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-4 text-sm font-semibold text-on-surface-variant">
            <Link href="/fasting-methods" className="hover:text-primary transition-colors">
              Fasting Methods
            </Link>
            <span>•</span>
            <Link href="/guides" className="hover:text-primary transition-colors">
              Educational Guides
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
