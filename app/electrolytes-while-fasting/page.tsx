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
  Droplets,
  AlertTriangle,
  Heart,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Electrolytes While Fasting: Science, Needs, Label Guide & Safety",
  description:
    "An evidence-grounded guide to electrolytes while fasting. Understand sodium, potassium, and magnesium dynamics, who actually needs supplementation, label inspection rules, and kidney/cardiac safety limits.",
  keywords: [
    "electrolytes while fasting",
    "fasting electrolytes",
    "sodium potassium magnesium fasting",
    "do i need electrolytes intermittent fasting",
    "fasting headache electrolytes",
    "keto flu fasting electrolytes",
    "zero calorie electrolytes fasting",
  ],
  alternates: {
    canonical: "/electrolytes-while-fasting",
  },
  openGraph: {
    title: "Electrolytes While Fasting: Science, Needs, Label Guide & Safety | FastTrack",
    description:
      "An evidence-grounded guide to electrolytes while fasting. Understand sodium, potassium, and magnesium dynamics, who actually needs supplementation, label inspection rules, and kidney/cardiac safety limits.",
    url: `${getSiteUrl()}/electrolytes-while-fasting`,
    type: "article",
    publishedTime: "2026-10-04",
    modifiedTime: "2026-10-04",
    authors: ["Muhammad Usama"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrolytes While Fasting: Science, Needs, Label Guide & Safety | FastTrack",
    description:
      "An evidence-grounded guide to electrolytes while fasting: sodium, potassium, magnesium, label inspection, and safety limits.",
  },
};

const FAQS = [
  {
    question: "Does everyone practicing intermittent fasting need electrolyte supplements?",
    answer:
      "No. For healthy individuals practicing standard daily time-restricted feeding (such as 14:10 or 16:8), specialized electrolyte supplements are usually unnecessary. You continue to consume meals every single day that naturally deliver sodium, potassium, and magnesium. Adequate dietary seasoning, balanced whole foods in your eating window, and plain water during fasting hours are sufficient for most people. Supplementation is primarily considered during longer fasts (20+ hours, OMAD), heavy sweating during warm workouts, or low-carbohydrate dietary transitions.",
  },
  {
    question: "Why do some people experience headaches or lightheadedness when starting fasting?",
    answer:
      "When you begin fasting, circulating insulin levels drop, signaling the renal tubules to excrete more water and sodium (known as the natriuresis of fasting). Combined with the temporary absence of fluid normally obtained from food, this can cause mild hypovolemia (reduced plasma volume), potentially leading to temporary headaches, fatigue, or postural dizziness upon standing quickly. Maintaining balanced baseline hydration and seasoning foods adequately during eating windows can help ease this transition. However, if lightheadedness, weakness, or headaches are pronounced or persist, you should break the fast with balanced nourishment and consult a healthcare professional rather than attempting to self-treat severe symptoms with salt water.",
  },
  {
    question: "Can taking too much potassium or magnesium be dangerous?",
    answer:
      "Yes, potentially life-threatening. The kidneys tightly regulate blood potassium within a narrow physiological window (3.5 to 5.0 mmol/L). Ingesting excessive concentrated potassium powders can trigger hyperkalemia, causing cardiac arrhythmias or heart arrest, especially in individuals with undiagnosed or diagnosed kidney impairment. High doses of magnesium salt forms (like citrate or oxide) act as osmotic laxatives, causing acute diarrhea, worsening fluid loss, and triggering severe dehydration.",
  },
  {
    question: "Do electrolyte powders break a fast?",
    answer:
      "Pure mineral salts (sodium chloride, potassium citrate, magnesium malate) contain zero calories and do not break a zero-calorie fast. However, many commercial electrolyte packets incorporate added sugars, maltodextrin, dextrose, or branched-chain amino acids (BCAAs) that supply nutritional energy and break a strict fast. Always inspect the Supplement Facts and 'Other Ingredients' panel to verify that the product is completely calorie-free.",
  },
  {
    question: "Should I 'push through' severe dizziness or palpitations while fasting?",
    answer:
      "Never. Intermittent fasting should not cause severe lightheadedness, confusion, persistent nausea, extreme weakness, or heart palpitations. If you experience these red-flag symptoms, terminate your fast immediately by drinking water with balanced nutrients or a modest meal, sit or lie down to prevent falls, and seek medical attention if symptoms persist.",
  },
];

