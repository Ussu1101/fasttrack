"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Droplets,
  Flame,
  Activity,
  Compass,
  Calendar,
  Sparkles,
} from "lucide-react";

export type StallDuration = "under-2-weeks" | "2-to-4-weeks" | "over-4-weeks";
export type FastingProtocol = "14-10-or-16-8" | "18-6-or-20-4" | "omad" | "adf-or-5-2";
export type WeighingMethod = "daily-fasted-average" | "sporadic-uncontrolled" | "weekly-scale-only" | "body-metrics-only";
export type CalorieIntakePattern = "strictly-measured" | "unmeasured-eating-window" | "frequent-liquid-calories-or-bites" | "structured-deficit";
export type SleepStressPattern = "rested-low-stress" | "poor-sleep-high-stress" | "intense-workouts-soreness" | "irregular-schedule";

export interface DiagnosticAnswers {
  stallDuration: StallDuration;
  protocol: FastingProtocol;
  weighingMethod: WeighingMethod;
  calorieIntake: CalorieIntakePattern;
  sleepStress: SleepStressPattern;
}

export type PlateauCategory =
  | "water-fluid-shifts"
  | "smaller-body-energy-needs"
  | "calorie-creep"
  | "measurement-artifact"
  | "adherence-drift";

export interface DiagnosticResult {
  category: PlateauCategory;
  title: string;
  badge: string;
  explanation: string;
  articleAnchor: string;
  articleAnchorLabel: string;
  actionPlan: string[];
  whatToObserve: string[];
}

export const DEFAULT_DIAGNOSTIC_ANSWERS: DiagnosticAnswers = {
  stallDuration: "under-2-weeks",
  protocol: "14-10-or-16-8",
  weighingMethod: "sporadic-uncontrolled",
  calorieIntake: "unmeasured-eating-window",
  sleepStress: "poor-sleep-high-stress",
};

