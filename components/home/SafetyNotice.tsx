import React from "react";
import Link from "next/link";
import { ShieldAlert, ArrowRight } from "lucide-react";

export function SafetyNotice() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-6">
      <div className="rounded-2xl bg-surface-container-low border border-surface-container p-6 sm:p-8 flex flex-col md:flex-row items-start gap-5">
        <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center flex-shrink-0 shadow-sm">
          <ShieldAlert className="w-6 h-6" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">
              Important Clinical Safety & Medical Notice
            </h3>
            <span className="font-label-sm text-[11px] bg-surface-container-highest text-on-surface-variant px-2.5 py-0.5 rounded-full font-semibold uppercase">
              Mandatory Guidance
            </span>
          </div>

          <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            FastTrack is strictly an educational calculation tool and behavioral timing utility intended for healthy adults. Intermittent fasting is NOT appropriate for individuals who are pregnant or breastfeeding, people with an active or historical eating disorder, individuals with Type 1 Diabetes, or children and minors under 18 years of age. If you take prescription blood pressure or glucose-lowering medications, or have a chronic renal, cardiac, or metabolic condition, you must consult your personal licensed healthcare physician prior to altering your meal schedule.
          </p>

          <div className="pt-2">
            <Link
              href="/medical-disclaimer"
              className="inline-flex items-center gap-1.5 font-semibold text-xs sm:text-sm text-primary hover:text-primary-container transition-colors"
            >
              <span>Read complete Medical Disclaimer & Health Contraindications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
