import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { PROTOCOL_LIST } from "@/lib/calculator/protocols";
import { Compass, Clock, Activity, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Fasting Methods & Protocol Directory",
  description:
    "Compare all intermittent fasting protocols: 16:8, 14:10, 12:12, 18:6, 20:4 Warrior, OMAD (23:1), and 5:2 weekly. Find your metabolic match.",
  alternates: {
    canonical: "/fasting-methods",
  },
};

export default function FastingMethodsIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10 sm:py-16">
      <div className="max-w-3xl mb-12">
        <span className="font-label-sm text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest flex items-center gap-1.5">
          <Compass className="w-4 h-4" />
          <span>Complete Protocol Directory</span>
        </span>
        <h1 className="font-headline text-3xl sm:text-5xl font-bold text-primary tracking-tight mt-2">
          Intermittent Fasting Methods
        </h1>
        <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mt-3 leading-relaxed">
          Explore evidence-based fasting protocols categorized by duration, physiological intensity, and daily flexibility. Every method includes an interactive schedule generator.
        </p>
      </div>

      {/* Protocol Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {PROTOCOL_LIST.map((protocol) => (
          <div
            key={protocol.id}
            className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container hover:border-surface-container-high shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-headline text-xl font-bold text-on-surface">
                  {protocol.name}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-xs font-semibold tabular-numbers">
                  {protocol.ratio}
                </span>
              </div>

              <span className="text-xs font-semibold text-secondary block mb-3">
                {protocol.tagline}
              </span>

              <p className="font-body-sm text-sm text-on-surface-variant mb-4 leading-relaxed">
                {protocol.description}
              </p>

              <div className="space-y-2 mb-4 text-xs text-on-surface-variant">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-on-surface font-medium">{protocol.exampleSchedule}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Activity className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{protocol.cellularMarker}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-surface-container/60 flex items-center justify-between gap-2">
              <Link
                href={`/fasting-methods/${protocol.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-container transition-colors"
              >
                <span>Method Guide & Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
