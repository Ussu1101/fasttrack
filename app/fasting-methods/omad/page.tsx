import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/config/site";
import { Calculator } from "@/components/calculator/Calculator";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  Calculator as CalculatorIcon,
  HelpCircle,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "OMAD (23:1) Fasting Guide: Schedule, Meal Structure & Safety | FastTrack",
  description:
    "Learn how OMAD (One Meal a Day) and 23:1 fasting work. Discover realistic schedules, sample nutrient-dense meal plans, evidence trade-offs, and critical safety rules.",
  keywords: [
    "omad 23:1",
    "omad fasting method",
    "one meal a day schedule",
    "what is omad",
    "omad meal structure",
    "omad vs 16 8",
    "omad results timeline",
    "is omad safe",
  ],
  alternates: {
    canonical: "/fasting-methods/omad",
  },
  openGraph: {
    title: "OMAD (23:1) Fasting Guide: Schedule, Meal Structure & Safety | FastTrack",
    description:
      "Learn how OMAD (One Meal a Day) and 23:1 fasting work. Discover realistic schedules, sample nutrient-dense meal plans, evidence trade-offs, and critical safety rules.",
    url: `${getSiteUrl()}/fasting-methods/omad`,
    type: "article",
    publishedTime: "2026-10-14",
    modifiedTime: "2026-10-14",
    authors: ["Muhammad Usama"],
  },
  twitter: {
    card: "summary_large_image",
    title: "OMAD (23:1) Fasting Guide: Schedule, Meal Structure & Safety | FastTrack",
    description:
      "Learn how OMAD (One Meal a Day) and 23:1 fasting work. Discover realistic schedules, sample nutrient-dense meal plans, evidence trade-offs, and critical safety rules.",
  },
};

const FAQS = [
  {
    question: "What does OMAD 23:1 mean?",
    answer:
      "OMAD 23:1 describes a daily pattern where you fast for approximately 23 hours and consume your daily food in a 1-hour window. The ratio is an informal convention rather than a strict biological requirement; what matters practically is consuming all daily calories in a single, unhurried meal without grazing.",
  },
  {
    question: "Can beginners start with OMAD?",
    answer:
      "It is generally not advisable. Jumping directly into a 23-hour fast frequently triggers headaches, intense hunger spikes, mood irritability, and digestive distress. Most people find it significantly safer and more sustainable to begin with gentler schedules like 12:12 or 14:10, adapting gradually over several weeks.",
  },
  {
    question: "Can you drink water during the fasting window?",
    answer:
      "Yes. Staying hydrated is essential. Plain water, sparkling water, unsweetened mineral water, black coffee, and plain unsweetened tea contain negligible calories and fit lifestyle fasting goals. However, beverage guidelines depend on the context: zero-calorie beverages are common in practical daily fasting, but excluded in fasts that forbid all liquids (such as Islamic Ramadan fasting during daylight hours) or in clinical pre-operative fasting.",
  },
  {
    question: "Is OMAD suitable for everyone?",
    answer:
      "No. OMAD is an intensive protocol inappropriate for many populations, including pregnant or nursing women, minors, anyone with an eating disorder history, and individuals managing chronic medical conditions or taking medications—especially insulin, glucose-lowering drugs, or blood pressure therapies—without personalized clinician guidance.",
  },
  {
    question: "Can OMAD cause fatigue or dizziness?",
    answer:
      "Yes. Lightheadedness, sluggishness, and concentration dips can occur, especially during early adaptation. These symptoms can stem from multiple factors, including inadequate overall calories, dehydration, caffeine withdrawal, or blood pressure changes. If dizziness is severe or persistent, break your fast and consult a doctor.",
  },
  {
    question: "How should a balanced OMAD meal be structured?",
    answer:
      "A balanced OMAD meal emphasizes varied whole foods rather than empty calories. Aim for a sensible portion of quality protein, plenty of fibrous vegetables, healthy fats, and complex carbohydrates. Splitting the hour into an appetizer and a main plate can also ease digestion.",
  },
  {
    question: "Is OMAD better than 16:8?",
    answer:
      "OMAD is not inherently superior to 16:8. In clinical trials, weight loss is primarily driven by overall caloric restriction; shorter windows do not produce greater fat loss when total calories are matched. 16:8 is far easier to balance socially and allows for distributed protein intake to preserve lean muscle.",
  },
  {
    question: "Should you continue OMAD if you feel unwell?",
    answer:
      "No. You should never force yourself to continue a fast if you experience severe weakness, confusion, persistent dizziness, fainting, or chest discomfort. Fasting is a voluntary dietary tool, not an endurance test. If your body signals distress, break the fast immediately with a light meal, hydrate, and seek medical guidance; urgent symptoms require immediate clinical care.",
  },
];