export default function ElectrolytesWhileFastingPage() {
  const siteUrl = getSiteUrl();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Electrolytes While Fasting: Science, Needs, Label Guide & Safety",
    description:
      "An evidence-grounded guide to electrolytes while fasting. Understand sodium, potassium, and magnesium dynamics, who actually needs supplementation, label inspection rules, and kidney/cardiac safety limits.",
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
      "@id": `${siteUrl}/electrolytes-while-fasting`,
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
        name: "Electrolytes While Fasting",
        item: `${siteUrl}/electrolytes-while-fasting`,
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
            Hydration &amp; Mineral Safety
          </span>
          <span className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>11 min read</span>
          </span>
        </div>

        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight">
          Electrolytes While Fasting: Science, Real Needs, Label Guide &amp; Safety
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
            Electrolyte powders, salty hydration packets, and mineral drops are heavily marketed online as mandatory essentials for anyone skipping breakfast. Fitness influencers frequently claim that without specialized electrolyte blends, your body will instantly suffer fatigue, muscle cramps, and metabolic stalling.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            The scientific reality is far more balanced. While electrolytes (primarily <strong>sodium, potassium, and magnesium</strong>) are critical charged minerals governing nerve signaling, fluid balance, and muscular contraction, healthy people practicing standard intermittent fasting do not necessarily need supplement packets.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            This guide explains the physiology of mineral handling during fasting, outlines who truly needs extra minerals versus who is already covered by daily meals, provides a rigorous label inspection checklist, and highlights non-negotiable safety limits for kidney and heart health.
          </p>
        </section>

        {/* Section 1: The Physiology of Minerals During Fasting */}
        <section className="space-y-6">
          <div>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Why Fasting Changes Mineral &amp; Fluid Balance
            </h2>
            <p className="text-on-surface-variant leading-relaxed mt-2">
              Electrolyte shifts during fasting stem from two distinct physiological adaptations documented in classic metabolic literature:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 sm:p-6 rounded-2xl bg-surface-container border border-surface-container-high space-y-2.5">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Physiological Mechanism 1</span>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">
                The Natriuresis of Fasting
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Insulin is a potent antinatriuretic hormone: high circulating insulin acts on renal tubules to stimulate sodium reabsorption. When you fast and insulin levels drop to basal levels, the kidneys release more sodium into the urine, along with water (known clinically as the <em>natriuresis of fasting</em>). This explains why new fasters often shed several pounds of water weight in their first few days.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-surface-container border border-surface-container-high space-y-2.5">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider">Physiological Mechanism 2</span>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">
                Loss of Dietary Fluid &amp; Electrolytes
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                In a standard Western diet, approximately 20% to 30% of total daily fluid intake comes directly from water bound within whole foods (fruits, vegetables, meats), which also carry natural potassium and magnesium. When you fast for 16 to 24 hours, you temporarily eliminate this ongoing dietary supply, making deliberate fluid awareness necessary.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Sodium, Potassium, and Magnesium Compared */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            The Big Three: Sodium, Potassium, and Magnesium in Detail
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Not all electrolytes carry the same dietary requirements, functions, or supplement safety margins. The table below outlines official reference intake guidance established by the{" "}
            <a
              href="https://www.nationalacademies.org/our-work/dietary-reference-intakes-for-sodium-and-potassium"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold underline inline-flex items-center gap-0.5 hover:text-primary-container"
            >
              NASEM Dietary Reference Intakes
              <ExternalLink className="w-3.5 h-3.5 inline ml-0.5" />
            </a>{" "}
            and the National Institutes of Health (NIH) Office of Dietary Supplements:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-surface-container shadow-sm">
            <table className="w-full text-left text-sm text-on-surface-variant">
              <thead className="bg-surface-container text-on-surface font-headline text-xs sm:text-sm uppercase tracking-wider">
                <tr>
                  <th scope="col" className="p-3.5 sm:p-4">Mineral</th>
                  <th scope="col" className="p-3.5 sm:p-4">Primary Biological Role</th>
                  <th scope="col" className="p-3.5 sm:p-4">Dietary Reference Intake &amp; Authorities</th>
                  <th scope="col" className="p-3.5 sm:p-4">Fasting Context &amp; Food Sources</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container/60">
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Sodium (Na+)</th>
                  <td className="p-3.5 sm:p-4">Extracellular fluid volume &amp; blood pressure maintenance</td>
                  <td className="p-3.5 sm:p-4">
                    <strong>CDRR:</strong> &lt;2,300 mg/day (NASEM)<br />
                    <em>Chronic Disease Risk Reduction level</em>
                  </td>
                  <td className="p-3.5 sm:p-4">First mineral depleted during fasting natriuresis. Easily obtained via standard table salt or broths in eating windows.</td>
                </tr>
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Potassium (K+)</th>
                  <td className="p-3.5 sm:p-4">Intracellular fluid balance &amp; cardiac electrical conduction</td>
                  <td className="p-3.5 sm:p-4">
                    <strong>AI:</strong> 2,600 mg (women) / 3,400 mg (men)<br />
                    <em>Adequate Intake (</em>
                    <a
                      href="https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline inline-flex items-center gap-0.5 hover:text-primary-container"
                    >
                      NIH ODS Fact Sheet
                      <ExternalLink className="w-3 h-3 inline ml-0.5" />
                    </a>
                    <em>)</em>
                  </td>
                  <td className="p-3.5 sm:p-4">Found in leafy greens, avocados, potatoes, salmon. <strong>Caution:</strong> Concentrated potassium supplements carry dangerous cardiac risks.</td>
                </tr>
                <tr className="hover:bg-surface-container/40 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Magnesium (Mg2+)</th>
                  <td className="p-3.5 sm:p-4">300+ enzymatic reactions, ATP metabolism &amp; muscle relaxation</td>
                  <td className="p-3.5 sm:p-4">
                    <strong>RDA:</strong> 310–420 mg/day<br />
                    <strong>Supplemental UL:</strong> 350 mg/day (
                    <a
                      href="https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline inline-flex items-center gap-0.5 hover:text-primary-container"
                    >
                      NIH ODS Fact Sheet
                      <ExternalLink className="w-3 h-3 inline ml-0.5" />
                    </a>
                    )
                  </td>
                  <td className="p-3.5 sm:p-4">Found in seeds, nuts, dark chocolate, leafy greens. High-dose oxide or citrate supplements cause acute diarrhea.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-surface-container/60 border border-surface-container text-xs sm:text-sm text-on-surface-variant space-y-1.5">
            <p className="font-semibold text-on-surface">Understanding Dietary Intake Categories:</p>
            <ul className="list-disc list-inside space-y-1 pl-1">
              <li><strong>RDA (Recommended Dietary Allowance):</strong> Average daily level of intake sufficient to meet nutrient requirements of nearly all (97–98%) healthy individuals.</li>
              <li><strong>AI (Adequate Intake):</strong> Established when evidence is insufficient to develop an RDA; assumed to ensure nutritional adequacy.</li>
              <li><strong>CDRR (Chronic Disease Risk Reduction):</strong> Intake level above which reduction is expected to lower chronic disease risk (e.g. hypertension).</li>
              <li><strong>UL (Tolerable Upper Intake Level):</strong> Maximum daily intake unlikely to cause adverse health effects. <em>Crucial distinction:</em> The magnesium UL of 350 mg/day applies <strong>exclusively to supplemental/pharmacological magnesium</strong> (from pills, powders, or antacids). Naturally occurring magnesium in food and drinking water does not produce the same adverse osmotic laxative effects and is not restricted by this UL.</li>
            </ul>
          </div>
        </section>

        {/* Section 3: Decision Aid - Who Needs Supplementation? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Who Actually Needs Electrolyte Supplementation?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Whether you need supplemental electrolytes depends heavily on your fasting schedule length, dietary carbohydrate levels, and sweat rate:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="p-5 rounded-2xl bg-surface-container border border-surface-container-high space-y-3">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                Usually Do NOT Need Supplements
              </span>
              <h3 className="font-headline text-lg font-bold text-on-surface">
                Standard Daily Intermittent Fasters (14:10, 16:8)
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                If you eat balanced meals every day within an 8- to 10-hour window, your daily food provides your full mineral requirements. During the 14- to 16-hour fasting hours, plain water, mineral water, and plain coffee or tea are completely adequate. Taking expensive commercial electrolyte packs during standard 16:8 is usually an unnecessary expense.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container border border-surface-container-high space-y-3">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                May Benefit from Careful Mineral Attention
              </span>
              <h3 className="font-headline text-lg font-bold text-on-surface">
                Extended Fasters (20:4, OMAD, Very Active)
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Individuals practicing condensed 20:4 or 23:1 (OMAD) routines, people who sweat heavily during warm workouts (see our guide on{" "}
                <Link href="/guides/exercise-while-fasting" className="text-primary font-semibold underline">
                  exercise while fasting
                </Link>
                ), or those following ketogenic protocols may require deliberate attention to fluid and mineral balance. However, salted water is not a cure-all for severe lightheadedness or fatigue. If you experience dizziness, weakness, or orthostatic symptoms that do not resolve with modest fluid intake, break your fast promptly with a balanced meal and seek medical guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Label Inspection Checklist */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            How to Read an Electrolyte Supplement Label
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            If you choose to purchase an electrolyte product, carefully inspect the <strong>Supplement Facts</strong> panel. Many products marketed for athletes contain hidden calories or problematic binders:
          </p>

          <div className="space-y-3 p-5 rounded-2xl bg-surface-container-low border border-surface-container">
            <div className="space-y-2 text-sm sm:text-base text-on-surface-variant">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                <span><strong>Check for Calories and Carbohydrates:</strong> Look for maltodextrin, dextrose, glucose, coconut water powder, or cane sugar. These add calories and end a strict zero-calorie fast.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                <span><strong>Check for Amino Acids:</strong> Ensure the product does not contain free-form BCAAs (leucine, isoleucine, valine) or glutamine. Amino acids deliver metabolizable energy (~4 kcal/g).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                <span><strong>Inspect the Magnesium Salt Form:</strong> Magnesium malate, glycinate, or chloride are generally gentle on the digestive tract. Magnesium oxide and high-dose magnesium citrate frequently trigger osmotic diarrhea.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                <span><strong>Avoid Extreme Potassium Doses:</strong> Never ingest concentrated potassium chloride pills or massive powder scoops without a physician&apos;s prescription.</span>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-on-surface-variant pt-1">
            For more details on fasting drink ingredients, read our comprehensive guide on{" "}
            <Link href="/guides/what-can-you-drink-while-fasting" className="text-primary font-semibold underline">
              what you can drink while fasting
            </Link>
            .
          </p>
        </section>

        {/* Section 5: Medical Safety & Warning Signs */}
        <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container">
          <div className="flex items-center gap-2 mb-1">
            <ShieldAlert className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Kidney, Cardiac, and Medication Safety Limits
            </h2>
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            The kidneys maintain delicate electrolyte homeostasis. Mineral supplementation is dangerous for several clinical groups:
          </p>
          <div className="space-y-2 pt-2 text-sm sm:text-base text-on-surface-variant">
            <p><strong>Strict clinical contraindications for electrolyte supplementation without medical supervision:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Chronic Kidney Disease (CKD):</strong> Impaired kidneys cannot effectively excrete excess potassium or magnesium, leading to lethal hyperkalemia or hypermagnesemia.</li>
              <li><strong>Cardiovascular Conditions &amp; Heart Failure:</strong> Individuals with heart failure or hypertension taking ACE inhibitors, ARBs, or potassium-sparing diuretics (e.g., spironolactone) face severe risks of fatal cardiac arrhythmias if they take potassium supplements.</li>
              <li><strong>Lithium Therapy:</strong> Sodium fluctuations drastically alter serum lithium levels, precipitating either lithium toxicity or loss of therapeutic efficacy.</li>
            </ul>
          </div>
          <div className="p-3.5 rounded-xl bg-error/10 text-xs sm:text-sm text-error border border-error/20 mt-3">
            <strong>Red-Flag Warning:</strong> If you experience severe dizziness upon standing, mental confusion, chest pain, an irregular or racing heartbeat, muscle twitching, or persistent vomiting, <strong>stop fasting immediately</strong> and seek prompt medical evaluation. Never attempt to &ldquo;push through&rdquo; concerning symptoms.
          </div>
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
            Keep Fasting Hydration Simple
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            For most intermittent fasters, success comes from simple, consistent hydration with water and predictable meal timings. Use our fasting calculator to map your fasting window around your daily routine.
          </p>
          <div className="pt-2">
            <Link
              href="/#calculator"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary font-semibold shadow-sm hover:bg-primary/90 transition-colors"
            >
              <span>Open Fasting Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
