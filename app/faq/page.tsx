import React from "react";
import type { Metadata } from "next";
import { FaqSection } from "@/components/home/FaqSection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) — Fasting Answers",
  description:
    "Evidence-based answers to common intermittent fasting questions: coffee, bone broth, electrolytes, muscle loss, workouts, and breaking a fast safely.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  return (
    <div className="w-full py-8">
      <FaqSection headingLevel="h1" />
    </div>
  );
}
