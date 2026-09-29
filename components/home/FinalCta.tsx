import React from "react";
import Link from "next/link";
import { Timer, BookOpen } from "lucide-react";

export function FinalCta() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
      <div className="rounded-2xl bg-primary text-on-primary p-6 sm:p-10 lg:p-14 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary-container rounded-full blur-3xl pointer-events-none opacity-50" />

        <div className="flex flex-col items-start gap-2 max-w-xl z-10">
          <span className="font-label-sm text-xs uppercase tracking-widest text-on-primary-container font-bold">
            Circadian Precision Timing
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Ready to Build Your Personal Fasting Schedule?
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-primary-container mt-1 leading-relaxed">
            Harness the power of digestive rest, metabolic flexibility, and daylight circadian alignment with FastTrack.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 z-10 w-full sm:w-auto">
          <Link
            href="/#calculator"
            className="w-full sm:w-auto text-center px-6 py-3.5 bg-on-primary text-primary font-semibold text-sm sm:text-base rounded-lg shadow-md hover:bg-surface-container transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <Timer className="w-5 h-5 text-primary" />
            <span>Calculate My Fast</span>
          </Link>
          <Link
            href="/guides"
            className="w-full sm:w-auto text-center px-6 py-3.5 bg-primary-container text-on-primary font-semibold text-sm sm:text-base rounded-lg hover:bg-surface-tint transition-all flex items-center justify-center gap-2"
          >
            <BookOpen className="w-5 h-5" />
            <span>Read Fasting Guides</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
