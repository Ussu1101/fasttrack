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
  TrendingDown,
  RefreshCw,
  Scale,
  Heart,
  Moon,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Intermittent Fasting Plateau: Causes, Metabolic Reality & What Works",
  description:
    "Hit a weight loss stall while fasting? Learn why plateaus occur: metabolic adaptation, NEAT declines, calorie creeping, fluid shifts, and evidence-informed solutions that avoid extreme restriction.",
  keywords: [
    "intermittent fasting plateau",
    "fasting weight loss plateau",
    "why did i stop losing weight intermittent fasting",
    "intermittent fasting stall",
    "break fasting plateau",
    "metabolic adaptation intermittent fasting",
    "fasting plateau solutions",
  ],
  alternates: {
    canonical: "/intermittent-fasting-plateau",
  },
  openGraph: {
    title: "Intermittent Fasting Plateau: Causes, Metabolic Reality & What Works | FastTrack",
    description:
      "Hit a weight loss stall while fasting? Learn why plateaus occur: metabolic adaptation, NEAT declines, calorie creeping, fluid shifts, and evidence-informed solutions that avoid extreme restriction.",
    url: `${getSiteUrl()}/intermittent-fasting-plateau`,
    type: "article",
    publishedTime: "2026-10-04",
    modifiedTime: "2026-10-04",
    authors: ["Muhammad Usama"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intermittent Fasting Plateau: Causes, Metabolic Reality & What Works | FastTrack",
    description:
      "Hit a weight loss stall while fasting? Learn the physiological reality behind plateaus, metabolic adaptation, and safe evidence-informed adjustments.",
  },
};

const FAQS = [
  {
    question: "How long must weight stay unchanged before it is considered a true plateau?",
    answer:
      "In clinical weight-management practice, body weight must remain unchanged for at least 3 to 4 consecutive weeks to qualify as a true weight loss plateau. Daily or weekly scale fluctuations of 1 to 4 pounds are completely normal and primarily reflect changes in gastrointestinal contents, sodium-driven water retention, muscle glycogen replenishment, and hormonal fluid shifts, rather than halts in fat loss.",
  },
  {
    question: "Should I extend my fasting window to 24 or 48 hours to break a plateau?",
    answer:
      "No. Extending fasting windows to extreme durations (such as multi-day or 48-hour fasts) in response to a stall is counterproductive and unsafe. Severe restriction frequently precipitates intense rebound binge eating during feeding windows, elevates cortisol, accelerates lean muscle tissue loss, and drives down spontaneous physical movement (NEAT). A structured, moderate approach is far more effective and sustainable.",
  },
  {
    question: "Does 'starvation mode' permanently damage your metabolism during intermittent fasting?",
    answer:
      "No. 'Starvation mode' as portrayed in popular culture—the myth that eating fewer calories permanently destroys your metabolic rate—is not supported by metabolic science. While adaptive thermogenesis (a minor physiological reduction in resting metabolic rate of roughly 50 to 100 kcal/day beyond what is predicted by smaller body mass) is a real biological response, it is a modest homeostatic adaptation, not permanent damage.",
  },
  {
    question: "Can stress and poor sleep cause an intermittent fasting plateau?",
    answer:
      "Yes. Chronic psychological stress and sleep deprivation elevate nighttime cortisol, promote fluid retention, impair insulin sensitivity, and alter appetite hormones (increasing ghrelin and reducing leptin). This often leads to unconscious higher-calorie snacking or fluid retention that masks continued adipose tissue loss on the scale.",
  },
  {
    question: "When is a weight loss plateau a sign that I should consult a doctor?",
    answer:
      "You should consult a healthcare professional if a weight stall is accompanied by persistent extreme fatigue, unexplained cold intolerance, hair thinning, chronic constipation, irregular menstrual cycles, or leg swelling. These can be clinical signs of underlying thyroid dysfunction (hypothyroidism), hormonal imbalances, medication interactions, or fluid retention that require medical diagnosis rather than diet alterations.",
  },
];

