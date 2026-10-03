import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/config/site";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  HelpCircle,
  Sparkles,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  CalendarDays,
  Coffee,
  Scale,
  Activity,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "16:8 Intermittent Fasting: A Practical Guide",
  description:
    "Learn how 16:8 fasting works, explore realistic schedule options, compare fasting windows, and build a sustainable routine that fits your life.",
  keywords: [
    "16:8 intermittent fasting",
    "16 8 fasting guide",
    "16 8 fasting schedule",
    "how to do 16 8 fasting",
    "16 8 eating window",
    "16 hour fast",
    "intermittent fasting 16 8",
    "time-restricted eating 16 8",
  ],
  alternates: {
    canonical: "/guides/16-8-intermittent-fasting-guide",
  },
  openGraph: {
    title: "16:8 Intermittent Fasting: A Practical Guide | FastTrack",
    description:
      "Learn how 16:8 fasting works, explore realistic schedule options, compare fasting windows, and build a sustainable routine that fits your life.",
    url: `${getSiteUrl()}/guides/16-8-intermittent-fasting-guide`,
    type: "article",
    publishedTime: "2026-10-04",
    modifiedTime: "2026-10-04",
    authors: ["Muhammad Usama"],
  },
  twitter: {
    card: "summary_large_image",
    title: "16:8 Intermittent Fasting: A Practical Guide | FastTrack",
    description:
      "Learn how 16:8 intermittent fasting works, explore realistic schedule options, compare 16:8 with other fasting windows, and build a routine that fits your life.",
  },
};

const FAQS = [
  {
    question: "Can I drink black coffee or tea during the 16-hour fasting window?",
    answer:
      "Yes. Plain black coffee, unsweetened green or black tea, herbal tea, and water contain virtually zero calories and do not disrupt the fasting state. However, adding milk, creamer, sugar, syrups, or MCT oil introduces caloric energy and should be reserved for your 8-hour eating window.",
  },
  {
    question: "Does 16:8 intermittent fasting automatically guarantee weight loss?",
    answer:
      "No. While 16:8 helps many individuals reduce spontaneous snacking and manage calorie intake, weight change fundamentally depends on overall energy balance and nutritional quality. Consuming excess calories during the 8-hour window will prevent weight loss, while extreme restriction can cause fatigue and nutritional deficits.",
  },
  {
    question: "Can I adjust my 8-hour window on weekends or special occasions?",
    answer:
      "Yes. Flexibility is one of the key strengths of time-restricted eating. Shifting your window by one or two hours on social days—such as moving from 12:00 PM–8:00 PM to 1:00 PM–9:00 PM—helps maintain long-term lifestyle adherence without compromising progress.",
  },
  {
    question: "Will fasting for 16 hours cause muscle loss?",
    answer:
      "Not if you consume adequate daily protein and maintain regular resistance training. Research indicates that when total daily protein and energy intake are matched, time-restricted eating preserves lean body mass comparably to standard continuous meal patterns.",
  },
  {
    question: "What should I do if I feel intense hunger during the morning fast?",
    answer:
      "Transient hunger waves are normal during the first 1 to 2 weeks of adaptation as circadian ghrelin rhythms adjust. Sipping water, sparkling mineral water, or warm tea, and engaging in an absorbing task often helps the wave pass. However, if hunger is accompanied by dizziness or shakiness, break your fast immediately.",
  },
];

