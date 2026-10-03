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
  Activity,
  Zap,
  Utensils,
} from "lucide-react";

export const metadata: Metadata = {
  title: "18:6 Intermittent Fasting: A Practical Guide",
  description:
    "Learn how 18:6 intermittent fasting works, explore 6-hour eating window schedules, meal planning strategies, and practical tips for intermediate fasters.",
  keywords: [
    "18:6 intermittent fasting",
    "18 6 fasting guide",
    "18 6 fasting schedule",
    "how to do 18 6 fasting",
    "18 6 eating window",
    "18 hour fast",
    "intermittent fasting 18 6",
    "intermediate intermittent fasting",
  ],
  alternates: {
    canonical: "/guides/18-6-intermittent-fasting-guide",
  },
  openGraph: {
    title: "18:6 Intermittent Fasting: A Practical Guide | FastTrack",
    description:
      "Learn how 18:6 intermittent fasting works, explore 6-hour eating window schedules, meal planning strategies, and practical tips for intermediate fasters.",
    url: `${getSiteUrl()}/guides/18-6-intermittent-fasting-guide`,
    type: "article",
    publishedTime: "2026-10-04",
    modifiedTime: "2026-10-04",
    authors: ["Muhammad Usama"],
  },
  twitter: {
    card: "summary_large_image",
    title: "18:6 Intermittent Fasting: A Practical Guide | FastTrack",
    description:
      "Learn how 18:6 intermittent fasting works, explore 6-hour eating window schedules, meal planning strategies, and practical tips for intermediate fasters.",
  },
};

const FAQS = [
  {
    question: "Can I do 18:6 intermittent fasting every single day?",
    answer:
      "Many experienced practitioners follow an 18:6 schedule 5 to 7 days per week, while others rotate 18:6 on weekdays with a more flexible 16:8 or 14:10 window on weekends. The best approach is one that supports your daily energy levels, permits adequate total caloric and protein intake, and avoids social or psychological burnout.",
  },
  {
    question: "Does fasting for 18 hours produce twice the benefits of 16 hours?",
    answer:
      "No. Biological adaptations do not scale linearly with fasting duration. While 18 hours extends the period of lower basal insulin and elevated fatty acid oxidation, health authorities including Johns Hopkins Medicine emphasize that longer fasts are not automatically better. Results still depend fundamentally on diet quality, overall calorie balance, and long-term sustainability.",
  },
  {
    question: "How many meals should I eat during a 6-hour window?",
    answer:
      "One common structure is eating two main meals—such as breaking the fast at 1:00 PM and eating dinner at 6:30 PM—sometimes accompanied by a light snack in between. However, meal cadence is a personal choice; the key is consuming adequate protein and essential nutrients without forcing excessively large portions into a single sitting.",
  },
  {
    question: "How do I prevent overeating when breaking an 18-hour fast?",
    answer:
      "Because appetite hormones can surge near your scheduled break-fast time, pacing your first meal is critical. Avoid rushing into large refined carbohydrates. Instead, break your fast deliberately with easily digestible whole foods—such as eggs, poultry, steamed vegetables, or avocado—and chew thoroughly to allow fullness signals to register.",
  },
  {
    question: "Can I exercise during the 18-hour fasting window?",
    answer:
      "Yes, many fasters perform light cardio, walking, or moderate workouts during the morning fasting window. However, high-intensity interval training or heavy resistance sessions are often best scheduled toward the end of the fast, allowing you to refuel shortly afterward with protein and complex carbohydrates.",
  },
];

