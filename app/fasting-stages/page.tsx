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
  Sparkles,
  ShieldAlert,
  Flame,
  ArrowRight,
  Layers,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fasting Stages: What Real Physiology Shows vs Common Myths",
  description:
    "Explore the physiological stages of fasting: the fed state, post-absorptive transition, fat mobilization, and ketosis. Understand scientific reality, individual variability, and common myths.",
  keywords: [
    "fasting stages",
    "stages of fasting",
    "what happens when you fast",
    "fasting timeline",
    "metabolic switch",
    "autophagy timeline",
    "fasting physiology",
    "ketosis fasting timeline",
    "intermittent fasting stages",
  ],
  alternates: {
    canonical: "/fasting-stages",
  },
  openGraph: {
    title: "Fasting Stages: What Real Physiology Shows vs Common Myths | FastTrack",
    description:
      "Explore the physiological stages of fasting: the fed state, post-absorptive transition, fat mobilization, and ketosis. Understand scientific reality, individual variability, and common myths.",
    url: `${getSiteUrl()}/fasting-stages`,
    type: "article",
    publishedTime: "2026-10-04",
    modifiedTime: "2026-10-04",
    authors: ["Muhammad Usama"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fasting Stages: What Real Physiology Shows vs Common Myths | FastTrack",
    description:
      "Explore the physiological stages of fasting: the fed state, post-absorptive transition, fat mobilization, and ketosis. Scientific reality vs common myths.",
  },
};

const FAQS = [
  {
    question: "Do fasting stages happen at the exact same hour for every person?",
    answer:
      "No. Fixed hourly timelines popular on social media (such as claiming autophagy peaks at exactly 16 hours or fat burning begins at hour 12 for everyone) are oversimplified approximations. The exact timing of metabolic transitions depends heavily on your last meal's macronutrient size and composition, liver glycogen fullness, individual insulin sensitivity, baseline metabolic rate, and physical activity levels during the fasting period.",
  },
  {
    question: "Is it necessary to fast for 24 to 48 hours to get the benefits of fasting?",
    answer:
      "No. Extensive clinical research on daily time-restricted feeding (such as 14:10 or 16:8 schedules) demonstrates meaningful improvements in glycemic regulation, insulin sensitivity, blood pressure, and nighttime digestive rest without ever requiring prolonged multi-day fasts. Longer fasts carry substantially higher risks of dehydration, electrolyte depletion, orthostatic hypotension, and muscle protein breakdown, and should never be undertaken without medical supervision.",
  },
  {
    question: "Can you measure autophagy at home with urine strips or blood monitors?",
    answer:
      "No. While commercial strips and meters can measure circulating ketone bodies (acetoacetate in urine or beta-hydroxybutyrate in capillary blood), there is currently no valid home test for cellular autophagy. Autophagy is an intracellular recycling pathway occurring inside tissues that is evaluated in scientific research through specialized tissue biopsies and laboratory molecular assays.",
  },
  {
    question: "What breaks the physiological stages of fasting?",
    answer:
      "Consuming foods or beverages that supply nutritional energy—including sugars, milk, cream, protein powders, amino acids (BCAAs), or alcohol—triggers nutrient-sensing pathways (such as insulin secretion), returning the body to the fed or postprandial state. Plain water, unflavored mineral water, and unsweetened black coffee or tea provide negligible calories and maintain fasting physiology.",
  },
  {
    question: "Who should not follow extended fasting stages?",
    answer:
      "Extended fasting is unsafe for pregnant or breastfeeding women, children and adolescents, individuals with a current or past eating disorder, underweight individuals, and anyone with type 1 diabetes or advanced chronic kidney disease. People taking medications that require food or medications that regulate blood pressure or blood sugar must consult their prescribing physician before altering their eating schedule.",
  },
];

