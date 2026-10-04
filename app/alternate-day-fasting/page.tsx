import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/config/site";
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
  Scale,
  CalendarDays,
  Utensils,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Alternate-Day Fasting: How ADF Works, Protocol Types & Evidence",
  description:
    "A clinical guide to Alternate-Day Fasting (ADF): zero-calorie vs modified 500-kcal protocols, comparison with 5:2 and 16:8, trial evidence on weight loss and adherence, and safety boundaries.",
  keywords: [
    "alternate day fasting",
    "alternate-day fasting",
    "ADF fasting",
    "modified alternate day fasting",
    "alternate day fasting vs 5 2",
    "ADF diet",
    "every other day fasting",
    "intermittent fasting alternate day",
  ],
  alternates: {
    canonical: "/alternate-day-fasting",
  },
  openGraph: {
    title: "Alternate-Day Fasting: How ADF Works, Protocol Types & Evidence | FastTrack",
    description:
      "A clinical guide to Alternate-Day Fasting (ADF): zero-calorie vs modified 500-kcal protocols, comparison with 5:2 and 16:8, trial evidence on weight loss and adherence, and safety boundaries.",
    url: `${getSiteUrl()}/alternate-day-fasting`,
    type: "article",
    publishedTime: "2026-10-04",
    modifiedTime: "2026-10-04",
    authors: ["Muhammad Usama"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alternate-Day Fasting: How ADF Works, Protocol Types & Evidence | FastTrack",
    description:
      "A clinical guide to Alternate-Day Fasting (ADF): zero-calorie vs modified protocols, comparison with 5:2 and 16:8, trial evidence, and safety boundaries.",
  },
};

const FAQS = [
  {
    question: "Is alternate-day fasting more effective for weight loss than daily calorie restriction?",
    answer:
      "Clinical trials, such as the landmark 1-year randomized trial led by Dr. John Trepanowski and published in JAMA Internal Medicine (2017), found that alternate-day fasting produced equivalent—not superior—weight loss compared to standard daily calorie restriction. In addition, the trial reported significantly higher dropout rates in the ADF group (38%) compared to daily restriction (29%), demonstrating that ADF poses substantial adherence challenges for many individuals.",
  },
  {
    question: "What is the difference between complete ADF and modified ADF?",
    answer:
      "In complete (zero-calorie) alternate-day fasting, no caloric food or beverages are consumed on fast days (only water, black coffee, and unsweetened tea). In modified alternate-day fasting (mADF), individuals consume a small, nutrient-dense meal supplying roughly 20–25% of baseline daily energy needs (typically 500 kcal) during the fast day, which substantially improves compliance, social sustainability, and reduces severe hunger spikes.",
  },
  {
    question: "How does alternate-day fasting differ from the 5:2 diet?",
    answer:
      "Both protocols use reduced-calorie fast days, but their weekly frequency differs substantially. The 5:2 protocol incorporates only 2 non-consecutive fast days per week (and 5 standard eating days). In contrast, alternate-day fasting alternates every other day, resulting in 3 to 4 fast days every single week. This makes ADF substantially more intensive with nearly double the weekly caloric restriction volume.",
  },
  {
    question: "Can I exercise on the fasting days of an ADF schedule?",
    answer:
      "Light to moderate physical activity (such as walking, yoga, or easy cycling) is generally well tolerated. However, high-intensity interval training (HIIT) or heavy resistance training on zero-calorie fasting days can lead to acute dizziness, reduced force output, and impaired muscle recovery. Many athletes schedule heavy training on feast days when muscle glycogen and hydration are fully replenished.",
  },
  {
    question: "Who should avoid alternate-day fasting?",
    answer:
      "Alternate-day fasting is contraindicated for individuals with a history of eating disorders, pregnant or lactating women, adolescents, underweight individuals, and patients with type 1 diabetes or advanced chronic kidney disease. Individuals taking blood-sugar or blood-pressure medications face severe risks of hypoglycemia or hypotension and must never attempt ADF without direct medical supervision.",
  },
];

