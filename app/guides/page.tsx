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

      {/* Advanced Reference & Evidence Guides */}
      <section className="mt-16 pt-12 border-t border-surface-container">
        <div className="max-w-3xl mb-8">
          <span className="font-label-sm text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest block mb-1">
            Advanced Reference &amp; Evidence
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Specialized Fasting Guides &amp; Protocols
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
            Evidence-grounded master guides covering cellular fasting stages, micronutrient balance, alternate-day protocols, and plateau troubleshooting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container shadow-sm flex flex-col justify-between">
            <div>
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-xs font-semibold inline-block mb-3">
                Physiology &amp; Timeline
              </span>
              <h3 className="font-headline text-xl font-bold text-on-surface hover:text-primary transition-colors leading-snug">
                <Link href="/fasting-stages">The 4 Real Stages of Intermittent Fasting</Link>
              </h3>
              <p className="font-body-sm text-sm text-on-surface-variant mt-2 leading-relaxed">
                A physiology-first breakdown of what happens hour by hour: fed state, post-absorptive phase, metabolic switch, and extended fasting, separating clinical evidence from internet autophagy hype.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-surface-container/60">
              <Link
                href="/fasting-stages"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-container transition-colors"
              >
                <span>Read Full Stage Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container shadow-sm flex flex-col justify-between">
            <div>
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-xs font-semibold inline-block mb-3">
                Hydration &amp; Minerals
              </span>
              <h3 className="font-headline text-xl font-bold text-on-surface hover:text-primary transition-colors leading-snug">
                <Link href="/electrolytes-while-fasting">Electrolytes While Fasting: Complete Guide</Link>
              </h3>
              <p className="font-body-sm text-sm text-on-surface-variant mt-2 leading-relaxed">
                Understand natriuresis of fasting, daily sodium, potassium, and magnesium DRI baselines, who actually needs supplementation, and how to spot safe commercial options.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-surface-container/60">
              <Link
                href="/electrolytes-while-fasting"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-container transition-colors"
              >
                <span>Read Electrolyte Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container shadow-sm flex flex-col justify-between">
            <div>
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-xs font-semibold inline-block mb-3">
                Advanced Protocols
              </span>
              <h3 className="font-headline text-xl font-bold text-on-surface hover:text-primary transition-colors leading-snug">
                <Link href="/alternate-day-fasting">Alternate-Day Fasting (ADF): Complete Guide</Link>
              </h3>
              <p className="font-body-sm text-sm text-on-surface-variant mt-2 leading-relaxed">
                Complete vs modified (500 kcal) ADF schedules, comparison with 5:2 and 16:8, randomized clinical trial weight loss and dropout data, and fasting-day meal structures.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-surface-container/60">
              <Link
                href="/alternate-day-fasting"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-container transition-colors"
              >
                <span>Read ADF Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container shadow-sm flex flex-col justify-between">
            <div>
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-xs font-semibold inline-block mb-3">
                Weight Loss &amp; Metabolism
              </span>
              <h3 className="font-headline text-xl font-bold text-on-surface hover:text-primary transition-colors leading-snug">
                <Link href="/intermittent-fasting-plateau">Intermittent Fasting Plateau: Causes &amp; Fixes</Link>
              </h3>
              <p className="font-body-sm text-sm text-on-surface-variant mt-2 leading-relaxed">
                Why fasting weight loss stops: metabolic adaptation vs starvation mode myth, NEAT decline, calorie creeping, water retention, and a 3-step diagnostic framework.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-surface-container/60">
              <Link
                href="/intermittent-fasting-plateau"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-container transition-colors"
              >
                <span>Read Plateau Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
