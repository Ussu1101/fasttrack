"use client";

import React, { useMemo } from "react";
import { NormalizedSchedule } from "@/lib/calculator/types";
import { calculateHorizonSegments } from "@/lib/calculator/engine";

interface HorizonBar24Props {
  schedule: NormalizedSchedule;
  className?: string;
}

export function HorizonBar24({ schedule, className = "" }: HorizonBar24Props) {
  const segments = useMemo(() => {
    if (schedule.isWeekly) return [];
    return calculateHorizonSegments(schedule.fastStartMinutes, schedule.fastDurationMinutes);
  }, [schedule]);

  // Calculate current time pin position [0 to 100%]
  const now = new Date();
  const currentMinutesToday = now.getHours() * 60 + now.getMinutes();
  const currentPinPercent = Math.min(100, Math.max(0, (currentMinutesToday / 1440) * 100));

  if (schedule.isWeekly) {
    return (
      <div className={`p-4 bg-surface-container-low rounded-xl flex flex-col gap-2 ${className}`}>
        <div className="flex items-center justify-between text-sm font-semibold text-on-surface">
          <span>5:2 Weekly Horizon</span>
          <span className="text-xs text-on-surface-variant font-normal">7-Day Rhythm</span>
        </div>
        <div className="grid grid-cols-7 gap-1.5 pt-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, idx) => {
            const isReduced = idx === 0 || idx === 3; // Mon & Thu
            return (
              <div
                key={day}
                className={`flex flex-col items-center p-1 sm:p-2 rounded-lg text-center text-[11px] sm:text-xs font-semibold ${
                  isReduced
                    ? "bg-primary text-on-primary shadow-sm"
                    : "bg-surface-container-lowest text-on-surface border border-surface-container"
                }`}
              >
                <span>{day}</span>
                <span className="text-[9px] sm:text-[10px] font-normal mt-0.5 opacity-90 truncate max-w-full">
                  {isReduced ? "500 kcal" : "Regular"}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-surface-container-low rounded-xl p-4 sm:p-5 flex flex-col gap-3 ${className}`}>
      {/* Title & Legend */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-on-surface">
        <span className="font-label-md text-sm font-bold">24-Hour Circadian Horizon Bar</span>
        <div className="flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container" />
            <span className="text-on-surface-variant font-medium">Fasting</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container" />
            <span className="text-on-surface-variant font-medium">Eating Window</span>
          </span>
        </div>
      </div>

      {/* The 24-Hour Horizon Track (DESIGN.md: continuous 16px-24px high horizontal bar with micro-stripes) */}
      <div
        className="relative w-full h-6 sm:h-7 rounded-md overflow-visible flex shadow-inner bg-surface-container-high my-1"
        role="progressbar"
        aria-label="24-hour daily fasting and eating window timeline"
      >
        <div className="relative w-full h-full rounded-md overflow-hidden flex">
          {segments.map((segment, index) => {
            const isFasting = segment.type === "fasting";
            return (
              <div
                key={`${segment.type}-${index}`}
                style={{
                  width: `${segment.widthPercent}%`,
                  background: isFasting
                    ? "#0F4C47"
                    : "repeating-linear-gradient(45deg, #F59E0B, #F59E0B 6px, #D97706 6px, #D97706 12px)",
                }}
                className={`h-full flex items-center justify-center text-[10px] font-semibold tracking-wider uppercase transition-all duration-300 px-1 truncate select-none ${
                  isFasting ? "text-on-primary" : "text-white"
                }`}
                title={`${segment.label}: ${segment.timeRangeLabel}`}
              >
                {segment.widthPercent > 20 ? segment.label : ""}
              </div>
            );
          })}
        </div>

        {/* Current Time Cursor (DESIGN.md: 2px vertical white line with an exterior dark slate teardrop head) */}
        <div
          className="absolute -top-1.5 bottom-0 w-[2px] bg-white shadow-md flex flex-col items-center pointer-events-none z-20"
          style={{ left: `${currentPinPercent}%` }}
        >
          {/* Teardrop pointer head */}
          <div className="w-2.5 h-2.5 bg-[#0F172A] rounded-full ring-1 ring-white shadow-sm flex-shrink-0 -mt-1" />
        </div>
      </div>

      {/* Hour Milestones */}
      <div className="flex justify-between font-label-sm text-[11px] sm:text-xs text-on-surface-variant px-0.5 tabular-numbers select-none">
        <span>00:00 (Midnight)</span>
        <span className="hidden sm:inline">06:00 AM</span>
        <span>12:00 PM (Noon)</span>
        <span className="hidden sm:inline">06:00 PM</span>
        <span>24:00</span>
      </div>
    </div>
  );
}
