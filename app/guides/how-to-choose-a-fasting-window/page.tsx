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
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How to Choose a Fasting Window",
  description:
    "Learn how to choose a fasting window around your meals, work, sleep, exercise, and social schedule. Compare common fasting schedules and build a practical routine with FastTrack.",
  keywords: [
    "how to choose a fasting window",
    "choosing a fasting window",
    "intermittent fasting schedule",
    "fasting window",
    "eating window",
    "fasting schedule",
    "12:12 fasting",
    "14:10 fasting",
    "16:8 fasting",
    "18:6 fasting",
    "20:4 fasting",
    "OMAD",
  ],
  alternates: {
    canonical: "/guides/how-to-choose-a-fasting-window",
  },
  openGraph: {
    title: "How to Choose a Fasting Window | FastTrack",
    description:
      "Learn how to choose a fasting window around your meals, work, sleep, exercise, and social schedule. Compare common fasting schedules and build a practical routine with FastTrack.",
    url: `${getSiteUrl()}/guides/how-to-choose-a-fasting-window`,
    type: "article",
    publishedTime: "2026-10-01",
    modifiedTime: "2026-10-01",
    authors: ["Muhammad Usama"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose a Fasting Window | FastTrack",
    description:
      "Learn how to choose a fasting window around your meals, work, sleep, exercise, and social schedule. Compare common fasting schedules and build a practical routine with FastTrack.",
  },
};

export default function HowToChooseAFastingWindowPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Choose a Fasting Window: A Practical Guide",
    description:
      "Learn how to choose a fasting window around your meals, work, sleep, exercise, and social schedule. Compare common fasting schedules and build a practical routine with FastTrack.",
    author: {
      "@type": "Person",
      name: "Muhammad Usama",
    },
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
    publisher: {
      "@type": "Organization",
      name: "FastTrack",
      url: getSiteUrl(),
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${getSiteUrl()}/guides/how-to-choose-a-fasting-window`,
    },
  };

  return (
    <article className="max-w-4xl mx-auto px-4 md:px-8 py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
            <span>9 min read</span>
          </span>
        </div>

        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight">
          How to Choose a Fasting Window
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
          Choosing a fasting window is less about finding a perfect number and more about finding a schedule that fits the way you actually live.
        </p>
        <p>
          Intermittent fasting uses periods of eating and not eating (see our{" "}
          <Link
            href="/guides/intermittent-fasting-for-beginners"
            className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
          >
            intermittent fasting guide for beginners
          </Link>
          ). In a daily time-restricted schedule, the first number describes the fasting hours and the second describes the eating hours. For example, 16:8 means 16 hours without food followed by an 8-hour eating window.
        </p>
        <p>
          The clock matters because it defines your routine, but there is no single fasting window that everyone has to follow. Your work hours, sleep schedule, usual meal times, exercise, family meals, and ability to repeat the schedule all affect which window makes practical sense.
        </p>
        <p>
          This guide walks through the main options and shows how to choose a fasting window without turning the process into a guessing game.
        </p>
      </div>

      {/* Main Article Body */}
      <div className="space-y-12 text-on-surface font-body-md text-base sm:text-lg leading-relaxed">
        {/* Section 1: What Is a Fasting Window? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Is a Fasting Window?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            A fasting window is the period when you are not eating (during which non-caloric fluids are maintained; see our guide on{" "}
            <Link
              href="/guides/what-can-you-drink-while-fasting"
              className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              what you can drink while fasting
            </Link>
            ). The eating window is the period when you have your meals.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            For a simple daily schedule:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li>
              <strong><Link href="/fasting-methods/12-12" className="text-primary hover:underline">12:12</Link></strong> = 12 hours fasting + 12 hours eating
            </li>
            <li>
              <strong><Link href="/fasting-methods/14-10" className="text-primary hover:underline">14:10</Link></strong> = 14 hours fasting + 10 hours eating (see our <Link href="/guides/14-10-intermittent-fasting-guide" className="text-primary hover:underline">14:10 practical guide</Link>)
            </li>
            <li>
              <strong><Link href="/fasting-methods/16-8" className="text-primary hover:underline">16:8</Link></strong> = 16 hours fasting + 8 hours eating (see our <Link href="/guides/16-8-intermittent-fasting-guide" className="text-primary hover:underline">16:8 practical guide</Link>)
            </li>
            <li>
              <strong><Link href="/fasting-methods/18-6" className="text-primary hover:underline">18:6</Link></strong> = 18 hours fasting + 6 hours eating (see our <Link href="/guides/18-6-intermittent-fasting-guide" className="text-primary hover:underline">18:6 practical guide</Link>)
            </li>
            <li>
              <strong><Link href="/fasting-methods/20-4" className="text-primary hover:underline">20:4</Link></strong> = 20 hours fasting + 4 hours eating
            </li>
            <li>
              <strong><Link href="/fasting-methods/omad" className="text-primary hover:underline">OMAD / 23:1</Link></strong> = approximately 23 hours fasting + 1-hour eating window
            </li>
          </ul>
          <p className="text-on-surface-variant leading-relaxed">
            The same fasting duration can be placed at different times of day. A 16-hour fast could run from 8 PM to noon the next day, or from 6 PM to 10 AM. The duration is the same; the clock schedule is different.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            That distinction is important when choosing a window.
          </p>

          {/* Visual Ratio Comparison Diagram */}
          <div className="my-6 p-4 sm:p-6 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-secondary flex-shrink-0" />
              <span className="font-label-sm text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                Visualizing Common Daily Windows (24-Hour Cycle)
              </span>
            </div>

            <div className="space-y-3">
              {/* 12:12 Bar */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1 text-on-surface-variant">
                  <span>12:12 Circadian</span>
                  <span>12h Fast / 12h Eat</span>
                </div>
                <div className="flex rounded-lg overflow-hidden h-7 border border-surface-container text-[11px] font-bold">
                  <div className="w-1/2 bg-primary text-on-primary flex items-center justify-center">
                    Fast (12h)
                  </div>
                  <div className="w-1/2 bg-tertiary-fixed/40 text-on-tertiary-container flex items-center justify-center border-l border-surface-container">
                    Eat (12h)
                  </div>
                </div>
              </div>

              {/* 14:10 Bar */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1 text-on-surface-variant">
                  <span>14:10 Gentle Reset</span>
                  <span>14h Fast / 10h Eat</span>
                </div>
                <div className="flex rounded-lg overflow-hidden h-7 border border-surface-container text-[11px] font-bold">
                  <div style={{ width: "58.33%" }} className="bg-primary text-on-primary flex items-center justify-center">
                    Fast (14h)
                  </div>
                  <div style={{ width: "41.67%" }} className="bg-tertiary-fixed/40 text-on-tertiary-container flex items-center justify-center border-l border-surface-container">
                    Eat (10h)
                  </div>
                </div>
              </div>

              {/* 16:8 Bar */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1 text-on-surface-variant">
                  <span>16:8 Balanced Standard</span>
                  <span>16h Fast / 8h Eat</span>
                </div>
                <div className="flex rounded-lg overflow-hidden h-7 border border-surface-container text-[11px] font-bold">
                  <div className="w-2/3 bg-primary text-on-primary flex items-center justify-center">
                    Fast (16h)
                  </div>
                  <div className="w-1/3 bg-tertiary-fixed/40 text-on-tertiary-container flex items-center justify-center border-l border-surface-container">
                    Eat (8h)
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-on-surface-variant italic">
              Dark pine represents fasting hours; amber represents the daily eating window.
            </p>
          </div>
        </section>

        {/* Section 2: Compare the Common Fasting Windows */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Compare the Common Fasting Windows
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            There is no requirement to jump directly into a long fasting period. The common schedules mainly differ in how much of the day is available for eating.
          </p>

          {/* Accessible Semantic HTML Comparison Table */}
          <div className="my-6 overflow-x-auto rounded-xl border border-surface-container shadow-sm">
            <table className="w-full text-left text-sm border-collapse bg-surface-container-lowest">
              <caption className="sr-only">
                Comparison of Common Intermittent Fasting Schedules and Hourly Windows
              </caption>
              <thead className="bg-surface-container-low text-on-surface border-b border-surface-container font-headline">
                <tr>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold text-left">
                    Schedule
                  </th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold text-right">
                    Fasting window
                  </th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold text-right">
                    Eating window
                  </th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold text-left">
                    Example
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container font-body-sm text-on-surface-variant">
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">
                    <Link
                      href="/fasting-methods/12-12"
                      className="text-primary hover:underline inline-flex items-center gap-1 font-bold"
                    >
                      <span>12:12</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </th>
                  <td className="p-3.5 sm:p-4 text-right tabular-numbers">12 hours</td>
                  <td className="p-3.5 sm:p-4 text-right tabular-numbers">12 hours</td>
                  <td className="p-3.5 sm:p-4 tabular-numbers">7 AM–7 PM</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">
                    <Link
                      href="/fasting-methods/14-10"
                      className="text-primary hover:underline inline-flex items-center gap-1 font-bold"
                    >
                      <span>14:10</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </th>
                  <td className="p-3.5 sm:p-4 text-right tabular-numbers">14 hours</td>
                  <td className="p-3.5 sm:p-4 text-right tabular-numbers">10 hours</td>
                  <td className="p-3.5 sm:p-4 tabular-numbers">9 AM–7 PM</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors bg-primary/5">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">
                    <Link
                      href="/fasting-methods/16-8"
                      className="text-primary hover:underline inline-flex items-center gap-1 font-bold"
                    >
                      <span>16:8</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary text-on-primary font-normal">
                        Popular
                      </span>
                    </Link>
                  </th>
                  <td className="p-3.5 sm:p-4 text-right font-medium text-on-surface tabular-numbers">16 hours</td>
                  <td className="p-3.5 sm:p-4 text-right font-medium text-on-surface tabular-numbers">8 hours</td>
                  <td className="p-3.5 sm:p-4 font-medium text-on-surface tabular-numbers">12 PM–8 PM</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">
                    <Link
                      href="/fasting-methods/18-6"
                      className="text-primary hover:underline inline-flex items-center gap-1 font-bold"
                    >
                      <span>18:6</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </th>
                  <td className="p-3.5 sm:p-4 text-right tabular-numbers">18 hours</td>
                  <td className="p-3.5 sm:p-4 text-right tabular-numbers">6 hours</td>
                  <td className="p-3.5 sm:p-4 tabular-numbers">12 PM–6 PM</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">
                    <Link
                      href="/fasting-methods/20-4"
                      className="text-primary hover:underline inline-flex items-center gap-1 font-bold"
                    >
                      <span>20:4</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </th>
                  <td className="p-3.5 sm:p-4 text-right tabular-numbers">20 hours</td>
                  <td className="p-3.5 sm:p-4 text-right tabular-numbers">4 hours</td>
                  <td className="p-3.5 sm:p-4 tabular-numbers">1 PM–5 PM</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">
                    <Link
                      href="/fasting-methods/omad"
                      className="text-primary hover:underline inline-flex items-center gap-1 font-bold"
                    >
                      <span>OMAD / 23:1</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </th>
                  <td className="p-3.5 sm:p-4 text-right tabular-numbers">~23 hours</td>
                  <td className="p-3.5 sm:p-4 text-right tabular-numbers">~1 hour</td>
                  <td className="p-3.5 sm:p-4 tabular-numbers">1 PM–2 PM</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-on-surface-variant leading-relaxed">
            These are examples, not mandatory start and end times.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            A longer fasting period also creates a shorter eating period. That can make it harder to fit meals around work, training, family routines, or other daily commitments. A schedule that looks convenient on paper may therefore be inconvenient in real life.
          </p>
        </section>

        {/* Section 3: Start With Your Real Schedule */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Start With Your Real Schedule
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Before choosing a fasting window, look at when you normally eat.
          </p>
          <p className="text-on-surface font-medium leading-relaxed">
            Ask yourself:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li>What time do I usually have my first meal?</li>
            <li>What time do I normally finish dinner?</li>
            <li>Which meal would I least like to move?</li>
            <li>When am I at work or school?</li>
            <li>When do I exercise?</li>
            <li>When do I usually eat with family or friends?</li>
            <li>What time do I normally go to sleep?</li>
          </ul>
          <p className="text-on-surface-variant leading-relaxed">
            Your answers give you a starting point.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            For example, someone who wants to keep a family dinner around 7:30 PM might prefer an eating window that ends around that time. Someone who prefers an early dinner could build the window earlier instead.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            The goal is not to force your day around a fasting timer. It is to place the timer around a routine you can actually follow.
          </p>
        </section>

        {/* Section 4: Decide Which Meal You Want to Keep */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Decide Which Meal You Want to Keep
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              One of the easiest ways to choose a fasting window is to decide which meal matters most to your routine.
            </p>
          </div>

          <div className="space-y-5">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low border border-surface-container space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-primary tracking-tight">
                If breakfast is important
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                You can place the eating window earlier in the day.
              </p>
              <p className="text-on-surface font-semibold tabular-numbers">
                For example, an 8-hour eating window could run from <strong>8 AM to 4 PM</strong>.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                This can work for someone who prefers eating soon after waking and is comfortable finishing dinner earlier.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low border border-surface-container space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-primary tracking-tight">
                If lunch and dinner are more important
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                You might choose a later window.
              </p>
              <p className="text-on-surface font-semibold tabular-numbers">
                For example: <strong>12 PM to 8 PM</strong>
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                This gives you lunch and dinner inside an 8-hour eating window.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low border border-surface-container space-y-3">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-primary tracking-tight">
                If your schedule changes frequently
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                A highly restrictive window may be difficult to maintain. A wider eating window can leave more room for changing work hours, appointments, or social plans.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                The practical question is simple:
              </p>
              <blockquote className="p-4 rounded-lg bg-surface-container border-l-4 border-primary font-headline text-base sm:text-lg font-bold text-primary italic">
                “Can this schedule fit most of my normal days?”
              </blockquote>
              <p className="text-on-surface-variant leading-relaxed">
                If the answer is no, change the timing or consider a less restrictive schedule.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Choose the Fasting Length */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Choose the Fasting Length
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              Once you understand your daily routine, choose the fasting length that matches it.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                <Link href="/fasting-methods/12-12" className="hover:text-primary transition-colors">
                  12:12
                </Link>
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                A 12-hour fast leaves a 12-hour eating window.
              </p>
              <p className="text-on-surface font-semibold tabular-numbers">
                Example: 7 PM → 7 AM
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                <Link href="/fasting-methods/14-10" className="hover:text-primary transition-colors">
                  14:10
                </Link>
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                A 14-hour fast gives you a 10-hour eating window.
              </p>
              <p className="text-on-surface font-semibold tabular-numbers">
                Example: 7 PM → 9 AM
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low border border-primary/20 space-y-2 shadow-sm">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-primary tracking-tight">
                <Link href="/fasting-methods/16-8" className="hover:underline">
                  16:8
                </Link>
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                A 16-hour fast gives you an 8-hour eating window.
              </p>
              <p className="text-on-surface font-semibold tabular-numbers">
                Example: 8 PM → 12 PM
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                This is one of the most commonly discussed forms of time-restricted eating.{" "}
                <a
                  href="https://www.hopkinsmedicine.org/health/wellness-and-prevention/intermittent-fasting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
                >
                  <span>Johns Hopkins Medicine</span>
                  <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
                </a>{" "}
                describes daily approaches such as 16:8 as eating within an eight-hour window and fasting for the remaining 16 hours.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                18:6 and 20:4
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                These schedules leave progressively less time for eating.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                They may fit some people&apos;s routines, but the shorter eating window also means there is less flexibility for meals and social occasions (explore our{" "}
                <Link href="/fasting-methods/18-6" className="text-primary font-semibold hover:underline">
                  18:6 method
                </Link>{" "}
                and{" "}
                <Link href="/fasting-methods/20-4" className="text-primary font-semibold hover:underline">
                  20:4 protocol
                </Link>
                ).
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                <Link href="/fasting-methods/omad" className="hover:text-primary transition-colors">
                  OMAD / 23:1
                </Link>
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                OMAD means &ldquo;one meal a day&rdquo; and is commonly represented as approximately 23 hours fasting and a one-hour eating window.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                This is substantially more restrictive than the other daily schedules in this guide. A longer fast is not automatically a better choice, and{" "}
                <a
                  href="https://www.hopkinsmedicine.org/health/wellness-and-prevention/intermittent-fasting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
                >
                  <span>Johns Hopkins</span>
                  <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
                </a>{" "}
                notes that longer fasting periods are not necessarily better and may carry risks.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Think About Your Sleep Schedule */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Think About Your Sleep Schedule
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Your sleep routine is part of your fasting schedule because a large portion of many daily fasts happens overnight.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Suppose your last meal is at 8 PM and your next meal is at noon. The 16-hour fasting period includes the hours you spend sleeping.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            That can make a schedule easier to follow than trying to place the entire fasting period during your waking hours.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Your eating window also determines when your last meal ends. If eating very late conflicts with your sleep routine, you can move the entire window earlier while keeping the same fasting duration.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Research on time-restricted eating continues to examine whether the timing of an eating window matters independently of its length. A 2025{" "}
            <a
              href="https://www.nia.nih.gov/news/timeframe-8-hour-restricted-eating-irrelevant-weight-loss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>National Institute on Aging summary</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            of a study in adults with obesity reported similar outcomes across three different 8-hour eating-window timings, while noting that the study population and three-month duration limit how broadly the findings should be applied.
          </p>
        </section>

        {/* Section 7: Consider Work, Exercise, and Social Meals */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Consider Work, Exercise, and Social Meals
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              A fasting window is easier to use when it fits your calendar.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low border border-surface-container space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-primary tracking-tight">
                Work or school
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                If your day has a fixed lunch break, consider whether your eating window includes it.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low border border-surface-container space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-primary tracking-tight">
                Exercise
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Think about when you normally train and when you prefer to eat around training. If your schedule makes it difficult to plan meals around exercise, a narrower window may add unnecessary complexity.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low border border-surface-container space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-primary tracking-tight">
                Family and social meals
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Dinner can be an important social meal. If you regularly eat dinner with your family, placing your eating window so that dinner falls outside it may make the schedule difficult to maintain.
              </p>
            </div>
          </div>

          <p className="text-on-surface-variant leading-relaxed">
            This is why two people can choose different clock times while following exactly the same fasting duration.
          </p>
        </section>

        {/* Section 8: Choose a Window You Can Repeat */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Choose a Window You Can Repeat
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            A fasting schedule is a recurring timetable, so consistency matters.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Instead of asking:
          </p>
          <div className="p-3.5 rounded-lg bg-surface-container border border-surface-container-high text-on-surface font-semibold text-center">
            &ldquo;Which fasting window sounds most effective?&rdquo;
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            start with:
          </p>
          <div className="p-3.5 rounded-lg bg-primary/10 border border-primary/20 text-primary font-bold text-center">
            &ldquo;Which fasting window can I realistically repeat?&rdquo;
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            For example, imagine two schedules:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
            <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high space-y-1">
              <span className="font-bold text-on-surface block">Schedule A</span>
              <p className="text-sm text-on-surface-variant">
                16:8, but dinner with family regularly falls outside the eating window.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high space-y-1">
              <span className="font-bold text-on-surface block">Schedule B</span>
              <p className="text-sm text-on-surface-variant">
                14:10, with normal breakfast, lunch, and dinner timing.
              </p>
            </div>
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            The second schedule may fit that person&apos;s routine better even though it has a shorter fasting period.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            There is no need to treat fasting schedules as a competition to reach the longest possible fast.
          </p>
        </section>

        {/* Section 9: How to Calculate Your Exact Fasting Window */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            How to Calculate Your Exact Fasting Window
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Once you choose a fasting duration and a starting time, the rest is simple clock arithmetic.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            For example:
          </p>
          <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low border border-surface-container space-y-2 tabular-numbers">
            <p><strong>Protocol:</strong> 16:8</p>
            <p><strong>First meal:</strong> 12:00 PM</p>
            <p><strong>Eating window:</strong> 12:00 PM–8:00 PM</p>
            <p><strong>Fasting window:</strong> 8:00 PM–12:00 PM the next day</p>
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            Change the first meal to 10:00 AM:
          </p>
          <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low border border-surface-container space-y-2 tabular-numbers">
            <p><strong>Eating window:</strong> 10:00 AM–6:00 PM</p>
            <p><strong>Fasting window:</strong> 6:00 PM–10:00 AM</p>
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            The fasting duration stays 16 hours. Only the clock times move.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            You can use the <strong>FastTrack Fasting Calculator</strong> to select a protocol and starting meal time and get the corresponding fasting and eating windows automatically.
          </p>
          <div className="pt-2">
            <Link
              href="/#calculator"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-semibold text-sm sm:text-base rounded-lg hover:bg-primary-container transition-all shadow-md active:scale-[0.98]"
            >
              <Calculator className="w-4 h-4" />
              <span>Open FastTrack Fasting Calculator →</span>
            </Link>
          </div>
        </section>

        {/* Section 10: When Should You Change Your Fasting Window? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            When Should You Change Your Fasting Window?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Your first schedule does not have to be permanent.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            You may discover that:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-on-surface-variant">
            <li>the eating window starts too late for your normal breakfast;</li>
            <li>the end time conflicts with dinner;</li>
            <li>your work schedule makes the window impractical;</li>
            <li>exercise fits poorly around the schedule;</li>
            <li>or the eating window feels unnecessarily restrictive.</li>
          </ul>
          <p className="text-on-surface-variant leading-relaxed">
            In those cases, adjust the clock times or consider a different fasting-to-eating ratio.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Changing from one schedule to another does not mean you have failed. It simply means the original timetable did not fit your routine.
          </p>
        </section>

        {/* Section 11: What Research Says About Choosing a Window */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Research Says About Choosing a Window
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Research on time-restricted eating is still developing, and studies do not establish one universally optimal schedule for everyone.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            The{" "}
            <a
              href="https://www.nia.nih.gov/news/research-intermittent-fasting-shows-health-benefits"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>National Institute on Aging</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            notes that fasting regimens vary considerably and that researchers are still studying their long-term effects in people.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Recent research has also examined different 8-hour eating-window timings rather than assuming that one clock schedule is universally superior. A 2025{" "}
            <a
              href="https://www.nia.nih.gov/news/timeframe-8-hour-restricted-eating-irrelevant-weight-loss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>NIA summary</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            reported that morning, afternoon, and self-selected 8-hour windows produced weight-loss and cardiometabolic improvements in adults with obesity over three months, with no clear advantage from the timing itself in that study.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            That is one reason a practical approach is useful: choose a schedule that fits your actual day rather than assuming there is one perfect set of clock times.
          </p>
        </section>

        {/* Section 12: A Simple Method for Choosing Your Window */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            A Simple Method for Choosing Your Window
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Use this five-step process:
          </p>
          <ol className="space-y-3 pl-0 sm:pl-2">
            <li className="p-3.5 sm:p-4 rounded-xl bg-surface-container-low border border-surface-container flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                1
              </span>
              <span className="text-on-surface font-medium leading-relaxed">
                <strong>Write down your usual first and last meal times.</strong>
              </span>
            </li>
            <li className="p-3.5 sm:p-4 rounded-xl bg-surface-container-low border border-surface-container flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                2
              </span>
              <span className="text-on-surface font-medium leading-relaxed">
                <strong>Identify the meal you most want to keep.</strong>
              </span>
            </li>
            <li className="p-3.5 sm:p-4 rounded-xl bg-surface-container-low border border-surface-container flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                3
              </span>
              <span className="text-on-surface font-medium leading-relaxed">
                <strong>Check your work, sleep, exercise, and social schedule.</strong>
              </span>
            </li>
            <li className="p-3.5 sm:p-4 rounded-xl bg-surface-container-low border border-surface-container flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                4
              </span>
              <span className="text-on-surface font-medium leading-relaxed">
                <strong>Choose a fasting-to-eating ratio that fits those constraints.</strong>
              </span>
            </li>
            <li className="p-3.5 sm:p-4 rounded-xl bg-surface-container-low border border-surface-container flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                5
              </span>
              <span className="text-on-surface font-medium leading-relaxed">
                <strong>Enter the protocol and starting meal time into FastTrack to calculate the exact clock times.</strong>
              </span>
            </li>
          </ol>
          <p className="text-on-surface-variant leading-relaxed pt-2">
            Start with the schedule that fits your routine rather than choosing a restrictive window simply because it has more fasting hours.
          </p>
        </section>

        {/* Section 13: Frequently Asked Questions */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>What is the best fasting window?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                There is no single fasting window that is best for everyone. The appropriate schedule depends on the routine you are trying to follow, including meal timing, work, sleep, exercise, and social commitments.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Is 16:8 the only fasting schedule?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                No. Common daily schedules include 12:12, 14:10, 16:8, 18:6, 20:4, and OMAD. There are also weekly approaches such as{" "}
                <Link href="/fasting-methods/5-2" className="text-primary font-semibold hover:underline">
                  5:2
                </Link>
                , which do not use the same daily fasting-window structure.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Can I change my fasting window?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Yes. The clock times can be adjusted while keeping the same fasting duration. For example, a 16:8 schedule can be 10 AM–6 PM or 12 PM–8 PM.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Should I choose a longer fasting window?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Longer is not automatically better. A longer fasting period also creates a shorter eating window, which may make the schedule harder to fit around meals and daily activities.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>What if my work schedule changes?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Choose a schedule that works on your normal days and adjust the timing when necessary. If your routine changes frequently, a less restrictive window may provide more flexibility.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Can I calculate my fasting and eating times automatically?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Yes. FastTrack lets you choose a fasting protocol and starting meal time, then calculates the corresponding eating and fasting windows.
              </p>
            </div>
          </div>
        </section>

        {/* Section 14: A Note on Safety */}
        <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container">
          <div className="flex items-center gap-2 mb-1">
            <ShieldAlert className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              A Note on Safety
            </h2>
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            This article is general educational information, not individualized medical advice.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Intermittent fasting is not appropriate for everyone. People who are pregnant or breastfeeding, under 18, have a history of eating disorders, or have certain medical conditions or medications may need individualized guidance before changing their eating pattern.{" "}
            <a
              href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/intermittent-fasting/faq-20441303"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>Mayo Clinic</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            and{" "}
            <a
              href="https://www.niddk.nih.gov/health-information/professionals/diabetes-discoveries-practice/popular-diets-and-patient-support"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>NIDDK</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            both emphasize that fasting can require additional consideration in some health situations.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If you have a medical condition or take medication that could be affected by changes in meal timing, discuss fasting with your healthcare professional before starting.
          </p>
        </section>

        {/* Section 15: Key Takeaways */}
        <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Key Takeaways
          </h2>
          <ul className="space-y-2.5 pl-2">
            <li className="flex items-start gap-2.5 text-on-surface-variant text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
              <span>A fasting window is the period when you do not eat; the eating window is the period when you have your meals.</span>
            </li>
            <li className="flex items-start gap-2.5 text-on-surface-variant text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
              <span>Common daily schedules include 12:12, 14:10, 16:8, 18:6, 20:4, and OMAD.</span>
            </li>
            <li className="flex items-start gap-2.5 text-on-surface-variant text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
              <span>The same fasting duration can be placed at different times of day.</span>
            </li>
            <li className="flex items-start gap-2.5 text-on-surface-variant text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
              <span>Your work, sleep, exercise, family meals, and social schedule can all affect which window is practical.</span>
            </li>
            <li className="flex items-start gap-2.5 text-on-surface-variant text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
              <span>A longer fasting period is not automatically a better choice.</span>
            </li>
            <li className="flex items-start gap-2.5 text-on-surface-variant text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
              <span>Once you choose a protocol and starting meal time, FastTrack can calculate the exact clock times for your schedule.</span>
            </li>
          </ul>

          <div className="pt-6 border-t border-surface-container mt-4">
            <p className="text-on-surface font-semibold text-base sm:text-lg mb-4">
              Ready to build your schedule? Use the{" "}
              <Link href="/#calculator" className="text-primary hover:underline">
                FastTrack Fasting Calculator
              </Link>{" "}
              to choose a protocol and calculate your fasting and eating windows.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/#calculator"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-semibold text-sm rounded-lg hover:bg-primary-container transition-all shadow-md"
              >
                <Calculator className="w-4 h-4" />
                <span>Calculate Your Window</span>
              </Link>
              <Link
                href="/fasting-methods"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface-container text-on-surface font-semibold text-sm rounded-lg hover:bg-surface-container-high transition-colors"
              >
                <Compass className="w-4 h-4" />
                <span>Browse All Fasting Methods</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Navigation */}
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
