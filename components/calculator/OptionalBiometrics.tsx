"use client";

import React, { useState } from "react";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

interface OptionalBiometricsProps {
  weightKg?: number;
  goalWeightKg?: number;
  activityLevel: string;
  objective: string;
  onChangeWeight: (w?: number) => void;
  onChangeGoalWeight: (gw?: number) => void;
  onChangeActivityLevel: (act: string) => void;
  onChangeObjective: (obj: string) => void;
  errors?: Record<string, string>;
}

export function OptionalBiometrics({
  weightKg,
  goalWeightKg,
  activityLevel,
  objective,
  onChangeWeight,
  onChangeGoalWeight,
  onChangeActivityLevel,
  onChangeObjective,
  errors = {},
}: OptionalBiometricsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl bg-surface-container-low border border-surface-container p-3 sm:p-4">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between font-label-md text-xs sm:text-sm text-on-surface font-semibold text-left"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2 min-w-0 pr-2">
          <SlidersHorizontal className="w-4 h-4 text-primary flex-shrink-0" />
          <span>Personal Parameters &amp; Objectives (Optional)</span>
        </span>
        <ChevronDown
          className={`w-4 h-4 text-on-surface-variant flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="pt-4 flex flex-col gap-3.5 border-t border-surface-container/60 mt-3 animate-in fade-in-50">
          <div>
            <label
              htmlFor="objectiveSelect"
              className="font-label-sm text-xs text-on-surface-variant block mb-1"
            >
              Primary Fasting Focus
            </label>
            <select
              id="objectiveSelect"
              value={objective}
              onChange={(e) => onChangeObjective(e.target.value)}
              className="w-full bg-surface-container-lowest text-on-surface text-sm px-3 py-2 rounded-lg border border-surface-container focus:ring-2 focus:ring-primary"
            >
              <option value="fat_loss">Metabolic Flexibility & Energy Balance</option>
              <option value="autophagy">Cellular Maintenance & Digestive Rest</option>
              <option value="clarity">Cognitive Acuity & Daytime Focus</option>
              <option value="insulin">Circadian Eating Rhythm & Healthy Habits</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="weightInput"
                className="font-label-sm text-xs text-on-surface-variant block mb-1"
              >
                Current Weight (kg)
              </label>
              <input
                id="weightInput"
                type="number"
                min="20"
                max="500"
                step="0.5"
                placeholder="e.g. 75"
                value={weightKg !== undefined ? weightKg : ""}
                onChange={(e) => {
                  const val = e.target.value;
                  onChangeWeight(val === "" ? undefined : parseFloat(val));
                }}
                className={`w-full bg-surface-container-lowest text-on-surface text-sm px-3 py-2 rounded-lg border ${
                  errors.weightKg ? "border-error ring-1 ring-error" : "border-surface-container"
                } focus:ring-2 focus:ring-primary`}
              />
              {errors.weightKg && (
                <p className="text-[11px] text-error mt-1">{errors.weightKg}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="goalWeightInput"
                className="font-label-sm text-xs text-on-surface-variant block mb-1"
              >
                Goal Weight (kg)
              </label>
              <input
                id="goalWeightInput"
                type="number"
                min="20"
                max="500"
                step="0.5"
                placeholder="e.g. 70"
                value={goalWeightKg !== undefined ? goalWeightKg : ""}
                onChange={(e) => {
                  const val = e.target.value;
                  onChangeGoalWeight(val === "" ? undefined : parseFloat(val));
                }}
                className={`w-full bg-surface-container-lowest text-on-surface text-sm px-3 py-2 rounded-lg border ${
                  errors.goalWeightKg ? "border-error ring-1 ring-error" : "border-surface-container"
                } focus:ring-2 focus:ring-primary`}
              />
              {errors.goalWeightKg && (
                <p className="text-[11px] text-error mt-1">{errors.goalWeightKg}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="activitySelect"
              className="font-label-sm text-xs text-on-surface-variant block mb-1"
            >
              Typical Daily Activity Level
            </label>
            <select
              id="activitySelect"
              value={activityLevel}
              onChange={(e) => onChangeActivityLevel(e.target.value)}
              className="w-full bg-surface-container-lowest text-on-surface text-sm px-3 py-2 rounded-lg border border-surface-container focus:ring-2 focus:ring-primary"
            >
              <option value="sedentary">Sedentary (Desk work, minimal exercise)</option>
              <option value="light">Lightly Active (Light walking, casual movement)</option>
              <option value="moderate">Moderately Active (3-5 workouts / week)</option>
              <option value="athletic">High Athletic (Intense daily training / physical job)</option>
            </select>
          </div>

          <p className="font-body-sm text-[11px] text-on-surface-variant italic">
            * Note: FastTrack calculates fasting time windows. Optional parameters stay strictly in your local browser session and are never transmitted to our servers or used for guaranteed weight-loss claims.
          </p>
        </div>
      )}
    </div>
  );
}
