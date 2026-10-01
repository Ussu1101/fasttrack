import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/config/site";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  Activity,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  Sparkles,
  ShieldAlert,
  Flame,
  Dumbbell,
  Timer,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Exercise While Fasting: Workouts, Timing & Practical Tips",
  description:
    "Learn how to exercise while fasting, including workout timing, hydration, intensity, cardio, and strength training. Build a fasting and exercise routine that fits your schedule.",
  keywords: [
    "exercise while fasting",
    "can you exercise while fasting",
    "working out while fasting",
    "exercise during intermittent fasting",
    "workout while fasting",
    "exercise during fasting window",
    "when to exercise while intermittent fasting",
    "fasting and exercise",
    "cardio while fasting",
    "strength training while fasting",
    "exercising during 16:8 fasting",
  ],
  alternates: {
    canonical: "/guides/exercise-while-fasting",
  },
  openGraph: {
    title: "Exercise While Fasting: Workouts, Timing & Practical Tips | FastTrack",
    description:
      "Learn how to exercise while fasting, including workout timing, hydration, intensity, cardio, and strength training. Build a fasting and exercise routine that fits your schedule.",
    url: `${getSiteUrl()}/guides/exercise-while-fasting`,
    type: "article",
    publishedTime: "2026-10-01",
    modifiedTime: "2026-10-01",
    authors: ["Muhammad Usama"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exercise While Fasting: Workouts, Timing & Practical Tips | FastTrack",
    description:
      "Learn how to exercise while fasting, including workout timing, hydration, intensity, cardio, and strength training. Build a fasting and exercise routine that fits your schedule.",
  },
};

