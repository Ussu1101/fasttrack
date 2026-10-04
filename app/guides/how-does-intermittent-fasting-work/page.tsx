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
  BatteryCharging,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How Does Intermittent Fasting Work?",
  description:
    "Learn how intermittent fasting works, what fasting and eating windows mean, how the body uses stored fuel, and how common fasting schedules fit into a daily routine.",
  keywords: [
    "how does intermittent fasting work",
    "how intermittent fasting works",
    "intermittent fasting explained",
    "what happens when you fast",
    "fasting and eating windows",
    "metabolic switching",
    "time-restricted eating",
    "intermittent fasting schedule",
    "fasting window",
    "eating window",
  ],
  alternates: {
    canonical: "/guides/how-does-intermittent-fasting-work",
  },
  openGraph: {
    title: "How Does Intermittent Fasting Work? | FastTrack",
    description:
      "Learn how intermittent fasting works, what fasting and eating windows mean, how the body uses stored fuel, and how common fasting schedules fit into a daily routine.",
    url: `${getSiteUrl()}/guides/how-does-intermittent-fasting-work`,
    type: "article",
    publishedTime: "2026-10-01",
    modifiedTime: "2026-10-01",
    authors: ["Muhammad Usama"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Does Intermittent Fasting Work? | FastTrack",
    description:
      "Learn how intermittent fasting works, what fasting and eating windows mean, how the body uses stored fuel, and how common fasting schedules fit into a daily routine.",
  },
};

const FAQS = [
  {
    question: "Does intermittent fasting slow your metabolism?",
    answer:
      "Intermittent fasting should not be described as simply “slowing” or “speeding up” metabolism. The body changes how it uses available and stored energy during periods without food, and the effects vary by person and fasting pattern.",
  },
  {
    question: "What happens after 12 hours of fasting?",
    answer:
      "There is no universal metabolic event that happens exactly at the 12-hour mark. The body continues using energy and gradually changes its relative use of available and stored fuel as fasting continues.",
  },
  {
    question: "Is 16:8 the same as intermittent fasting?",
    answer:
      "Yes. 16:8 is one form of intermittent fasting, specifically a daily time-restricted eating schedule with a 16-hour fasting window and an 8-hour eating window.",
  },
  {
    question: "Can I drink coffee while fasting?",
    answer:
      "Black coffee contains very few calories and is commonly included in practical zero-calorie fasting routines. Coffee with milk, cream, sugar, or other calorie-containing additions is different. See What Breaks a Fast? for the practical distinctions.",
  },
  {
    question: "Is intermittent fasting the same as starvation?",
    answer:
      "No. Intermittent fasting is a planned eating pattern with defined periods for eating and fasting. Starvation is a state of prolonged inadequate energy and nutrient intake.",
  },
  {
    question: "Is a longer fasting window always better?",
    answer:
      "No. A longer fasting window is not automatically better, and some longer fasting practices may be inappropriate or risky. The most practical schedule depends on the person and the context.",
  },
];

