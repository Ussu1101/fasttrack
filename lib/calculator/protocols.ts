import { ProtocolDefinition, ProtocolId } from "./types";

export const PROTOCOLS: Record<ProtocolId, ProtocolDefinition> = {
  "16-8": {
    id: "16-8",
    name: "16:8 Protocol",
    tagline: "The Balanced Standard",
    ratio: "16:8",
    fastHours: 16,
    eatingHours: 8,
    type: "daily",
    difficulty: "Optimal",
    description: "The most widely studied time-restricted feeding ratio. Balances sustained metabolic rest with flexible daily nourishment.",
    detailedOverview: "16:8 involves fasting for 16 consecutive hours followed by an 8-hour eating window. Typically accomplished by finishing dinner in the early evening and delaying breakfast until midday, it fits easily into normal working and social schedules.",
    exampleSchedule: "Fast 8:00 PM – 12:00 PM (noon next day); Eat 12:00 PM – 8:00 PM",
    bestFor: "Everyday schedule consistency, daytime focus, and balanced meal timing.",
    cellularMarker: "Supports daytime digestive rest and a natural transition toward lipid utilization."
  },
  "14-10": {
    id: "14-10",
    name: "14:10 Gentle Reset",
    tagline: "Approachable Starting Point",
    ratio: "14:10",
    fastHours: 14,
    eatingHours: 10,
    type: "daily",
    difficulty: "Beginner",
    description: "An accessible entry into time-restricted feeding that gently curbs late-night snacking without restrictive daytime fasting.",
    detailedOverview: "14:10 provides a natural pause for gastrointestinal recovery while leaving a generous 10-hour window for balanced meals. Ideal for beginners, shift workers, or anyone transitioning away from constant grazing.",
    exampleSchedule: "Fast 8:00 PM – 10:00 AM next day; Eat 10:00 AM – 8:00 PM",
    bestFor: "Fasting newcomers, active individuals, and resetting nighttime eating habits.",
    cellularMarker: "Encourages nighttime digestive rest and helps curtail late-evening eating."
  },
  "12-12": {
    id: "12-12",
    name: "12:12 Circadian",
    tagline: "Natural Day-Night Harmony",
    ratio: "12:12",
    fastHours: 12,
    eatingHours: 12,
    type: "daily",
    difficulty: "Gentle",
    description: "Aligns your digestive window directly with solar daylight hours, allowing uninterrupted cellular restoration during sleep.",
    detailedOverview: "12:12 mirrors traditional meal timing before artificial light and late-night food access. By simply not eating after dinner until breakfast, your gut and liver follow natural circadian rhythms.",
    exampleSchedule: "Fast 7:00 PM – 7:00 AM next day; Eat 7:00 AM – 7:00 PM",
    bestFor: "Long-term health maintenance, circadian harmony, and unhurried daily routines.",
    cellularMarker: "Aligns evening meal conclusion with natural circadian dark cycles."
  },
  "18-6": {
    id: "18-6",
    name: "18:6 Accelerated",
    tagline: "Deeper Metabolic Rest",
    ratio: "18:6",
    fastHours: 18,
    eatingHours: 6,
    type: "daily",
    difficulty: "Accelerated",
    description: "Extends daily fasting to 18 hours, typically supporting two wholesome meals without snacking between.",
    detailedOverview: "With an 18-hour fast and a compact 6-hour window (e.g., 1:00 PM to 7:00 PM), glycogen stores are depleted more thoroughly, signaling deeper cellular energy regulation.",
    exampleSchedule: "Fast 7:00 PM – 1:00 PM next day; Eat 1:00 PM – 7:00 PM",
    bestFor: "Individuals adapted to 16:8 seeking a more condensed daily feeding window.",
    cellularMarker: "Provides an extended window of baseline insulin and increased reliance on stored fuel."
  },
  "20-4": {
    id: "20-4",
    name: "20:4 Warrior",
    tagline: "Concentrated Feeding Window",
    ratio: "20:4",
    fastHours: 20,
    eatingHours: 4,
    type: "daily",
    difficulty: "Advanced",
    description: "A 20-hour fast paired with an intensive 4-hour evening nourishment window, inspired by historical warrior feeding patterns.",
    detailedOverview: "20:4 concentrates food intake into a small 4-hour window, such as 4:00 PM to 8:00 PM. Requires intentional meal planning to meet daily protein, micronutrient, and electrolyte requirements.",
    exampleSchedule: "Fast 8:00 PM – 4:00 PM next day; Eat 4:00 PM – 8:00 PM",
    bestFor: "Experienced fasters seeking elevated daytime productivity and minimal meal preparation.",
    cellularMarker: "Concentrates daily nourishment into a condensed window with prolonged digestive pause."
  },
  "omad": {
    id: "omad",
    name: "OMAD (23:1)",
    tagline: "One Meal A Day",
    ratio: "23:1",
    fastHours: 23,
    eatingHours: 1,
    type: "daily",
    difficulty: "Intensive",
    description: "One concentrated, nutrient-dense feast consumed within an approximate 1-hour window each day.",
    detailedOverview: "OMAD pushes daily time-restricted eating to its biological limit. With 23 hours of fasting, attention shifts to consuming sufficient calories, vitamins, and protein in a single sit-down meal.",
    exampleSchedule: "Fast 7:00 PM – 6:00 PM next day; Eat 6:00 PM – 7:00 PM",
    bestFor: "Advanced fasting practitioners with experience managing electrolytes and nutrient density.",
    cellularMarker: "An intensive single-window protocol requiring careful nutritional planning."
  },
  "5-2": {
    id: "5-2",
    name: "5:2 Weekly Protocol",
    tagline: "Intermittent Weekly Calorie Pattern",
    ratio: "5:2",
    fastHours: 0,
    eatingHours: 0,
    type: "weekly",
    difficulty: "Weekly Pattern",
    description: "A weekly nutritional rhythm featuring 5 standard eating days and 2 non-consecutive reduced-intake days.",
    detailedOverview: "Unlike daily hourly windows, 5:2 organizes your week. On 5 days you eat normally according to appetite. On 2 chosen non-consecutive days (such as Monday and Thursday), energy intake is reduced to roughly 500-600 kcal.",
    exampleSchedule: "Regular: Tue, Wed, Fri, Sat, Sun. Reduced intake: Mon & Thu.",
    bestFor: "Those who prefer not to observe daily hourly clocks and favor weekly lifestyle rhythm.",
    cellularMarker: "A weekly energy intake rhythm rather than a daily hourly restriction.",
    fastingDaysPerWeek: 2,
    fastingDaysPattern: "Non-consecutive (e.g., Monday & Thursday)",
    recommendedReducedCalories: "Approx. 500–600 kcal on fasting days"
  }
};

export const PROTOCOL_LIST: ProtocolDefinition[] = Object.values(PROTOCOLS);
export const DAILY_PROTOCOLS: ProtocolDefinition[] = PROTOCOL_LIST.filter(p => p.type === "daily");
export const WEEKLY_PROTOCOLS: ProtocolDefinition[] = PROTOCOL_LIST.filter(p => p.type === "weekly");
