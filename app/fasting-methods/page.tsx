import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { PROTOCOL_LIST } from "@/lib/calculator/protocols";
import { Compass, Clock, Activity, ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";
import { getSiteUrl } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Fasting Methods & Protocol Directory",
  description:
    "Compare all intermittent fasting protocols: 16:8, 14:10, 12:12, 18:6, 20:4 Warrior, OMAD (23:1), and 5:2 weekly. Find your metabolic match.",
  alternates: {
    canonical: "/fasting-methods",
  },
};

const PROTOCOL_COMPARISON_DATA = [
  {
    name: "12:12 Circadian",
    ratio: "12:12",
    fastHours: "12h",
    eatHours: "12h",
    meals: "3 standard meals",
    bestFor: "Day-night alignment & digestive rest during sleep",
    difficulty: "Gentle",
    slug: "12-12",
  },
  {
    name: "14:10 Gentle Reset",
    ratio: "14:10",
    fastHours: "14h",
    eatHours: "10h",
    meals: "3 meals or 2 meals + snack",
    bestFor: "Beginners curbing late-night evening snacking",
    difficulty: "Beginner",
    slug: "14-10",
  },
  {
    name: "16:8 Protocol",
    ratio: "16:8",
    fastHours: "16h",
    eatHours: "8h",
    meals: "2 meals + optional snack",
    bestFor: "Everyday lifestyle consistency & metabolic health",
    difficulty: "Optimal",
    slug: "16-8",
  },
  {
    name: "18:6 Accelerated",
    ratio: "18:6",
    fastHours: "18h",
    eatHours: "6h",
    meals: "2 meals, zero snacking",
    bestFor: "Deepened metabolic rest & daytime mental focus",
    difficulty: "Accelerated",
    slug: "18-6",
  },
  {
    name: "20:4 Warrior",
    ratio: "20:4",
    fastHours: "20h",
    eatHours: "4h",
    meals: "1 primer snack + 1 main feast",
    bestFor: "Experienced fasters prioritizing peak daytime productivity",
    difficulty: "Advanced",
    slug: "20-4",
  },
  {
    name: "OMAD (23:1)",
    ratio: "23:1",
    fastHours: "23h",
    eatHours: "1h",
    meals: "1 comprehensive feast",
    bestFor: "Veteran practitioners managing dense single meals",
    difficulty: "Intensive",
    slug: "omad",
  },
  {
    name: "5:2 Weekly Protocol",
    ratio: "5:2",
    fastHours: "Weekly",
    eatHours: "Weekly",
    meals: "5 regular days, 2 days @ 500 kcal",
    bestFor: "Those who dislike daily hourly clocks & prefer weekly rhythm",
    difficulty: "Weekly Pattern",
    slug: "5-2",
  },
];

const DIRECT_FAQS = [
  {
    question: "Which fasting method is the best starting point for a complete beginner?",
    answer:
      "Most newcomers succeed best by starting with 14:10 or 16:8. A 14:10 schedule simply requires finishing dinner by 8:00 PM and waiting until 10:00 AM for breakfast. Once this feels natural after 1 to 2 weeks, stepping up to 16:8 provides deeper metabolic rest while remaining sustainable for work and family life.",
  },
  {
    question: "Can you change or cycle between different fasting methods during the week?",
    answer:
      "Yes. Intermittent fasting is a flexible lifestyle tool, not an inflexible dogma. Many practitioners maintain a 16:8 or 18:6 window Monday through Friday and switch to a relaxed 14:10 or 12:12 window on weekends to accommodate family brunch or social events.",
  },
  {
    question: "How does the weekly 5:2 method differ from daily hourly windows?",
    answer:
      "Daily protocols (such as 16:8 or 18:6) operate on a 24-hour circadian clock every single day. The 5:2 method operates on a weekly calendar: you eat normally according to appetite on 5 days, and reduce your caloric intake to approximately 500-600 kcal on 2 non-consecutive days (such as Monday and Thursday).",
  },
];

