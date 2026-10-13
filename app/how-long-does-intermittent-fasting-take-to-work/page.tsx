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
  ShieldAlert,
  ArrowRight,
  Scale,
  CheckCircle2,
  BookOpen,
  ExternalLink,
  TrendingUp,
  Flame,
  Activity,
  AlertCircle,
  Calculator,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How Long Does Intermittent Fasting Take to Work? A Realistic Timeline",
  description:
    "A realistic, evidence-based timeline for intermittent fasting. Explore physiological changes across days 1–7, weeks 2–4, and month 2+, appetite adaptation, and key factors that influence results.",
  keywords: [
    "how long does intermittent fasting take to work",
    "intermittent fasting timeline",
    "when do you see results from intermittent fasting",
    "intermittent fasting results timeline",
    "how fast does intermittent fasting work",
    "intermittent fasting first week results",
    "fasting weight loss timeline",
  ],
  alternates: {
    canonical: "/how-long-does-intermittent-fasting-take-to-work",
  },
  openGraph: {
    title: "How Long Does Intermittent Fasting Take to Work? A Realistic Timeline | FastTrack",
    description:
      "A realistic, evidence-based timeline for intermittent fasting. Explore physiological changes across days 1–7, weeks 2–4, and month 2+, appetite adaptation, and key factors that influence results.",
    url: `${getSiteUrl()}/how-long-does-intermittent-fasting-take-to-work`,
    type: "article",
    publishedTime: "2026-10-13",
    modifiedTime: "2026-10-13",
    authors: ["Muhammad Usama"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Long Does Intermittent Fasting Take to Work? A Realistic Timeline | FastTrack",
    description:
      "A realistic, evidence-based timeline for intermittent fasting. Explore physiological changes across days 1–7, weeks 2–4, and month 2+, appetite adaptation, and key factors that influence results.",
  },
};

const FAQS = [
  {
    question: "How quickly can I expect to lose weight with intermittent fasting?",
    answer:
      "Meaningful fat loss typically becomes noticeable over 2 to 4 weeks, assuming an overall caloric deficit is maintained. Initial weight changes during the first 3 to 7 days predominantly represent reductions in stored glycogen and associated water weight rather than pure body fat.",
  },
  {
    question: "Why did I lose weight quickly in the first week and then slow down?",
    answer:
      "Each gram of stored glycogen in liver and muscle tissue binds approximately 3 to 4 grams of water. As your body draws down glycogen during fasting hours, you shed this bound water rapidly. Once glycogen levels stabilize, subsequent weight changes reflect actual tissue changes, which naturally proceed at a slower, sustainable pace.",
  },
  {
    question: "Does a longer fast (like 20:4 or OMAD) produce results faster than 16:8?",
    answer:
      "Not necessarily. A longer fasting window provides less time to eat, which can make creating a caloric deficit easier for some individuals. However, total daily energy balance remains the primary driver of fat loss. If overall caloric intake is equal, longer fasts do not produce dramatically faster long-term fat loss than moderate protocols like 16:8.",
  },
  {
    question: "Why am I not seeing results after two or three weeks of fasting?",
    answer:
      "The most common reason is unintentional compensatory eating during the feeding window. Consuming calorie-dense foods, liquid calories, or frequent snacks can eliminate the caloric deficit created by fasting hours. Variations in physical activity, poor sleep, and fluid retention can also mask fat loss on the scale.",
  },
  {
    question: "Can intermittent fasting improve metabolic health even without weight loss?",
    answer:
      "Yes. Clinical trials—such as early time-restricted feeding studies—have observed improvements in insulin sensitivity, blood pressure, and glycemic excursions even when caloric intake was matched to keep body weight stable. However, these physiological responses vary across individuals.",
  },
  {
    question: "What should I do if I feel dizzy, fatigued, or unwell in the first week?",
    answer:
      "Mild hunger pangs and temporary fatigue are common as your body adapts to scheduled eating. However, severe dizziness, shakiness, confusion, or fainting are abnormal warning signs. End the fast immediately with fluids and carbohydrates, and seek medical guidance if symptoms persist.",
  },
];

