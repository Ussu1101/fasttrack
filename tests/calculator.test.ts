import { describe, it, expect } from "vitest";
import { calculateSchedule, calculateHorizonSegments, determineScheduleState } from "../lib/calculator/engine";
import { validateCalculatorInputs } from "../lib/validation/inputValidation";
import { parseTimeToMinutes } from "../lib/time/parser";
import { minutesTo12Hour, minutesTo24Hour } from "../lib/time/format";
import { PROTOCOLS } from "../lib/calculator/protocols";

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
});
