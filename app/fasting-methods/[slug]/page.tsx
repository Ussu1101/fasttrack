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

  // Ensure title includes ratio only once (e.g. avoid "OMAD (23:1) (23:1)")
  const titleDisplay = protocol.name.includes(protocol.ratio)
    ? `${protocol.name} — Schedule Calculator & Guide`
    : `${protocol.name} (${protocol.ratio}) — Schedule Calculator & Guide`;

  // Provide accurate description for daily vs weekly (5:2) protocols
  const descriptionDisplay =
    protocol.type === "weekly"
      ? "Learn how the 5:2 fasting method works, how its weekly structure differs from daily fasting schedules, and how to plan it around your routine."
      : `Calculate your personalized ${protocol.name} intermittent fasting schedule. Fast duration: ${protocol.fastHours}h, Eating window: ${protocol.eatingHours}h. Evidence-based guide.`;

  return {
    title: titleDisplay,
    description: descriptionDisplay,
    alternates: {
      canonical: `/fasting-methods/${protocol.id}`,
    },
    openGraph: {
      title: `${protocol.name} Calculator | FastTrack`,
      description: protocol.description,
    },
  };
}

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

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
          {protocol.name}
        </h1>
        <p className="font-label-md text-base sm:text-lg text-secondary font-semibold mt-1">
          {protocol.tagline}
        </p>

        <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mt-4 leading-relaxed">
          {protocol.detailedOverview}
        </p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
