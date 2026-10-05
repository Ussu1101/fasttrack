import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/config/site";
import NightShiftFastingScheduler from "@/components/tools/NightShiftFastingScheduler";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  Activity,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  ShieldAlert,
  ArrowRight,
  Coffee,
  Moon,
  Briefcase,
  AlertTriangle,
  Utensils,
  Hourglass,
  Scale,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Intermittent Fasting for Night Shift Workers: Build a Schedule Around Your Shifts",
  description:
    "Learn how to structure intermittent fasting on night shift. Compare 16:8 and 14:10 night shift eating windows, master rotating shift transitions, caffeine timing, and build your custom schedule.",
  keywords: [
    "intermittent fasting for night shift workers",
    "fasting on night shift",
    "best eating window for night shift",
    "16:8 night shift schedule",
    "night shift intermittent fasting",
    "shift worker fasting",
  ],
  alternates: {
    canonical: "/fasting-for-night-shift-workers",
  },
  openGraph: {
    title: "Intermittent Fasting for Night Shift Workers: Build a Schedule Around Your Shifts | FastTrack",
    description:
      "Learn how to structure intermittent fasting on night shift. Compare 16:8 and 14:10 night shift eating windows, master rotating shift transitions, caffeine timing, and build your custom schedule.",
    url: `${getSiteUrl()}/fasting-for-night-shift-workers`,
    type: "article",
    publishedTime: "2026-10-05",
    modifiedTime: "2026-10-05",
    authors: ["Muhammad Usama"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intermittent Fasting for Night Shift Workers: Build a Schedule Around Your Shifts | FastTrack",
    description:
      "Build a workable intermittent fasting schedule around night shifts. Discover practical eating windows, caffeine cut-offs, anchor sleep, and rotating transition guidelines.",
  },
};

const FAQS = [
  {
    question: "Can you do intermittent fasting while working night shifts?",
    answer:
      "Yes, many night shift workers successfully practice intermittent fasting by shifting their eating window into the late afternoon or early shift hours. However, night shift work places unique physiological demands on circadian rhythms and digestion. Rather than adhering to rigid daytime rules, shift workers must prioritize digestive comfort, consistent sleep, and flexible scheduling over perfection.",
  },
  {
    question: "What is a practical 16:8 schedule for a night shift?",
    answer:
      "A practical 16:8 schedule for a standard 19:00 to 07:00 night shift is an eating window from 16:00 to 00:00 (4:00 PM to midnight), followed by 16 hours of fasting from 00:00 to 16:00. This allows a hearty, balanced meal before your shift begins and a lighter mid-shift meal, while concluding digestion several hours before daytime sleep (such as 08:30 to 15:30).",
  },
  {
    question: "Should I eat before or during a night shift?",
    answer:
      "Most shift workers find it easiest to consume their primary caloric meal before the shift starts (between 16:00 and 18:30) and keep any food during the early shift light and easily digestible. Eating large, heavy meals between 02:00 and 05:00 often provokes severe sluggishness and digestive upset because gastrointestinal motility naturally slows down during biological nighttime.",
  },
  {
    question: "When should I stop caffeine before sleeping?",
    answer:
      "You should generally conclude caffeine intake roughly 6 hours before your intended sleep onset. If your planned sleep begins at 08:30 AM, aim for your final coffee or caffeinated tea no later than 02:30 AM. Caffeine has a typical half-life of 4 to 6 hours, and consuming stimulants late in your shift directly impairs daytime sleep depth and rapid eye movement (REM) recovery.",
  },
  {
    question: "Should I fast on my days off?",
    answer:
      "On days off, you can either maintain your shifted hours or transition toward daytime social dining using a gentle bridge schedule (such as 12:12 or 14:10). Avoid attempting an aggressive 24-hour fast to force an immediate circadian reset, as prolonged food deprivation combined with shifting sleep schedules frequently leads to rebound bingeing and heightened metabolic stress.",
  },
  {
    question: "Is intermittent fasting safe for safety-critical shift workers?",
    answer:
      "Intermittent fasting requires heightened caution or may be contraindicated for individuals in safety-critical roles, including emergency physicians, paramedics, air traffic controllers, commercial drivers, and heavy machinery operators. Acute drops in blood sugar, unexpected dizziness, or fatigue can impair vigilance and reaction times. Anyone in safety-sensitive professions must seek occupational or medical guidance before altering dietary routines.",
  },
];

