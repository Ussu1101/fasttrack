import { ProtocolDefinition, ProtocolId } from "./types";

export const PROTOCOLS: Record<ProtocolId, ProtocolDefinition> = {
  "16-8": {
    id: "16-8",
    name: "16:8 Protocol",
    tagline: "The Balanced Standard",
    ratio: "16:8",
    fastHours: 16,
    eatingHours: 8,
    type: "daily",
    difficulty: "Optimal",
    description: "The most widely studied time-restricted feeding ratio. Balances sustained metabolic rest with flexible daily nourishment.",
    detailedOverview: "16:8 involves fasting for 16 consecutive hours followed by an 8-hour eating window. Typically accomplished by finishing dinner in the early evening and delaying breakfast until midday, it fits easily into normal working and social schedules.",
    exampleSchedule: "Fast 8:00 PM – 12:00 PM (noon next day); Eat 12:00 PM – 8:00 PM",
    bestFor: "Everyday schedule consistency, daytime focus, and balanced meal timing.",
    cellularMarker: "Supports daytime digestive rest and a natural transition toward lipid utilization.",
    mealStructureGuide: "An 8-hour window comfortably accommodates two substantial, nutrient-dense meals plus an optional afternoon whole-food snack. Most fasters enjoy lunch at 12:00 PM, an optional snack at 3:30 PM, and dinner at 7:30 PM, concluding the window by 8:00 PM.",
    whoShouldChoose: "Ideal for beginners and intermediate fasters alike who want noticeable metabolic consistency without feeling overly restricted during family dinners or social evenings.",
    faqs: [
      {
        question: "Can I skip dinner instead of skipping breakfast on 16:8?",
        answer: "Yes. Early time-restricted eating (e.g., eating 8:00 AM to 4:00 PM and fasting overnight) aligns closely with circadian insulin sensitivity. Choose whichever window best fits your daily work and family life."
      },
      {
        question: "What breaks the fast during the 16 hours?",
        answer: "Any food or beverage containing meaningful calories breaks a metabolic fast. Stick to plain water, sparkling water, black coffee, and unsweetened teas."
      }
    ],
    relatedGuides: [
      {
        title: "16:8 Intermittent Fasting Guide",
        href: "/guides/16-8-intermittent-fasting-guide",
        description: "Comprehensive practical guide to schedules, meal timing, and evidence."
      },
      {
        title: "Intermittent Fasting for Beginners",
        href: "/guides/intermittent-fasting-for-beginners",
        description: "The complete step-by-step primer on launching your first 16:8 fasting schedule."
      },
      {
        title: "How to Choose a Fasting Window",
        href: "/guides/how-to-choose-a-fasting-window",
        description: "Practical strategies for scheduling your 8-hour window around work and family life."
      },
      {
        title: "What Breaks a Fast?",
        href: "/guides/what-breaks-a-fast",
        description: "Clear breakdown of beverages, creamers, sweeteners, and supplements."
      }
    ],
    relatedProtocols: [
      {
        id: "14-10",
        name: "14:10 Gentle Reset",
        relation: "A gentle stepping stone for newcomers adjusting to nighttime fasting."
      },
      {
        id: "18-6",
        name: "18:6 Accelerated",
        relation: "The natural next step once 16:8 becomes effortless and comfortable."
      }
    ]
  },
  "14-10": {
    id: "14-10",
    name: "14:10 Gentle Reset",
    tagline: "Approachable Starting Point",
    ratio: "14:10",
    fastHours: 14,
    eatingHours: 10,
    type: "daily",
    difficulty: "Beginner",
    description: "An accessible entry into time-restricted feeding that gently curbs late-night snacking without restrictive daytime fasting.",
    detailedOverview: "14:10 provides a natural pause for gastrointestinal recovery while leaving a generous 10-hour window for balanced meals. Ideal for beginners, shift workers, or anyone transitioning away from constant grazing.",
    exampleSchedule: "Fast 8:00 PM – 10:00 AM next day; Eat 10:00 AM – 8:00 PM",
    bestFor: "Fasting newcomers, active individuals, and resetting nighttime eating habits.",
    cellularMarker: "Encourages nighttime digestive rest and helps curtail late-evening eating.",
    mealStructureGuide: "A 10-hour window easily accommodates 3 standard meals without feeling rushed. A breakfast at 10:00 AM, lunch at 1:30 PM, and dinner concluded by 8:00 PM naturally eliminates evening snacking.",
    whoShouldChoose: "Perfect for those completely new to fasting, individuals with active morning energy demands, or anyone wanting to establish healthy boundaries around nighttime eating.",
    faqs: [
      {
        question: "Is 14 hours of fasting enough to see metabolic benefits?",
        answer: "Yes. Clinical research shows that eliminating late-night eating and allowing 14 hours of gut rest improves nocturnal blood pressure, resting insulin levels, and sleep quality."
      }
    ],
    relatedGuides: [
      {
        title: "14:10 Intermittent Fasting Guide",
        href: "/guides/14-10-intermittent-fasting-guide",
        description: "A gentle beginner-friendly guide to establishing a sustainable 14-hour fasting pause."
      },
      {
        title: "Intermittent Fasting and Sleep Quality",
        href: "/guides/fasting-and-sleep",
        description: "How a 14-hour overnight fast supports core body temperature and melatonin release."
      },
      {
        title: "How to Choose a Fasting Window",
        href: "/guides/how-to-choose-a-fasting-window",
        description: "Structuring an easy 10-hour eating window around morning workouts."
      }
    ],
    relatedProtocols: [
      {
        id: "12-12",
        name: "12:12 Circadian",
        relation: "The simplest baseline day-night rhythm."
      },
      {
        id: "16-8",
        name: "16:8 Protocol",
        relation: "The standard progression once 14:10 feels routine."
      }
    ]
  },
  "12-12": {
    id: "12-12",
    name: "12:12 Circadian",
    tagline: "Natural Day-Night Harmony",
    ratio: "12:12",
    fastHours: 12,
    eatingHours: 12,
    type: "daily",
    difficulty: "Gentle",
    description: "Aligns your digestive window directly with solar daylight hours, allowing uninterrupted cellular restoration during sleep.",
    detailedOverview: "12:12 mirrors traditional meal timing before artificial light and late-night food access. By simply not eating after dinner until breakfast, your gut and liver follow natural circadian rhythms.",
    exampleSchedule: "Fast 7:00 PM – 7:00 AM next day; Eat 7:00 AM – 7:00 PM",
    bestFor: "Long-term health maintenance, circadian harmony, and unhurried daily routines.",
    cellularMarker: "Aligns evening meal conclusion with natural circadian dark cycles.",
    mealStructureGuide: "Enjoy 3 regular meals during daylight hours (e.g., 7:30 AM breakfast, 12:30 PM lunch, 6:30 PM dinner) and simply close the kitchen after dinner.",
    whoShouldChoose: "Anyone seeking sustainable lifelong circadian health, digestive rest during sleep, and freedom from complex timing rules.",
    relatedGuides: [
      {
        title: "Intermittent Fasting and Sleep Quality",
        href: "/guides/fasting-and-sleep",
        description: "Aligning meal times with circadian biology for restorative sleep."
      }
    ],
    relatedProtocols: [
      {
        id: "14-10",
        name: "14:10 Gentle Reset",
        relation: "The natural next step to extend evening digestive rest."
      }
    ]
  },
  "18-6": {
    id: "18-6",
    name: "18:6 Accelerated",
    tagline: "Deeper Metabolic Rest",
    ratio: "18:6",
    fastHours: 18,
    eatingHours: 6,
    type: "daily",
    difficulty: "Accelerated",
    description: "Extends daily fasting to 18 hours, typically supporting two wholesome meals without snacking between.",
    detailedOverview: "With an 18-hour fast and a compact 6-hour window (e.g., 1:00 PM to 7:00 PM), hepatic glycogen stores are typically drawn down further, often encouraging greater reliance on lipid metabolism and prolonged baseline insulin levels.",
    exampleSchedule: "Fast 7:00 PM – 1:00 PM next day; Eat 1:00 PM – 7:00 PM",
    bestFor: "Individuals adapted to 16:8 seeking a more condensed daily feeding window and heightened focus.",
    cellularMarker: "Provides an extended window of baseline insulin and increased reliance on stored fuel.",
    mealStructureGuide: "In an 18:6 schedule (for example, with an eating window from 1:00 PM to 7:00 PM), many individuals choose to structure their intake into two satisfying meals rather than continuous grazing. A first meal anchored around quality protein, vegetables, and wholesome fats helps provide steady energy, followed by an evening meal to meet daily nutritional requirements before the fasting window resumes.",
    whoShouldChoose: "Many people consider 18:6 after becoming comfortable with 16:8, particularly if they prefer a slightly shorter eating window and fewer daily meals. It requires attentive planning during the eating hours to ensure adequate nutrition.",
    faqs: [
      {
        question: "How do I fit sufficient daily nutrients into only 6 hours?",
        answer: "By focusing on nutrient-dense whole foods. Two balanced meals containing protein, vegetables, complex carbohydrates, and healthy fats can comfortably meet daily caloric and micronutrient needs without requiring grazing."
      },
      {
        question: "How should I handle hunger between hours 14 and 18?",
        answer: "For many individuals, feelings of hunger come in waves rather than escalating continuously. Staying hydrated with plain water or unsweetened tea often helps while adjusting to an 18-hour window. If persistent dizziness or weakness occurs, break your fast."
      },
      {
        question: "Can I exercise during the 18-hour fasting window?",
        answer: "Light to moderate exercise or walking is generally well tolerated during fasting hours. Some individuals prefer scheduling workouts toward the end of their fasting window so that a meal follows shortly afterward, while others prefer exercising after eating. Adjust timing based on personal energy and comfort."
      }
    ],
    relatedGuides: [
      {
        title: "18:6 Intermittent Fasting Guide",
        href: "/guides/18-6-intermittent-fasting-guide",
        description: "Practical strategies for intermediate fasters managing a 6-hour eating window."
      },
      {
        title: "How to Manage Fasting Hunger",
        href: "/guides/how-to-handle-hunger",
        description: "Actionable tactics for riding out ghrelin pulses during the extended 18-hour fasting window."
      },
      {
        title: "Exercise While Fasting",
        href: "/guides/exercise-while-fasting",
        description: "Optimal workout timing, strength training, and hydration strategies for 18:6 fasters."
      },
      {
        title: "What Can You Drink While Fasting?",
        href: "/guides/what-can-you-drink-while-fasting",
        description: "Complete list of zero-calorie fluids to stay hydrated throughout your 18 hours."
      }
    ],
    relatedProtocols: [
      {
        id: "16-8",
        name: "16:8 Protocol",
        relation: "The baseline standard before transitioning to 18:6."
      },
      {
        id: "20-4",
        name: "20:4 Warrior",
        relation: "The advanced 4-hour eating window for seasoned practitioners."
      }
    ]
  },
  "20-4": {
    id: "20-4",
    name: "20:4 Warrior",
    tagline: "Concentrated Feeding Window",
    ratio: "20:4",
    fastHours: 20,
    eatingHours: 4,
    type: "daily",
    difficulty: "Advanced",
    description: "A 20-hour fast paired with an intensive 4-hour evening nourishment window, inspired by historical warrior feeding patterns.",
    detailedOverview: "20:4 concentrates food intake into a small 4-hour window, such as 4:00 PM to 8:00 PM. Requires intentional meal planning to meet daily protein, micronutrient, and electrolyte requirements.",
    exampleSchedule: "Fast 8:00 PM – 4:00 PM next day; Eat 4:00 PM – 8:00 PM",
    bestFor: "Experienced fasters seeking elevated daytime productivity and minimal meal preparation.",
    cellularMarker: "Concentrates daily nourishment into a condensed window with prolonged digestive pause.",
    mealStructureGuide: "The 4-hour eating window (such as 4:00 PM to 8:00 PM) benefits from intentional pacing to support digestive comfort. Many fasters find success by opening the window with a modest, gentle snack—such as eggs, broth, or avocado—before sitting down to a balanced main dinner featuring lean protein, vegetables, and wholesome carbohydrates, concluding with a light evening snack or hydrating beverage.",
    whoShouldChoose: "20:4 is tailored for experienced intermittent fasters who thrive on daytime mental clarity, minimal daily meal preparation, and have mastered electrolyte and hydration management during extended 20-hour fasts.",
    faqs: [
      {
        question: "Is it safe to practice 20:4 every single day?",
        answer: "While many healthy individuals follow 20:4 daily, others use it 3 to 5 days per week alongside 16:8 or 18:6 on other days. Listening to physiological cues, ensuring adequate total energy intake, and resting when fatigued are critical."
      },
      {
        question: "What are the best foods to break a 20-hour fast with?",
        answer: "Gentle, easily digestible whole foods rich in healthy fats and proteins—such as soft-boiled eggs, light broths, steamed greens, or avocado—prevent digestive cramps and avoid rapid blood glucose spikes."
      },
      {
        question: "How do I manage headaches or fatigue during the 20 hours?",
        answer: "Headaches or fatigue during extended fasting hours can stem from several factors, including dehydration, electrolyte shifts as insulin drops, caffeine withdrawal, or temporary blood sugar adjustments. Sipping water consistently and considering mineral-rich fluids or unsweetened electrolytes can often help. If severe fatigue or dizziness develops, discontinue the fast and consult a healthcare provider."
      }
    ],
    relatedGuides: [
      {
        title: "How to Break an Intermittent Fast",
        href: "/guides/how-to-break-a-fast",
        description: "Staged refeeding strategies to awaken digestion after a 20-hour fasting pause."
      },
      {
        title: "How to Manage Fasting Hunger",
        href: "/guides/how-to-handle-hunger",
        description: "Differentiating psychological habit from physiological hunger during hours 16 to 20."
      },
      {
        title: "What Breaks a Fast?",
        href: "/guides/what-breaks-a-fast",
        description: "Strict zero-calorie rules to keep your 20-hour fasting window intact."
      }
    ],
    relatedProtocols: [
      {
        id: "18-6",
        name: "18:6 Accelerated",
        relation: "A slightly more flexible 2-meal daily alternative."
      },
      {
        id: "omad",
        name: "OMAD (23:1)",
        relation: "The single-meal progression for advanced fasters."
      }
    ]
  },
  "omad": {
    id: "omad",
    name: "OMAD (23:1)",
    tagline: "One Meal A Day",
    ratio: "23:1",
    fastHours: 23,
    eatingHours: 1,
    type: "daily",
    difficulty: "Intensive",
    description: "One concentrated, nutrient-dense feast consumed within an approximate 1-hour window each day.",
    detailedOverview: "OMAD represents one of the most condensed time-restricted eating formats. With 23 hours between meals, attention shifts to consuming sufficient calories, micronutrients, and protein in a single meal.",
    exampleSchedule: "Fast 7:00 PM – 6:00 PM next day; Eat 6:00 PM – 7:00 PM",
    bestFor: "Advanced fasting practitioners with experience managing electrolytes and nutrient density.",
    cellularMarker: "An intensive single-window protocol requiring careful nutritional planning.",
    mealStructureGuide: "During OMAD, practitioners eat one comprehensive, unhurried meal over approximately 45 to 60 minutes. Because daily energy is concentrated into a single sitting, focus on wholesome nutrient density: quality protein sources, colorful vegetables, healthy fats, and adequate hydration and minerals, eating to natural satiety rather than force-feeding.",
    whoShouldChoose: "Strictly for veteran intermittent fasters who have extensive experience with 18:6 and 20:4, understand electrolyte balance, and do not experience lightheadedness.",
    faqs: [
      {
        question: "Can I do OMAD while working out intensely?",
        answer: "Athletes doing heavy volume often find it challenging to consume adequate calories and protein in a single hour. Many rotate OMAD on rest days and 16:8 on hard training days."
      }
    ],
    relatedGuides: [
      {
        title: "How to Break an Intermittent Fast",
        href: "/guides/how-to-break-a-fast",
        description: "Essential gentle refeeding rules for single-meal protocols."
      },
      {
        title: "Exercise While Fasting",
        href: "/guides/exercise-while-fasting",
        description: "Workout timing and safety for OMAD practitioners."
      }
    ],
    relatedProtocols: [
      {
        id: "20-4",
        name: "20:4 Warrior",
        relation: "A 4-hour window providing more unhurried digestion time."
      }
    ]
  },
  "5-2": {
    id: "5-2",
    name: "5:2 Weekly Protocol",
    tagline: "Intermittent Weekly Calorie Pattern",
    ratio: "5:2",
    fastHours: 0,
    eatingHours: 0,
    type: "weekly",
    difficulty: "Weekly Pattern",
    description: "A weekly nutritional rhythm featuring 5 standard eating days and 2 non-consecutive reduced-intake days.",
    detailedOverview: "Unlike daily hourly windows, 5:2 organizes your week. On 5 days you eat normally according to appetite. On 2 chosen non-consecutive days (such as Monday and Thursday), energy intake is reduced to roughly 500-600 kcal.",
    exampleSchedule: "Regular: Tue, Wed, Fri, Sat, Sun. Reduced intake: Mon & Thu.",
    bestFor: "Those who prefer not to observe daily hourly clocks and favor weekly lifestyle rhythm.",
    cellularMarker: "A weekly energy intake rhythm rather than a daily hourly restriction.",
    fastingDaysPerWeek: 2,
    fastingDaysPattern: "Non-consecutive (e.g., Monday & Thursday)",
    recommendedReducedCalories: "Approx. 500–600 kcal on fasting days",
    mealStructureGuide: "On the 5 standard days, eat balanced meals according to natural appetite without observing hourly fasting timers. On the 2 non-consecutive fasting days (such as Monday and Thursday), research protocols conventionally budget a reduced intake of roughly 500 to 600 kcal depending on individual nutritional requirements. This can be enjoyed as two modest meals (e.g., lunch and dinner) or as a single evening meal emphasizing lean protein, vegetables, and light broth.",
    whoShouldChoose: "The 5:2 protocol is ideal for individuals who dislike daily hourly eating clocks, work unpredictable shift schedules, or travel frequently during the week and prefer a weekly lifestyle rhythm over daily time restriction.",
    faqs: [
      {
        question: "Do the two fasting days need to be consecutive?",
        answer: "No. In fact, consecutive fasting days are not recommended on 5:2. Separating them—such as fasting on Monday and Thursday—ensures sustainable recovery, steady energy, and prevents excessive fatigue."
      },
      {
        question: "What can I drink on the 5:2 reduced-intake days?",
        answer: "Water, sparkling water, black coffee, and unsweetened herbal teas are zero-calorie staples that help maintain hydration throughout both fasting and standard days."
      },
      {
        question: "Can I combine 5:2 with 16:8 daily intermittent fasting?",
        answer: "Yes, many experienced fasters combine the two by maintaining a 16:8 eating window on their standard days while keeping calories to 500-600 kcal on their two designated weekly fasting days."
      }
    ],
    relatedGuides: [
      {
        title: "How to Break an Intermittent Fast",
        href: "/guides/how-to-break-a-fast",
        description: "Healthy morning refeeding routines after a reduced-intake 5:2 fasting day."
      },
      {
        title: "What Can You Drink While Fasting?",
        href: "/guides/what-can-you-drink-while-fasting",
        description: "Beverage guidelines to manage hydration and appetite on reduced-calorie days."
      },
      {
        title: "How Does Intermittent Fasting Work?",
        href: "/guides/how-does-intermittent-fasting-work",
        description: "The science of weekly caloric deficits versus daily circadian fasting rhythms."
      }
    ],
    relatedProtocols: [
      {
        id: "16-8",
        name: "16:8 Protocol",
        relation: "The leading daily time-restricted feeding alternative to weekly cycling."
      },
      {
        id: "14-10",
        name: "14:10 Gentle Reset",
        relation: "A gentle daily baseline if weekly calorie restriction feels too demanding."
      }
    ]
  }
};

export const PROTOCOL_LIST: ProtocolDefinition[] = Object.values(PROTOCOLS);
export const DAILY_PROTOCOLS: ProtocolDefinition[] = PROTOCOL_LIST.filter(p => p.type === "daily");
export const WEEKLY_PROTOCOLS: ProtocolDefinition[] = PROTOCOL_LIST.filter(p => p.type === "weekly");
