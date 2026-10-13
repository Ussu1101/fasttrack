"use client";

import React, { useState } from "react";
import { Sparkles, Activity, Clock, ShieldCheck, Flame, Zap, Droplets } from "lucide-react";

export type MealSize = "light" | "normal" | "heavy";

interface StageInfo {
  hourRange: string;
  stageName: string;
  category: string;
  whatHappens: {
    glycogen: string;
    insulin: string;
    fatOxidation: string;
    ketones: string;
  };
  howYouFeel: string;
  evidenceNote: string;
}

const PRESET_HOURS = [12, 16, 18, 20, 24, 36];

export const STAGE_DATA_BY_HOUR: Record<number, StageInfo> = {
  // We provide a function or lookup mapping 0-48 hours into physiological stages
};

export function getStageDataForHour(hour: number, mealSize: MealSize = "normal"): StageInfo {
  // Adjust boundary perception slightly based on last meal composition
  const shift = mealSize === "light" ? -1.5 : mealSize === "heavy" ? 2 : 0;
  const effectiveHour = Math.max(0, hour - shift);

  if (effectiveHour < 4) {
    return {
      hourRange: "0 to 4 Hours",
      stageName: "Fed & Early Absorptive State",
      category: "Nutrient Influx & Digestion",
      whatHappens: {
        glycogen: "Liver and skeletal muscle actively synthesize and restore glycogen from incoming meal nutrients.",
        insulin: "Circulating insulin levels remain elevated, promoting cellular glucose uptake, protein synthesis, and lipid storage.",
        fatOxidation: "Lipolysis is suppressed by postprandial insulin; dietary carbohydrates and fats are used for immediate energy.",
        ketones: "Circulating ketone bodies remain at baseline concentrations (<0.1 mmol/L)."
      },
      howYouFeel: "Satiated from your last meal. Full digestive activity is active in the stomach and small intestine.",
      evidenceNote:
        mealSize === "heavy"
          ? "With a heavy or high-glycemic dinner, elevated insulin and gastrointestinal transit can persist past hour 5."
          : "Standard human postprandial digestion typically clears glucose absorption within 3 to 4 hours."
    };
  } else if (effectiveHour < 12) {
    return {
      hourRange: "4 to 12 Hours",
      stageName: "Post-Absorptive Transition",
      category: "Glycogen Breakdown Initiation",
      whatHappens: {
        glycogen: "Liver begins mobilizing stored glycogen through glycogenolysis to maintain steady blood glucose (~70–99 mg/dL).",
        insulin: "Insulin steadily declines toward baseline fasting concentrations, releasing the physiological brake on adipose lipolysis.",
        fatOxidation: "Adipose tissue lipolysis begins to increase; fatty acids are released into circulation for baseline muscle fuel.",
        ketones: "Hepatic ketone production remains minimal; circulating beta-hydroxybutyrate is barely detectable (<0.2 mmol/L)."
      },
      howYouFeel: "Initial habitual hunger cues may emerge as ghrelin pulses, often coinciding with usual snack or breakfast times.",
      evidenceNote: "This phase occurs overnight during standard sleep; blood glucose remains tightly regulated within physiological limits."
    };
  } else if (effectiveHour < 16) {
    return {
      hourRange: "12 to 16 Hours",
      stageName: "Early Fat Mobilization & Glucagon Shift",
      category: "Transition to Lipid Fuel",
      whatHappens: {
        glycogen: "Hepatic glycogen stores are substantially depleted (often 50% or more, depending on activity).",
        insulin: "Insulin reaches basal fasting levels while glucagon rises, facilitating systemic fat oxidation.",
        fatOxidation: "Whole-body fat oxidation increases significantly; adipose-derived free fatty acids provide the dominant energy substrate.",
        ketones: "Mild hepatic ketogenesis begins; capillary beta-hydroxybutyrate typically ranges between 0.2 and 0.5 mmol/L."
      },
      howYouFeel: "Hunger waves often subside as ghrelin circadian peaks drop. Many individuals report clear morning focus.",
      evidenceNote: "This is the primary metabolic hallmark of 14:10 and 16:8 protocols. Autophagy increases gradually as a continuum, not an on/off switch."
    };
  } else if (effectiveHour < 20) {
    return {
      hourRange: "16 to 20 Hours",
      stageName: "Deep Lipid Oxidation & Mild Ketosis",
      category: "Sustained Fasting Physiology",
      whatHappens: {
        glycogen: "Liver glycogen reserves decline to low levels; hepatic gluconeogenesis maintains essential glucose requirements.",
        insulin: "Insulin remains fully suppressed at baseline; cellular nutrient-sensing cascades (mTOR) are substantially downregulated.",
        fatOxidation: "Fat oxidation is high and stable; muscle tissue spares glucose and relies almost entirely on fatty acids.",
        ketones: "Mild nutritional ketosis develops; circulating beta-hydroxybutyrate typically reaches 0.5 to 1.5 mmol/L."
      },
      howYouFeel: "Light stomach emptiness. Staying hydrated and consuming modest mineral electrolytes prevents mild fatigue or orthostatic dizziness.",
      evidenceNote: "Observed in 18:6 and 20:4 protocols. Cellular recycling (autophagy) markers show elevation in animal models, though precise human clinical measurement and hourly timing remain uncertain."
    };
  } else if (effectiveHour < 24) {
    return {
      hourRange: "20 to 24 Hours",
      stageName: "Full Fasting Physiology & Ketone Elevation",
      category: "OMAD & 24-Hour Transition",
      whatHappens: {
        glycogen: "Liver glycogen is substantially depleted; systemic glucose relies on endogenous glycerol, amino acids, and lactate gluconeogenesis.",
        insulin: "Basal insulin remains minimal; cellular energy-sensing and recycling pathways are engaged as part of a biological continuum.",
        fatOxidation: "High baseline physiological fat oxidation; systemic metabolism is adapted to lipid utilization.",
        ketones: "Circulating ketones may reach 1.0 to 2.0 mmol/L, supplying an increasing share of brain energy requirements."
      },
      howYouFeel: "Hunger tends to be episodic rather than constant. Physical energy is stable if hydration is maintained.",
      evidenceNote: "This marks the boundary of daily One Meal a Day (OMAD) routines. Going beyond 24 hours increases the necessity of medical supervision."
    };
  } else if (effectiveHour < 36) {
    return {
      hourRange: "24 to 36 Hours",
      stageName: "Prolonged Fasting & Moderate Ketosis",
      category: "Alternate-Day Fasting Continuum",
      whatHappens: {
        glycogen: "Liver glycogen is effectively depleted; muscle glycogen remains reserved strictly for internal skeletal muscle contraction.",
        insulin: "Minimal baseline insulin; counter-regulatory hormone signaling adjusts to help preserve structural tissue.",
        fatOxidation: "Sustained high-rate lipolysis; whole-body respiratory exchange ratio (RER) reflects near-total lipid combustion.",
        ketones: "Circulating beta-hydroxybutyrate typically ranges from 1.5 to 3.0 mmol/L, providing substantial cerebral fuel."
      },
      howYouFeel: "Appetite often decreases significantly due to central ketone effects, though mental fatigue and physical weakness can occur if electrolytes are neglected.",
      evidenceNote: "Corresponds to the zero-calorie fasting day of Alternate-Day Fasting (ADF). Not recommended for beginners or without physician clearance."
    };
  } else {
    return {
      hourRange: "36 to 48 Hours",
      stageName: "Extended Fasting & Gluconeogenic Stabilization",
      category: "Extended Medical Fasting Domain",
      whatHappens: {
        glycogen: "Hepatic glycogen stores are completely depleted; gluconeogenesis rates stabilize to match minimal obligatory glucose demands.",
        insulin: "Sustained baseline suppression; experimental models show increased intracellular recycling pathways (autophagic signaling), though human clinical rates vary considerably across individuals.",
        fatOxidation: "Near-exclusive reliance on free fatty acids and ketone oxidation across peripheral tissues.",
        ketones: "Elevated nutritional ketosis (typically 2.0 to 4.0 mmol/L in non-diabetic individuals). Blood pH is tightly buffered."
      },
      howYouFeel: "Deep metabolic shift. High vulnerability to orthostatic lightheadedness, cold sensitivity, and sleep disruption. Resting is required.",
      evidenceNote: "Clinical safety warning: fasts exceeding 36 hours carry elevated risks of refeeding syndrome upon meal resumption, electrolyte loss, and cardiac strain."
    };
  }
}

