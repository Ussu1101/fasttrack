import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, AlertTriangle, HeartPulse, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Disclaimer & Clinical Contraindications",
  description:
    "Important safety guidance and clinical contraindications for intermittent fasting. FastTrack is an educational utility and does not provide medical advice.",
  alternates: {
    canonical: "/medical-disclaimer",
  },
};

export default function MedicalDisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-10 sm:py-16">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center flex-shrink-0 shadow-sm">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <div>
          <span className="font-label-sm text-xs text-secondary font-bold uppercase tracking-widest">
            Trust & Clinical Responsibility
          </span>
          <h1 className="font-headline text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Medical Disclaimer & Safety Notice
          </h1>
        </div>
      </div>

      <div className="mt-8 space-y-8 text-on-surface font-body-md text-base sm:text-lg leading-relaxed">
        {/* Core Premise */}
        <div className="p-6 rounded-2xl bg-surface-container-low border border-surface-container space-y-3">
          <h2 className="font-headline text-xl font-bold text-on-surface flex items-center gap-2">
            <HeartPulse className="w-5 h-5 text-primary" />
            <span>Informational & Educational Nature Only</span>
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
            The calculations, schedules, biological stage descriptions, and articles provided on FastTrack are created solely for informational, behavioral timing, and educational purposes. FastTrack is <strong>not</strong> a medical device, diagnosis engine, or therapeutic prescription. Nothing on this website should be interpreted as medical advice, clinical diagnosis, or a replacement for consultation with a licensed healthcare physician.
          </p>
        </div>

        {/* Absolute Contraindications */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl font-bold text-error flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-error" />
            <span>Who Should NOT Practice Intermittent Fasting</span>
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
            Intermittent fasting protocols—particularly prolonged durations like 18:6, 20:4, and OMAD—impose metabolic and endocrine stress that can be hazardous for certain populations. Fasting is contraindicated for:
          </p>

          <ul className="space-y-3 pl-2">
            <li className="flex items-start gap-3 text-sm sm:text-base text-on-surface-variant">
              <span className="w-2 h-2 rounded-full bg-error mt-2 flex-shrink-0" />
              <span>
                <strong className="text-on-surface">Pregnant or Breastfeeding Individuals: </strong>
                Fetal development and milk production demand consistent energy substrates, essential fatty acids, and continuous micronutrient delivery.
              </span>
            </li>
            <li className="flex items-start gap-3 text-sm sm:text-base text-on-surface-variant">
              <span className="w-2 h-2 rounded-full bg-error mt-2 flex-shrink-0" />
              <span>
                <strong className="text-on-surface">History of Eating Disorders: </strong>
                Individuals with past or present diagnoses of anorexia nervosa, bulimia nervosa, binge eating disorder, or orthorexia should avoid time-restricted feeding rules that can trigger restrictive or binge-eating cycles.
              </span>
            </li>
            <li className="flex items-start gap-3 text-sm sm:text-base text-on-surface-variant">
              <span className="w-2 h-2 rounded-full bg-error mt-2 flex-shrink-0" />
              <span>
                <strong className="text-on-surface">Minors Under 18 Years of Age: </strong>
                Growing adolescents and children experience distinct developmental hormone and caloric requirements and should not fast without pediatrician supervision.
              </span>
            </li>
            <li className="flex items-start gap-3 text-sm sm:text-base text-on-surface-variant">
              <span className="w-2 h-2 rounded-full bg-error mt-2 flex-shrink-0" />
              <span>
                <strong className="text-on-surface">Type 1 Diabetes Mellitus: </strong>
                Unsupervised fasting in insulin-dependent diabetes carries a high risk of life-threatening hypoglycemia and diabetic ketoacidosis (DKA).
              </span>
            </li>
          </ul>
        </section>

        {/* Prescription Medications & Chronic Conditions */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl font-bold text-on-surface">
            Fasting, Medications, and Chronic Conditions
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
            If you take prescription medications, especially:
          </p>
          <ul className="space-y-2 pl-4 list-disc text-sm sm:text-base text-on-surface-variant">
            <li>Oral hypoglycemics (metformin, sulfonylureas, SGLT2 inhibitors) or insulin for Type 2 Diabetes;</li>
            <li>Antihypertensive medications (blood pressure drugs);</li>
            <li>Medications that require food ingestion to prevent gastric ulceration (NSAIDs, certain antibiotics);</li>
          </ul>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
            you must work directly with your prescribing healthcare provider to adjust dosages before changing meal timings.
          </p>
        </section>

        {/* Uncertainty and Biological Variation */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl font-bold text-on-surface">
            Physiological Variation & Scientific Uncertainty
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
            Every human body possesses unique metabolic, hormonal, and enzymatic profiles. Milestones described on FastTrack (such as the onset of fat oxidation or autophagic signaling) represent generalized biological ranges observed in controlled scientific literature. The exact timing of these shifts varies based on basal glycogen depletion, past meal composition, physical activity, sleep, age, and individual genetic traits. FastTrack makes no guarantees of specific weight loss, metabolic outcomes, or therapeutic disease reversals.
          </p>
        </section>

        {/* When to Stop */}
        <section className="p-6 rounded-2xl bg-surface-container border border-surface-container-high space-y-3">
          <h3 className="font-headline text-lg font-bold text-on-surface">
            When to Break Your Fast Immediately
          </h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Always listen to your body. If you experience dizziness, lightheadedness, cold sweats, heart palpitations, nausea, persistent headaches, or fainting, terminate your fast immediately by drinking water with electrolytes and consuming a balanced, easily digestible whole-food snack.
          </p>
        </section>

        <div className="pt-6 border-t border-surface-container flex items-center justify-between">
          <Link
            href="/#calculator"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-semibold text-sm rounded-lg hover:bg-primary-container transition-all shadow-sm"
          >
            <span>Return to FastTrack Calculator</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
