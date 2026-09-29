/**
 * Pure formatting utilities for time representations.
 * Handles normalisation over 24-hour / multi-day boundaries.
 */

export function minutesTo24Hour(minutesFromMidnight: number): string {
  // Normalize into single 24-hour cycle [0, 1439]
  const normalized = ((minutesFromMidnight % 1440) + 1440) % 1440;
  const hours = Math.floor(normalized / 60);
  const mins = normalized % 60;

  const hStr = hours < 10 ? `0${hours}` : `${hours}`;
  const mStr = mins < 10 ? `0${mins}` : `${mins}`;
  return `${hStr}:${mStr}`;
}

export function minutesTo12Hour(
  minutesFromMidnight: number,
  options?: { showNextDay?: boolean; baseDayMinutes?: number }
): string {
  const normalized = ((minutesFromMidnight % 1440) + 1440) % 1440;
  const hours = Math.floor(normalized / 60);
  const mins = normalized % 60;

  const period = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 === 0 ? 12 : hours % 12;
  const displayMins = mins < 10 ? `0${mins}` : `${mins}`;

  let result = `${displayHours}:${displayMins} ${period}`;

  if (options?.showNextDay && options.baseDayMinutes !== undefined) {
    if (minutesFromMidnight >= 1440 || minutesFromMidnight < options.baseDayMinutes) {
      result += " (Next Day)";
    }
  }

  return result;
}

export function formatDurationHours(hours: number): string {
  if (hours === 1) return "1 Hour";
  return `${hours} Hours`;
}

export function formatMinutesRemaining(minutes: number): string {
  if (minutes <= 0) return "0m";
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;

  if (h === 0) return `${m}m remaining`;
  if (m === 0) return `${h}h remaining`;
  return `${h}h ${m < 10 ? "0" + m : m}m remaining`;
}