export function FastingStagesExplorer() {
  const [hours, setHours] = useState<number>(16);
  const [mealSize, setMealSize] = useState<MealSize>("normal");

  const stage = getStageDataForHour(hours, mealSize);

  return (
    <div id="explorer" className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-surface-container-high space-y-6 shadow-sm">
      {/* Header controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-surface-container-high">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" />
            <span className="font-headline text-lg sm:text-xl font-bold text-on-surface">
              Fasting Hour Explorer
            </span>
          </div>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
            Drag the slider or tap a preset to inspect physiological transitions across 0 to 48 hours.
          </p>
        </div>

        {/* Meal size toggle */}
        <div className="flex flex-col items-start sm:items-end gap-1.5 self-start sm:self-auto">
          <div className="flex items-center gap-2 bg-surface-container-low p-1.5 rounded-xl border border-surface-container">
            <span className="text-xs text-on-surface-variant font-medium pl-1">Last Meal:</span>
            {(["light", "normal", "heavy"] as MealSize[]).map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setMealSize(size)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold capitalize transition-all ${
                  mealSize === size
                    ? "bg-primary text-on-primary shadow-xs"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <span className="text-[11px] text-on-surface-variant italic">
            Approximate educational illustration; individual digestion and metabolic timing vary.
          </span>
        </div>
      </div>

      {/* Preset chips */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mr-1">
          Common Fasting Windows:
        </span>
        {PRESET_HOURS.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => setHours(preset)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              hours === preset
                ? "bg-primary text-on-primary border-primary shadow-xs"
                : "bg-surface-container-low border-surface-container text-on-surface-variant hover:text-on-surface hover:border-surface-container-highest"
            }`}
          >
            {preset}h {preset === 16 ? "(16:8)" : preset === 20 ? "(20:4)" : preset === 24 ? "(OMAD)" : preset === 36 ? "(ADF)" : ""}
          </button>
        ))}
      </div>

      {/* Main Slider Control */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <label htmlFor="fasting-hours-slider" className="text-xs sm:text-sm font-semibold text-on-surface flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-secondary" />
            <span>Fast Duration:</span>
          </label>
          <div className="text-right">
            <span className="font-headline text-2xl sm:text-3xl font-extrabold text-primary">
              {hours}
            </span>
            <span className="text-sm font-semibold text-on-surface-variant ml-1">Hours Fasted</span>
          </div>
        </div>

        <input
          id="fasting-hours-slider"
          type="range"
          min="0"
          max="48"
          step="1"
          value={hours}
          onChange={(e) => setHours(parseInt(e.target.value, 10))}
          className="w-full h-2.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
          aria-label="Hours fasted"
        />

        <div className="flex justify-between text-[11px] text-on-surface-variant px-0.5">
          <span>0h (Fed)</span>
          <span>12h</span>
          <span>16h (16:8)</span>
          <span>24h (OMAD)</span>
          <span>36h (ADF)</span>
          <span>48h (Extended)</span>
        </div>
      </div>

      {/* Dynamic Results Card */}
      <div className="p-5 sm:p-6 rounded-xl bg-surface-container-lowest border border-surface-container shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-surface-container">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              {stage.category} • {stage.hourRange}
            </span>
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-on-surface mt-0.5">
              {stage.stageName}
            </h3>
          </div>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold self-start sm:self-auto">
            {hours} Hours Mark
          </span>
        </div>

        {/* 4 Physiological Dimensions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="p-3.5 rounded-lg bg-surface-container-low border border-surface-container/70 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
              <Zap className="w-3.5 h-3.5" />
              <span>Liver Glycogen Status</span>
            </div>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              {stage.whatHappens.glycogen}
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-surface-container-low border border-surface-container/70 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-secondary">
              <Activity className="w-3.5 h-3.5" />
              <span>Insulin &amp; Glucagon Balance</span>
            </div>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              {stage.whatHappens.insulin}
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-surface-container-low border border-surface-container/70 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-tertiary">
              <Flame className="w-3.5 h-3.5" />
              <span>Fat Oxidation (Lipolysis)</span>
            </div>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              {stage.whatHappens.fatOxidation}
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-surface-container-low border border-surface-container/70 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
              <Droplets className="w-3.5 h-3.5" />
              <span>Circulating Ketone Concentrations</span>
            </div>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              {stage.whatHappens.ketones}
            </p>
          </div>
        </div>

        {/* Subjective experience and evidence caveat */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2 border-t border-surface-container/60 text-xs sm:text-sm">
          <div className="space-y-1">
            <span className="font-bold text-on-surface flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-secondary" />
              <span>Typical Sensations &amp; Appetite:</span>
            </span>
            <p className="text-on-surface-variant leading-relaxed">
              {stage.howYouFeel}
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-bold text-on-surface flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span>Clinical Evidence Note:</span>
            </span>
            <p className="text-on-surface-variant leading-relaxed">
              {stage.evidenceNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
