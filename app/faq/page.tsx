import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  HelpCircle,
  ChevronDown,
  Clock,
  Coffee,
  Activity,
  Utensils,
  ArrowRight,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { getSiteUrl } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Fasting Answers & Evidence | FastTrack",
  description:
    "Evidence-based answers to 11 essential intermittent fasting questions: schedule selection, coffee, electrolytes, fasted workouts, muscle retention, and gentle refeeding.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions — Fasting Answers & Evidence | FastTrack",
    description:
      "Evidence-based answers to 11 essential intermittent fasting questions: schedule selection, coffee, electrolytes, fasted workouts, muscle retention, and gentle refeeding.",
    url: `${getSiteUrl()}/faq`,
    type: "website",
  },
};

interface FaqItem {
  question: string;
  answer: string;
  linkHref?: string;
  linkText?: string;
}

interface FaqCategory {
  category: string;
  icon: typeof Clock;
  description: string;
  items: FaqItem[];
}

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    category: "Fasting Schedules & Fundamentals",
    icon: Clock,
    description: "Choosing protocols, shifting hours, and understanding circadian alignment.",
    items: [
      {
        question: "Which intermittent fasting schedule is best for beginners?",
        answer:
          "Most beginners succeed best by starting with a 12:12 or 14:10 protocol before progressing to 16:8. A 12-hour overnight fast (for example, 8:00 PM to 8:00 AM) requires minimal lifestyle adjustment and establishes baseline digestive rest. Once comfortable, extending the fast to 14:10 for one to two weeks prepares your circadian rhythms and hunger hormones for the popular 16:8 pattern without overwhelming hunger or fatigue.",
        linkHref: "/guides/intermittent-fasting-for-beginners",
        linkText: "Read the complete Beginner's Fasting Guide",
      },
      {
        question: "Can I shift my eating window on weekends or social occasions?",
        answer:
          "Yes. Lifestyle flexibility is a core advantage of intermittent fasting. If you have an evening dinner or family brunch, you can shift your eating window forward or backward by 1 to 2 hours without losing metabolic benefits. What matters most for metabolic health and insulin sensitivity is weekly consistency rather than rigid minute-by-minute perfection. You can recalculate your target schedule anytime your finish time changes.",
        linkHref: "/fasting-methods/16-8",
        linkText: "Use the 16:8 Schedule Calculator",
      },
      {
        question: "Does meal timing relative to daylight affect fasting results?",
        answer:
          "Emerging chronobiology research shows that early time-restricted eating (eTRE)—aligning your eating window with daylight hours (such as 8:00 AM to 4:00 PM or 10:00 AM to 6:00 PM)—confers superior glycemic control and insulin sensitivity compared to late-evening eating. Consuming heavy meals close to bedtime conflicts with nocturnal melatonin release and natural metabolic slowdown, potentially impairing deep sleep quality and glucose tolerance.",
        linkHref: "/guides/how-does-intermittent-fasting-work",
        linkText: "Explore the physiology of fasting and circadian rhythms",
      },
    ],
  },
  {
    category: "Drinks, Supplements & Fasting Rules",
    icon: Coffee,
    description: "Beverages, non-nutritive sweeteners, vitamins, and electrolyte management.",
    items: [
      {
        question: "Does black coffee or unsweetened tea break my fast?",
        answer:
          "Plain water, unsweetened black coffee, and unflavored green or herbal teas contain negligible calories and do not stimulate meaningful digestive insulin secretion. In strict fasting (water-only) and lifestyle intermittent fasting, black coffee and tea are widely accepted. However, adding cow's milk, oat milk, sugar, flavored syrups, or bulletproof fats introduces caloric energy that activates digestive processes and breaks a strict fast.",
        linkHref: "/guides/what-can-you-drink-while-fasting",
        linkText: "See the complete Fasting Drink Master List",
      },
      {
        question: "Can I take vitamins, medications, or supplements while fasting?",
        answer:
          "Prescription medications should always be taken strictly according to your physician's instructions, regardless of fasting hours. If a medication requires food for proper absorption or stomach protection, take it with a meal. For non-prescription supplements, water-soluble vitamins (such as Vitamin C and B-complex) can be taken with water during fasting hours, while fat-soluble vitamins (A, D, E, K) require dietary lipids for absorption and belong inside your eating window.",
        linkHref: "/guides/what-breaks-a-fast",
        linkText: "Check what breaks a fast: foods, supplements, and drinks",
      },
      {
        question: "Do zero-calorie artificial sweeteners or diet sodas break a fast?",
        answer:
          "Non-nutritive sweeteners (such as stevia, monk fruit, sucralose, and aspartame) provide zero caloric energy and technically do not disrupt hepatic glycogen depletion. However, some evidence suggests certain artificial sweeteners may trigger a cephalic phase insulin response or alter gut microbiota in sensitive individuals. For clean fasting and appetite management, unsweetened water, sparkling water, and plain teas remain the gold standard.",
        linkHref: "/guides/what-breaks-a-fast",
        linkText: "Read about clean vs. dirty fasting rules",
      },
      {
        question: "Do I need electrolytes during a 16-hour or daily intermittent fast?",
        answer:
          "For standard daily schedules like 14:10 or 16:8, supplemental electrolyte powders are generally unnecessary if your meals contain adequate sodium, potassium, and magnesium from whole foods. However, during the initial adaptation week—when insulin levels drop and the kidneys excrete sodium more rapidly—a pinch of mineral salt in water can prevent mild headaches, lethargy, or orthostatic lightheadedness.",
        linkHref: "/electrolytes-while-fasting",
        linkText: "Read the Complete Electrolytes While Fasting Guide",
      },
    ],
  },
  {
    category: "Exercise, Muscle Retention & Hunger",
    icon: Activity,
    description: "Physical training, preserving lean mass, and managing ghrelin pulses.",
    items: [
      {
        question: "Can I exercise safely while in a fasted state?",
        answer:
          "Yes. Low-to-moderate intensity aerobic activity—such as brisk walking, zone-2 jogging, or easy cycling—is well-tolerated while fasted and encourages fat oxidation. For heavy resistance training or high-intensity interval training (HIIT), individual performance varies. Many lifters prefer scheduling intense workouts toward the end of their fasting window so a recovery meal containing protein and carbohydrates can be consumed shortly afterward.",
        linkHref: "/guides/exercise-while-fasting",
        linkText: "Read the Fasted Workout & Exercise Guide",
      },
      {
        question: "Will intermittent fasting cause muscle loss or slow my metabolic rate?",
        answer:
          "Clinical trials demonstrate that time-restricted feeding preserves lean muscle mass comparably to continuous energy restriction, provided two criteria are met: adequate total daily protein intake (1.6 to 2.2 grams per kilogram of lean body mass) and regular resistance training. Intermittent fasting does not inherently lower resting metabolic rate unless total daily caloric intake is suppressed too severely over extended periods.",
        linkHref: "/intermittent-fasting-plateau",
        linkText: "Learn how to overcome metabolic plateaus",
      },
      {
        question: "How should I handle intense hunger waves during the fasting window?",
        answer:
          "Hunger is not linear; it arrives in circadian pulses driven by the hormone ghrelin, usually corresponding to habitual meal times. A hunger wave typically peaks and subsides within 20 to 30 minutes. Drinking warm herbal tea, sparkling water with mineral salt, or taking a brisk walk helps suppress ghrelin surges. If hunger is accompanied by dizziness, shakiness, confusion, or weakness, listen to your body and break your fast immediately.",
        linkHref: "/guides/intermittent-fasting-for-beginners",
        linkText: "Explore beginner strategies for managing hunger",
      },
    ],
  },
  {
    category: "Breaking Your Fast & Refeeding",
    icon: Utensils,
    description: "Gentle refeeding, digestive comfort, and avoiding post-fast energy crashes.",
    items: [
      {
        question: "What is the best way to break a fast to avoid digestive discomfort?",
        answer:
          "After extended digestive rest, digestive enzymes and stomach acid production are resting. Break your fast gently with a balanced combination of easily digested whole foods: high-quality protein (eggs, poultry, fish, or tofu), healthy fats (avocado, extra virgin olive oil), and steamed or cooked vegetables. Avoid breaking a fast with large portions of refined carbohydrates, sugary pastries, or deep-fried foods, which cause rapid glycemic spikes followed by acute lethargy and digestive distress.",
        linkHref: "/fasting-stages",
        linkText: "Learn about the biological stages of fasting",
      },
    ],
  },
];