export default function ExerciseWhileFastingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Exercise While Fasting: A Practical Guide to Workouts and Fasting Windows",
    description:
      "Learn how to exercise while fasting, including workout timing, hydration, intensity, cardio, and strength training. Build a fasting and exercise routine that fits your schedule.",
    author: {
      "@type": "Person",
      name: "Muhammad Usama",
    },
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
    publisher: {
      "@type": "Organization",
      name: "FastTrack",
      url: getSiteUrl(),
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${getSiteUrl()}/guides/exercise-while-fasting`,
    },
  };

  return (
    <article className="max-w-4xl mx-auto px-4 md:px-8 py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Back Link */}
      <div className="mb-6">
        <Link
          href="/guides"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-container transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Guides</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-8 pb-8 border-b border-surface-container">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-xs font-semibold">
            Movement
          </span>
          <span className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>10 min read</span>
          </span>
        </div>

        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight">
          Exercise While Fasting: A Practical Guide to Workouts and Fasting Windows
        </h1>

        <div className="flex flex-wrap items-center gap-4 mt-4 text-xs sm:text-sm text-on-surface-variant">
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-primary" />
            <span>Muhammad Usama</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-secondary" />
            <span>Published October 1, 2026</span>
          </span>
        </div>
      </header>

      {/* Main Content */}
      <div className="space-y-12 text-on-surface font-body-md text-base sm:text-lg leading-relaxed">
        {/* Section 1: Can You Exercise While Fasting? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Can You Exercise While Fasting?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Yes, many people can exercise during an intermittent fasting routine. The more useful question is not simply whether exercise and fasting can be combined, but <strong>how you schedule your workouts around your fasting and eating windows</strong>.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            A fasting routine changes when you eat. Exercise adds another variable: when you train, how hard you train, and when you can eat and drink around the workout.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            There is no single workout time that works for everyone. A practical routine is one you can repeat while still getting enough food, fluids, rest, and recovery.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If you are building a fasting schedule, you can use the{" "}
            <Link
              href="/#calculator"
              className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              FastTrack fasting calculator
            </Link>{" "}
            to see when your fasting and eating windows begin and end.
          </p>
        </section>

        {/* Section 2: Exercise and Fasting: The Simple Rule */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Exercise and Fasting: The Simple Rule
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            A useful starting point is:
          </p>
          <blockquote className="p-4 rounded-xl bg-surface-container border-l-4 border-primary font-headline text-base sm:text-lg font-bold text-primary">
            Choose a workout time that fits your routine and allows you to manage hydration, food, training, and recovery appropriately.
          </blockquote>
          <p className="text-on-surface-variant leading-relaxed">
            Some people prefer exercising during the fasting window. Others feel more comfortable training after eating.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Your preferred timing can depend on the type of exercise, workout intensity, schedule, and how you feel during training.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            <a
              href="https://communityhealth.mayoclinic.org/featured-stories/intermittent-fasting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>Mayo Clinic</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            notes that athletes may find intermittent fasting difficult because they need to fuel and refuel appropriately for an active lifestyle.
          </p>
        </section>

        {/* Section 3: Can You Work Out During a Fasting Window? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Can You Work Out During a Fasting Window?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            <strong>You can, but your experience may vary.</strong>
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            A walk, easy cycling session, mobility work, or another lower-intensity activity may feel very different from a hard interval session or demanding strength workout.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If you are new to fasting, changing both your eating schedule and training routine at the same time can make it harder to tell what is causing fatigue or poor performance.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            A practical approach is to change one variable at a time and pay attention to how your workouts feel.
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                What If I Feel Fine Exercising Fasted?
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                If you feel comfortable during a particular workout and your overall routine is working well, you may prefer to keep that workout during your fasting window.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                That does not mean fasted exercise is required. It simply means that the timing works for you.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                What If I Feel Weak, Dizzy, or Unwell?
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Do not treat discomfort as a test of willpower.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                If you feel dizzy, faint, unusually weak, confused, or otherwise unwell during exercise, stop the workout and address the situation rather than trying to push through it.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                If these symptoms are recurring, discuss your fasting and exercise routine with a qualified healthcare professional.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: When Should You Exercise During Intermittent Fasting? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            When Should You Exercise During Intermittent Fasting?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            There are three common options:
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                Exercise Near the End of the Fasting Window
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                You can finish a workout shortly before your eating window begins.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                This can be convenient because your next meal is already scheduled soon after the workout.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                For example, if your eating window begins at noon, a late-morning workout may fit naturally into the routine.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                Exercise During the Eating Window
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                You can also train after you have started eating.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                This may be easier for people who prefer having food available before training or who need to refuel after demanding workouts.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                Exercise After a Meal
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Some people prefer to exercise after a meal rather than at the end of a fasting period.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                The exact gap between eating and exercise depends on the meal, workout, and individual comfort. There is no universal waiting time that applies to every person or every workout.
              </p>
            </div>
          </div>

          {/* Original FastTrack Visual: Workout + Fasting Window Planner */}
          <div className="my-8 p-5 sm:p-7 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-sm space-y-5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-secondary flex-shrink-0" />
              <span className="font-label-sm text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                FastTrack Visual Guide: Workout + Fasting Window Planner
              </span>
            </div>

            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Illustrated on a standard 16:8 schedule (16h fast / 8h eat, noon to 8:00 PM eating window). Three practical workout timing placements:
            </p>

            {/* 24-hour Timeline Bar */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between text-[11px] font-semibold text-on-surface-variant">
                <span>Midnight (00:00)</span>
                <span>Noon (12:00)</span>
                <span>Evening (20:00)</span>
                <span>Midnight (24:00)</span>
              </div>
              <div
                role="img"
                aria-label="24-hour schedule diagram illustrating a 16-hour fasting window from 8 PM to noon and an 8-hour eating window from noon to 8 PM with three workout placement options."
                className="w-full h-8 rounded-lg overflow-hidden flex border border-surface-container shadow-inner"
              >
                <div className="w-1/2 bg-primary/20 flex items-center justify-center text-[11px] font-bold text-primary">
                  Fasting Window (16h)
                </div>
                <div className="w-1/3 bg-secondary/30 flex items-center justify-center text-[11px] font-bold text-secondary">
                  Eating Window (8h)
                </div>
                <div className="w-1/6 bg-primary/20 flex items-center justify-center text-[11px] font-bold text-primary">
                  Fast
                </div>
              </div>
            </div>

            {/* Placement Options Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-surface-container-low border border-surface-container flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-primary text-xs sm:text-sm flex items-center gap-1">
                      <Timer className="w-3.5 h-3.5" />
                      Option A: Fasted
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                      Pre-Window
                    </span>
                  </div>
                  <p className="text-on-surface-variant text-xs leading-relaxed">
                    Late morning (e.g. 10:30–11:30 AM). Workout ends right as the eating window opens, allowing immediate refuel.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-surface-container text-[11px] font-medium text-secondary">
                  Best for: Light-to-moderate training &amp; prompt post-workout meal
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-container-low border border-secondary/30 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-on-surface text-xs sm:text-sm flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-secondary" />
                      Option B: Mid-Window
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-secondary/20 text-secondary font-semibold">
                      Fed State
                    </span>
                  </div>
                  <p className="text-on-surface-variant text-xs leading-relaxed">
                    Mid-afternoon (e.g. 2:00–4:00 PM). Train with energy from your first meal, with plenty of time for a second post-workout meal.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-surface-container text-[11px] font-medium text-secondary">
                  Best for: Demanding strength workouts &amp; heavy sessions
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-container-low border border-surface-container flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-on-surface text-xs sm:text-sm flex items-center gap-1">
                      <Dumbbell className="w-3.5 h-3.5 text-on-surface-variant" />
                      Option C: Post-Meal
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-semibold">
                      Late Window
                    </span>
                  </div>
                  <p className="text-on-surface-variant text-xs leading-relaxed">
                    Early evening (e.g. 6:00–7:00 PM). Complete training and finish the day&rsquo;s final nourishing meal before the fast resumes at 8:00 PM.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-surface-container text-[11px] font-medium text-secondary">
                  Best for: Standard work schedules &amp; evening exercise habits
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: What Is the Best Time to Exercise While Fasting? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Is the Best Time to Exercise While Fasting?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            There is no single &ldquo;best&rdquo; time for everyone.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Instead, look for a time that satisfies several practical requirements:
          </p>
          <ul className="space-y-2 pl-6 list-disc text-on-surface-variant">
            <li>You can consistently make the workout.</li>
            <li>You can stay hydrated.</li>
            <li>The workout feels manageable.</li>
            <li>You can fit food around training when needed.</li>
            <li>It does not interfere with sleep.</li>
            <li>You can recover adequately.</li>
            <li>The schedule works with your job, family, and other responsibilities.</li>
          </ul>
          <p className="text-on-surface-variant leading-relaxed">
            A theoretically perfect fasting schedule is not useful if you cannot follow it consistently.
          </p>
        </section>

        {/* Section 6: Cardio While Fasting */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Cardio While Fasting
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Cardio includes activities such as walking, cycling, jogging, swimming, and other aerobic exercise.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Whether you perform cardio during your fasting window or eating window is largely a scheduling and tolerance decision.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            For lower-intensity cardio, some people may find a fasted session comfortable. Others prefer eating first.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            For harder or longer sessions, pay closer attention to how you feel and whether your overall eating pattern provides enough opportunity to refuel.
          </p>

          <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2 mt-4">
            <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
              Walking While Fasting
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              Walking is one of the simplest activities to fit around a fasting schedule.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              You can place a walk during your fasting window, eating window, or around your meals depending on your routine.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              The important point is that you do not need to make the timing unnecessarily complicated.
            </p>
          </div>
        </section>

        {/* Section 7: Strength Training While Fasting */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Strength Training While Fasting
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Strength training can also be scheduled during a fasting routine, but the practical considerations can be different from an easy walk.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If you perform demanding resistance training, consider whether your eating window gives you enough opportunity to eat nutritious meals and recover between sessions.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If your training quality consistently suffers after moving a workout into the fasting window, moving the workout closer to or inside your eating window may be more practical.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            There is no requirement to lift weights while fasted simply because your fasting schedule allows it.
          </p>
        </section>

        {/* Section 8: What About High-Intensity Workouts? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What About High-Intensity Workouts?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            High-intensity exercise places greater demands on your ability to train and recover.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If a hard workout feels substantially worse when you perform it fasted, there is little practical reason to force that timing.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            You can experiment with moving the workout closer to an eating window and compare how the session feels.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If you participate in competitive sport, high-volume training, or demanding endurance work, fasting may require more careful planning.{" "}
            <a
              href="https://communityhealth.mayoclinic.org/featured-stories/intermittent-fasting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>Mayo Clinic</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            specifically notes that athletes may have difficulty fueling and refueling appropriately while intermittent fasting.
          </p>
        </section>

        {/* Section 9: What Should You Drink While Exercising During a Fast? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Should You Drink While Exercising During a Fast?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            <strong>Water is the simplest option for ordinary fasting.</strong>
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            FastTrack&rsquo;s{" "}
            <Link
              href="/guides/what-can-you-drink-while-fasting/"
              className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              What Can You Drink While Fasting?
            </Link>{" "}
            guide explains how water, plain tea, black coffee, electrolytes, and calorie-containing drinks differ during a fasting window.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            For exercise, hydration becomes especially important when you are sweating or exercising in hot conditions.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Do not confuse intermittent-fasting rules with medical or laboratory fasting instructions. If you have been instructed to fast for a medical test or procedure, follow the specific instructions you were given.
          </p>
        </section>

        {/* Section 10: Should You Eat Before a Workout? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Should You Eat Before a Workout?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Not necessarily.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Whether you prefer to eat before exercise depends on the workout and how you feel training without food.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If you perform well without eating beforehand, your workout can be scheduled during the fasting window.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If you feel that you need food before training, place the workout inside the eating window or adjust the fasting schedule.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            The goal is to build a routine that works in practice rather than forcing every workout into a fasting period.
          </p>
        </section>

        {/* Section 11: What Should You Eat After Exercising? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What Should You Eat After Exercising?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Your eating window should still provide opportunities for normal, balanced meals.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Instead of treating the post-workout meal as a special &ldquo;fasting hack,&rdquo; focus on the overall quality and adequacy of your diet.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            <a
              href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/intermittent-fasting/faq-20441303"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>Mayo Clinic</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            recommends nutritious foods such as fruits, vegetables, whole grains, low-fat dairy, and lean protein when following intermittent fasting.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If your eating window is so short that you regularly struggle to fit adequate nutrition around training, the schedule may not be a good fit for your activity level.
          </p>
        </section>

        {/* Section 12: Does Exercising While Fasting Burn More Fat? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Does Exercising While Fasting Burn More Fat?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            This question is common, but it is easy to oversimplify.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Exercise and fasting both affect how the body uses stored energy, but that does not mean exercising while fasted automatically produces a better long-term result.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            The useful question is whether your overall routine supports your goals, nutrition, training, and recovery.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Avoid treating a single workout&rsquo;s fuel state as a guarantee of a particular body-composition outcome.
          </p>
        </section>

        {/* Section 13: Does Fasted Exercise Improve Weight Loss? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Does Fasted Exercise Improve Weight Loss?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            There is not a simple rule that says exercising while fasting automatically leads to greater long-term weight loss.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Intermittent fasting itself is not a single standardized diet, and research continues to examine its benefits and risks.{" "}
            <a
              href="https://www.nia.nih.gov/news/calorie-restriction-and-fasting-diets-what-do-we-know"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>NIA</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            notes that there is still more to learn about the long-term effects and safety of fasting approaches.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If weight management is your goal, the broader pattern of food intake, physical activity, sleep, and adherence matters more than turning every workout into a fasted workout.
          </p>
        </section>

        {/* Section 14: Exercise During Different Fasting Schedules */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Exercise During Different Fasting Schedules
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Your workout options can change depending on the fasting schedule.
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                12:12
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                A 12-hour fasting period leaves a relatively broad eating window.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                This can make it easier to place exercise before or after meals without making the schedule complicated.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                See the{" "}
                <Link
                  href="/fasting-methods/12-12"
                  className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
                >
                  12:12 fasting method
                </Link>{" "}
                for the schedule.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                14:10
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                A 14-hour fast and 10-hour eating window still gives you several opportunities to place training around meals.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                See the{" "}
                <Link
                  href="/fasting-methods/14-10"
                  className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
                >
                  14:10 fasting method
                </Link>
                .
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                16:8
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                A 16-hour fast and 8-hour eating window is a common time-restricted eating schedule.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                You can train before the eating window, during it, or near the transition between the two.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                See the{" "}
                <Link
                  href="/fasting-methods/16-8"
                  className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
                >
                  16:8 fasting method
                </Link>
                .
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                18:6
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                A six-hour eating window gives you less flexibility around meals.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                If you train regularly, check whether the eating window gives you enough practical opportunity to eat and recover.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                See the{" "}
                <Link
                  href="/fasting-methods/18-6"
                  className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
                >
                  18:6 fasting method
                </Link>
                .
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                20:4
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                A four-hour eating window is more restrictive.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Fitting demanding training, meals, hydration, and recovery into such a short period can be challenging for some people.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                See the{" "}
                <Link
                  href="/fasting-methods/20-4"
                  className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
                >
                  20:4 fasting method
                </Link>
                .
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                OMAD
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                OMAD means one meal a day.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                A single daily meal creates a very narrow opportunity for food intake, which can make fueling and recovery around regular training more difficult.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                If you exercise frequently or intensely, consider whether this schedule gives you enough practical opportunity to meet your nutritional needs.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                See the{" "}
                <Link
                  href="/fasting-methods/omad"
                  className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
                >
                  OMAD fasting method
                </Link>
                .
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                5:2
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                The 5:2 pattern differs from daily time-restricted eating because the restriction occurs on two days of the week rather than every day.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Exercise planning therefore depends on what your particular 5:2 schedule looks like.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                See the{" "}
                <Link
                  href="/fasting-methods/5-2"
                  className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
                >
                  5:2 fasting method
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Section 15: A Simple Way to Schedule Exercise and Fasting */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            A Simple Way to Schedule Exercise and Fasting
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Try this five-step process:
          </p>

          <div className="space-y-4 pt-2">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                1. Choose Your Fasting Schedule
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Start with a schedule you can realistically follow.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                If you are new to intermittent fasting, read{" "}
                <Link
                  href="/guides/intermittent-fasting-for-beginners/"
                  className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
                >
                  Intermittent Fasting for Beginners
                </Link>
                .
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                2. Mark Your Eating Window
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Know when your eating window begins and ends.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                You can use the{" "}
                <Link
                  href="/#calculator"
                  className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
                >
                  FastTrack calculator
                </Link>{" "}
                to calculate the schedule.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                3. Place Your Workout
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Try the workout during the fasting window, near the transition, or inside the eating window.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                4. Evaluate the Session
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Pay attention to your energy, workout quality, hydration, and how you feel afterward.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-tight">
                5. Adjust Instead of Forcing It
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                If the timing repeatedly makes training difficult, change the workout time or fasting schedule.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Your fasting schedule should support your overall routine, not make every other part of your life harder.
              </p>
            </div>
          </div>
        </section>

        {/* Section 16: When Fasting and Exercise May Not Be a Good Combination */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            When Fasting and Exercise May Not Be a Good Combination
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Fasting is not appropriate for everyone.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            <a
              href="https://communityhealth.mayoclinic.org/featured-stories/intermittent-fasting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              <span>Mayo Clinic</span>
              <ExternalLink className="w-3.5 h-3.5 inline flex-shrink-0" />
            </a>{" "}
            notes that intermittent fasting may not be suitable for people under 18, people with a history of disordered eating, people who are pregnant or breastfeeding, and some people with medical conditions. It also notes that athletes may have difficulty fueling and refueling appropriately.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If you have diabetes, take medication affected by food intake, have a history of low blood sugar, are pregnant or breastfeeding, are under 18, or have a history of an eating disorder, discuss fasting with a qualified healthcare professional before changing your eating pattern.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If you are training for a competition or following a demanding athletic program, consider discussing your nutrition and fasting schedule with an appropriate sports or healthcare professional.
          </p>
        </section>

        {/* Section 17: What If You Feel Hungry During a Workout? */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            What If You Feel Hungry During a Workout?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Hunger can occur during a fasting period, especially while adjusting to a new eating schedule.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Hunger by itself does not tell you whether a workout is appropriate.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If hunger is accompanied by dizziness, faintness, unusual weakness, confusion, or other concerning symptoms, stop the workout and address the symptoms rather than continuing simply to preserve the fasting window.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            If this happens repeatedly, reconsider the timing or suitability of the fasting routine and seek professional advice when appropriate.
          </p>
        </section>

        {/* Section 18: Frequently Asked Questions */}
        <section className="space-y-6">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Can I exercise while fasting?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Yes, many people can combine exercise with intermittent fasting. The practical question is whether the workout timing works well with your hydration, nutrition, recovery, and individual tolerance.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Is it better to exercise before or after eating?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                There is no single answer for everyone. Some people prefer training during the fasting window, while others perform better after eating. Choose the timing that works with your workout and overall routine.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Can I do cardio while fasting?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Yes. Walking and other cardio can be scheduled during a fasting window or eating window. Adjust the timing if the workout consistently feels difficult when fasted.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Can I strength train while fasting?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Yes, strength training can be combined with intermittent fasting. If demanding sessions repeatedly feel worse during the fasting window, moving them closer to or inside the eating window may be more practical.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Should I drink water during a fasted workout?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                For ordinary intermittent fasting, water is the simplest choice for hydration. Exercise and hot conditions can increase fluid needs.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Does fasted exercise burn more fat?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Fasted exercise changes the immediate fuel environment, but that does not establish that it automatically produces better long-term results. Overall nutrition, training, activity, and adherence matter.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Can athletes use intermittent fasting?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Some athletes may find it difficult to fuel and refuel adequately while fasting. If you train heavily or compete, your nutrition and recovery needs deserve particular attention.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
              <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>What if I feel dizzy while exercising fasted?</span>
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                Stop the workout rather than trying to push through significant dizziness or other concerning symptoms. If symptoms recur, discuss the fasting and exercise routine with a qualified healthcare professional.
              </p>
            </div>
          </div>
        </section>

        {/* Section 19: Safety Note */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Safety Note
          </h2>
          <div className="p-5 sm:p-6 rounded-2xl bg-surface-container border border-surface-container-high space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold">
              <ShieldAlert className="w-5 h-5 text-primary flex-shrink-0" />
              <span>General Educational Information</span>
            </div>
            <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
              This guide is general educational information about exercise and intermittent fasting. It is not a diagnosis or personalized medical recommendation.
            </p>
            <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
              Fasting and exercise can affect people differently. Do not use this guide to override medical advice, medication instructions, or requirements for a medical test or procedure.
            </p>
            <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
              If you are pregnant or breastfeeding, under 18, have diabetes or another medical condition, take medication affected by food intake, have a history of low blood sugar, or have a history of an eating disorder, discuss fasting with a qualified healthcare professional before making changes.
            </p>
          </div>
        </section>

        {/* Section 20: Key Takeaways */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Key Takeaways
          </h2>
          <ul className="space-y-2.5 pl-6 list-disc text-on-surface-variant">
            <li>You can combine exercise with intermittent fasting, but the practical experience varies.</li>
            <li>There is no universal best time to work out while fasting.</li>
            <li>Lower-intensity exercise may be easier for some people to place during a fasting window.</li>
            <li>Harder or longer workouts may require more careful planning around food and recovery.</li>
            <li>Water is the simplest hydration choice during an ordinary fasting routine.</li>
            <li>If a workout repeatedly feels worse when fasted, move it closer to or inside your eating window.</li>
            <li>Athletes and people with demanding training schedules may have more difficulty fitting adequate fueling and refueling into a fasting routine.</li>
            <li>Do not treat fasted exercise as a guaranteed weight-loss or fat-loss advantage.</li>
            <li>If fasting or exercise causes concerning symptoms, stop and seek appropriate medical guidance.</li>
          </ul>

          <div className="mt-8 pt-6 border-t border-surface-container space-y-4">
            <h3 className="font-headline text-xl font-bold text-on-surface tracking-tight">
              Continue with FastTrack
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              If you want to build your fasting schedule around your daily routine, use the{" "}
              <Link
                href="/#calculator"
                className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
              >
                FastTrack fasting calculator
              </Link>
              .
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              You can also read:
            </p>
            <ul className="space-y-1.5 pl-6 list-disc text-primary font-semibold">
              <li>
                <Link
                  href="/guides/intermittent-fasting-for-beginners/"
                  className="hover:underline underline-offset-4"
                >
                  Intermittent Fasting for Beginners
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/how-to-choose-a-fasting-window/"
                  className="hover:underline underline-offset-4"
                >
                  How to Choose a Fasting Window
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/what-breaks-a-fast/"
                  className="hover:underline underline-offset-4"
                >
                  What Breaks a Fast?
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/what-can-you-drink-while-fasting/"
                  className="hover:underline underline-offset-4"
                >
                  What Can You Drink While Fasting?
                </Link>
              </li>
              <li>
                <Link
                  href="/fasting-methods"
                  className="hover:underline underline-offset-4"
                >
                  Fasting Methods
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 21: Sources */}
        <section className="pt-8 border-t border-surface-container space-y-4">
          <h2 className="font-headline text-2xl font-bold text-primary tracking-tight">
            Sources
          </h2>
          <ul className="space-y-3 font-body-sm text-sm text-on-surface-variant">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2"></span>
              <span>
                Johns Hopkins Medicine —{" "}
                <a
                  href="https://www.hopkinsmedicine.org/health/expert-qa/intermittent-fasting-what-is-it-and-how-does-it-work"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors inline-flex items-center gap-1"
                >
                  <span>Intermittent Fasting: What Is It, And How Does It Work?</span>
                  <ExternalLink className="w-3 h-3 inline flex-shrink-0" />
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2"></span>
              <span>
                Johns Hopkins Medicine —{" "}
                <a
                  href="https://podcasts.hopkinsmedicine.org/fasting-and-exercise/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors inline-flex items-center gap-1"
                >
                  <span>Fasting and Exercise</span>
                  <ExternalLink className="w-3 h-3 inline flex-shrink-0" />
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2"></span>
              <span>
                Mayo Clinic —{" "}
                <a
                  href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/intermittent-fasting/faq-20441303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors inline-flex items-center gap-1"
                >
                  <span>Intermittent fasting: What are the benefits?</span>
                  <ExternalLink className="w-3 h-3 inline flex-shrink-0" />
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2"></span>
              <span>
                Mayo Clinic Health System —{" "}
                <a
                  href="https://communityhealth.mayoclinic.org/featured-stories/intermittent-fasting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors inline-flex items-center gap-1"
                >
                  <span>Intermittent fasting</span>
                  <ExternalLink className="w-3 h-3 inline flex-shrink-0" />
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2"></span>
              <span>
                National Institute on Aging —{" "}
                <a
                  href="https://www.nia.nih.gov/news/calorie-restriction-and-fasting-diets-what-do-we-know"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors inline-flex items-center gap-1"
                >
                  <span>Calorie restriction and fasting diets: What do we know?</span>
                  <ExternalLink className="w-3 h-3 inline flex-shrink-0" />
                </a>
              </span>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