export default function IntermittentFastingPlateauPage() {
  const siteUrl = getSiteUrl();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Intermittent Fasting Plateau: Causes, Metabolic Reality & What Works",
    description:
      "Hit a weight loss stall while fasting? Learn why plateaus occur: metabolic adaptation, NEAT declines, calorie creeping, fluid shifts, and evidence-informed solutions that avoid extreme restriction.",
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
      "@id": `${siteUrl}/intermittent-fasting-plateau`,
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
        name: "Intermittent Fasting Plateau",
        item: `${siteUrl}/intermittent-fasting-plateau`,
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
            Weight Management &amp; Troubleshooting
          </span>
          <span className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>12 min read</span>
          </span>
        </div>

        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight">
          Intermittent Fasting Plateau: Causes, Metabolic Reality &amp; What Works
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
            Few experiences in health and fitness are more frustrating than adhering diligently to your intermittent fasting window, stepping on the scale week after week, and watching the numbers refuse to budge.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            The standard online advice is often reactionary and damaging: &ldquo;Just fast longer,&rdquo; &ldquo;Cut your calories in half,&rdquo; or &ldquo;Do a 48-hour water fast to shock your system.&rdquo; These extreme responses ignore human physiology, increase binge-eating risk, and often worsen the underlying plateau.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            A weight loss plateau is not a sign of personal failure or broken biology. It is a <strong>normal, predictable physiological response to sustained weight reduction</strong>. This guide breaks down the actual metabolic, behavioural, and fluid dynamics behind fasting plateaus and provides an evidence-based roadmap to resolve stalls safely.
          </p>
        </section>

        {/* Section 1: The Physiology of a Plateau */}
        <section className="space-y-6">
          <div>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Why Weight Loss Naturally Slows Down
            </h2>
            <p className="text-on-surface-variant leading-relaxed mt-2">
              To understand why a plateau happens, we must look at mathematical models of human energy balance, notably established by Dr. Kevin Hall and colleagues in{" "}
              <a
                href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(11)60812-9/fulltext"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
              >
                <span>The Lancet (2011)</span>
                <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
              </a>
              :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 sm:p-6 rounded-2xl bg-surface-container border border-surface-container-high space-y-2.5">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Metabolic Reality 1</span>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">
                A Smaller Body Burns Less Energy
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                When you lose 15 or 20 pounds, your body physically shrinks. Carrying less tissue mass means your basal metabolic rate (BMR) drops and moving your lighter body during daily tasks requires fewer calories. The exact calorie intake that created a 500-calorie deficit at your starting weight may represent your new maintenance level at your current weight.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-surface-container border border-surface-container-high space-y-2.5">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider">Metabolic Reality 2</span>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">
                Adaptive Thermogenesis vs "Starvation Mode"
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                As documented in *The Lancet*, the body mounts an &ldquo;adaptive thermogenesis&rdquo; response—a small additional drop in resting metabolic rate (typically 50 to 100 kcal/day) beyond what is explained by mass loss alone. This is not &ldquo;permanent damage,&rdquo; but an evolutionary survival mechanism designed to preserve energy during prolonged negative energy balance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: The Top 5 Real Contributors to a Plateau */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            The Five Real Contributors to Fasting Stalls
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Before assuming your metabolism has stopped working, investigate these five common and scientifically validated contributors:
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-base sm:text-lg font-bold text-on-surface">
                1. Subtle Energy Intake Creep During the Eating Window
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Intermittent fasting restricts <em>when</em> you eat, but energy balance still dictates fat loss. Over weeks of fasting, natural hunger cues can cause portions to gradually expand, cooking oils to become heavier, and liquid calories or snacks to increase without conscious awareness. A daily surplus of just 200 to 300 kcal easily erases a modest weekly deficit.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-base sm:text-lg font-bold text-on-surface">
                2. Subconscious Decline in Spontaneous Activity (NEAT)
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Non-Exercise Activity Thermogenesis (NEAT)—energy burned through pacing, fidgeting, posture maintenance, and casual walking—can vary by several hundred calories per day. When in a sustained calorie deficit, the nervous system subconsciously reduces fidgeting, encourages more sitting, and lowers spontaneous movement to conserve energy.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-base sm:text-lg font-bold text-on-surface">
                3. Water Retention Masking True Adipose Loss
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                The bathroom scale measures total body mass—including fat, muscle, bone, intestinal contents, and several gallons of water. High-sodium meals, intense resistance training (micro-tears causing muscular inflammation), menstrual cycles, or cortisol spikes from high life stress cause the body to retain 2 to 5 pounds of extra fluid, completely masking adipose tissue loss for weeks.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-base sm:text-lg font-bold text-on-surface">
                4. Chronic Sleep Deprivation &amp; Elevated Cortisol
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Sleeping less than 7 hours per night increases circulating evening cortisol, worsens next-day insulin sensitivity, and increases ghrelin (the hunger hormone) while lowering leptin. This makes eating discipline substantially harder and encourages water retention. Learn more in our guide on{" "}
                <Link href="/guides/fasting-and-sleep" className="text-primary font-semibold underline">
                  fasting and sleep
                </Link>
                .
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-base sm:text-lg font-bold text-on-surface">
                5. Undetected Calories in Fasting Beverages
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                A splash of whole milk in three cups of morning coffee, flavored creamers, BCAA fitness powders, or bone broths consume during fasting hours can supply 100 to 250 unexpected calories. Review our guide on{" "}
                <Link href="/guides/what-breaks-a-fast" className="text-primary font-semibold underline">
                  what breaks a fast
                </Link>{" "}
                to audit your fasting window beverages.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Diagnostic Decision Framework */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Evidence-Informed Troubleshooting: What Actually Works
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Rather than jumping to extreme, unsustainable fasting durations, use this systematic checklist to identify and break your plateau:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider">Step 1: Audit</span>
              <h3 className="font-headline text-base font-bold text-on-surface">Track Accurately for 7 Days</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Weigh food portions on a digital kitchen scale for one week without changing your routine. Pay close attention to cooking fats, salad dressings, sauces, and beverage additions to reveal hidden calorie creep.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Step 2: Activity</span>
              <h3 className="font-headline text-base font-bold text-on-surface">Set a Daily Step Baseline</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                If your NEAT has dropped without you realizing it, set a daily step target (such as 7,500 to 10,000 steps). Low-intensity walking raises daily energy expenditure without stimulating intense compensatory hunger spikes.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <span className="text-xs font-bold text-tertiary uppercase tracking-wider">Step 3: Sustainability</span>
              <h3 className="font-headline text-base font-bold text-on-surface">Consider a Planned Maintenance Break</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                If you have been in an extended caloric deficit for 12+ weeks, taking a 1- to 2-week structured diet break at your current weight-maintenance calories can provide psychological relief and reduce dietary fatigue. While individual physiological responses vary and diet breaks do not guarantee a metabolic or hormonal reset, returning briefly to maintenance energy intake can help make long-term dietary adherence more sustainable.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: What NOT to Do */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Harmful Responses to Avoid
          </h2>
          <div className="space-y-3 p-5 rounded-2xl bg-surface-container-low border border-surface-container text-sm sm:text-base text-on-surface-variant">
            <div className="flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-error flex-shrink-0 mt-1" />
              <span><strong>Do not jump immediately to 24- or 48-hour fasts:</strong> Overly aggressive fasting windows frequently trigger severe evening bingeing episodes that exacerbate guilt and energy instability.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-error flex-shrink-0 mt-1" />
              <span><strong>Do not drop calories to dangerously low levels:</strong> Severely restricting intake below basal requirements accelerates skeletal muscle loss and drops resting metabolic rate further.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-error flex-shrink-0 mt-1" />
              <span><strong>Do not rely exclusively on bathroom scale numbers:</strong> Track waist circumference, clothing fit, energy levels, and strength markers. Many people experience &ldquo;body recomposition&rdquo; where fat drops while muscle water increases, keeping scale weight unchanged.</span>
            </div>
          </div>
        </section>

        {/* Section 5: Medical Considerations */}
        <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container">
          <div className="flex items-center gap-2 mb-1">
            <ShieldAlert className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              When to Consult a Physician
            </h2>
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            While most weight stalls reflect energy balance dynamics and fluid shifts, some plateaus are driven by medical conditions or medication side effects.
          </p>
          <div className="space-y-2 pt-2 text-sm sm:text-base text-on-surface-variant">
            <p><strong>Schedule a clinical evaluation with a physician if your plateau is accompanied by:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Severe chronic fatigue, lethargy, or extreme brain fog.</li>
              <li>Unexplained sensitivity to cold, hair loss, or brittle nails (potential signs of hypothyroidism).</li>
              <li>Irregular menstrual cycles, amenorrhea, or severe sleep disruption.</li>
              <li>Significant lower extremity edema (swelling in feet, ankles, or legs).</li>
              <li>Recent initiation or dosage changes of medications known to affect weight (e.g., beta-blockers, corticosteroids, antidepressants, or insulin-sensitizing agents).</li>
            </ul>
          </div>
          <p className="text-xs sm:text-sm text-on-surface-variant pt-2 border-t border-surface-container/60">
            For more details, review our{" "}
            <Link href="/medical-disclaimer" className="text-primary font-semibold underline">
              Medical Disclaimer
            </Link>
            .
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
            Re-evaluate Your Daily Fasting Schedule
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Sometimes a simple shift in your eating window schedule—such as shifting your 8-hour window earlier to align better with circadian rhythms—is all that is needed to regain consistency.
          </p>
          <div className="pt-2">
            <Link
              href="/#calculator"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary font-semibold shadow-sm hover:bg-primary/90 transition-colors"
            >
              <span>Recalculate Fasting Windows</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
