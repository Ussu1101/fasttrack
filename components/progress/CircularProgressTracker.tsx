"use client";

import React from "react";
import { NormalizedSchedule } from "@/lib/calculator/types";
import { formatMinutesRemaining } from "@/lib/time/format";
import { Sparkles, Moon, Sun, Clock } from "lucide-react";

interface CircularProgressTrackerProps {
  schedule: NormalizedSchedule;
  className?: string;
}

export function CircularProgressTracker({ schedule, className = "" }: CircularProgressTrackerProps) {
  // If weekly, show weekly visual dial
  if (schedule.isWeekly) {
    return (
      <div className={`relative flex flex-col items-center justify-center p-4 sm:p-6 bg-surface-container-lowest rounded-xl border border-surface-container shadow-md ${className}`}>
        <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-8 border-dashed border-secondary/40 flex flex-col items-center justify-center text-center p-4 sm:p-6 bg-surface-container-low/40">
          <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-secondary mb-1.5 sm:mb-2" />
          <span className="font-label-sm text-[11px] sm:text-xs text-secondary font-bold uppercase tracking-wider">
            Weekly Rhythm
          </span>
          <span className="font-headline text-2xl sm:text-3xl text-primary font-bold my-1">
            5 : 2
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">
            2 Days Reduced Calorie
          </span>
        </div>
        <div className="mt-4 text-center">
          <span className="font-label-md text-label-md text-on-surface font-semibold">
            Non-consecutive weekly pattern
          </span>
        </div>
      </div>
    );
  }

  // Radius and circumference for 240x240 SVG viewbox
  const radius = 95;
  const strokeWidth = 12;
  const circumference = 2 * Math.PI * radius; // ~596.9

  // Proportion of the 24h circle for fasting & eating
  const fastFraction = schedule.protocol.fastHours / 24;
  const fastStrokeLength = fastFraction * circumference;
  const eatFraction = schedule.protocol.eatingHours / 24;
  const eatStrokeLength = eatFraction * circumference;

  // Active progress along current phase (0% - 100%)
  const isFastingState =
    schedule.currentState === "FASTING" || schedule.currentState === "EATING_STARTS_SOON";
  const stateColor = isFastingState ? "#0F4C47" : "#F59E0B";
  const stateBgColor = isFastingState ? "text-primary" : "text-on-tertiary-container";

  // Center display text
  const timeRemainingText = formatMinutesRemaining(
    schedule.timeRemainingInCurrentStateMinutes
  );

  return (
    <div
      className={`relative flex flex-col items-center justify-center p-4 sm:p-6 bg-surface-container-lowest rounded-xl border border-surface-container shadow-md ${className}`}
      aria-label="Fasting and Eating Window Circular Tracker"
    >
      {/* Header status badge */}
      <div className="flex items-center justify-between w-full mb-3 px-1">
        <div className="flex items-center gap-1.5">
          {isFastingState ? (
            <Moon className="w-4 h-4 text-primary" />
          ) : (
            <Sun className="w-4 h-4 text-on-tertiary-container" />
          )}
          <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-on-surface">
            Circadian Arc
          </span>
        </div>
        <span
          className={`font-label-sm text-xs px-2.5 py-0.5 rounded-full font-semibold ${
            isFastingState
              ? "bg-surface-container text-primary"
              : "bg-tertiary-fixed/60 text-on-tertiary-fixed-variant"
          }`}
        >
          {schedule.protocol.ratio}
        </span>
      </div>

      {/* SVG Circular Dial */}
      <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] flex items-center justify-center">
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 240 240"
          role="img"
          aria-label={`Circadian dial showing ${schedule.protocol.fastHours} hours fasting and ${schedule.protocol.eatingHours} hours eating`}
        >
          <defs>
            <linearGradient id="fastGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#003430" />
              <stop offset="100%" stopColor="#38A169" />
            </linearGradient>
            <linearGradient id="eatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>

          {/* Background full track */}
          <circle
            cx="120"
            cy="120"
            r={radius}
            fill="none"
            stroke="#eaedff"
            strokeWidth={strokeWidth}
          />

          {/* Fasting Arc */}
          <circle
            cx="120"
            cy="120"
            r={radius}
            fill="none"
            stroke="url(#fastGradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={`${fastStrokeLength} ${circumference}`}
            strokeDashoffset="0"
            strokeLinecap="round"
          />

          {/* Eating Arc */}
          <circle
            cx="120"
            cy="120"
            r={radius}
            fill="none"
            stroke="url(#eatGradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={`${eatStrokeLength} ${circumference}`}
            strokeDashoffset={-fastStrokeLength}
            strokeLinecap="round"
          />

          {/* Inner Accent Ring */}
          <circle
            cx="120"
            cy="120"
            r={radius - 18}
            fill="none"
            stroke="#dae2fd"
            strokeWidth="2"
            strokeDasharray="6 6"
            opacity="0.7"
          />
        </svg>

        {/* Center Stage Telemetry (Contained, responsive Space Grotesk display without wrapping) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2 sm:p-3 pointer-events-none select-none">
          <span
            className={`font-label-sm text-[10px] sm:text-xs font-bold uppercase tracking-wider truncate max-w-[140px] sm:max-w-[170px] ${
              isFastingState ? "text-secondary" : "text-on-tertiary-container"
            }`}
          >
            {isFastingState ? "Fasting Window" : "Eating Window"}
          </span>

          <div className="flex flex-col items-center my-0.5 sm:my-1">
            <span className="font-headline text-2xl sm:text-4xl text-primary font-bold tracking-tight tabular-numbers leading-none">
              {Math.floor(Math.max(0, schedule.timeRemainingInCurrentStateMinutes) / 60) > 0
                ? `${Math.floor(Math.max(0, schedule.timeRemainingInCurrentStateMinutes) / 60)}h ${
                    Math.max(0, schedule.timeRemainingInCurrentStateMinutes) % 60 < 10
                      ? "0" + (Math.max(0, schedule.timeRemainingInCurrentStateMinutes) % 60)
                      : Math.max(0, schedule.timeRemainingInCurrentStateMinutes) % 60
                  }m`
                : `${Math.max(0, schedule.timeRemainingInCurrentStateMinutes) % 60}m`}
            </span>
            <span className="font-label-sm text-[10px] sm:text-xs text-on-surface-variant font-medium uppercase tracking-wider mt-0.5">
              Remaining
            </span>
          </div>

          <span className="font-label-sm text-[10px] sm:text-[11px] text-on-surface-variant flex items-center justify-center gap-1 font-medium truncate max-w-[150px] sm:max-w-[180px]">
            <Clock className="w-3 h-3 text-outline flex-shrink-0" />
            <span className="truncate">
              {isFastingState ? `First Meal: ${schedule.eatingStartTime12}` : `Fast Starts: ${schedule.fastStartTime12}`}
            </span>
          </span>
        </div>
      </div>

      {/* State Legend Pills */}
      <div className="grid grid-cols-2 gap-2 w-full mt-4 text-left">
        <div className="p-2 sm:p-2.5 rounded-lg bg-surface-container flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0" />
          <div className="flex flex-col min-w-0">
            <span className="font-label-sm text-xs text-on-surface font-semibold truncate">
              Fast: {schedule.fastStartTime12}
            </span>
            <span className="font-body-sm text-[11px] text-on-surface-variant truncate">
              {schedule.protocol.fastHours}h duration
            </span>
          </div>
        </div>

        <div className="p-2 sm:p-2.5 rounded-lg bg-tertiary-fixed/30 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container flex-shrink-0" />
          <div className="flex flex-col min-w-0">
            <span className="font-label-sm text-xs text-on-surface font-semibold truncate">
              Eat: {schedule.eatingStartTime12}
            </span>
            <span className="font-body-sm text-[11px] text-on-surface-variant truncate">
              {schedule.protocol.eatingHours}h duration
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
