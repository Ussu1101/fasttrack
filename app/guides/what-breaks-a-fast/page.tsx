import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/config/site";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  Calculator,
  Compass,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  Sparkles,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "What Breaks a Fast? Food, Drinks & Common Questions",
  description:
    "Find out what breaks a fast, including coffee, tea, milk, sugar, gum, sweeteners, electrolytes, and common supplements. Learn the practical difference between a strict fast and intermittent fasting.",
  keywords: [
    "what breaks a fast",
    "does coffee break a fast",
    "does tea break a fast",
    "does milk break a fast",
    "does sugar break a fast",
    "does gum break a fast",
    "do sweeteners break a fast",
    "electrolytes while fasting",
    "what can you have while fasting",
    "fasting drinks",
  ],
  alternates: {
    canonical: "/guides/what-breaks-a-fast",
  },
  openGraph: {
    title: "What Breaks a Fast? Food, Drinks & Common Questions | FastTrack",
    description:
      "Find out what breaks a fast, including coffee, tea, milk, sugar, gum, sweeteners, electrolytes, and common supplements. Learn the practical difference between a strict fast and intermittent fasting.",
    url: `${getSiteUrl()}/guides/what-breaks-a-fast`,
    type: "article",
    publishedTime: "2026-10-01",
    modifiedTime: "2026-10-01",
    authors: ["Muhammad Usama"],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Breaks a Fast? Food, Drinks & Common Questions | FastTrack",
    description:
      "Find out what breaks a fast, including coffee, tea, milk, sugar, gum, sweeteners, electrolytes, and common supplements. Learn the practical difference between a strict fast and intermittent fasting.",
  },
};