export default function OmadPage() {
  const siteUrl = getSiteUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "OMAD (23:1) Fasting Method: How One Meal a Day Works, Evidence, Meal Structure & Safety",
    description:
      "Learn how OMAD (One Meal a Day) and 23:1 fasting work. Discover realistic schedules, sample nutrient-dense meal plans, evidence trade-offs, and critical safety rules.",
    author: {
      "@type": "Person",
      name: "Muhammad Usama",
    },
    datePublished: "2026-10-14",
    dateModified: "2026-10-14",
    publisher: {
      "@type": "Organization",
      name: "FastTrack",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/fasting-methods/omad`,
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
        name: "OMAD (23:1)",
        item: `${siteUrl}/fasting-methods/omad`,
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
          href="/fasting-methods"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-container transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Methods</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-8 pb-8 border-b border-surface-container">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-xs font-semibold">
            Fasting Method
          </span>
          <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-xs font-semibold tabular-numbers">
            Ratio: 23:1
          </span>
          <span className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>14 min read</span>
          </span>
        </div>

        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight">
          OMAD (23:1) Fasting Method: How One Meal a Day Works, Evidence, Meal Structure &amp; Safety
        </h1>

        <div className="flex flex-wrap items-center gap-4 mt-4 text-xs sm:text-sm text-on-surface-variant">
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-primary" />
            <span>Muhammad Usama</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-secondary" />
            <span>Published October 14, 2026</span>
          </span>
        </div>
      </header>

      {/* Lead Paragraphs */}
      <div className="space-y-4 font-body-lg text-base sm:text-lg text-on-surface leading-relaxed mb-10 p-5 sm:p-6 bg-surface-container-low/60 rounded-2xl border border-surface-container">
        <p>
          OMAD — <strong>One Meal a Day</strong> — condenses all of your daily food intake into a single eating occasion, leaving roughly 23 hours of each day without calories.
        </p>
        <p>
          It is one of the most demanding forms of time-restricted eating: simple in concept, but requiring thoughtful planning around nutrient density, digestive comfort, and hydration. This guide covers how OMAD works, what the evidence actually shows, how to structure the single meal, and who should avoid it.
        </p>
        <p>
          Use the calculator below to generate your exact OMAD fasting and eating windows, then read on for the full evidence-based guide.
        </p>
      </div>

      {/* Embedded OMAD Calculator */}
      <div className="p-6 sm:p-8 bg-surface-container-low/70 rounded-2xl border border-surface-container mb-12 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <CalculatorIcon className="w-5 h-5 text-primary" />
          <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface tracking-tight">
            OMAD Schedule Calculator
          </h2>
        </div>
        <Calculator initialProtocolId="omad" initialLastMealTime="20:00" />
      </div>

      {/* Main Article Body */}
      <div className="space-y-12 text-on-surface font-body-md text-base sm:text-lg leading-relaxed">
        {/* What Is OMAD? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Is OMAD?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            OMAD stands for &ldquo;One Meal a Day.&rdquo; It is an intensive style of intermittent fasting that condenses daily food intake into a single eating occasion, leaving the remaining hours of the day without calorie consumption.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            In fasting discussions, OMAD is often referred to as the <strong>23:1 fasting pattern</strong>—signifying an approximate 23-hour fasting period followed by a 1-hour eating window. In daily practice, however, this ratio serves as a descriptive convention rather than a rigid rule. Some individuals finish their meal in 45 minutes; others take 60 to 75 minutes for an unhurried, multi-course meal. What defines OMAD is not watching a timer to the exact minute, but the decision to consume all daily caloric energy in one discrete sitting rather than distributing food across breakfast, lunch, dinner, or daytime snacks.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Because OMAD concentrates 24 hours of nutritional needs into a single window, it represents one of the most demanding forms of time-restricted eating. It requires thoughtful planning around nutrient density, digestive comfort, and hydration. It is not an entry-level protocol, nor is it a universal requirement for achieving healthy metabolic habits or sustainable weight management.
          </p>
        </section>

        {/* How OMAD Works */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            How OMAD Works
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Under an OMAD schedule, each 24-hour cycle is divided into two distinct periods: a continuous fasting phase of roughly 23 hours and a focused eating window of approximately 1 hour.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            During the fasting window, you consume no calorie-containing foods,{" "}
            <Link
              href="/guides/what-breaks-a-fast"
              className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              sweetened beverages
            </Link>
            , milk, or caloric supplements. The body relies on internal energy reserves, first drawing on glycogen stored in the liver. As hours without food accumulate, circulating insulin levels progressively decline, encouraging a{" "}
            <Link
              href="/fasting-stages"
              className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              gradual shift toward fatty acid oxidation
            </Link>
            . However, the timing and extent of these metabolic transitions vary considerably between individuals based on recent meal size, carbohydrate intake, physical activity, and baseline metabolic health, rather than following a rigid clock. When your scheduled eating window arrives, you consume your day&apos;s calories and nutrients in a single meal, after which the fasting clock resumes.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            It is critical to distinguish this behavioral pattern from exaggerated claims regarding guaranteed fat loss or metabolic acceleration:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-on-surface-variant">
            <li><strong>Energy Balance:</strong> Weight changes on OMAD are primarily governed by overall energy balance over time. Because consuming an entire day&apos;s energy needs in a single sitting is physically difficult for many people, OMAD frequently creates an unintentional caloric deficit.</li>
            <li><strong>Trial Context:</strong> Controlled trials examining single-meal patterns under weight-maintenance conditions demonstrate that meal timing alone does not produce automatic or superior fat loss when calorie intake is held steady.</li>
            <li><strong>No Immunity from Overeating:</strong> Consuming calorie-dense, ultra-processed foods in excess of your daily energy expenditure during that single hour will still prevent fat loss or lead to weight gain.</li>
            <li><strong>Metabolic Rate:</strong> Fasting for 23 hours does not permanently boost metabolic rate. Prolonged, severe energy restriction can lead to{" "}
            <Link
              href="/intermittent-fasting-plateau"
              className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              adaptive reductions in resting energy expenditure
            </Link>{" "}
            and spontaneous physical activity.</li>
          </ul>
        </section>

        {/* Potential Benefits and What the Evidence Actually Shows */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Potential Benefits and What the Evidence Actually Shows
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Advocates often credit OMAD with rapid fat loss and enhanced focus. While single-meal routines offer practical conveniences, scientific accuracy requires separating OMAD-specific clinical findings from broader intermittent fasting literature.
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                1. Daily Simplicity and Appetite Discipline
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                The most consistent practical benefit of OMAD is behavioral simplicity. Eliminating breakfast, lunch, and midday snacks removes the time spent planning, shopping, cooking, and tracking multiple meals during busy working hours. For individuals who find that frequent small meals stimulate ongoing cravings or grazing, establishing a single daily boundary can simplify dietary adherence.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                2. What OMAD-Specific Studies Show
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Relatively few randomized clinical trials have evaluated a strict one-meal-per-day protocol in humans, and their findings present a mixed picture:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-on-surface-variant">
                <li><strong>Body Composition:</strong> In a controlled crossover trial by Stote et al. (2007), 15 healthy, normal-weight adults consumed a weight-maintenance diet as either 1 meal per day (in the evening) or 3 meals per day across two 8-week periods. While participants on the one-meal regimen experienced modest reductions in body weight and fat mass without an intentional caloric deficit, they also reported significantly higher daily hunger and fullness fluctuations.</li>
                <li><strong>Cardiovascular Biomarkers:</strong> In that same trial, consuming one meal per day resulted in significant increases in total cholesterol, LDL cholesterol, and modest elevations in morning blood pressure compared to three meals per day. This indicates that extreme meal condensation does not automatically optimize all cardiovascular risk markers.</li>
                <li><strong>Glucose Regulation:</strong> A companion analysis of the same cohort by Carlson et al. (2007) revealed that consuming one meal per day produced higher morning fasting plasma glucose and impaired glucose tolerance during oral testing compared to consuming three meals. Concentrating a full day&apos;s carbohydrates into one sitting places acute demands on postprandial glucose disposal.</li>
              </ul>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                3. Broader Intermittent Fasting Evidence vs. OMAD
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Much of the health literature frequently cited in support of OMAD—such as improved insulin sensitivity, reduced systemic inflammation, and cellular autophagy—stems from trials examining less extreme protocols, such as{" "}
                <Link
                  href="/fasting-methods/16-8"
                  className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
                >
                  16:8 time-restricted eating
                </Link>
                , alternate-day fasting, or the 5:2 diet (Varady et al., 2022). Applying outcomes from 16:8 trials directly to OMAD assumes that longer daily fasts are universally superior. In clinical practice, more restrictive fasting windows often present practical adherence challenges, digestive symptoms when large meals are eaten quickly, and potential difficulties consuming sufficient protein across a single sitting. However, direct head-to-head trials comparing long-term adherence and health outcomes between OMAD and 16:8 remain scarce.
              </p>
            </div>
          </div>
        </section>

        {/* OMAD 23:1 Explained: Scheduling, Hydration & Realities */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            OMAD 23:1 Explained: Scheduling, Hydration &amp; Realities
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Structuring an OMAD routine requires selecting a consistent time of day when you can prepare, sit down for, and digest a substantial meal without rushing.
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                Example Daily Schedule: The Evening Dinner Window
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                The evening dinner pattern is culturally and socially the most common OMAD schedule:
              </p>
              <div className="my-4 overflow-x-auto rounded-xl border border-surface-container shadow-sm">
                <table className="w-full text-left text-sm border-collapse bg-surface-container-lowest">
                  <caption className="sr-only">
                    Example OMAD 23:1 daily schedule with an evening dinner window
                  </caption>
                  <thead className="bg-surface-container-low text-on-surface border-b border-surface-container font-headline">
                    <tr>
                      <th scope="col" className="p-3.5 sm:p-4 font-bold text-left">
                        Time
                      </th>
                      <th scope="col" className="p-3.5 sm:p-4 font-bold text-left">
                        Phase
                      </th>
                      <th scope="col" className="p-3.5 sm:p-4 font-bold text-left">
                        Practical Routine
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container font-body-sm text-on-surface-variant">
                    <tr className="hover:bg-surface-container/50 transition-colors">
                      <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">7:00 AM</th>
                      <td className="p-3.5 sm:p-4">Fasting Window (Hour 12)</td>
                      <td className="p-3.5 sm:p-4">Wake up; drink plain water according to thirst.</td>
                    </tr>
                    <tr className="hover:bg-surface-container/50 transition-colors">
                      <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">8:30 AM</th>
                      <td className="p-3.5 sm:p-4">Fasting Window (Hour 13.5)</td>
                      <td className="p-3.5 sm:p-4">Optional plain black coffee or unsweetened tea; morning work.</td>
                    </tr>
                    <tr className="hover:bg-surface-container/50 transition-colors">
                      <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">12:30 PM</th>
                      <td className="p-3.5 sm:p-4">Fasting Window (Hour 17.5)</td>
                      <td className="p-3.5 sm:p-4">Midday hydration; light walk. Hunger cues often emerge around habitual lunch hours and fluctuate.</td>
                    </tr>
                    <tr className="hover:bg-surface-container/50 transition-colors">
                      <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">4:00 PM</th>
                      <td className="p-3.5 sm:p-4">Fasting Window (Hour 21)</td>
                      <td className="p-3.5 sm:p-4">Afternoon water or unsweetened beverage; focus on workday tasks.</td>
                    </tr>
                    <tr className="hover:bg-surface-container/50 transition-colors">
                      <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">6:30 PM – 7:30 PM</th>
                      <td className="p-3.5 sm:p-4 font-medium text-primary">Eating Window (Hour 23–24)</td>
                      <td className="p-3.5 sm:p-4"><strong>The OMAD Meal:</strong> Unhurried, nutrient-dense meal emphasizing varied proteins, vegetables, complex carbs, and healthy fats.</td>
                    </tr>
                    <tr className="hover:bg-surface-container/50 transition-colors">
                      <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">7:30 PM</th>
                      <td className="p-3.5 sm:p-4">Fasting Window Begins</td>
                      <td className="p-3.5 sm:p-4">Fasting clock restarts. Gentle walk; kitchen closed.</td>
                    </tr>
                    <tr className="hover:bg-surface-container/50 transition-colors">
                      <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">10:30 PM</th>
                      <td className="p-3.5 sm:p-4">Fasting Window (Hour 3)</td>
                      <td className="p-3.5 sm:p-4">Sleep; digestive processes settle before rest.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                Hydration and Beverage Considerations
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Dietary foods contribute a meaningful portion of daily fluid intake—with national dietary surveys, such as data from the National Academies (IOM, 2005), estimating that moisture in food accounts for roughly 19% to 20% of total water intake on average, though this varies based on diet composition. Because fasting removes daytime food moisture, conscious attention to{" "}
                <Link
                  href="/guides/what-can-you-drink-while-fasting"
                  className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
                >
                  drinking fluids according to thirst
                </Link>{" "}
                is important:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-on-surface-variant">
                <li><strong>Water &amp; Sparkling Water:</strong> Plain water, unflavored seltzers, and mineral water provide zero-calorie hydration without metabolic disruption.</li>
                <li><strong>Black Coffee &amp; Unsweetened Tea:</strong> Unsweetened black coffee and plain tea contain negligible calories and are widely used in lifestyle time-restricted eating. However, beverage guidelines depend on the specific fasting context: while they fit practical caloric-restriction goals, they are disallowed in protocols that prohibit all liquids (such as Islamic Ramadan fasting during daylight hours) or in clinical pre-operative fasting. In addition, caffeine consumed on an empty stomach can trigger gastric irritation or acid reflux in sensitive individuals.</li>
                <li><strong>Electrolytes and Symptoms:</strong> Fatigue, lightheadedness, or mild headaches during fasting can stem from multiple causes, including inadequate sleep, caffeine withdrawal, low overall calorie intake, or blood pressure changes. Do not assume these symptoms indicate sodium depletion or that drinking salt water is necessary or curative. Supplementation should remain within general dietary guidelines and does not make an extreme fasting window automatically safe.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sample OMAD Meal Structure: Building a Balanced Plate */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Sample OMAD Meal Structure: Building a Balanced Plate
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            A healthy OMAD meal is not a standard 600-calorie dinner consumed in isolation, nor is it an excuse to binge on fast food. It must supply adequate protein, essential fatty acids, dietary fiber, and micronutrients.
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                Illustrative Two-Course Framework
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                To prevent severe bloating or indigestion from eating an entire day&apos;s food volume at once, consider splitting your 60-minute window into two gentle courses:
              </p>
              <ol className="list-decimal pl-6 space-y-1 text-on-surface-variant">
                <li><strong>Course 1: The Gentle Starter (Minutes 0–15):</strong> A cup of light vegetable or bone broth paired with a mixed-greens salad, olive oil, and seeds to introduce gentle hydration and fiber without overwhelming gastric capacity.</li>
                <li><strong>Course 2: The Core Nutrient Plate (Minutes 20–55):</strong>
                  <ul className="list-disc pl-6 space-y-1 mt-1">
                    <li><strong>Protein Source:</strong> An illustrative portion of quality protein (such as 35–50 g from fish, poultry, lean meat, tofu, or legumes). This range is an example only; individual protein needs depend on body weight, age, sex, and activity level.</li>
                    <li><strong>Fibrous Vegetables:</strong> Steamed broccoli, Brussels sprouts, asparagus, or sauteed zucchini for micronutrients and digestive bulk.</li>
                    <li><strong>Carbohydrate-Rich Whole Foods:</strong> A baked sweet potato, cooked quinoa, brown rice, or squash to restore glycogen.</li>
                    <li><strong>Healthy Fats:</strong> Avocado, nuts, or olives to assist fat-soluble vitamin absorption (A, D, E, K).</li>
                    <li><strong>Finishing Touch:</strong> Whole fruit or a serving of unsweetened yogurt for micronutrient diversity and natural satiety.</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                The Nutrient Challenge
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Consuming a complete day&apos;s micronutrient and macronutrient needs in a single sitting is challenging. For athletes, highly active people, and individuals with elevated calorie requirements, fitting sufficient energy, calcium, iron, and protein into one hour can cause persistent gastrointestinal discomfort. Consistently under-eating can lead to muscle loss, chronic fatigue, hair thinning, and hormonal disruption over time.
              </p>
            </div>
          </div>
        </section>

        {/* A Gradual Progression Approach (Optional Example) */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            A Gradual Progression Approach (Optional Example)
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Transitioning abruptly from a standard multi-meal diet to a 23-hour fast frequently triggers intense hunger pangs, headaches, irritability, and early burnout.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If you and your healthcare provider determine that a condensed eating window suits your goals, a phased transition is much more manageable:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-on-surface-variant">
            <li><strong>Stage 1: 12:12 or 14:10 Base (Days 1–7):</strong> Establish a consistent 12-to-14-hour overnight fast (e.g., finish dinner by 8:00 PM, eat breakfast at 8:00 AM or 10:00 AM). Focus on eliminating late-night snacking.</li>
            <li><strong>Stage 2: 16:8 Standard (Days 8–14):</strong> Fast for 16 hours and eat within an 8-hour window (e.g., 12:00 PM to 8:00 PM). Eat two balanced meals and observe how your energy and digestion adapt.</li>
            <li><strong>Stage 3: 18:6 or{" "}
            <Link
              href="/fasting-methods/20-4"
              className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              20:4 Progression
            </Link>{" "}
            (Days 15–21):</strong> Condense eating to a 4-to-6-hour window (e.g., 2:00 PM to 6:00 PM), shifting toward one main meal and a nutrient-dense snack.</li>
            <li><strong>Stage 4: OMAD Trial (Day 22 onward — Optional):</strong> Test OMAD on 1–2 non-consecutive days per week rather than jumping into daily practice.</li>
          </ul>
          <blockquote className="p-4 rounded-xl bg-surface-container border-l-4 border-primary font-headline text-base sm:text-lg font-bold text-primary">
            Important Safety Note: This progression is an illustrative lifestyle example, not a medically validated protocol. There is no biological requirement to advance to OMAD. Many individuals achieve their health and body-composition goals permanently on 14:10 or 16:8 without ever needing to fast for 23 hours. If you feel unwell at any stage, stop immediately and return to a more flexible schedule.
          </blockquote>
        </section>

        {/* Common Challenges and Practical Solutions */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Common Challenges and Practical Solutions
          </h2>
          <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
            <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
              <li><strong>Overeating &amp; Loss of Control:</strong> Extended hunger can trigger rapid, compulsive overeating once the window opens.{" "}
              <Link
                href="/guides/how-to-break-a-fast"
                className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
              >
                Break your fast with a small soup or salad
              </Link>
              , sit down, and chew slowly to allow satiety signals to register.</li>
              <li><strong>Acid Reflux and Indigestion:</strong> Cramming a large food volume into a contracted stomach causes gastric distension. Avoid lying down within 2–3 hours of eating. If reflux continues, widen your window to 20:4 or 18:6 to distribute digestion.</li>
              <li><strong>Fatigue and Concentration Dips:</strong> Midday sluggishness can occur as your body adapts to longer fasting periods. Ensure your previous meal contained sufficient complex carbohydrates, protein, and fluids, and prioritize consistent sleep.</li>
              <li><strong>Sleep Disruptions:</strong> A heavy meal close to bedtime elevates core body temperature and impairs sleep quality; conversely, going to bed hungry can cause restlessness. Conclude your meal at least 3 hours before sleep.</li>
              <li><strong>Nutrient Inadequacy:</strong> Failing to ingest sufficient protein, essential fats, and vitamins in one meal can cause long-term depletion. Emphasize varied whole foods. If deficiencies arise, OMAD is likely too restrictive for your biology.</li>
              <li><strong>Social Friction:</strong> Skipping shared meals with colleagues or family can cause social tension. Maintain flexibility by using OMAD on busy solo days and transitioning to 16:8 or standard meals during weekends and gatherings.</li>
            </ul>
          </div>
        </section>

        {/* Who Should Avoid OMAD or Seek Medical Advice */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Who Should Avoid OMAD or Seek Medical Advice
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Because of its extreme daily restriction, OMAD carries heightened risks for several populations. FastTrack provides{" "}
            <Link
              href="/medical-disclaimer"
              className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              general educational information
            </Link>{" "}
            only; OMAD is <strong>not</strong> a medical therapy or clinical prescription.
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                High-Risk Populations Requiring Avoidance
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-on-surface-variant">
                <li><strong>Pregnancy and Breastfeeding:</strong> Fetal development and milk production demand steady, distributed supplies of energy, protein, and micronutrients throughout the day.</li>
                <li><strong>Children and Adolescents Under 18:</strong> Growing bodies require regular nutrition to support bone accretion, brain development, and endocrine function.</li>
                <li><strong>Current or Past History of Eating Disorders:</strong> Extreme dietary restriction can trigger binge-eating cycles, obsessive food preoccupation, and disordered eating behaviors.</li>
                <li><strong>Underweight Individuals (BMI &lt; 18.5):</strong> Compacting meals increases the risk of further unintentional weight loss and muscle wasting.</li>
              </ul>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                When Individualized Clinical Guidance Is Mandatory
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-on-surface-variant">
                <li><strong>Individuals with Diabetes:</strong> Glucose-lowering medications differ in mechanism and risk profile. Agents such as exogenous insulin, sulfonylureas (e.g., glipizide, glimepiride), and meglitinides directly stimulate insulin availability regardless of food intake, creating an acute risk of severe hypoglycemia during prolonged fasting (NIDDK, 2023; Grajower &amp; Horne, 2019). Other classes (such as metformin, SGLT2 inhibitors, or GLP-1 receptor agonists) present distinct clinical considerations, including dehydration or rare metabolic complications. Anyone with diabetes—particularly those using insulin or medicines with hypoglycemia risk—must obtain individualized guidance from their prescribing clinician to evaluate regimens before attempting OMAD.</li>
                <li><strong>People Taking Prescription Medications:</strong> Drugs that require food for proper absorption, or whose pharmacokinetics are affected by prolonged fasting, necessitate pharmacist or physician consultation.</li>
                <li><strong>People Taking Blood Pressure Medications or Managing Chronic Conditions:</strong> Fasting influences fluid balance and renal sodium handling, which can lower blood pressure and occasionally produce orthostatic symptoms (such as lightheadedness upon standing). While not all antihypertensive medications are incompatible with fasting, individuals taking blood-pressure-lowering drugs or managing cardiovascular or kidney disease should consult their healthcare provider for monitoring, as medication doses may require clinical adjustment.</li>
              </ul>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-primary tracking-tight">
                Warning Symptoms: When to Stop
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Mild hunger is expected, but dizziness, persistent lightheadedness, weakness, nausea, confusion, or heart palpitations should never be dismissed as normal adaptation. If you experience severe, persistent, or concerning symptoms, discontinue the fast immediately by consuming a balanced meal and fluids, and seek appropriate medical advice. Any acute, severe symptoms require urgent emergency care.
              </p>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
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
                <span>What does OMAD 23:1 mean?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                OMAD 23:1 describes a daily pattern where you fast for approximately 23 hours and consume your daily food in a 1-hour window. The ratio is an informal convention rather than a strict biological requirement; what matters practically is consuming all daily calories in a single, unhurried meal without grazing.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Can beginners start with OMAD?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                It is generally not advisable. Jumping directly into a 23-hour fast frequently triggers headaches, intense hunger spikes, mood irritability, and digestive distress. Most people find it significantly safer and more sustainable to begin with gentler schedules like 12:12 or 14:10, adapting gradually over several weeks.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Can you drink water during the fasting window?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Yes. Staying hydrated is essential. Plain water, sparkling water, unsweetened mineral water, black coffee, and plain unsweetened tea contain negligible calories and fit lifestyle fasting goals. However, beverage guidelines depend on the context: zero-calorie beverages are common in practical daily fasting, but excluded in fasts that forbid all liquids (such as Islamic Ramadan fasting during daylight hours) or in clinical pre-operative fasting.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Is OMAD suitable for everyone?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                No. OMAD is an intensive protocol inappropriate for many populations, including pregnant or nursing women, minors, anyone with an eating disorder history, and individuals managing chronic medical conditions or taking medications—especially insulin, glucose-lowering drugs, or blood pressure therapies—without personalized clinician guidance.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Can OMAD cause fatigue or dizziness?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Yes. Lightheadedness, sluggishness, and concentration dips can occur, especially during early adaptation. These symptoms can stem from multiple factors, including inadequate overall calories, dehydration, caffeine withdrawal, or blood pressure changes. If dizziness is severe or persistent, break your fast and consult a doctor.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>How should a balanced OMAD meal be structured?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                A balanced OMAD meal emphasizes varied whole foods rather than empty calories. Aim for a sensible portion of quality protein, plenty of fibrous vegetables, healthy fats, and complex carbohydrates. Splitting the hour into an appetizer and a main plate can also ease digestion.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Is OMAD better than 16:8?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                OMAD is not inherently superior to 16:8. In clinical trials, weight loss is primarily driven by overall caloric restriction; shorter windows do not produce greater fat loss when total calories are matched. 16:8 is far easier to balance socially and allows for distributed protein intake to preserve lean muscle.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Should you continue OMAD if you feel unwell?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                No. You should never force yourself to continue a fast if you experience severe weakness, confusion, persistent dizziness, fainting, or chest discomfort. Fasting is a voluntary dietary tool, not an endurance test. If your body signals distress, break the fast immediately with a light meal, hydrate, and seek medical guidance; urgent symptoms require immediate clinical care.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Conclusion
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            The OMAD (23:1) method represents an advanced, condensed form of intermittent fasting. Its primary advantage is daily simplicity: eliminating the time, planning, and mental energy spent organizing multiple meals.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            However, single-meal fasting involves real physiological trade-offs. Fitting complete daily protein, fiber, essential fats, and micronutrients into one hour can cause digestive discomfort and requires conscious planning. Furthermore, clinical evidence indicates that extreme meal restriction does not inherently outperform more moderate schedules like 16:8 for long-term health or body composition.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Treat OMAD as an optional lifestyle experiment rather than an obligation. Prioritize nutritional quality, listen to your body&apos;s feedback, and work with a qualified healthcare professional to determine whether a single-meal routine safely supports your individual health goals.
          </p>
        </section>

        {/* Peer-Reviewed References */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Peer-Reviewed References
          </h2>
          <ol className="list-decimal pl-6 space-y-3 text-on-surface-variant text-sm sm:text-base">
            <li>
              <strong>Stote KS, Baer DJ, Spears K, et al.</strong> (2007). <em>A controlled trial of reduced meal frequency without caloric restriction in healthy, normal-weight, middle-aged adults.</em> <strong>American Journal of Clinical Nutrition</strong>, 85(4): 981–988.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/17413096/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
              >
                <span>PubMed 17413096</span>
                <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
              </a>
            </li>
            <li>
              <strong>Carlson O, Martin B, Stote KS, et al.</strong> (2007). <em>Impact of reduced meal frequency without caloric restriction on glucose regulation in healthy, normal-weight middle-aged men and women.</em> <strong>Metabolism: Clinical and Experimental</strong>, 56(12): 1729–1734.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/17998028/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
              >
                <span>PubMed 17998028</span>
                <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
              </a>
            </li>
            <li>
              <strong>Varady KA, Cienfuegos S, Ezpeleta M, Lin S.</strong> (2022). <em>Clinical application of intermittent fasting for weight loss: progress and future directions.</em> <strong>Nature Reviews Endocrinology</strong>, 18(5): 309–321.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/35194226/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
              >
                <span>PubMed 35194226</span>
                <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
              </a>
            </li>
            <li>
              <strong>Tinsley GM, La Bounty PM.</strong> (2015). <em>Effects of intermittent fasting on body composition and clinical health markers in humans.</em> <strong>Nutrition Reviews</strong>, 73(10): 661–674.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/26374764/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
              >
                <span>PubMed 26374764</span>
                <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
              </a>
            </li>
            <li>
              <strong>Grajower MM, Horne BD.</strong> (2019). <em>Clinical Management of Intermittent Fasting in Patients with Diabetes Mellitus.</em> <strong>Current Diabetes Reports</strong>, 19(4): 15.{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/30900003/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
              >
                <span>PubMed 30900003</span>
                <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
              </a>
            </li>
            <li>
              <strong>National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK).</strong> (2023). <em>Low Blood Glucose (Hypoglycemia).</em> National Institutes of Health, U.S. Department of Health and Human Services.{" "}
              <a
                href="https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/low-blood-glucose-hypoglycemia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
              >
                <span>NIDDK Hypoglycemia Guide</span>
                <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
              </a>
            </li>
            <li>
              <strong>Institute of Medicine (IOM) / National Academies.</strong> (2005). <em>Dietary Reference Intakes for Water, Potassium, Sodium, Chloride, and Sulfate.</em> Washington, DC: The National Academies Press.{" "}
              <a
                href="https://nap.nationalacademies.org/catalog/10925/dietary-reference-intakes-for-water-potassium-sodium-chloride-and-sulfate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
              >
                <span>National Academies Catalog 10925</span>
                <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
              </a>
            </li>
          </ol>
        </section>

        {/* Safety Note */}
        <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container">
          <div className="flex items-center gap-2 mb-1">
            <ShieldAlert className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Safety Note
            </h2>
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            This article is general educational information, not individualized medical advice. OMAD is an intensive fasting protocol and is not appropriate for everyone.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If you are pregnant or breastfeeding, under 18, have a medical condition, take medication affected by food timing (especially insulin, glucose-lowering drugs, or blood pressure medications), or have a history of an eating disorder, seek individualized professional guidance before attempting OMAD.
          </p>
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
          href="/fasting-methods"
          className="text-sm font-semibold text-on-surface-variant hover:text-on-surface transition-colors"
        >
          Browse All Methods →
        </Link>
      </div>
    </article>
  );
}
