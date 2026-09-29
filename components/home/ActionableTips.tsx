import React from "react";
import { Droplet, Beef, Footprints, Moon, HeartPulse, Salad } from "lucide-react";

export function ActionableTips() {
  const tips = [
    {
      title: "Hydrate With Electrolytes",
      description: "Water, sparkling mineral water, unsweetened electrolytes, and plain black coffee or tea provide negligible calories during fasting windows.",
      icon: Droplet,
    },
    {
      title: "Anchor With Wholesome Protein",
      description: "Include quality protein, healthy fats, and dietary fiber in your final meal to support satiety throughout nighttime hours.",
      icon: Beef,
    },
    {
      title: "Gentle Morning Movement",
      description: "Light morning activity like walking pairs comfortably with fasting hours without demanding immediate glycogen replenishment.",
      icon: Footprints,
    },
    {
      title: "Fast While Sleeping",
      description: "Allow 7 to 8 of your fasting hours to take place overnight. By the time you wake up, your scheduled fasting window is already well underway.",
      icon: Moon,
    },
    {
      title: "Listen to True Physiological Cues",
      description: "Distinguish psychological habit cravings from true physiological distress. If feeling lightheaded, unwell, or weak, break your fast without hesitation.",
      icon: HeartPulse,
    },
    {
      title: "Break Fast Gently",
      description: "Begin with easily digestible whole foods like eggs, avocado, or a light soup before progressing to a larger complex meal.",
      icon: Salad,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
      <div className="text-center max-w-xl mx-auto mb-10 md:mb-12">
        <span className="font-label-sm text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest">
          Practical Principles
        </span>
        <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-primary font-bold tracking-tight mt-1">
          Everyday Habits for Consistent Fasts
        </h2>
        <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
          Practical evidence-informed habits to help maintain comfort, hydration, and steady energy during fasting hours.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {tips.map((tip) => {
          const Icon = tip.icon;
          return (
            <div
              key={tip.title}
              className="p-5 sm:p-6 bg-surface-container-lowest rounded-xl border border-surface-container shadow-sm flex items-start gap-4 hover:border-surface-container-high transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center flex-shrink-0 text-primary">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-headline text-base font-bold text-on-surface">
                  {tip.title}
                </h3>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-1.5 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
