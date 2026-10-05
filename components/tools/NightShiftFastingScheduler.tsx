"use client";

import React, { useState, useId } from "react";
import Link from "next/link";
import {
  Clock,
  Moon,
  Briefcase,
  Utensils,
  Hourglass,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Info,
  Calendar,
  ShieldAlert,
  ArrowRight,
  Coffee,
} from "lucide-react";
import { parseTimeToMinutes } from "../../lib/time/parser";
import { minutesTo24Hour, minutesTo12Hour } from "../../lib/time/format";

export type ShiftProtocol = "12-12" | "14-10" | "16-8";
export type DayType = "work" | "off";
export type EatingPatternPreference = "before-shift" | "during-early-shift" | "split";

export interface NightShiftInputs {
  shiftStart: string; // e.g. "19:00"
  shiftEnd: string; // e.g. "07:00"
  sleepStart: string; // e.g. "08:30"
  sleepEnd: string; // e.g. "15:30"
  protocol: ShiftProtocol;
  eatingPattern: EatingPatternPreference;
}

export interface TimelineBlock {
  type: "sleep" | "work" | "eating" | "fasting";
  label: string;
  startMinutes: number; // 0 to 1440
  durationMinutes: number;
  startFormatted: string;
  endFormatted: string;
}

export interface NightShiftDaySchedule {
  dayType: DayType;
  title: string;
  eatingWindowStart: string;
  eatingWindowEnd: string;
  eatingWindowFormatted: string;
  fastingWindowFormatted: string;
  sleepWindowFormatted: string;
  workWindowFormatted: string;
  caffeineCutoffFormatted: string;
  explanation: string;
  transitionNote?: string;
  blocks: TimelineBlock[];
  warnings: string[];
}

export const DEFAULT_NIGHT_SHIFT_INPUTS: NightShiftInputs = {
  shiftStart: "19:00",
  shiftEnd: "07:00",
  sleepStart: "08:30",
  sleepEnd: "15:30",
  protocol: "16-8",
  eatingPattern: "before-shift",
};

/**
 * Calculates durations handling cross-midnight time spans.
 */
export function calculateIntervalDuration(startMinutes: number, endMinutes: number): number {
  if (startMinutes === endMinutes) return 1440; // Full 24h
  if (endMinutes > startMinutes) {
    return endMinutes - startMinutes;
  }
  return 1440 - startMinutes + endMinutes;
}

/**
 * Computes scheduled windows for both work days and days off.
 */
