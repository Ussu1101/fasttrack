export type ProtocolType = "daily" | "weekly";

export type DailyProtocolId = "12-12" | "14-10" | "16-8" | "18-6" | "20-4" | "omad";
export type WeeklyProtocolId = "5-2";
export type ProtocolId = DailyProtocolId | WeeklyProtocolId;

export interface ProtocolDefinition {
  id: ProtocolId;
  name: string;
  tagline: string;
  ratio: string;
  fastHours: number;
  eatingHours: number;
  type: ProtocolType;
  difficulty: "Gentle" | "Beginner" | "Optimal" | "Accelerated" | "Advanced" | "Intensive" | "Weekly Pattern";
  description: string;
  detailedOverview: string;
  exampleSchedule: string;
  bestFor: string;
  cellularMarker: string;
  guidelines?: string[];
  fastingDaysPerWeek?: number;
  fastingDaysPattern?: string;
  recommendedReducedCalories?: string;
}

export interface CalculatorInputs {
  protocolId: ProtocolId;
  /** Start time in 24h format "HH:mm", e.g. "20:00" */
  lastMealTime: string;
  weightKg?: number;
  goalWeightKg?: number;
  activityLevel?: "sedentary" | "light" | "moderate" | "athletic";
  objective?: "autophagy" | "fat_loss" | "clarity" | "insulin";
}

export type ScheduleState =
  | "FASTING"
  | "EATING_WINDOW"
  | "FASTING_STARTS_SOON"
  | "EATING_STARTS_SOON";

export interface NormalizedSchedule {
  protocol: ProtocolDefinition;
  isWeekly: boolean;
  // Numeric representations (minutes from 00:00 on day 0)
  fastStartMinutes: number; // e.g., 20 * 60 = 1200
  fastEndMinutes: number; // e.g., 1200 + 16 * 60 = 2160 (12:00 next day)
  eatingStartMinutes: number; // 2160
  eatingEndMinutes: number; // 2160 + 8 * 60 = 2640 (20:00 next day)
  fastDurationMinutes: number; // 960 (16 hrs)
  eatingDurationMinutes: number; // 480 (8 hrs)
  crossesMidnight: boolean;
  
  // Clean presentation timestamps (ISO local or formatted HH:mm)
  fastStartTime24: string; // "20:00"
  fastEndTime24: string; // "12:00"
  fastEndNextDay: boolean; // true
  eatingStartTime24: string; // "12:00"
  eatingEndTime24: string; // "20:00"

  // 12-hour formatted presentation
  fastStartTime12: string; // "8:00 PM"
  fastEndTime12: string; // "12:00 PM (Next Day)"
  eatingStartTime12: string; // "12:00 PM"
  eatingEndTime12: string; // "8:00 PM"

  // Current real-time relative telemetry
  currentState: ScheduleState;
  stateLabel: string;
  stateDescription: string;
  timeRemainingInCurrentStateMinutes: number;
  progressPercent: number; // 0 to 100 within current active phase
  currentFastHourElapsed?: number;
}

export interface MetabolicMilestone {
  id: string;
  hourRange: string;
  minHours: number;
  maxHours: number;
  title: string;
  summary: string;
  physiologicalContext: string;
  evidenceStrength: "Established" | "Clinical Observation" | "Emerging Research";
  colorClass: string;
}

export interface HorizonBarSegment {
  type: "fasting" | "eating";
  label: string;
  startHour: number; // 0 to 24
  endHour: number; // 0 to 24
  widthPercent: number; // 0 to 100
  timeRangeLabel: string;
}
