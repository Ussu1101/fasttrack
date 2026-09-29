import React from "react";
import { BookOpen, Check, AlertTriangle, Flame, Clock, RefreshCw } from "lucide-react";

export function FastingScience() {
  return (
    <section id="science" className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-12">
        <div className="max-w-2xl">
          <span className="font-label-sm text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            <span>Educational Research Foundations</span>
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-primary font-bold tracking-tight mt-1">
            The Science of Intermittent Fasting
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
            Intermittent fasting structures daily eating habits, allowing metabolic pathways to alternate between nutrient storage and baseline digestive recovery.
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Autophagy */}
        <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl p-6 sm:p-8 border border-surface-container shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-primary mb-3">
              <RefreshCw className="w-6 h-6 text-primary" />
              <h3 className="font-headline text-xl sm:text-2xl font-bold">
                Cellular Maintenance & Autophagic Signaling
              </h3>
            </div>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              In cellular and laboratory research, prolonged pauses in nutrient intake are associated with shifts in key metabolic sensors, including AMPK activation and downregulated mTOR signaling. These pathways coordinate cellular housekeeping mechanisms, including the recycling of damaged components. In humans, the timing and extent of these processes vary widely based on age, nutritional background, exercise, and liver glycogen reserves.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-surface-container flex flex-wrap items-center gap-4 text-on-surface text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 font-medium">
              <Check className="w-4 h-4 text-secondary flex-shrink-0" />
              <span>Cellular stress response pathways</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Check className="w-4 h-4 text-secondary flex-shrink-0" />
              <span>Studied in translational models</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Check className="w-4 h-4 text-secondary flex-shrink-0" />
              <span>Substantial individual variation</span>
            </div>
          </div>
        </div>

        {/* Card 2: Insulin Dynamics */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 border border-surface-container shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-secondary mb-3">
              <Flame className="w-6 h-6 text-secondary" />
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">
                Insulin & Fuel Utilization
              </h3>
            </div>
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Meals provoke insulin secretion to facilitate glucose clearance. In the post-absorptive state, circulating insulin gradually returns to baseline levels, permitting the enzymatic mobilization of stored triglycerides for resting fuel.
            </p>
          </div>
          <div className="mt-6 p-3 rounded-lg bg-surface-container border border-surface-container-high text-xs">
            <span className="font-semibold text-on-surface block">Research Summary</span>
            <span className="text-on-surface-variant mt-0.5 block">
              Time-restricted eating provides periodic intervals of low baseline insulin, promoting metabolic flexibility.
            </span>
          </div>
        </div>

        {/* Card 3: Circadian Digestion */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 border border-surface-container shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-on-tertiary-container mb-3">
              <Clock className="w-6 h-6 text-on-tertiary-container" />
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">
                Circadian Rhythm Alignment
              </h3>
            </div>
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Chronobiology studies indicate that gastrointestinal motility, insulin sensitivity, and enzyme secretion follow natural 24-hour diurnal rhythms. Large late-night meals close to bedtime can conflict with core temperature drops necessary for sleep.
            </p>
          </div>
          <div className="mt-6 p-3 rounded-lg bg-tertiary-fixed/30 border border-tertiary-fixed-dim/30 text-xs">
            <span className="font-semibold text-tertiary-container block">Circadian Habit</span>
            <span className="text-on-surface-variant mt-0.5 block">
              Concluding food intake 2 to 3 hours before sleep supports natural nighttime physiology and digestion.
            </span>
          </div>
        </div>

        {/* Card 4: Frequent Pitfalls */}
        <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl p-6 sm:p-8 border border-surface-container shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-error mb-3">
              <AlertTriangle className="w-6 h-6 text-error" />
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">
                Common Beginner Fasting Missteps
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
              <div className="p-3.5 bg-surface-container-low rounded-xl border border-surface-container">
                <span className="font-semibold text-xs sm:text-sm text-on-surface block mb-1">
                  Inadequate Hydration
                </span>
                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                  Lower insulin levels during fasting can increase urinary sodium excretion. Consistent fluid and mineral intake supports overall hydration.
                </p>
              </div>

              <div className="p-3.5 bg-surface-container-low rounded-xl border border-surface-container">
                <span className="font-semibold text-xs sm:text-sm text-on-surface block mb-1">
                  Severe Caloric Restriction
                </span>
                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                  Intermittent fasting organizes meal timing rather than mandating extreme caloric deficits. Prioritize balanced nutrient density during eating windows.
                </p>
              </div>

              <div className="p-3.5 bg-surface-container-low rounded-xl border border-surface-container">
                <span className="font-semibold text-xs sm:text-sm text-on-surface block mb-1">
                  Accelerating Too Fast
                </span>
                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                  Allow your routine to adapt gradually using 12:12 or 14:10 before considering more condensed daily windows like 20:4 or OMAD.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