export default function FastingForNightShiftWorkersPage() {
  const siteUrl = getSiteUrl();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Intermittent Fasting for Night Shift Workers: Build a Schedule Around Your Shifts",
    description:
      "Learn how to structure intermittent fasting on night shift. Compare 16:8 and 14:10 night shift eating windows, master rotating shift transitions, caffeine timing, and build your custom schedule.",
    author: {
      "@type": "Person",
      name: "Muhammad Usama",
    },
    datePublished: "2026-10-05",
    dateModified: "2026-10-05",
    publisher: {
      "@type": "Organization",
      name: "FastTrack",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/fasting-for-night-shift-workers`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Fasting for Night Shift Workers",
        item: `${siteUrl}/fasting-for-night-shift-workers`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Night-Shift Fasting Scheduler",
    url: `${siteUrl}/fasting-for-night-shift-workers#night-shift-scheduler`,
    applicationCategory: "HealthApplication",
    operatingSystem: "All",
    description:
      "Interactive 24-hour fasting and eating scheduler designed specifically for night shift and rotating shift workers. Coordinates shifts, daytime sleep, caffeine cut-offs, and days-off transitions.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <article className="max-w-4xl mx-auto px-4 md:px-8 py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
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
            Shift Work &amp; Lifestyle Scheduling
          </span>
          <span className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>14 min read</span>
          </span>
        </div>

        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight">
          Intermittent Fasting for Night Shift Workers: Build a Schedule Around Your Shifts
        </h1>

        <div className="flex flex-wrap items-center gap-4 mt-4 text-xs sm:text-sm text-on-surface-variant">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-primary" />
            <span>By Muhammad Usama</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-primary" />
            <span>Published: October 5, 2026</span>
          </div>
        </div>
      </header>

      {/* Main Editorial Content */}
      <div className="space-y-10 sm:space-y-12">
        {/* Lead In */}
        <section className="space-y-4 font-body-lg text-base sm:text-lg text-on-surface leading-relaxed p-5 sm:p-6 bg-surface-container-low/60 rounded-2xl border border-surface-container">
          <p>
            Almost all standard intermittent fasting advice assumes a conventional nine-to-five life: you wake up at 7:00 AM, skip breakfast, eat between 12:00 PM and 8:00 PM, and go to bed at 11:00 PM. But if you work a 12-hour overnight shift from 19:00 to 07:00, that generic advice quickly collapses.
          </p>
          <p>
            Working through the biological night while sleeping during daylight hours turns natural hunger cues and circadian digestive rhythms upside down. Attempting to force daytime fasting templates onto nocturnal work patterns often leads to midnight bingeing, profound lethargy, and disrupted daytime sleep.
          </p>
          <p>
            Fasting on night shift is entirely feasible, but it requires a specialized scheduling framework. This comprehensive guide and interactive tool will help you construct a mathematically sound, physiologically sensible fasting routine tailored to your shift times, daytime sleep, and days off.
          </p>
        </section>

        {/* Section: Interactive Scheduler */}
        <section className="space-y-4">
          <div>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Interactive Night-Shift Fasting Scheduler
            </h2>
            <p className="text-on-surface-variant leading-relaxed mt-2">
              Use this tool to coordinate your shift hours, planned daytime sleep, and fasting protocol. Inspect both work-night and recovery day-off schedules on a 24-hour timeline. If you are comparing general fasting lengths before building a shift schedule, explore our guide on{" "}
              <Link href="/guides/how-to-choose-a-fasting-window" className="text-primary font-semibold underline">
                how to choose a fasting window
              </Link>
              , or review our reference on{" "}
              <Link href="/fasting-methods/12-12" className="text-primary font-semibold underline">
                12:12 intermittent fasting
              </Link>{" "}
              for a gentler starting baseline.
            </p>
          </div>

          <NightShiftFastingScheduler />
        </section>

        {/* Section 1: Why Standard 16:8 Advice Breaks Down on Night Shifts */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Why Standard 16:8 Advice Can Break Down on Night Shifts
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Intermittent fasting protocols like 16:8 were popularized around daytime metabolic schedules. When an individual works through the night, several interlocking challenges emerge:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="p-5 rounded-2xl bg-surface-container border border-surface-container-high space-y-2.5">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Circadian Challenge 1</span>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">
                Circadian Misalignment of Peripheral Clocks
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                The central circadian master clock (the suprachiasmatic nucleus) responds primarily to light, while peripheral metabolic clocks in the liver, pancreas, and gastrointestinal tract respond heavily to food timing. Consuming large meals at 03:00 AM forces peripheral metabolic organs to process nutrients at the exact circadian trough when insulin sensitivity is lowest and gastric motility is slowest.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container border border-surface-container-high space-y-2.5">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider">Circadian Challenge 2</span>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">
                The Food vs. Daytime Sleep Conflict
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                If a worker finishes a 12-hour shift at 07:00 AM and eats a heavy breakfast at 07:30 AM before sleeping at 08:30 AM, digestion directly elevates nocturnal core body temperature and increases acid reflux. As detailed in our guide on{" "}
                <Link href="/guides/fasting-and-sleep" className="text-primary font-semibold underline">
                  intermittent fasting and sleep
                </Link>
                , sleeping on an active stomach degrades deep restorative sleep architecture.
              </p>
            </div>
          </div>

          <p className="text-on-surface-variant leading-relaxed pt-2">
            Consequently, night shift workers cannot simply copy daytime fasting templates without adjusting meal timing relative to their personal sleep window.
          </p>
        </section>

        {/* Section 2: Three Workable Eating-Window Patterns */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Three Workable Eating-Window Patterns for Night Shifts
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              No single schedule works for every night worker. Depending on your job intensity, family responsibilities, and appetite rhythms, three primary patterns offer practical compromises:
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Pattern A</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">Recommended for Most</span>
              </div>
              <h3 className="font-headline text-lg font-bold text-on-surface">
                1. Eating Primarily Before the Shift (16:00 – 00:00)
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                In this model, your main caloric meal occurs at home prior to reporting for duty (e.g., 16:30 or 17:00). You bring a second balanced meal or light snack to consume during the early hours of your shift before midnight. From midnight onward until daytime sleep, you fast completely, consuming only water, black coffee, or plain herbal tea.
              </p>
              <div className="text-xs text-on-surface-variant pt-1 border-t border-surface-container-high">
                <strong>Trade-offs:</strong> Highly protective of daytime sleep quality because digestion is fully settled by 08:00 AM. Requires mental discipline between 03:00 and 06:00 AM when fatigue-driven snack cravings peak.
              </div>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">Pattern B</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary font-semibold">Shift-Centered</span>
              </div>
              <h3 className="font-headline text-lg font-bold text-on-surface">
                2. Eating During the Early Part of the Shift (19:00 – 03:00)
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Your eating window opens right as your shift begins at 19:00 and closes at 03:00 AM. You eat a small meal at work around 20:00 and a second meal around 01:30 or 02:00 AM. The final 4 hours of your shift and your commute home are fasted, leaving a 4-hour digestive buffer before morning sleep at 08:30 AM.
              </p>
              <div className="text-xs text-on-surface-variant pt-1 border-t border-surface-container-high">
                <strong>Trade-offs:</strong> Well suited for physical jobs requiring ongoing energy throughout the first half of the night. However, eating at 02:00 AM can cause subtle sluggishness for individuals with sensitive digestion.
              </div>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-tertiary uppercase tracking-wider">Pattern C</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-semibold">Flexible / Split</span>
              </div>
              <h3 className="font-headline text-lg font-bold text-on-surface">
                3. The Gentle 14:10 or 12:12 Split Approach
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                If an 8-hour window feels excessively constrained during grueling 12-hour nursing or factory shifts, expanding to a 10-hour or 12-hour eating window (such as 15:00 to 01:00) provides greater flexibility. You consume an afternoon meal, an evening dinner at work, and a midnight snack.
              </p>
              <div className="text-xs text-on-surface-variant pt-1 border-t border-surface-container-high">
                <strong>Trade-offs:</strong> Drastically reduces adaptation stress and compensatory hunger. Offers a slightly shorter fasting duration, but dramatically improves long-term consistency and safety.
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Rotating-Shift Transition Days */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Rotating-Shift Transition Days: Moving Between Work &amp; Off Days
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            The single most difficult aspect of shift-work fasting is the transition day—the 24- to 48-hour period when you switch from a block of night shifts back to daytime family life, or vice versa.
          </p>
          <div className="p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-3">
            <h3 className="font-headline text-base font-bold text-on-surface">
              The Golden Rule: Never Force a 24-Hour Compensatory Fast
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              When transitioning from nights to days, many workers attempt a grueling 24-hour fast to &ldquo;reset&rdquo; their schedule. This is counterproductive: your body is already coping with severe circadian shifting and sleep deprivation. Layering extreme caloric restriction on top triggers massive cortisol surges, lightheadedness, and intense rebound bingeing.
            </p>
            <div className="space-y-2 pt-1 text-xs sm:text-sm text-on-surface-variant">
              <p><strong>A practical 3-step transition protocol:</strong></p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>The Morning of Your Final Shift:</strong> Sleep 3 to 4 hours as a &ldquo;bridge nap&rdquo; (e.g., 08:30 to 12:30 PM), rather than sleeping all day.</li>
                <li><strong>The Afternoon of Transition:</strong> Wake up, get natural outdoor sunlight, drink plenty of water, and open a gentle daytime eating window between 13:00 and 20:00.</li>
                <li><strong>The Night of Transition:</strong> Sleep at a standard nocturnal hour (e.g., 22:30 or 23:00) to reset your central circadian rhythm.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: The Days-Off Problem and Anchor Sleep */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            The Days-Off Problem and the Power of &ldquo;Anchor Sleep&rdquo;
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Shift workers face constant social friction on days off: family dinners, children&apos;s schedules, and weekend errands demand daytime wakefulness. Completely flipping your sleep schedule by 180 degrees every few days causes what chronobiologists call &ldquo;social jetlag,&rdquo; inducing severe metabolic and digestive distress.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Where feasible, consider using an <strong>anchor sleep window</strong>—a 3- to 4-hour core sleep block that overlaps both on work days and days off (for instance, always being asleep between 04:00 AM and 08:00 AM, or between 08:00 AM and 12:00 PM).
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            On days off, align your eating window with family dining (such as 12:00 PM to 8:00 PM on a 16:8 schedule). Maintaining consistency during the eating window helps your peripheral digestive clocks predict nutrient arrival, reducing indigestion.
          </p>
        </section>

        {/* Section 5: Caffeine and Meal Timing Around Sleep */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Caffeine and Meal Timing Around Daytime Sleep
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Caffeine is the most widely utilized countermeasure for shift-work fatigue, but mismanaged stimulant timing is the primary cause of poor daytime sleep quality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
            <div className="p-5 rounded-2xl bg-surface-container border border-surface-container-high space-y-2">
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-primary" />
                <h3 className="font-headline text-base font-bold text-on-surface">Caffeine Cut-off Rules</h3>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Caffeine has a half-life of 4 to 6 hours in healthy adults. Drinking energy drinks or strong espresso at 05:00 AM to survive the end of your shift means significant adenosine receptor blockade remains active when you try to sleep at 08:30 AM. Conclude caffeine at least 6 hours prior to intended sleep (around 02:30 AM for an 08:30 AM bedtime).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container border border-surface-container-high space-y-2">
              <div className="flex items-center gap-2">
                <Moon className="w-4 h-4 text-secondary" />
                <h3 className="font-headline text-base font-bold text-on-surface">Pre-Sleep Meal Buffer</h3>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Going to bed uncomfortably full leads to gastric reflux and elevated heart rates, while going to bed with painful hunger pangs wakes you up prematurely. Aim to conclude meals 2 to 3 hours before sleep. If minor hunger arises immediately before bed, a sip of warm herbal tea or water is usually sufficient.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: How to Use the Night-Shift Fasting Scheduler */}
        <section className="space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            How to Use the Night-Shift Fasting Scheduler
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Our interactive tool above handles the mathematical coordination required for non-traditional schedules:
          </p>
          <div className="space-y-2.5 text-sm sm:text-base text-on-surface-variant">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
              <span><strong>Configure Your Times:</strong> Enter your exact shift start and end times, supporting overnight spans (e.g., 19:00 to 07:00).</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
              <span><strong>Set Intended Sleep:</strong> Input the daytime window when you plan to be asleep in bed.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
              <span><strong>Choose Protocol &amp; Preference:</strong> Select 16:8, 14:10, or 12:12, and designate whether you prefer eating prior to your shift or during early shift hours.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
              <span><strong>Inspect Work vs. Off Days:</strong> Toggle between the work-day and day-off tabs to view the 24-hour visual timeline, caffeine cut-off hour, and rotating transition guidelines.</span>
            </div>
          </div>
        </section>

        {/* Section 7: Safety Notice */}
        <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container">
          <div className="flex items-center gap-2 mb-1">
            <ShieldAlert className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Safety Considerations for Shift Workers
            </h2>
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            Fasting is an elective dietary schedule, not a mandatory health intervention. Shift work inherently elevates physiological fatigue, and fasting must never compromise workplace safety.
          </p>
          <div className="space-y-3 pt-2 text-sm sm:text-base text-on-surface-variant">
            <div className="flex items-start gap-2.5 p-4 rounded-xl bg-surface-container border border-surface-container-high">
              <AlertTriangle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-on-surface block mb-1">Safety-Critical Roles Warning:</strong>
                <span>
                  If you work in a safety-critical profession—such as an emergency physician, first responder, commercial pilot, train operator, crane technician, or heavy industrial worker—do not undertake restrictive fasting without professional medical guidance. Dizziness, sudden hypoglycemia, or cognitive slowing can cause catastrophic workplace accidents.
                </span>
              </div>
            </div>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Never push through warning symptoms:</strong> If you feel faint, dizzy, nauseous, or cognitively impaired on shift, break your fast immediately with balanced food and water.</li>
              <li><strong>Medications requiring food:</strong> Shift workers taking insulin, sulfonylureas, antihypertensives, or NSAIDs must speak with their physician regarding meal timing.</li>
              <li><strong>Pregnancy and history of eating disorders:</strong> Fasting is not advised during pregnancy, nursing, or for individuals with a history of disordered eating.</li>
            </ul>
          </div>
          <p className="text-xs sm:text-sm text-on-surface-variant pt-2 border-t border-surface-container/60">
            For more details, review our{" "}
            <Link href="/medical-disclaimer" className="text-primary font-semibold underline">
              Medical Disclaimer
            </Link>
            .
          </p>
        </section>

        {/* Section 8: FAQ Section */}
        <section className="space-y-6">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-xl bg-surface-container border border-surface-container-high space-y-2">
                <h3 className="font-headline text-lg font-bold text-on-surface tracking-tight flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 9: Next Steps CTA */}
        <section className="p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-surface-container space-y-4">
          <h2 className="font-headline text-2xl font-bold text-primary tracking-tight">
            Explore General Schedule Options
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Need to recalculate a daytime schedule for family vacations or upcoming daytime rotations? Use our general fasting calculator to model standard windows.
          </p>
          <div className="pt-2">
            <Link
              href="/#calculator"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary font-semibold shadow-sm hover:bg-primary/90 transition-colors"
            >
              <span>Explore FastTrack Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
