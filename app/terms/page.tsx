import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions of use for the FastTrack website and calculation utility.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-10 sm:py-16">
      <h1 className="font-headline text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-6">
        Terms of Service
      </h1>

      <div className="space-y-6 text-on-surface font-body-md text-base sm:text-lg leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-headline text-xl font-bold text-on-surface">1. Acceptance of Terms</h2>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
            By accessing and utilizing the FastTrack website and calculator tools, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service and our Medical Disclaimer.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-headline text-xl font-bold text-on-surface">2. Educational Utility</h2>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
            FastTrack is provided as a self-directed scheduling calculator for healthy adults. We do not provide clinical treatment, dietetics consultation, or medical evaluation. You assume all personal responsibility for your nutritional and health choices.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-headline text-xl font-bold text-on-surface">3. Intellectual Property & Transferability</h2>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
            All code, calculation engines, and original educational articles published on FastTrack are the proprietary work of FastTrack and its licensors.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-headline text-xl font-bold text-on-surface">4. Limitation of Liability</h2>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
            Under no circumstances shall FastTrack or its contributors be liable for any direct, indirect, incidental, or consequential health issues or damages arising from the use or inability to use this platform. Always consult a physician before beginning any dietary fasting intervention.
          </p>
        </section>

        <p className="text-xs text-on-surface-variant pt-6 border-t border-surface-container">
          Last revised: September 2026.
        </p>
      </div>
    </div>
  );
}