export function calculateNightShiftSchedule(
  inputs: NightShiftInputs,
  activeDay: DayType = "work"
): {
  workSchedule: NightShiftDaySchedule;
  offSchedule: NightShiftDaySchedule;
  validationError?: string;
} {
  const parsedShiftStart = parseTimeToMinutes(inputs.shiftStart);
  const parsedShiftEnd = parseTimeToMinutes(inputs.shiftEnd);
  const parsedSleepStart = parseTimeToMinutes(inputs.sleepStart);
  const parsedSleepEnd = parseTimeToMinutes(inputs.sleepEnd);

  if (!parsedShiftStart.valid || !parsedShiftEnd.valid) {
    return {
      workSchedule: createFallbackSchedule("work", inputs.protocol),
      offSchedule: createFallbackSchedule("off", inputs.protocol),
      validationError: "Please enter valid shift start and end times in HH:mm format.",
    };
  }

  if (!parsedSleepStart.valid || !parsedSleepEnd.valid) {
    return {
      workSchedule: createFallbackSchedule("work", inputs.protocol),
      offSchedule: createFallbackSchedule("off", inputs.protocol),
      validationError: "Please enter valid sleep start and end times in HH:mm format.",
    };
  }

  if (inputs.shiftStart === inputs.shiftEnd) {
    return {
      workSchedule: createFallbackSchedule("work", inputs.protocol),
      offSchedule: createFallbackSchedule("off", inputs.protocol),
      validationError: "Shift start and end times cannot be identical.",
    };
  }

  if (inputs.sleepStart === inputs.sleepEnd) {
    return {
      workSchedule: createFallbackSchedule("work", inputs.protocol),
      offSchedule: createFallbackSchedule("off", inputs.protocol),
      validationError: "Sleep start and end times cannot be identical.",
    };
  }

  // Eating window duration based on protocol
  const eatingDurationHours = inputs.protocol === "16-8" ? 8 : inputs.protocol === "14-10" ? 10 : 12;
  const eatingDurationMinutes = eatingDurationHours * 60;
  const fastingDurationHours = 24 - eatingDurationHours;

  // WORK DAY CALCULATION
  // Default Work day pattern:
  // If "before-shift": Eating window opens prior to shift, closes during early shift.
  // E.g., for 19:00 shift start:
  // 16:8 -> 8h eating window. Typically 16:00 to 00:00 (mid-shift).
  // Or if "during-early-shift": 19:00 to 03:00.
  // Or "split": 17:00 to 01:00.
  let workEatingStartMinutes = (parsedShiftStart.minutes - 180 + 1440) % 1440; // 3h before shift by default
  if (inputs.eatingPattern === "during-early-shift") {
    workEatingStartMinutes = parsedShiftStart.minutes;
  } else if (inputs.eatingPattern === "split") {
    workEatingStartMinutes = (parsedShiftStart.minutes - 120 + 1440) % 1440;
  }

  // Ensure eating window does not overlap directly into sleep
  // Best practice: buffer of at least 2h before sleepStart
  const workEatingEndMinutes = (workEatingStartMinutes + eatingDurationMinutes) % 1440;

  // Check buffer before sleep
  const bufferBeforeSleepMinutes = calculateIntervalDuration(workEatingEndMinutes, parsedSleepStart.minutes);
  const workWarnings: string[] = [];
  if (bufferBeforeSleepMinutes < 90 && bufferBeforeSleepMinutes >= 0) {
    workWarnings.push(
      "Your eating window ends within 90 minutes of sleep. Finishing meals at least 2–3 hours before bed supports sleep quality."
    );
  }

  // Caffeine cut-off on work day: roughly 6 hours before sleep
  const workCaffeineCutoffMinutes = (parsedSleepStart.minutes - 360 + 1440) % 1440;

  // Build work day blocks across standard 24h timeline (00:00 to 24:00)
  const workBlocks = generateDayTimelineBlocks(
    workEatingStartMinutes,
    eatingDurationMinutes,
    parsedSleepStart.minutes,
    calculateIntervalDuration(parsedSleepStart.minutes, parsedSleepEnd.minutes),
    parsedShiftStart.minutes,
    calculateIntervalDuration(parsedShiftStart.minutes, parsedShiftEnd.minutes)
  );

  const workSchedule: NightShiftDaySchedule = {
    dayType: "work",
    title: "Night Shift Work-Day Schedule",
    eatingWindowStart: minutesTo24Hour(workEatingStartMinutes),
    eatingWindowEnd: minutesTo24Hour(workEatingEndMinutes),
    eatingWindowFormatted: `${minutesTo12Hour(workEatingStartMinutes)} – ${minutesTo12Hour(workEatingEndMinutes)} (${eatingDurationHours}h)`,
    fastingWindowFormatted: `${minutesTo12Hour(workEatingEndMinutes)} – ${minutesTo12Hour(workEatingStartMinutes)} (${fastingDurationHours}h)`,
    sleepWindowFormatted: `${minutesTo12Hour(parsedSleepStart.minutes)} – ${minutesTo12Hour(parsedSleepEnd.minutes)}`,
    workWindowFormatted: `${minutesTo12Hour(parsedShiftStart.minutes)} – ${minutesTo12Hour(parsedShiftEnd.minutes)}`,
    caffeineCutoffFormatted: `${minutesTo12Hour(workCaffeineCutoffMinutes)} (approx. 6h before sleep)`,
    explanation: `Constructed for a ${inputs.protocol} protocol around your ${inputs.shiftStart}–${inputs.shiftEnd} shift. Your main meal occurs prior to the shift to sustain energy, concluding with a light meal or snack during the early hours so your digestion settles well before daytime sleep (${minutesTo12Hour(parsedSleepStart.minutes)}).`,
    transitionNote:
      "When transitioning from your final night shift into days off, use an anchor sleep bridge: take a short 3- to 4-hour morning recovery sleep, stay hydrated, and shift your eating window forward into the afternoon/evening.",
    blocks: workBlocks,
    warnings: workWarnings,
  };

  // DAY OFF CALCULATION
  // On days off, shift workers typically transition sleep towards daytime social hours or use an anchor schedule.
  // Standard anchor/day-off eating window: e.g. 12:00 to 20:00 (for 16:8), or aligned with daytime wakefulness.
  // We model a day-off schedule with nighttime sleep (e.g. 23:00 - 07:00 or shifted anchor 02:00 - 10:00).
  const offSleepStartMinutes = 23 * 60; // 23:00
  const offSleepDurationMinutes = 8 * 60; // 8 hours (until 07:00)
  const offEatingStartMinutes = 12 * 60; // 12:00 PM
  const offEatingEndMinutes = (offEatingStartMinutes + eatingDurationMinutes) % 1440;
  const offCaffeineCutoffMinutes = 17 * 60; // 5:00 PM (6h before 23:00)

  const offBlocks = generateDayTimelineBlocks(
    offEatingStartMinutes,
    eatingDurationMinutes,
    offSleepStartMinutes,
    offSleepDurationMinutes,
    null,
    0
  );

  const offSchedule: NightShiftDaySchedule = {
    dayType: "off",
    title: "Day-Off (Recovery / Daytime) Schedule",
    eatingWindowStart: minutesTo24Hour(offEatingStartMinutes),
    eatingWindowEnd: minutesTo24Hour(offEatingEndMinutes),
    eatingWindowFormatted: `${minutesTo12Hour(offEatingStartMinutes)} – ${minutesTo12Hour(offEatingEndMinutes)} (${eatingDurationHours}h)`,
    fastingWindowFormatted: `${minutesTo12Hour(offEatingEndMinutes)} – ${minutesTo12Hour(offEatingStartMinutes)} (${fastingDurationHours}h)`,
    sleepWindowFormatted: `${minutesTo12Hour(offSleepStartMinutes)} – ${minutesTo12Hour((offSleepStartMinutes + offSleepDurationMinutes) % 1440)}`,
    workWindowFormatted: "No Scheduled Shift (Day Off)",
    caffeineCutoffFormatted: `${minutesTo12Hour(offCaffeineCutoffMinutes)} (approx. 6h before sleep)`,
    explanation: `Designed to help you reconnect with standard daytime meals and restorative nocturnal sleep. The eating window is anchored from midday to evening (${minutesTo12Hour(offEatingStartMinutes)}–${minutesTo12Hour(offEatingEndMinutes)}), keeping dinner 3 hours prior to nighttime sleep without forcing prolonged restrictive fasts.`,
    transitionNote:
      "Avoid forcing an immediate 24-hour fast to 'reset' between work days and off days. Allow a gentle 12:12 or 14:10 bridge day to preserve hormonal balance and prevent rebound bingeing.",
    blocks: offBlocks,
    warnings: [],
  };

  return { workSchedule, offSchedule };
}