export default function WhatBreaksAFastPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Breaks a Fast? Food, Drinks & Common Questions",
    description:
      "Find out what breaks a fast, including coffee, tea, milk, sugar, gum, sweeteners, electrolytes, and common supplements. Learn the practical difference between a strict fast and intermittent fasting.",
    author: {
      "@type": "Person",
      name: "Muhammad Usama",
    },
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
    publisher: {
      "@type": "Organization",
      name: "FastTrack",
      url: getSiteUrl(),
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${getSiteUrl()}/guides/what-breaks-a-fast`,
    },
  };

  return (
    <article className="max-w-4xl mx-auto px-4 md:px-8 py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
            Nutrition
          </span>
          <span className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>9 min read</span>
          </span>
        </div>

        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight">
          What Breaks a Fast? A Practical Guide to Food, Drinks, and Common Add-Ins
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

      {/* Lead Paragraphs */}
      <div className="space-y-4 font-body-lg text-base sm:text-lg text-on-surface leading-relaxed mb-10 p-5 sm:p-6 bg-surface-container-low/60 rounded-2xl border border-surface-container">
        <p>
          &ldquo;What breaks a fast?&rdquo; sounds like a simple yes-or-no question, but the answer depends on what you mean by fasting.
        </p>
        <p>
          For a strict zero-calorie fast, consuming calories means you are no longer following a zero-calorie fast. For everyday intermittent fasting (such as an{" "}
          <Link
            href="/fasting-methods/16-8"
            className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
          >
            16:8 schedule
          </Link>
          ), people commonly use water and other low- or zero-calorie drinks during the fasting window.
        </p>
        <p>
          That distinction matters because the internet often treats every fasting question as if there is one universal rule.
        </p>
        <p>
          There isn&apos;t.
        </p>
        <p>
          This guide uses a practical definition for intermittent fasting: <strong>if something provides meaningful calories or is being consumed as food, it belongs in the eating window rather than the fasting window.</strong> For beverages with very little energy, the answer can be more nuanced. For a broad introduction, see our{" "}
          <Link
            href="/guides/intermittent-fasting-for-beginners"
            className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
          >
            intermittent fasting guide for beginners
          </Link>{" "}
          and our guide on{" "}
          <Link
            href="/guides/how-to-choose-a-fasting-window"
            className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
          >
            how to choose a fasting window
          </Link>
          .
        </p>
      </div>

      {/* Main Article Body */}
      <div className="space-y-12 text-on-surface font-body-md text-base sm:text-lg leading-relaxed">
        {/* Section 1: The Simple Rule */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            The Simple Rule
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            If your goal is to keep a <strong>strict zero-calorie fasting window</strong>, the simplest rule is:
          </p>
          <blockquote className="p-4 rounded-xl bg-surface-container border-l-4 border-primary font-headline text-base sm:text-lg font-bold text-primary">
            No food and no calorie-containing drinks during the fasting window.
          </blockquote>
          <p className="text-on-surface-variant leading-relaxed">
            Water is the clearest choice. Plain black coffee and unsweetened tea are commonly used during intermittent fasting because they contain very little energy, but they are not the same thing as water in every research or fasting context.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Once you add sugar, honey, milk, cream, juice, or another calorie-containing ingredient, you have added energy to the fasting period.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            The{" "}
            <a
              href="https://www.nia.nih.gov/news/research-intermittent-fasting-shows-health-benefits"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>National Institute on Aging</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            describes time-restricted eating as eating within a limited number of hours each day, with nothing consumed during the other hours.
          </p>
        </section>

        {/* Section 2: What Usually Does and Does Not Break a Fast? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Usually Does and Does Not Break a Fast?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Here&apos;s a practical starting point:
          </p>

          {/* Accessible HTML Table */}
          <div className="my-6 overflow-x-auto rounded-xl border border-surface-container shadow-sm">
            <table className="w-full text-left text-sm border-collapse bg-surface-container-lowest">
              <caption className="sr-only">
                Practical summary of common foods, drinks, and ingredients during fasting windows
              </caption>
              <thead className="bg-surface-container-low text-on-surface border-b border-surface-container font-headline">
                <tr>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold text-left">
                    Item
                  </th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold text-left">
                    Practical fasting-window answer
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container font-body-sm text-on-surface-variant">
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Plain water</th>
                  <td className="p-3.5 sm:p-4">Does not add calories</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Sparkling water, unsweetened</th>
                  <td className="p-3.5 sm:p-4">Does not add calories</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Black coffee</th>
                  <td className="p-3.5 sm:p-4">Very little energy; commonly used during IF</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Plain unsweetened tea</th>
                  <td className="p-3.5 sm:p-4">Very little energy; commonly used during IF</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Coffee with sugar</th>
                  <td className="p-3.5 sm:p-4 text-error font-medium">Breaks a zero-calorie fast</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Coffee with milk or cream</th>
                  <td className="p-3.5 sm:p-4 text-error font-medium">Adds calories; breaks a strict zero-calorie fast</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Sweetened tea</th>
                  <td className="p-3.5 sm:p-4 text-error font-medium">Breaks a zero-calorie fast</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Juice</th>
                  <td className="p-3.5 sm:p-4 text-error font-medium">Breaks a zero-calorie fast</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Regular soft drinks</th>
                  <td className="p-3.5 sm:p-4 text-error font-medium">Breaks a zero-calorie fast</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Protein shakes</th>
                  <td className="p-3.5 sm:p-4 text-error font-medium">Breaks a fast</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Bone broth</th>
                  <td className="p-3.5 sm:p-4 text-error font-medium">Contains energy/protein; not a zero-calorie fast</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Calorie-containing electrolytes</th>
                  <td className="p-3.5 sm:p-4 text-error font-medium">Break a zero-calorie fast</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Zero-calorie electrolytes</th>
                  <td className="p-3.5 sm:p-4">No calories, but check the label and purpose of the fast</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Sugar-free gum</th>
                  <td className="p-3.5 sm:p-4">Depends on formulation and your definition of fasting</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Non-nutritive sweeteners</th>
                  <td className="p-3.5 sm:p-4">Little/no energy in many products, but effects beyond calories are not identical</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-on-surface-variant leading-relaxed">
            The table is a practical guide, not a medical or laboratory definition of every type of fasting. For full beverage details, see our comprehensive guide on{" "}
            <Link
              href="/guides/what-can-you-drink-while-fasting"
              className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              what you can drink while fasting
            </Link>
            .
          </p>
        </section>

        {/* Section 3: Does Water Break a Fast? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Does Water Break a Fast?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            <strong>Plain water does not provide calories</strong>, so it is the simplest beverage to use during a fasting window.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Still or sparkling water can both work as long as the product does not contain sugar or another calorie-containing ingredient.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Flavored waters need a label check. Some are effectively calorie-free, while others contain sugar or other ingredients that add energy.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            For ordinary intermittent fasting, hydration is important. If you&apos;re using a fasting schedule, water is generally the easiest choice when you want to avoid questions about whether a drink contains calories.
          </p>
        </section>

        {/* Section 4: Does Black Coffee Break a Fast? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Does Black Coffee Break a Fast?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Plain black coffee is one of the most common questions.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Plain black coffee contains very little energy, and it is commonly included in intermittent-fasting routines.{" "}
            <a
              href="https://www.hopkinsmedicine.org/health/wellness-and-prevention/intermittent-fasting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>Johns Hopkins Medicine</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            describes intermittent fasting as restricting eating to specific time windows and discusses daily schedules such as{" "}
            <Link href="/fasting-methods/16-8" className="text-primary font-semibold hover:underline">
              16:8
            </Link>
            .
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            However, <strong>black coffee is not the same as a strict water-only fast</strong>.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If you are following a strict zero-calorie protocol, water is the clearest option. If you are following a typical time-restricted eating routine, plain black coffee is commonly used during the fasting period.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            The important difference is what you add to it.
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                What about coffee with sugar?
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Sugar adds calories.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                So:
              </p>
              <div className="space-y-1.5 font-medium text-sm sm:text-base">
                <p className="text-primary">
                  <strong>Black coffee</strong> → generally compatible with a typical intermittent-fasting window
                </p>
                <p className="text-error">
                  <strong>Coffee + sugar</strong> → no longer zero-calorie
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                What about coffee with milk or cream?
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Milk and cream add calories and nutrients.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                If you&apos;re trying to maintain a strict zero-calorie fasting window, adding them means you have consumed calories during the fast.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                You can instead keep milk or cream inside your eating window.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Does Tea Break a Fast? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Does Tea Break a Fast?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Plain, unsweetened tea is similar to black coffee in practical intermittent-fasting terms: it contains very little energy and is commonly used during fasting windows.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            That includes many plain teas such as black tea and green tea.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            The main issue is what gets added to the drink.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-on-surface-variant">
            <li><strong>Plain unsweetened tea:</strong> very little energy.</li>
            <li><strong>Tea + sugar/honey:</strong> adds calories.</li>
            <li><strong>Tea + milk:</strong> adds calories.</li>
            <li><strong>Sweetened bottled tea:</strong> check the nutrition label; many products contain sugar.</li>
          </ul>
          <p className="text-on-surface-variant leading-relaxed">
            <a
              href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/intermittent-fasting/faq-20441303"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>Mayo Clinic</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            describes intermittent fasting as periods with very few or no calories.
          </p>
        </section>

        {/* Section 6: Does Milk Break a Fast? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Does Milk Break a Fast?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Yes, <strong>milk contains calories, carbohydrate, protein, and other nutrients</strong>, so it breaks a strict zero-calorie fast.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            This applies whether the milk is added to coffee, tea, or consumed by itself.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            The same practical rule applies to many milk alternatives. Unsweetened plant milks can vary considerably by product, so check the nutrition label rather than assuming that &ldquo;plant-based&rdquo; means calorie-free.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If you want milk in your coffee or tea, the simplest approach is to have that drink during your eating window.
          </p>
        </section>

        {/* Section 7: Does Sugar Break a Fast? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Does Sugar Break a Fast?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Yes.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Sugar provides calories, so adding sugar to coffee, tea, water, or another drink ends a strict zero-calorie fast.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            This includes:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-on-surface-variant">
            <li>table sugar</li>
            <li>brown sugar</li>
            <li>honey</li>
            <li>syrups</li>
            <li>sweetened drink mixes</li>
          </ul>
          <p className="text-on-surface-variant leading-relaxed">
            Calling a sweetener &ldquo;natural&rdquo; does not make it calorie-free.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If your goal is a strict no-calorie fasting window, keep caloric sweeteners inside your eating window.
          </p>
        </section>

        {/* Section 8: Do Artificial Sweeteners Break a Fast? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Do Artificial Sweeteners Break a Fast?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            This question is more complicated than a simple yes or no.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Many non-nutritive sweeteners provide little or no energy in the amounts normally used. That means they do not fit the same category as sugar, honey, or syrup from a calorie perspective.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            However, different sweeteners and products are not identical, and questions about appetite, metabolic responses, and individual effects are more complicated than simply counting calories.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            For a straightforward intermittent-fasting routine, the simplest approach is to avoid relying heavily on sweetened drinks during the fasting window. If you use a zero- or near-zero-calorie product, check the label and ingredients.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Most importantly, don&apos;t turn a small amount of a non-caloric sweetener into a claim that it either &ldquo;destroys all fasting benefits&rdquo; or is guaranteed to have no effect. The evidence does not support that kind of universal statement.
          </p>
        </section>

        {/* Section 9: Does Gum Break a Fast? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Does Gum Break a Fast?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            It depends on the gum and on how strictly you define the fast.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Regular chewing gum often contains sugar and therefore adds calories.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Sugar-free gum generally contains little or no sugar, but it can still contain small amounts of energy from sweeteners or sugar alcohols.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            So there are two practical approaches:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-on-surface-variant">
            <li>
              <strong>Strict zero-calorie fast:</strong> skip gum if you want the simplest possible rule.
            </li>
            <li>
              <strong>Typical intermittent-fasting routine:</strong> a small amount of sugar-free gum may be treated differently because its energy contribution can be very small, but it is not necessary to use gum during the fasting window.
            </li>
          </ul>
          <p className="text-on-surface-variant leading-relaxed">
            If you are unsure, check the nutrition label rather than assuming that &ldquo;sugar-free&rdquo; means literally zero calories.
          </p>
        </section>

        {/* Section 10: Do Electrolytes Break a Fast? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Do Electrolytes Break a Fast?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            It depends on the product.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            An electrolyte drink can contain sodium, potassium, magnesium, and other ingredients. Some products also contain sugar, carbohydrates, or other calorie-containing ingredients.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Therefore:
          </p>
          <div className="space-y-1.5 font-medium text-sm sm:text-base">
            <p className="text-error">
              <strong>Calorie-containing electrolyte drink</strong> → breaks a strict zero-calorie fast.
            </p>
            <p className="text-primary">
              <strong>Zero-calorie electrolyte product</strong> → does not add calories, but the product&apos;s ingredients and your reason for fasting still matter.
            </p>
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            Read the nutrition label and ingredient list.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            There is also an important safety distinction: electrolyte needs are not identical for everyone, and longer or medically supervised fasts can raise questions that a simple intermittent-fasting guide cannot answer.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            For an ordinary daily fasting schedule, plain water is usually the simplest default.
          </p>
        </section>

        {/* Section 11: Do Vitamins and Supplements Break a Fast? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Do Vitamins and Supplements Break a Fast?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            There is no single rule for every supplement because formulations differ.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            A capsule may contain very little energy, while a gummy supplement can contain sugar or other calorie-containing ingredients. Protein powders, collagen products, amino-acid products, and meal-replacement supplements are clearly not equivalent to a calorie-free drink.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If a supplement contains meaningful calories, protein, carbohydrate, or fat, it does not fit a strict zero-calorie fasting window.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Also consider the instructions for the supplement itself. Some products are intended to be taken with food, and changing when you take medication or supplements can have practical consequences.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Don&apos;t change prescribed medication timing just to maintain a fasting window without discussing it with your healthcare professional.
          </p>
        </section>

        {/* Section 12: Does Lemon Water Break a Fast? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Does Lemon Water Break a Fast?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Plain water with a small amount of lemon can be a gray area depending on how strict your definition is.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            A few drops of lemon juice contribute some energy, but a large glass of lemon juice is clearly a calorie-containing drink.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            So the practical distinction is:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-on-surface-variant">
            <li><strong>Plain water:</strong> no calories.</li>
            <li><strong>Water with a small amount of lemon:</strong> contains a small amount of energy.</li>
            <li><strong>Lemonade or sweetened lemon water:</strong> contains substantially more calories if sugar is added.</li>
          </ul>
          <p className="text-on-surface-variant leading-relaxed">
            If your priority is a strict zero-calorie fast, plain water removes the ambiguity.
          </p>
        </section>

        {/* Section 13: Does Bone Broth Break a Fast? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Does Bone Broth Break a Fast?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Yes, for a strict zero-calorie fasting window.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Bone broth is food in liquid form and can contain calories, protein, and other nutrients. It is therefore different from plain water or a calorie-free beverage.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Some fasting approaches use broth during modified fasts, but that is not the same as a zero-calorie fast.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            So don&apos;t use the phrase &ldquo;fasting-friendly&rdquo; as if it were a universal scientific category. Ask what kind of fasting protocol you are actually following.
          </p>
        </section>

        {/* Section 14: What About Protein Powder, BCAAs, or Collagen? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What About Protein Powder, BCAAs, or Collagen?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            These products contain nutrients that are intended to be consumed, not simply used as hydration.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Protein powder provides protein and calories. Collagen products can provide protein. BCAA products provide amino acids.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            They therefore do not belong in a strict zero-calorie fasting window.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If you use these products around exercise, place them within your eating window if maintaining the fasting period is important to you.
          </p>
        </section>

        {/* Section 15: What About Diet Soda? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What About Diet Soda?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Diet soda can be complicated because many products contain little or no calories but use non-nutritive sweeteners.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            From a calorie-only perspective, a zero-calorie drink is different from a sugar-sweetened drink.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            But &ldquo;zero calories&rdquo; does not mean that every physiological question about every sweetener has been settled. Product formulations also vary.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If your goal is a simple, uncomplicated fasting routine, water, plain tea, or black coffee are easier choices.
          </p>
        </section>

        {/* Section 16: What If I Accidentally Eat or Drink Something? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What If I Accidentally Eat or Drink Something?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Don&apos;t assume that one small mistake means you have ruined your entire routine.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If you consume something that contains calories during your fasting window, you can simply treat that point as the end of that particular fast and continue with your normal schedule.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            For example, if you intended to fast until noon but added sugar to your coffee at 10 AM, there is no need to turn the rest of the day into an all-or-nothing exercise.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            The purpose of a recurring fasting schedule is to create a routine you can follow consistently, not to create a test where one small deviation invalidates everything.
          </p>
        </section>

        {/* Section 17: Strict Fast vs Practical Intermittent Fasting */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Strict Fast vs Practical Intermittent Fasting
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              A lot of confusion comes from using the word &ldquo;fast&rdquo; without defining the context.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                Strict zero-calorie fast
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                The rule is straightforward: <strong>No calories.</strong>
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Water is the simplest option. Caloric drinks, food, protein, sugar, milk, cream, and broth do not fit this definition.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                Typical intermittent fasting
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Time-restricted eating focuses on keeping food intake within a defined eating window. During the fasting period, people commonly choose water, plain tea, or black coffee.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                This is a practical routine rather than a laboratory protocol.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                Medical or laboratory fasting
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Medical tests and procedures can have their own instructions. If a healthcare professional tells you to fast before a test, procedure, or medication, <strong>follow those instructions rather than using an internet fasting guide</strong>.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                The rules for a medical fast can be different from the rules for a lifestyle intermittent-fasting schedule.
              </p>
            </div>
          </div>
        </section>

        {/* Section 18: A Simple Way to Decide & Decision Visual */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              A Simple Way to Decide
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              When you are unsure whether something breaks your fast, ask three questions:
            </p>
          </div>

          <ol className="space-y-3 pl-0 sm:pl-2">
            <li className="p-3.5 sm:p-4 rounded-xl bg-surface-container-low border border-surface-container flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                1
              </span>
              <span className="text-on-surface font-medium leading-relaxed">
                <strong>Does it contain calories?</strong>
              </span>
            </li>
            <li className="p-3.5 sm:p-4 rounded-xl bg-surface-container-low border border-surface-container flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                2
              </span>
              <span className="text-on-surface font-medium leading-relaxed">
                <strong>Is it food or a nutrient-containing supplement?</strong>
              </span>
            </li>
            <li className="p-3.5 sm:p-4 rounded-xl bg-surface-container-low border border-surface-container flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                3
              </span>
              <span className="text-on-surface font-medium leading-relaxed">
                <strong>What type of fast am I actually trying to follow?</strong>
              </span>
            </li>
          </ol>

          {/* Original FastTrack SVG/CSS Decision Visual */}
          <div className="my-6 p-4 sm:p-6 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-secondary flex-shrink-0" />
              <span className="font-label-sm text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                FastTrack Fasting Decision Guide
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex flex-col justify-between">
                <div>
                  <span className="font-bold text-primary block text-sm mb-1">
                    1. Calorie-Dense Items
                  </span>
                  <p className="text-on-surface-variant leading-relaxed">
                    Sugar, honey, milk, cream, bone broth, juices, protein shakes.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-surface-container font-semibold text-error">
                  Breaks a Fast → Belongs in Eating Window
                </div>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex flex-col justify-between">
                <div>
                  <span className="font-bold text-primary block text-sm mb-1">
                    2. Low-Energy Drinks
                  </span>
                  <p className="text-on-surface-variant leading-relaxed">
                    Plain black coffee, unsweetened green/black teas, sparkling water.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-surface-container font-semibold text-primary">
                  Compatible with Practical Intermittent Fasting
                </div>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex flex-col justify-between">
                <div>
                  <span className="font-bold text-primary block text-sm mb-1">
                    3. Pure Water
                  </span>
                  <p className="text-on-surface-variant leading-relaxed">
                    Still water, mineral water with zero calories and no additives.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-surface-container font-semibold text-secondary">
                  Preserves All Fasts (Strict, Practical &amp; Clinical)
                </div>
              </div>
            </div>
          </div>

          <p className="text-on-surface-variant leading-relaxed">
            If the answer to the first question is yes, it does not fit a strict zero-calorie fast.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If the product is marketed as &ldquo;fasting-friendly,&rdquo; don&apos;t rely on the marketing label. Check its nutrition facts and ingredients.
          </p>
        </section>

        {/* Section 19: Frequently Asked Questions */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Does coffee break a fast?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Plain black coffee contains very little energy and is commonly used during intermittent fasting. Coffee with sugar, milk, cream, or other calorie-containing additions does not fit a strict zero-calorie fast.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Does tea break a fast?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Plain, unsweetened tea contains very little energy and is commonly used during intermittent fasting. Sugar, honey, milk, and other caloric additions change the answer.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Does milk break a fast?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Yes. Milk contains calories and nutrients, so it breaks a strict zero-calorie fast.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Does sugar break a fast?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Yes. Sugar provides calories and breaks a strict zero-calorie fast.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Does sugar-free gum break a fast?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                It depends on the formulation and how strictly you define the fast. If you want a simple zero-calorie rule, skip gum during the fasting window.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Do electrolytes break a fast?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                It depends on the product. Electrolytes containing sugar or other calories break a strict zero-calorie fast. Zero-calorie products do not add calories, but you should still check the label and consider the reason for your fast.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Can I drink water while fasting?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Yes. Plain water contains no calories and is the simplest drink during a fasting window.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Can I use artificial sweeteners while fasting?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Many non-nutritive sweeteners provide little or no energy, but different products and sweeteners are not identical. If you want the simplest fasting routine, water, plain tea, or black coffee avoid most of this uncertainty.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>What breaks a fast the fastest?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                There is no useful need to rank foods or drinks by how quickly they &ldquo;break&rdquo; a fast. For a strict zero-calorie definition, consuming calories means the zero-calorie fast has ended.
              </p>
            </div>
          </div>
        </section>

        {/* Section 20: Safety Note */}
        <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container">
          <div className="flex items-center gap-2 mb-1">
            <ShieldAlert className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Safety Note
            </h2>
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            This article is general educational information, not individualized medical advice.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Fasting is not appropriate for everyone.{" "}
            <a
              href="https://www.hopkinsmedicine.org/health/wellness-and-prevention/intermittent-fasting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>Johns Hopkins Medicine</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            notes that people with certain conditions, including people using insulin for type 1 diabetes and people with a history of eating disorders, require particular caution.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            <a
              href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/intermittent-fasting/faq-20441303"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>Mayo Clinic</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            also notes that fasting may not be appropriate for everyone and recommends discussing fasting with a healthcare professional in relevant circumstances.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If you are pregnant or breastfeeding, under 18, have a medical condition, take medication affected by food timing, or have a history of an eating disorder, seek individualized professional guidance before changing your eating pattern.
          </p>
        </section>

        {/* Section 21: Key Takeaways */}
        <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Key Takeaways
          </h2>
          <ul className="space-y-2.5 pl-2">
            <li className="flex items-start gap-2.5 text-on-surface-variant text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
              <span>A strict zero-calorie fast means avoiding calorie-containing food and drinks.</span>
            </li>
            <li className="flex items-start gap-2.5 text-on-surface-variant text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
              <span>Plain water is the simplest fasting beverage.</span>
            </li>
            <li className="flex items-start gap-2.5 text-on-surface-variant text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
              <span>Black coffee and unsweetened tea are commonly used during intermittent fasting because they contain very little energy.</span>
            </li>
            <li className="flex items-start gap-2.5 text-on-surface-variant text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
              <span>Sugar, milk, cream, juice, protein drinks, and other calorie-containing additions break a strict zero-calorie fast.</span>
            </li>
            <li className="flex items-start gap-2.5 text-on-surface-variant text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
              <span>Sweeteners, gum, lemon water, and electrolytes require more attention to the specific product and the definition of fasting being used.</span>
            </li>
            <li className="flex items-start gap-2.5 text-on-surface-variant text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
              <span>Medical or laboratory fasting instructions should take priority over general intermittent-fasting advice.</span>
            </li>
            <li className="flex items-start gap-2.5 text-on-surface-variant text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
              <span>If you want to calculate exactly when your fasting and eating windows start and end, use the FastTrack Fasting Calculator.</span>
            </li>
          </ul>

          <div className="pt-6 border-t border-surface-container mt-4">
            <p className="text-on-surface font-semibold text-base sm:text-lg mb-4">
              Ready to check your schedule? Use the{" "}
              <Link href="/#calculator" className="text-primary hover:underline">
                FastTrack Fasting Calculator
              </Link>{" "}
              to calculate your fasting and eating windows.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/#calculator"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-semibold text-sm rounded-lg hover:bg-primary-container transition-all shadow-md"
              >
                <Calculator className="w-4 h-4" />
                <span>Calculate Your Schedule</span>
              </Link>
              <Link
                href="/fasting-methods"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface-container text-on-surface font-semibold text-sm rounded-lg hover:bg-surface-container-high transition-colors"
              >
                <Compass className="w-4 h-4" />
                <span>Browse All Fasting Methods</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Navigation */}
      <div className="mt-12 pt-8 border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/#calculator"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-on-primary font-semibold text-sm rounded-lg hover:bg-primary-container transition-all shadow-md"
        >
          Calculate Your Schedule Now
        </Link>
        <Link
          href="/guides"
          className="text-sm font-semibold text-on-surface-variant hover:text-on-surface transition-colors"
        >
          Browse All Guides →
        </Link>
      </div>
    </article>
  );
}
