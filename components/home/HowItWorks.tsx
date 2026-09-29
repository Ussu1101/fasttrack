import React from "react";
import { Sliders, Clock, Activity, CalendarCheck } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: "Select Protocol",
      description: "Pick your target fasting ratio based on current tolerance, from gentle 12:12 to intensive OMAD 23:1 or 5:2 weekly.",
      icon: Sliders,
      badgeColor: "bg-primary text-on-primary",
    },
    {
      num: 2,
      title: "Input Last Meal",
      description: "Log when your evening meal finishes to establish your schedule and map your fasting countdown.",
      icon: Clock,
      badgeColor: "bg-secondary text-on-secondary",
    },
    {
      num: 3,
      title: "Synthesize Schedule",
      description: "The pure engine constructs an exact 24-hour horizon showing fasting hours, break-fast time, and window close.",
      icon: Activity,
      badgeColor: "bg-primary-container text-on-primary-container",
    },
    {
      num: 4,
      title: "Sync & Adhere",
      description: "Export directly to your personal calendar (.ics) or print your fasting plan for zero-friction daily consistency.",
      icon: CalendarCheck,
      badgeColor: "bg-on-tertiary-container text-on-tertiary",
    },
  ];

  return (
    <section id="how-it-works" className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
      <div className="bg-surface-container-low rounded-2xl p-6 sm:p-10 lg:p-12 border border-surface-container">
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-12">
          <span className="font-label-sm text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest">
            Intuitive Workflow
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-primary font-bold tracking-tight mt-1">
            How FastTrack Works
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
            Transitioning to intermittent fasting shouldn&apos;t require complex spreadsheets or arbitrary guesswork. Follow four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-surface-container-lowest rounded-xl p-5 sm:p-6 border border-surface-container shadow-sm flex flex-col gap-3 justify-between hover:border-surface-container-high transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`w-9 h-9 rounded-full ${step.badgeColor} flex items-center justify-center font-headline text-sm font-bold shadow-sm`}>
                      {step.num}
                    </span>
                    <Icon className="w-5 h-5 text-on-surface-variant opacity-70" />
                  </div>
                  <h3 className="font-headline text-lg font-bold text-on-surface">
                    {step.title}
                  </h3>
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