export function evaluatePlateau(answers: DiagnosticAnswers): DiagnosticResult {
  const { stallDuration, weighingMethod, calorieIntake, sleepStress } = answers;

  // 1. Measurement Artifact: If weighing irregularly or only weekly single points with high scale focus
  if (
    weighingMethod === "sporadic-uncontrolled" ||
    (stallDuration === "under-2-weeks" && weighingMethod === "weekly-scale-only")
  ) {
    return {
      category: "measurement-artifact",
      title: "Scale Noise & Measurement Artifact",
      badge: "Measurement Artifact",
      explanation:
        "Your apparent stall is likely an artifact of measurement inconsistency rather than a true metabolic halt. Body weight fluctuates by 1 to 4 pounds across a single 24-hour cycle from hydration, gut residue, and glycogen storage. Without standardized morning weigh-ins or waist measurements, normal daily volatility obscures true fat loss trends.",
      articleAnchor: "#measurement-artifact",
      articleAnchorLabel: "Read the Science of Scale Variance",
      actionPlan: [
        "Record body weight daily for 14 consecutive mornings immediately after waking and using the restroom, before consuming water or food.",
        "Calculate a rolling 7-day median or average at the end of each week instead of comparing single isolated days.",
        "Add a bi-weekly waist circumference measurement with a flexible tape at the narrowest torso point to monitor body recomposition independent of scale water weight.",
      ],
      whatToObserve: [
        "A downward trend in your 7-day rolling average even if individual daily readings bounce up and down by 2 pounds.",
        "Looser waistline or belt notches even when scale weight temporarily stalls.",
      ],
    };
  }

  // 2. Water / Fluid Shifts: Short stall (< 2-3 weeks) accompanied by poor sleep, high stress, or muscle soreness
  if (
    stallDuration === "under-2-weeks" ||
    sleepStress === "poor-sleep-high-stress" ||
    sleepStress === "intense-workouts-soreness"
  ) {
    return {
      category: "water-fluid-shifts",
      title: "Transient Water & Fluid Retention",
      badge: "Fluid & Cortisol Shift",
      explanation:
        "Your scale stall is most likely caused by temporary water retention masking continuous adipose tissue loss. High cortisol from life stress or inadequate sleep triggers aldosterone-mediated fluid retention, while strenuous exercise causes microscopic muscular inflammation that holds intramuscular water. A 2 to 5 lb water shift can completely hide several weeks of fat loss.",
      articleAnchor: "#water-fluid-shifts",
      articleAnchorLabel: "Read More on Fluid Shifts & Cortisol",
      actionPlan: [
        "Prioritize a 7- to 8-hour sleep opportunity every night, establishing a consistent wind-down routine 60 minutes before lights out.",
        "Keep sodium intake stable rather than severely cycling salt, and ensure steady baseline hydration across the day.",
        "Continue your current fasting window without cutting calories further; give your body a 10- to 14-day observation window for fluid normalization.",
      ],
      whatToObserve: [
        "A sudden overnight 'whoosh' drop of 2 to 4 pounds once cumulative fatigue and cortisol normalize.",
        "Improved morning energy levels and reduced facial or ankle puffiness.",
      ],
    };
  }

  // 3. Calorie Creep: Unmeasured intake, frequent liquid calories, or snacking during the eating window
  if (
    calorieIntake === "unmeasured-eating-window" ||
    calorieIntake === "frequent-liquid-calories-or-bites"
  ) {
    return {
      category: "calorie-creep",
      title: "Subtle Energy Intake Creep",
      badge: "Intake Creep",
      explanation:
        "While intermittent fasting creates an effective time boundary, energy balance remains the physiological determinant of fat loss. Over several weeks of routine fasting, natural appetite can lead to subtle portion expansion, heavier cooking oil usage, or uncounted caloric beverages during the eating window that quietly erase a modest daily deficit.",
      articleAnchor: "#calorie-creep",
      articleAnchorLabel: "Review the Science of Calorie Creep",
      actionPlan: [
        "Complete a 7-day transparent dietary audit using a digital kitchen scale for cooking fats, dressings, nuts, and liquid additions.",
        "Ensure every meal contains 30 to 45 grams of complete protein and fibrous vegetables to maximize satiety before consuming calorically dense items.",
        "Eliminate caloric beverages (flavored coffees, sugary drinks, creamers) during both fasting hours and casual sipping windows.",
      ],
      whatToObserve: [
        "Identification of 200 to 400 calories of previously untracked daily energy intake.",
        "Resumption of a steady 0.5 to 1 lb weekly weight trend once true maintenance boundaries are re-established.",
      ],
    };
  }

  // 4. Smaller-Body Energy Needs: Established stall (over 4 weeks) with high tracking adherence
  if (stallDuration === "over-4-weeks" && calorieIntake === "strictly-measured") {
    return {
      category: "smaller-body-energy-needs",
      title: "Adjusted Energy Needs for a Smaller Body",
      badge: "Smaller Body Energy Needs",
      explanation:
        "If you have maintained consistent adherence for 4+ weeks after earlier weight loss, your stall reflects predictable thermodynamics: carrying a lighter body requires less basal and kinetic energy. The calorie target that created a 500-calorie deficit at your starting weight may now represent your exact neutral energy balance.",
      articleAnchor: "#smaller-body-energy-needs",
      articleAnchorLabel: "Read More on Energy Needs & Thermogenesis",
      actionPlan: [
        "Recalculate your total daily energy expenditure (TDEE) based on your current body weight rather than your starting baseline.",
        "Increase spontaneous daily movement by establishing a 7,500 to 10,000 daily step baseline to counteract subconscious drops in NEAT.",
        "If in a continuous deficit for 12+ weeks, take a structured 7- to 14-day diet break at your new maintenance calories to restore dietary adherence before establishing a gentle 250–350 kcal deficit.",
      ],
      whatToObserve: [
        "Renewed fat loss once daily energy expenditure is boosted by step targets and adjusted intake boundaries.",
        "Enhanced workout energy and reduced metabolic fatigue following a structured maintenance break.",
      ],
    };
  }

  // 5. Adherence Drift: Default fallback for inconsistent window scheduling or irregular routines
  return {
    category: "adherence-drift",
    title: "Behavioral Adherence & Window Drift",
    badge: "Adherence Drift",
    explanation:
      "Your stall appears to stem from behavioral adherence drift—subtle shifts where fasting windows shorten, weekend eating windows expand unpredictably, or inconsistent timing creates erratic metabolic rhythms. Restoring clear time boundaries is the most effective way to regain steady momentum.",
    articleAnchor: "#adherence-drift",
    articleAnchorLabel: "Read More on Adherence & Behavioral Stalls",
    actionPlan: [
      "Set fixed start and end times for your daily eating window for the next 14 days, including on weekends.",
      "Use a simple fasting timer app or phone alarm to maintain exact boundary discipline without second-guessing.",
      "Avoid compensating for weekend drift with extreme 24- or 48-hour rebound fasts, which perpetuate erratic eating cycles.",
    ],
    whatToObserve: [
      "Consistent hunger rhythm stabilization within 3 to 5 days of rigid schedule adherence.",
      "Reliable weekly scale progress without needing to lengthen fasting durations beyond your sustainable baseline.",
    ],
  };
}

