"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  Droplets,
  Activity,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Info,
  Scale,
  ExternalLink,
} from "lucide-react";

export type FastingDuration = "12-16" | "18-20" | "24+";
export type ExerciseLevel = "none" | "light" | "sweaty";
export type ClimateType = "temperate" | "hot";
export type SymptomType = "headache" | "muscle-cramps" | "dizziness" | "none";

export interface EvaluatorResult {
  category: "normal-meals" | "extra-electrolytes";
  title: string;
  summary: string;
  influencingFactors: string[];
  guidance: string[];
  safetyAlert?: string;
}

export function evaluateElectrolyteNeeds(
  duration: FastingDuration,
  exercise: ExerciseLevel,
  climate: ClimateType,
  symptoms: SymptomType[]
): EvaluatorResult {
  const hasDizziness = symptoms.includes("dizziness");
  const hasSymptoms = symptoms.filter((s) => s !== "none").length > 0;
  const isExtended = duration === "24+";
  const isStrenuous = exercise === "sweaty";
  const isHot = climate === "hot";

  // Decision logic:
  // "Extra sodium/potassium is worth considering" if:
  // - Fasting duration is 24h+, OR
  // - Sweaty/strenuous exercise while fasted, OR
  // - Combination of 18-20h fasting with hot climate or active symptoms.
  // Otherwise: "Most people in your situation get enough from normal meals."
  const needsConsideration =
    isExtended ||
    isStrenuous ||
    (duration === "18-20" && (isHot || hasSymptoms));

  const factors: string[] = [];

  if (duration === "12-16") {
    factors.push("Standard 12–16h fasting duration allows daily meal replenishment.");
  } else if (duration === "18-20") {
    factors.push("Narrow eating window (18–20h) concentrates daily food and fluid intake.");
  } else {
    factors.push("24h+ extended fasting eliminates ongoing daily dietary sodium and fluid intake.");
  }

  if (exercise === "none") {
    factors.push("Sedentary state keeps dermal sweat electrolyte losses at baseline.");
  } else if (exercise === "light") {
    factors.push("Light exercise incurs modest sweat volume, readily managed with plain water.");
  } else {
    factors.push("Sweaty / strenuous exercise substantially accelerates dermal sodium loss.");
  }

  if (climate === "hot") {
    factors.push("Hot climate increases perspiration and baseline water turnover.");
  } else {
    factors.push("Temperate climate maintains standard baseline fluid turnover.");
  }

  if (symptoms.includes("headache")) {
    factors.push("Headaches reported: may reflect early fluid shifts or carbohydrate withdrawal.");
  }
  if (symptoms.includes("muscle-cramps")) {
    factors.push("Muscle cramps reported: can relate to hydration status, fatigue, or local muscle strain.");
  }
  if (hasDizziness) {
    factors.push("Dizziness reported: significant postural signal requiring caution.");
  }

  if (needsConsideration) {
    return {
      category: "extra-electrolytes",
      title: "Extra sodium/potassium is worth considering",
      summary:
        "Based on your inputs (longer fasting window, strenuous sweat loss, or hot environment), your body is undergoing greater fluid and sodium turnover than standard daily time-restricted eating.",
      influencingFactors: factors,
      guidance: [
        "Focus on mineral-rich whole foods and adequate seasoning in your regular eating windows (leafy greens, avocados, sea salt, broths).",
        "If considering a zero-calorie electrolyte supplement, carefully verify that it contains 0 kcal, no added sugars (dextrose, maltodextrin), and safe physiological mineral amounts.",
        "Electrolytes do not make prolonged fasting inherently safe. Mineral supplementation cannot replace clinical supervision for extended fasts.",
      ],
      safetyAlert: hasDizziness
        ? "Caution: You reported dizziness. Dizziness is an important warning sign of hypovolemia, low blood sugar, or reduced blood pressure. Never attempt to push through dizziness by taking extra salt. Break your fast promptly with balanced nourishment and consult a healthcare professional if symptoms persist."
        : undefined,
    };
  }

  return {
    category: "normal-meals",
    title: "Most people in your situation get enough from normal meals",
    summary:
      "For standard daily intermittent fasting (such as 14:10 or 16:8) in temperate conditions, your body continues to receive balanced sodium, potassium, and magnesium from regular daily meals.",
    influencingFactors: factors,
    guidance: [
      "Specialized electrolyte powders or salty drinks are usually unnecessary and an added expense for standard daily schedules.",
      "Maintain consistent baseline hydration with plain water, sparkling water, or unsweetened black tea/coffee throughout your fasting window.",
      "Season your meals normally during your eating window and prioritize whole food sources of potassium and magnesium (avocados, leafy greens, nuts, fish).",
    ],
    safetyAlert: hasDizziness
      ? "Caution: You reported dizziness. Even during shorter fasts, dizziness upon standing is an important warning signal. Do not rely on electrolytes to mask symptoms; break your fast with water and balanced food, and seek medical advice if lightheadedness continues."
      : undefined,
  };
}

