import {
  CalculatorInputs,
  NormalizedSchedule,
  ProtocolDefinition,
  ScheduleState,
  HorizonBarSegment,
} from "./types";
import { PROTOCOLS } from "./protocols";
import { parseTimeToMinutes } from "../time/parser";
import { minutesTo12Hour, minutesTo24Hour } from "../time/format";

export interface CalculationOptions {
  /** Optional reference time "HH:mm" for deterministic testing of current state */
  referenceCurrentTime?: string;
  referenceDate?: Date;
}

/**
 * Pure calculation engine for FastTrack.
 * Performs all arithmetic with integers (minutes) to eliminate string-comparison bugs.
 */
export function calculateSchedule(
  inputs: CalculatorInputs,
  options?: CalculationOptions
): NormalizedSchedule {
  const protocol: ProtocolDefinition = PROTOCOLS[inputs.protocolId] || PROTOCOLS["16-8"];

  // Weekly protocol handling (5:2)
  if (protocol.type === "weekly") {
    return calculateWeeklySchedule(protocol);
  }

  // Daily protocol handling
  const parsedTime = parseTimeToMinutes(inputs.lastMealTime);
  const fastStartMinutes = parsedTime.valid ? parsedTime.minutes : 20 * 60; // fallback to 20:00

  const fastDurationMinutes = protocol.fastHours * 60;
  const eatingDurationMinutes = protocol.eatingHours * 60;

  // Total daily cycle is 24 hours (1440 minutes)
  const fastEndMinutes = fastStartMinutes + fastDurationMinutes;
  const eatingStartMinutes = fastEndMinutes;
  const eatingEndMinutes = eatingStartMinutes + eatingDurationMinutes;

  const crossesMidnight = fastEndMinutes >= 1440;
  const fastEndDayMinutes = fastEndMinutes % 1440;
  const eatingEndDayMinutes = eatingEndMinutes % 1440;

  // Determine current relative state
  const stateInfo = determineScheduleState(
    fastStartMinutes,
    fastDurationMinutes,
    eatingDurationMinutes,
    options
  );

  return {
    protocol,
    isWeekly: false,
    fastStartMinutes,
    fastEndMinutes,
    eatingStartMinutes,
    eatingEndMinutes,
    fastDurationMinutes,
    eatingDurationMinutes,
    crossesMidnight,

    fastStartTime24: minutesTo24Hour(fastStartMinutes),
    fastEndTime24: minutesTo24Hour(fastEndMinutes),
    fastEndNextDay: crossesMidnight,
    eatingStartTime24: minutesTo24Hour(eatingStartMinutes),
    eatingEndTime24: minutesTo24Hour(eatingEndMinutes),

    fastStartTime12: minutesTo12Hour(fastStartMinutes),
    fastEndTime12: minutesTo12Hour(fastEndMinutes, {
      showNextDay: crossesMidnight,
      baseDayMinutes: fastStartMinutes,
    }),
    eatingStartTime12: minutesTo12Hour(eatingStartMinutes),
    eatingEndTime12: minutesTo12Hour(eatingEndMinutes),

    currentState: stateInfo.state,
    stateLabel: stateInfo.label,
    stateDescription: stateInfo.description,
    timeRemainingInCurrentStateMinutes: stateInfo.timeRemainingMinutes,
    progressPercent: stateInfo.progressPercent,
    currentFastHourElapsed: stateInfo.fastHoursElapsed,
  };
}

/**
 * Handles weekly 5:2 protocol normalization.
 * 5:2 is NOT an hourly daily fasting window.
 */
function calculateWeeklySchedule(protocol: ProtocolDefinition): NormalizedSchedule {
  return {
    protocol,
    isWeekly: true,
    fastStartMinutes: 0,
    fastEndMinutes: 0,
    eatingStartMinutes: 0,
    eatingEndMinutes: 0,
    fastDurationMinutes: 0,
    eatingDurationMinutes: 0,
    crossesMidnight: false,

    fastStartTime24: "N/A",
    fastEndTime24: "N/A",
    fastEndNextDay: false,
    eatingStartTime24: "N/A",
    eatingEndTime24: "N/A",

    fastStartTime12: "Flexible",
    fastEndTime12: "Weekly Plan",
    eatingStartTime12: "5 Normal Days",
    eatingEndTime12: "2 Reduced Days",

    currentState: "EATING_WINDOW",
    stateLabel: "5:2 WEEKLY CYCLE",
    stateDescription: "5 days regular intake, 2 non-consecutive reduced-calorie days (~500–600 kcal).",
    timeRemainingInCurrentStateMinutes: 0,
    progressPercent: 100,
  };
}

/**
 * Calculates current real-time schedule state with respect to the user's local clock.
 */
