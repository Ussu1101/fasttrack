import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/config/site";
import EatStopEatScheduleTool from "@/components/tools/EatStopEatScheduleTool";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  Activity,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  ShieldAlert,
  ArrowRight,
  AlertTriangle,
  Utensils,
  Hourglass,
  Scale,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Eat Stop Eat: How the 24-Hour Fast Works, Schedule and Who Should Avoid It",
  description:
    "An evidence-informed guide to the Eat Stop Eat method: how a dinner-to-dinner 24-hour fast works, example weekly schedules, refeeding guidelines, benefits, limitations, and safety contraindications.",
  keywords: [
    "eat stop eat",
    "24 hour fast once a week",
    "eat stop eat schedule",
    "24-hour fasting benefits",
    "dinner to dinner fast",
    "24 hour intermittent fasting",
  ],
  alternates: {
    canonical: "/fasting-methods/eat-stop-eat",
  },
  openGraph: {
    title: "Eat Stop Eat: How the 24-Hour Fast Works, Schedule and Who Should Avoid It | FastTrack",
    description:
      "An evidence-informed guide to the Eat Stop Eat method: how a dinner-to-dinner 24-hour fast works, example weekly schedules, refeeding guidelines, benefits, limitations, and safety contraindications.",
    url: `${getSiteUrl()}/fasting-methods/eat-stop-eat`,
    type: "article",
    publishedTime: "2026-10-05",
    modifiedTime: "2026-10-05",
    authors: ["Muhammad Usama"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eat Stop Eat: How the 24-Hour Fast Works, Schedule and Who Should Avoid It | FastTrack",
    description:
      "Discover how a 24-hour dinner-to-dinner fast works in practice. Compare Eat Stop Eat against 5:2 and ADF, explore weekly scheduling, and review essential safety boundaries.",
  },
};

const FAQS = [
  {
    question: "What does Eat Stop Eat mean?",
    answer:
      "Eat Stop Eat is a widely recognized term for an intermittent fasting approach based on incorporating one or two non-consecutive 24-hour fasts into a normal week of eating. Rather than restricting calories every day or counting hours in a condensed daily window, practitioners eat normally on most days and take a full 24-hour break from food once or twice per week.",
  },
  {
    question: "Is a dinner-to-dinner fast really 24 hours?",
    answer:
      "Yes. A dinner-to-dinner fast spans exactly 24 contiguous hours. For example, if you finish Monday dinner at 7:00 PM and take your next bite at Tuesday dinner at 7:00 PM, exactly 24 hours have elapsed without caloric intake. Because you eat a meal on Monday evening and another meal on Tuesday evening, you do not go an entire calendar day without food, but you achieve a full 24-hour digestive pause.",
  },
  {
    question: "How often is this method used in example schedules?",
    answer:
      "In illustrative schedules, a 24-hour fast is typically performed once or twice per week. Beginners are strongly encouraged to start with no more than one 24-hour fast per week to assess tolerance, hunger management, and sleep stability. If two weekly fasts are scheduled, they should always be separated by at least 48 to 72 hours of normal, balanced nourishment.",
  },
  {
    question: "What should I eat after a 24-hour fast?",
    answer:
      "When concluding a 24-hour fast, you should eat a normal, balanced, satisfying meal rather than a compensatory feast. Focus on high-quality proteins (fish, poultry, eggs, or tofu), cooked vegetables, and complex carbohydrates. Avoid ultra-processed foods, high-sugar snacks, or excessive quantities, which can cause acute gastrointestinal cramping and rapid glucose spikes.",
  },
  {
    question: "Is a 24-hour fast suitable for beginners?",
    answer:
      "Generally, no. A continuous 24-hour fast is an advanced intermittent fasting format that imposes significant metabolic and psychological demands. Complete beginners should start with gentle daily schedules such as 12:12 or 14:10, progress to 16:8, and only evaluate a full 24-hour fasting interval after building consistent metabolic flexibility.",
  },
  {
    question: "How does this method compare with 5:2 and alternate-day fasting?",
    answer:
      "Eat Stop Eat involves a complete zero-calorie 24-hour fast once or twice weekly. In contrast, the 5:2 method permits a 500- to 600-calorie allowance on two weekly fasting days, while alternate-day fasting (ADF) requires fasting every other day (3 to 4 times per week). Eat Stop Eat offers fewer fasting days per week than ADF, but requires complete caloric abstention unlike modified 5:2.",
  },
];