export default function AlternateDayFastingPage() {
  const siteUrl = getSiteUrl();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Alternate-Day Fasting: How ADF Works, Protocol Types & Evidence",
    description:
      "A clinical guide to Alternate-Day Fasting (ADF): zero-calorie vs modified 500-kcal protocols, comparison with 5:2 and 16:8, trial evidence on weight loss and adherence, and safety boundaries.",
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
      "@id": `${siteUrl}/alternate-day-fasting`,
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
        name: "Alternate-Day Fasting",
        item: `${siteUrl}/alternate-day-fasting`,
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
          href="/fasting-methods"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-container transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Fasting Methods</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-8 pb-8 border-b border-surface-container">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-xs font-semibold">
            Periodic Fasting Protocol
          </span>
          <span className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>11 min read</span>
          </span>
        </div>

        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight">
          Alternate-Day Fasting: How ADF Works, Protocol Types &amp; Evidence
        </h1>

        <div className="flex flex-wrap items-center gap-4 mt-4 text-xs sm:text-sm text-on-surface-variant">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-primary" />
            <span>By Muhammad Usama</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-primary" />
            <span>Published: October 4, 2026</span>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <div className="space-y-10 sm:space-y-12">
        {/* Lead Section */}
        <section className="space-y-4">
          <p className="font-body-lg text-base sm:text-lg text-on-surface leading-relaxed">
            While daily time-restricted feeding (like 16:8) focuses on condensing your eating hours each day, <strong>Alternate-Day Fasting (ADF)</strong> structures your nutrition on a whole-day cadence: you eat normally on one day, and fast the next.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Because ADF is one of the most rigorously investigated intermittent fasting paradigms in clinical trials, it has generated intense interest among researchers and practitioners alike. However, popular media often exaggerates its benefits while minimizing its substantial adherence challenges.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            This guide breaks down how ADF is structured, compares strict zero-calorie ADF against modified 500-kcal protocols, evaluates the peer-reviewed clinical trial evidence, and provides an honest assessment of who may benefit and who should choose a gentler protocol.
          </p>
        </section>

        {/* Section 1: How ADF Works & The 2 Protocol Variations */}
        <section className="space-y-6">
          <div>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              How Alternate-Day Fasting Works: Complete vs Modified
            </h2>
            <p className="text-on-surface-variant leading-relaxed mt-2">
              In clinical literature—such as reviews led by Dr. Krista Varady in{" "}
              <a
                href="https://www.nature.com/articles/s41574-022-00638-x"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
              >
                <span>Nature Reviews Endocrinology</span>
                <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
              </a>
              —alternate-day fasting divides into two distinct operational formats:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Complete ADF */}
            <div className="p-6 rounded-2xl bg-surface-container border border-surface-container-high space-y-3">
              <span className="px-2.5 py-0.5 rounded-full bg-error/15 text-error text-xs font-bold uppercase tracking-wider">
                Format 1: Strict Zero-Calorie
              </span>
              <h3 className="font-headline text-xl font-bold text-on-surface">
                Complete (Zero-Calorie) ADF
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                On fast days, individuals consume <strong>zero caloric food or beverages for a full 36-hour window</strong> (from dinner on Day 1, through all of Day 2, until breakfast on Day 3). Only non-caloric fluids—water, black coffee, and unsweetened plain tea—are permitted.
              </p>
              <div className="p-3.5 rounded-xl bg-surface-container-lowest text-xs text-on-surface-variant border border-surface-container/60 space-y-1">
                <strong>Practical Reality:</strong> While producing high rates of fat mobilization, zero-calorie ADF presents extreme social friction, sleep disruption, and hunger spikes that cause high long-term attrition.
              </div>
            </div>

            {/* Modified ADF */}
            <div className="p-6 rounded-2xl bg-surface-container border border-surface-container-high space-y-3">
              <span className="px-2.5 py-0.5 rounded-full bg-primary/15 text-primary text-xs font-bold uppercase tracking-wider">
                Format 2: Research Standard
              </span>
              <h3 className="font-headline text-xl font-bold text-on-surface">
                Modified ADF (mADF / 500 kcal)
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                On fast days, individuals consume approximately <strong>20% to 25% of baseline daily energy needs</strong> (typically 500 kcal for women, 600 kcal for men), eaten either as a single midday meal or small spaced servings. On feast days, food is consumed ad libitum according to natural appetite.
              </p>
              <div className="p-3.5 rounded-xl bg-surface-container-lowest text-xs text-on-surface-variant border border-surface-container/60 space-y-1">
                <strong>Practical Reality:</strong> Modified ADF is the version most frequently studied in human clinical trials because the 500-kcal buffer dramatically improves adherence while preserving the weekly caloric deficit.
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Comparing ADF with 5:2 and Daily TRE */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            How ADF Differs From 5:2 and Time-Restricted Eating
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            People frequently confuse alternate-day fasting with the 5:2 diet or standard daily 16:8. While all involve fasting windows, their weekly physiological demand differs substantially:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-surface-container shadow-sm">
            <table className="w-full text-left text-sm text-on-surface-variant">
              <thead className="bg-surface-container text-on-surface font-headline text-xs sm:text-sm uppercase tracking-wider">
                <tr>
                  <th scope="col" className="p-3.5 sm:p-4">Protocol Dimension</th>
                  <th scope="col" className="p-3.5 sm:p-4">Alternate-Day Fasting (ADF)</th>
                  <th scope="col" className="p-3.5 sm:p-4">5:2 Weekly Protocol</th>
                  <th scope="col" className="p-3.5 sm:p-4">Daily 16:8 (TRE)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container/60">
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Weekly Cadence</th>
                  <td className="p-3.5 sm:p-4 font-medium text-primary">Alternates every 24 hours (3–4 fast days/wk)</td>
                  <td className="p-3.5 sm:p-4">2 fixed non-consecutive days (5 normal days)</td>
                  <td className="p-3.5 sm:p-4">Repeated daily (7 days/wk)</td>
                </tr>
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Fast Day Energy Intake</th>
                  <td className="p-3.5 sm:p-4">0 kcal or ~500 kcal</td>
                  <td className="p-3.5 sm:p-4">~500 to 600 kcal</td>
                  <td className="p-3.5 sm:p-4">Zero calories for 16 hours, normal food in 8h</td>
                </tr>
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Social &amp; Family Disruption</th>
                  <td className="p-3.5 sm:p-4 text-error font-medium">High (shifting schedule every week)</td>
                  <td className="p-3.5 sm:p-4">Moderate (e.g., choose Mon &amp; Thu)</td>
                  <td className="p-3.5 sm:p-4 text-secondary font-medium">Low (daily predictable routine)</td>
                </tr>
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Best User Profile</th>
                  <td className="p-3.5 sm:p-4">Experienced fasters needing aggressive deficit</td>
                  <td className="p-3.5 sm:p-4">Individuals who dislike daily timers</td>
                  <td className="p-3.5 sm:p-4">Long-term sustainable lifestyle adopters</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs sm:text-sm text-on-surface-variant pt-1">
            Compare other schedules with our{" "}
            <Link href="/fasting-methods/5-2" className="text-primary font-semibold underline">
              5:2 weekly guide
            </Link>{" "}
            and{" "}
            <Link href="/guides/how-to-choose-a-fasting-window" className="text-primary font-semibold underline">
              how to choose a fasting window guide
            </Link>
            .
          </p>
        </section>

        {/* Section 3: Clinical Evidence on Weight Loss & Adherence */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Do Clinical Trials Show About Weight Loss &amp; Health?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            The most cited clinical investigation of alternate-day fasting is the randomized clinical trial published by Trepanowski et al. in{" "}
            <a
              href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2623528"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>JAMA Internal Medicine (2017)</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>
            , which followed 100 metabolically healthy adults with obesity across one full year (6 months weight loss, 6 months maintenance).
          </p>

          <div className="space-y-3 p-5 rounded-2xl bg-surface-container-low border border-surface-container">
            <h3 className="font-headline text-lg font-bold text-on-surface">
              Key Clinical Trial Findings:
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-on-surface-variant list-disc pl-5">
              <li>
                <strong>Equal Weight Loss to Daily Restriction:</strong> At month 12, weight loss was not significantly different between the alternate-day fasting group (-6.0%) and the daily calorie-restricted group (-5.3%). ADF provided no metabolic &ldquo;magic&rdquo; beyond the energy deficit it created.
              </li>
              <li>
                <strong>No Superiority in Cardiovascular Markers:</strong> Blood pressure, heart rate, fasting glucose, and fasting insulin improved similarly in both calorie-restricted groups without unique advantages from the every-other-day pattern.
              </li>
              <li>
                <strong>Higher Dropout Rate in ADF:</strong> Dropout rates were 38% in the ADF group versus 29% in the daily calorie restriction group. Participants frequently reported that eating 25% of needs every other day felt socially isolating and psychologically demanding over extended months.
              </li>
              <li>
                <strong>Feast Day Compensation is Modest:</strong> Contrary to popular fears that dieters would consume 300% of their calorie needs on feast days, trials consistently show feast-day intake typically hovers around 100% to 115% of maintenance requirements, resulting in a net weekly deficit.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4: Practical Fast-Day Structuring */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Practical Execution: Structuring the 500-kcal Fast Day
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            If you and your healthcare professional decide that modified ADF is appropriate, the composition of your 500-kcal fast day determines whether you experience severe fatigue or steady focus:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface">
                Timing: One Meal vs Spaced Servings
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Most clinical trial protocols position the 500-kcal meal as a single sitting between 12:00 PM and 2:00 PM (lunch), or in the early evening (dinner). Consuming the calories in a single sitting extends the contiguous zero-energy fasting period on both sides of the meal, whereas dividing 500 kcal into tiny snacks often stimulates appetite without providing satiety.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface">
                Nutrient Density: Satiety Over Refined Starches
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Prioritize lean proteins, fibrous cruciferous vegetables, and high-volume leafy greens (e.g., grilled chicken breast with a massive steamed broccoli bowl and olive oil drizzle, or baked salmon with roasted zucchini). High-protein, fiber-dense meals slow gastric emptying and blunt ghrelin spikes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Safety and Limitations */}
        <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container">
          <div className="flex items-center gap-2 mb-1">
            <ShieldAlert className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Safety Boundaries and Contraindications
            </h2>
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            Because alternate-day fasting involves frequent, intensive calorie restriction, safety precautions are paramount:
          </p>
          <div className="space-y-2 pt-2 text-sm sm:text-base text-on-surface-variant">
            <p><strong>ADF is strictly contraindicated for:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Anyone with an active or previous history of eating disorders or disordered eating patterns.</li>
              <li>Pregnant, planning to conceive, or actively nursing mothers.</li>
              <li>Individuals with type 1 diabetes, or insulin-treated type 2 diabetes (extreme hypoglycemia risk).</li>
              <li>Individuals taking diuretic medications, lithium, or medications that require consistent daily food intake.</li>
              <li>Underweight individuals (BMI under 18.5) or frail older adults prone to sarcopenia.</li>
            </ul>
          </div>
          <p className="text-xs sm:text-sm text-on-surface-variant pt-2 border-t border-surface-container/60">
            Never attempt alternate-day fasting without prior consultation with a qualified medical provider. Review our{" "}
            <Link href="/medical-disclaimer" className="text-primary font-semibold underline">
              Medical Disclaimer
            </Link>{" "}
            for additional health safety guidelines.
          </p>
        </section>

        {/* Section 6: FAQs */}
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

        {/* Section 7: Next Steps */}
        <section className="p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container space-y-4">
          <h2 className="font-headline text-2xl font-bold text-primary tracking-tight">
            Looking for a More Sustainable Daily Schedule?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            If alternate-day fasting sounds too disruptive for your lifestyle, standard time-restricted eating offers a predictable, highly sustainable alternative. Use our fasting calculator to map out a personalized 16:8 or 14:10 schedule.
          </p>
          <div className="pt-2">
            <Link
              href="/#calculator"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary font-semibold shadow-sm hover:bg-primary/90 transition-colors"
            >
              <span>Explore FastTrack Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
