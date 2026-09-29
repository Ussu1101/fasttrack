/**
 * Robust time parsing utilities.
 * Handles 24-hour "HH:mm" strings and converts to total minutes from 00:00 [0, 1439].
 */

export interface ParsedTimeResult {
  valid: boolean;
  minutes: number; // 0 to 1439
  hours: number; // 0 to 23
  mins: number; // 0 to 59
  error?: string;
}

export function parseTimeToMinutes(timeStr: string | null | undefined): ParsedTimeResult {
  if (!timeStr || typeof timeStr !== "string") {
    return { valid: false, minutes: 0, hours: 0, mins: 0, error: "Enter a valid time." };
  }

  const trimmed = timeStr.trim();
  const match = trimmed.match(/^(\d{1,2}):(\d{2})$/);
  if (!match) {
    return { valid: false, minutes: 0, hours: 0, mins: 0, error: "Enter a valid time in HH:mm format." };
  }

  const hours = parseInt(match[1], 10);
  const mins = parseInt(match[2], 10);

  if (isNaN(hours) || hours < 0 || hours > 23) {
    return { valid: false, minutes: 0, hours: 0, mins: 0, error: "Hour must be between 00 and 23." };
  }

  if (isNaN(mins) || mins < 0 || mins > 59) {
    return { valid: false, minutes: 0, hours: 0, mins: 0, error: "Minutes must be between 00 and 59." };
  }

  const totalMinutes = hours * 60 + mins;
  return {
    valid: true,
    minutes: totalMinutes,
    hours,
    mins,
  };
}
