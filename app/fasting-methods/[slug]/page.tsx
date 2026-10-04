import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROTOCOLS, PROTOCOL_LIST } from "@/lib/calculator/protocols";
import { ProtocolId } from "@/lib/calculator/types";
import { Calculator } from "@/components/calculator/Calculator";
import { getSiteUrl } from "@/lib/config/site";
import { ArrowLeft, Clock, Activity, CheckCircle, ShieldAlert, BookOpen, ArrowRight } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PROTOCOL_LIST.map((p) => ({
    slug: p.id,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const protocol = PROTOCOLS[params.slug as ProtocolId];
  if (!protocol) {
    return { title: "Protocol Not Found" };
  }

  // Ensure title emphasizes the interactive calculator tool intent
  const titleDisplay = protocol.name.includes(protocol.ratio)
    ? `${protocol.name} — Schedule Calculator & Generator`
    : `${protocol.name} (${protocol.ratio}) — Schedule Calculator & Generator`;

  // Provide tool-focused description for daily vs weekly (5:2) protocols
  const descriptionDisplay =
    protocol.type === "weekly"
      ? "Calculate your custom 5:2 fasting schedule, plan non-consecutive fasting days, and generate meal timing with FastTrack's interactive calculator."
      : `Calculate your personalized ${protocol.name} schedule. Interactive ${protocol.ratio} fasting calculator generates exact fasting and eating window hours based on your routine.`;

  return {
    title: titleDisplay,
    description: descriptionDisplay,
    alternates: {
      canonical: `/fasting-methods/${protocol.id}`,
    },
    openGraph: {
      title: `${protocol.name} Fasting Calculator & Schedule Generator | FastTrack`,
      description: descriptionDisplay,
    },
  };
}

function renderParagraphWithLinks(text: string) {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const elements = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      elements.push(text.substring(lastIndex, match.index));
    }
    const [_, label, href] = match;
    elements.push(
      <Link
        key={`${match.index}-${href}`}
        href={href}
        className="text-primary font-medium hover:text-primary-container underline underline-offset-2 transition-colors"
      >
        {label}
      </Link>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return elements.length > 0 ? elements : text;
}

const GUIDE_LINKS_BY_PROTOCOL: Record<string, { href: string; label: string }> = {
  "16-8": {
    href: "/guides/16-8-intermittent-fasting-guide",
    label: "Read our in-depth 16:8 Practical Guide",
  },
  "14-10": {
    href: "/guides/14-10-intermittent-fasting-guide",
    label: "Read our in-depth 14:10 Practical Guide",
  },
  "18-6": {
    href: "/guides/18-6-intermittent-fasting-guide",
    label: "Read our in-depth 18:6 Practical Guide",
  },
};

export default function ProtocolDetailPage({ params }: Props) {
  const protocol = PROTOCOLS[params.slug as ProtocolId];
  if (!protocol) {
    notFound();
  }

  const isWeekly = protocol.type === "weekly";
  const siteUrl = getSiteUrl();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Fasting Methods",
        "item": `${siteUrl}/fasting-methods`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": protocol.name,
        "item": `${siteUrl}/fasting-methods/${protocol.id}`,
      },
    ],
  };

  const faqJsonLd =
    protocol.faqs && protocol.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: protocol.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"),
            },
          })),
        }
      : null;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {/* Back Link */}
      <div className="mb-6">
        <Link
          href="/fasting-methods"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-container transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Methods</span>
        </Link>
      </div>

      {/* Protocol Header */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-xs font-semibold">
            {protocol.difficulty}
          </span>
          <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-xs font-semibold tabular-numbers">
            Ratio: {protocol.ratio}
          </span>
        </div>

        <h1 className="font-headline text-3xl sm:text-5xl font-bold text-primary tracking-tight">
          {protocol.name} Fasting Calculator &amp; Schedule Generator
        </h1>
        <p className="font-label-md text-base sm:text-lg text-secondary font-semibold mt-1">
          {protocol.tagline}
        </p>

        <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mt-4 leading-relaxed">
          {protocol.detailedOverview}
        </p>

        {GUIDE_LINKS_BY_PROTOCOL[protocol.id] && (
          <div className="mt-4 p-3.5 rounded-xl bg-surface-container-low border border-surface-container flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
            <span className="text-on-surface-variant">
              Looking for full evidence, meal planning, and protocols?
            </span>
            <Link
              href={GUIDE_LINKS_BY_PROTOCOL[protocol.id].href}
              className="text-primary font-semibold hover:underline flex items-center gap-1 flex-shrink-0"
            >
              <span>{GUIDE_LINKS_BY_PROTOCOL[protocol.id].label}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>

      {/* Embedded Dedicated Calculator for this Protocol */}
      <div className="p-6 sm:p-8 bg-surface-container-low/70 rounded-2xl border border-surface-container mb-12 shadow-sm">
        <Calculator initialProtocolId={protocol.id} initialLastMealTime="20:00" />
      </div>

      {/* In-depth Method Guidance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-surface-container shadow-sm">
            <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface mb-3">
              How the {protocol.name} Works in Practice
            </h2>
            <p className="font-body-md text-base text-on-surface-variant leading-relaxed mb-4">
              {isWeekly
                ? "The 5:2 method organizes your week rather than counting hours daily. On five days, you eat normally in accordance with biological appetite. On two chosen non-consecutive days (such as Monday and Thursday), energy intake is capped at approximately 500-600 kcal."
                : `Under the ${protocol.ratio} protocol, each 24-hour cycle is segmented into a continuous ${protocol.fastHours}-hour fasting period followed by an ${protocol.eatingHours}-hour feeding window. Fasting begins the moment your final evening meal concludes.`}
            </p>

            <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-sm text-on-surface block">
                  Example Daily Timing
                </span>
                <span className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
                  {protocol.exampleSchedule}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-surface-container shadow-sm">
            <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface mb-3">
              Biological Focus & Benefits
            </h2>
            <div className="space-y-3 text-sm text-on-surface-variant leading-relaxed">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-on-surface">Metabolic Action: </strong>
                  {protocol.cellularMarker}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-on-surface">Target Audience: </strong>
                  {protocol.bestFor}
                </span>
              </div>
            </div>
          </div>

          {/* Meal Planning & Window Structuring */}
          {protocol.mealStructureGuide && (
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-surface-container shadow-sm">
              <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface mb-3">
                Meal Planning &amp; Window Structuring
              </h2>
              <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                {protocol.mealStructureGuide}
              </p>
            </div>
          )}

          {/* Who Should Choose */}
          {protocol.whoShouldChoose && (
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-surface-container shadow-sm">
              <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface mb-3">
                Who Should Choose the {protocol.name}?
              </h2>
              <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                {protocol.whoShouldChoose}
              </p>
            </div>
          )}

          {/* Frequently Asked Questions */}
          {protocol.faqs && protocol.faqs.length > 0 && (
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-surface-container shadow-sm">
              <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {protocol.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border-b border-surface-container/60 pb-4 last:border-0 last:pb-0"
                  >
                    <h3 className="font-headline text-base font-semibold text-primary mb-1.5">
                      {faq.question}
                    </h3>
                    <div className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                      {renderParagraphWithLinks(faq.answer)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Protocols to Consider */}
          {protocol.relatedProtocols && protocol.relatedProtocols.length > 0 && (
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-surface-container shadow-sm">
              <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface mb-4">
                Related Protocols to Consider
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {protocol.relatedProtocols.map((rp) => (
                  <Link
                    key={rp.id}
                    href={`/fasting-methods/${rp.id}`}
                    className="p-4 rounded-xl bg-surface-container-low border border-surface-container hover:border-surface-container-high transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-headline text-base font-bold text-on-surface group-hover:text-primary transition-colors block">
                        {rp.name}
                      </span>
                      <p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                        {rp.relation}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-3">
                      <span>View Calculator &amp; Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Info & Safety */}
        <div className="space-y-6">
          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container shadow-sm">
            <h3 className="font-headline text-lg font-bold text-on-surface mb-3">
              Fasting Rules for {protocol.ratio}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-on-surface-variant">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Drink abundant water, sparkling water, or unsweetened tea.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Avoid added sugars, milks, or snacks during fasting hours.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Break fast with whole protein and healthy fats.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Shift window by 1–2 hours if necessary for social life.</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-container flex flex-col gap-2">
            <div className="flex items-center gap-1.5 text-primary font-semibold text-xs">
              <ShieldAlert className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Medical Safety</span>
            </div>
            <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
              If at any point during your fast you experience extreme dizziness, nausea, or shaking, break your fast immediately. Fasting is not advised for pregnant/nursing mothers or individuals with eating disorders.
            </p>
          </div>

          {/* Contextual Guides */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container shadow-sm space-y-3">
            <span className="font-label-sm text-xs text-secondary font-bold uppercase tracking-wider block">
              Related Guides
            </span>
            <div className="space-y-2.5">
              {protocol.relatedGuides && protocol.relatedGuides.length > 0 ? (
                protocol.relatedGuides.map((guide, gIdx) => (
                  <div
                    key={guide.href}
                    className={gIdx > 0 ? "border-t border-surface-container/60 pt-2" : ""}
                  >
                    <Link href={guide.href} className="group block text-xs">
                      <span className="font-semibold text-on-surface group-hover:text-primary transition-colors block">
                        {guide.title}
                      </span>
                      <span className="text-on-surface-variant text-[11px] leading-relaxed block">
                        {guide.description}
                      </span>
                    </Link>
                  </div>
                ))
              ) : (
                <>
                  <Link
                    href="/guides/how-does-intermittent-fasting-work"
                    className="group block text-xs"
                  >
                    <span className="font-semibold text-on-surface group-hover:text-primary transition-colors block">
                      How Does Fasting Work?
                    </span>
                    <span className="text-on-surface-variant text-[11px] leading-relaxed block">
                      Understand metabolic switching &amp; fat utilization during {protocol.ratio}.
                    </span>
                  </Link>
                  <div className="border-t border-surface-container/60 pt-2">
                    <Link
                      href="/guides/exercise-while-fasting"
                      className="group block text-xs"
                    >
                      <span className="font-semibold text-on-surface group-hover:text-primary transition-colors block">
                        Exercise While Fasting
                      </span>
                      <span className="text-on-surface-variant text-[11px] leading-relaxed block">
                        Timing workouts, strength training, and hydration around your fasting window.
                      </span>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