export function determineScheduleState(
  fastStartMinutes: number,
  fastDurationMinutes: number,
  eatingDurationMinutes: number,
  options?: CalculationOptions
): {
  state: ScheduleState;
  label: string;
  description: string;
  timeRemainingMinutes: number;
  progressPercent: number;
  fastHoursElapsed?: number;
} {
  let nowMinutes: number;

  if (options?.referenceCurrentTime) {
    const parsed = parseTimeToMinutes(options.referenceCurrentTime);
    nowMinutes = parsed.valid ? parsed.minutes : 720;
  } else if (options?.referenceDate) {
    nowMinutes = options.referenceDate.getHours() * 60 + options.referenceDate.getMinutes();
  } else {
    const now = new Date();
    nowMinutes = now.getHours() * 60 + now.getMinutes();
  }

  // Elapsed minutes since the most recent fastStart (cycling every 1440 min)
  const elapsedFromFastStart = ((nowMinutes - fastStartMinutes) % 1440 + 1440) % 1440;

  if (elapsedFromFastStart < fastDurationMinutes) {
    // Currently inside the fasting window
    const fastRemaining = fastDurationMinutes - elapsedFromFastStart;
    const progress = Math.min(100, Math.max(0, (elapsedFromFastStart / fastDurationMinutes) * 100));
    const hoursElapsed = Math.floor(elapsedFromFastStart / 60);

    if (fastRemaining <= 60) {
      return {
        state: "EATING_STARTS_SOON",
        label: "EATING WINDOW STARTS SOON",
        description: `Break-fast in ${fastRemaining} minutes. Prepare your first light meal.`,
        timeRemainingMinutes: fastRemaining,
        progressPercent: progress,
        fastHoursElapsed: hoursElapsed,
      };
    }

    return {
      state: "FASTING",
      label: "FASTING IN PROGRESS",
      description: `Active metabolic rest. ${Math.floor(fastRemaining / 60)}h ${fastRemaining % 60}m until first meal.`,
      timeRemainingMinutes: fastRemaining,
      progressPercent: progress,
      fastHoursElapsed: hoursElapsed,
    };
  } else {
    // Currently inside the eating window
    const elapsedInEating = elapsedFromFastStart - fastDurationMinutes;
    const eatingRemaining = eatingDurationMinutes - elapsedInEating;
    const progress = Math.min(100, Math.max(0, (elapsedInEating / eatingDurationMinutes) * 100));

    if (eatingRemaining <= 60 && eatingRemaining > 0) {
      return {
        state: "FASTING_STARTS_SOON",
        label: "FASTING STARTS SOON",
        description: `Eating window closes in ${eatingRemaining} minutes. Finish last hydration or meal.`,
        timeRemainingMinutes: eatingRemaining,
        progressPercent: progress,
      };
    }

    return {
      state: "EATING_WINDOW",
      label: "EATING WINDOW ACTIVE",
      description: `Nourishment window open. ${Math.floor(eatingRemaining / 60)}h ${eatingRemaining % 60}m remaining.`,
      timeRemainingMinutes: eatingRemaining,
      progressPercent: progress,
    };
  }
}

/**
 * Computes exact 00:00 - 24:00 horizon segments for visual timeline display.
 * Slices the 24-hour day into fasting and eating segments without negative widths.
 */
export function calculateHorizonSegments(
  fastStartMinutes: number,
  fastDurationMinutes: number
): HorizonBarSegment[] {
  // Normalize fastStart to [0, 1439]
  const start = ((fastStartMinutes % 1440) + 1440) % 1440;
  const end = start + fastDurationMinutes;

  // An interval in a single 24-hour period from 0 to 1440 min
  // Segments are ordered 00:00 to 24:00
  const segments: HorizonBarSegment[] = [];

  if (end <= 1440) {
    // Fast fits entirely within the calendar day:
    // [0, start] = Eating
    // [start, end] = Fasting
    // [end, 1440] = Eating
    if (start > 0) {
      segments.push({
        type: "eating",
        label: "Eating Window",
        startHour: 0,
        endHour: start / 60,
        widthPercent: (start / 1440) * 100,
        timeRangeLabel: `00:00 – ${minutesTo12Hour(start)}`,
      });
    }

    segments.push({
      type: "fasting",
      label: "Fasting Window",
      startHour: start / 60,
      endHour: end / 60,
      widthPercent: (fastDurationMinutes / 1440) * 100,
      timeRangeLabel: `${minutesTo12Hour(start)} – ${minutesTo12Hour(end)}`,
    });

    if (end < 1440) {
      segments.push({
        type: "eating",
        label: "Eating Window",
        startHour: end / 60,
        endHour: 24,
        widthPercent: ((1440 - end) / 1440) * 100,
        timeRangeLabel: `${minutesTo12Hour(end)} – 24:00`,
      });
    }
  } else {
    // Fast crosses midnight!
    // [0, end % 1440] = Fasting (continued from previous day)
    // [end % 1440, start] = Eating Window
    // [start, 1440] = Fasting (starts today)
    const morningFastEnd = end % 1440;

    if (morningFastEnd > 0) {
      segments.push({
        type: "fasting",
        label: "Fast Continues",
        startHour: 0,
        endHour: morningFastEnd / 60,
        widthPercent: (morningFastEnd / 1440) * 100,
        timeRangeLabel: `00:00 – ${minutesTo12Hour(morningFastEnd)}`,
      });
    }

    if (start > morningFastEnd) {
      const eatDuration = start - morningFastEnd;
      segments.push({
        type: "eating",
        label: "Eating Window",
        startHour: morningFastEnd / 60,
        endHour: start / 60,
        widthPercent: (eatDuration / 1440) * 100,
        timeRangeLabel: `${minutesTo12Hour(morningFastEnd)} – ${minutesTo12Hour(start)}`,
      });
    }

    if (start < 1440) {
      const eveningFastDuration = 1440 - start;
      segments.push({
        type: "fasting",
        label: "Fast Starts",
        startHour: start / 60,
        endHour: 24,
        widthPercent: (eveningFastDuration / 1440) * 100,
        timeRangeLabel: `${minutesTo12Hour(start)} – 24:00`,
      });
    }
  }

  return segments;
}
