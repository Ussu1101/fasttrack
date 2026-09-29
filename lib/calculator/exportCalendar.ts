import { NormalizedSchedule } from "./types";

/**
 * Generates an RFC 5545 compliant iCalendar (.ics) string for the calculated fasting schedule.
 * Entirely client-side and privacy-respecting (zero server transmission).
 */
export function generateIcsCalendar(schedule: NormalizedSchedule): string {
  if (schedule.isWeekly) {
    return generateWeeklyIcs(schedule);
  }

  const now = new Date();
  const formatIcsDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  const dtstamp = formatIcsDate(now);

  // Tomorrow's date calculation for initial occurrence
  const today = new Date();
  const startHour = Math.floor(schedule.fastStartMinutes / 60);
  const startMin = schedule.fastStartMinutes % 60;
  
  const fastStartDt = new Date(today.getFullYear(), today.getMonth(), today.getDate(), startHour, startMin, 0);
  const fastEndDt = new Date(fastStartDt.getTime() + schedule.fastDurationMinutes * 60 * 1000);

  const formatLocalIcs = (d: Date) => {
    const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
    return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;
  };

  const dtStart = formatLocalIcs(fastStartDt);
  const dtEnd = formatLocalIcs(fastEndDt);

  const icsLines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//FastTrack//Intermittent Fasting Schedule//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:FastTrack Fasting Schedule",
    "BEGIN:VEVENT",
    `UID:fasttrack-${Date.now()}@fasttrackfasting.com`,
    `DTSTAMP:${dtstamp}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    "RRULE:FREQ=DAILY",
    `SUMMARY:Fasting Window (${schedule.protocol.ratio})`,
    `DESCRIPTION:FastTrack ${schedule.protocol.name}. Fast begins at ${schedule.fastStartTime12} and ends at ${schedule.fastEndTime12}. Stay hydrated with water, unflavored electrolytes, and unsweetened tea or black coffee.`,
    "STATUS:CONFIRMED",
    "TRANSP:TRANSPARENT",
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  return icsLines.join("\r\n");
}

function generateWeeklyIcs(schedule: NormalizedSchedule): string {
  const now = new Date();
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
  const dtstamp = now.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const dtStart = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}T090000`;
  const dtEnd = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}T100000`;

  const icsLines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//FastTrack//Intermittent Fasting Schedule//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:FastTrack 5:2 Fasting Schedule",
    "BEGIN:VEVENT",
    `UID:fasttrack-5-2-${Date.now()}@fasttrackfasting.com`,
    `DTSTAMP:${dtstamp}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    "RRULE:FREQ=WEEKLY;BYDAY=MO,TH",
    "SUMMARY:FastTrack 5:2 Reduced Intake Day",
    "DESCRIPTION:5:2 Fasting Day: Keep intake to approx 500-600 kcal. Prioritize lean protein and abundant hydration.",
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  return icsLines.join("\r\n");
}

export function downloadCalendarFile(schedule: NormalizedSchedule): void {
  const icsContent = generateIcsCalendar(schedule);
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `fasttrack-${schedule.protocol.id}-schedule.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
