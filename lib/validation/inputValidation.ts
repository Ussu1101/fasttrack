import { CalculatorInputs, ProtocolId } from "../calculator/types";
import { PROTOCOLS } from "../calculator/protocols";
import { parseTimeToMinutes } from "../time/parser";

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  cleanedInputs?: CalculatorInputs;
}

export function validateCalculatorInputs(inputs: Partial<CalculatorInputs>): ValidationResult {
  const errors: Record<string, string> = {};

  // 1. Protocol validation
  if (!inputs.protocolId) {
    errors.protocolId = "Please select a fasting method.";
  } else if (!PROTOCOLS[inputs.protocolId as ProtocolId]) {
    errors.protocolId = "Selected fasting method is invalid.";
  }

  // 2. Start time validation (required for daily protocols, optional for weekly)
  const isWeekly = inputs.protocolId === "5-2";
  if (!isWeekly) {
    if (!inputs.lastMealTime) {
      errors.lastMealTime = "Enter a valid time.";
    } else {
      const parsed = parseTimeToMinutes(inputs.lastMealTime);
      if (!parsed.valid) {
        errors.lastMealTime = parsed.error || "Enter a valid time.";
      }
    }
  }

  // 3. Optional Weight Validation
  let cleanWeight: number | undefined = undefined;
  if (inputs.weightKg !== undefined && inputs.weightKg !== null && String(inputs.weightKg).trim() !== "") {
    const w = Number(inputs.weightKg);
    if (isNaN(w) || !isFinite(w) || w <= 0) {
      errors.weightKg = "Weight must be greater than 0.";
    } else if (w < 20 || w > 500) {
      errors.weightKg = "Please enter a realistic weight (20 kg - 500 kg).";
    } else {
      cleanWeight = w;
    }
  }

  // 4. Optional Goal Weight Validation
  let cleanGoalWeight: number | undefined = undefined;
  if (inputs.goalWeightKg !== undefined && inputs.goalWeightKg !== null && String(inputs.goalWeightKg).trim() !== "") {
    const gw = Number(inputs.goalWeightKg);
    if (isNaN(gw) || !isFinite(gw) || gw <= 0) {
      errors.goalWeightKg = "Goal weight must be greater than 0.";
    } else if (gw < 20 || gw > 500) {
      errors.goalWeightKg = "Please enter a realistic goal weight (20 kg - 500 kg).";
    } else {
      cleanGoalWeight = gw;
    }
  }

  const isValid = Object.keys(errors).length === 0;

  return {
    isValid,
    errors,
    cleanedInputs: isValid
      ? {
          protocolId: inputs.protocolId as ProtocolId,
          lastMealTime: inputs.lastMealTime || "20:00",
          weightKg: cleanWeight,
          goalWeightKg: cleanGoalWeight,
          activityLevel: inputs.activityLevel || "moderate",
          objective: inputs.objective || "fat_loss",
        }
      : undefined,
  };
}
