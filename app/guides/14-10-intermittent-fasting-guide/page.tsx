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
  Heart,
  Sun,
} from "lucide-react";

export const metadata: Metadata = {
  title: "14:10 Intermittent Fasting: A Practical Guide",
  description:
    "Discover how 14:10 fasting works. Explore practical schedule examples, compare 14:10 to 12:12 and 16:8, and build a sustainable daily routine.",
  keywords: [
    "14:10 intermittent fasting",
    "14 10 fasting guide",
    "14 10 fasting schedule",
    "how to do 14 10 fasting",
    "14 10 eating window",
    "14 hour fast",
    "intermittent fasting 14 10",
    "beginner intermittent fasting",
  ],
  alternates: {
    canonical: "/guides/14-10-intermittent-fasting-guide",
  },
  openGraph: {
    title: "14:10 Intermittent Fasting: A Practical Guide | FastTrack",
    description:
      "Discover how 14:10 fasting works. Explore practical schedule examples, compare 14:10 to 12:12 and 16:8, and build a sustainable daily routine.",
    url: `${getSiteUrl()}/guides/14-10-intermittent-fasting-guide`,
    type: "article",
    publishedTime: "2026-10-04",
    modifiedTime: "2026-10-04",
    authors: ["Muhammad Usama"],
  },
  twitter: {
    card: "summary_large_image",
    title: "14:10 Intermittent Fasting: A Practical Guide | FastTrack",
    description:
      "Discover how 14:10 intermittent fasting works. Explore practical schedule examples, compare 14:10 to 12:12 and 16:8, and build a sustainable daily routine.",
  },
};

const FAQS = [
  {
    question: "Can I structure three meals within a 10-hour eating window?",
    answer:
      "Yes. A 10-hour eating window easily accommodates three balanced meals—or two meals and a snack—depending on your schedule and hunger cues. For instance, an individual might place breakfast at 8:30 AM, lunch at 1:00 PM, and dinner at 6:30 PM. This timeframe allows flexibility to meet daily nutritional needs without feeling rushed or forced to overeat in a single sitting.",
  },
  {
    question: "Is a 14-hour fast long enough to see meaningful benefits?",
    answer:
      "Yes. Clinical research on time-restricted eating, including investigations from the Salk Institute and UC San Diego, suggests that consolidating caloric intake to 10 hours and establishing a 14-hour overnight pause can support cardiometabolic markers, sleep regularity, and blood glucose regulation compared to eating across 14 to 16 hours, while emphasizing that overall nutritional quality remains essential.",
  },
  {
    question: "Does 14:10 intermittent fasting automatically cause weight loss?",
    answer:
      "No. 14:10 does not bypass energy balance. It helps many people manage weight by eliminating late-night snacking and mindless evening grazing, which often curtails excess calories naturally. However, if total daily calorie intake exceeds energy expenditure during the 10-hour window, weight loss will not occur.",
  },
  {
    question: "What can I drink during the 14-hour fasting period?",
    answer:
      "Stick to zero-calorie beverages that do not provoke metabolic or digestive demands. Water, sparkling mineral water, plain black coffee, and unsweetened herbal teas (such as peppermint or chamomile) are ideal choices during the fasting hours.",
  },
  {
    question: "How long should I stay on 14:10 before attempting 16:8?",
    answer:
      "Many people choose to maintain 14:10 indefinitely as their permanent lifestyle schedule because of its low social friction. If your goal is to experiment with 16:8, spending 2 to 4 weeks on 14:10 allows your body, appetite hormones, and daily routine to adapt smoothly without intense hunger or fatigue.",
  },
];

