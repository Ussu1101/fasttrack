import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/config/site";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  ArrowRight,
  Calculator,
  Compass,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Intermittent Fasting for Beginners: A Simple Guide",
  description:
    "Learn how intermittent fasting works, understand fasting and eating windows, compare common fasting schedules, and calculate a schedule that fits your routine.",
  alternates: {
    canonical: "/guides/intermittent-fasting-for-beginners",
  },
  openGraph: {
    title: "Intermittent Fasting for Beginners: A Simple Guide | FastTrack",
    description:
      "Learn how intermittent fasting works, understand fasting and eating windows, compare common fasting schedules, and calculate a schedule that fits your routine.",
    url: `${getSiteUrl()}/guides/intermittent-fasting-for-beginners`,
    type: "article",
    publishedTime: "2026-10-01",
    modifiedTime: "2026-10-01",
    authors: ["Muhammad Usama"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intermittent Fasting for Beginners: A Simple Guide",
    description:
      "Learn how intermittent fasting works, understand fasting and eating windows, compare common fasting schedules, and calculate a schedule that fits your routine.",
  },
};

const FAQS = [
  {
    question: "What is the easiest fasting schedule to understand?",
    answer:
      "Daily time-based schedules such as 12:12, 14:10, and 16:8 are straightforward because the same fasting and eating windows repeat each day.",
  },
  {
    question: "What is a fasting window?",
    answer:
      "A fasting window is the period in your schedule when you are not eating.",
  },
  {
    question: "What is an eating window?",
    answer:
      "An eating window is the planned period during which your meals and other food intake occur.",
  },
  {
    question: "Can the same fasting schedule have different start times?",
    answer:
      "Yes. A 16:8 schedule can start at different times while keeping the same 16-hour fasting and 8-hour eating durations.",
  },
  {
    question: "Is intermittent fasting the same as calorie restriction?",
    answer:
      "No. They describe different concepts. Intermittent fasting primarily organizes when food is consumed, while calorie restriction focuses on reducing overall calorie intake.",
  },
  {
    question: "Is intermittent fasting suitable for everyone?",
    answer:
      "Not necessarily. Intermittent fasting is not appropriate for everyone, and individual circumstances can matter. When appropriate, consider discussing it with a healthcare professional.",
  },
];