export default function FastingTimelinePage() {
  const siteUrl = getSiteUrl();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Long Does Intermittent Fasting Take to Work? A Realistic Timeline",
    description:
      "A realistic, evidence-based timeline for intermittent fasting. Explore physiological changes across days 1–7, weeks 2–4, and month 2+, appetite adaptation, and key factors that influence results.",
    author: {
      "@type": "Person",
      name: "Muhammad Usama",
    },
    datePublished: "2026-10-13",
    dateModified: "2026-10-13",
    publisher: {
      "@type": "Organization",
      name: "FastTrack",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/how-long-does-intermittent-fasting-take-to-work`,
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
        name: "Fasting Guides",
        item: `${siteUrl}/guides`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Fasting Timeline",
        item: `${siteUrl}/how-long-does-intermittent-fasting-take-to-work`,
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
      {/* JSON-LD Schemas */}
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
          <span>Back to All Fasting Guides</span>
        </Link>
      </div>

      {/* Header */}
      <header className="mb-8 pb-8 border-b border-surface-container">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-xs font-semibold">
            Realistic Expectations &amp; Timelines
          </span>
          <span className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>9 min read</span>
          </span>
        </div>

        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight">
          How Long Does Intermittent Fasting Take to Work? A Realistic Timeline
        </h1>

        <div className="flex flex-wrap items-center gap-4 mt-4 text-xs sm:text-sm text-on-surface-variant">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-primary" />
            <span>By Muhammad Usama</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-primary" />
            <span>Published: October 13, 2026</span>
          </div>
        </div>
      </header>

      {/* Lead Summary Callout */}
      <div className="space-y-3 font-body-lg text-base sm:text-lg text-on-surface leading-relaxed mb-10 p-5 sm:p-6 bg-surface-container-low/60 rounded-2xl border border-surface-container">
        <p>
          One of the most frequent questions from people starting intermittent fasting is: <em>&ldquo;How soon will I see results?&rdquo;</em>
        </p>
        <p>
          The answer depends fundamentally on what you define as &ldquo;working.&rdquo; Behavioral habituation, acute glycogen depletion, body fat reduction, and improvements in clinical metabolic biomarkers operate on vastly different biological timetables.
        </p>
        <p>
          Rather than relying on exaggerated internet promises of overnight transformation, this guide breaks down what clinical trials and real-world physiology reveal across days 1–7, weeks 2–4, and month 2 and beyond.
        </p>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-12 text-on-surface font-body-md text-base sm:text-lg leading-relaxed">
        {/* Section 1: Defining What "Working" Means */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Defining What &ldquo;Working&rdquo; Actually Means
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            When people ask how long fasting takes to work, they are usually thinking of the bathroom scale. However, human metabolism responds to meal timing in progressive physiological layers:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-5 rounded-2xl bg-surface-container border border-surface-container-high space-y-2">
              <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1">
                <Activity className="w-3.5 h-3.5" />
                Acute Milestones (Days)
              </span>
              <h3 className="font-headline text-lg font-bold text-on-surface">
                Habituation &amp; Fluid Shifts
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Appetite rhythms begin adjusting to regular fasting intervals. Stored glycogen decreases during fasting windows, releasing bound water and producing an early drop on the scale.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container border border-surface-container-high space-y-2">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                Chronic Milestones (Weeks to Months)
              </span>
              <h3 className="font-headline text-lg font-bold text-on-surface">
                Fat Loss &amp; Metabolic Markers
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                True adipose tissue reduction requires consistent net energy deficits over consecutive weeks. Improvements in fasting glucose, insulin sensitivity, and lipid panels emerge gradually over 8 to 12 weeks.
              </p>
            </div>
          </div>

          <p className="text-on-surface-variant leading-relaxed">
            Recognizing these distinct phases prevents premature discouragement when the rapid weight drop of the first week naturally transitions to steady, moderate progress.
          </p>
        </section>

        {/* Section 2: Phase 1: Days 1 to 7 */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Phase 1: Days 1 to 7 &mdash; The Acute Adaptation Window
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            The first week of intermittent fasting is almost entirely about psychological and biological adaptation. During this period, your body is adapting to a compressed eating window:
          </p>

          <div className="space-y-4 pt-1">
            <div className="p-5 rounded-2xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface">
                1. The Glycogen and Water Weight Phenomenon
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                In the first 3 to 7 days, individuals frequently observe a rapid scale drop of 1 to 3 kilograms (2 to 7 pounds). While encouraging, this early change is largely driven by glycogen depletion rather than body fat loss.
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Your body stores carbohydrates in the liver and skeletal muscle as glycogen. Each gram of stored glycogen binds approximately 3 to 4 grams of water. As your body utilizes these glycogen stores during the fasting window, the associated water is excreted. This is a normal physiological fluid shift, not immediate adipose loss.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface">
                2. Hunger Waves and Ghrelin Entrainment
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Hunger is largely an entrained hormonal response. The hormone ghrelin rises in anticipation of your habitual meal times. If you normally ate breakfast at 8:00 AM, ghrelin will spike around 8:00 AM during your first few days, causing noticeable hunger waves.
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Importantly, ghrelin spikes are cyclical: they rise, peak, and subside within 30 to 60 minutes even if you do not consume food. Over 5 to 7 days of consistent meal timing, peripheral circadian clocks begin resetting, and hunger signals at former meal times noticeably subside.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface">
                3. Transient Adjustment Symptoms
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Some beginners experience mild headaches, lethargy, irritability, or difficulty concentrating during days 2 through 5. These symptoms are often related to mild sodium and electrolyte excretion following lower insulin levels, or reduced caffeine intake if morning coffee was previously sweetened. Staying well-hydrated and ensuring adequate mineral intake can help manage these temporary symptoms.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Phase 2: Weeks 2 to 4 */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Phase 2: Weeks 2 to 4 &mdash; Habituation and Steady Fat Loss
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            By the second and third weeks, the initial fluid fluctuations stabilize, and the actual benefits of a consistent fasting routine begin to show:
          </p>

          <ul className="list-disc pl-6 space-y-3 text-on-surface-variant">
            <li>
              <strong>Stabilized Appetite Rhythms:</strong> Most individuals report that morning fasting hours feel substantially easier. With ghrelin entrained to the new eating window, constant cravings diminish, and hunger is experienced as a mild signal rather than an urgent demand.
            </li>
            <li>
              <strong>Emergence of True Fat Loss:</strong> When a daily caloric deficit is maintained, measurable reduction in body fat typically proceeds at a rate of approximately 0.5 to 1 kilogram (1 to 2 pounds) per week. At this stage, changes in waist circumference and clothing fit become noticeable.
            </li>
            <li>
              <strong>Consistent Energy Levels:</strong> Skipping early carbohydrate-dense meals often reduces mid-morning energy slumps and postprandial fatigue, leading to more stable perceived energy throughout the working day.
            </li>
            <li>
              <strong>Behavioral Ease:</strong> The mental friction of deciding what, when, and how much to eat is halved during fasting hours, reducing decision fatigue around food.
            </li>
          </ul>

          <p className="text-on-surface-variant leading-relaxed">
            To explore how your body transitions through different fuel sources hour by hour, read our detailed guide on{" "}
            <Link
              href="/fasting-stages"
              className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              fasting stages and metabolic switching
            </Link>
            .
          </p>
        </section>

        {/* Section 4: Phase 3: Month 2 and Beyond */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Phase 3: Month 2 and Beyond &mdash; Long-Term Health Markers
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Long-term clinical trials evaluating time-restricted eating and intermittent fasting generally measure outcomes at 8, 12, and 24 weeks. This timeframe is where deeper physiological adaptations take root:
          </p>

          <div className="space-y-4 pt-1">
            <div className="p-5 rounded-2xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface">
                1. Visceral Adiposity and Body Composition
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Systematic reviews of randomized clinical trials (such as Welton et al., 2020 and Varady et al., 2022) confirm that sustained intermittent fasting produces significant reductions in body weight and fat mass comparable to continuous caloric restriction. Reductions in abdominal and visceral fat tissue are typically prominent after 8 to 12 weeks of consistent adherence.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface">
                2. Glycemic Control and Cardiometabolic Markers
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                In individuals with overweight or prediabetes, trials demonstrate meaningful reductions in fasting plasma insulin, improvements in the homeostatic model assessment of insulin resistance (HOMA-IR), and decreases in systolic blood pressure and triglycerides after 8 to 12 weeks (Sutton et al., 2018).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface">
                3. The Natural Weight-Loss Plateau
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                As body mass decreases, your total daily energy expenditure (TDEE) naturally decreases as well. A smaller body requires fewer calories to maintain itself. If weight loss stalls around months 2 or 3, it reflects standard metabolic adaptation rather than a broken routine. For strategies on adjusting your intake, see our guide on{" "}
                <Link
                  href="/intermittent-fasting-plateau"
                  className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
                >
                  overcoming an intermittent fasting plateau
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Comparison Table */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Comparison Table: Internet Hype vs. Clinical Reality
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Online claims often present exaggerated timelines. The table below contrasts common claims with what clinical research and human physiology actually demonstrate:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-surface-container shadow-sm">
            <table className="w-full text-left text-sm text-on-surface-variant">
              <thead className="bg-surface-container text-on-surface font-headline text-xs sm:text-sm uppercase tracking-wider">
                <tr>
                  <th scope="col" className="p-3.5 sm:p-4">Timeframe</th>
                  <th scope="col" className="p-3.5 sm:p-4">Common Online Claim</th>
                  <th scope="col" className="p-3.5 sm:p-4">Physiological Reality</th>
                  <th scope="col" className="p-3.5 sm:p-4">Primary Driver</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container/60 font-body-sm">
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Days 1–3</th>
                  <td className="p-3.5 sm:p-4 text-error font-medium">Massive fat loss &amp; rapid detox</td>
                  <td className="p-3.5 sm:p-4">Glycogen breakdown and water loss; hunger peaks at habitual meal times</td>
                  <td className="p-3.5 sm:p-4">Fluid balance &amp; habit adjustment</td>
                </tr>
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Week 1</th>
                  <td className="p-3.5 sm:p-4 text-error font-medium">Metabolism completely reprogrammed</td>
                  <td className="p-3.5 sm:p-4">Initial scale drop slows; ghrelin rhythm begins adjusting; mild adjustment symptoms</td>
                  <td className="p-3.5 sm:p-4">Circadian hunger entrainment</td>
                </tr>
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Weeks 2–4</th>
                  <td className="p-3.5 sm:p-4 text-secondary font-medium">Effortless rapid shrinking</td>
                  <td className="p-3.5 sm:p-4">Steady fat loss emerges (~0.5–1 kg/week if in deficit); appetite stabilizes</td>
                  <td className="p-3.5 sm:p-4">Sustained negative energy balance</td>
                </tr>
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Months 2–3</th>
                  <td className="p-3.5 sm:p-4 text-primary font-medium">Permanent metabolic transformation</td>
                  <td className="p-3.5 sm:p-4">Significant changes in waist circumference, insulin sensitivity, and blood lipids</td>
                  <td className="p-3.5 sm:p-4">Long-term behavioral consistency</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6: Factors That Influence How Fast You See Results */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Key Factors That Influence Your Individual Timeline
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            No two individuals experience identical timelines. Several fundamental physiological and behavioral factors determine how quickly you observe changes:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-5 rounded-2xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-base font-bold text-on-surface">
                1. Total Daily Energy Balance
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Fasting does not bypass the laws of thermodynamics. If you consume more calories during your feeding window than you expend across 24 hours, you will not lose body fat, regardless of whether your fasting window is 16, 18, or 20 hours.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-base font-bold text-on-surface">
                2. Baseline Metabolic Health
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Individuals with existing insulin resistance, hyperinsulinemia, or prediabetes may take longer to mobilize stored body fat efficiently compared to metabolically flexible individuals.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-base font-bold text-on-surface">
                3. Dietary Quality and Protein Intake
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Consuming adequate dietary protein (1.2 to 2.0 grams per kilogram of body weight) during your eating window helps preserve lean muscle mass and promotes satiety, preventing overeating.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-base font-bold text-on-surface">
                4. Sleep and Stress Management
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Chronic sleep deprivation elevates circulating cortisol and ghrelin while impairing insulin sensitivity, significantly increasing cravings for ultra-processed foods and blunting fasting progress.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Common Pitfalls That Delay Results */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Common Pitfalls That Stall or Delay Results
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            If you have been fasting for several weeks without noticing changes in clothing fit or body weight, inspect these frequent hurdles:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
            <li>
              <strong>Unconscious Eating Window Compensation:</strong> Subconsciously eating larger portions or snacking continuously during feeding hours because you &ldquo;earned it&rdquo; by fasting.
            </li>
            <li>
              <strong>Liquid Calories and Condiments:</strong> Sugar-laden specialty coffees, salad dressings, sauces, or alcohol during the eating window adding several hundred unaccounted calories.
            </li>
            <li>
              <strong>Inconsistent Schedule Timing:</strong> Shifting your fasting window by 4 to 6 hours between weekdays and weekends disrupts circadian alignment and prolongs adaptation hunger.
            </li>
            <li>
              <strong>Relying on the Scale Alone:</strong> Weight fluctuates by 1 to 2 kg daily due to hydration, sodium intake, bowel regularity, and menstrual cycles. Using a tape measure or clothing fit provides a more accurate view of body composition.
            </li>
          </ul>
        </section>

        {/* Section 8: Health Limitations and Safety */}
        <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container">
          <div className="flex items-center gap-2 mb-1">
            <ShieldAlert className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Clinical Safety Boundaries &amp; High-Risk Populations
            </h2>
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            Fasting timelines must always remain secondary to clinical safety. Intermittent fasting is not appropriate for everyone:
          </p>

          <div className="space-y-3 pt-1 text-sm sm:text-base text-on-surface-variant">
            <ul className="list-disc pl-6 space-y-2.5">
              <li>
                <strong>Disordered Eating History:</strong> Intermittent fasting is contraindicated for individuals with an active or past history of an eating disorder (such as anorexia nervosa, bulimia nervosa, or binge eating disorder). Strict time boundaries can exacerbate food obsession and binge-restrict cycles.
              </li>
              <li>
                <strong>Diabetes and Medications:</strong> Anyone taking insulin or insulin secretagogues (such as sulfonylureas) faces a high risk of dangerous hypoglycemia if meal timing is altered without physician supervision. Never adjust medication timing or dosages independently to maintain a fast.
              </li>
              <li>
                <strong>Pregnancy, Breastfeeding, and Adolescents:</strong> Consistent energy and micronutrient intake are essential during pregnancy, lactation, childhood, and adolescence to support fetal organ development, milk production, and skeletal growth.
              </li>
              <li>
                <strong>Underweight Individuals:</strong> Anyone with a body mass index (BMI) below 18.5 should not practice fasting protocols without medical management.
              </li>
              <li>
                <strong>Red-Flag Symptoms:</strong> End a fast immediately with fluids and a balanced snack if you experience persistent dizziness, fainting, severe tremors, confusion, or heart palpitations.
              </li>
            </ul>
          </div>

          <p className="text-xs sm:text-sm text-on-surface-variant pt-2 border-t border-surface-container/60">
            For additional educational and health information, please review our{" "}
            <Link href="/medical-disclaimer" className="text-primary font-semibold underline">
              Medical Disclaimer
            </Link>
            .
          </p>
        </section>

        {/* Section 9: Scientific Evidence & References */}
        <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-surface-container border border-surface-container-high">
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Scientific Evidence &amp; References
            </h2>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            The timeline milestones and physiological mechanisms discussed in this article are grounded in peer-reviewed clinical nutrition literature:
          </p>

          <ol className="list-decimal pl-5 space-y-3 text-xs sm:text-sm text-on-surface-variant">
            <li>
              <strong>Varady, K. A., Cienfuegos, S., Ezpeleta, M., &amp; Gabel, K. (2022).</strong> Clinical application of intermittent fasting for weight loss: progress and future directions. <em>Nature Reviews Endocrinology</em>, 18(5), 309–321.{" "}
              <a
                href="https://www.nature.com/articles/s41574-022-00638-x"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                <span>[Nature Reviews]</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <strong>Welton, S., Minty, R., O&apos;Driscoll, T., et al. (2020).</strong> Intermittent fasting and weight loss: Systematic review. <em>Canadian Family Physician</em>, 66(2), 117–125.{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7021351/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                <span>[PMC7021351]</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <strong>Sutton, E. F., Beyl, R., Early, K. S., et al. (2018).</strong> Early Time-Restricted Feeding Improves Insulin Sensitivity, Blood Pressure, and Oxidative Stress Even without Weight Loss in Men with Prediabetes. <em>Cell Metabolism</em>, 27(6), 1212–1221.{" "}
              <a
                href="https://www.cell.com/cell-metabolism/fulltext/S1550-4131(18)30253-5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                <span>[Cell Metabolism]</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <strong>Templeman, I., Smith, H. A., Chowdhury, E., et al. (2021).</strong> A randomized controlled trial to isolate the effects of fasting on energy balance and physical activity. <em>Science Translational Medicine</em>, 13(598), eabd8034.{" "}
              <a
                href="https://www.science.org/doi/10.1126/scitranslmed.abd8034"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                <span>[Science Translational Medicine]</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <strong>Liu, D., Huang, Y., Huang, C., et al. (2022).</strong> Calorie Restriction with or without Time-Restricted Eating in Weight Loss. <em>New England Journal of Medicine</em>, 386(16), 1495–1504.{" "}
              <a
                href="https://www.nejm.org/doi/full/10.1056/NEJMoa2114833"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                <span>[NEJM]</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          </ol>
        </section>

        {/* Section 10: FAQ Section */}
        <section className="space-y-6">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2"
              >
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

        {/* Section 11: Next Steps & Calculator CTA */}
        <section className="p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container space-y-4">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            <h2 className="font-headline text-2xl font-bold text-primary tracking-tight">
              Build Your Personalized Fasting Schedule
            </h2>
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            Finding a schedule that fits your daily sleep, work, and family routine is the single most important factor for long-term consistency. Use our free, circadian-aligned fasting calculator to map out your hours.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/#calculator"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-on-primary font-semibold shadow-sm hover:bg-primary/90 transition-colors text-sm"
            >
              <span>Calculate Your Schedule</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/fasting-methods/16-8"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-container text-on-surface font-semibold border border-surface-container-high hover:bg-surface-container-high transition-colors text-sm"
            >
              <span>Explore 16:8 Fasting Guide</span>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
