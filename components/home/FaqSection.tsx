"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "Does black coffee or unsweetened tea break my fast?",
    answer:
      "Plain water, naturally sparkling mineral water, unsweetened black coffee, and green or herbal teas contain negligible calories and do not stimulate significant digestive insulin secretion. For fasting purposes, the primary objective is avoiding added sugars, milks, creamers, or caloric syrups that interrupt digestive rest.",
  },
  {
    question: "What should I eat to break my fast comfortably without gastric distress?",
    answer:
      "After hours of digestive rest, prioritize easily digestible whole foods. High-quality protein (such as eggs, poultry, fish, or tofu), alongside healthy fats (avocado, olive oil) and lightly cooked vegetables provide a gentle refeeding transition. Avoid breaking your fast with large quantities of refined carbohydrates or deep-fried foods, which can cause sudden blood sugar fluctuations and digestive discomfort.",
  },
  {
    question: "Will intermittent fasting cause muscle loss?",
    answer:
      "Clinical nutritional studies indicate that time-restricted feeding does not inherently accelerate muscle loss compared to standard diets, provided total daily protein intake and regular resistance training are maintained. Meeting your body's overall nutritional needs within your designated eating window is the primary factor in supporting lean tissue.",
  },
  {
    question: "Can I exercise while in a fasted state?",
    answer:
      "Many individuals comfortably perform low-to-moderate intensity aerobic activity (such as brisk walking or steady cycling) during fasting hours. For intense weightlifting or high-demand training, personal tolerance varies. Scheduling demanding sessions closer to the start of your feeding window ensures post-workout recovery meals can be consumed soon after.",
  },
  {
    question: "How does 5:2 fasting differ from daily protocols like 16:8?",
    answer:
      "Daily protocols (such as 16:8, 14:10, and OMAD) establish an hourly eating window each calendar day. In contrast, 5:2 is an intermittent weekly rhythm: you eat normally according to biological hunger for 5 days of the week, and designate 2 non-consecutive days (such as Monday and Thursday) to consume a reduced intake of approximately 500–600 calories. FastTrack models 5:2 separately because it operates on a weekly schedule rather than a daily clock.",
  },
  {
    question: "Can I shift my fasting window on weekends or social occasions?",
    answer:
      "Yes. Flexibility is a primary practical advantage of intermittent fasting. If you have an evening dinner or weekend gathering, you can adjust your eating window forward or backward by 1 to 2 hours. FastTrack allows you to recalculate your target schedule anytime your final meal finish time changes.",
  },
];

export function FaqSection({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const HeadingTag = headingLevel;

  return (
    <section id="faq" className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">

      <div className="text-center max-w-xl mx-auto mb-10 md:mb-12">
        <span className="font-label-sm text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
          <HelpCircle className="w-4 h-4" />
          <span>Evidence-Based Answers</span>
        </span>
        <HeadingTag className="font-headline text-2xl sm:text-3xl lg:text-4xl text-primary font-bold tracking-tight mt-1">
          Frequently Asked Questions
        </HeadingTag>
        <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
          Clear, scientifically supported answers to common intermittent fasting questions.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {FAQS.map((faq, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <div
              key={faq.question}
              className="bg-surface-container-lowest rounded-xl border border-surface-container overflow-hidden shadow-sm transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full p-4 sm:p-5 text-left font-headline text-base sm:text-lg font-semibold text-on-surface flex items-center justify-between gap-4 hover:bg-surface-container-low/40 transition-colors"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-on-surface-variant font-body-md text-sm sm:text-base leading-relaxed border-t border-surface-container/60 pt-3 animate-in fade-in-50">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
