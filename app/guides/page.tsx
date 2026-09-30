import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { GUIDES } from "@/lib/content/guidesData";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Fasting Guides & Evidence-Based Articles",
  description:
    "Explore practical, evidence-informed guides to intermittent fasting: beverages, hunger management, workouts, sleep quality, and healthy refeeding.",
  alternates: {
    canonical: "/guides",
  },
};

export default function GuidesIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10 sm:py-16">
      <div className="max-w-3xl mb-12">
        <span className="font-label-sm text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest flex items-center gap-1.5">
          <BookOpen className="w-4 h-4" />
          <span>Fasting Knowledge Library</span>
        </span>
        <h1 className="font-headline text-3xl sm:text-5xl font-bold text-primary tracking-tight mt-2">
          Intermittent Fasting Guides
        </h1>
        <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mt-3 leading-relaxed">
          Comprehensive, evidence-grounded practical guides designed to help you navigate hunger, hydration, sleep, exercise, and refeeding with scientific clarity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {GUIDES.map((guide) => (
          <article
            key={guide.slug}
            className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container hover:border-surface-container-high shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-xs font-semibold">
                  {guide.category}
                </span>
                <span className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{guide.readTime}</span>
                </span>
              </div>

              <h2 className="font-headline text-xl font-bold text-on-surface hover:text-primary transition-colors leading-snug">
                <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
              </h2>

              <p className="font-body-sm text-sm text-on-surface-variant mt-2 leading-relaxed">
                {guide.shortDescription}
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-surface-container/60">
              <Link
                href={`/guides/${guide.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-container transition-colors"
              >
                <span>Read Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
