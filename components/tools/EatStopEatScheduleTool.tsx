"use client";

import React, { useState, useId } from "react";
import Link from "next/link";
import {
  Clock,
  Calendar,
  Utensils,
  Hourglass,
  RotateCcw,
  Sparkles,
  Info,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { parseTimeToMinutes } from "../../lib/time/parser";
import { minutesTo24Hour, minutesTo12Hour } from "../../lib/time/format";

export type MealAnchorType = "dinner-to-dinner" | "lunch-to-lunch" | "breakfast-to-breakfast";
export type FastFrequency = "1x" | "2x";

export interface EatStopEatInputs {
  anchorType: MealAnchorType;
  startTime: string; // "19:00"
  fastingDay1: string; // "Monday"
  frequency: FastFrequency;
  fastingDay2?: string; // "Thursday"
}

export interface Scheduled24HourFast {
  startFormatted12: string;
  startFormatted24: string;
  endFormatted12: string;
  endFormatted24: string;
  durationHours: number;
  fastDayName: string;
  endDayName: string;
  secondFast?: {
    startFormatted12: string;
    endFormatted12: string;
    fastDayName: string;
    endDayName: string;
  };
  explanation: string;
  refeedingNotice: string;
}

export const DEFAULT_EAT_STOP_EAT_INPUTS: EatStopEatInputs = {
  anchorType: "dinner-to-dinner",
  startTime: "19:00",
  fastingDay1: "Monday",
  frequency: "1x",
  fastingDay2: "Thursday",
};

const NEXT_DAY_MAP: Record<string, string> = {
  Monday: "Tuesday",
  Tuesday: "Wednesday",
  Wednesday: "Thursday",
  Thursday: "Friday",
  Friday: "Saturday",
  Saturday: "Sunday",
  Sunday: "Monday",
};

export function calculateEatStopEatSchedule(inputs: EatStopEatInputs): {
  schedule: Scheduled24HourFast;
  validationError?: string;
} {
  const parsedStart = parseTimeToMinutes(inputs.startTime);
  if (!parsedStart.valid) {
    return {
      schedule: createFallbackSchedule(),
      validationError: "Please enter a valid start time in HH:mm format.",
    };
  }

  const startMinutes = parsedStart.minutes;
  // A true 24-hour fast ends at the exact same clock time 24 hours later (1440 minutes)
  const endMinutes = (startMinutes + 1440) % 1440; // Exactly same time next calendar day

  const startFormatted12 = minutesTo12Hour(startMinutes);
  const startFormatted24 = minutesTo24Hour(startMinutes);
  const endFormatted12 = minutesTo12Hour(endMinutes);
  const endFormatted24 = minutesTo24Hour(endMinutes);

  const endDay1 = NEXT_DAY_MAP[inputs.fastingDay1] || "Next Day";

  let secondFastData = undefined;
  if (inputs.frequency === "2x" && inputs.fastingDay2) {
    const endDay2 = NEXT_DAY_MAP[inputs.fastingDay2] || "Next Day";
    secondFastData = {
      startFormatted12,
      endFormatted12,
      fastDayName: inputs.fastingDay2,
      endDayName: endDay2,
    };
  }

  const mealName =
    inputs.anchorType === "dinner-to-dinner"
      ? "dinner"
      : inputs.anchorType === "lunch-to-lunch"
      ? "lunch"
      : "breakfast";

  const explanation = `Your 24-hour fast begins immediately when you finish your ${inputs.fastingDay1} ${mealName} at ${startFormatted12}. You do not consume food for the next 24 consecutive hours. Your fast concludes on ${endDay1} at ${endFormatted12}, when you resume ordinary eating with your scheduled ${mealName}.`;

  const refeedingNotice = `Because you eat a meal on every calendar day (an early ${mealName} on ${inputs.fastingDay1} and a normal ${mealName} on ${endDay1}), you never experience a calendar day without food.`;

  return {
    schedule: {
      startFormatted12,
      startFormatted24,
      endFormatted12,
      endFormatted24,
      durationHours: 24,
      fastDayName: inputs.fastingDay1,
      endDayName: endDay1,
      secondFast: secondFastData,
      explanation,
      refeedingNotice,
    },
  };
}

function createFallbackSchedule(): Scheduled24HourFast {
  return {
    startFormatted12: "7:00 PM",
    startFormatted24: "19:00",
    endFormatted12: "7:00 PM",
    endFormatted24: "19:00",
    durationHours: 24,
    fastDayName: "Monday",
    endDayName: "Tuesday",
    explanation:
      "Your 24-hour fast begins Monday at 7:00 PM following dinner and concludes Tuesday at 7:00 PM with dinner.",
    refeedingNotice: "You eat on both days, preserving daily meal structure while achieving a 24-hour digestive pause.",
  };
}

export default function EatStopEatScheduleTool() {
  const [inputs, setInputs] = useState<EatStopEatInputs>(DEFAULT_EAT_STOP_EAT_INPUTS);

  const anchorId = useId();
  const timeId = useId();
  const day1Id = useId();
  const freqId = useId();
  const day2Id = useId();

  const { schedule, validationError } = calculateEatStopEatSchedule(inputs);

  const handleReset = () => {
    setInputs(DEFAULT_EAT_STOP_EAT_INPUTS);
  };

  const handleAnchorChange = (type: MealAnchorType) => {
    let defaultTime = "19:00";
    if (type === "lunch-to-lunch") defaultTime = "13:00";
    if (type === "breakfast-to-breakfast") defaultTime = "08:00";
    setInputs((prev) => ({ ...prev, anchorType: type, startTime: defaultTime }));
  };

  return (
    <div
      id="schedule-tool"
      className="p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container shadow-sm space-y-6"
    >
      {/* Widget Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-surface-container">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Hourglass className="w-3.5 h-3.5" />
            <span>Interactive 24-Hour Schedule Generator</span>
          </div>
          <h3 className="font-headline text-xl sm:text-2xl font-bold text-on-surface">
            24-Hour Fast (Eat Stop Eat) Schedule Tool
          </h3>
          <p className="text-xs sm:text-sm text-on-surface-variant">
            Model an illustrative 24-hour fasting interval from your chosen starting meal to the corresponding meal 24 hours later.
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

      {/* Input Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Anchor Meal */}
        <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
          <label htmlFor={anchorId} className="block text-xs font-bold text-on-surface">
            Anchor Meal
          </label>
          <select
            id={anchorId}
            value={inputs.anchorType}
            onChange={(e) => handleAnchorChange(e.target.value as MealAnchorType)}
            className="w-full px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline text-xs sm:text-sm font-semibold text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="dinner-to-dinner">Dinner-to-Dinner (Standard)</option>
            <option value="lunch-to-lunch">Lunch-to-Lunch</option>
            <option value="breakfast-to-breakfast">Breakfast-to-Breakfast</option>
          </select>
          <span className="text-[10px] text-on-surface-variant block">
            Most individuals find dinner-to-dinner easiest.
          </span>
        </div>

        {/* Start Time */}
        <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
          <label htmlFor={timeId} className="block text-xs font-bold text-on-surface">
            Final Meal Concludes At
          </label>
          <input
            id={timeId}
            type="time"
            value={inputs.startTime}
            onChange={(e) => setInputs({ ...inputs, startTime: e.target.value })}
            className="w-full px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline text-xs sm:text-sm font-semibold text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <span className="text-[10px] text-on-surface-variant block">
            The exact minute you swallow your final bite.
          </span>
        </div>

        {/* Weekly Fasting Day */}
        <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
          <label htmlFor={day1Id} className="block text-xs font-bold text-on-surface">
            Primary Fast Day
          </label>
          <select
            id={day1Id}
            value={inputs.fastingDay1}
            onChange={(e) => setInputs({ ...inputs, fastingDay1: e.target.value })}
            className="w-full px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline text-xs sm:text-sm font-semibold text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
          <span className="text-[10px] text-on-surface-variant block">
            Day when your fast starts.
          </span>
        </div>

        {/* Frequency (1x or 2x per week) */}
        <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
          <label htmlFor={freqId} className="block text-xs font-bold text-on-surface">
            Weekly Frequency
          </label>
          <select
            id={freqId}
            value={inputs.frequency}
            onChange={(e) => setInputs({ ...inputs, frequency: e.target.value as FastFrequency })}
            className="w-full px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline text-xs sm:text-sm font-semibold text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="1x">1x per week (Conservative)</option>
            <option value="2x">2x per week (Non-consecutive)</option>
          </select>
          <span className="text-[10px] text-on-surface-variant block">
            Beginners should only attempt 1x weekly.
          </span>
        </div>
      </div>

      {/* Optional Second Fast Day Selector */}
      {inputs.frequency === "2x" && (
        <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <label htmlFor={day2Id} className="font-bold text-on-surface block mb-1">
              Second Non-Consecutive Fast Day:
            </label>
            <span className="text-on-surface-variant">
              Ensure at least 48 to 72 hours of normal feeding between 24-hour fasts.
            </span>
          </div>
          <select
            id={day2Id}
            value={inputs.fastingDay2}
            onChange={(e) => setInputs({ ...inputs, fastingDay2: e.target.value })}
            className="px-3 py-1.5 rounded-lg bg-surface-container-lowest border border-outline text-xs sm:text-sm font-semibold text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Wednesday">Wednesday</option>
          </select>
        </div>
      )}

      {/* Validation Message */}
      {validationError && (
        <div className="p-4 rounded-xl bg-error/10 border border-error/30 text-error flex items-start gap-2.5 text-xs sm:text-sm">
          <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{validationError}</span>
        </div>
      )}

      {/* Visual Schedule Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: Fast Start */}
        <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-primary">
            <Utensils className="w-4 h-4" />
            <span>Fast Begins</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-on-surface tabular-numbers">
            {schedule.startFormatted12}
          </div>
          <span className="text-xs text-on-surface-variant block font-medium">
            {schedule.fastDayName} Evening (Post-Meal)
          </span>
        </div>

        {/* Card 2: Elapsed Fasting Window */}
        <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-secondary">
            <Hourglass className="w-4 h-4" />
            <span>Fasting Duration</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-on-surface tabular-numbers">
            {schedule.durationHours} Hours Elapsed
          </div>
          <span className="text-xs text-on-surface-variant block font-medium">
            Zero Calorie Water / Tea Window
          </span>
        </div>

        {/* Card 3: Fast Concludes */}
        <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-tertiary">
            <CheckCircle2 className="w-4 h-4" />
            <span>Fast Concludes</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-on-surface tabular-numbers">
            {schedule.endFormatted12}
          </div>
          <span className="text-xs text-on-surface-variant block font-medium">
            {schedule.endDayName} Evening (Ordinary Meal)
          </span>
        </div>
      </div>

      {/* 24-Hour Horizon Progress Visualization */}
      <div className="p-5 sm:p-6 rounded-2xl bg-surface-container border border-surface-container-high space-y-4">
        <div className="flex items-center justify-between text-xs font-bold text-on-surface">
          <span>Continuous 24-Hour Elapsed Cycle</span>
          <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
            {schedule.fastDayName} {schedule.startFormatted12} → {schedule.endDayName} {schedule.endFormatted12}
          </span>
        </div>

        {/* Visual 4-Stage Breakdown Bar */}
        <div className="grid grid-cols-4 gap-1 h-10 rounded-xl overflow-hidden text-center text-[10px] sm:text-xs font-semibold border border-surface-container-high">
          <div className="bg-primary/20 text-primary flex items-center justify-center p-1 border-r border-surface-container">
            <span>0–6h: Digestion</span>
          </div>
          <div className="bg-primary/40 text-primary flex items-center justify-center p-1 border-r border-surface-container">
            <span>6–12h: Overnight</span>
          </div>
          <div className="bg-primary/70 text-on-primary flex items-center justify-center p-1 border-r border-surface-container">
            <span>12–18h: Daytime Pause</span>
          </div>
          <div className="bg-primary text-on-primary flex items-center justify-center p-1">
            <span>18–24h: Pre-Dinner</span>
          </div>
        </div>

        <div className="flex justify-between text-[11px] text-on-surface-variant">
          <span>Final Bite Swallowed</span>
          <span>Wake Up (Fasted)</span>
          <span>Skip Midday Meal</span>
          <span>Resume Normal Dinner</span>
        </div>
      </div>

      {/* Explanatory Schedule Text */}
      <div className="p-4 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
        <h5 className="font-headline text-sm font-bold text-on-surface flex items-center gap-2">
          <Info className="w-4 h-4 text-primary" />
          <span>Understanding Your Schedule</span>
        </h5>
        <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          {schedule.explanation}
        </p>
        <p className="text-xs text-on-surface-variant leading-relaxed pt-1 border-t border-surface-container-high">
          <strong>Key Distinction:</strong> {schedule.refeedingNotice}
        </p>
      </div>

      {/* Educational Notice */}
      <div className="p-4 rounded-xl bg-surface-container-lowest border border-surface-container text-xs text-on-surface-variant leading-relaxed">
        <p>
          <strong>Educational Notice:</strong> This schedule generator is an illustrative demonstration of how a 24-hour interval is structured across calendar days. It is not an individual medical prescription or a recommendation that every person should undertake a 24-hour fast. Prolonged fasting imposes substantial physiological demand; consult a qualified healthcare provider before initiating 24-hour fasts.
        </p>
      </div>
    </div>
  );
}