export default function FastingPlateauDiagnostic() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answers, setAnswers] = useState<DiagnosticAnswers>(DEFAULT_DIAGNOSTIC_ANSWERS);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const totalSteps = 5;

  const handleSelect = <K extends keyof DiagnosticAnswers>(key: K, value: DiagnosticAnswers[K]) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (isCompleted) {
      setIsCompleted(false);
      setCurrentStep(totalSteps);
    } else if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers(DEFAULT_DIAGNOSTIC_ANSWERS);
    setCurrentStep(1);
    setIsCompleted(false);
  };

  const result = evaluatePlateau(answers);

  return (
    <div
      id="plateau-diagnostic"
      className="p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container shadow-sm space-y-6"
    >
      {/* Widget Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-surface-container">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Diagnostic Tool</span>
          </div>
          <h3 className="font-headline text-xl sm:text-2xl font-bold text-on-surface">
            Intermittent Fasting Plateau Self-Diagnostic
          </h3>
          <p className="text-xs sm:text-sm text-on-surface-variant">
            Answer 5 quick questions about your stall duration, eating window, and lifestyle to identify the most likely driver of your plateau.
          </p>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 self-start sm:self-center px-3 py-1.5 rounded-lg border border-surface-container text-xs font-semibold text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Tool</span>
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-on-surface-variant">
          <span>
            {isCompleted ? "Diagnostic Complete" : `Question ${currentStep} of ${totalSteps}`}
          </span>
          <span>{isCompleted ? "100%" : `${Math.round(((currentStep - 1) / totalSteps) * 100)}%`}</span>
        </div>
        <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${isCompleted ? 100 : ((currentStep - 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Diagnostic Steps */}
      {!isCompleted ? (
        <div className="space-y-6">
          {/* Step 1: Duration */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm sm:text-base font-bold text-on-surface mb-1">
                  1. How long has your body weight remained unchanged on the scale?
                </label>
                <p className="text-xs text-on-surface-variant">
                  Clinical weight loss plateaus are defined as 3 to 4 consecutive weeks without progress.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {[
                  {
                    value: "under-2-weeks",
                    title: "Under 2 weeks (1 to 13 days)",
                    desc: "Recent stall; high likelihood of temporary water or digestive variance.",
                  },
                  {
                    value: "2-to-4-weeks",
                    title: "2 to 4 weeks (developing plateau)",
                    desc: "Intermediate plateau where energy intake and water retention begin to overlap.",
                  },
                  {
                    value: "over-4-weeks",
                    title: "More than 4 weeks (established plateau)",
                    desc: "True physiological plateau warranting systematic adjustment of intake and activity.",
                  },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleSelect("stallDuration", opt.value as StallDuration)}
                    className={`text-left p-4 rounded-xl border transition-all ${
                      answers.stallDuration === opt.value
                        ? "bg-primary/5 border-primary text-primary ring-1 ring-primary"
                        : "bg-surface-container border-surface-container-high text-on-surface hover:bg-surface-container-high"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="block text-sm font-semibold">{opt.title}</span>
                        <span className="block text-xs text-on-surface-variant mt-0.5">{opt.desc}</span>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center ${
                          answers.stallDuration === opt.value
                            ? "border-primary bg-primary text-on-primary"
                            : "border-outline"
                        }`}
                      >
                        {answers.stallDuration === opt.value && <div className="w-1.5 h-1.5 rounded-full bg-surface" />}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Protocol */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm sm:text-base font-bold text-on-surface mb-1">
                  2. What intermittent fasting schedule are you currently following?
                </label>
                <p className="text-xs text-on-surface-variant">
                  Select the primary schedule you follow on most days of the week.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  {
                    value: "14-10-or-16-8",
                    title: "14:10 or 16:8 Protocol",
                    desc: "Daily 8- to 10-hour eating window with 2–3 structured meals.",
                  },
                  {
                    value: "18-6-or-20-4",
                    title: "18:6 or 20:4 (Warrior Diet)",
                    desc: "Condensed 4- to 6-hour eating window with 1–2 dense meals.",
                  },
                  {
                    value: "omad",
                    title: "OMAD (One Meal A Day / 23:1)",
                    desc: "Single eating window of roughly 1 hour per day.",
                  },
                  {
                    value: "adf-or-5-2",
                    title: "Alternate-Day Fasting or 5:2",
                    desc: "Full fast days alternating with normal feeding days.",
                  },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleSelect("protocol", opt.value as FastingProtocol)}
                    className={`text-left p-4 rounded-xl border transition-all ${
                      answers.protocol === opt.value
                        ? "bg-primary/5 border-primary text-primary ring-1 ring-primary"
                        : "bg-surface-container border-surface-container-high text-on-surface hover:bg-surface-container-high"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="block text-sm font-semibold">{opt.title}</span>
                        <span className="block text-xs text-on-surface-variant mt-0.5">{opt.desc}</span>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center flex-shrink-0 ${
                          answers.protocol === opt.value
                            ? "border-primary bg-primary text-on-primary"
                            : "border-outline"
                        }`}
                      >
                        {answers.protocol === opt.value && <div className="w-1.5 h-1.5 rounded-full bg-surface" />}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Weighing & Tracking Method */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm sm:text-base font-bold text-on-surface mb-1">
                  3. How do you currently weigh and measure your progress?
                </label>
                <p className="text-xs text-on-surface-variant">
                  Weighing frequency and environmental consistency heavily shape whether progress is visible.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {[
                  {
                    value: "sporadic-uncontrolled",
                    title: "Sporadically at irregular times of day",
                    desc: "Weighing after meals, after workouts, or at varying times with differing clothing.",
                  },
                  {
                    value: "weekly-scale-only",
                    title: "Once per week relying solely on scale weight",
                    desc: "Single weekly weigh-in vulnerable to random water fluctuations, with no waist measurements.",
                  },
                  {
                    value: "daily-fasted-average",
                    title: "Daily morning weigh-in under standardized fasted conditions",
                    desc: "Consistent wake-up weigh-in tracked as weekly moving averages or trends.",
                  },
                  {
                    value: "body-metrics-only",
                    title: "Comprehensive metrics (scale + waist tape + photo check)",
                    desc: "Tracking circumference measurements, gym strength, and photos alongside scale readings.",
                  },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleSelect("weighingMethod", opt.value as WeighingMethod)}
                    className={`text-left p-4 rounded-xl border transition-all ${
                      answers.weighingMethod === opt.value
                        ? "bg-primary/5 border-primary text-primary ring-1 ring-primary"
                        : "bg-surface-container border-surface-container-high text-on-surface hover:bg-surface-container-high"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="block text-sm font-semibold">{opt.title}</span>
                        <span className="block text-xs text-on-surface-variant mt-0.5">{opt.desc}</span>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center flex-shrink-0 ${
                          answers.weighingMethod === opt.value
                            ? "border-primary bg-primary text-on-primary"
                            : "border-outline"
                        }`}
                      >
                        {answers.weighingMethod === opt.value && <div className="w-1.5 h-1.5 rounded-full bg-surface" />}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Calorie Intake & Eating Window Discipline */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm sm:text-base font-bold text-on-surface mb-1">
                  4. How accurately are you tracking energy intake during your eating window?
                </label>
                <p className="text-xs text-on-surface-variant">
                  Fasting determines meal timing, but calorie intake during the eating window governs fat loss.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {[
                  {
                    value: "unmeasured-eating-window",
                    title: "Eating intuitively without measuring portions or cooking oils",
                    desc: "Eyeballing portions, nuts, dressings, and oils; possible subtle portion creep over time.",
                  },
                  {
                    value: "frequent-liquid-calories-or-bites",
                    title: "Frequent coffee additions, caloric drinks, or casual bites",
                    desc: "Milks/creamers in morning coffee, snacking while cooking, or energy-dense beverages.",
                  },
                  {
                    value: "strictly-measured",
                    title: "Weighing and tracking all food items with a digital food scale",
                    desc: "Precise measurement of grams, cooking fats, sauces, and liquids for at least 7 days.",
                  },
                  {
                    value: "structured-deficit",
                    title: "Consistent meal prep with fixed portion containers",
                    desc: "Stable repeatable meals with little daily ingredient variation.",
                  },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleSelect("calorieIntake", opt.value as CalorieIntakePattern)}
                    className={`text-left p-4 rounded-xl border transition-all ${
                      answers.calorieIntake === opt.value
                        ? "bg-primary/5 border-primary text-primary ring-1 ring-primary"
                        : "bg-surface-container border-surface-container-high text-on-surface hover:bg-surface-container-high"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="block text-sm font-semibold">{opt.title}</span>
                        <span className="block text-xs text-on-surface-variant mt-0.5">{opt.desc}</span>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center flex-shrink-0 ${
                          answers.calorieIntake === opt.value
                            ? "border-primary bg-primary text-on-primary"
                            : "border-outline"
                        }`}
                      >
                        {answers.calorieIntake === opt.value && <div className="w-1.5 h-1.5 rounded-full bg-surface" />}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Sleep, Stress & Activity */}
          {currentStep === 5 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm sm:text-base font-bold text-on-surface mb-1">
                  5. What best describes your current sleep, stress, and training environment?
                </label>
                <p className="text-xs text-on-surface-variant">
                  Elevated cortisol and training inflammation directly induce systemic fluid retention.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {[
                  {
                    value: "poor-sleep-high-stress",
                    title: "High psychological stress or under 7 hours of sleep per night",
                    desc: "Elevated cortisol promotes water retention and impairs appetite regulation.",
                  },
                  {
                    value: "intense-workouts-soreness",
                    title: "Recent increase in heavy resistance training or muscular soreness",
                    desc: "Muscular micro-tears cause acute local inflammation and glycogen/water storage.",
                  },
                  {
                    value: "irregular-schedule",
                    title: "Erratic daily sleep schedule and fluctuating meal times",
                    desc: "Circadian disruption causing inconsistent digestion and fluid shifts.",
                  },
                  {
                    value: "rested-low-stress",
                    title: "Consistently well-rested (7–8+ hours) and low stress levels",
                    desc: "Stable hormonal baseline with minimal stress-induced fluid shifts.",
                  },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleSelect("sleepStress", opt.value as SleepStressPattern)}
                    className={`text-left p-4 rounded-xl border transition-all ${
                      answers.sleepStress === opt.value
                        ? "bg-primary/5 border-primary text-primary ring-1 ring-primary"
                        : "bg-surface-container border-surface-container-high text-on-surface hover:bg-surface-container-high"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="block text-sm font-semibold">{opt.title}</span>
                        <span className="block text-xs text-on-surface-variant mt-0.5">{opt.desc}</span>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center flex-shrink-0 ${
                          answers.sleepStress === opt.value
                            ? "border-primary bg-primary text-on-primary"
                            : "border-outline"
                        }`}
                      >
                        {answers.sleepStress === opt.value && <div className="w-1.5 h-1.5 rounded-full bg-surface" />}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-surface-container">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                currentStep === 1
                  ? "opacity-40 cursor-not-allowed text-on-surface-variant"
                  : "text-on-surface bg-surface-container hover:bg-surface-container-high"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-primary text-on-primary text-xs sm:text-sm font-semibold shadow-sm hover:bg-primary/90 transition-colors"
            >
              <span>{currentStep === totalSteps ? "Generate Evaluation" : "Next Question"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Diagnostic Results Section */
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="p-6 rounded-2xl bg-surface-container border border-surface-container-high space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                Primary Contributor: {result.badge}
              </span>
              <button
                type="button"
                onClick={handleBack}
                className="text-xs text-primary font-semibold hover:underline inline-flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Revise Answers</span>
              </button>
            </div>

            <h4 className="font-headline text-xl sm:text-2xl font-bold text-on-surface">
              {result.title}
            </h4>

            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {result.explanation}
            </p>

            <div className="pt-2">
              <a
                href={result.articleAnchor}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
              >
                <span>{result.articleAnchorLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Realistic 2-Week Action Plan */}
          <div className="p-6 rounded-2xl bg-surface-container-low border border-surface-container space-y-3">
            <h5 className="font-headline text-base sm:text-lg font-bold text-on-surface flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Recommended 2-Week Action Plan</span>
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm text-on-surface-variant">
              {result.actionPlan.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Observation Checklist */}
          <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2.5">
            <h5 className="font-headline text-sm font-bold text-on-surface flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span>What to Observe Over the Next 14 Days</span>
            </h5>
            <ul className="space-y-1.5 text-xs sm:text-sm text-on-surface-variant">
              {result.whatToObserve.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Explicit Non-Diagnostic Educational Disclaimer */}
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-surface-container text-xs text-on-surface-variant leading-relaxed">
            <p>
              <strong>Educational Disclaimer:</strong> This self-diagnostic is an interactive educational tool designed to help you analyze common lifestyle, measurement, and metabolic factors. It does not provide medical diagnosis, clinical evaluation, or individualized treatment plans. Always consult a physician or licensed dietitian before undertaking significant caloric adjustments or if you experience concerning symptoms.
            </p>
          </div>

          {/* Retake Button */}
          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-surface-container text-xs sm:text-sm font-semibold text-on-surface hover:bg-surface-container transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Restart Diagnostic</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