export default function HowDoesIntermittentFastingWorkPage() {
  const siteUrl = getSiteUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Does Intermittent Fasting Work? A Simple Explanation",
    description:
      "Learn how intermittent fasting works, what fasting and eating windows mean, how the body uses stored fuel, and how common fasting schedules fit into a daily routine.",
    author: {
      "@type": "Person",
      name: "Muhammad Usama",
    },
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
    publisher: {
      "@type": "Organization",
      name: "FastTrack",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/guides/how-does-intermittent-fasting-work`,
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
        name: "How Does Intermittent Fasting Work?",
        item: `${siteUrl}/guides/how-does-intermittent-fasting-work`,
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
            Physiology
          </span>
          <span className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>8 min read</span>
          </span>
        </div>

        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight">
          How Does Intermittent Fasting Work? A Simple Explanation
        </h1>

        <div className="flex flex-wrap items-center gap-4 mt-4 text-xs sm:text-sm text-on-surface-variant">
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-primary" />
            <span>Muhammad Usama</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-secondary" />
            <span>Published October 1, 2026</span>
          </span>
        </div>
      </header>

      {/* Main Content */}
      <div className="space-y-12 text-on-surface font-body-md text-base sm:text-lg leading-relaxed">
        {/* Section 1: What Is Intermittent Fasting? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Is Intermittent Fasting?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Intermittent fasting is an eating pattern that alternates between periods when you eat and periods when you do not eat. Unlike a diet that mainly focuses on specific foods, intermittent fasting primarily changes <strong>when you eat</strong>.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Common approaches include daily time-restricted eating, such as 16:8, and weekly patterns such as 5:2. The exact schedule can vary, but the basic idea is the same: create a defined eating window and a defined fasting window.
          </p>
        </section>

        {/* Section 2: How Does Intermittent Fasting Work? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            How Does Intermittent Fasting Work?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            At a simple level, intermittent fasting extends the amount of time between meals.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            After you eat, your body has energy available from the food you recently consumed. As the fasting period continues, that readily available energy is used and the body increasingly draws on stored energy.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Researchers often describe this change in fuel use as <strong>metabolic switching</strong>. The{" "}
            <a
              href="https://www.nia.nih.gov/news/calorie-restriction-and-fasting-diets-what-do-we-know"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>National Institute on Aging</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            explains that during fasting, the body uses stored glucose and glycogen and can then turn to energy reserves stored in fat.{" "}
            <a
              href="https://www.hopkinsmedicine.org/health/expert-qa/intermittent-fasting-what-is-it-and-how-does-it-work/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>Johns Hopkins</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            similarly describes a shift from readily available sugar-based fuel toward fat-derived fuel after hours without food.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            The timing and extent of these changes can vary between people and depend on factors such as the fasting duration, previous meal, activity, and individual physiology.
          </p>
        </section>

        {/* Section 3: What Happens During the Fasting Window? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Happens During the Fasting Window?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            The fasting window is the period between the end of one eating window and the beginning of the next.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            For example, with a 16:8 schedule, a person might finish eating at 8 p.m. and begin eating again at noon the next day. The 16-hour period between those times is the fasting window.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            During this period, the body continues to use energy. It does not simply &ldquo;turn off&rdquo; because food is temporarily unavailable.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            For a practical fasting routine, the important distinction is between the <strong>fasting window</strong> and the <strong>eating window</strong>, rather than trying to identify one exact moment when a particular metabolic process begins.
          </p>
        </section>

        {/* Section 4: What Happens During the Eating Window? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Happens During the Eating Window?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            The eating window is the period when meals and calorie-containing foods or drinks are consumed.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Intermittent fasting does not automatically define exactly what someone must eat during this period. A shorter eating window can change when food is consumed, but food quality, portion sizes, and overall dietary pattern still matter.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Research also does not establish that one fasting schedule is universally best for everyone. Different schedules have been studied, and longer-term effects remain an active area of research.
          </p>
        </section>

        {/* Section 5: What Is Metabolic Switching? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Is Metabolic Switching?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            <strong>Metabolic switching</strong> is a term used to describe a shift in the body&rsquo;s energy use as fasting continues.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            <a
              href="https://www.hopkinsmedicine.org/health/expert-qa/intermittent-fasting-what-is-it-and-how-does-it-work/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>Johns Hopkins</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            describes the process as a transition from using readily accessible, sugar-based fuel toward using stored fat for energy. The{" "}
            <a
              href="https://www.nia.nih.gov/news/calorie-restriction-and-fasting-diets-what-do-we-know"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>National Institute on Aging</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            also describes fasting as a period in which the body uses glucose and glycogen before turning increasingly to stored fat and producing ketones.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            It is useful to think of metabolic switching as a <strong>process</strong>, not a precise clock event. There is no universal hour at which every person&rsquo;s body switches in exactly the same way.
          </p>

          {/* Original FastTrack Visual: How Fasting Changes Fuel Use */}
          <div className="my-8 p-5 sm:p-7 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-secondary flex-shrink-0" />
              <span className="font-label-sm text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                FastTrack Visual Guide: How Fasting Changes Fuel Use
              </span>
            </div>

            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Conceptual progression across a typical 24-hour cycle showing the gradual shift from recently consumed energy toward stored reserves as fasting continues:
            </p>

            {/* 24-hour Timeline Bar */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between text-[11px] font-semibold text-on-surface-variant">
                <span>Last Meal (Evening)</span>
                <span>Overnight / Sleeping</span>
                <span>Morning (Fasting Continues)</span>
                <span>Eating Window Opens</span>
              </div>
              <div
                role="img"
                aria-label="Conceptual 24-hour diagram illustrating how the body transitions from recently consumed food energy during the eating window to utilizing stored energy reserves during the fasting window."
                className="w-full h-9 rounded-lg overflow-hidden flex border border-surface-container shadow-inner"
              >
                <div className="w-1/3 bg-secondary/25 border-r border-surface-container flex items-center justify-center text-[11px] font-bold text-secondary">
                  Eating Window
                </div>
                <div className="w-2/3 bg-primary/20 flex items-center justify-center text-[11px] font-bold text-primary">
                  Fasting Window (Metabolic Transition)
                </div>
              </div>
            </div>

            {/* Conceptual Fuel Phases Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <BatteryCharging className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="font-bold text-on-surface text-sm">
                      Phase 1: Recently Consumed Fuel
                    </span>
                  </div>
                  <p className="text-on-surface-variant text-xs leading-relaxed">
                    Following meals, the body readily utilizes circulating nutrients, dietary carbohydrates, and glycogen reserves as its primary fuel source.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-surface-container text-[11px] font-semibold text-secondary">
                  Primary Source: Incoming food &amp; liver/muscle glycogen
                </div>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-low border border-primary/20 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Flame className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-bold text-primary text-sm">
                      Phase 2: Gradual Shift to Stored Fuel
                    </span>
                  </div>
                  <p className="text-on-surface-variant text-xs leading-relaxed">
                    As time without food extends, readily accessible energy decreases and the body gradually increases its reliance on stored energy reserves.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-surface-container text-[11px] font-semibold text-primary">
                  Metabolic Switching: Transition toward stored fat &amp; ketones
                </div>
              </div>
            </div>

            {/* Disclaimer Badge */}
            <div className="p-2.5 rounded-lg bg-surface-container text-[11px] text-on-surface-variant flex items-center justify-center text-center font-medium">
              Conceptual educational visual • Not a medical measurement or clinical diagnostic tool
            </div>

            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed pt-1">
              For a detailed timeline examining the fed state, post-absorptive transition, metabolic shift, and extended fasting backed by clinical physiology, read our guide to{" "}
              <Link href="/fasting-stages" className="text-primary font-semibold hover:underline">
                The 4 Real Stages of Intermittent Fasting
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Section 6: Does Fasting Mean the Body Stops Using Glucose? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Does Fasting Mean the Body Stops Using Glucose?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            No.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            The body continues to regulate and use energy throughout the fasting period. The relative contribution of different fuel sources changes as time without food increases.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            This is why it is more accurate to describe fasting as a changing metabolic state rather than saying that the body suddenly &ldquo;runs out of sugar&rdquo; at a specific hour.
          </p>
        </section>

        {/* Section 7: Does a Longer Fast Always Mean More Benefit? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Does a Longer Fast Always Mean More Benefit?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Not necessarily.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Longer fasting periods are not automatically better, and research has not established one universally optimal fasting duration for everyone. Some longer fasting practices can also create additional risks or be inappropriate for certain people.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            For everyday intermittent fasting, a practical schedule is one that a person can follow consistently while maintaining adequate nutrition and fitting the rest of their routine.
          </p>
        </section>

        {/* Section 8: How Do Common Fasting Schedules Work? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            How Do Common Fasting Schedules Work?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            The numbers in a fasting schedule describe the fasting period and eating period.
          </p>

          {/* Accessible HTML Table */}
          <div className="my-6 overflow-x-auto rounded-xl border border-surface-container shadow-sm">
            <table className="w-full text-left text-sm border-collapse bg-surface-container-lowest">
              <caption className="sr-only">
                Common Intermittent Fasting Schedules and Window Durations
              </caption>
              <thead className="bg-surface-container-low text-on-surface border-b border-surface-container font-headline">
                <tr>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold text-left">
                    Schedule
                  </th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold text-right">
                    Fasting window
                  </th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold text-right">
                    Eating window
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container font-body-sm text-on-surface-variant">
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">
                    <Link href="/fasting-methods/12-12" className="text-primary hover:underline">
                      12:12
                    </Link>
                  </th>
                  <td className="p-3.5 sm:p-4 text-right">12 hours</td>
                  <td className="p-3.5 sm:p-4 text-right font-medium text-primary">12 hours</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">
                    <Link href="/fasting-methods/14-10" className="text-primary hover:underline">
                      14:10
                    </Link>
                  </th>
                  <td className="p-3.5 sm:p-4 text-right">14 hours</td>
                  <td className="p-3.5 sm:p-4 text-right font-medium text-primary">10 hours</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">
                    <Link href="/fasting-methods/16-8" className="text-primary hover:underline">
                      16:8
                    </Link>
                  </th>
                  <td className="p-3.5 sm:p-4 text-right">16 hours</td>
                  <td className="p-3.5 sm:p-4 text-right font-medium text-primary">8 hours</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">
                    <Link href="/fasting-methods/18-6" className="text-primary hover:underline">
                      18:6
                    </Link>
                  </th>
                  <td className="p-3.5 sm:p-4 text-right">18 hours</td>
                  <td className="p-3.5 sm:p-4 text-right font-medium text-primary">6 hours</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">
                    <Link href="/fasting-methods/20-4" className="text-primary hover:underline">
                      20:4
                    </Link>
                  </th>
                  <td className="p-3.5 sm:p-4 text-right">20 hours</td>
                  <td className="p-3.5 sm:p-4 text-right font-medium text-primary">4 hours</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">
                    <Link href="/fasting-methods/omad" className="text-primary hover:underline">
                      OMAD / 23:1
                    </Link>
                  </th>
                  <td className="p-3.5 sm:p-4 text-right">about 23 hours</td>
                  <td className="p-3.5 sm:p-4 text-right font-medium text-primary">about 1 hour</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">
                    <Link href="/fasting-methods/5-2" className="text-primary hover:underline">
                      5:2
                    </Link>
                  </th>
                  <td className="p-3.5 sm:p-4 text-right">2 restricted days per week</td>
                  <td className="p-3.5 sm:p-4 text-right font-medium text-primary">5 regular days per week</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-on-surface-variant leading-relaxed">
            The daily schedules create a recurring fasting and eating window. The 5:2 pattern works differently because its structure is based on days of the week rather than the same fasting duration every day.
          </p>
        </section>

        {/* Section 9: How Does a 16:8 Schedule Work? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            How Does a 16:8 Schedule Work?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            A 16:8 schedule means fasting for 16 hours and eating within an 8-hour window.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            For example:
          </p>
          <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-1 font-body-md">
            <p>
              <strong>Eating window:</strong> 12:00 p.m. &ndash; 8:00 p.m.
            </p>
            <p>
              <strong>Fasting window:</strong> 8:00 p.m. &ndash; 12:00 p.m. the next day
            </p>
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            The schedule does not require a specific breakfast, lunch, or dinner. The eating window simply determines when calorie-containing meals and drinks fit into the day.
          </p>
        </section>

        {/* Section 10: How Does 5:2 Fasting Work? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            How Does 5:2 Fasting Work?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            The 5:2 pattern uses the week rather than a daily fasting clock.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            A person eats normally on five days and follows a restricted-calorie approach on two days. The exact structure can vary, and 5:2 should not be confused with daily time-restricted eating.
          </p>
        </section>

        {/* Section 11: Is Intermittent Fasting Just About Eating Less? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Is Intermittent Fasting Just About Eating Less?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Not exactly.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Intermittent fasting primarily changes <strong>when</strong> a person eats. However, reducing the number of hours available for eating can also reduce overall calorie intake for some people.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            The{" "}
            <a
              href="https://www.nia.nih.gov/news/calorie-restriction-and-fasting-diets-what-do-we-know"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>National Institute on Aging</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            notes that fasting regimens primarily focus on the frequency of eating and may or may not involve calorie restriction during non-fasting periods.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            That distinction matters because intermittent fasting is not a guarantee that someone will consume fewer calories or achieve a particular outcome.
          </p>
        </section>

        {/* Section 12: What Can You Have During a Fast? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Can You Have During a Fast?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            For a practical zero-calorie fasting approach, common choices include water and other zero-calorie beverages such as plain tea or black coffee.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Calorie-containing foods and drinks end a strict zero-calorie fast. Different types of fasting can use different rules, so the intended fasting approach matters.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            For a detailed breakdown of fasting drinks and common questions, see{" "}
            <Link
              href="/guides/what-can-you-drink-while-fasting/"
              className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              What Can You Drink While Fasting?
            </Link>{" "}
            and{" "}
            <Link
              href="/guides/what-breaks-a-fast/"
              className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              What Breaks a Fast?
            </Link>
            .
          </p>
        </section>

        {/* Section 13: How Long Does It Take to Get Used to Intermittent Fasting? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            How Long Does It Take to Get Used to Intermittent Fasting?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Adjustment varies from person to person.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            <a
              href="https://www.hopkinsmedicine.org/health/expert-qa/intermittent-fasting-what-is-it-and-how-does-it-work/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>Johns Hopkins</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            notes that some people may need roughly two to four weeks to become accustomed to an intermittent fasting routine. Hunger or other temporary discomfort can occur during the adjustment period.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            A schedule that is difficult to maintain is not automatically better because its fasting window is longer.
          </p>
        </section>

        {/* Section 14: How Do You Choose an Intermittent Fasting Schedule? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            How Do You Choose an Intermittent Fasting Schedule?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Start with your actual routine rather than choosing a fasting number first.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Consider:
          </p>
          <ol className="space-y-2 pl-6 list-decimal text-on-surface-variant">
            <li>When you normally eat your first meal.</li>
            <li>When you normally finish your last meal.</li>
            <li>Your sleep schedule.</li>
            <li>Work, study, exercise, and social commitments.</li>
            <li>Whether the schedule is practical enough to repeat consistently.</li>
          </ol>
          <p className="text-on-surface-variant leading-relaxed">
            You can then compare common schedules and calculate the exact fasting and eating times.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Use the{" "}
            <Link
              href="/#calculator"
              className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              FastTrack Fasting Calculator
            </Link>{" "}
            to turn a chosen fasting duration into a practical daily schedule.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            For a more detailed decision process, read{" "}
            <Link
              href="/guides/how-to-choose-a-fasting-window/"
              className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              How to Choose a Fasting Window
            </Link>
            .
          </p>
        </section>

        {/* Section 15: Does Intermittent Fasting Work the Same for Everyone? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Does Intermittent Fasting Work the Same for Everyone?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            No.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            People differ in eating patterns, activity levels, sleep schedules, health status, medications, and other factors that can affect how a fasting routine fits into their lives.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Research findings also vary by population, fasting pattern, study length, and outcome. Current evidence does not establish one fasting schedule that is universally optimal.
          </p>
        </section>

        {/* Section 16: What Does the Research Say? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Does the Research Say?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Research on intermittent fasting includes animal studies and{" "}
            <a
              href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/intermittent-fasting/faq-20441303"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>human clinical trials</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>
            . Studies have examined time-restricted eating, alternate-day fasting, and 5:2-style approaches.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Some studies report improvements in measures such as body weight or certain metabolic markers, while other research suggests similar effects can sometimes be achieved through conventional calorie restriction. Long-term effects and the differences between specific fasting schedules are still being studied.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            The most useful takeaway is that intermittent fasting is a <strong>timing-based eating pattern</strong>, not a single biological switch or guaranteed outcome.
          </p>
        </section>

        {/* Section 17: Who Should Be Careful With Intermittent Fasting? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Who Should Be Careful With Intermittent Fasting?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Intermittent fasting is not appropriate for everyone.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            People who are pregnant or breastfeeding, children and teenagers, people with certain medical conditions, people taking medications affected by food intake, and people with a history of eating disorders may need to avoid fasting or discuss it with a healthcare professional first. Johns Hopkins specifically advises several groups not to try intermittent fasting without medical guidance.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If fasting causes concerning symptoms or conflicts with medical or nutritional needs, stop and seek appropriate professional advice.
          </p>
        </section>

        {/* Section 18: Frequently Asked Questions */}
        <section className="space-y-6">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Does intermittent fasting slow your metabolism?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Intermittent fasting should not be described as simply &ldquo;slowing&rdquo; or &ldquo;speeding up&rdquo; metabolism. The body changes how it uses available and stored energy during periods without food, and the effects vary by person and fasting pattern.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>What happens after 12 hours of fasting?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                There is no universal metabolic event that happens exactly at the 12-hour mark. The body continues using energy and gradually changes its relative use of available and stored fuel as fasting continues.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Is 16:8 the same as intermittent fasting?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Yes. 16:8 is one form of intermittent fasting, specifically a daily time-restricted eating schedule with a 16-hour fasting window and an 8-hour eating window.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Can I drink coffee while fasting?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Black coffee contains very few calories and is commonly included in practical zero-calorie fasting routines. Coffee with milk, cream, sugar, or other calorie-containing additions is different. See{" "}
                <Link
                  href="/guides/what-breaks-a-fast/"
                  className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
                >
                  What Breaks a Fast?
                </Link>{" "}
                for the practical distinctions.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Is intermittent fasting the same as starvation?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                No. Intermittent fasting is a planned eating pattern with defined periods for eating and fasting. Starvation is a state of prolonged inadequate energy and nutrient intake.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Is a longer fasting window always better?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                No. A longer fasting window is not automatically better, and some longer fasting practices may be inappropriate or risky. The most practical schedule depends on the person and the context.
              </p>
            </div>
          </div>
        </section>

        {/* Section 19: Key Takeaways */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Key Takeaways
          </h2>
          <ul className="space-y-2.5 pl-6 list-disc text-on-surface-variant">
            <li>Intermittent fasting changes <strong>when you eat</strong> by creating fasting and eating windows.</li>
            <li>During fasting, the body continues using energy and increasingly draws on stored fuel as time without food continues.</li>
            <li><strong>Metabolic switching</strong> describes a change in the relative fuel sources the body uses.</li>
            <li>Common schedules include 12:12, 14:10, 16:8, 18:6, 20:4, OMAD, and 5:2.</li>
            <li>There is no universal fasting duration that is best for everyone.</li>
            <li>A practical fasting schedule should fit your meals, sleep, work, exercise, and social routine.</li>
            <li>Research on long-term effects and the differences between fasting schedules is still developing.</li>
          </ul>
        </section>

        {/* Section 20: Build Your Fasting Schedule */}
        <section className="space-y-4 pt-6 border-t border-surface-container">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Build Your Fasting Schedule
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Now that you understand the basic mechanism, use the <strong>FastTrack Fasting Calculator</strong> to calculate your fasting and eating times.
          </p>
          <div className="pt-2">
            <Link
              href="/#calculator"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-on-primary font-headline font-bold text-base shadow-sm hover:bg-primary/90 transition-all hover:shadow-md"
            >
              <span>Calculate My Fasting Schedule</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
