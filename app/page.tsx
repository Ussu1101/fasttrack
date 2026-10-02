import React from "react";
import { Hero } from "@/components/home/Hero";
import { Calculator } from "@/components/calculator/Calculator";
import { ProtocolGrid } from "@/components/protocol-cards/ProtocolGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FastingScience } from "@/components/home/FastingScience";
import { ActionableTips } from "@/components/home/ActionableTips";
import { SafetyNotice } from "@/components/home/SafetyNotice";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FastTrack — Intermittent Fasting Calculator & Planner",
  description:
    "Free, private intermittent fasting calculator. Calculate personalized 16:8, 14:10, 18:6, 20:4, OMAD, and 5:2 fasting schedules without an account.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full pb-12">
      {/* 1. Hero Section with Circadian showcase */}
      <Hero />

      {/* 2. Main Fasting Calculator & Real-Time Dashboard */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 sm:py-12 w-full">
        <Calculator initialProtocolId="16-8" initialLastMealTime="20:00" />
      </section>

      {/* 3. Fasting Protocols Matrix */}
      <ProtocolGrid />

      {/* 4. How It Works Step-by-Step */}
      <HowItWorks />

      {/* 5. Fasting Education & Cellular Biology */}
      <FastingScience />

      {/* 6. Practical Everyday Tips */}
      <ActionableTips />

      {/* 7. Clinical Safety & Medical Notice */}
      <SafetyNotice />

      {/* 8. Frequently Asked Questions */}
      <FaqSection />

      {/* 9. Final Call to Action */}
      <FinalCta />
    </div>
  );
}
