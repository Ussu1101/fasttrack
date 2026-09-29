import { MetabolicMilestone } from "./types";

/**
 * Evidence-grounded physiological phases observed during fasting intervals.
 * Note: These ranges represent general metabolic transitions documented in nutritional literature.
 * Biological onset varies significantly among individuals based on prior meal composition, glycogen stores, activity, and genetics.
 * FastTrack does not measure or predict an individual user's cellular state.
 */
export const METABOLIC_MILESTONES: MetabolicMilestone[] = [
  {
    id: "postprandial",
    hourRange: "0 – 4 Hours",
    minHours: 0,
    maxHours: 4,
    title: "Postprandial / Digestion Interval",
    summary: "Nutrients from the preceding meal are digested and absorbed, during which circulating glucose and insulin naturally respond.",
    physiologicalContext: "Circulating nutrients provide immediate metabolic fuel as gastric emptying and initial macronutrient assimilation take place.",
    evidenceStrength: "Established",
    colorClass: "bg-surface-container",
  },
  {
    id: "postabsorptive",
    hourRange: "4 – 12 Hours",
    minHours: 4,
    maxHours: 12,
    title: "Post-Absorptive Baseline Shift",
    summary: "As nutrient absorption completes, insulin levels generally trend toward baseline, and stored glycogen is gradually utilized.",
    physiologicalContext: "With food digestion winding down, internal energy regulation shifts toward mobilizing stored liver glycogen to maintain plasma glucose stability.",
    evidenceStrength: "Established",
    colorClass: "bg-surface-container",
  },
  {
    id: "fat-oxidation",
    hourRange: "12 – 16 Hours",
    minHours: 12,
    maxHours: 16,
    title: "Lipid Mobilization & Baseline Insulin",
    summary: "As liver glycogen gradually depletes, the body typically increases reliance on fatty acids for resting energy needs.",
    physiologicalContext: "Hormone-sensitive lipase activity permits greater fatty acid release from adipose stores. Ketone synthesis may gradually commence depending on activity and prior carbohydrate intake.",
    evidenceStrength: "Established",
    colorClass: "bg-surface-container-high",
  },
  {
    id: "autophagy-upregulation",
    hourRange: "16 – 24 Hours",
    minHours: 16,
    maxHours: 24,
    title: "Cellular Maintenance & Stress Response",
    summary: "Extended nutrient pauses are associated in scientific models with cellular maintenance signals (including AMPK and mTOR pathways).",
    physiologicalContext: "In preclinical and translational studies, sustained nutrient restriction is linked with cellular quality control and organelle recycling. Human timing and magnitude vary substantially across individuals.",
    evidenceStrength: "Clinical Observation",
    colorClass: "bg-primary-fixed/40",
  },
];