export default function PersonalElectrolyteEvaluator() {
  const [duration, setDuration] = useState<FastingDuration>("12-16");
  const [exercise, setExercise] = useState<ExerciseLevel>("none");
  const [climate, setClimate] = useState<ClimateType>("temperate");
  const [symptoms, setSymptoms] = useState<SymptomType[]>(["none"]);

  const handleSymptomToggle = (symptom: SymptomType) => {
    if (symptom === "none") {
      setSymptoms(["none"]);
      return;
    }

    const currentWithoutNone = symptoms.filter((s) => s !== "none");
    if (currentWithoutNone.includes(symptom)) {
      const updated = currentWithoutNone.filter((s) => s !== symptom);
      setSymptoms(updated.length === 0 ? ["none"] : updated);
    } else {
      setSymptoms([...currentWithoutNone, symptom]);
    }
  };

  const result = evaluateElectrolyteNeeds(duration, exercise, climate, symptoms);

  return (
    <section
      id="electrolyte-evaluator"
      aria-label="Personal Electrolyte Evaluator"
      className="p-5 sm:p-8 rounded-2xl bg-surface-container border border-surface-container-high shadow-sm space-y-8"
    >
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Assessment Tool
          </span>
        </div>
        <h3 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
          Personal Electrolyte Evaluator
        </h3>
        <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
          Select your fasting window, exercise habits, climate, and symptoms to evaluate whether your daily meals provide sufficient minerals or whether extra electrolyte attention is worth considering.
        </p>
      </div>

      {/* Form Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 sm:p-6 rounded-xl bg-surface-container-low border border-surface-container">
        {/* Fasting Duration */}
        <div className="space-y-2.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant">
            1. Fasting Duration
          </label>
          <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Fasting Duration">
            {(
              [
                { id: "12-16", label: "12–16 hrs", desc: "e.g. 16:8" },
                { id: "18-20", label: "18–20 hrs", desc: "e.g. 20:4" },
                { id: "24+", label: "24+ hrs", desc: "Extended" },
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={duration === item.id}
                onClick={() => setDuration(item.id)}
                className={`p-3 rounded-xl text-center border transition-all flex flex-col items-center justify-center ${
                  duration === item.id
                    ? "bg-primary text-on-primary border-primary shadow-sm"
                    : "bg-surface-container text-on-surface border-surface-container-high hover:border-primary/40"
                }`}
              >
                <span className="font-bold text-xs sm:text-sm">{item.label}</span>
                <span
                  className={`text-[10px] mt-0.5 ${
                    duration === item.id ? "text-on-primary/80" : "text-on-surface-variant"
                  }`}
                >
                  {item.desc}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Exercise While Fasted */}
        <div className="space-y-2.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant">
            2. Exercise While Fasted
          </label>
          <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Exercise While Fasted">
            {(
              [
                { id: "none", label: "None", desc: "Sedentary" },
                { id: "light", label: "Light", desc: "Walking/Yoga" },
                { id: "sweaty", label: "Strenuous", desc: "Heavy sweat" },
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={exercise === item.id}
                onClick={() => setExercise(item.id)}
                className={`p-3 rounded-xl text-center border transition-all flex flex-col items-center justify-center ${
                  exercise === item.id
                    ? "bg-primary text-on-primary border-primary shadow-sm"
                    : "bg-surface-container text-on-surface border-surface-container-high hover:border-primary/40"
                }`}
              >
                <span className="font-bold text-xs sm:text-sm">{item.label}</span>
                <span
                  className={`text-[10px] mt-0.5 ${
                    exercise === item.id ? "text-on-primary/80" : "text-on-surface-variant"
                  }`}
                >
                  {item.desc}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Climate */}
        <div className="space-y-2.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant">
            3. Environmental Climate
          </label>
          <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Environmental Climate">
            {(
              [
                { id: "temperate", label: "Temperate", desc: "Moderate temp / indoors" },
                { id: "hot", label: "Hot", desc: "Warm / high humidity" },
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={climate === item.id}
                onClick={() => setClimate(item.id)}
                className={`p-3 rounded-xl text-center border transition-all flex flex-col items-center justify-center ${
                  climate === item.id
                    ? "bg-primary text-on-primary border-primary shadow-sm"
                    : "bg-surface-container text-on-surface border-surface-container-high hover:border-primary/40"
                }`}
              >
                <span className="font-bold text-xs sm:text-sm">{item.label}</span>
                <span
                  className={`text-[10px] mt-0.5 ${
                    climate === item.id ? "text-on-primary/80" : "text-on-surface-variant"
                  }`}
                >
                  {item.desc}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Symptoms Checklist */}
        <div className="space-y-2.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant">
            4. Current Symptoms Checklist
          </label>
          <div className="grid grid-cols-2 gap-2" role="group" aria-label="Current Symptoms">
            {(
              [
                { id: "headache", label: "Headache" },
                { id: "muscle-cramps", label: "Muscle cramps" },
                { id: "dizziness", label: "Dizziness" },
                { id: "none", label: "None" },
              ] as const
            ).map((item) => {
              const isChecked = symptoms.includes(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={isChecked}
                  onClick={() => handleSymptomToggle(item.id)}
                  className={`p-3 rounded-xl text-center border transition-all flex items-center justify-center gap-1.5 ${
                    isChecked
                      ? "bg-primary text-on-primary border-primary shadow-sm"
                      : "bg-surface-container text-on-surface border-surface-container-high hover:border-primary/40"
                  }`}
                >
                  <span className="font-bold text-xs sm:text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Result Display Box */}
      <div className="space-y-6">
        <div
          className={`p-6 sm:p-7 rounded-2xl border transition-all space-y-4 ${
            result.category === "extra-electrolytes"
              ? "bg-primary/5 border-primary/30"
              : "bg-surface-container-low border-surface-container"
          }`}
        >
          {/* Result Outcome Badge & Heading */}
          <div className="space-y-2">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                result.category === "extra-electrolytes"
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container text-on-surface"
              }`}
            >
              Evaluator Assessment
            </span>
            <h4 className="font-headline text-xl sm:text-2xl font-bold text-on-surface tracking-tight">
              {result.title}
            </h4>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {result.summary}
            </p>
          </div>

          {/* Dizziness / Safety Red Flag Alert if present */}
          {result.safetyAlert && (
            <div className="p-4 rounded-xl bg-error/10 border border-error/20 text-xs sm:text-sm text-error space-y-1">
              <div className="flex items-center gap-1.5 font-bold">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>Important Safety Warning</span>
              </div>
              <p className="leading-relaxed">{result.safetyAlert}</p>
            </div>
          )}

          {/* Contributing Factors */}
          <div className="space-y-2 pt-2 border-t border-surface-container/60">
            <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant block">
              Factors Influencing This Evaluation:
            </span>
            <ul className="space-y-1.5 text-xs sm:text-sm text-on-surface-variant list-disc pl-5">
              {result.influencingFactors.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          {/* Actionable Educational Guidance */}
          <div className="space-y-2 pt-2 border-t border-surface-container/60">
            <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant block">
              Practical Educational Takeaways:
            </span>
            <ul className="space-y-1.5 text-xs sm:text-sm text-on-surface-variant list-disc pl-5">
              {result.guidance.map((g, i) => (
                <li key={i}>{g}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Embedded Supplement Label Inspection Checklist */}
        <div className="p-5 sm:p-6 rounded-xl bg-surface-container-low border border-surface-container space-y-3">
          <h4 className="font-headline text-base font-bold text-on-surface flex items-center gap-2">
            <Scale className="w-4 h-4 text-primary" />
            <span>Supplement Facts Label Checklist</span>
          </h4>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            If you explore commercial electrolyte powders, use these label criteria to avoid breaking your fast or taking hazardous mineral doses:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-on-surface-variant">
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-surface-container/50 border border-surface-container">
              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
              <span><strong>0 Calories &amp; 0g Carbohydrate:</strong> Avoid maltodextrin, dextrose, cane sugar, or fruit powders.</span>
            </div>
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-surface-container/50 border border-surface-container">
              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
              <span><strong>No Amino Acids / BCAAs:</strong> Avoid leucine, glutamine, or amino acid blends delivering metabolizable calories (~4 kcal/g).</span>
            </div>
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-surface-container/50 border border-surface-container">
              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
              <span><strong>Gentle Magnesium Form:</strong> Prefer malate, glycinate, or chloride. Avoid high-dose oxide or citrate which induce osmotic diarrhea.</span>
            </div>
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-surface-container/50 border border-surface-container">
              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
              <span><strong>Cautious Potassium Level:</strong> Never ingest concentrated potassium pills or massive unbuffered scoops without medical supervision.</span>
            </div>
          </div>
          <p className="text-[11px] text-on-surface-variant leading-relaxed pt-1">
            <em>Educational note:</em> FastTrack does not prescribe individualized mineral dosages. Consult a physician or registered dietitian to determine your specific nutritional requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