export default function IntermittentFastingForBeginnersPage() {
  const siteUrl = getSiteUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Intermittent Fasting for Beginners: A Simple Guide",
    description:
      "Learn how intermittent fasting works, understand fasting and eating windows, compare common fasting schedules, and calculate a schedule that fits your routine.",
    author: {
      "@type": "Person",
      name: "Muhammad Usama",
    },
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
    publisher: {
      "@type": "Organization",
      name: "FastTrack",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/guides/intermittent-fasting-for-beginners`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guides",
        item: `${siteUrl}/guides`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Intermittent Fasting for Beginners",
        item: `${siteUrl}/guides/intermittent-fasting-for-beginners`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <article className="max-w-4xl mx-auto px-4 md:px-8 py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Back Link */}
      <div className="mb-6">
        <Link
          href="/guides"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-container transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Guides</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-8 pb-8 border-b border-surface-container">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-xs font-semibold">
            Best Practices
          </span>
          <span className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>8 min read</span>
          </span>
        </div>

        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight">
          Intermittent Fasting for Beginners
        </h1>

        <div className="flex flex-wrap items-center gap-4 mt-4 text-xs sm:text-sm text-on-surface-variant">
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-primary" />
            <span>Muhammad Usama</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-secondary" />
            <span>Published October 1, 2026</span>
          </span>
        </div>
      </header>

      {/* Lead Paragraphs */}
      <div className="space-y-4 font-body-lg text-base sm:text-lg text-on-surface leading-relaxed mb-10 p-5 sm:p-6 bg-surface-container-low/60 rounded-2xl border border-surface-container">
        <p>
          Intermittent fasting is an eating pattern that alternates between periods when you eat and periods when you do not eat. Unlike many diets, the main focus is <strong>when you eat</strong>, rather than following one specific list of foods.
        </p>
        <p>
          For beginners, the hardest part is often understanding the basic terms: <strong>fasting window, eating window, fasting schedule, and <Link href="/fasting-methods" className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors">fasting method</Link></strong>. Once those are clear, setting up a schedule becomes much simpler.
        </p>
        <p>
          This guide explains how intermittent fasting works as a scheduling approach, the common methods you may come across, and how to choose a schedule that fits your routine.
        </p>
      </div>

      {/* Main Article Body */}
      <div className="space-y-12 text-on-surface font-body-md text-base sm:text-lg leading-relaxed">
        {/* Section 1: What Is Intermittent Fasting? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Is Intermittent Fasting?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Intermittent fasting is a pattern of alternating between eating periods and fasting periods.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            One common form is{" "}
            <a
              href="https://www.nia.nih.gov/news/research-intermittent-fasting-shows-health-benefits"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>time-restricted eating</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>
            , where food is consumed within a set number of hours each day and the remaining hours make up the fasting period. Other approaches use different schedules, such as alternate-day fasting or the 5:2 pattern.
          </p>
          <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high text-center">
            <span className="font-headline text-base sm:text-lg font-bold text-primary tracking-tight">
              Fasting window → Eating window → Fasting window → repeat
            </span>
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            For example, someone following a 16:8 schedule might have:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-on-surface-variant">
            <li>
              <strong>16 hours of fasting</strong>
            </li>
            <li>
              <strong>8 hours of eating</strong>
            </li>
          </ul>
          <p className="text-on-surface-variant leading-relaxed">
            The exact clock times depend on when the person&apos;s eating window begins and ends.
          </p>
        </section>

        {/* Section 2: How Do Fasting and Eating Windows Work? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            How Do Fasting and Eating Windows Work?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Two terms are important when building an intermittent fasting schedule.
          </p>

          <div className="space-y-3 pl-0 sm:pl-2">
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-on-surface tracking-tight">
              Fasting window
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              The <strong>fasting window</strong> is the period between the end of one eating period and the beginning of the next.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              For example, if your last meal ends at 8:00 PM and your next eating period begins at 12:00 PM the following day, the fasting window runs from 8:00 PM to 12:00 PM.
            </p>
          </div>

          <div className="space-y-3 pl-0 sm:pl-2">
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-on-surface tracking-tight">
              Eating window
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              The <strong>eating window</strong> is the period during which your planned meals and snacks fit into your daily schedule.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              In a 16:8 pattern, the eating window lasts 8 hours while the remaining 16 hours make up the fasting period.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Thinking in terms of windows can make an intermittent fasting schedule much easier to understand than thinking only in terms of individual meals.
            </p>
          </div>

          {/* Educational Visual Timeline Diagram */}
          <div className="my-6 p-4 sm:p-6 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-secondary flex-shrink-0" />
              <span className="font-label-sm text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                Visualizing Daily Windows (16:8 Example)
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-12 rounded-xl overflow-hidden border border-surface-container text-xs sm:text-sm font-semibold">
              <div className="sm:col-span-8 bg-primary text-on-primary p-3.5 flex flex-col justify-between">
                <span className="font-label-sm text-[11px] uppercase tracking-wider opacity-80">
                  Fasting Window (16 Hours)
                </span>
                <span className="font-headline text-base sm:text-lg font-bold mt-1 tabular-numbers">
                  8:00 PM → 12:00 PM (Next Day)
                </span>
                <span className="font-body-sm text-[11px] opacity-80 mt-1">
                  Water, black coffee, and unsweetened tea
                </span>
              </div>
              <div className="sm:col-span-4 bg-tertiary-fixed/40 text-on-tertiary-container p-3.5 flex flex-col justify-between border-t sm:border-t-0 sm:border-l border-surface-container">
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-tertiary-container font-bold">
                  Eating Window (8 Hours)
                </span>
                <span className="font-headline text-base sm:text-lg font-bold mt-1 tabular-numbers text-on-tertiary-container">
                  12:00 PM → 8:00 PM
                </span>
                <span className="font-body-sm text-[11px] text-tertiary-container mt-1">
                  Planned balanced nourishment
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Common Intermittent Fasting Schedules */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Common Intermittent Fasting Schedules
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              There is no single intermittent fasting schedule used by everyone. Different methods divide the day or week in different ways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 12:12 */}
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high flex flex-col justify-between space-y-3">
              <div>
                <h3 className="font-headline text-xl font-bold text-on-surface tracking-tight">
                  <Link href="/fasting-methods/12-12" className="hover:text-primary transition-colors">
                    12:12
                  </Link>
                </h3>
                <p className="text-on-surface-variant text-sm sm:text-base mt-2">
                  A <strong>12:12 schedule</strong> divides the day into:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-on-surface-variant text-sm">
                  <li>12 hours fasting</li>
                  <li>12 hours eating</li>
                </ul>
                <p className="text-on-surface-variant text-sm mt-3">
                  This creates an even daily schedule and can be easy to visualize.
                </p>
              </div>
              <div className="pt-2 border-t border-surface-container-high/60">
                <Link
                  href="/fasting-methods/12-12"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Explore 12:12 Method</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 14:10 */}
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high flex flex-col justify-between space-y-3">
              <div>
                <h3 className="font-headline text-xl font-bold text-on-surface tracking-tight">
                  <Link href="/fasting-methods/14-10" className="hover:text-primary transition-colors">
                    14:10
                  </Link>
                </h3>
                <p className="text-on-surface-variant text-sm sm:text-base mt-2">
                  A <strong>14:10 schedule</strong> uses:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-on-surface-variant text-sm">
                  <li>14 hours fasting</li>
                  <li>10 hours eating</li>
                </ul>
                <p className="text-on-surface-variant text-sm mt-3">
                  It provides a longer fasting window while keeping a relatively broad eating period.
                </p>
              </div>
              <div className="pt-2 border-t border-surface-container-high/60">
                <Link
                  href="/fasting-methods/14-10"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Explore 14:10 Method</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 16:8 */}
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low border border-primary/20 shadow-sm flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-headline text-xl font-bold text-primary tracking-tight">
                    <Link href="/fasting-methods/16-8" className="hover:underline">
                      16:8
                    </Link>
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary text-on-primary">
                    Most Popular
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm sm:text-base mt-2">
                  The <strong>16:8 intermittent fasting</strong> schedule consists of:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-on-surface-variant text-sm">
                  <li>16 hours fasting</li>
                  <li>8 hours eating</li>
                </ul>
                <p className="text-on-surface-variant text-sm mt-3">
                  For example, an eating window from 12:00 PM to 8:00 PM would be followed by a fasting window from 8:00 PM until 12:00 PM the next day.
                </p>
              </div>
              <div className="pt-2 border-t border-surface-container/60">
                <Link
                  href="/fasting-methods/16-8"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Explore 16:8 Method</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 18:6 */}
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high flex flex-col justify-between space-y-3">
              <div>
                <h3 className="font-headline text-xl font-bold text-on-surface tracking-tight">
                  <Link href="/fasting-methods/18-6" className="hover:text-primary transition-colors">
                    18:6
                  </Link>
                </h3>
                <p className="text-on-surface-variant text-sm sm:text-base mt-2">
                  An <strong>18:6 schedule</strong> divides the day into:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-on-surface-variant text-sm">
                  <li>18 hours fasting</li>
                  <li>6 hours eating</li>
                </ul>
                <p className="text-on-surface-variant text-sm mt-3">
                  The eating period is shorter than in a 16:8 schedule, so the clock times should be planned carefully around your normal routine.
                </p>
              </div>
              <div className="pt-2 border-t border-surface-container-high/60">
                <Link
                  href="/fasting-methods/18-6"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Explore 18:6 Method</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 20:4 */}
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high flex flex-col justify-between space-y-3">
              <div>
                <h3 className="font-headline text-xl font-bold text-on-surface tracking-tight">
                  <Link href="/fasting-methods/20-4" className="hover:text-primary transition-colors">
                    20:4
                  </Link>
                </h3>
                <p className="text-on-surface-variant text-sm sm:text-base mt-2">
                  A <strong>20:4 schedule</strong> provides:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-on-surface-variant text-sm">
                  <li>20 hours fasting</li>
                  <li>4 hours eating</li>
                </ul>
                <p className="text-on-surface-variant text-sm mt-3">
                  This is a substantially narrower eating window than 16:8 or 18:6.
                </p>
              </div>
              <div className="pt-2 border-t border-surface-container-high/60">
                <Link
                  href="/fasting-methods/20-4"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Explore 20:4 Method</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* OMAD */}
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high flex flex-col justify-between space-y-3">
              <div>
                <h3 className="font-headline text-xl font-bold text-on-surface tracking-tight">
                  <Link href="/fasting-methods/omad" className="hover:text-primary transition-colors">
                    OMAD
                  </Link>
                </h3>
                <p className="text-on-surface-variant text-sm sm:text-base mt-2">
                  <strong>OMAD</strong>, short for <strong>one meal a day</strong>, is a different way of structuring a daily fasting schedule around one main meal.
                </p>
                <p className="text-on-surface-variant text-sm mt-3">
                  The exact timing can vary, but the basic concept is that the day&apos;s food intake is concentrated into a single eating period.
                </p>
              </div>
              <div className="pt-2 border-t border-surface-container-high/60">
                <Link
                  href="/fasting-methods/omad"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Explore OMAD Method</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* 5:2 */}
          <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-3">
            <h3 className="font-headline text-xl font-bold text-on-surface tracking-tight">
              <Link href="/fasting-methods/5-2" className="hover:text-primary transition-colors">
                5:2
              </Link>
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              The <strong>5:2 pattern</strong> works differently from daily time-restricted schedules.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Instead of assigning the same fasting window to every day, the pattern divides the week into five regular eating days and two days with restricted calorie intake.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Because it is a weekly pattern, it should not be calculated in the same way as a 16:8 or 18:6 daily schedule.
            </p>
            <div className="pt-2">
              <Link
                href="/fasting-methods/5-2"
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
              >
                <span>Explore 5:2 Weekly Pattern</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 4: How to Start Intermittent Fasting */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              How to Start Intermittent Fasting
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              If you are new to intermittent fasting, start by understanding the schedule rather than trying to make it complicated.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low border border-surface-container space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-primary tracking-tight flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center flex-shrink-0">
                  1
                </span>
                <span>Choose a fasting method</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-8">
                First decide which type of schedule you want to understand or try.
              </p>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-8">
                For a daily schedule, this could be 12:12, 14:10, 16:8, 18:6, or another time-based method.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low border border-surface-container space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-primary tracking-tight flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center flex-shrink-0">
                  2
                </span>
                <span>Pick your fasting start time</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-8">
                Your fasting window normally begins when your eating period ends.
              </p>
              <p className="text-on-surface-variant text-sm sm:text-base font-semibold text-on-surface leading-relaxed pl-8">
                For example: Last meal ends at 8:00 PM → fasting begins at 8:00 PM
              </p>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-8">
                This is why your normal dinner time can be useful when planning a schedule.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low border border-surface-container space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-primary tracking-tight flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center flex-shrink-0">
                  3
                </span>
                <span>Calculate the next eating time</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-8">
                Add the chosen fasting duration to your fasting start time.
              </p>
              <p className="text-on-surface-variant text-sm sm:text-base font-semibold text-on-surface leading-relaxed pl-8">
                For a 16-hour fast beginning at 8:00 PM: 8:00 PM + 16 hours = 12:00 PM the next day
              </p>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-8">
                Your eating window would then begin at 12:00 PM.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low border border-surface-container space-y-3">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-primary tracking-tight flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center flex-shrink-0">
                  4
                </span>
                <span>Consider your normal routine</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-8">
                A schedule is easier to understand when it fits around your usual day.
              </p>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-8 font-medium">
                Consider:
              </p>
              <ul className="list-disc pl-14 space-y-1 text-on-surface-variant text-sm sm:text-base">
                <li>your normal breakfast and dinner times</li>
                <li>work or school hours</li>
                <li>sleep schedule</li>
                <li>social meals</li>
                <li>weekends</li>
                <li>your preferred meal timing</li>
              </ul>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-8 pt-2">
                The goal of a calculator is to handle the time arithmetic for you, so you can focus on the schedule itself.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: How to Choose a Fasting Window */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            How to Choose a Fasting Window
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            There is no universal clock time that everyone needs to use.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Two people can follow the same fasting method while using different clock times.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            For example, both schedules below are 16:8:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <span className="font-headline text-base font-bold text-primary block">
                Schedule A
              </span>
              <p className="font-body-sm text-sm sm:text-base text-on-surface tabular-numbers">
                12:00 PM → 8:00 PM eating
              </p>
              <p className="font-body-sm text-sm sm:text-base text-on-surface-variant tabular-numbers">
                8:00 PM → 12:00 PM fasting
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <span className="font-headline text-base font-bold text-primary block">
                Schedule B
              </span>
              <p className="font-body-sm text-sm sm:text-base text-on-surface tabular-numbers">
                10:00 AM → 6:00 PM eating
              </p>
              <p className="font-body-sm text-sm sm:text-base text-on-surface-variant tabular-numbers">
                6:00 PM → 10:00 AM fasting
              </p>
            </div>
          </div>

          <p className="text-on-surface-variant leading-relaxed">
            The duration is the same; only the clock times change.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            This is why a fasting schedule should be considered in terms of <strong>duration and timing</strong>, rather than simply copying someone else&apos;s meal times. For step-by-step guidance on structuring your daily schedule around work, sleep, and social commitments, read our complete guide on{" "}
            <Link
              href="/guides/how-to-choose-a-fasting-window"
              className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              how to choose a fasting window
            </Link>
            .
          </p>
        </section>

        {/* Section 6: What Can You Drink During a Fast? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Can You Drink During a Fast?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Questions about drinks are common when people begin learning about intermittent fasting.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Water is commonly used during fasting periods. Some guidance also discusses calorie-free drinks such as plain tea or black coffee when describing time-restricted eating.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            However, the exact rules people use can vary depending on the fasting approach and the purpose of the fast.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            For specific questions such as whether a particular drink or ingredient fits within a fasting period, it is better to look at the ingredients and the rules of the fasting method rather than assuming every drink is treated identically.
          </p>
          <div className="pt-1">
            <Link
              href="/guides/what-can-you-drink-while-fasting"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              <span>Read our detailed fasting beverages guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Section 7: Does Intermittent Fasting Mean You Cannot Eat Every Day? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Does Intermittent Fasting Mean You Cannot Eat Every Day?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            No.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Many popular forms of intermittent fasting are <strong>daily schedules</strong> in which the fasting and eating windows repeat each day.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            For example, a 16:8 schedule can involve eating every day during an 8-hour window and fasting during the remaining 16 hours.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Other methods, such as 5:2 and alternate-day fasting, use different patterns across the week.
          </p>
        </section>

        {/* Section 8: How Can a Fasting Calculator Help? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            How Can a Fasting Calculator Help?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            A fasting calculator is mainly a scheduling tool.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Instead of manually calculating when a fasting period ends, you can enter your fasting method and starting time and let the calculator determine the corresponding eating and fasting windows.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            For example:
          </p>
          <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low border border-surface-container space-y-2">
            <span className="font-headline text-base font-bold text-primary block">
              16:8 + 8:00 PM fasting start
            </span>
            <p className="text-on-surface-variant text-sm sm:text-base">
              produces:
            </p>
            <p className="font-semibold text-on-surface text-sm sm:text-base tabular-numbers">
              <strong>Fasting:</strong> 8:00 PM → 12:00 PM
            </p>
            <p className="font-semibold text-on-surface text-sm sm:text-base tabular-numbers">
              <strong>Eating:</strong> 12:00 PM → 8:00 PM
            </p>
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            FastTrack&apos;s calculator is designed around this type of time calculation.
          </p>
          <div className="pt-2">
            <Link
              href="/#calculator"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-semibold text-sm sm:text-base rounded-lg hover:bg-primary-container transition-all shadow-md active:scale-[0.98]"
            >
              <Calculator className="w-4 h-4" />
              <span>Calculate your fasting schedule →</span>
            </Link>
          </div>
        </section>

        {/* Section 9: Common Beginner Questions */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Common Beginner Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>What is the easiest fasting schedule to understand?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Daily time-based schedules such as 12:12, 14:10, and 16:8 are straightforward because the same fasting and eating windows repeat each day.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>What is a fasting window?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                A fasting window is the period in your schedule when you are not eating.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>What is an eating window?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                An eating window is the planned period during which your meals and other food intake occur.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Can the same fasting schedule have different start times?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Yes. A 16:8 schedule can start at different times while keeping the same 16-hour fasting and 8-hour eating durations.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Is intermittent fasting the same as calorie restriction?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                No. They describe different concepts. Intermittent fasting primarily organizes <strong>when</strong> food is consumed, while calorie restriction focuses on reducing overall calorie intake.
              </p>
              <div className="pl-7 pt-1">
                <a
                  href="https://www.nia.nih.gov/news/calorie-restriction-and-fasting-diets-what-do-we-know"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Learn more about calorie restriction vs. fasting at NIH/NIA</span>
                  <ExternalLink className="w-3 h-3 flex-shrink-0" />
                </a>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Is intermittent fasting suitable for everyone?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Not necessarily. Intermittent fasting is not appropriate for everyone, and individual circumstances can matter. When appropriate, consider discussing it with a healthcare professional.
              </p>
              <div className="pl-7 pt-1">
                <a
                  href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/intermittent-fasting/faq-20441303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Review clinical precautions &amp; suitability at Mayo Clinic</span>
                  <ExternalLink className="w-3 h-3 flex-shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Key Takeaways */}
        <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Key Takeaways
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Intermittent fasting is primarily a way of organizing <strong>eating and fasting periods</strong>.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            The basic concepts are simple:
          </p>
          <ul className="space-y-2 pl-2">
            <li className="flex items-start gap-2 text-on-surface-variant text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
              <span><strong>Fasting window</strong> = time without eating</span>
            </li>
            <li className="flex items-start gap-2 text-on-surface-variant text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
              <span><strong>Eating window</strong> = planned period for eating</span>
            </li>
            <li className="flex items-start gap-2 text-on-surface-variant text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
              <span><strong>Fasting schedule</strong> = the timing pattern that connects the two</span>
            </li>
            <li className="flex items-start gap-2 text-on-surface-variant text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
              <span><strong>Fasting method</strong> = the particular structure, such as 16:8 or 5:2</span>
            </li>
          </ul>
          <p className="text-on-surface-variant leading-relaxed pt-2">
            Daily schedules such as 12:12, 14:10, 16:8, 18:6, and 20:4 use fixed daily fasting and eating durations, while methods such as 5:2 use a weekly structure.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            The research around intermittent fasting continues to develop, particularly regarding long-term effects, so it is useful to separate the <strong>schedule itself</strong> from claims about specific health outcomes.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If you want to calculate a specific fasting and eating window, use the <strong><Link href="/#calculator" className="text-primary font-semibold hover:underline">FastTrack Fasting Calculator</Link></strong> to turn your chosen method and start time into a daily schedule.
          </p>
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <Link
              href="/#calculator"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-semibold text-sm rounded-lg hover:bg-primary-container transition-all shadow-md"
            >
              <Calculator className="w-4 h-4" />
              <span>Open FastTrack Calculator</span>
            </Link>
            <Link
              href="/fasting-methods"
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface-container text-on-surface font-semibold text-sm rounded-lg hover:bg-surface-container-high transition-colors"
            >
              <Compass className="w-4 h-4" />
              <span>Browse All Fasting Methods</span>
            </Link>
          </div>
        </section>
      </div>

      {/* Footer Navigation CTA */}
      <div className="mt-12 pt-8 border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/#calculator"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-on-primary font-semibold text-sm rounded-lg hover:bg-primary-container transition-all shadow-md"
        >
          Calculate Your Schedule Now
        </Link>
        <Link
          href="/guides"
          className="text-sm font-semibold text-on-surface-variant hover:text-on-surface transition-colors"
        >
          Browse All Guides →
        </Link>
      </div>
    </article>
  );
}
