import { describe, it, expect } from "vitest";
import { calculateSchedule, calculateHorizonSegments, determineScheduleState } from "../lib/calculator/engine";
import { validateCalculatorInputs } from "../lib/validation/inputValidation";
import { parseTimeToMinutes } from "../lib/time/parser";
import { minutesTo12Hour, minutesTo24Hour } from "../lib/time/format";
import { PROTOCOLS } from "../lib/calculator/protocols";
import { generateFourteenDaySchedule } from "../components/tools/AdfComparisonWidget";
import { evaluateElectrolyteNeeds } from "../components/tools/PersonalElectrolyteEvaluator";
import { evaluatePlateau, DEFAULT_DIAGNOSTIC_ANSWERS } from "../components/tools/FastingPlateauDiagnostic";
import {
  calculateNightShiftSchedule,
  DEFAULT_NIGHT_SHIFT_INPUTS,
  calculateIntervalDuration,
} from "../components/tools/NightShiftFastingScheduler";
import {
  calculateEatStopEatSchedule,
  DEFAULT_EAT_STOP_EAT_INPUTS,
} from "../components/tools/EatStopEatScheduleTool";

describe("FastTrack Calculation Engine", () => {
  describe("Critical Requirement: 16:8 Protocol starting at 20:00", () => {
    it("accurately computes fast end at 12:00 next day and eating window 12:00 - 20:00", () => {
      const schedule = calculateSchedule({
        protocolId: "16-8",
        lastMealTime: "20:00",
      });

      expect(schedule.fastStartTime24).toBe("20:00");
      expect(schedule.fastEndTime24).toBe("12:00");
      expect(schedule.fastEndNextDay).toBe(true);
      expect(schedule.eatingStartTime24).toBe("12:00");
      expect(schedule.eatingEndTime24).toBe("20:00");

      expect(schedule.fastDurationMinutes).toBe(16 * 60);
      expect(schedule.eatingDurationMinutes).toBe(8 * 60);

      // 12-hour formatting check
      expect(schedule.fastStartTime12).toBe("8:00 PM");
      expect(schedule.fastEndTime12).toBe("12:00 PM (Next Day)");
      expect(schedule.eatingStartTime12).toBe("12:00 PM");
      expect(schedule.eatingEndTime12).toBe("8:00 PM");
      expect(schedule.crossesMidnight).toBe(true);
    });
  });

  describe("Daily Protocols Suite", () => {
    it("handles 12:12 starting at 07:00 (morning start, no midnight crossing)", () => {
      const schedule = calculateSchedule({
        protocolId: "12-12",
        lastMealTime: "07:00",
      });

      expect(schedule.fastStartTime24).toBe("07:00");
      expect(schedule.fastEndTime24).toBe("19:00");
      expect(schedule.eatingStartTime24).toBe("19:00");
      expect(schedule.eatingEndTime24).toBe("07:00");
      expect(schedule.crossesMidnight).toBe(false);
      expect(schedule.fastDurationMinutes).toBe(12 * 60);
      expect(schedule.eatingDurationMinutes).toBe(12 * 60);
    });

    it("handles 14:10 starting at 20:00 (crosses midnight)", () => {
      const schedule = calculateSchedule({
        protocolId: "14-10",
        lastMealTime: "20:00",
      });

      expect(schedule.fastStartTime24).toBe("20:00");
      expect(schedule.fastEndTime24).toBe("10:00");
      expect(schedule.fastEndNextDay).toBe(true);
      expect(schedule.eatingStartTime24).toBe("10:00");
      expect(schedule.eatingEndTime24).toBe("20:00");
      expect(schedule.fastDurationMinutes).toBe(14 * 60);
      expect(schedule.eatingDurationMinutes).toBe(10 * 60);
    });

    it("handles 18:6 starting at 19:00", () => {
      const schedule = calculateSchedule({
        protocolId: "18-6",
        lastMealTime: "19:00",
      });

      expect(schedule.fastStartTime24).toBe("19:00");
      expect(schedule.fastEndTime24).toBe("13:00");
      expect(schedule.eatingStartTime24).toBe("13:00");
      expect(schedule.eatingEndTime24).toBe("19:00");
      expect(schedule.fastDurationMinutes).toBe(18 * 60);
      expect(schedule.eatingDurationMinutes).toBe(6 * 60);
    });

    it("handles 20:4 starting at 20:00", () => {
      const schedule = calculateSchedule({
        protocolId: "20-4",
        lastMealTime: "20:00",
      });

      expect(schedule.fastStartTime24).toBe("20:00");
      expect(schedule.fastEndTime24).toBe("16:00");
      expect(schedule.eatingStartTime24).toBe("16:00");
      expect(schedule.eatingEndTime24).toBe("20:00");
      expect(schedule.fastDurationMinutes).toBe(20 * 60);
      expect(schedule.eatingDurationMinutes).toBe(4 * 60);
    });

    it("handles OMAD (23:1) starting at 19:00", () => {
      const schedule = calculateSchedule({
        protocolId: "omad",
        lastMealTime: "19:00",
      });

      expect(schedule.fastStartTime24).toBe("19:00");
      expect(schedule.fastEndTime24).toBe("18:00");
      expect(schedule.eatingStartTime24).toBe("18:00");
      expect(schedule.eatingEndTime24).toBe("19:00");
      expect(schedule.fastDurationMinutes).toBe(23 * 60);
      expect(schedule.eatingDurationMinutes).toBe(1 * 60);
    });
  });

  describe("5:2 Weekly Protocol Distinct Handling", () => {
    it("distinguishes 5:2 as a weekly cycle without falsely computing a daily hourly fast window", () => {
      const schedule = calculateSchedule({
        protocolId: "5-2",
        lastMealTime: "20:00",
      });

      expect(schedule.isWeekly).toBe(true);
      expect(schedule.protocol.type).toBe("weekly");
      expect(schedule.protocol.fastingDaysPerWeek).toBe(2);
      expect(schedule.fastStartTime24).toBe("N/A");
      expect(schedule.stateLabel).toContain("5:2 WEEKLY");
    });
  });

  describe("Midnight Crossing and Edge Cases", () => {
    it("handles start precisely at 00:00 (Midnight)", () => {
      const schedule = calculateSchedule({
        protocolId: "16-8",
        lastMealTime: "00:00",
      });

      expect(schedule.fastStartTime24).toBe("00:00");
      expect(schedule.fastEndTime24).toBe("16:00");
      expect(schedule.fastEndNextDay).toBe(false);
      expect(schedule.eatingStartTime24).toBe("16:00");
      expect(schedule.eatingEndTime24).toBe("00:00");
    });

    it("handles start at 23:59 boundary", () => {
      const schedule = calculateSchedule({
        protocolId: "16-8",
        lastMealTime: "23:59",
      });

      expect(schedule.fastStartTime24).toBe("23:59");
      expect(schedule.fastEndTime24).toBe("15:59");
      expect(schedule.eatingStartTime24).toBe("15:59");
      expect(schedule.eatingEndTime24).toBe("23:59");
    });
  });

  describe("Schedule State Determination with Reference Times", () => {
    // 16:8 starting at 20:00 (8:00 PM). Fast: 20:00 - 12:00 next day. Eat: 12:00 - 20:00.
    const fastStartMinutes = 20 * 60; // 1200
    const fastDuration = 16 * 60; // 960
    const eatDuration = 8 * 60; // 480

    it("reports FASTING at 22:00 (2 hours into fast)", () => {
      const state = determineScheduleState(fastStartMinutes, fastDuration, eatDuration, {
        referenceCurrentTime: "22:00",
      });
      expect(state.state).toBe("FASTING");
      expect(state.fastHoursElapsed).toBe(2);
      expect(state.timeRemainingMinutes).toBe(14 * 60);
    });

    it("reports FASTING at 08:00 next morning (12 hours into fast)", () => {
      const state = determineScheduleState(fastStartMinutes, fastDuration, eatDuration, {
        referenceCurrentTime: "08:00",
      });
      expect(state.state).toBe("FASTING");
      expect(state.fastHoursElapsed).toBe(12);
      expect(state.timeRemainingMinutes).toBe(4 * 60);
    });

    it("reports EATING_STARTS_SOON at 11:30 (30 mins before fast ends at 12:00)", () => {
      const state = determineScheduleState(fastStartMinutes, fastDuration, eatDuration, {
        referenceCurrentTime: "11:30",
      });
      expect(state.state).toBe("EATING_STARTS_SOON");
      expect(state.timeRemainingMinutes).toBe(30);
    });

    it("reports EATING_WINDOW at 14:00 (2 hours into eating window)", () => {
      const state = determineScheduleState(fastStartMinutes, fastDuration, eatDuration, {
        referenceCurrentTime: "14:00",
      });
      expect(state.state).toBe("EATING_WINDOW");
      expect(state.timeRemainingMinutes).toBe(6 * 60);
    });

    it("reports FASTING_STARTS_SOON at 19:30 (30 mins before fast begins at 20:00)", () => {
      const state = determineScheduleState(fastStartMinutes, fastDuration, eatDuration, {
        referenceCurrentTime: "19:30",
      });
      expect(state.state).toBe("FASTING_STARTS_SOON");
      expect(state.timeRemainingMinutes).toBe(30);
    });
  });

  describe("24-Hour Horizon Segments Generator", () => {
    it("partitions 16:8 + 20:00 without negative widths and summing to 100%", () => {
      const segments = calculateHorizonSegments(20 * 60, 16 * 60);

      expect(segments.length).toBe(3);
      // Segment 1: 00:00 - 12:00 (Fast continues) -> 50%
      expect(segments[0].type).toBe("fasting");
      expect(segments[0].widthPercent).toBeCloseTo(50, 1);

      // Segment 2: 12:00 - 20:00 (Eating window) -> 33.33%
      expect(segments[1].type).toBe("eating");
      expect(segments[1].widthPercent).toBeCloseTo(33.33, 1);

      // Segment 3: 20:00 - 24:00 (Fast starts) -> 16.67%
      expect(segments[2].type).toBe("fasting");
      expect(segments[2].widthPercent).toBeCloseTo(16.67, 1);

      const totalWidth = segments.reduce((sum, seg) => sum + seg.widthPercent, 0);
      expect(totalWidth).toBeCloseTo(100, 1);
    });

    it("partitions non-midnight schedule (12:12 + 07:00) cleanly", () => {
      const segments = calculateHorizonSegments(7 * 60, 12 * 60);

      const totalWidth = segments.reduce((sum, seg) => sum + seg.widthPercent, 0);
      expect(totalWidth).toBeCloseTo(100, 1);

      segments.forEach((seg) => {
        expect(seg.widthPercent).toBeGreaterThan(0);
      });
    });
  });

  describe("Input Validation", () => {
    it("accepts valid inputs and cleans them", () => {
      const res = validateCalculatorInputs({
        protocolId: "16-8",
        lastMealTime: "20:00",
        weightKg: 75,
        goalWeightKg: 70,
      });

      expect(res.isValid).toBe(true);
      expect(res.cleanedInputs?.lastMealTime).toBe("20:00");
      expect(res.cleanedInputs?.weightKg).toBe(75);
    });

    it("flags invalid times", () => {
      const res = validateCalculatorInputs({
        protocolId: "16-8",
        lastMealTime: "25:70",
      });

      expect(res.isValid).toBe(false);
      expect(res.errors.lastMealTime).toBeDefined();
    });

    it("flags invalid weights without crashing", () => {
      const res = validateCalculatorInputs({
        protocolId: "16-8",
        lastMealTime: "20:00",
        weightKg: -10,
      });

      expect(res.isValid).toBe(false);
      expect(res.errors.weightKg).toBe("Weight must be greater than 0.");
    });

    it("flags NaN and non-numeric inputs safely", () => {
      const res = validateCalculatorInputs({
        protocolId: "16-8",
        lastMealTime: "20:00",
        // @ts-expect-error test invalid string passed as number
        weightKg: "not-a-number",
      });

      expect(res.isValid).toBe(false);
      expect(res.errors.weightKg).toBeDefined();
    });
  });

  describe("Alternate-Day Fasting (ADF) 14-Day Calendar Generator", () => {
    it("generates 14 strictly alternating days for both modified and strict protocols", () => {
      for (const startDay of ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const) {
        for (const protocol of ["modified", "strict"] as const) {
          const schedule = generateFourteenDaySchedule(startDay, protocol);

          expect(schedule).toHaveLength(14);
          expect(schedule[0].weekday).toBe(startDay);
          expect(schedule[0].isFastDay).toBe(true);

          // Verify strict alternation across all 14 days
          for (let i = 0; i < 14; i++) {
            expect(schedule[i].isFastDay).toBe(i % 2 === 0);
          }

          // Verify Week 1 has 4 fast days, Week 2 has 3 fast days
          const week1Fast = schedule.slice(0, 7).filter(d => d.isFastDay).length;
          const week2Fast = schedule.slice(7, 14).filter(d => d.isFastDay).length;
          expect(week1Fast).toBe(4);
          expect(week2Fast).toBe(3);

          // Verify protocol calorie markings
          if (protocol === "strict") {
            expect(schedule[0].calories).toBe("0 kcal");
          } else {
            expect(schedule[0].calories).toBe("~500 kcal");
          }
          expect(schedule[1].calories).toBe("Ad libitum (normal)");
        }
      }
    });
  });

  describe("Personal Electrolyte Evaluator Decision Logic", () => {
    it("returns 'normal-meals' for the default 12-16h sedentary temperate profile", () => {
      const res = evaluateElectrolyteNeeds("12-16", "none", "temperate", ["none"]);
      expect(res.category).toBe("normal-meals");
      expect(res.title).toBe("Most people in your situation get enough from normal meals");
      expect(res.safetyAlert).toBeUndefined();
    });

    it("returns 'extra-electrolytes' for 24+ hour extended fasting", () => {
      const res = evaluateElectrolyteNeeds("24+", "none", "temperate", ["none"]);
      expect(res.category).toBe("extra-electrolytes");
      expect(res.title).toBe("Extra sodium/potassium is worth considering");
    });

    it("returns 'extra-electrolytes' for sweaty strenuous exercise even during 12-16h fasting", () => {
      const res = evaluateElectrolyteNeeds("12-16", "sweaty", "temperate", ["none"]);
      expect(res.category).toBe("extra-electrolytes");
      expect(res.title).toBe("Extra sodium/potassium is worth considering");
    });

    it("triggers explicit safety warning when dizziness is selected without reassuring user to continue", () => {
      const res = evaluateElectrolyteNeeds("12-16", "none", "temperate", ["dizziness"]);
      expect(res.safetyAlert).toBeDefined();
      expect(res.safetyAlert).toContain("dizziness upon standing is an important warning signal");
      expect(res.safetyAlert).toContain("break your fast with water and balanced food");
    });
  });

  describe("Fasting Plateau Self-Diagnostic Decision Logic", () => {
    it("returns 'measurement-artifact' for sporadic weighing conditions", () => {
      const res = evaluatePlateau({
        stallDuration: "under-2-weeks",
        protocol: "14-10-or-16-8",
        weighingMethod: "sporadic-uncontrolled",
        calorieIntake: "unmeasured-eating-window",
        sleepStress: "poor-sleep-high-stress",
      });
      expect(res.category).toBe("measurement-artifact");
      expect(res.articleAnchor).toBe("#measurement-artifact");
      expect(res.actionPlan.length).toBeGreaterThanOrEqual(3);
      expect(res.whatToObserve.length).toBeGreaterThanOrEqual(2);
    });

    it("returns 'water-fluid-shifts' for short stall with standardized weighing and stress/workout soreness", () => {
      const res = evaluatePlateau({
        stallDuration: "under-2-weeks",
        protocol: "14-10-or-16-8",
        weighingMethod: "daily-fasted-average",
        calorieIntake: "strictly-measured",
        sleepStress: "poor-sleep-high-stress",
      });
      expect(res.category).toBe("water-fluid-shifts");
      expect(res.articleAnchor).toBe("#water-fluid-shifts");
      expect(res.explanation).toContain("cortisol");
    });

    it("returns 'calorie-creep' for 2-4 week stall with unmeasured eating window and good sleep", () => {
      const res = evaluatePlateau({
        stallDuration: "2-to-4-weeks",
        protocol: "14-10-or-16-8",
        weighingMethod: "daily-fasted-average",
        calorieIntake: "unmeasured-eating-window",
        sleepStress: "rested-low-stress",
      });
      expect(res.category).toBe("calorie-creep");
      expect(res.articleAnchor).toBe("#calorie-creep");
      expect(res.explanation).toContain("energy balance");
    });

    it("returns 'smaller-body-energy-needs' for 4+ week established stall with strict tracking adherence", () => {
      const res = evaluatePlateau({
        stallDuration: "over-4-weeks",
        protocol: "14-10-or-16-8",
        weighingMethod: "daily-fasted-average",
        calorieIntake: "strictly-measured",
        sleepStress: "rested-low-stress",
      });
      expect(res.category).toBe("smaller-body-energy-needs");
      expect(res.articleAnchor).toBe("#smaller-body-energy-needs");
      expect(res.explanation).toContain("lighter body requires less basal and kinetic energy");
    });

    it("returns 'adherence-drift' for established stall with structured deficit and irregular schedules", () => {
      const res = evaluatePlateau({
        stallDuration: "2-to-4-weeks",
        protocol: "14-10-or-16-8",
        weighingMethod: "daily-fasted-average",
        calorieIntake: "structured-deficit",
        sleepStress: "irregular-schedule",
      });
      expect(res.category).toBe("adherence-drift");
      expect(res.articleAnchor).toBe("#adherence-drift");
      expect(res.actionPlan[0]).toContain("fixed start and end times");
    });

    it("handles the default answers state deterministically", () => {
      const res = evaluatePlateau(DEFAULT_DIAGNOSTIC_ANSWERS);
      expect(res.category).toBe("measurement-artifact");
      expect(res.badge).toBe("Measurement Artifact");
    });
  });

  describe("Night-Shift Fasting Scheduler Calculation Engine", () => {
    it("handles default 19:00–07:00 shift with 16:8 protocol and before-shift pattern", () => {
      const { workSchedule, offSchedule, validationError } = calculateNightShiftSchedule(DEFAULT_NIGHT_SHIFT_INPUTS);

      expect(validationError).toBeUndefined();
      expect(workSchedule.dayType).toBe("work");
      expect(workSchedule.eatingWindowStart).toBe("16:00");
      expect(workSchedule.eatingWindowEnd).toBe("00:00");
      expect(workSchedule.eatingWindowFormatted).toContain("8h");
      expect(workSchedule.fastingWindowFormatted).toContain("16h");
      expect(workSchedule.caffeineCutoffFormatted).toContain("2:30 AM");
      expect(workSchedule.blocks.length).toBeGreaterThan(0);

      expect(offSchedule.dayType).toBe("off");
      expect(offSchedule.eatingWindowStart).toBe("12:00");
      expect(offSchedule.eatingWindowEnd).toBe("20:00");
      expect(offSchedule.workWindowFormatted).toContain("No Scheduled Shift");
    });

    it("handles 14:10 protocol with accurate 10h eating duration", () => {
      const { workSchedule } = calculateNightShiftSchedule({
        ...DEFAULT_NIGHT_SHIFT_INPUTS,
        protocol: "14-10",
      });

      expect(workSchedule.eatingWindowStart).toBe("16:00");
      expect(workSchedule.eatingWindowEnd).toBe("02:00");
      expect(workSchedule.eatingWindowFormatted).toContain("10h");
      expect(workSchedule.fastingWindowFormatted).toContain("14h");
    });

    it("handles 12:12 protocol with accurate 12h eating duration", () => {
      const { workSchedule } = calculateNightShiftSchedule({
        ...DEFAULT_NIGHT_SHIFT_INPUTS,
        protocol: "12-12",
      });

      expect(workSchedule.eatingWindowStart).toBe("16:00");
      expect(workSchedule.eatingWindowEnd).toBe("04:00");
      expect(workSchedule.eatingWindowFormatted).toContain("12h");
      expect(workSchedule.fastingWindowFormatted).toContain("12h");
    });

    it("correctly computes overnight cross-midnight intervals", () => {
      // 19:00 to 07:00 is 12 hours (720 min)
      expect(calculateIntervalDuration(19 * 60, 7 * 60)).toBe(720);
      // 23:00 to 07:00 is 8 hours (480 min)
      expect(calculateIntervalDuration(23 * 60, 7 * 60)).toBe(480);
      // Daytime 08:30 to 15:30 is 7 hours (420 min)
      expect(calculateIntervalDuration(8 * 60 + 30, 15 * 60 + 30)).toBe(420);
    });

    it("supports sleep windows crossing midnight", () => {
      const { workSchedule, validationError } = calculateNightShiftSchedule({
        ...DEFAULT_NIGHT_SHIFT_INPUTS,
        shiftStart: "14:00",
        shiftEnd: "22:00",
        sleepStart: "23:30",
        sleepEnd: "07:00",
      });

      expect(validationError).toBeUndefined();
      expect(workSchedule.sleepWindowFormatted).toBe("11:30 PM – 7:00 AM");
    });

    it("validates equal shift times and ambiguous inputs", () => {
      const { validationError } = calculateNightShiftSchedule({
        ...DEFAULT_NIGHT_SHIFT_INPUTS,
        shiftStart: "19:00",
        shiftEnd: "19:00",
      });

      expect(validationError).toBe("Shift start and end times cannot be identical.");
    });

    it("validates equal sleep times", () => {
      const { validationError } = calculateNightShiftSchedule({
        ...DEFAULT_NIGHT_SHIFT_INPUTS,
        sleepStart: "08:00",
        sleepEnd: "08:00",
      });

      expect(validationError).toBe("Sleep start and end times cannot be identical.");
    });

    it("validates malformed time inputs safely", () => {
      const { validationError } = calculateNightShiftSchedule({
        ...DEFAULT_NIGHT_SHIFT_INPUTS,
        shiftStart: "invalid-time",
      });

      expect(validationError).toContain("valid shift start and end times");
    });

    it("handles during-early-shift and split meal patterns", () => {
      const earlyShift = calculateNightShiftSchedule({
        ...DEFAULT_NIGHT_SHIFT_INPUTS,
        eatingPattern: "during-early-shift",
      });
      expect(earlyShift.workSchedule.eatingWindowStart).toBe("19:00");
      expect(earlyShift.workSchedule.eatingWindowEnd).toBe("03:00");

      const split = calculateNightShiftSchedule({
        ...DEFAULT_NIGHT_SHIFT_INPUTS,
        eatingPattern: "split",
      });
      expect(split.workSchedule.eatingWindowStart).toBe("17:00");
      expect(split.workSchedule.eatingWindowEnd).toBe("01:00");
    });
  });

  describe("Eat Stop Eat 24-Hour Schedule Tool Calculation Logic", () => {
    it("handles default dinner-to-dinner 19:00 schedule with 24-hour duration", () => {
      const { schedule, validationError } = calculateEatStopEatSchedule(DEFAULT_EAT_STOP_EAT_INPUTS);

      expect(validationError).toBeUndefined();
      expect(schedule.durationHours).toBe(24);
      expect(schedule.startFormatted12).toBe("7:00 PM");
      expect(schedule.startFormatted24).toBe("19:00");
      expect(schedule.endFormatted12).toBe("7:00 PM");
      expect(schedule.endFormatted24).toBe("19:00");
      expect(schedule.fastDayName).toBe("Monday");
      expect(schedule.endDayName).toBe("Tuesday");
      expect(schedule.explanation).toContain("Monday dinner at 7:00 PM");
      expect(schedule.explanation).toContain("Tuesday at 7:00 PM");
      expect(schedule.secondFast).toBeUndefined();
    });

    it("handles 2x weekly schedule with second non-consecutive fast day", () => {
      const { schedule } = calculateEatStopEatSchedule({
        ...DEFAULT_EAT_STOP_EAT_INPUTS,
        frequency: "2x",
        fastingDay2: "Thursday",
      });

      expect(schedule.durationHours).toBe(24);
      expect(schedule.secondFast).toBeDefined();
      expect(schedule.secondFast?.fastDayName).toBe("Thursday");
      expect(schedule.secondFast?.endDayName).toBe("Friday");
      expect(schedule.secondFast?.startFormatted12).toBe("7:00 PM");
      expect(schedule.secondFast?.endFormatted12).toBe("7:00 PM");
    });

    it("handles lunch-to-lunch anchor at 13:00 correctly", () => {
      const { schedule } = calculateEatStopEatSchedule({
        anchorType: "lunch-to-lunch",
        startTime: "13:00",
        fastingDay1: "Wednesday",
        frequency: "1x",
      });

      expect(schedule.durationHours).toBe(24);
      expect(schedule.startFormatted12).toBe("1:00 PM");
      expect(schedule.endFormatted12).toBe("1:00 PM");
      expect(schedule.fastDayName).toBe("Wednesday");
      expect(schedule.endDayName).toBe("Thursday");
      expect(schedule.explanation).toContain("Wednesday lunch");
    });

    it("handles breakfast-to-breakfast anchor at 08:00 correctly", () => {
      const { schedule } = calculateEatStopEatSchedule({
        anchorType: "breakfast-to-breakfast",
        startTime: "08:00",
        fastingDay1: "Sunday",
        frequency: "1x",
      });

      expect(schedule.durationHours).toBe(24);
      expect(schedule.startFormatted12).toBe("8:00 AM");
      expect(schedule.endFormatted12).toBe("8:00 AM");
      expect(schedule.fastDayName).toBe("Sunday");
      expect(schedule.endDayName).toBe("Monday");
    });

    it("validates malformed start time inputs gracefully", () => {
      const { validationError } = calculateEatStopEatSchedule({
        ...DEFAULT_EAT_STOP_EAT_INPUTS,
        startTime: "invalid-time",
      });

      expect(validationError).toBe("Please enter a valid start time in HH:mm format.");
    });
  });
});
