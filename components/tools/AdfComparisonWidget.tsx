"use client";

import React, { useState } from "react";
import {
  CalendarDays,
  Utensils,
  Moon,
  Info,
  Scale,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Sparkles,
} from "lucide-react";

export type AdfProtocolType = "strict" | "modified";

export type Weekday =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

const WEEKDAYS: Weekday[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

interface DaySchedule {
  dayNumber: number;
  weekday: Weekday;
  isFastDay: boolean;
  fastingHours: number;
  calories: string;
  notes: string;
}

export function generateFourteenDaySchedule(
  startDay: Weekday,
  protocol: AdfProtocolType
): DaySchedule[] {
  const startIndex = WEEKDAYS.indexOf(startDay);
  const schedule: DaySchedule[] = [];

  for (let i = 0; i < 14; i++) {
    const weekday = WEEKDAYS[(startIndex + i) % 7];
    // Alternating pattern starting with Fast Day on Day 1
    const isFastDay = i % 2 === 0;

    if (isFastDay) {
      if (protocol === "strict") {
        schedule.push({
          dayNumber: i + 1,
          weekday,
          isFastDay: true,
          fastingHours: 36,
          calories: "0 kcal",
          notes: "Water, black coffee, unsweetened tea, and non-caloric electrolytes only.",
        });
      } else {
        schedule.push({
          dayNumber: i + 1,
          weekday,
          isFastDay: true,
          fastingHours: 36,
          calories: "~500 kcal",
          notes: "Single nutrient-dense meal (or spaced servings) providing ~20–25% baseline needs.",
        });
      }
    } else {
      schedule.push({
        dayNumber: i + 1,
        weekday,
        isFastDay: false,
        fastingHours: 0,
        calories: "Ad libitum (normal)",
        notes: "Eat balanced whole foods to satiety; no fasting timer or calorie restriction.",
      });
    }
  }

  return schedule;
}

export default function AdfComparisonWidget() {
  const [protocol, setProtocol] = useState<AdfProtocolType>("modified");
  const [startDay, setStartDay] = useState<Weekday>("Monday");

  const schedule = generateFourteenDaySchedule(startDay, protocol);

  const week1 = schedule.slice(0, 7);
  const week2 = schedule.slice(7, 14);

  const week1FastDays = week1.filter((d) => d.isFastDay).length;
  const week2FastDays = week2.filter((d) => d.isFastDay).length;

  return (
    <section
      id="schedule-builder"
      aria-label="ADF Protocol Comparison and Schedule Generator"
      className="p-5 sm:p-8 rounded-2xl bg-surface-container border border-surface-container-high shadow-sm space-y-8"
    >
      {/* Widget Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Protocol Comparator
          </span>
        </div>
        <h3 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
          ADF Schedule &amp; Protocol Planner
        </h3>
        <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
          Select a protocol and your preferred starting day to inspect the alternating 14-day cadence, weekly fasting hours, and clinical adherence benchmarks.
        </p>
      </div>

      {/* Controls Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-5 sm:p-6 rounded-xl bg-surface-container-low border border-surface-container">
        {/* Protocol Selector */}
        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant">
            1. Select ADF Protocol Variant
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" role="radiogroup" aria-label="ADF Protocol Variant">
            <button
              type="button"
              role="radio"
              aria-checked={protocol === "modified"}
              onClick={() => setProtocol("modified")}
              className={`p-3.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                protocol === "modified"
                  ? "bg-primary text-on-primary border-primary shadow-sm"
                  : "bg-surface-container text-on-surface border-surface-container-high hover:border-primary/40"
              }`}
            >
              <div>
                <span className="block font-headline text-sm font-bold">
                  Modified ADF
                </span>
                <span className={`block text-xs mt-1 leading-snug ${protocol === "modified" ? "text-on-primary/90" : "text-on-surface-variant"}`}>
                  ~500 kcal fast days (Research Standard)
                </span>
              </div>
              <span className={`inline-block mt-2 text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${protocol === "modified" ? "bg-white/20 text-white" : "bg-primary/15 text-primary"}`}>
                Higher Adherence
              </span>
            </button>

            <button
              type="button"
              role="radio"
              aria-checked={protocol === "strict"}
              onClick={() => setProtocol("strict")}
              className={`p-3.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                protocol === "strict"
                  ? "bg-primary text-on-primary border-primary shadow-sm"
                  : "bg-surface-container text-on-surface border-surface-container-high hover:border-primary/40"
              }`}
            >
              <div>
                <span className="block font-headline text-sm font-bold">
                  Strict Zero-Calorie
                </span>
                <span className={`block text-xs mt-1 leading-snug ${protocol === "strict" ? "text-on-primary/90" : "text-on-surface-variant"}`}>
                  0 kcal on fast days (36h water-only)
                </span>
              </div>
              <span className={`inline-block mt-2 text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${protocol === "strict" ? "bg-white/20 text-white" : "bg-error/15 text-error"}`}>
                High Intensity
              </span>
            </button>
          </div>

          <p className="text-xs text-on-surface-variant leading-relaxed">
            {protocol === "modified"
              ? "Note: The ~500 kcal figure represents the standard clinical research convention (~20–25% baseline energy needs), not an individualized clinical prescription."
              : "Note: Strict zero-calorie ADF permits no food or caloric liquids for a continuous 36-hour span. Hydration and non-caloric electrolytes are critical."}
          </p>
        </div>

        {/* Starting Day Selector */}
        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant">
            2. Choose Starting Weekday
          </label>
          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Starting Weekday">
            {WEEKDAYS.map((day) => {
              const isSelected = startDay === day;
              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => setStartDay(day)}
                  aria-pressed={isSelected}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-primary text-on-primary shadow-sm"
                      : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                  }`}
                >
                  {day.slice(0, 3)}
                </button>
              );
            })}
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Day 1 begins as your first <strong>Fast Day</strong> on <strong>{startDay}</strong>. Because the cycle alternates across an odd 7-day week, your fast days flip between Week 1 and Week 2.
          </p>
        </div>
      </div>

      {/* 14-Day Calendar Schedule */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-surface-container-high/60 pb-3">
          <h4 className="font-headline text-lg sm:text-xl font-bold text-on-surface flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-primary" />
            <span>14-Day Alternating Cycle Preview</span>
          </h4>
          <div className="flex items-center gap-3 text-xs font-medium text-on-surface-variant">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-error/20 border border-error/40 inline-block" />
              <span>Fast Day ({protocol === "strict" ? "0 kcal" : "~500 kcal"})</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-primary/20 border border-primary/40 inline-block" />
              <span>Feed Day (Ad Libitum)</span>
            </span>
          </div>
        </div>

        {/* Two-Week Calendar Display */}
        <div className="space-y-6">
          {/* Week 1 */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-on-surface-variant">
              <span>Week 1 (Days 1–7)</span>
              <span className="text-primary">{week1FastDays} Fast Days &bull; {7 - week1FastDays} Feed Days</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
              {week1.map((day) => (
                <div
                  key={day.dayNumber}
                  className={`p-3 rounded-xl border transition-all flex flex-col justify-between min-h-[110px] ${
                    day.isFastDay
                      ? "bg-error/5 border-error/25 hover:border-error/40"
                      : "bg-primary/5 border-primary/20 hover:border-primary/40"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-on-surface">{day.weekday.slice(0, 3)}</span>
                      <span className="text-on-surface-variant">Day {day.dayNumber}</span>
                    </div>
                    <div className="mt-2">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                          day.isFastDay
                            ? "bg-error/15 text-error"
                            : "bg-primary/15 text-primary"
                        }`}
                      >
                        {day.isFastDay ? "Fast Day" : "Feed Day"}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-xs font-medium text-on-surface">
                    {day.calories}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Week 2 */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-on-surface-variant">
              <span>Week 2 (Days 8–14)</span>
              <span className="text-primary">{week2FastDays} Fast Days &bull; {7 - week2FastDays} Feed Days</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
              {week2.map((day) => (
                <div
                  key={day.dayNumber}
                  className={`p-3 rounded-xl border transition-all flex flex-col justify-between min-h-[110px] ${
                    day.isFastDay
                      ? "bg-error/5 border-error/25 hover:border-error/40"
                      : "bg-primary/5 border-primary/20 hover:border-primary/40"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-on-surface">{day.weekday.slice(0, 3)}</span>
                      <span className="text-on-surface-variant">Day {day.dayNumber}</span>
                    </div>
                    <div className="mt-2">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                          day.isFastDay
                            ? "bg-error/15 text-error"
                            : "bg-primary/15 text-primary"
                        }`}
                      >
                        {day.isFastDay ? "Fast Day" : "Feed Day"}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-xs font-medium text-on-surface">
                    {day.calories}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Summary Box & Adherence Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
        {/* Metric Summary */}
        <div className="p-5 rounded-xl bg-surface-container-low border border-surface-container space-y-4">
          <h4 className="font-headline text-base font-bold text-on-surface flex items-center gap-2">
            <Scale className="w-4 h-4 text-primary" />
            <span>14-Day Schedule Summary</span>
          </h4>
          <div className="space-y-2.5 text-xs sm:text-sm text-on-surface-variant">
            <div className="flex items-center justify-between py-1 border-b border-surface-container/60">
              <span>Weekly Cadence Pattern:</span>
              <strong className="text-on-surface">
                {week1FastDays} fast / {7 - week1FastDays} feed (W1) &bull; {week2FastDays} fast / {7 - week2FastDays} feed (W2)
              </strong>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-surface-container/60">
              <span>Average Fast Days / Week:</span>
              <strong className="text-on-surface">3.5 days per week</strong>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-surface-container/60">
              <span>Fast-Day Calorie Convention:</span>
              <strong className="text-on-surface">{protocol === "strict" ? "0 kcal (Strict)" : "~500 kcal (Modified)"}</strong>
            </div>
            <div className="flex items-center justify-between py-1">
              <span>Nominal Window Exposure:</span>
              <strong className="text-primary">
                {protocol === "strict" ? "3–4 windows of ~36 hrs (~108–144 hrs gross)" : "3–4 fast days with ~20–24 hr segments"}
              </strong>
            </div>
          </div>
          <p className="text-[11px] text-on-surface-variant leading-relaxed bg-surface-container/40 p-2.5 rounded-lg border border-surface-container/60">
            <strong>Understanding hours vs. calendar time:</strong> In strict ADF, each nominal fasting window spans ~36 hours (from dinner on the prior feed day through breakfast on the following feed day). Because these ~36-hour windows cross calendar midnight boundaries and overlap adjacent days, multiplying 3.5 fast days by 36 hours produces a cumulative nominal window exposure (~126 hrs) rather than elapsed time in a fixed 168-hour calendar week. Actual elapsed fasting within a 7-day calendar week typically totals ~72 to 96 hours (3 to 4 full 24-hour fast days plus overnight boundaries). In modified ADF, the ~500 kcal meal bisects the 36-hour window into shorter segments, reducing continuous fasting duration while maintaining the overall energy deficit.
          </p>
        </div>

        {/* Adherence & Difficulty Clinical Benchmark */}
        <div className="p-5 rounded-xl bg-surface-container-low border border-surface-container space-y-4">
          <h4 className="font-headline text-base font-bold text-on-surface flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-secondary" />
            <span>Adherence Demand &amp; Trial Evidence</span>
          </h4>
          <div className="space-y-3 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20 text-on-surface">
              <strong className="block text-secondary font-bold text-xs uppercase tracking-wide">
                Protocol Difficulty: High
              </strong>
              ADF requires substantial behavioral discipline. Because fast days shift every single week, social dinners and family routines require continuous adaptation.
            </div>
            <p>
              <strong>Clinical trial attrition:</strong> In the landmark 1-year JAMA Internal Medicine randomized trial (Trepanowski et al., 2017), the ADF group had an attrition rate of <strong>38%</strong> compared to <strong>29%</strong> on standard daily calorie restriction.
            </p>
            <p>
              <strong>Modified vs Strict retention:</strong> Research led by Dr. Krista Varady shows modified ADF (~500 kcal) achieves markedly higher long-term retention than zero-calorie ADF by blunting extreme hunger and social isolation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