export default function FourteenTenFastingGuidePage() {
  const siteUrl = getSiteUrl();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "14:10 Intermittent Fasting: A Practical Guide",
    description:
      "Discover how 14:10 intermittent fasting works. Explore practical schedule examples, compare 14:10 to 12:12 and 16:8, and build a sustainable daily routine.",
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
      "@id": `${siteUrl}/guides/14-10-intermittent-fasting-guide`,
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
        name: "14:10 Intermittent Fasting Guide",
        item: `${siteUrl}/guides/14-10-intermittent-fasting-guide`,
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
            <span>10 min read</span>
          </span>
        </div>

        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight">
          14:10 Intermittent Fasting: A Practical Guide
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
        The 14:10 intermittent fasting schedule offers one of the gentlest, most sustainable approaches to time-restricted eating. By establishing a 14-hour overnight fasting pause and a generous 10-hour daytime eating window, 14:10 curbs late-night snacking and supports circadian alignment while offering the flexibility to comfortably accommodate three meals or two meals and a snack.
      </p>

      {/* Visual Timeline Diagram */}
      <div className="mb-12 p-6 sm:p-8 bg-surface-container-lowest rounded-2xl border border-surface-container shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <span className="font-headline text-base sm:text-lg font-bold text-on-surface flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" />
            <span>The 14:10 Daily Rhythm at a Glance</span>
          </span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
            14h Fast / 10h Feed
          </span>
        </div>

        <div className="space-y-4">
          {/* Progress bar visual */}
          <div className="h-7 w-full rounded-full overflow-hidden flex bg-surface-container border border-surface-container-high text-xs font-semibold text-center leading-7">
            <div className="w-[58.3%] bg-slate-800 text-slate-100 flex items-center justify-center gap-1">
              <span>Fasting Window (14 Hours)</span>
            </div>
            <div className="w-[41.7%] bg-teal-600 text-white flex items-center justify-center gap-1">
              <span>Eating Window (10h)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-on-surface-variant">
            <div className="p-3 rounded-xl bg-surface-container-low border border-surface-container">
              <span className="font-bold text-on-surface block mb-1">Overnight Rest (8h)</span>
              <span>Solid sleep forms the bulk of the 14-hour fasting pause.</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-surface-container">
              <span className="font-bold text-on-surface block mb-1">Gentle Buffer (6h)</span>
              <span>A modest morning delay and evening dinner cutoff complete the fast.</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-surface-container">
              <span className="font-bold text-on-surface block mb-1">10-Hour Window</span>
              <span>Flexible timeframe accommodating standard daily meals or snacks without rush.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-10 text-on-surface font-body-md text-base sm:text-lg leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Is 14:10 Intermittent Fasting?
          </h2>
          <p className="text-on-surface-variant">
            In a 14:10 routine, you allocate 14 continuous hours of the day to fasting and condense all food consumption into the remaining 10 hours. For example, if you finish your evening dinner by 7:00 PM, your next meal begins at 9:00 AM the following morning.
          </p>
          <p className="text-on-surface-variant">
            Many people unaware of their baseline eating habits consume calories across 15 to 16 hours each day—beginning with a sweetened morning coffee at 6:30 AM and ending with a bedtime television snack at 10:30 PM. In contrast, 14:10 establishes a clear boundary: nighttime eating ends early enough for your gastrointestinal tract to rest, while daytime meals remain unhurried and socially compatible.
          </p>
          <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high flex items-start gap-3 text-sm">
            <Sparkles className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-on-surface">Why 14:10 Appeals to Beginners: </span>
              <span className="text-on-surface-variant">
                It avoids skipping entire meals. For example, individuals often preserve breakfast, lunch, and dinner with minor timing adjustments, making it an approachable entry point for those intimidated by stricter fasting regimens.
              </span>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            How the 14:10 Schedule Works in Daily Life
          </h2>
          <p className="text-on-surface-variant">
            Biologically, human digestion and metabolism are entrained to 24-hour circadian rhythms. Our bodies are primed to process nutrients and clear glucose more efficiently during daylight hours, while insulin sensitivity naturally declines as night approaches.
          </p>
          <p className="text-on-surface-variant">
            Extending your nightly fast to 14 hours produces meaningful behavioral and metabolic benefits:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-on-surface-variant text-base">
            <li>
              <strong>Eliminates High-Calorie Nighttime Snacking:</strong> Most evening snacking consists of ultra-processed, calorie-dense convenience foods eaten out of habit, boredom, or screen time rather than physical hunger. Closing the kitchen after dinner naturally eliminates these surplus calories.
            </li>
            <li>
              <strong>Permits Complete Gastric Emptying:</strong> Finishing your last meal 2.5 to 3 hours before sleep prevents active acid production and splanchnic blood flow from competing with nocturnal body cooling and slow-wave sleep.
            </li>
            <li>
              <strong>Initiates Mild Glycogen Depletion:</strong> While 14 hours is shorter than advanced fasting windows, it is long enough for liver glycogen levels to begin dropping, encouraging the body to tap into stored fat for baseline energy before breakfast.
            </li>
          </ul>
        </section>

        {/* Section 3: Schedule Examples Table */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Example 14:10 Schedules
          </h2>
          <p className="text-on-surface-variant">
            Because a 10-hour window is broad, you can readily tailor your schedule to your personal morning and evening rhythms. Here are three realistic schedule layouts:
          </p>

          <div className="overflow-x-auto rounded-xl border border-surface-container bg-surface-container-lowest shadow-sm my-6">
            <div className="p-4 bg-surface-container-low border-b border-surface-container font-headline text-sm font-bold text-on-surface flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-primary" />
              <span>Practical 14:10 Daily Schedule Models</span>
            </div>
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-surface-container font-headline text-xs font-bold uppercase tracking-wider text-on-surface">
                  <th className="py-3 px-4">Schedule Model</th>
                  <th className="py-3 px-4">Eating Window</th>
                  <th className="py-3 px-4">Fasting Window</th>
                  <th className="py-3 px-4">Daily Meal Cadence</th>
                  <th className="py-3 px-4">Ideal Lifestyle Fit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container font-body-sm text-on-surface-variant">
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="py-3 px-4 font-semibold text-on-surface">Morning Routine</td>
                  <td className="py-3 px-4 font-medium text-teal-700 dark:text-teal-400">8:00 AM – 6:00 PM</td>
                  <td className="py-3 px-4">6:00 PM – 8:00 AM</td>
                  <td className="py-3 px-4">Breakfast (8:15 AM), Lunch (12:30 PM), Dinner (5:30 PM)</td>
                  <td className="py-3 px-4">Early risers, schoolchildren parents, early bedtime sleepers</td>
                </tr>
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="py-3 px-4 font-semibold text-on-surface">Balanced Daytime</td>
                  <td className="py-3 px-4 font-medium text-teal-700 dark:text-teal-400">9:00 AM – 7:00 PM</td>
                  <td className="py-3 px-4">7:00 PM – 9:00 AM</td>
                  <td className="py-3 px-4">Breakfast (9:00 AM), Lunch (1:30 PM), Dinner (6:30 PM)</td>
                  <td className="py-3 px-4">Standard 9-to-5 working professionals, regular commuters</td>
                </tr>
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="py-3 px-4 font-semibold text-on-surface">Later Evening</td>
                  <td className="py-3 px-4 font-medium text-teal-700 dark:text-teal-400">10:00 AM – 8:00 PM</td>
                  <td className="py-3 px-4">8:00 PM – 10:00 AM</td>
                  <td className="py-3 px-4">Brunch (10:00 AM), Midday Snack (2:30 PM), Dinner (7:30 PM)</td>
                  <td className="py-3 px-4">Evening gym goers, late dinner households, night owls</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-on-surface-variant text-sm">
            You can verify exact timestamps based on your last meal using our{" "}
            <Link href="/fasting-methods/14-10" className="text-primary font-semibold hover:underline">
              14:10 Protocol Reference Page &amp; Calculator
            </Link>
            .
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Why Choose 14:10 Over Shorter Eating Windows?
          </h2>
          <p className="text-on-surface-variant">
            While intensive protocols like 16:8, 18:6, or OMAD receive substantial social media attention, shorter eating windows are not universally superior. For many individuals, 14:10 is a far more effective long-term choice for several practical reasons:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-2">
              <h3 className="font-headline text-base font-bold text-on-surface flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary" />
                <span>Flexible Meal Structure</span>
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Many people feel lightheaded, irritable, or distracted when forced to skip meals. With 14:10, you have the option to keep breakfast in your schedule simply by having it slightly later than usual, or organize meals around your natural appetite.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-2">
              <h3 className="font-headline text-base font-bold text-on-surface flex items-center gap-2">
                <Sun className="w-4 h-4 text-primary" />
                <span>Excellent Nutritional Sufficiency</span>
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Condensing daily nutrition into 4 or 6 hours can make consuming adequate dietary protein, fiber, and micronutrients difficult without gastrointestinal fullness. A 10-hour window allows unhurried digestion.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-2">
              <h3 className="font-headline text-base font-bold text-on-surface flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Minimal Social &amp; Family Friction</span>
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                14:10 fits seamlessly into typical family breakfasts, office lunch hours, and household dinners without requiring awkward explanations or social isolation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-2">
              <h3 className="font-headline text-base font-bold text-on-surface flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" />
                <span>Athletic &amp; Recovery Demands</span>
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Active individuals with high training volumes require sustained glycogen replenishment and protein distribution across the day. 14:10 supports sports nutrition needs effortlessly.
              </p>
            </div>
          </div>
          <p className="text-on-surface-variant text-sm">
            For a comparative guide on evaluating your personal schedule constraints, see{" "}
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
            What Can You Drink During the 14-Hour Fast?
          </h2>
          <p className="text-on-surface-variant">
            During your 14-hour fasting pause, hydration remains key. Because 14 hours is an approachable window, simple hydration choices are easy to maintain:
          </p>
          <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-3">
            <h3 className="font-headline text-base font-bold text-on-surface flex items-center gap-2">
              <Coffee className="w-4 h-4 text-secondary" />
              <span>Hydration Basics for 14:10</span>
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-sm text-on-surface-variant">
              <li>
                <strong>Plain Water:</strong> Drink a glass upon waking to replenish fluids lost through overnight respiration.
              </li>
              <li>
                <strong>Black Coffee:</strong> If you enjoy morning coffee before your eating window opens, drink it plain without milk, cream, or sugar.
              </li>
              <li>
                <strong>Unsweetened Herbal Tea:</strong> Peppermint, chamomile, or ginger tea provide flavor and soothe the stomach in the evening after dinner.
              </li>
            </ul>
            <p className="text-xs text-on-surface-variant pt-2">
              Avoid fruit juices, sodas, energy drinks, milk, and creamers during fasting hours. Review detailed beverage guidance in our reference{" "}
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
            14:10 Compared With 12:12 and 16:8 Schedules
          </h2>
          <p className="text-on-surface-variant">
            To see where 14:10 sits within the beginner-to-intermediate spectrum of time-restricted feeding, compare it directly to adjacent schedules:
          </p>

          <div className="overflow-x-auto rounded-xl border border-surface-container bg-surface-container-lowest shadow-sm my-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-surface-container font-headline text-xs font-bold uppercase tracking-wider text-on-surface">
                  <th className="py-3 px-4">Fasting Protocol</th>
                  <th className="py-3 px-4 text-right">Fasting</th>
                  <th className="py-3 px-4 text-right">Eating</th>
                  <th className="py-3 px-4">Meal Flexibility</th>
                  <th className="py-3 px-4">Primary Advantage</th>
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
                  <td className="py-3 px-4">Extremely High</td>
                  <td className="py-3 px-4">Restores natural overnight digestive rest with zero skipped meals</td>
                </tr>
                <tr className="bg-primary/5 hover:bg-primary/10 transition-colors">
                  <td className="py-3 px-4 font-bold text-primary">
                    <Link href="/fasting-methods/14-10" className="hover:underline">
                      14:10 Gentle Reset (Current)
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-primary">14h</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-primary">10h</td>
                  <td className="py-3 px-4 font-medium text-primary">High</td>
                  <td className="py-3 px-4 font-medium text-primary">Curbs evening snacking while offering flexibility for 2 to 3 daytime meals</td>
                </tr>
                <tr className="hover:bg-surface-container-low/40 transition-colors">
                  <td className="py-3 px-4 font-semibold text-on-surface">
                    <Link href="/guides/16-8-intermittent-fasting-guide" className="text-primary hover:underline">
                      16:8 Protocol
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-right font-mono">16h</td>
                  <td className="py-3 px-4 text-right font-mono">8h</td>
                  <td className="py-3 px-4">Moderate</td>
                  <td className="py-3 px-4">Deeper metabolic pause; usually involves skipping breakfast or dinner</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-on-surface-variant text-sm">
            Neither schedule is universally "better." 14:10 provides a balanced baseline that many practitioners sustain year-round without fatigue or behavioral burnout.
          </p>
        </section>

        {/* Section 7: Scientific Evidence */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Does Research Say About 14:10 Fasting?
          </h2>
          <p className="text-on-surface-variant">
            Much of the foundational human research on time-restricted eating has focused specifically on 10-hour eating windows (14-hour fasts). Notable findings from clinical investigations include:
          </p>
          <div className="space-y-3 my-4">
            <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container">
              <span className="font-bold text-on-surface block text-sm mb-1">
                Salk Institute &amp; UC San Diego Clinical Trials
              </span>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                In landmark clinical studies led by researchers at the Salk Institute and University of California San Diego, adults with metabolic syndrome who consolidated their daily food intake into a consistent 10-hour window for 12 weeks experienced modest reductions in body weight, percentage body fat, blood pressure, and atherogenic lipids, alongside improved sleep regularity.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container">
              <span className="font-bold text-on-surface block text-sm mb-1">
                High Adherence and Behavioral Sustainability
              </span>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                A common finding in Cleveland Clinic and university clinical trials is that adherence rates for 10-hour eating windows exceed 85%, significantly higher than more restrictive protocols. Because 14:10 produces minimal lifestyle disruption, participants maintain the routine consistently over months.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container">
              <span className="font-bold text-on-surface block text-sm mb-1">
                Balanced Expectations
              </span>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Researchers emphasize that 14:10 does not produce rapid or dramatic changes overnight. Its primary value lies in establishing circadian stability, preventing late-night metabolic dysregulation, and fostering steady, gradual improvements in energy and digestion.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: Safety & Clinical Precautions */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Who Should Exercise Caution With 14:10?
          </h2>
          <p className="text-on-surface-variant">
            Although 14:10 is among the gentlest forms of time-restricted eating, individual health factors always take precedence:
          </p>

          <div className="p-6 rounded-2xl bg-surface-container-lowest border border-error/30 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-error font-headline font-bold text-base">
              <ShieldAlert className="w-5 h-5 flex-shrink-0" />
              <span>Medical Safety Guidelines</span>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-sm text-on-surface-variant">
              <li>
                <strong>Individuals with Diabetes:</strong> Individuals taking insulin or insulin secretagogues should not undertake fasting schedules without direct medical consultation and supervision, as altered meal timing can affect blood glucose levels and hypoglycemia risk.
              </li>
              <li>
                <strong>Pregnancy and Lactation:</strong> Expectant and nursing mothers have continuous metabolic and nutritional demands that should not be restricted by fasting clocks.
              </li>
              <li>
                <strong>Eating Disorder History:</strong> Any form of scheduled time restriction can risk triggering obsessive food tracking in susceptible individuals.
              </li>
              <li>
                <strong>Underweight Individuals:</strong> Those struggling to maintain body weight should focus on nutrient-dense, frequent meals rather than fasting intervals.
              </li>
            </ul>
            <p className="text-xs text-on-surface-variant pt-2 border-t border-surface-container">
              Always discuss any new dietary regimen with your doctor or healthcare professional.
            </p>
          </div>
        </section>

        {/* Section 9: Visible FAQs */}
        <section className="space-y-6 pt-6 border-t border-surface-container">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Frequently Asked Questions About 14:10 Fasting
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
            Plan Your 14:10 Schedule With FastTrack
          </h2>
          <p className="text-on-surface-variant text-base leading-relaxed">
            FastTrack helps you remove the guesswork from your daily fasting schedule. Explore our dedicated resources to set up your 14:10 routine:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <Link
              href="/fasting-methods/14-10"
              className="p-4 rounded-xl bg-surface-container-lowest border border-surface-container hover:border-surface-container-high transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="font-headline text-base font-bold text-on-surface group-hover:text-primary transition-colors block">
                  14:10 Protocol Reference Page
                </span>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Detailed protocol specifications, schedule templates, and physiological markers for 14:10.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-3">
                <span>View 14:10 Details</span>
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
                  Calculate your exact eating start and finish times to keep your 14-hour fasting pause on track.
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