export default function SixteenEightFastingGuidePage() {
  const siteUrl = getSiteUrl();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "16:8 Intermittent Fasting: A Practical Guide",
    description:
      "Learn how 16:8 intermittent fasting works, explore realistic schedule options, compare 16:8 with other fasting windows, and build a routine that fits your life.",
    author: {
      "@type": "Person",
      name: "Muhammad Usama",
    },
    datePublished: "2026-10-04",
    dateModified: "2026-10-04",
    publisher: {
      "@type": "Organization",
      name: "FastTrack",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/guides/16-8-intermittent-fasting-guide`,
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
        name: "16:8 Intermittent Fasting Guide",
        item: `${siteUrl}/guides/16-8-intermittent-fasting-guide`,
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
            Protocol Guide
          </span>
          <span className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>11 min read</span>
          </span>
        </div>

        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight">
          16:8 Intermittent Fasting: A Practical Guide
        </h1>

        <div className="flex flex-wrap items-center gap-4 mt-4 text-xs sm:text-sm text-on-surface-variant">
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-primary" />
            <span>Muhammad Usama</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-secondary" />
            <span>Updated October 4, 2026</span>
          </span>
        </div>
      </header>

      {/* Lead Paragraph */}
      <p className="font-body-lg text-base sm:text-xl text-on-surface font-medium leading-relaxed mb-8 p-4 sm:p-6 bg-surface-container-low/60 rounded-xl border border-surface-container">
        The 16:8 intermittent fasting schedule is one of the most widely recognized forms of time-restricted eating in modern lifestyle nutrition. By dividing the 24-hour day into a 16-hour fasting window and an 8-hour eating window, this approach establishes a structured daily eating cadence without requiring complicated food eliminations or calorie counting charts.
      </p>

      {/* Visual Timeline Diagram */}
      <div className="mb-12 p-6 sm:p-8 bg-surface-container-lowest rounded-2xl border border-surface-container shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <span className="font-headline text-base sm:text-lg font-bold text-on-surface flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" />
            <span>The 16:8 Daily Rhythm at a Glance</span>
          </span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
            16h Fast / 8h Feed
          </span>
        </div>

        <div className="space-y-4">
          {/* Progress bar visual */}
          <div className="h-7 w-full rounded-full overflow-hidden flex bg-surface-container border border-surface-container-high text-xs font-semibold text-center leading-7">
            <div className="w-[66.7%] bg-slate-800 text-slate-100 flex items-center justify-center gap-1">
              <span>Fasting Window (16 Hours)</span>
            </div>
            <div className="w-[33.3%] bg-emerald-600 text-white flex items-center justify-center gap-1">
              <span>Eating Window (8h)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-on-surface-variant">
            <div className="p-3 rounded-xl bg-surface-container-low border border-surface-container">
              <span className="font-bold text-on-surface block mb-1">Overnight Pause</span>
              <span>8 hours of sleep provide the effortless foundation of the 16-hour fast.</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-surface-container">
              <span className="font-bold text-on-surface block mb-1">Morning Extension</span>
              <span>Water, black coffee, and tea sustain hydration until midday.</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-surface-container">
              <span className="font-bold text-on-surface block mb-1">8-Hour Window</span>
              <span>Typically 2 to 3 balanced meals structured around your preferred daily schedule.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-10 text-on-surface font-body-md text-base sm:text-lg leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Is 16:8 Intermittent Fasting?
          </h2>
          <p className="text-on-surface-variant">
            At its core, 16:8 intermittent fasting is a structured model of time-restricted eating (TRE). You consume all of your daily caloric intake within a continuous 8-hour window each day, while refraining from calorie-containing food and drinks for the remaining 16 hours.
          </p>
          <p className="text-on-surface-variant">
            Unlike traditional dieting protocols that dictate specific macronutrient ratios or exclude whole food groups, 16:8 focuses on the dimension of <em>timing</em>. It is not an invitation to feast carelessly during feeding hours, nor is it a severe starvation protocol. Rather, it aligns energy intake with daytime activity and gives your gastrointestinal and metabolic systems an extended 16-hour nightly rest.
          </p>
          <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high flex items-start gap-3 text-sm">
            <Sparkles className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-on-surface">Core Principle: </span>
              <span className="text-on-surface-variant">
                16:8 creates a reliable daily cadence: 16 hours of digestive pause (including overnight sleep) followed by an 8-hour window for balanced, wholesome meals.
              </span>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            How the 16:8 Fasting Window Works
          </h2>
          <p className="text-on-surface-variant">
            To understand how 16:8 functions physiologically, consider what happens after a meal. When you eat, your digestive tract breaks down carbohydrates into glucose, prompting the pancreas to release insulin to transport fuel into cells. Excess energy is stored as glycogen in the liver and muscles, with additional surplus converted into triglycerides in adipose tissue.
          </p>
          <p className="text-on-surface-variant">
            During the fasting window, digestive activity winds down:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant text-base">
            <li>
              <strong>Hours 0 to 4 (Postprandial Phase):</strong> Food is actively digested and absorbed. Circulating glucose and insulin gradually return to baseline levels.
            </li>
            <li>
              <strong>Hours 4 to 12 (Early Fasting State):</strong> The body relies primarily on liver glycogen stores to maintain steady blood glucose. Basal insulin remains low.
            </li>
            <li>
              <strong>Hours 12 to 16 (Metabolic Transition):</strong> As liver glycogen levels decline, cellular metabolism shifts toward mobilizing free fatty acids from adipose tissue. This metabolic transition—often termed the "metabolic switch" in peer-reviewed research by researchers at the National Institute on Aging and Johns Hopkins Medicine—encourages cellular maintenance and fat oxidation.
            </li>
          </ul>
          <p className="text-on-surface-variant">
            Because approximately 7 to 9 hours of the 16-hour fast occur during sleep, you are only awake in a fasted state for about 7 to 8 hours. For many individuals, this makes 16:8 far more sustainable than prolonged multi-day fasts. To learn more about the biological adaptations across hours, read our detailed guide on{" "}
            <Link
              href="/guides/how-does-intermittent-fasting-work"
              className="text-primary font-semibold hover:underline"
            >
              How Does Intermittent Fasting Work?
            </Link>
            .
          </p>
        </section>

        {/* Section 3: Schedule Examples Table */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Example 16:8 Schedules
          </h2>
          <p className="text-on-surface-variant">
            There is no single "medically mandatory" window for 16:8. The optimal timing depends entirely on your daily commitments, work routine, exercise preferences, and family mealtimes. Below are three realistic schedule models commonly used by practitioners:
          </p>

          <div className="overflow-x-auto rounded-xl border border-surface-container bg-surface-container-lowest shadow-sm my-6">
            <div className="p-4 bg-surface-container-low border-b border-surface-container font-headline text-sm font-bold text-on-surface flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-primary" />
              <span>Popular 16:8 Daily Schedule Variations</span>
            </div>
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-surface-container font-headline text-xs font-bold uppercase tracking-wider text-on-surface">
                  <th className="py-3 px-4">Schedule Model</th>
                  <th className="py-3 px-4">Eating Window</th>
                  <th className="py-3 px-4">Fasting Window</th>
                  <th className="py-3 px-4">Meal Layout</th>
                  <th className="py-3 px-4">Best Suited For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container font-body-sm text-on-surface-variant">
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="py-3 px-4 font-semibold text-on-surface">Standard Midday</td>
                  <td className="py-3 px-4 font-medium text-emerald-700 dark:text-emerald-400">12:00 PM – 8:00 PM</td>
                  <td className="py-3 px-4">8:00 PM – 12:00 PM</td>
                  <td className="py-3 px-4">Lunch (12 PM), Snack (3:30 PM), Dinner (7:30 PM)</td>
                  <td className="py-3 px-4">Office workers, standard family dinners, social evenings</td>
                </tr>
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="py-3 px-4 font-semibold text-on-surface">Early Circadian (eTRE)</td>
                  <td className="py-3 px-4 font-medium text-emerald-700 dark:text-emerald-400">10:00 AM – 6:00 PM</td>
                  <td className="py-3 px-4">6:00 PM – 10:00 AM</td>
                  <td className="py-3 px-4">Brunch (10 AM), Midday Meal (2 PM), Early Dinner (5:30 PM)</td>
                  <td className="py-3 px-4">Early risers, morning exercise, optimal sleep digestion</td>
                </tr>
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="py-3 px-4 font-semibold text-on-surface">Late Evening</td>
                  <td className="py-3 px-4 font-medium text-emerald-700 dark:text-emerald-400">1:00 PM – 9:00 PM</td>
                  <td className="py-3 px-4">9:00 PM – 1:00 PM</td>
                  <td className="py-3 px-4">Late Lunch (1 PM), Snack (5 PM), Late Dinner (8:30 PM)</td>
                  <td className="py-3 px-4">Night owls, late work shifts, frequent restaurant dining</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-on-surface-variant text-sm">
            To customize your exact meal times based on your current bedtime and work hours, use our interactive{" "}
            <Link href="/fasting-methods/16-8" className="text-primary font-semibold hover:underline">
              16:8 Protocol Schedule Calculator
            </Link>
            .
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            How to Choose Your Eating Window
          </h2>
          <p className="text-on-surface-variant">
            Selecting your 8-hour window should be guided by your biological rhythm and lifestyle practicalities, rather than rigid dogma. When designing your routine, consider these four factors:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-2">
              <h3 className="font-headline text-base font-bold text-on-surface flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Social &amp; Family Harmony</span>
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                If dinner is your primary household gathering or social event, anchor your window around the evening (e.g., 12 PM to 8 PM). Sacrificing social dinners often leads to burnout and abandoned routines.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-2">
              <h3 className="font-headline text-base font-bold text-on-surface flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Sleep Quality &amp; Digestion</span>
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Going to bed with a heavily burdened stomach can impair sleep quality and elevate nocturnal body temperature. Ideally, conclude your eating window 2 to 3 hours before sleep. Learn more in our guide on{" "}
                <Link href="/guides/fasting-and-sleep" className="text-primary font-semibold hover:underline">
                  Fasting and Sleep Quality
                </Link>
                .
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-2">
              <h3 className="font-headline text-base font-bold text-on-surface flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Workout Timing &amp; Recovery</span>
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Decide whether you prefer exercising in a fasted or fed state. Many fasters train in the late morning right before opening their window with a protein-rich meal. Review timing options in{" "}
                <Link href="/guides/exercise-while-fasting" className="text-primary font-semibold hover:underline">
                  Exercise While Fasting
                </Link>
                .
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-2">
              <h3 className="font-headline text-base font-bold text-on-surface flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Natural Hunger Rhythms</span>
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Some people wake up genuinely hungry and lose appetite by late afternoon; an early window (10 AM to 6 PM) fits them best. Others feel zero morning hunger and prefer lunch and dinner. Follow your natural cues.
              </p>
            </div>
          </div>
          <p className="text-on-surface-variant text-sm">
            For step-by-step guidance on mapping your day, see our tutorial on{" "}
            <Link
              href="/guides/how-to-choose-a-fasting-window"
              className="text-primary font-semibold hover:underline"
            >
              How to Choose a Fasting Window
            </Link>
            .
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Can You Drink During the 16-Hour Fast?
          </h2>
          <p className="text-on-surface-variant">
            Proper hydration is critical during fasting hours. When insulin levels drop, the kidneys naturally excrete more sodium and water, making consistent fluid intake essential to avoid fatigue or headaches.
          </p>
          <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-3">
            <h3 className="font-headline text-base font-bold text-on-surface flex items-center gap-2">
              <Coffee className="w-4 h-4 text-secondary" />
              <span>Permissible Fasting Beverages</span>
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-sm text-on-surface-variant">
              <li>
                <strong>Plain Water &amp; Mineral Water:</strong> The foundation of fasting hydration. Sparkling water also stimulates stomach stretch receptors to help ease transient appetite signals.
              </li>
              <li>
                <strong>Black Coffee:</strong> Free of calories and sugar. Moderate coffee consumption can act as a temporary appetite suppressant.
              </li>
              <li>
                <strong>Unsweetened Tea:</strong> Green tea, black tea, oolong, and herbal varieties like peppermint or chamomile are zero-calorie choices.
              </li>
              <li>
                <strong>Electrolyte Water:</strong> Unsweetened water with trace sodium, potassium, or magnesium helps support electrolyte balance during warmer months or intense activity.
              </li>
            </ul>
            <p className="text-xs text-on-surface-variant pt-2">
              To review strict rules on zero-calorie sweeteners, lemon slices, and dietary supplements, consult our comprehensive references on{" "}
              <Link href="/guides/what-can-you-drink-while-fasting" className="text-primary font-semibold hover:underline">
                What Can You Drink While Fasting?
              </Link>{" "}
              and{" "}
              <Link href="/guides/what-breaks-a-fast" className="text-primary font-semibold hover:underline">
                What Breaks a Fast?
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Section 6: Protocol Comparison */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            16:8 Compared With Other Fasting Schedules
          </h2>
          <p className="text-on-surface-variant">
            How does 16:8 fit within the broader spectrum of time-restricted eating? Comparing window sizes helps illustrate the trade-off between dietary flexibility and the depth of the fasting pause:
          </p>

          <div className="overflow-x-auto rounded-xl border border-surface-container bg-surface-container-lowest shadow-sm my-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-surface-container font-headline text-xs font-bold uppercase tracking-wider text-on-surface">
                  <th className="py-3 px-4">Schedule</th>
                  <th className="py-3 px-4 text-right">Fasting</th>
                  <th className="py-3 px-4 text-right">Eating</th>
                  <th className="py-3 px-4">Flexibility Level</th>
                  <th className="py-3 px-4">Key Distinguishing Trait</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container font-body-sm text-on-surface-variant">
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="py-3 px-4 font-semibold text-on-surface">
                    <Link href="/fasting-methods/12-12" className="text-primary hover:underline">
                      12:12 Circadian
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-right font-mono">12h</td>
                  <td className="py-3 px-4 text-right font-mono">12h</td>
                  <td className="py-3 px-4">Highest</td>
                  <td className="py-3 px-4">Eliminates late-night snacking; minimal daytime restriction</td>
                </tr>
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="py-3 px-4 font-semibold text-on-surface">
                    <Link href="/guides/14-10-intermittent-fasting-guide" className="text-primary hover:underline">
                      14:10 Gentle Reset
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-right font-mono">14h</td>
                  <td className="py-3 px-4 text-right font-mono">10h</td>
                  <td className="py-3 px-4">High</td>
                  <td className="py-3 px-4">Accommodates 2 to 3 balanced meals; accessible beginner entry point</td>
                </tr>
                <tr className="bg-primary/5 hover:bg-primary/10 transition-colors">
                  <td className="py-3 px-4 font-bold text-primary">
                    <Link href="/fasting-methods/16-8" className="hover:underline">
                      16:8 Protocol (Current)
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-primary">16h</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-primary">8h</td>
                  <td className="py-3 px-4 font-medium text-primary">Moderate</td>
                  <td className="py-3 px-4 font-medium text-primary">Sweet spot between social life and metabolic fasting benefits</td>
                </tr>
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="py-3 px-4 font-semibold text-on-surface">
                    <Link href="/guides/18-6-intermittent-fasting-guide" className="text-primary hover:underline">
                      18:6 Accelerated
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-right font-mono">18h</td>
                  <td className="py-3 px-4 text-right font-mono">6h</td>
                  <td className="py-3 px-4">Moderate-Low</td>
                  <td className="py-3 px-4">Typically 2 structured meals; deeper daytime digestive rest</td>
                </tr>
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="py-3 px-4 font-semibold text-on-surface">
                    <Link href="/fasting-methods/20-4" className="text-primary hover:underline">
                      20:4 Warrior
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-right font-mono">20h</td>
                  <td className="py-3 px-4 text-right font-mono">4h</td>
                  <td className="py-3 px-4">Low</td>
                  <td className="py-3 px-4">Single evening nourishment window; requires careful staging</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-on-surface-variant text-sm">
            For individuals who have never fasted, starting with a 14:10 window or reviewing our{" "}
            <Link href="/guides/intermittent-fasting-for-beginners" className="text-primary font-semibold hover:underline">
              Intermittent Fasting for Beginners
            </Link>{" "}
            primer provides an unhurried, comfortable foundation before transitioning to 16:8.
          </p>
        </section>

        {/* Section 7: Scientific Evidence */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Does the Scientific Evidence Say About 16:8?
          </h2>
          <p className="text-on-surface-variant">
            Scientific investigation into time-restricted feeding has accelerated significantly over the past decade. Institutions including Johns Hopkins Medicine, the National Institutes of Health (NIH), and the Cleveland Clinic have evaluated how meal timing interacts with human physiology:
          </p>
          <div className="space-y-3 my-4">
            <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container">
              <span className="font-bold text-on-surface block text-sm mb-1">
                Weight Management and Energy Intake
              </span>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                In clinical trials evaluating 16:8 protocols, participants frequently experience modest reductions in body weight (typically 2% to 4% over 8 to 12 weeks). Notably, studies often find that this weight reduction occurs organically because condensing eating hours naturally curtails late-night snacking, rather than through metabolic magic.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container">
              <span className="font-bold text-on-surface block text-sm mb-1">
                Insulin Sensitivity &amp; Cardiometabolic Markers
              </span>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                A 12-week study reported by Johns Hopkins researchers examining time-restricted eating in adults with obesity and prediabetes observed modest reductions in weight and improvements in glycemic control under study conditions. Similarly, trials have noted modest reductions in resting systolic blood pressure and inflammatory markers. However, researchers consistently caution that these benefits are population-dependent and require nutritionally adequate eating.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container">
              <span className="font-bold text-on-surface block text-sm mb-1">
                Longer Is Not Automatically Better
              </span>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Health authorities, including Johns Hopkins Medicine, emphasize that extending fasts beyond 16 to 18 hours does not linearly multiply health outcomes. Excessively tight windows can make it difficult to consume sufficient dietary protein, essential fatty acids, and micronutrients, potentially increasing risks of muscle loss or binge-restrict behavioral patterns.
              </p>
            </div>
          </div>
          <p className="text-on-surface-variant text-sm">
            In summary: 16:8 is an effective, evidence-supported behavioral tool for organizing meals and managing energy balance, but its success depends on overall dietary quality, adequate sleep, and consistent adherence.
          </p>
        </section>

        {/* Section 8: Safety & Clinical Precautions */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Who Should Be Careful With Fasting?
          </h2>
          <p className="text-on-surface-variant">
            While 16:8 is generally well tolerated by healthy adults, intermittent fasting is not appropriate for everyone. Individuals in the following categories should exercise caution or avoid fasting entirely:
          </p>

          <div className="p-6 rounded-2xl bg-surface-container-lowest border border-error/30 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-error font-headline font-bold text-base">
              <ShieldAlert className="w-5 h-5 flex-shrink-0" />
              <span>Important Medical Precautions</span>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-sm text-on-surface-variant">
              <li>
                <strong>Pregnancy and Breastfeeding:</strong> Nutritional and caloric demands during gestation and lactation are significantly elevated; fasting may compromise fetal development or milk supply.
              </li>
              <li>
                <strong>Diabetes and Glucose-Lowering Medications:</strong> Individuals taking insulin, sulfonylureas, or SGLT2 inhibitors face risks of hypoglycemia when meals are delayed or skipped. Fasting should not be initiated without direct consultation and supervision from a prescribing physician.
              </li>
              <li>
                <strong>History of Disordered Eating:</strong> Time restriction can trigger restrictive-binge cycles or anxiety around mealtimes in individuals with a history of anorexia, bulimia, or orthorexia.
              </li>
              <li>
                <strong>Underweight Individuals (BMI &lt; 18.5):</strong> Further caloric reduction can lead to hormonal dysregulation and nutrient deficiencies.
              </li>
              <li>
                <strong>Prescription Medications Affected by Food:</strong> Medications requiring specific meal timing or food intake should always be taken as directed by your physician or pharmacist, and fasting schedules should not interfere with prescribed regimens.
              </li>
            </ul>
            <p className="text-xs text-on-surface-variant pt-2 border-t border-surface-container">
              Always consult a qualified healthcare provider before making substantial changes to your eating patterns, particularly if you manage existing health conditions.
            </p>
          </div>
        </section>

        {/* Section 9: Visible FAQs */}
        <section className="space-y-6 pt-6 border-t border-surface-container">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Frequently Asked Questions About 16:8 Fasting
          </h2>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm"
              >
                <h3 className="font-headline text-base font-bold text-on-surface mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 10: How FastTrack Can Help */}
        <section className="mt-12 p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container shadow-sm space-y-4">
          <h2 className="font-headline text-2xl font-bold text-primary tracking-tight">
            How FastTrack Can Help You Plan Your 16:8 Routine
          </h2>
          <p className="text-on-surface-variant text-base leading-relaxed">
            Starting a new fasting habit is significantly easier when you have clear, calculated timestamps rather than mental guesswork. FastTrack provides purpose-built tools to help you design, visualize, and maintain your 16:8 routine:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <Link
              href="/fasting-methods/16-8"
              className="p-4 rounded-xl bg-surface-container-lowest border border-surface-container hover:border-surface-container-high transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="font-headline text-base font-bold text-on-surface group-hover:text-primary transition-colors block">
                  16:8 Protocol Reference Page
                </span>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Explore detailed meal structure guidelines, metabolic markers, and protocol FAQs tailored to 16:8.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-3">
                <span>View 16:8 Method Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/#calculator"
              className="p-4 rounded-xl bg-surface-container-lowest border border-surface-container hover:border-surface-container-high transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="font-headline text-base font-bold text-on-surface group-hover:text-primary transition-colors block">
                  FastTrack Schedule Calculator
                </span>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Input your desired last-meal time to instantly calculate your precise daily fasting and feeding timestamps.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-3">
                <span>Open Calculator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </section>
      </div>

      {/* Footer Navigation CTA */}
      <div className="mt-12 pt-8 border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/guides"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-container transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Guides</span>
        </Link>
        <Link
          href="/fasting-methods"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-container text-primary hover:bg-surface-container-high text-sm font-semibold transition-colors"
        >
          <span>Explore All Fasting Methods</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
