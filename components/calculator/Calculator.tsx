"use client";

import React, { useState, useMemo, useEffect } from "react";
import { ProtocolId, CalculatorInputs } from "@/lib/calculator/types";
import { calculateSchedule } from "@/lib/calculator/engine";
import { validateCalculatorInputs } from "@/lib/validation/inputValidation";
import { ProtocolSelector } from "./ProtocolSelector";
import { TimeSelector } from "./TimeSelector";
import { OptionalBiometrics } from "./OptionalBiometrics";
import { ResultDashboard } from "./ResultDashboard";
import { CircularProgressTracker } from "../progress/CircularProgressTracker";
import { Sparkles, RefreshCw } from "lucide-react";

interface CalculatorProps {
  initialProtocolId?: ProtocolId;
  initialLastMealTime?: string;
}

export function Calculator({
  initialProtocolId = "16-8",
  initialLastMealTime = "20:00",
}: CalculatorProps) {
  const [protocolId, setProtocolId] = useState<ProtocolId>(initialProtocolId);
  const [lastMealTime, setLastMealTime] = useState<string>(initialLastMealTime);
  const [weightKg, setWeightKg] = useState<number | undefined>(undefined);
  const [goalWeightKg, setGoalWeightKg] = useState<number | undefined>(undefined);
  const [activityLevel, setActivityLevel] = useState<string>("moderate");
  const [objective, setObjective] = useState<string>("fat_loss");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  // Sync prop changes if parent/route provides specific protocol
  useEffect(() => {
    if (initialProtocolId) {
      setProtocolId(initialProtocolId);
    }
  }, [initialProtocolId]);

  // Listen to protocol selection triggers across the page
  useEffect(() => {
    const handleSetProtocol = (event: Event) => {
      const customEvent = event as CustomEvent<ProtocolId>;
      if (customEvent.detail) {
        setProtocolId(customEvent.detail);
        const calcEl = document.getElementById("calculator");
        if (calcEl) {
          calcEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("fasttrack-set-protocol", handleSetProtocol);
    return () => window.removeEventListener("fasttrack-set-protocol", handleSetProtocol);
  }, []);

  type ActivityUnion = "sedentary" | "light" | "moderate" | "athletic";
  type ObjectiveUnion = "autophagy" | "fat_loss" | "clarity" | "insulin";

  // Validation
  const validation = useMemo(() => {
    return validateCalculatorInputs({
      protocolId,
      lastMealTime,
      weightKg,
      goalWeightKg,
      activityLevel: activityLevel as ActivityUnion,
      objective: objective as ObjectiveUnion,
    });
  }, [protocolId, lastMealTime, weightKg, goalWeightKg, activityLevel, objective]);

  // Update schedule only from valid inputs, fallback to baseline 16:8 if input is invalid
  const schedule = useMemo(() => {
    const validInputs: CalculatorInputs = {
      protocolId,
      lastMealTime: validation.errors.lastMealTime ? "20:00" : lastMealTime,
      weightKg,
      goalWeightKg,
      activityLevel: activityLevel as ActivityUnion,
      objective: objective as ObjectiveUnion,
    };
    return calculateSchedule(validInputs);
  }, [protocolId, lastMealTime, weightKg, goalWeightKg, activityLevel, objective, validation.errors.lastMealTime]);

  const handleRecalculate = () => {
    setIsUpdating(true);
    if (!validation.isValid) {
      setErrors(validation.errors);
    } else {
      setErrors({});
    }
    setTimeout(() => {
      setIsUpdating(false);
    }, 200);
  };

  const handleTimeChange = (newTime: string) => {
    setLastMealTime(newTime);
    if (errors.lastMealTime) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.lastMealTime;
        return next;
      });
    }
  };

  const isWeekly = protocolId === "5-2";

  return (
    <div id="calculator" className="w-full scroll-mt-24">
      {/* Section Header */}
      <div className="mb-6 sm:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-3">
        <div>
          <span className="font-label-sm text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Scheduling Engine</span>
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-primary font-bold tracking-tight mt-1">
            FastTrack Schedule Builder
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-1 max-w-2xl">
            Configure your intermittent fasting protocol and evening meal timestamp for immediate circadian schedule synthesis.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 bg-surface-container-high px-3.5 py-1.5 rounded-full text-on-surface-variant font-label-md text-xs sm:text-sm self-start md:self-auto border border-surface-container">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span>Instant Engine Synced</span>
        </div>
      </div>

      {/* Main Calculator Layout: 12-column grid on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Interactive Inputs (5 columns) */}
        <div className="lg:col-span-5 bg-surface-container-lowest rounded-xl p-5 sm:p-6 border border-surface-container shadow-md flex flex-col gap-6">
          <ProtocolSelector
            selectedProtocolId={protocolId}
            onSelectProtocol={(id) => setProtocolId(id)}
          />

          <TimeSelector
            lastMealTime={lastMealTime}
            onChangeTime={handleTimeChange}
            error={errors.lastMealTime}
            disabled={isWeekly}
          />

          <OptionalBiometrics
            weightKg={weightKg}
            goalWeightKg={goalWeightKg}
            activityLevel={activityLevel}
            objective={objective}
            onChangeWeight={setWeightKg}
            onChangeGoalWeight={setGoalWeightKg}
            onChangeActivityLevel={setActivityLevel}
            onChangeObjective={setObjective}
            errors={errors}
          />

          <button
            type="button"
            onClick={handleRecalculate}
            disabled={isUpdating}
            className="w-full py-3 px-4 bg-primary text-on-primary font-headline text-sm sm:text-base font-bold rounded-lg hover:bg-primary-container shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            <RefreshCw className={`w-4 h-4 ${isUpdating ? "animate-spin" : ""}`} />
            <span>Update My Schedule</span>
          </button>
        </div>

        {/* Right Column: Real-time Calculation Result Dashboard (7 columns) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <CircularProgressTracker schedule={schedule} />
          <ResultDashboard schedule={schedule} />
        </div>
      </div>
    </div>
  );
}