export default function EatStopEatPage() {
  const siteUrl = getSiteUrl();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Eat Stop Eat: How the 24-Hour Fast Works, Schedule and Who Should Avoid It",
    description:
      "An evidence-informed guide to the Eat Stop Eat method: how a dinner-to-dinner 24-hour fast works, example weekly schedules, refeeding guidelines, benefits, limitations, and safety contraindications.",
    author: {
      "@type": "Person",
      name: "Muhammad Usama",
    },
    datePublished: "2026-10-05",
    dateModified: "2026-10-05",
    publisher: {
      "@type": "Organization",
      name: "FastTrack",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/fasting-methods/eat-stop-eat`,
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
        name: "Fasting Methods",
        item: `${siteUrl}/fasting-methods`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Eat Stop Eat",
        item: `${siteUrl}/fasting-methods/eat-stop-eat`,
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

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Eat Stop Eat 24-Hour Schedule Generator",
    url: `${siteUrl}/fasting-methods/eat-stop-eat#schedule-tool`,
    applicationCategory: "HealthApplication",
    operatingSystem: "All",
    description:
      "Interactive 24-hour fasting schedule tool for modeling dinner-to-dinner intervals, weekly fast day selection, and refeeding meal coordination.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <article className="max-w-4xl mx-auto px-4 md:px-8 py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />

      {/* Back Link */}
      <div className="mb-6">
        <Link
          href="/fasting-methods"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-container transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Fasting Methods</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-8 pb-8 border-b border-surface-container">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-xs font-semibold">
            Periodic 24-Hour Protocol
          </span>
          <span className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>12 min read</span>
          </span>
        </div>

        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight">
          Eat Stop Eat: How the 24-Hour Fast Works, Schedule and Who Should Avoid It
        </h1>

        <div className="flex flex-wrap items-center gap-4 mt-4 text-xs sm:text-sm text-on-surface-variant">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-primary" />
            <span>By Muhammad Usama</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-primary" />
            <span>Published: October 5, 2026</span>
          </div>
        </div>
      </header>

      {/* Editorial Content */}
      <div className="space-y-10 sm:space-y-12">
        {/* Lead Summary */}
        <section className="space-y-4 font-body-lg text-base sm:text-lg text-on-surface leading-relaxed p-5 sm:p-6 bg-surface-container-low/60 rounded-2xl border border-surface-container">
          <p>
            Among the various models of intermittent fasting, the 24-hour periodic fast—frequently referred to by the popular title <strong>Eat Stop Eat</strong>—represents one of the most structurally distinct protocols. Rather than shrinking your eating window into an 8-hour block every single day, this approach involves eating normally throughout the week and introducing a full 24-hour pause from calories once or twice weekly.
          </p>
          <p>
            The signature characteristic of this method is its practical scheduling: by fasting from dinner on one day to dinner on the next, you achieve a continuous 24-hour metabolic fast while still eating a meal on every calendar day.
          </p>
          <p>
            However, extending a fast to 24 contiguous hours imposes substantial physiological demands. This guide explains how the schedule works in practice, provides an interactive calculator to model your intervals, evaluates the scientific evidence around periodic fasting, and highlights who should avoid this advanced method.
          </p>
        </section>

        {/* Section: Interactive 24-Hour Schedule Tool */}
        <section className="space-y-4">
          <div>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Interactive 24-Hour Fasting Schedule Tool
            </h2>
            <p className="text-on-surface-variant leading-relaxed mt-2">
              Model your 24-hour fasting interval below. Select your anchor meal (such as dinner-to-dinner or lunch-to-lunch), set the exact completion time of your pre-fast meal, and examine how the 24-hour window maps onto your weekly calendar.
            </p>
          </div>

          <EatStopEatScheduleTool />
        </section>

        {/* Section A: What is the Eat Stop Eat Approach? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What is the Eat Stop Eat Approach?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            &ldquo;Eat Stop Eat&rdquo; is a generic popular descriptor originally coined in nutritional literature to describe periodic, whole-day fasting intervals. Unlike daily time-restricted eating patterns like 16:8 or 14:10, Eat Stop Eat does not impose hourly eating clocks on normal days. Instead, it relies on a weekly rhythm:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-5 rounded-2xl bg-surface-container border border-surface-container-high space-y-2">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">The Standard Principle</span>
              <h3 className="font-headline text-base sm:text-lg font-bold text-on-surface">
                Ordinary Eating on Non-Fast Days
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                On five or six days of the week, you eat according to natural biological hunger cues without rigid timing rules, strict macronutrient formulas, or complicated calorie tracking.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container border border-surface-container-high space-y-2">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider">The Fasting Interval</span>
              <h3 className="font-headline text-base sm:text-lg font-bold text-on-surface">
                Complete 24-Hour Caloric Pause
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                On one (or at most two) designated non-consecutive days, you pause all caloric intake for 24 hours straight, consuming only plain water, black coffee, or unsweetened tea.
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-on-surface-variant pt-2">
            <em>Disclaimer:</em> &ldquo;Eat Stop Eat&rdquo; is referenced here solely as an established educational concept. This guide does not represent an endorsement of, affiliation with, or proprietary partnership with any commercial author, book publisher, or branded program.
          </p>
        </section>

        {/* Section B: How a Dinner-to-Dinner 24-Hour Fast Works */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            How a Dinner-to-Dinner 24-Hour Fast Works in Practice
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            The phrase &ldquo;24-hour fast&rdquo; sounds intimidating to many people because they imagine going an entire calendar day without touching food from midnight to midnight. In practice, the Eat Stop Eat schedule is organized across parts of two consecutive calendar days:
          </p>

          <div className="p-5 sm:p-6 rounded-2xl bg-surface-container border border-surface-container-high space-y-4">
            <h3 className="font-headline text-lg font-bold text-on-surface">
              Step-by-Step Chronology of a Dinner-to-Dinner Fast
            </h3>
            <div className="space-y-3 text-sm text-on-surface-variant">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <div>
                  <strong className="text-on-surface block">Monday, 7:00 PM — The Starting Meal:</strong>
                  <span>You eat a satisfying, balanced dinner. At 7:00 PM, your meal concludes and your 24-hour timer begins. You drink water in the evening and go to bed normally.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <div>
                  <strong className="text-on-surface block">Tuesday Morning (Hour 12):</strong>
                  <span>You wake up having completed 12 hours of overnight fasting. You skip breakfast, hydrate with water or black coffee, and carry on with morning activities.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                <div>
                  <strong className="text-on-surface block">Tuesday Midday (Hour 17):</strong>
                  <span>You skip lunch. You stay hydrated and manage transient hunger waves using water, sparkling water, or plain green tea.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                <div>
                  <strong className="text-on-surface block">Tuesday, 7:00 PM (Hour 24) — The Refeeding Meal:</strong>
                  <span>Exactly 24 hours have elapsed. You sit down to a normal, well-portioned Tuesday dinner with family or friends. Your fast is complete.</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-on-surface-variant leading-relaxed">
            The psychological advantage of this structure is evident: you consume a meal on Monday, and you consume a meal on Tuesday. You never experience a calendar day where you do not eat dinner.
          </p>
        </section>

        {/* Section C: Example Weekly Schedule */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Example Weekly Schedule: Structuring 1x or 2x Weekly Fasts
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            How does this fit into a 7-day routine? Below is an illustrative schedule demonstrating how a single weekly 24-hour fast integrates into normal life without disrupting weekend social commitments:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-surface-container shadow-sm">
            <table className="w-full text-left text-sm text-on-surface-variant">
              <thead className="bg-surface-container text-on-surface font-headline text-xs sm:text-sm uppercase tracking-wider">
                <tr>
                  <th scope="col" className="p-3.5 sm:p-4">Day of Week</th>
                  <th scope="col" className="p-3.5 sm:p-4">Breakfast</th>
                  <th scope="col" className="p-3.5 sm:p-4">Lunch</th>
                  <th scope="col" className="p-3.5 sm:p-4">Dinner</th>
                  <th scope="col" className="p-3.5 sm:p-4">Fasting Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container/60 font-body-sm">
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-on-surface">Monday</td>
                  <td className="p-3.5 sm:p-4">Normal</td>
                  <td className="p-3.5 sm:p-4">Normal</td>
                  <td className="p-3.5 sm:p-4 font-medium text-primary">Normal Dinner (Fast begins at 7:00 PM)</td>
                  <td className="p-3.5 sm:p-4">Fasting begins post-dinner</td>
                </tr>
                <tr className="bg-primary/5 hover:bg-primary/10 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-primary">Tuesday</td>
                  <td className="p-3.5 sm:p-4 text-on-surface-variant">Fasted (Water / Coffee)</td>
                  <td className="p-3.5 sm:p-4 text-on-surface-variant">Fasted (Water / Tea)</td>
                  <td className="p-3.5 sm:p-4 font-bold text-primary">Normal Dinner at 7:00 PM (Fast Ends)</td>
                  <td className="p-3.5 sm:p-4 font-semibold text-primary">24h Fast Concludes</td>
                </tr>
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-on-surface">Wednesday</td>
                  <td className="p-3.5 sm:p-4">Normal</td>
                  <td className="p-3.5 sm:p-4">Normal</td>
                  <td className="p-3.5 sm:p-4">Normal</td>
                  <td className="p-3.5 sm:p-4 text-secondary font-medium">Regular Feeding</td>
                </tr>
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-on-surface">Thursday</td>
                  <td className="p-3.5 sm:p-4">Normal</td>
                  <td className="p-3.5 sm:p-4">Normal</td>
                  <td className="p-3.5 sm:p-4">Normal</td>
                  <td className="p-3.5 sm:p-4 text-secondary font-medium">Regular Feeding</td>
                </tr>
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-on-surface">Friday</td>
                  <td className="p-3.5 sm:p-4">Normal</td>
                  <td className="p-3.5 sm:p-4">Normal</td>
                  <td className="p-3.5 sm:p-4">Social / Family Dinner</td>
                  <td className="p-3.5 sm:p-4 text-secondary font-medium">Regular Feeding</td>
                </tr>
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-on-surface">Saturday &amp; Sunday</td>
                  <td className="p-3.5 sm:p-4">Normal / Brunch</td>
                  <td className="p-3.5 sm:p-4">Normal</td>
                  <td className="p-3.5 sm:p-4">Normal</td>
                  <td className="p-3.5 sm:p-4 text-secondary font-medium">Regular Feeding (Zero Fasting)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-on-surface-variant">
            If scheduling two 24-hour fasts per week, practitioners commonly choose Monday and Thursday evenings. Consecutive 24-hour fasts should never be attempted.
          </p>
        </section>

        {/* Section D: What to Eat After the Fast */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Refeeding: What to Eat When Your 24-Hour Fast Concludes
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            The single most common mistake in 24-hour fasting is treating the end of the fast as permission to consume an uncontrolled, oversized feast. Refeeding mindfully is essential for digestive comfort and metabolic stability.
          </p>

          <div className="space-y-3 p-5 sm:p-6 rounded-2xl bg-surface-container border border-surface-container-high text-sm sm:text-base text-on-surface-variant leading-relaxed">
            <h3 className="font-headline text-base font-bold text-on-surface mb-1">
              Core Principles for Breaking a 24-Hour Fast:
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <strong>Eat a normal portion size:</strong> Serve yourself the exact portion of dinner you would ordinarily eat on a non-fasting day. Do not double the serving size to &ldquo;make up&rdquo; for skipped meals.
              </li>
              <li>
                <strong>Prioritize lean protein and cooked vegetables:</strong> High-quality proteins (salmon, poultry, eggs, tempeh) and easily digestible vegetables (steamed zucchini, carrots, spinach) provide sustained amino acids without stressing gastrointestinal motility.
              </li>
              <li>
                <strong>Avoid ultra-processed and greasy foods:</strong> Consuming heavily battered, deep-fried dishes or sugary desserts on an empty digestive tract frequently results in severe bloating, stomach cramps, and rapid rebound hunger.
              </li>
              <li>
                <strong>Chew thoroughly and pace your meal:</strong> Take at least 20 minutes to finish your dinner to allow satiety hormones (leptin and peptide YY) to register before reaching for second servings.
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/guides/how-to-break-a-fast"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
              >
                <span>Read our complete guide on how to break an intermittent fast correctly</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section E: Potential Benefits and Limitations */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Potential Benefits and Inherent Limitations
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            When evaluating 24-hour fasting, it is vital to separate verified energy-balance mechanisms from unproven metabolic claims:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
            <div className="p-5 rounded-2xl bg-surface-container border border-surface-container-high space-y-2.5">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Potential Benefits</span>
              <ul className="space-y-2 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Weekly Caloric Deficit:</strong> Skipping two meals once weekly produces an automatic 15% to 20% weekly deficit without requiring daily meal logging.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Daily Flexibility:</strong> Preserves normal social dining 5 or 6 days per week, fitting well for people who dislike observing daily hourly clocks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Extended Digestive Rest:</strong> Allows 24 hours of continuous gastrointestinal pause and low circulating insulin levels.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container border border-surface-container-high space-y-2.5">
              <span className="text-xs font-bold text-error uppercase tracking-wider">Known Limitations</span>
              <ul className="space-y-2 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-error flex-shrink-0 mt-0.5" />
                  <span><strong>Intense Hunger Waves:</strong> Fasting for 24 hours challenges psychological discipline far more than a 16-hour overnight fast.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-error flex-shrink-0 mt-0.5" />
                  <span><strong>Compensatory Overeating Risk:</strong> Practitioners often inadvertently binge at the concluding meal, erasing the intended energy deficit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-error flex-shrink-0 mt-0.5" />
                  <span><strong>Workout Timing Conflicts:</strong> High-intensity resistance or cardio training during hours 18–24 can lead to acute lethargy and lightheadedness.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section F: Who Should Avoid It / Safety Boundaries */}
        <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container">
          <div className="flex items-center gap-2 mb-1">
            <ShieldAlert className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Who Should Avoid 24-Hour Fasting?
            </h2>
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            A continuous 24-hour fast is a more demanding intervention than shorter daily fasting windows and may not be appropriate for everyone. Individuals in the following groups should exercise particular caution and seek professional guidance:
          </p>

          <div className="space-y-2.5 pt-1 text-sm sm:text-base text-on-surface-variant">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Current or past history of disordered eating:</strong> Prolonged fasting intervals can trigger or exacerbate restrictive eating patterns, cycles of binge eating, or heightened food anxiety. A structured 24-hour fast may be inappropriate for anyone with an active or previous eating disorder.
              </li>
              <li>
                <strong>Diabetes and medication:</strong> Extended fasting can increase the risk of hypoglycemia, though specific risks vary depending on your particular medication regimen and individual health profile. Anyone managing diabetes must never change, delay, or skip medications without direct guidance from their healthcare provider.
              </li>
              <li>
                <strong>Pregnancy and breastfeeding:</strong> Nutritional and caloric requirements increase substantially during pregnancy and lactation to support fetal development and milk production. Prolonged fasting intervals may be unsuitable during these stages without qualified professional guidance.
              </li>
              <li>
                <strong>Children and adolescents:</strong> Younger individuals have distinct, growth-related nutritional needs. Structured, restrictive fasting routines that eliminate full meals are generally inappropriate without qualified medical supervision.
              </li>
              <li>
                <strong>Underlying medical conditions:</strong> Chronic health conditions such as advanced kidney disease, gout, active liver disease, or adrenal insufficiency can affect how your body manages hydration, electrolyte shifts, and uric acid clearance during extended fasting. A personal medical evaluation is recommended before attempting multi-hour fasts.
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high text-xs sm:text-sm text-on-surface-variant mt-2 flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-error flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p>
                <strong>Listen to your body and recognize warning signs:</strong> If you experience persistent dizziness, severe weakness, confusion, fainting, or heart palpitations, stop fasting immediately.
              </p>
              <p className="text-on-surface-variant/90">
                While mild discomfort may improve with fluids or light nourishment, severe, worsening, or urgent symptoms require prompt professional medical attention.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-on-surface-variant pt-2 border-t border-surface-container/60">
            For additional educational and health information, review our{" "}
            <Link href="/medical-disclaimer" className="text-primary font-semibold underline">
              Medical Disclaimer
            </Link>
            .
          </p>
        </section>

        {/* Section G: Comparison Table: Eat Stop Eat vs 5:2 vs ADF */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Comparison Matrix: Eat Stop Eat vs 5:2 vs Alternate-Day Fasting
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Comparing the three major periodic intermittent fasting paradigms side by side helps clarify their differing lifestyle demands:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-surface-container shadow-sm">
            <table className="w-full text-left text-sm text-on-surface-variant">
              <thead className="bg-surface-container text-on-surface font-headline text-xs sm:text-sm uppercase tracking-wider">
                <tr>
                  <th scope="col" className="p-3.5 sm:p-4">Dimension</th>
                  <th scope="col" className="p-3.5 sm:p-4">Eat Stop Eat (24-Hour)</th>
                  <th scope="col" className="p-3.5 sm:p-4">5:2 Weekly Protocol</th>
                  <th scope="col" className="p-3.5 sm:p-4">Alternate-Day Fasting (ADF)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container/60 font-body-sm">
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Weekly Cadence</th>
                  <td className="p-3.5 sm:p-4 font-medium text-primary">1 or 2 non-consecutive fasts/wk</td>
                  <td className="p-3.5 sm:p-4">2 non-consecutive days/wk</td>
                  <td className="p-3.5 sm:p-4">Every other day (3 to 4 fasts/wk)</td>
                </tr>
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Fast Window Duration</th>
                  <td className="p-3.5 sm:p-4">Strict 24 consecutive hours</td>
                  <td className="p-3.5 sm:p-4">Full calendar day with meal allowance</td>
                  <td className="p-3.5 sm:p-4">36 continuous hours (strict) or ~500 kcal</td>
                </tr>
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Calorie Intake on Fast Day</th>
                  <td className="p-3.5 sm:p-4 font-bold text-primary">0 kcal during the 24 hours</td>
                  <td className="p-3.5 sm:p-4 text-secondary font-bold">~500–600 kcal allowed</td>
                  <td className="p-3.5 sm:p-4">0 kcal (strict) or ~500 kcal (modified)</td>
                </tr>
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Daily Meal Occurrence</th>
                  <td className="p-3.5 sm:p-4 text-secondary font-medium">Meal eaten on EVERY calendar day</td>
                  <td className="p-3.5 sm:p-4">Small meals eaten on fast days</td>
                  <td className="p-3.5 sm:p-4 text-error font-medium">Zero food on fast days (strict)</td>
                </tr>
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Adherence Challenge</th>
                  <td className="p-3.5 sm:p-4">Moderate-High (managing 24h hunger)</td>
                  <td className="p-3.5 sm:p-4 text-secondary font-medium">Moderate (500 kcal eases hunger)</td>
                  <td className="p-3.5 sm:p-4 text-error font-medium">Very High (constant 48h rotation)</td>
                </tr>
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Related Resources</th>
                  <td className="p-3.5 sm:p-4 font-semibold text-primary">Current Guide</td>
                  <td className="p-3.5 sm:p-4">
                    <Link href="/fasting-methods/5-2" className="text-primary font-semibold underline">
                      5:2 Weekly Guide
                    </Link>
                  </td>
                  <td className="p-3.5 sm:p-4">
                    <Link href="/alternate-day-fasting" className="text-primary font-semibold underline">
                      ADF Clinical Guide
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section H: FAQ Section */}
        <section className="space-y-6">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
                <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Next Steps CTA */}
        <section className="p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container space-y-4">
          <h2 className="font-headline text-2xl font-bold text-primary tracking-tight">
            Explore All Intermittent Fasting Protocols
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Not sure if 24-hour fasting fits your lifestyle? Explore our comprehensive directory of daily time-restricted feeding and periodic fasting schedules.
          </p>
          <div className="pt-2">
            <Link
              href="/fasting-methods"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary font-semibold shadow-sm hover:bg-primary/90 transition-colors"
            >
              <span>Browse All Fasting Methods</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
