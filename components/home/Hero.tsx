"use client";

import React from "react";
import Link from "next/link";
import { Timer, ArrowRight, ShieldCheck, Moon, Sparkles, Clock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pb-20">
      {/* Subtle Ambient Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container-high border border-surface-container text-primary">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-label-sm text-xs uppercase tracking-wider font-semibold">
                Circadian Precision Fasting Architecture
              </span>
            </div>

            <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl text-on-surface font-bold tracking-tight leading-[1.1]">
              Find Your Personalized Fasting{" "}
              <span className="text-primary underline decoration-secondary decoration-wavy decoration-2 underline-offset-8">
                Schedule
              </span>
            </h1>

            <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Calculate your exact fasting and eating windows tailored to your circadian rhythm, daily schedule, and metabolic goals. Evidence-grounded, private, and intuitive.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <Link
                href="/#calculator"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-semibold text-sm sm:text-base rounded-lg shadow-md hover:bg-primary-container hover:shadow-lg transition-all active:scale-[0.98]"
              >
                <Timer className="w-5 h-5" />
                <span>Calculate My Fast</span>
              </Link>
              <Link
                href="/fasting-methods"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface-container text-on-surface font-semibold text-sm sm:text-base rounded-lg hover:bg-surface-container-high transition-colors"
              >
                <span>Explore Fasting Methods</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Truthful Product Highlights (NO fake stats!) */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 w-full max-w-lg border-t border-surface-container/60">
              <div className="flex flex-col">
                <span className="font-headline text-xl sm:text-2xl text-primary font-bold">Client-Side</span>
                <span className="font-label-sm text-xs text-on-surface-variant">Local Calculator</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-xl sm:text-2xl text-secondary font-bold">7 Protocols</span>
                <span className="font-label-sm text-xs text-on-surface-variant">Daily & Weekly</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-xl sm:text-2xl text-primary font-bold">Zero</span>
                <span className="font-label-sm text-xs text-on-surface-variant">Account Required</span>
              </div>
            </div>
          </div>

          {/* Right Hero Circadian Arc Visualizer Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-surface-container-lowest rounded-2xl p-4 sm:p-6 border border-surface-container shadow-xl flex flex-col gap-4 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-secondary" />
                  <span className="font-label-md text-xs sm:text-sm text-on-surface font-bold uppercase tracking-wider">
                    Circadian Horizon
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-on-primary bg-primary font-label-sm text-xs font-semibold">
                  16:8 Protocol Baseline
                </span>
              </div>

              {/* Decorative Circular Arc */}
              <div className="relative flex items-center justify-center py-1 sm:py-2">
                <svg className="w-48 h-48 sm:w-56 sm:h-56 transform -rotate-90" viewBox="0 0 240 240">
                  <circle cx="120" cy="120" fill="none" r="95" stroke="#eaedff" strokeWidth="14" />
                  <circle
                    cx="120"
                    cy="120"
                    fill="none"
                    r="95"
                    stroke="#003430"
                    strokeDasharray="398 597"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    strokeWidth="14"
                  />
                  <circle
                    cx="120"
                    cy="120"
                    fill="none"
                    r="95"
                    stroke="#f59e0c"
                    strokeDasharray="199 597"
                    strokeDashoffset="-398"
                    strokeLinecap="round"
                    strokeWidth="14"
                  />
                  <circle
                    cx="120"
                    cy="120"
                    fill="none"
                    opacity="0.6"
                    r="76"
                    stroke="#84bbb4"
                    strokeDasharray="160 480"
                    strokeDashoffset="40"
                    strokeLinecap="round"
                    strokeWidth="3"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-3 sm:p-4 pointer-events-none select-none">
                  <span className="font-label-sm text-[10px] sm:text-xs text-secondary font-bold tracking-widest uppercase">
                    16h Fasting Window
                  </span>
                  <span className="font-headline text-lg sm:text-2xl lg:text-3xl text-primary tracking-tight font-bold my-0.5 sm:my-1 tabular-numbers whitespace-nowrap">
                    8:00 PM – 12:00 PM
                  </span>
                  <span className="font-label-sm text-[10px] sm:text-xs text-on-surface-variant font-medium">
                    Rest &amp; Renewal
                  </span>
                </div>
              </div>

              {/* State Summary Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                {/* Fasting Schedule Pill */}
                <div className="p-2.5 sm:p-3 rounded-lg bg-surface-container flex flex-col gap-1">
                  <div className="flex items-center justify-between gap-x-2 gap-y-0.5 flex-wrap">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="font-label-sm text-xs text-on-surface font-semibold">
                        Fast:
                      </span>
                    </div>
                    <span className="font-body-sm text-[11px] text-on-surface-variant">
                      16 hrs metabolic rest
                    </span>
                  </div>
                  <div className="pl-4 font-headline text-xs sm:text-sm font-semibold text-primary tabular-numbers tracking-tight">
                    8:00 PM – 12:00 PM
                  </div>
                </div>

                {/* Eating Schedule Pill */}
                <div className="p-2.5 sm:p-3 rounded-lg bg-tertiary-fixed/30 flex flex-col gap-1">
                  <div className="flex items-center justify-between gap-x-2 gap-y-0.5 flex-wrap">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container flex-shrink-0" />
                      <span className="font-label-sm text-xs text-on-surface font-semibold">
                        Eat:
                      </span>
                    </div>
                    <span className="font-body-sm text-[11px] text-on-surface-variant">
                      8 hrs nourishment
                    </span>
                  </div>
                  <div className="pl-4 font-headline text-xs sm:text-sm font-semibold text-on-tertiary-container tabular-numbers tracking-tight">
                    12:00 PM – 8:00 PM
                  </div>
                </div>
              </div>

              {/* Sleep Alignment Flag */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-on-surface-variant pt-1 text-xs gap-1">
                <span className="flex items-center gap-1 font-medium">
                  <Moon className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                  <span>Sleep Window Aligned (11 PM – 7 AM)</span>
                </span>
                <span className="text-secondary font-semibold text-[11px] sm:text-xs">Circadian Harmony</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