function createFallbackSchedule(dayType: DayType, protocol: ShiftProtocol): NightShiftDaySchedule {
  return {
    dayType,
    title: dayType === "work" ? "Night Shift Work-Day Schedule" : "Day-Off Schedule",
    eatingWindowStart: "16:00",
    eatingWindowEnd: "00:00",
    eatingWindowFormatted: "4:00 PM – 12:00 AM (8h)",
    fastingWindowFormatted: "12:00 AM – 4:00 PM (16h)",
    sleepWindowFormatted: "8:30 AM – 3:30 PM",
    workWindowFormatted: "7:00 PM – 7:00 AM",
    caffeineCutoffFormatted: "2:30 AM",
    explanation: "Default illustrative schedule.",
    blocks: [],
    warnings: [],
  };
}

/**
 * Breaks a 24-hour day (00:00 to 24:00) into sequential visual blocks
 * with priority: Sleep > Work > Eating Window > Fasting Window.
 */
export function generateDayTimelineBlocks(
  eatingStart: number,
  eatingDuration: number,
  sleepStart: number,
  sleepDuration: number,
  workStart: number | null,
  workDuration: number
): TimelineBlock[] {
  // We divide the 1440 minutes into hourly segments or discrete intervals
  // To keep the visual bar clean and accessible, we identify intervals between major event boundaries:
  const boundaries = new Set<number>([0, 1440]);

  const addRange = (start: number, duration: number) => {
    const end = (start + duration) % 1440;
    boundaries.add(start);
    boundaries.add(end);
  };

  addRange(eatingStart, eatingDuration);
  addRange(sleepStart, sleepDuration);
  if (workStart !== null && workDuration > 0) {
    addRange(workStart, workDuration);
  }

  const sortedPoints = Array.from(boundaries).sort((a, b) => a - b);
  const blocks: TimelineBlock[] = [];

  for (let i = 0; i < sortedPoints.length - 1; i++) {
    const start = sortedPoints[i];
    const end = sortedPoints[i + 1];
    const duration = end - start;
    if (duration <= 0) continue;

    // Check what occurs at midpoint of this interval
    const mid = (start + duration / 2) % 1440;

    const isSleep = isPointInInterval(mid, sleepStart, sleepDuration);
    const isWork = workStart !== null && isPointInInterval(mid, workStart, workDuration);
    const isEating = isPointInInterval(mid, eatingStart, eatingDuration);

    let type: TimelineBlock["type"] = "fasting";
    let label = "Fasting Window";

    if (isSleep) {
      type = "sleep";
      label = "Sleep";
    } else if (isWork) {
      type = "work";
      label = isEating ? "Work (Eating Permitted)" : "Work Shift";
    } else if (isEating) {
      type = "eating";
      label = "Eating Window";
    }

    blocks.push({
      type,
      label,
      startMinutes: start,
      durationMinutes: duration,
      startFormatted: minutesTo24Hour(start),
      endFormatted: minutesTo24Hour(end),
    });
  }

  return blocks;
}