export default function FaqPage() {
  const siteUrl = getSiteUrl();

  const allFaqs = FAQ_CATEGORIES.flatMap((c) => c.items);

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
        name: "Frequently Asked Questions",
        item: `${siteUrl}/faq`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 font-label-sm text-xs text-on-surface-variant">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-outline">/</li>
          <li className="text-primary font-medium" aria-current="page">
            FAQ
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header className="max-w-3xl mb-12">
        <span className="font-label-sm text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest flex items-center gap-1.5">
          <HelpCircle className="w-4 h-4" />
          <span>Knowledge Hub</span>
        </span>
        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-primary font-bold tracking-tight mt-2">
          Frequently Asked Questions
        </h1>
        <p className="font-body-md text-base sm:text-lg text-on-surface-variant mt-3 leading-relaxed">
          Clear, evidence-backed answers to 11 essential questions about intermittent fasting
          protocols, beverages, workout timing, hunger physiology, and gentle refeeding.
        </p>
      </header>

      {/* Categorized FAQs */}
      <div className="space-y-12">
        {FAQ_CATEGORIES.map((categoryGroup, groupIdx) => {
          const CategoryIcon = categoryGroup.icon;
          return (
            <section
              key={categoryGroup.category}
              className="bg-surface-container-lowest rounded-2xl border border-surface-container p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-start gap-3.5 mb-6 pb-4 border-b border-surface-container">
                <div className="p-2.5 rounded-xl bg-secondary-container/20 text-secondary flex-shrink-0">
                  <CategoryIcon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-headline text-xl sm:text-2xl font-bold text-primary">
                    {categoryGroup.category}
                  </h2>
                  <p className="font-body-sm text-sm text-on-surface-variant mt-0.5">
                    {categoryGroup.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {categoryGroup.items.map((faq, itemIdx) => {
                  const isFirstOverall = groupIdx === 0 && itemIdx === 0;
                  return (
                    <details
                      key={faq.question}
                      className="group bg-surface-container-low/40 rounded-xl border border-surface-container/80 overflow-hidden transition-all"
                      open={isFirstOverall}
                    >
                      <summary className="w-full p-4 sm:p-5 text-left font-headline text-base sm:text-lg font-semibold text-on-surface flex items-center justify-between gap-4 cursor-pointer hover:bg-surface-container/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                        <span>{faq.question}</span>
                        <ChevronDown className="w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
                      </summary>
                      <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-on-surface-variant font-body-md text-sm sm:text-base leading-relaxed border-t border-surface-container/60 pt-3">
                        <p>{faq.answer}</p>
                        {faq.linkHref && faq.linkText && (
                          <div className="mt-3.5 pt-3 border-t border-surface-container/40">
                            <Link
                              href={faq.linkHref}
                              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary hover:text-primary-hover hover:underline"
                            >
                              <span>{faq.linkText}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </details>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* Clinical Disclaimer Box */}
      <section className="mt-12 bg-surface-container-low rounded-2xl border border-surface-container p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-headline text-base sm:text-lg font-bold text-on-surface">
              Educational & Scientific Purpose
            </h3>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-1.5 leading-relaxed">
              FastTrack provides evidence-based educational calculators and fasting guides. Fasting
              protocols are not suitable for pregnant or nursing individuals, anyone with a history
              of disordered eating, children, or individuals managing Type 1 diabetes or specific
              metabolic conditions. Always consult a qualified physician or registered dietitian before
              making significant dietary changes.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs sm:text-sm font-medium">
              <Link href="/guides" className="inline-flex items-center gap-1 text-primary hover:underline">
                <Compass className="w-4 h-4" />
                <span>Explore all educational guides</span>
              </Link>
              <Link href="/about" className="inline-flex items-center gap-1 text-primary hover:underline">
                <span>About our platform & editorial standards</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