export default function FastingStagesPage() {
  const siteUrl = getSiteUrl();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Fasting Stages: What Real Physiology Shows vs Common Myths",
    description:
      "Explore the physiological stages of fasting: the fed state, post-absorptive transition, fat mobilization, and ketosis. Understand scientific reality, individual variability, and common myths.",
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
      "@id": `${siteUrl}/fasting-stages`,
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
        name: "Fasting Stages",
        item: `${siteUrl}/fasting-stages`,
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
            Metabolic Physiology
          </span>
          <span className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>12 min read</span>
          </span>
        </div>

        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight">
          Fasting Stages: What Real Physiology Shows vs Common Myths
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
            Internet charts frequently depict fasting as a rigid, step-by-step video game where magical health milestones unlock at precise hours: fat burning at hour 12, autophagy at hour 16, and total cellular rejuvenation at hour 24.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Human biology does not operate on an exact digital countdown timer. Rather than instant switches that flip at an exact minute mark, the transition from feeding to fasting is a <strong>continuous physiological continuum</strong> governed by hormone levels, liver glycogen depletion, tissue energy demands, and baseline metabolic health.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            This guide explores what peer-reviewed metabolic science actually demonstrates about the stages of fasting, separates well-documented human findings from animal extrapolations, and provides a realistic framework for understanding what happens in your body during intermittent fasting.
          </p>
        </section>

        {/* Section 1: The Spectrum vs Rigid Clocks */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Why Hourly Fasting Milestones Are Overstated
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            The fundamental flaw in rigid &ldquo;hour-by-hour&rdquo; fasting graphics is that they treat all human bodies as identical metabolic engines starting with identical initial fuel tanks. In clinical reality, where you are on the fasting continuum at hour 14 depends heavily on five major biological variables:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high space-y-1.5">
              <h3 className="font-headline text-base font-bold text-on-surface">1. Last Meal Size &amp; Composition</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                A high-carbohydrate, calorie-dense dinner digests and raises insulin for 5 to 7 hours, whereas a modest meal rich in fibrous vegetables and protein requires less time to clear the postprandial state.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high space-y-1.5">
              <h3 className="font-headline text-base font-bold text-on-surface">2. Baseline Glycogen Stores</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                The adult liver stores approximately 70 to 100 grams of glycogen. If your liver glycogen is full from a rest day and high-calorie feeding, exhausting it takes significantly longer than if you were physically active prior to the fast.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high space-y-1.5">
              <h3 className="font-headline text-base font-bold text-on-surface">3. Physical Activity &amp; Movement</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Physical exertion accelerates glycogen breakdown and increases energy expenditure. A person walking 10,000 steps will progress toward fat oxidation much earlier than someone sedentary at a desk.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high space-y-1.5">
              <h3 className="font-headline text-base font-bold text-on-surface">4. Individual Insulin Sensitivity</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Individuals with insulin resistance maintain elevated circulating insulin for longer post-meal windows, delaying the suppression of insulin required to activate lipolysis and ketone production.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: The 4 Physiological Phases of Fasting */}
        <section className="space-y-6">
          <div>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              The Four Real Physiological Phases of Fasting
            </h2>
            <p className="text-on-surface-variant leading-relaxed mt-2">
              In classic metabolic physiology—as outlined in seminal reviews by Cahill, Mattson, and de Cabo in the{" "}
              <a
                href="https://www.nejm.org/doi/full/10.1056/NEJMra1905136"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
              >
                <span>New England Journal of Medicine</span>
                <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
              </a>
              —the body navigates four overlapping energy phases rather than arbitrary hourly stages.
            </p>
          </div>

          {/* Phase Cards */}
          <div className="space-y-4">
            {/* Phase 1 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-surface-container border border-surface-container-high space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                  Phase 1 (Hours 0 to 4)
                </span>
                <span className="text-xs text-on-surface-variant font-medium">Postprandial / Fed State</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface">
                The Fed State: Digestion, Absorption, and Insulin Elevation
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                Immediately following a meal, nutrients are broken down and absorbed through the intestinal tract. Blood glucose levels rise, prompting pancreatic beta cells to secrete insulin. Circulating insulin directs glucose into muscle and liver cells for immediate energy or glycogen synthesis, while excess lipids are stored in adipose tissue.
              </p>
              <div className="p-3.5 rounded-xl bg-surface-container-lowest text-xs sm:text-sm text-on-surface-variant border border-surface-container/60">
                <strong>What happens to fasting state:</strong> In this phase, circulating insulin actively suppresses intracellular lipolysis (fat breakdown) via hormone-sensitive lipase inhibition. The body relies almost entirely on exogenous food energy.
              </div>
            </div>

            {/* Phase 2 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-surface-container border border-surface-container-high space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-secondary/15 text-secondary text-xs font-bold uppercase tracking-wider">
                  Phase 2 (Hours 4 to 12)
                </span>
                <span className="text-xs text-on-surface-variant font-medium">Post-Absorptive Transition</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface">
                The Post-Absorptive State: Glycogen Breakdown and Insulin Clearance
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                As digestive absorption finishes, blood glucose returns to baseline and insulin concentrations decline. To maintain obligatory glucose supply to the central nervous system and red blood cells, the pancreas secretes glucagon, stimulating hepatic glycogenolysis (the conversion of stored liver glycogen back into free glucose).
              </p>
              <div className="p-3.5 rounded-xl bg-surface-container-lowest text-xs sm:text-sm text-on-surface-variant border border-surface-container/60">
                <strong>What happens to fasting state:</strong> This transition typically spans overnight sleep in normal daily life. As insulin falls, basal lipolysis gradually begins releasing free fatty acids into circulation, though hepatic glycogen remains the predominant glucose buffer.
              </div>
            </div>

            {/* Phase 3 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-surface-container border border-surface-container-high space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-tertiary/15 text-tertiary text-xs font-bold uppercase tracking-wider">
                  Phase 3 (Hours 12 to 18)
                </span>
                <span className="text-xs text-on-surface-variant font-medium">The Metabolic Switch</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface">
                Flipping the Metabolic Switch: Hepatic Ketogenesis &amp; Fat Mobilization
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                As liver glycogen reserves dwindle below threshold levels, the body undergoes what researchers call the &ldquo;metabolic switch&rdquo; (coined by Anton et al. in *Obesity* and popularized by Mattson). Adipose tissue significantly accelerates lipolysis, releasing non-esterified fatty acids that travel to the liver for beta-oxidation.
              </p>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                Because oxaloacetate is diverted toward hepatic gluconeogenesis, excess acetyl-CoA is converted into ketone bodies—predominantly beta-hydroxybutyrate (BHB) and acetoacetate. Skeletal muscle, heart muscle, and progressively the brain begin utilizing ketones as an alternative metabolic fuel.
              </p>
              <div className="p-3.5 rounded-xl bg-surface-container-lowest text-xs sm:text-sm text-on-surface-variant border border-surface-container/60">
                <strong>Relevance to daily IF:</strong> This is the zone targeted by popular daily time-restricted feeding protocols like{" "}
                <Link href="/guides/16-8-intermittent-fasting-guide" className="text-primary font-semibold underline">
                  16:8 intermittent fasting
                </Link>{" "}
                or{" "}
                <Link href="/fasting-methods/18-6" className="text-primary font-semibold underline">
                  18:6 fasting
                </Link>
                . It allows consistent periodic exposure to fatty acid oxidation and low basal insulin without extreme caloric deprivation.
              </div>
            </div>

            {/* Phase 4 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-surface-container border border-surface-container-high space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-error/15 text-error text-xs font-bold uppercase tracking-wider">
                  Phase 4 (Hours 24+)
                </span>
                <span className="text-xs text-on-surface-variant font-medium">Prolonged / Extended Fasting</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface">
                Extended Fasting: Gluconeogenic Adaptation, Nitrogen Balance &amp; Risks
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                Beyond 24 hours, liver glycogen is largely depleted. Blood glucose maintenance depends completely on gluconeogenesis using glycerol (from triglyceride breakdown), lactate, and amino acids. Ketone levels rise significantly (often 1.0 to 3.0 mmol/L or higher).
              </p>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                While rodent models demonstrate dramatic longevity markers during multi-day food deprivation, prolonged fasting in humans demands strict clinical caution. Prolonged fasts increase nitrogen loss, risk electrolyte imbalances (hyponatremia, hypokalemia), precipitate postural dizziness, and can trigger disordered eating patterns or gout flares due to uric acid competition in the kidneys.
              </p>
              <div className="p-3.5 rounded-xl bg-surface-container-lowest text-xs sm:text-sm text-error border border-error/20">
                <strong>Clinical Caution:</strong> FastTrack does not recommend unmonitored multi-day fasts. Daily time-restricted feeding provides the practical benefits of metabolic switching safely and sustainably.
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Summary Comparison Table */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Summary: Fasting Continuum at a Glance
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            The table below illustrates the gradual, continuous shift in primary fuel sources and hormonal drivers across fasting durations.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-surface-container shadow-sm">
            <table className="w-full text-left text-sm text-on-surface-variant">
              <thead className="bg-surface-container text-on-surface font-headline text-xs sm:text-sm uppercase tracking-wider">
                <tr>
                  <th scope="col" className="p-3.5 sm:p-4">Fasting Range</th>
                  <th scope="col" className="p-3.5 sm:p-4">Hormonal Milieu</th>
                  <th scope="col" className="p-3.5 sm:p-4">Primary Energy Fuel</th>
                  <th scope="col" className="p-3.5 sm:p-4">Typical Daily Context</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container/60">
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">0 – 4 Hours</th>
                  <td className="p-3.5 sm:p-4">High Insulin, Low Glucagon</td>
                  <td className="p-3.5 sm:p-4">Ingested carbohydrates &amp; dietary fats</td>
                  <td className="p-3.5 sm:p-4">Active digestion &amp; nutrient storage</td>
                </tr>
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">4 – 12 Hours</th>
                  <td className="p-3.5 sm:p-4">Declining Insulin, Rising Glucagon</td>
                  <td className="p-3.5 sm:p-4">Liver glycogen breakdown (glycogenolysis)</td>
                  <td className="p-3.5 sm:p-4">Standard overnight sleep</td>
                </tr>
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">12 – 18 Hours</th>
                  <td className="p-3.5 sm:p-4">Low Basal Insulin, Mild Epinephrine</td>
                  <td className="p-3.5 sm:p-4">Mobilized fatty acids &amp; initial ketone bodies</td>
                  <td className="p-3.5 sm:p-4">Daily 16:8 or 18:6 fasting schedules</td>
                </tr>
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">18 – 24 Hours</th>
                  <td className="p-3.5 sm:p-4">Suppressed Insulin, Glucagon dominance</td>
                  <td className="p-3.5 sm:p-4">Ketones, fatty acids, hepatic gluconeogenesis</td>
                  <td className="p-3.5 sm:p-4">OMAD (One Meal A Day) schedules</td>
                </tr>
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">24+ Hours</th>
                  <td className="p-3.5 sm:p-4">Minimal Insulin, Elevated Cortisol</td>
                  <td className="p-3.5 sm:p-4">Systemic ketosis &amp; gluconeogenic precursors</td>
                  <td className="p-3.5 sm:p-4">Extended multi-day fasts (clinical caution)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Autophagy Science vs Hype */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Autophagy: What Science Proves vs What Hype Claims
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Few concepts in wellness are as misunderstood as <strong>autophagy</strong>—the intracellular degradation process whereby lysosomes recycle damaged proteins and dysfunctional cellular organelles. Popular fasting infographics routinely claim that &ldquo;autophagy peaks at exactly 16 hours&rdquo; or &ldquo;maximum cellular detox occurs at hour 24.&rdquo;
          </p>
          <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-container space-y-3">
            <h3 className="font-headline text-lg font-bold text-on-surface">
              What Does Human Evidence Actually Say?
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-on-surface-variant list-disc pl-5">
              <li>
                <strong>Baseline activity is always present:</strong> Autophagy is not an &ldquo;all-or-nothing&rdquo; switch that is completely turned off during feeding and suddenly activated during fasting. Basal autophagy functions continually in healthy cells as a housekeeping mechanism.
              </li>
              <li>
                <strong>Most timing data comes from rodent models:</strong> Mice have metabolic rates roughly seven times faster than humans and deplete their liver glycogen within a few hours. A 24-hour fast in a rodent represents a massive fraction of its total lifespan and energetic reserves, equivalent to several days in a human. Directly transposing rodent hours to human clocks is scientifically invalid.
              </li>
              <li>
                <strong>Human quantification is complex:</strong> Because autophagy occurs inside living tissue cells (such as hepatocytes and myocytes), scientists cannot measure it with a simple blood prick or urine test. Human studies evaluating autophagy markers (like LC3-II or p62) show substantial tissue-specific variability and individual differences.
              </li>
              <li>
                <strong>Exercise is also a potent stimulus:</strong> Fasting is not the only trigger for cellular stress responses. Aerobic exercise and resistance training potently activate AMPK and stimulate muscle autophagy without requiring prolonged calorie deprivation.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: Practical Protocol Decision Aid */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Matching Fasting Stages to Sustainable Daily Protocols
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            You do not need to push into extreme multi-day territory to capture the metabolic benefits of fasting. FastTrack recommends choosing a schedule based on daily lifestyle sustainability rather than chasing theoretical milestones:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">Gentle Starter</span>
                <h3 className="font-headline text-lg font-bold text-on-surface">14:10 Schedule</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Provides a predictable 14-hour overnight pause. Clears the postprandial state and prevents late-night snacking while fitting standard family meal routines easily.
                </p>
              </div>
              <div className="pt-4 mt-3 border-t border-surface-container-high">
                <Link href="/guides/14-10-intermittent-fasting-guide" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                  <span>Explore 14:10 Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Most Popular</span>
                <h3 className="font-headline text-lg font-bold text-on-surface">16:8 Schedule</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Extends the overnight fasting pause into the 16-hour metabolic switching window. Allows regular fat oxidation and improved glycemic stability with low social friction.
                </p>
              </div>
              <div className="pt-4 mt-3 border-t border-surface-container-high">
                <Link href="/guides/16-8-intermittent-fasting-guide" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                  <span>Explore 16:8 Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold text-tertiary uppercase tracking-wider">Advanced Window</span>
                <h3 className="font-headline text-lg font-bold text-on-surface">18:6 / 20:4 Schedules</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Condensed eating windows for experienced fasters who have mastered hydration and nutrient density during meals and prefer fewer, larger sittings.
                </p>
              </div>
              <div className="pt-4 mt-3 border-t border-surface-container-high">
                <Link href="/guides/18-6-intermittent-fasting-guide" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                  <span>Explore 18:6 Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Clinical Safety & Who Should Not Fast */}
        <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container">
          <div className="flex items-center gap-2 mb-1">
            <ShieldAlert className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Safety Boundaries and Contraindications
            </h2>
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            Intermittent fasting is an educational lifestyle tool, not medical treatment. While short daily fasting pauses are safe for most healthy adults, extended fasting stages can create dangerous metabolic stress in vulnerable populations.
          </p>
          <div className="space-y-2 pt-2 text-sm sm:text-base text-on-surface-variant">
            <p><strong>Do not practice extended or restrictive fasting if you:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Are pregnant, trying to conceive, or actively breastfeeding.</li>
              <li>Have a personal history of anorexia nervosa, bulimia, or disordered eating behaviors.</li>
              <li>Have type 1 diabetes or advanced insulin-dependent type 2 diabetes (due to dangerous hypoglycemia and ketoacidosis risks).</li>
              <li>Have advanced chronic kidney disease or significant cardiovascular disease.</li>
              <li>Take prescribed medications that require food co-ingestion or blood-pressure medications that alter electrolyte handling.</li>
            </ul>
          </div>
          <p className="text-xs sm:text-sm text-on-surface-variant pt-2 border-t border-surface-container/60">
            For medical safety details, review our{" "}
            <Link href="/medical-disclaimer" className="text-primary font-semibold underline">
              Medical Disclaimer
            </Link>{" "}
            and discuss any changes in eating schedule with your physician.
          </p>
        </section>

        {/* Section 7: FAQs */}
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

        {/* Section 8: Interactive Next Steps */}
        <section className="p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container space-y-4">
          <h2 className="font-headline text-2xl font-bold text-primary tracking-tight">
            Build Your Own Fasting Schedule
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Ready to apply fasting physiology to your daily life? Use our interactive fasting calculator to design a realistic schedule tailored to your wake-up time, work routine, and sleep schedule.
          </p>
          <div className="pt-2">
            <Link
              href="/#calculator"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary font-semibold shadow-sm hover:bg-primary/90 transition-colors"
            >
              <span>Open FastTrack Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
