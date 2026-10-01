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
  title: "What Can You Drink While Fasting? Fasting Drinks Guide",
  description:
    "Learn what you can drink while fasting, including water, sparkling water, black coffee, plain tea, electrolytes, and common flavored drinks. Understand which choices contain calories and when the rules change.",
  keywords: [
    "what can you drink while fasting",
    "what to drink while fasting",
    "fasting drinks",
    "drinks allowed while fasting",
    "can you drink water while fasting",
    "can you drink coffee while fasting",
    "can you drink tea while fasting",
    "electrolytes while fasting",
    "sparkling water while fasting",
    "lemon water while fasting",
    "diet soda while fasting",
    "what drinks break a fast",
  ],
  alternates: {
    canonical: "/guides/what-can-you-drink-while-fasting",
  },
  openGraph: {
    title: "What Can You Drink While Fasting? Fasting Drinks Guide | FastTrack",
    description:
      "Learn what you can drink while fasting, including water, sparkling water, black coffee, plain tea, electrolytes, and common flavored drinks. Understand which choices contain calories and when the rules change.",
    url: `${getSiteUrl()}/guides/what-can-you-drink-while-fasting`,
    type: "article",
    publishedTime: "2026-10-01",
    modifiedTime: "2026-10-01",
    authors: ["Muhammad Usama"],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Can You Drink While Fasting? Fasting Drinks Guide | FastTrack",
    description:
      "Learn what you can drink while fasting, including water, sparkling water, black coffee, plain tea, electrolytes, and common flavored drinks. Understand which choices contain calories and when the rules change.",
  },
};

export default function WhatCanYouDrinkWhileFastingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Can You Drink While Fasting? A Practical Guide to Fasting Beverages",
    description:
      "Learn what you can drink while fasting, including water, sparkling water, black coffee, plain tea, electrolytes, and common flavored drinks. Understand which choices contain calories and when the rules change.",
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
      "@id": `${getSiteUrl()}/guides/what-can-you-drink-while-fasting`,
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
            Hydration
          </span>
          <span className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>9 min read</span>
          </span>
        </div>

        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight">
          What Can You Drink While Fasting? A Practical Guide to Fasting Beverages
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
        <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
          What Can You Drink While Fasting?
        </h2>
        <p>
          For a typical intermittent fasting routine, the simplest choices during the fasting window are <strong>water and other zero-calorie beverages such as plain black coffee and unsweetened tea</strong>.
        </p>
        <p>
          The important detail is that not every fasting routine uses exactly the same rules. A strict zero-calorie fast, a practical intermittent fasting schedule, and a medical or laboratory fast can have different requirements.
        </p>
        <p>
          This guide focuses on the practical question most people have: <strong>what can you drink during an intermittent fasting window without turning it into an eating period?</strong>
        </p>
        <p>
          If you want to calculate the timing of your fasting and eating windows, you can use the{" "}
          <Link
            href="/#calculator"
            className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
          >
            FastTrack fasting calculator
          </Link>
          .
        </p>
      </div>

      {/* Main Article Body */}
      <div className="space-y-12 text-on-surface font-body-md text-base sm:text-lg leading-relaxed">
        {/* Section 1: The Simple Rule for Fasting Drinks */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            The Simple Rule for Fasting Drinks
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            A useful starting point is:
          </p>
          <blockquote className="p-4 rounded-xl bg-surface-container border-l-4 border-primary font-headline text-base sm:text-lg font-bold text-primary">
            During a strict zero-calorie fast, choose drinks that contain no meaningful calories.
          </blockquote>
          <p className="text-on-surface-variant leading-relaxed">
            Water is the clearest example.{" "}
            <a
              href="https://www.hopkinsmedicine.org/health/expert-qa/intermittent-fasting-what-is-it-and-how-does-it-work"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>Johns Hopkins Medicine</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            also lists zero-calorie beverages such as black coffee and tea as options during intermittent fasting.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Once you add sugar, milk, cream, juice, syrup, protein powder, or another calorie-containing ingredient, the drink is no longer zero-calorie.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            That does not automatically mean the drink is &ldquo;bad.&rdquo; It means it belongs in the <strong>eating window</strong> if your goal is to keep the fasting period calorie-free.
          </p>
        </section>

        {/* Section 2: Quick Guide Table */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Quick Guide: What Can You Drink While Fasting?
          </h2>

          {/* Accessible HTML Table */}
          <div className="my-6 overflow-x-auto rounded-xl border border-surface-container shadow-sm">
            <table className="w-full text-left text-sm border-collapse bg-surface-container-lowest">
              <caption className="sr-only">
                Quick Guide: Summary of allowed and non-allowed drinks during fasting windows
              </caption>
              <thead className="bg-surface-container-low text-on-surface border-b border-surface-container font-headline">
                <tr>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold text-left">
                    Drink
                  </th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold text-left">
                    During a strict zero-calorie fast?
                  </th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold text-left">
                    Practical note
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container font-body-sm text-on-surface-variant">
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Plain water</th>
                  <td className="p-3.5 sm:p-4 font-medium text-primary">Yes</td>
                  <td className="p-3.5 sm:p-4">The simplest fasting drink</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Sparkling water, unsweetened</th>
                  <td className="p-3.5 sm:p-4 font-medium text-primary">Usually yes</td>
                  <td className="p-3.5 sm:p-4">Check the label for added sugar or calories</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Black coffee</th>
                  <td className="p-3.5 sm:p-4 font-medium text-primary">Yes</td>
                  <td className="p-3.5 sm:p-4">Keep it plain; added sugar or cream changes the drink</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Plain unsweetened tea</th>
                  <td className="p-3.5 sm:p-4 font-medium text-primary">Yes</td>
                  <td className="p-3.5 sm:p-4">Black, green, and other plain teas can fit a zero-calorie approach</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Water with zero-calorie flavoring</th>
                  <td className="p-3.5 sm:p-4 font-medium text-on-surface">Depends</td>
                  <td className="p-3.5 sm:p-4">Check ingredients and your fasting goal</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Zero-calorie electrolyte drink</th>
                  <td className="p-3.5 sm:p-4 font-medium text-on-surface">Depends</td>
                  <td className="p-3.5 sm:p-4">Check the nutrition label and ingredients</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Electrolyte drink with sugar</th>
                  <td className="p-3.5 sm:p-4 font-medium text-error">No</td>
                  <td className="p-3.5 sm:p-4">Contains calories/carbohydrate</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Milk</th>
                  <td className="p-3.5 sm:p-4 font-medium text-error">No</td>
                  <td className="p-3.5 sm:p-4">Contains calories and nutrients</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Creamer</th>
                  <td className="p-3.5 sm:p-4 font-medium text-error">No</td>
                  <td className="p-3.5 sm:p-4">Usually adds calories</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Sweetened coffee or tea</th>
                  <td className="p-3.5 sm:p-4 font-medium text-error">No</td>
                  <td className="p-3.5 sm:p-4">Added sugar adds calories</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Juice</th>
                  <td className="p-3.5 sm:p-4 font-medium text-error">No</td>
                  <td className="p-3.5 sm:p-4">Contains calories and naturally occurring sugars</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Regular soda</th>
                  <td className="p-3.5 sm:p-4 font-medium text-error">No</td>
                  <td className="p-3.5 sm:p-4">Contains calories and added sugar</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Diet/zero-sugar soda</th>
                  <td className="p-3.5 sm:p-4 font-medium text-on-surface">Context-dependent</td>
                  <td className="p-3.5 sm:p-4">May contain little or no energy, but ingredients and individual goals differ</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Protein shake</th>
                  <td className="p-3.5 sm:p-4 font-medium text-error">No</td>
                  <td className="p-3.5 sm:p-4">Provides calories and protein</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Bone broth</th>
                  <td className="p-3.5 sm:p-4 font-medium text-error">No</td>
                  <td className="p-3.5 sm:p-4">Contains calories and nutrients</td>
                </tr>
                <tr className="hover:bg-surface-container/50 transition-colors">
                  <th scope="row" className="p-3.5 sm:p-4 font-semibold text-on-surface">Alcohol</th>
                  <td className="p-3.5 sm:p-4 font-medium text-error">No</td>
                  <td className="p-3.5 sm:p-4">Provides calories and is not an appropriate fasting beverage</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-on-surface-variant leading-relaxed">
            The table is a practical guide, not a universal medical rule. If a healthcare professional has given you specific fasting instructions, follow those instructions instead.
          </p>
        </section>

        {/* Section 3: Can You Drink Water While Fasting? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Can You Drink Water While Fasting?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            <strong>Yes. Water is the simplest choice during a fasting window.</strong>
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Plain water contains no calories and can help you maintain normal hydration. The{" "}
            <a
              href="https://www.nia.nih.gov/health/healthy-eating-nutrition-and-diet/healthy-eating-you-age-know-your-food-groups"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>National Institute on Aging</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            identifies water as a calorie-free beverage and recommends water as a primary beverage choice.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            You can drink still water or, if you prefer it, unsweetened sparkling water.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            There is no need to make plain water complicated. You do not need a special &ldquo;fasting water&rdquo; product for a normal intermittent fasting routine.
          </p>

          <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2 mt-4">
            <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
              What About Sparkling Water?
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              Plain sparkling water can fit a zero-calorie fasting approach when it contains no added sugar or other calorie-containing ingredients.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Check the nutrition label if you are unsure. Flavored sparkling beverages vary, so do not assume every flavored product has the same ingredients.
            </p>
          </div>
        </section>

        {/* Section 4: Can You Drink Black Coffee While Fasting? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Can You Drink Black Coffee While Fasting?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            <strong>Plain black coffee can fit a zero-calorie intermittent fasting routine.</strong>
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            <a
              href="https://www.hopkinsmedicine.org/health/expert-qa/intermittent-fasting-what-is-it-and-how-does-it-work"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>Johns Hopkins Medicine</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            specifically lists black coffee among zero-calorie beverages that can be consumed while fasting.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            The important word is <strong>black</strong>.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Adding sugar, milk, cream, syrup, flavored creamer, or another calorie-containing ingredient changes the drink.
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                What About Coffee With Milk or Cream?
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Coffee with milk or cream is no longer a zero-calorie drink.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                A small amount of milk or cream may seem insignificant, but the practical rule is straightforward: if your goal is a strict zero-calorie fast, keep the coffee plain.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                If you prefer milk in your coffee, you can place that drink in your eating window instead.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                What About Artificial Sweeteners in Coffee?
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                This is more complicated than a simple yes-or-no rule.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Some sweeteners contribute little or no energy, but products differ and people&apos;s fasting goals differ. If your goal is a strict, simple zero-calorie routine, the easiest approach is to drink coffee without sweeteners.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                For a broader discussion of sweeteners and fasting, see FastTrack&apos;s guide to{" "}
                <Link
                  href="/guides/what-breaks-a-fast"
                  className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
                >
                  what breaks a fast
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Can You Drink Tea While Fasting? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Can You Drink Tea While Fasting?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            <strong>Plain, unsweetened tea can fit a zero-calorie fasting approach.</strong>
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            <a
              href="https://www.hopkinsmedicine.org/health/expert-qa/intermittent-fasting-what-is-it-and-how-does-it-work"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>Johns Hopkins Medicine</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            lists tea alongside black coffee as a zero-calorie beverage option during intermittent fasting.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            That can include plain black tea and green tea, provided you are not adding sugar, milk, honey, syrup, or another calorie-containing ingredient.
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                What About Herbal Tea?
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Plain herbal tea can be a practical option when it contains no added sugar or other calorie-containing ingredients.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                As with any packaged beverage, check the label if you are unsure about what is actually in the product.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                What About Tea With Lemon?
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                A squeeze of lemon adds a small amount of calories and carbohydrate.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                If you want the simplest strict zero-calorie approach, use plain tea and skip the lemon.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                If your personal approach is less strict, the significance of a small amount may depend on the purpose of your fasting routine. The key is to understand that lemon is an ingredient, not a calorie-free exception.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Can You Drink Electrolytes While Fasting? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Can You Drink Electrolytes While Fasting?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            <strong>It depends on the product.</strong>
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Electrolyte drinks are not all the same. Some contain sugar and calories; others are formulated with little or no energy.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If you are trying to maintain a strict zero-calorie fast, check the nutrition label and ingredient list before using an electrolyte product.
          </p>
          <p className="text-on-surface font-medium leading-relaxed">
            Look especially for:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-on-surface-variant">
            <li>Added sugar</li>
            <li>Carbohydrates</li>
            <li>Calories</li>
            <li>Dextrose or other sugar ingredients</li>
            <li>Flavored mixes that include calorie-containing ingredients</li>
          </ul>
          <p className="text-on-surface-variant leading-relaxed">
            A zero-calorie product may fit a practical zero-calorie fasting approach, but ingredient lists and formulations vary.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            For medical or laboratory fasting, do not assume an electrolyte product is allowed. Follow the instructions you were given.
          </p>
        </section>

        {/* Section 7: Can You Drink Lemon Water While Fasting? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Can You Drink Lemon Water While Fasting?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            <strong>It depends on how strict your fast is.</strong>
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Plain water is calorie-free. Lemon adds a small amount of food energy, so lemon water is not identical to plain water.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If your goal is a strict zero-calorie fast, plain water is the uncomplicated choice.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If you are following a more flexible eating pattern, a small amount of lemon may be something you personally choose to use. But it should not be described as literally calorie-free.
          </p>
        </section>

        {/* Section 8: Can You Drink Diet Soda While Fasting? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Can You Drink Diet Soda While Fasting?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            <strong>Diet or zero-sugar soda is a context-dependent choice.</strong>
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Some diet sodas contain little or no energy, but they can contain sweeteners and other ingredients. Whether they fit your personal fasting rules depends on what you are trying to achieve and how strictly you define the fasting window.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If your goal is simplicity, water, plain tea, and black coffee are easier choices because their ingredients are straightforward.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If you are trying to follow a medical or laboratory fast, follow the instructions from your healthcare provider or testing facility rather than applying an intermittent-fasting rule.
          </p>
        </section>

        {/* Section 9: What Drinks Break a Fast? */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              What Drinks Break a Fast?
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              A drink generally moves you out of a strict zero-calorie fasting state when it provides calories or nutrients.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Common examples include:
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-1">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight">
                Milk and Cream
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Milk and cream contain calories and nutrients, so they do not fit a strict zero-calorie fast.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-1">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight">
                Sugary Coffee or Tea
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Sugar adds calories. A sweetened coffee or tea therefore does not follow a strict zero-calorie approach.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-1">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight">
                Juice
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Fruit juice contains calories and naturally occurring sugars. It belongs in the eating window rather than a strict zero-calorie fasting window.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-1">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight">
                Regular Soda
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Regular soft drinks typically contain added sugar and calories, so they do not fit a strict zero-calorie fast.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-1">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight">
                Protein Shakes and Smoothies
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Protein shakes and smoothies provide energy and nutrients. They are food in liquid form, not fasting beverages.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-1">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight">
                Bone Broth
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Bone broth can contain calories, protein, and other nutrients. It therefore should not be treated as a zero-calorie fasting drink.
              </p>
            </div>
          </div>

          <p className="text-on-surface-variant leading-relaxed pt-2">
            For a broader item-by-item breakdown, read{" "}
            <Link
              href="/guides/what-breaks-a-fast"
              className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              What Breaks a Fast?
            </Link>
            .
          </p>
        </section>

        {/* Section 10: What About Zero-Calorie Flavored Water? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What About Zero-Calorie Flavored Water?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Check the label.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            &ldquo;Zero sugar&rdquo; and &ldquo;zero calories&rdquo; are useful starting points, but products can differ in ingredients, serving sizes, and labeling.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If you want a simple fasting routine with minimal uncertainty, choose plain water, unsweetened sparkling water, plain tea, or black coffee.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If a flavored drink is important to your routine, read the nutrition label and ingredient list rather than relying only on the front of the package.
          </p>
        </section>

        {/* Section 11: Does Caffeine Break a Fast? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Does Caffeine Break a Fast?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            <strong>Caffeine itself is not the same thing as calories.</strong>
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Black coffee and plain tea can fit a zero-calorie intermittent fasting approach, even though they contain caffeine.{" "}
            <a
              href="https://www.hopkinsmedicine.org/health/expert-qa/intermittent-fasting-what-is-it-and-how-does-it-work"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>Johns Hopkins Medicine</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            lists black coffee and tea among zero-calorie beverages that can be consumed during intermittent fasting.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            However, caffeine can affect people differently. If coffee or tea causes symptoms such as discomfort, anxiety, headaches, or sleep problems, reducing it or choosing a non-caffeinated option may be more practical.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            <a
              href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/caffeinated-drinks/faq-20057965?p=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>Mayo Clinic</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            notes that caffeinated drinks can contribute to daily fluid needs, although water remains the best basic hydration choice.
          </p>
        </section>

        {/* Section 12: What About Alcohol While Fasting? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What About Alcohol While Fasting?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Alcohol is not a fasting beverage.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            It provides calories and does not fit a strict zero-calorie fasting window. Alcohol can also affect judgment around food and hydration, so it is not a useful substitute for water or other ordinary fasting drinks.
          </p>
        </section>

        {/* Section 13: Strict Fasting vs. Practical Intermittent Fasting */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Strict Fasting vs. Practical Intermittent Fasting
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              One reason fasting-drink advice online can seem contradictory is that people use the word &ldquo;fasting&rdquo; for different purposes.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                Strict Zero-Calorie Fast
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                The rule is simple: consume no calories during the fasting period.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Water is the clearest option. Plain black coffee and unsweetened tea can also fit this approach because they are essentially zero-calorie beverages.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                Practical Intermittent Fasting
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Many people use intermittent fasting primarily to establish a consistent eating schedule. In this context, zero-calorie drinks such as water, black coffee, and plain tea are commonly used during fasting hours.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                The important thing is consistency. If you regularly add calorie-containing drinks during the fasting window, your actual eating window is different from the schedule you calculated.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                Medical or Laboratory Fasting
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                This is different.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                If you have been told to fast before a blood test, procedure, surgery, or other medical appointment, <strong>follow the specific instructions from your healthcare professional or testing facility</strong>.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Do not substitute general intermittent-fasting advice for medical fasting instructions. For example,{" "}
                <a
                  href="https://www.hopkinsmedicine.org/executive-health/about-your-visit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
                >
                  <span>Johns Hopkins&apos; pre-examination instructions</span>
                  <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
                </a>{" "}
                can require no food or drink other than water before certain blood work.
              </p>
            </div>
          </div>
        </section>

        {/* Section 14: A Simple Fasting-Drink Checklist & Visual Decision Guide */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              A Simple Fasting-Drink Checklist
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              Before drinking something during your fasting window, ask:
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
                <strong>Does it contain sugar or another calorie-containing ingredient?</strong>
              </span>
            </li>
            <li className="p-3.5 sm:p-4 rounded-xl bg-surface-container-low border border-surface-container flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                3
              </span>
              <span className="text-on-surface font-medium leading-relaxed">
                <strong>Am I following a strict zero-calorie fast or a more flexible routine?</strong>
              </span>
            </li>
            <li className="p-3.5 sm:p-4 rounded-xl bg-surface-container-low border border-surface-container flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                4
              </span>
              <span className="text-on-surface font-medium leading-relaxed">
                <strong>Am I fasting for a medical test or procedure?</strong>
              </span>
            </li>
            <li className="p-3.5 sm:p-4 rounded-xl bg-surface-container-low border border-surface-container flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                5
              </span>
              <span className="text-on-surface font-medium leading-relaxed">
                <strong>Does the product label clearly show what is in it?</strong>
              </span>
            </li>
          </ol>

          {/* Original FastTrack SVG/CSS Fasting Drink Decision Guide */}
          <div className="my-6 p-4 sm:p-6 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-secondary flex-shrink-0" />
              <span className="font-label-sm text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                Fasting Drink Decision Guide
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
              {/* Level 1 */}
              <div className="p-4 rounded-xl bg-surface-container-low border border-primary/20 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-primary text-sm">Level 1: Zero-Calorie Basics</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary text-on-primary font-semibold">
                      Allowed
                    </span>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed">
                    Plain water, unsweetened sparkling water, black coffee, and plain unsweetened tea.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-surface-container font-semibold text-secondary">
                  ✓ Compatible with All Zero-Calorie IF
                </div>
              </div>

              {/* Level 2 */}
              <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-on-surface text-sm">Level 2: Check Label / Context</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-tertiary-fixed/60 text-on-tertiary-container font-semibold">
                      Verify
                    </span>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed">
                    Electrolytes, flavored zero-calorie drinks, diet sodas, and water with lemon.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-surface-container font-semibold text-tertiary-container">
                  ⚠ Check Ingredients &amp; Personal Goal
                </div>
              </div>

              {/* Level 3 */}
              <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-on-surface text-sm">Level 3: Eating-Window Drinks</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-error/10 text-error font-semibold">
                      Breaks Fast
                    </span>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed">
                    Milk, cream, sugar, fruit juice, regular soda, protein shakes, smoothies, bone broth, and alcohol.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-surface-container font-semibold text-error">
                  ✕ Belongs in Eating Window
                </div>
              </div>
            </div>
          </div>

          <p className="text-on-surface-variant leading-relaxed">
            If you want the simplest possible rule:
          </p>
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-on-surface font-medium leading-relaxed">
            <strong>Choose water first. Plain tea and black coffee are common zero-calorie options for intermittent fasting. Put calorie-containing drinks inside your eating window.</strong>
          </div>
        </section>

        {/* Section 15: Frequently Asked Questions */}
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
                <span>Can I drink water all day while intermittent fasting?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Yes. Water is a calorie-free beverage and is the simplest choice during fasting hours.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Can I drink coffee during a fast?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Plain black coffee can fit a zero-calorie intermittent fasting routine. Adding sugar, milk, cream, or syrup changes the drink.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Can I drink tea during a fast?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Plain, unsweetened tea can fit a zero-calorie fasting approach. Avoid calorie-containing additions if you want to keep the fast calorie-free.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Can I drink milk while fasting?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Milk contains calories and nutrients, so it does not fit a strict zero-calorie fast.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Can I drink electrolytes while fasting?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Check the product. Some electrolyte drinks contain calories or sugar, while others contain little or no energy. Your fasting goal and the product&apos;s ingredients both matter.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Can I drink lemon water while fasting?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Plain water is calorie-free. Lemon adds a small amount of calories, so lemon water is not identical to plain water. For a strict zero-calorie fast, plain water is the simpler choice.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Can I drink diet soda while fasting?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Some diet sodas contain little or no energy, but formulations vary. They are therefore a context-dependent choice rather than a universal fasting recommendation.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>What is the safest drink during a fast?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                For an ordinary intermittent fasting routine, plain water is the simplest choice. If you have been given medical fasting instructions, follow those instructions instead.
              </p>
            </div>
          </div>
        </section>

        {/* Section 16: Safety Note */}
        <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container">
          <div className="flex items-center gap-2 mb-1">
            <ShieldAlert className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Safety Note
            </h2>
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            This guide is general educational information about intermittent fasting beverages. It is not a diagnosis or personalized medical recommendation.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Intermittent fasting is not appropriate for everyone.{" "}
            <a
              href="https://www.hopkinsmedicine.org/health/expert-qa/intermittent-fasting-what-is-it-and-how-does-it-work"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>Johns Hopkins Medicine</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            advises particular caution for children and teens, pregnancy or breastfeeding, people with type 1 diabetes who use insulin, and people with a history of eating disorders.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If you have a medical condition, take medication affected by food timing, are pregnant or breastfeeding, are under 18, or have a history of an eating disorder, discuss fasting with a qualified healthcare professional before changing your eating pattern.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            For medical or laboratory fasting, always follow the instructions provided by your healthcare team or testing facility.
          </p>
        </section>

        {/* Section 17: Key Takeaways */}
        <section className="space-y-6 p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container">
          <div>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Key Takeaways
            </h2>
            <ul className="space-y-2.5 pl-2 mt-4">
              <li className="flex items-start gap-2.5 text-on-surface-variant text-sm sm:text-base">
                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                <span><strong>Water</strong> is the simplest fasting beverage.</span>
              </li>
              <li className="flex items-start gap-2.5 text-on-surface-variant text-sm sm:text-base">
                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                <span><strong>Plain sparkling water</strong> can fit a zero-calorie approach when it contains no added calories.</span>
              </li>
              <li className="flex items-start gap-2.5 text-on-surface-variant text-sm sm:text-base">
                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                <span><strong>Black coffee</strong> and <strong>plain unsweetened tea</strong> can fit a zero-calorie intermittent fasting routine.</span>
              </li>
              <li className="flex items-start gap-2.5 text-on-surface-variant text-sm sm:text-base">
                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                <span><strong>Milk, cream, sugar, juice, regular soda, protein shakes, and bone broth</strong> contain calories or nutrients and do not fit a strict zero-calorie fast.</span>
              </li>
              <li className="flex items-start gap-2.5 text-on-surface-variant text-sm sm:text-base">
                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                <span><strong>Electrolytes and diet drinks require label checking</strong> because formulations differ.</span>
              </li>
              <li className="flex items-start gap-2.5 text-on-surface-variant text-sm sm:text-base">
                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                <span><strong>Medical fasting is different from intermittent fasting</strong>; follow the instructions provided by your healthcare professional.</span>
              </li>
              <li className="flex items-start gap-2.5 text-on-surface-variant text-sm sm:text-base">
                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                <span>If you want the simplest routine, keep fasting beverages simple and put calorie-containing drinks inside your eating window.</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-surface-container">
            <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight mb-3">
              Continue with FastTrack
            </h3>
            <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-4">
              If you know what you want to drink but need help deciding <strong>when your fasting window starts and ends</strong>, use the{" "}
              <Link href="/#calculator" className="text-primary font-semibold hover:underline">
                FastTrack fasting calculator
              </Link>
              .
            </p>
            <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-4">
              You can also continue with:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base text-primary font-medium mb-6">
              <li>
                <Link href="/guides/intermittent-fasting-for-beginners" className="hover:underline">
                  Intermittent Fasting for Beginners
                </Link>
              </li>
              <li>
                <Link href="/guides/how-to-choose-a-fasting-window" className="hover:underline">
                  How to Choose a Fasting Window
                </Link>
              </li>
              <li>
                <Link href="/guides/what-breaks-a-fast" className="hover:underline">
                  What Breaks a Fast?
                </Link>
              </li>
              <li>
                <Link href="/fasting-methods" className="hover:underline">
                  Fasting Methods
                </Link>
              </li>
            </ul>

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

        {/* Section 18: Sources */}
        <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-surface-container-lowest border border-surface-container">
          <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface tracking-tight">
            Sources
          </h2>
          <ul className="space-y-2 text-sm sm:text-base text-on-surface-variant pl-2">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>
                Johns Hopkins Medicine —{" "}
                <a
                  href="https://www.hopkinsmedicine.org/health/expert-qa/intermittent-fasting-what-is-it-and-how-does-it-work"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Intermittent Fasting: What Is It, And How Does It Work?</span>
                  <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>
                National Institute on Aging —{" "}
                <a
                  href="https://www.nia.nih.gov/health/healthy-eating-nutrition-and-diet/healthy-eating-you-age-know-your-food-groups"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Healthy Eating: Know Your Food Groups</span>
                  <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>
                Mayo Clinic —{" "}
                <a
                  href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/caffeinated-drinks/faq-20057965?p=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Caffeine: Is it dehydrating or not?</span>
                  <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>
                Johns Hopkins Executive Health —{" "}
                <a
                  href="https://www.hopkinsmedicine.org/executive-health/about-your-visit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>About Your Visit / Pre-Examination Fasting</span>
                  <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
                </a>
              </span>
            </li>
          </ul>
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