export default function FastingMethodsIndexPage() {
  const siteUrl = getSiteUrl();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: DIRECT_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mb-12">
        <span className="font-label-sm text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest flex items-center gap-1.5">
          <Compass className="w-4 h-4" />
          <span>Complete Protocol Directory</span>
        </span>
        <h1 className="font-headline text-3xl sm:text-5xl font-bold text-primary tracking-tight mt-2">
          Intermittent Fasting Methods
        </h1>
        <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mt-3 leading-relaxed">
          Explore evidence-based fasting protocols categorized by duration, physiological intensity, and daily flexibility. Every method includes an interactive schedule generator.
        </p>
      </div>

      {/* Protocol Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {PROTOCOL_LIST.map((protocol) => (
          <div
            key={protocol.id}
            className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container hover:border-surface-container-high shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-headline text-xl font-bold text-on-surface">
                  {protocol.name}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-xs font-semibold tabular-numbers">
                  {protocol.ratio}
                </span>
              </div>

              <span className="text-xs font-semibold text-secondary block mb-3">
                {protocol.tagline}
              </span>

              <p className="font-body-sm text-sm text-on-surface-variant mb-4 leading-relaxed">
                {protocol.description}
              </p>

              <div className="space-y-2 mb-4 text-xs text-on-surface-variant">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-on-surface font-medium">{protocol.exampleSchedule}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Activity className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{protocol.cellularMarker}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-surface-container/60 flex items-center justify-between gap-2">
              <Link
                href={`/fasting-methods/${protocol.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-container transition-colors"
              >
                <span>Method Guide &amp; Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Protocol Comparison Table Matrix */}
      <section className="mt-16 pt-10 border-t border-surface-container">
        <div className="max-w-3xl mb-8">
          <span className="font-label-sm text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest block mb-1">
            Side-by-Side Comparison
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Fasting Protocols Comparison Matrix
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
            Compare duration, meal frequency, difficulty levels, and ideal lifestyle fit across all seven evidence-informed fasting schedules.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-surface-container bg-surface-container-lowest shadow-sm">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-surface-container font-headline text-xs font-bold uppercase tracking-wider text-on-surface">
                <th className="py-3.5 px-4">Protocol</th>
                <th className="py-3.5 px-4">Fasting Window</th>
                <th className="py-3.5 px-4">Eating Window</th>
                <th className="py-3.5 px-4">Meal Frequency</th>
                <th className="py-3.5 px-4">Best Fit</th>
                <th className="py-3.5 px-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container font-body-sm text-on-surface-variant">
              {PROTOCOL_COMPARISON_DATA.map((row) => (
                <tr key={row.slug} className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-on-surface whitespace-nowrap">
                    {row.name}
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap tabular-numbers">{row.fastHours}</td>
                  <td className="py-3.5 px-4 whitespace-nowrap tabular-numbers">{row.eatHours}</td>
                  <td className="py-3.5 px-4 whitespace-nowrap">{row.meals}</td>
                  <td className="py-3.5 px-4 min-w-[200px] leading-relaxed">{row.bestFor}</td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <Link
                      href={`/fasting-methods/${row.slug}`}
                      className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      <span>Calculate</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Decision Framework: Which Protocol is Right for You? */}
      <section className="mt-16 pt-10 border-t border-surface-container">
        <div className="max-w-3xl mb-8">
          <span className="font-label-sm text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest block mb-1">
            Personalized Routine Selection
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            How to Choose Your Ideal Fasting Method
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
            Selecting a schedule comes down to matching biological intent with your actual social, work, and sleep routine. Use this practical decision guide:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-3">
            <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-xs font-semibold inline-block">
              For Newcomers &amp; Light Sleepers
            </span>
            <h3 className="font-headline text-lg font-bold text-on-surface">
              Start with 14:10 or 16:8
            </h3>
            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
              If you have never fasted before or currently snack late into the evening, begin with the{" "}
              <Link href="/fasting-methods/14-10" className="text-primary font-semibold hover:underline">
                14:10 Gentle Reset
              </Link>
              . It establishes a healthy 14-hour overnight pause while leaving 10 hours for 3 relaxed meals. Once comfortable, advance to the{" "}
              <Link href="/fasting-methods/16-8" className="text-primary font-semibold hover:underline">
                16:8 Protocol
              </Link>{" "}
              for greater metabolic rest.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-3">
            <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-xs font-semibold inline-block">
              For Experienced Fasters &amp; Fat-Adaptation
            </span>
            <h3 className="font-headline text-lg font-bold text-on-surface">
              Progress to 18:6 or 20:4 Warrior
            </h3>
            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
              If you have practiced 16:8 for over a month and want sustained daytime mental clarity and deeper cellular rest, try{" "}
              <Link href="/fasting-methods/18-6" className="text-primary font-semibold hover:underline">
                18:6 Accelerated
              </Link>{" "}
              with 2 structured meals. For seasoned practitioners seeking single-window evening feast logistics, explore the{" "}
              <Link href="/fasting-methods/20-4" className="text-primary font-semibold hover:underline">
                20:4 Warrior
              </Link>
              .
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-3">
            <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-xs font-semibold inline-block">
              For Shift Workers &amp; Frequent Travelers
            </span>
            <h3 className="font-headline text-lg font-bold text-on-surface">
              Adopt the 5:2 Weekly Pattern
            </h3>
            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
              When work shifts make daily hourly windows unpredictable, the{" "}
              <Link href="/fasting-methods/5-2" className="text-primary font-semibold hover:underline">
                5:2 Weekly Protocol
              </Link>{" "}
              removes daily timer constraints. You eat balanced meals according to natural appetite on 5 days, while placing two non-consecutive reduced-calorie fasting days (conventionally budgeted around 500–600 kcal) on lighter schedule days.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-3">
            <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-xs font-semibold inline-block">
              For Single-Meal Simplicity
            </span>
            <h3 className="font-headline text-lg font-bold text-on-surface">
              OMAD (One Meal A Day)
            </h3>
            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
              For veterans who prefer spending zero daytime energy on food preparation and eating,{" "}
              <Link href="/fasting-methods/omad" className="text-primary font-semibold hover:underline">
                OMAD (23:1)
              </Link>{" "}
              condenses daily nutrition into one hour. Requires strict attention to electrolyte balance and nutrient density.
            </p>
          </div>
        </div>
      </section>

      {/* Directory FAQ Section */}
      <section className="mt-16 pt-10 border-t border-surface-container">
        <div className="max-w-3xl mb-8">
          <span className="font-label-sm text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest block mb-1">
            Common Questions
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Frequently Asked Questions About Fasting Methods
          </h2>
        </div>

        <div className="space-y-4 max-w-4xl">
          {DIRECT_FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm"
            >
              <h3 className="font-headline text-base sm:text-lg font-bold text-on-surface mb-2 flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>{faq.question}</span>
              </h3>
              <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Relevant Guides Cross-Linking */}
      <div className="mt-16 pt-10 border-t border-surface-container">
        <h2 className="font-headline text-2xl font-bold text-primary tracking-tight mb-4">
          Understanding Fasting Physiology &amp; Routine Design
        </h2>
        <p className="font-body-md text-sm sm:text-base text-on-surface-variant max-w-3xl mb-6 leading-relaxed">
          Before committing to a specific daily hourly window or weekly routine, explore our foundational guides on biological mechanisms, exercise timing, and window selection:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/guides/how-does-intermittent-fasting-work"
            className="p-4 rounded-xl bg-surface-container-low border border-surface-container hover:border-surface-container-high transition-all flex flex-col justify-between group"
          >
            <div>
              <span className="font-label-sm text-xs text-secondary font-bold uppercase tracking-wider block mb-1">
                Metabolic Science
              </span>
              <span className="font-headline text-base font-bold text-on-surface group-hover:text-primary transition-colors block">
                How Does Fasting Work?
              </span>
              <p className="font-body-sm text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                Learn the shift from glucose to fat burning and how metabolic switching operates.
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-3">
              <span>Read Science Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/guides/exercise-while-fasting"
            className="p-4 rounded-xl bg-surface-container-low border border-surface-container hover:border-surface-container-high transition-all flex flex-col justify-between group"
          >
            <div>
              <span className="font-label-sm text-xs text-secondary font-bold uppercase tracking-wider block mb-1">
                Movement &amp; Training
              </span>
              <span className="font-headline text-base font-bold text-on-surface group-hover:text-primary transition-colors block">
                Exercise While Fasting
              </span>
              <p className="font-body-sm text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                Timing workouts around fasting windows, cardio vs. strength, and hydration tips.
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-3">
              <span>Read Exercise Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/guides/how-to-choose-a-fasting-window"
            className="p-4 rounded-xl bg-surface-container-low border border-surface-container hover:border-surface-container-high transition-all flex flex-col justify-between group"
          >
            <div>
              <span className="font-label-sm text-xs text-secondary font-bold uppercase tracking-wider block mb-1">
                Practical Planning
              </span>
              <span className="font-headline text-base font-bold text-on-surface group-hover:text-primary transition-colors block">
                Choosing Your Window
              </span>
              <p className="font-body-sm text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                How to align fasting and eating intervals with work, sleep, and social commitments.
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-3">
              <span>Read Planning Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
