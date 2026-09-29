"use client";

import React from "react";
import { Clock } from "lucide-react";

interface TimeSelectorProps {
  lastMealTime: string;
  onChangeTime: (time: string) => void;
  error?: string;
  disabled?: boolean;
}

export function TimeSelector({
  lastMealTime,
  onChangeTime,
  error,
  disabled = false,
}: TimeSelectorProps) {
  const presets = [
    { label: "6:00 PM", value: "18:00" },
    { label: "7:00 PM", value: "19:00" },
    { label: "8:00 PM", value: "20:00" },
    { label: "9:00 PM", value: "21:00" },
  ];

  return (
    <div className={`flex flex-col gap-2.5 ${disabled ? "opacity-50 pointer-events-none" : ""}`}>
      <div className="flex items-center justify-between">
        <label htmlFor="lastMealTimeInput" className="font-headline text-base sm:text-lg text-on-surface font-semibold flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-primary" />
          <span>2. Last Meal Finish Time</span>
        </label>
        <span className="font-label-sm text-xs text-on-surface-variant">Fasting Start</span>
      </div>

      {/* Quick Preset Buttons */}
      <div className="grid grid-cols-4 gap-1.5">
        {presets.map((preset) => {
          const isSelected = lastMealTime === preset.value;
          return (
            <button
              key={preset.value}
              type="button"
              onClick={() => onChangeTime(preset.value)}
              className={`py-2 px-1 text-center rounded-lg font-label-md text-xs sm:text-sm font-semibold transition-all ${
                isSelected
                  ? "bg-primary text-on-primary shadow-sm"
                  : "bg-surface-container text-on-surface hover:bg-surface-container-high"
              }`}
            >
              {preset.label}
            </button>
          );
        })}
      </div>

      {/* Custom Time Input */}
      <div className="flex items-center justify-between pt-1">
        <label htmlFor="lastMealTimeInput" className="font-label-sm text-xs text-on-surface-variant font-medium">
          Custom Exact Time:
        </label>
        <input
          id="lastMealTimeInput"
          type="time"
          value={lastMealTime}
          onChange={(e) => onChangeTime(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? "time-error" : undefined}
          className="px-3 py-1.5 rounded-lg bg-surface-container-low border border-surface-container text-on-surface font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer tabular-numbers"
        />
      </div>

      {error && (
        <p id="time-error" className="text-xs text-error font-medium" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