function isPointInInterval(point: number, start: number, duration: number): boolean {
  const end = (start + duration) % 1440;
  if (start < end) {
    return point >= start && point < end;
  }
  // Crosses midnight
  return point >= start || point < end;
}

export default function NightShiftFastingScheduler() {
  const [inputs, setInputs] = useState<NightShiftInputs>(DEFAULT_NIGHT_SHIFT_INPUTS);
  const [activeDay, setActiveDay] = useState<DayType>("work");

  const shiftStartId = useId();
  const shiftEndId = useId();
  const sleepStartId = useId();
  const sleepEndId = useId();
  const protocolId = useId();
  const eatingPatternId = useId();

  const { workSchedule, offSchedule, validationError } = calculateNightShiftSchedule(inputs, activeDay);
  const currentSchedule = activeDay === "work" ? workSchedule : offSchedule;

  const handleReset = () => {
    setInputs(DEFAULT_NIGHT_SHIFT_INPUTS);
    setActiveDay("work");
  };

  return (
    <div
      id="night-shift-scheduler"
      className="p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container shadow-sm space-y-6"
    >
      {/* Widget Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-surface-container">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>Shift-Worker Fasting Tool</span>
          </div>
          <h3 className="font-headline text-xl sm:text-2xl font-bold text-on-surface">
            Night-Shift Fasting Scheduler
          </h3>
          <p className="text-xs sm:text-sm text-on-surface-variant">
            Enter your shift and sleep hours to generate customized 24-hour fasting and eating schedules for work nights and days off.
          </p>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 self-start sm:self-center px-3 py-1.5 rounded-lg border border-surface-container text-xs font-semibold text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Defaults</span>
        </button>
      </div>

      {/* Inputs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Shift Start & End */}
        <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high space-y-3">
          <div className="flex items-center gap-2 text-on-surface">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-bold">Shift Schedule</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor={shiftStartId} className="block text-[11px] font-semibold text-on-surface-variant mb-1">
                Shift Start
              </label>
              <input
                id={shiftStartId}
                type="time"
                value={inputs.shiftStart}
                onChange={(e) => setInputs({ ...inputs, shiftStart: e.target.value })}
                className="w-full px-2.5 py-2 rounded-lg bg-surface-container-lowest border border-outline text-xs sm:text-sm font-semibold text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor={shiftEndId} className="block text-[11px] font-semibold text-on-surface-variant mb-1">
                Shift End
              </label>
              <input
                id={shiftEndId}
                type="time"
                value={inputs.shiftEnd}
                onChange={(e) => setInputs({ ...inputs, shiftEnd: e.target.value })}
                className="w-full px-2.5 py-2 rounded-lg bg-surface-container-lowest border border-outline text-xs sm:text-sm font-semibold text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <span className="text-[10px] text-on-surface-variant block">Supports overnight spans (e.g. 19:00 to 07:00).</span>
        </div>

        {/* Sleep Start & End */}
        <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high space-y-3">
          <div className="flex items-center gap-2 text-on-surface">
            <Moon className="w-4 h-4 text-secondary" />
            <span className="text-xs sm:text-sm font-bold">Intended Sleep Window</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor={sleepStartId} className="block text-[11px] font-semibold text-on-surface-variant mb-1">
                Sleep Start
              </label>
              <input
                id={sleepStartId}
                type="time"
                value={inputs.sleepStart}
                onChange={(e) => setInputs({ ...inputs, sleepStart: e.target.value })}
                className="w-full px-2.5 py-2 rounded-lg bg-surface-container-lowest border border-outline text-xs sm:text-sm font-semibold text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor={sleepEndId} className="block text-[11px] font-semibold text-on-surface-variant mb-1">
                Wake Up
              </label>
              <input
                id={sleepEndId}
                type="time"
                value={inputs.sleepEnd}
                onChange={(e) => setInputs({ ...inputs, sleepEnd: e.target.value })}
                className="w-full px-2.5 py-2 rounded-lg bg-surface-container-lowest border border-outline text-xs sm:text-sm font-semibold text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <span className="text-[10px] text-on-surface-variant block">Daytime or anchor sleep window after shift.</span>
        </div>

        {/* Protocol & Meal Preference */}
        <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high space-y-3 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 text-on-surface">
            <Utensils className="w-4 h-4 text-tertiary" />
            <span className="text-xs sm:text-sm font-bold">Fasting Protocol</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor={protocolId} className="block text-[11px] font-semibold text-on-surface-variant mb-1">
                Protocol
              </label>
              <select
                id={protocolId}
                value={inputs.protocol}
                onChange={(e) => setInputs({ ...inputs, protocol: e.target.value as ShiftProtocol })}
                className="w-full px-2.5 py-2 rounded-lg bg-surface-container-lowest border border-outline text-xs sm:text-sm font-semibold text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="16-8">16:8 Protocol (8h eating)</option>
                <option value="14-10">14:10 Protocol (10h eating)</option>
                <option value="12-12">12:12 Protocol (12h eating)</option>
              </select>
            </div>
            <div>
              <label htmlFor={eatingPatternId} className="block text-[11px] font-semibold text-on-surface-variant mb-1">
                Meal Preference
              </label>
              <select
                id={eatingPatternId}
                value={inputs.eatingPattern}
                onChange={(e) => setInputs({ ...inputs, eatingPattern: e.target.value as EatingPatternPreference })}
                className="w-full px-2.5 py-2 rounded-lg bg-surface-container-lowest border border-outline text-xs sm:text-sm font-semibold text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="before-shift">Eat Prior to Shift</option>
                <option value="during-early-shift">Eat During Shift Start</option>
                <option value="split">Split Pre &amp; Mid Shift</option>
              </select>
            </div>
          </div>
          <span className="text-[10px] text-on-surface-variant block">Adjusts when your eating window opens on work days.</span>
        </div>
      </div>

      {/* Validation Alert */}
      {validationError && (
        <div className="p-4 rounded-xl bg-error/10 border border-error/30 text-error flex items-start gap-2.5 text-xs sm:text-sm">
          <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{validationError}</span>
        </div>
      )}

      {/* Day Type Toggle (Work Day vs Day Off) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
        <span className="text-xs sm:text-sm font-bold text-on-surface">
          Select Day Type to Inspect Timeline:
        </span>
        <div className="inline-flex p-1 rounded-xl bg-surface-container border border-surface-container-high self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveDay("work")}
            className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeDay === "work"
                ? "bg-primary text-on-primary shadow-sm"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            Work Day Schedule
          </button>
          <button
            type="button"
            onClick={() => setActiveDay("off")}
            className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeDay === "off"
                ? "bg-primary text-on-primary shadow-sm"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            Day-Off Schedule
          </button>
        </div>
      </div>

      {/* Schedule Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-tertiary">
            <Utensils className="w-3.5 h-3.5" />
            <span>Eating Window</span>
          </div>
          <div className="text-sm sm:text-base font-bold text-on-surface tabular-numbers">
            {currentSchedule.eatingWindowFormatted}
          </div>
          <span className="text-[11px] text-on-surface-variant block">Scheduled food intake</span>
        </div>

        <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-primary">
            <Hourglass className="w-3.5 h-3.5" />
            <span>Fasting Window</span>
          </div>
          <div className="text-sm sm:text-base font-bold text-on-surface tabular-numbers">
            {currentSchedule.fastingWindowFormatted}
          </div>
          <span className="text-[11px] text-on-surface-variant block">Water, black coffee, plain tea only</span>
        </div>

        <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-secondary">
            <Moon className="w-3.5 h-3.5" />
            <span>Sleep Window</span>
          </div>
          <div className="text-sm sm:text-base font-bold text-on-surface tabular-numbers">
            {currentSchedule.sleepWindowFormatted}
          </div>
          <span className="text-[11px] text-on-surface-variant block">Darkened room, eye mask</span>
        </div>

        <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-on-surface-variant">
            <Coffee className="w-3.5 h-3.5" />
            <span>Caffeine Cut-off</span>
          </div>
          <div className="text-sm sm:text-base font-bold text-on-surface tabular-numbers">
            {currentSchedule.caffeineCutoffFormatted}
          </div>
          <span className="text-[11px] text-on-surface-variant block">Protect sleep onset</span>
        </div>
      </div>

      {/* Visual 24-Hour Timeline Bar */}
      <div className="p-5 sm:p-6 rounded-2xl bg-surface-container border border-surface-container-high space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h4 className="font-headline text-sm sm:text-base font-bold text-on-surface flex items-center gap-2">
            <span>24-Hour Visual Schedule Timeline (00:00 to 24:00)</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-primary/10 text-primary">
              {activeDay === "work" ? "Work Night" : "Day Off"}
            </span>
          </h4>

          {/* Accessible Legend - distinguishes blocks by shape/border/pattern as well as color */}
          <div className="flex flex-wrap items-center gap-3 text-[11px] text-on-surface-variant">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-secondary/80 border border-secondary" />
              <span>Sleep</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-primary/80 border border-primary" />
              <span>Work</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-tertiary/80 border border-tertiary" />
              <span>Eating Window</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-surface-container-lowest border border-outline" />
              <span>Fasting Window</span>
            </span>
          </div>
        </div>

        {/* Timeline Bar */}
        <div className="w-full h-10 sm:h-12 rounded-xl overflow-hidden flex border border-surface-container-high shadow-inner bg-surface-container-lowest">
          {currentSchedule.blocks.map((block, idx) => {
            const widthPct = Math.max(0, (block.durationMinutes / 1440) * 100);
            if (widthPct <= 0) return null;

            let bgColor = "bg-surface-container-lowest text-on-surface-variant border-r border-surface-container";
            if (block.type === "sleep") {
              bgColor = "bg-secondary text-on-secondary border-r border-secondary-container font-semibold";
            } else if (block.type === "work") {
              bgColor = "bg-primary text-on-primary border-r border-primary-container font-semibold";
            } else if (block.type === "eating") {
              bgColor = "bg-tertiary text-on-tertiary border-r border-tertiary-container font-bold";
            }

            return (
              <div
                key={idx}
                style={{ width: `${widthPct}%` }}
                title={`${block.label}: ${block.startFormatted} - ${block.endFormatted} (${Math.round(block.durationMinutes / 60)}h)`}
                className={`h-full flex flex-col items-center justify-center text-[10px] sm:text-xs overflow-hidden px-1 transition-all ${bgColor}`}
              >
                <span className="truncate max-w-full text-center">{block.label}</span>
                <span className="text-[9px] opacity-80 tabular-numbers hidden sm:block truncate">
                  {block.startFormatted}–{block.endFormatted}
                </span>
              </div>
            );
          })}
        </div>

        {/* Hour Markers (00:00, 06:00, 12:00, 18:00, 24:00) */}
        <div className="flex justify-between text-[10px] text-on-surface-variant font-mono px-0.5">
          <span>00:00 (Midnight)</span>
          <span>06:00 (Dawn)</span>
          <span>12:00 (Midday)</span>
          <span>18:00 (Evening)</span>
          <span>24:00</span>
        </div>
      </div>

      {/* Warnings & Feedback */}
      {currentSchedule.warnings.length > 0 && (
        <div className="p-4 rounded-xl bg-warning/10 border border-warning/30 text-warning-foreground text-xs sm:text-sm space-y-1.5">
          {currentSchedule.warnings.map((w, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 flex-shrink-0 text-warning mt-0.5" />
              <span>{w}</span>
            </div>
          ))}
        </div>
      )}

      {/* Explanatory Copy & Rotating Transition Note */}
      <div className="space-y-4 pt-1">
        <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
          <h5 className="font-headline text-sm font-bold text-on-surface flex items-center gap-2">
            <Info className="w-4 h-4 text-primary" />
            <span>How This Schedule Was Constructed</span>
          </h5>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            {currentSchedule.explanation}
          </p>
        </div>

        {currentSchedule.transitionNote && (
          <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
            <h5 className="font-headline text-sm font-bold text-on-surface flex items-center gap-2">
              <Calendar className="w-4 h-4 text-secondary" />
              <span>Rotating-Shift &amp; Days-Off Transition Rule</span>
            </h5>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              {currentSchedule.transitionNote}
            </p>
          </div>
        )}
      </div>

      {/* Educational & Safety Disclaimer */}
      <div className="p-4 rounded-xl bg-surface-container-lowest border border-surface-container text-xs text-on-surface-variant leading-relaxed">
        <p>
          <strong>Non-Clinical Educational Guidance:</strong> Shift-work fasting schedules are illustrative models intended to help you coordinate daily routines and digestive rest. They do not constitute personalized medical advice. If you work in a safety-critical role (such as emergency medicine, aviation, commercial transport, or heavy industrial operations), or take medications requiring food timing, consult a qualified physician or occupational health professional before altering your eating patterns.
        </p>
      </div>
    </div>
  );
}