export default function EighteenSixFastingGuidePage() {
  const siteUrl = getSiteUrl();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "18:6 Intermittent Fasting: A Practical Guide",
    description:
      "Learn how 18:6 intermittent fasting works, explore 6-hour eating window schedules, meal planning strategies, and practical tips for intermediate fasters.",
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
      "@id": `${siteUrl}/guides/18-6-intermittent-fasting-guide`,
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
        name: "18:6 Intermittent Fasting Guide",
        item: `${siteUrl}/guides/18-6-intermittent-fasting-guide`,
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
            Intermediate Protocol
          </span>
          <span className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>11 min read</span>
          </span>
        </div>

        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight">
          18:6 Intermittent Fasting: A Practical Guide
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
        The 18:6 intermittent fasting schedule represents an intermediate step in time-restricted eating. By extending the daily fast to 18 hours and condensing meals into a focused 6-hour window, 18:6 deepens daily digestive rest and fat oxidation while requiring thoughtful meal planning to ensure balanced, sufficient nutrition.
      </p>

      {/* Visual Timeline Diagram */}
      <div className="mb-12 p-6 sm:p-8 bg-surface-container-lowest rounded-2xl border border-surface-container shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <span className="font-headline text-base sm:text-lg font-bold text-on-surface flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" />
            <span>The 18:6 Daily Rhythm at a Glance</span>
          </span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
            18h Fast / 6h Feed
          </span>
        </div>

        <div className="space-y-4">
          {/* Progress bar visual */}
          <div className="h-7 w-full rounded-full overflow-hidden flex bg-surface-container border border-surface-container-high text-xs font-semibold text-center leading-7">
            <div className="w-[75%] bg-slate-800 text-slate-100 flex items-center justify-center gap-1">
              <span>Fasting Window (18 Hours)</span>
            </div>
            <div className="w-[25%] bg-blue-600 text-white flex items-center justify-center gap-1">
              <span>Eating Window (6h)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-on-surface-variant">
            <div className="p-3 rounded-xl bg-surface-container-low border border-surface-container">
              <span className="font-bold text-on-surface block mb-1">Overnight Rest (8h)</span>
              <span>Sleep establishes the initial baseline of the 18-hour fasting window.</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-surface-container">
              <span className="font-bold text-on-surface block mb-1">Extended Fast (10h)</span>
              <span>Active morning and midday fasting with water, black coffee, and tea.</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-surface-container">
              <span className="font-bold text-on-surface block mb-1">6-Hour Window</span>
              <span>Commonly structured around two main meals, timed according to your preferred schedule.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-10 text-on-surface font-body-md text-base sm:text-lg leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Is 18:6 Intermittent Fasting?
          </h2>
          <p className="text-on-surface-variant">
            In an 18:6 protocol, the 24-hour day is divided into an 18-hour continuous fast and a 6-hour feeding window. For example, if your final evening meal concludes at 7:00 PM, your next meal takes place at 1:00 PM the following afternoon.
          </p>
          <p className="text-on-surface-variant">
            Often described as "accelerated time-restricted eating," 18:6 is typically adopted by practitioners who have comfortably practiced the standard 16:8 schedule and wish to experience deeper daytime digestive rest. Because the eating window is compressed to 6 hours, many practitioners find it convenient to structure intake into two main meals (or two lighter meals and a snack), though exact meal cadence remains an individual choice.
          </p>
          <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high flex items-start gap-3 text-sm">
            <Sparkles className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-on-surface">Intermediate Consideration: </span>
              <span className="text-on-surface-variant">
                18:6 requires greater attention to meal planning than 14:10 or 16:8. Ensuring adequate protein, fiber, and total energy across your chosen meals is essential to prevent fatigue and nutrient deficits.
              </span>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            How the 18:6 Routine Functions
          </h2>
          <p className="text-on-surface-variant">
            Extending fasting duration to 18 hours builds upon the physiological adaptations seen in shorter time-restricted feeding models:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant text-base">
            <li>
              <strong>Prolonged Glycogen Depletion:</strong> By hours 14 to 18, liver glycogen stores are significantly drawn down, stimulating increased reliance on fatty acid oxidation and ketone production for cellular fuel.
            </li>
            <li>
              <strong>Sustained Basal Insulin Suppression:</strong> Keeping insulin low throughout the daytime hours supports metabolic flexibility—the capacity of cells to toggle efficiently between carbohydrates and stored lipids.
            </li>
            <li>
              <strong>Circadian Digestive Quiescence:</strong> The gastrointestinal tract remains at rest for three-quarters of the day. Many practitioners report experiencing heightened mental alertness and reduced post-meal lethargy during late-morning fasting hours.
            </li>
          </ul>
          <p className="text-on-surface-variant">
            However, these benefits do not mean that 18:6 is twice as powerful as 16:8. Research emphasizes that longer fasting windows also demand greater behavioral discipline and can present challenges in meeting daily micronutrient targets.
          </p>
        </section>

        {/* Section 3: Schedule Examples Table */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Example 18:6 Schedules
          </h2>
          <p className="text-on-surface-variant">
            Structuring a 6-hour window requires aligning meals with your peak productivity and social preferences. Below are three realistic schedules commonly utilized on 18:6:
          </p>

          <div className="overflow-x-auto rounded-xl border border-surface-container bg-surface-container-lowest shadow-sm my-6">
            <div className="p-4 bg-surface-container-low border-b border-surface-container font-headline text-sm font-bold text-on-surface flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-primary" />
              <span>Representative 18:6 Daily Schedule Variations</span>
            </div>
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-surface-container font-headline text-xs font-bold uppercase tracking-wider text-on-surface">
                  <th className="py-3 px-4">Schedule Model</th>
                  <th className="py-3 px-4">Eating Window</th>
                  <th className="py-3 px-4">Fasting Window</th>
                  <th className="py-3 px-4">Meal Cadence</th>
                  <th className="py-3 px-4">Lifestyle Fit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container font-body-sm text-on-surface-variant">
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="py-3 px-4 font-semibold text-on-surface">Afternoon &amp; Evening</td>
                  <td className="py-3 px-4 font-medium text-blue-700 dark:text-blue-400">1:00 PM – 7:00 PM</td>
                  <td className="py-3 px-4">7:00 PM – 1:00 PM</td>
                  <td className="py-3 px-4">Lunch (1:00 PM), Snack (4:00 PM), Dinner (6:30 PM)</td>
                  <td className="py-3 px-4">Office workers, family dinners, traditional workdays</td>
                </tr>
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="py-3 px-4 font-semibold text-on-surface">Early Daytime</td>
                  <td className="py-3 px-4 font-medium text-blue-700 dark:text-blue-400">11:00 AM – 5:00 PM</td>
                  <td className="py-3 px-4">5:00 PM – 11:00 AM</td>
                  <td className="py-3 px-4">Brunch (11:00 AM), Light Snack (2:00 PM), Dinner (4:30 PM)</td>
                  <td className="py-3 px-4">Early risers, optimal evening sleep buffer, retirees</td>
                </tr>
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="py-3 px-4 font-semibold text-on-surface">Evening Window</td>
                  <td className="py-3 px-4 font-medium text-blue-700 dark:text-blue-400">2:00 PM – 8:00 PM</td>
                  <td className="py-3 px-4">8:00 PM – 2:00 PM</td>
                  <td className="py-3 px-4">Late Lunch (2:00 PM), Snack (5:30 PM), Dinner (7:30 PM)</td>
                  <td className="py-3 px-4">Late schedule workers, evening gym training, social evenings</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-on-surface-variant text-sm">
            You can verify and model your exact timestamps using our interactive{" "}
            <Link href="/fasting-methods/18-6" className="text-primary font-semibold hover:underline">
              18:6 Protocol Reference Page &amp; Calculator
            </Link>
            .
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Structuring Nutrition in a 6-Hour Eating Window
          </h2>
          <p className="text-on-surface-variant">
            Because a 6-hour window condenses your eating opportunities, nutrition quality matters far more than on broader schedules. Consuming predominantly processed foods can leave you nutrient-depleted and excessively hungry during subsequent fasting hours.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-2">
              <h3 className="font-headline text-base font-bold text-on-surface flex items-center gap-2">
                <Utensils className="w-4 h-4 text-primary" />
                <span>The Opening Meal (Break-Fast)</span>
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Break your fast mindfully with easily digestible whole foods. High-quality proteins (poultry, fish, eggs, tofu) paired with cooked greens and healthy fats (avocado, olive oil) establish stable blood sugar and long-lasting satiety. Avoid opening your fast with high-glycemic sweets or refined pastries. Review our detailed guide on{" "}
                <Link href="/guides/how-to-break-a-fast" className="text-primary font-semibold hover:underline">
                  How to Break an Intermittent Fast
                </Link>
                .
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-2">
              <h3 className="font-headline text-base font-bold text-on-surface flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>The Closing Dinner</span>
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Your final meal should anchor the upcoming 18-hour fast. Include complete protein, fiber-rich vegetables, and complex carbohydrates (sweet potatoes, quinoa, brown rice) to support overnight recovery without provoking rapid nocturnal insulin spikes.
              </p>
            </div>
          </div>
          <p className="text-on-surface-variant text-sm">
            For strategies on navigating transient appetite surges between hours 14 and 18, consult our practical guide on{" "}
            <Link href="/guides/how-to-handle-hunger" className="text-primary font-semibold hover:underline">
              How to Handle Fasting Hunger
            </Link>
            .
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Can You Drink During the 18-Hour Fast?
          </h2>
          <p className="text-on-surface-variant">
            During an 18-hour fast, hydration and mineral management take on greater importance. With longer periods of low circulating insulin, the body excretes sodium and fluids at a higher rate:
          </p>
          <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-3">
            <h3 className="font-headline text-base font-bold text-on-surface flex items-center gap-2">
              <Coffee className="w-4 h-4 text-secondary" />
              <span>Hydration Essentials for 18-Hour Fasts</span>
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-sm text-on-surface-variant">
              <li>
                <strong>Abundant Water:</strong> Sip water steadily throughout the morning and afternoon. Avoid chugging large volumes all at once, which can accelerate mineral excretion.
              </li>
              <li>
                <strong>Black Coffee &amp; Plain Tea:</strong> Zero-calorie beverages are permissible. However, limit excessive caffeine intake, which can cause jitteriness or stomach acidity on an empty stomach.
              </li>
              <li>
                <strong>Electrolyte Support:</strong> Unsweetened electrolyte water containing sodium, potassium, and magnesium can help prevent afternoon sluggishness or mild muscle tension.
              </li>
            </ul>
            <p className="text-xs text-on-surface-variant pt-2">
              For complete zero-calorie beverage lists, see our companion guide on{" "}
              <Link href="/guides/what-can-you-drink-while-fasting" className="text-primary font-semibold hover:underline">
                What Can You Drink While Fasting?
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Section 6: Protocol Comparison */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            18:6 Compared With 16:8 and 20:4 Schedules
          </h2>
          <p className="text-on-surface-variant">
            Understanding how 18:6 bridges the gap between the popular 16:8 schedule and the intensive 20:4 Warrior protocol helps determine whether it aligns with your lifestyle:
          </p>

          <div className="overflow-x-auto rounded-xl border border-surface-container bg-surface-container-lowest shadow-sm my-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-surface-container font-headline text-xs font-bold uppercase tracking-wider text-on-surface">
                  <th className="py-3 px-4">Fasting Method</th>
                  <th className="py-3 px-4 text-right">Fasting</th>
                  <th className="py-3 px-4 text-right">Eating</th>
                  <th className="py-3 px-4">Meal Structure</th>
                  <th className="py-3 px-4">Primary Difference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container font-body-sm text-on-surface-variant">
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="py-3 px-4 font-semibold text-on-surface">
                    <Link href="/guides/16-8-intermittent-fasting-guide" className="text-primary hover:underline">
                      16:8 Protocol
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-right font-mono">16h</td>
                  <td className="py-3 px-4 text-right font-mono">8h</td>
                  <td className="py-3 px-4">2–3 meals</td>
                  <td className="py-3 px-4">More relaxed pacing; easiest to fit family meals and afternoon snacks</td>
                </tr>
                <tr className="bg-primary/5 hover:bg-primary/10 transition-colors">
                  <td className="py-3 px-4 font-bold text-primary">
                    <Link href="/fasting-methods/18-6" className="hover:underline">
                      18:6 Accelerated (Current)
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-primary">18h</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-primary">6h</td>
                  <td className="py-3 px-4 font-medium text-primary">Typically 2 meals (or 2 meals + snack)</td>
                  <td className="py-3 px-4 font-medium text-primary">Extended metabolic pause; requires thoughtful meal planning within 6 hours</td>
                </tr>
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="py-3 px-4 font-semibold text-on-surface">
                    <Link href="/fasting-methods/20-4" className="text-primary hover:underline">
                      20:4 Warrior
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-right font-mono">20h</td>
                  <td className="py-3 px-4 text-right font-mono">4h</td>
                  <td className="py-3 px-4">1 primer + 1 feast</td>
                  <td className="py-3 px-4">Highly condensed; demands advanced electrolyte and refeeding management</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-on-surface-variant text-sm">
            Transitioning directly from a standard 12-hour eating habit to 18:6 is rarely advised. Most practitioners establish consistency on{" "}
            <Link href="/fasting-methods/16-8" className="text-primary font-semibold hover:underline">
              16:8
            </Link>{" "}
            for several weeks before testing an 18-hour fasting window.
          </p>
        </section>

        {/* Section 7: Scientific Evidence */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Does Scientific Research Say About 18:6?
          </h2>
          <p className="text-on-surface-variant">
            Scientific studies investigating 18-hour fasting periods highlight both promising physiological adaptations and important practical boundaries:
          </p>
          <div className="space-y-3 my-4">
            <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container">
              <span className="font-bold text-on-surface block text-sm mb-1">
                Cellular Maintenance and Metabolic Switching
              </span>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Peer-reviewed reviews from researchers at Johns Hopkins Medicine and the National Institute on Aging describe the "metabolic switch"—the point at which liver glycogen depletion prompts cells to utilize fatty acids and ketones. An 18-hour fast extends this phase for several daytime hours, stimulating cellular repair signaling.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container">
              <span className="font-bold text-on-surface block text-sm mb-1">
                Diminishing Returns: Longer Is Not Automatically Better
              </span>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Health researchers emphasize that fasting does not produce exponentially greater benefits with every additional hour. In clinical trials, extending fasting windows from 16 to 18 or 20 hours often produces similar net reductions in weight and glycemic markers, because total daily caloric balance and nutrient quality remain the primary drivers of metabolic outcomes.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container">
              <span className="font-bold text-on-surface block text-sm mb-1">
                Nutritional Adequacy Matters Most
              </span>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                A common warning in clinical nutrition literature is that excessively compressed eating windows can lead to inadequate protein distribution across the day. Distributing dietary protein evenly across meals during the 6-hour window supports muscle recovery and helps preserve lean body mass.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: Safety & Clinical Precautions */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Practical Challenges and Safety Precautions
          </h2>
          <p className="text-on-surface-variant">
            Because 18:6 involves an intensive daily fast, certain populations face elevated risks and should avoid this protocol:
          </p>

          <div className="p-6 rounded-2xl bg-surface-container-lowest border border-error/30 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-error font-headline font-bold text-base">
              <ShieldAlert className="w-5 h-5 flex-shrink-0" />
              <span>Medical Contraindications and Safety Cautions</span>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-sm text-on-surface-variant">
              <li>
                <strong>Diabetes and Blood-Sugar-Lowering Medications:</strong> An 18-hour fast carries significant risks of hypoglycemia for individuals taking insulin or sulfonylureas. These individuals should not undertake fasting schedules without direct medical consultation and supervision from a prescribing physician.
              </li>
              <li>
                <strong>Pregnancy and Nursing:</strong> Strict time restriction is contraindicated due to increased maternal and fetal nutritional demands.
              </li>
              <li>
                <strong>History of Eating Disorders:</strong> Restricting food to a 6-hour window can exacerbate binge-eating tendencies or restrictive behaviors.
              </li>
              <li>
                <strong>Underweight Status (BMI &lt; 18.5):</strong> Individuals with low body mass index should avoid intermediate fasting protocols.
              </li>
              <li>
                <strong>Gastrointestinal Sensitivity:</strong> Consuming large volumes of food in a short 6-hour timeframe can exacerbate GERD, gastritis, or bloating in sensitive individuals.
              </li>
            </ul>
            <p className="text-xs text-on-surface-variant pt-2 border-t border-surface-container">
              Always seek advice from a licensed physician or registered dietitian before adopting intermediate fasting schedules.
            </p>
          </div>
        </section>

        {/* Section 9: Visible FAQs */}
        <section className="space-y-6 pt-6 border-t border-surface-container">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Frequently Asked Questions About 18:6 Fasting
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
            Calculate Your Custom 18:6 Schedule
          </h2>
          <p className="text-on-surface-variant text-base leading-relaxed">
            FastTrack provides interactive calculators and detailed method profiles to help you accurately plan your 18:6 routine:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <Link
              href="/fasting-methods/18-6"
              className="p-4 rounded-xl bg-surface-container-lowest border border-surface-container hover:border-surface-container-high transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="font-headline text-base font-bold text-on-surface group-hover:text-primary transition-colors block">
                  18:6 Protocol Reference Page
                </span>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Explore full protocol parameters, meal structure guides, and compatible fasting methods.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-3">
                <span>View 18:6 Method Details</span>
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
                  Generate exact opening and closing timestamps for your 6-hour eating window based on your last meal.
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
