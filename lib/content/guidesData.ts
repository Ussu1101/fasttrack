export interface GuideArticle {
  slug: string;
  title: string;
  shortDescription: string;
  category: "Hydration" | "Physiology" | "Movement" | "Recovery" | "Nutrition" | "Best Practices";
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  content: {
    leadParagraph: string;
    sections: {
      heading: string;
      body: string[];
      keyTakeaway?: string;
    }[];
    clinicalNotice?: string;
  };
}

export const GUIDES: GuideArticle[] = [
  {
    slug: "intermittent-fasting-for-beginners",
    title: "Intermittent Fasting for Beginners: A Simple Guide",
    shortDescription:
      "Learn how intermittent fasting works, understand fasting and eating windows, compare common fasting schedules, and calculate a schedule that fits your routine.",
    category: "Best Practices",
    readTime: "8 min read",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    author: "Muhammad Usama",
    content: {
      leadParagraph:
        "Intermittent fasting is an eating pattern that alternates between periods when you eat and periods when you do not eat. Unlike many diets, the main focus is when you eat, rather than following one specific list of foods.",
      sections: [
        {
          heading: "What Is Intermittent Fasting?",
          body: [
            "Intermittent fasting is a pattern of alternating between eating periods and fasting periods.",
            "One common form is time-restricted eating, where food is consumed within a set number of hours each day and the remaining hours make up the fasting period. Other approaches use different schedules, such as alternate-day fasting or the 5:2 pattern.",
            "The simplest way to understand the idea is: Fasting window → Eating window → Fasting window → repeat.",
          ],
        },
        {
          heading: "How Do Fasting and Eating Windows Work?",
          body: [
            "The fasting window is the period between the end of one eating period and the beginning of the next. The eating window is the period during which your planned meals and snacks fit into your daily schedule.",
            "Thinking in terms of windows can make an intermittent fasting schedule much easier to understand than thinking only in terms of individual meals.",
          ],
        },
        {
          heading: "Common Intermittent Fasting Schedules",
          body: [
            "There is no single intermittent fasting schedule used by everyone. Common methods include 12:12, 14:10, 16:8, 18:6, 20:4, OMAD (one meal a day), and the weekly 5:2 pattern.",
          ],
        },
      ],
      clinicalNotice:
        "Intermittent fasting is not appropriate for everyone, and individual circumstances can matter. When appropriate, consider discussing it with a healthcare professional.",
    },
  },
  {
    slug: "how-to-choose-a-fasting-window",
    title: "How to Choose a Fasting Window: A Practical Guide",
    shortDescription:
      "Learn how to choose a fasting window around your meals, work, sleep, exercise, and social schedule. Compare common fasting schedules and build a practical routine with FastTrack.",
    category: "Best Practices",
    readTime: "9 min read",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    author: "Muhammad Usama",
    content: {
      leadParagraph:
        "Choosing a fasting window is less about finding a perfect number and more about finding a schedule that fits the way you actually live.",
      sections: [
        {
          heading: "What Is a Fasting Window?",
          body: [
            "A fasting window is the period when you are not eating. The eating window is the period when you have your meals.",
            "In a daily time-restricted schedule, the first number describes the fasting hours and the second describes the eating hours. For example, 16:8 means 16 hours without food followed by an 8-hour eating window.",
          ],
        },
        {
          heading: "Compare the Common Fasting Windows",
          body: [
            "There is no requirement to jump directly into a long fasting period. The common schedules mainly differ in how much of the day is available for eating.",
          ],
        },
        {
          heading: "Start With Your Real Schedule",
          body: [
            "Before choosing a fasting window, look at when you normally eat. The goal is not to force your day around a fasting timer, but to place the timer around a routine you can actually follow.",
          ],
        },
      ],
      clinicalNotice:
        "Intermittent fasting is not appropriate for everyone. Individuals who are pregnant or nursing, under 18, or managing chronic conditions should consult a physician.",
    },
  },
  {
    slug: "what-breaks-a-fast",
    title: "What Breaks a Fast? A Practical Guide to Food, Drinks, and Common Add-Ins",
    shortDescription:
      "Find out what breaks a fast, including coffee, tea, milk, sugar, gum, sweeteners, electrolytes, and common supplements. Learn the practical difference between a strict fast and intermittent fasting.",
    category: "Nutrition",
    readTime: "9 min read",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    author: "Muhammad Usama",
    content: {
      leadParagraph:
        "“What breaks a fast?” sounds like a simple yes-or-no question, but the answer depends on what you mean by fasting. For a strict zero-calorie fast, consuming calories means you are no longer fasting. For everyday intermittent fasting, water, black coffee, and unsweetened teas are commonly used.",
      sections: [
        {
          heading: "The Simple Rule",
          body: [
            "If your goal is to keep a strict zero-calorie fasting window, the simplest rule is: no food and no calorie-containing drinks during the fasting window.",
            "If something provides meaningful calories or is being consumed as food, it belongs in the eating window rather than the fasting window.",
          ],
        },
        {
          heading: "What Usually Does and Does Not Break a Fast?",
          body: [
            "Plain water, unsweetened sparkling water, black coffee, and unsweetened teas contain zero or negligible calories and are standard during fasting windows.",
            "Sugar, milk, cream, juice, protein shakes, and bone broth add calories and break a strict fast.",
          ],
        },
        {
          heading: "Strict Fast vs Practical Intermittent Fasting",
          body: [
            "A strict zero-calorie fast excludes all calories. Typical time-restricted eating allows low-energy beverages like black coffee and unsweetened tea during the fasting window. Medical or laboratory fasting requires following clinical instructions strictly.",
          ],
        },
      ],
      clinicalNotice:
        "Medical or laboratory fasting instructions take priority over general lifestyle fasting guidelines. Individuals with diabetes, history of disordered eating, or pregnancy should consult a healthcare provider.",
    },
  },
  {
    slug: "what-can-you-drink-while-fasting",
    title: "What Can You Drink While Fasting? A Practical Guide to Fasting Beverages",
    shortDescription:
      "Learn what you can drink while fasting, including water, sparkling water, black coffee, plain tea, electrolytes, and common flavored drinks. Understand which choices contain calories and when the rules change.",
    category: "Hydration",
    readTime: "9 min read",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    author: "Muhammad Usama",
    content: {
      leadParagraph:
        "For a typical intermittent fasting routine, the simplest choices during the fasting window are water and other zero-calorie beverages such as plain black coffee and unsweetened tea.",
      sections: [
        {
          heading: "The Simple Rule for Fasting Drinks",
          body: [
            "During a strict zero-calorie fast, choose drinks that contain no meaningful calories.",
            "Water is the clearest example. Zero-calorie beverages such as black coffee and plain tea can also fit a typical intermittent fasting routine.",
          ],
        },
        {
          heading: "What Drinks Break a Fast?",
          body: [
            "Once you add sugar, milk, cream, juice, syrup, protein powder, or another calorie-containing ingredient, the drink is no longer zero-calorie and belongs in the eating window.",
          ],
        },
      ],
      clinicalNotice:
        "Medical or laboratory fasting instructions take priority over general intermittent-fasting advice. Always follow instructions from your healthcare professional.",
    },
  },
  {
    slug: "how-to-handle-hunger",
    title: "How to Manage and Conquer Fasting Hunger",
    shortDescription: "Understand the episodic nature of ghrelin hormone pulses and psychological vs. physiological hunger during your fasting window.",
    category: "Physiology",
    readTime: "7 min read",
    publishedAt: "2026-09-30",
    updatedAt: "2026-09-30",
    author: "Muhammad Usama",
    content: {
      leadParagraph:
        "Hunger is not a linear climb that worsens indefinitely until you eat. Biologically, hunger operates in rhythmic episodic waves driven by circadian conditioned hormonal pulses of ghrelin.",
      sections: [
        {
          heading: "1. The Ghrelin Wave Principle",
          body: [
            "Ghrelin often rises in anticipation of habitual meal times. If you normally eat at a set hour, hormonal cues and conditioned hunger signals frequently peak around that window.",
            "For many people, hunger sensations do not rise indefinitely; they often peak and then subside over time as internal regulatory mechanisms adapt.",
          ],
          keyTakeaway: "Hunger often presents in episodic waves rather than a constant climb, frequently subsiding if you allow time to pass.",
        },
        {
          heading: "2. The Stomach Expansion Signal",
          body: [
            "Vagus nerve stretch receptors in the stomach wall detect physical emptiness. Drinking a tall glass of sparkling mineral water or warm tea stimulates mechanical stretch, signaling temporary satiety to the brainstem.",
          ],
        },
        {
          heading: "3. Psychological Habit vs. Physiological Depletion",
          body: [
            "Psychological hunger is characterized by sudden cravings for specific refined foods (sugar, pizza, pastries) and emotional triggers like boredom or stress.",
            "Physiological hunger develops gradually, is content with any nutritious whole food, and is accompanied by mild stomach rumbling rather than intense moodiness.",
          ],
        },
      ],
      clinicalNotice:
        "If hunger is accompanied by dizziness, shakiness, confusion, or cold sweats, break your fast immediately with light protein and complex carbohydrates.",
    },
  },
  {
    slug: "exercise-while-fasting",
    title: "Exercise While Fasting: Workouts, Timing & Practical Tips",
    shortDescription:
      "Learn how to exercise while fasting, including workout timing, hydration, intensity, cardio, and strength training. Build a fasting and exercise routine that fits your schedule.",
    category: "Movement",
    readTime: "10 min read",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    author: "Muhammad Usama",
    content: {
      leadParagraph:
        "Yes, many people can exercise during an intermittent fasting routine. The more useful question is not simply whether exercise and fasting can be combined, but how you schedule your workouts around your fasting and eating windows.",
      sections: [
        {
          heading: "Exercise and Fasting: The Simple Rule",
          body: [
            "Choose a workout time that fits your routine and allows you to manage hydration, food, training, and recovery appropriately.",
            "Some people prefer exercising during the fasting window. Others feel more comfortable training after eating. Your preferred timing depends on the type of exercise, workout intensity, and how you feel during training.",
          ],
        },
        {
          heading: "When Should You Exercise During Intermittent Fasting?",
          body: [
            "Common timing options include exercising near the end of the fasting window, exercising during the eating window, or exercising after a meal.",
            "There is no single best time that applies to everyone; choose a schedule you can maintain consistently while staying hydrated and recovering adequately.",
          ],
        },
      ],
      clinicalNotice:
        "If you feel dizzy, faint, unusually weak, or unwell during exercise, stop the workout. Individuals with diabetes, medication affected by food timing, pregnancy, or eating disorder history should discuss fasting with a physician.",
    },
  },
  {
    slug: "fasting-and-sleep",
    title: "Intermittent Fasting and Sleep Quality",
    shortDescription: "How aligning meal windows with circadian biology protects melatonin secretion, core body temperature, and deep restorative sleep.",
    category: "Recovery",
    readTime: "6 min read",
    publishedAt: "2026-09-30",
    updatedAt: "2026-09-30",
    author: "Muhammad Usama",
    content: {
      leadParagraph:
        "Meal timing can influence sleep comfort, nocturnal resting heart rate patterns, and overall sleep quality.",
      sections: [
        {
          heading: "1. The Thermic Cost of Late Digestion",
          body: [
            "Digesting a substantial meal close to bedtime requires active gastrointestinal processing and can elevate metabolic heat production. Sleep onset is naturally facilitated by the body's evening core temperature decline.",
            "Allowing 2 to 3 hours between your final meal and bedtime gives the digestive system time to settle, which many individuals find promotes more restful sleep.",
          ],
          keyTakeaway: "A comfortable buffer between your last meal and bedtime may support easier sleep onset and nocturnal comfort.",
        },
        {
          heading: "2. Gastroesophageal Reflux Prevention",
          body: [
            "Lying supine soon after a heavy meal can increase the risk of acid reflux and sleep disruptions for sensitive individuals.",
          ],
        },
      ],
    },
  },
  {
    slug: "how-to-break-a-fast",
    title: "How to Break an Intermittent Fast Correctly",
    shortDescription: "Protect your digestive tract by choosing the right foods, avoiding insulin spikes, and pacing your initial refeeding meal.",
    category: "Nutrition",
    readTime: "5 min read",
    publishedAt: "2026-09-30",
    updatedAt: "2026-09-30",
    author: "Muhammad Usama",
    content: {
      leadParagraph:
        "Following an extended fasting period, transitioning gently into eating can help maintain digestive comfort and steady post-meal energy.",
      sections: [
        {
          heading: "1. Start With Gentle Foods",
          body: [
            "Warm vegetable or light broth with a pinch of sea salt.",
            "Soft-boiled or scrambled eggs with a slice of avocado.",
            "Steamed greens with extra virgin olive oil and grilled chicken or tofu.",
          ],
          keyTakeaway: "Prioritize warm, easily absorbed whole foods rich in quality protein and healthy fats.",
        },
        {
          heading: "2. What NOT to Break With",
          body: [
            "Consuming concentrated refined sugars or rapid-digesting carbohydrates right after a fast may lead to rapid glucose fluctuations in some individuals, potentially contributing to post-meal sluggishness or renewed hunger.",
            "Very spicy or heavily deep-fried foods can also cause mild gastrointestinal irritation after a prolonged digestive pause.",
          ],
        },
      ],
    },
  },
  {
    slug: "common-fasting-mistakes",
    title: "The 6 Most Common Intermittent Fasting Mistakes",
    shortDescription: "Avoid the traps that cause burnout, nutrient deficiencies, binge eating, and stalled progress.",
    category: "Best Practices",
    readTime: "7 min read",
    publishedAt: "2026-09-30",
    updatedAt: "2026-09-30",
    author: "Muhammad Usama",
    content: {
      leadParagraph:
        "While intermittent fasting is structurally straightforward, small behavioral missteps can derail comfort, consistency, and daily energy.",
      sections: [
        {
          heading: "1. Treating the Eating Window as a Caloric Free-for-All",
          body: [
            "Fasting does not negate the laws of energy balance. Consuming predominantly ultra-processed, highly refined foods during your feeding window can leave you nutrient-depleted and fatigued.",
          ],
        },
        {
          heading: "2. Chronically Inadequate Protein Intake",
          body: [
            "Limiting your meals to a condensed window requires deliberate planning to ensure adequate overall protein intake suited to your body weight, activity level, and lean tissue preservation goals.",
          ],
        },
        {
          heading: "3. Skipping Electrolyte Replacement",
          body: [
            "Paying attention to both fluid and mineral balance is helpful during extended fasts. If mild sluggishness arises, ensuring adequate dietary electrolytes alongside water may support overall well-being. Persistent dizziness or discomfort should be evaluated by a healthcare professional.",
          ],
        },
        {
          heading: "4. Rigid Inflexibility",
          body: [
            "Life happens. If family dinner or an event runs late, shift your window forward. Consistency over weeks and months matters far more than single-day perfection.",
          ],
        },
      ],
    },
  },
  {
    slug: "how-does-intermittent-fasting-work",
    title: "How Does Intermittent Fasting Work? A Simple Explanation",
    shortDescription:
      "Learn how intermittent fasting works, what fasting and eating windows mean, how the body uses stored fuel, and how common fasting schedules fit into a daily routine.",
    category: "Physiology",
    readTime: "8 min read",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    author: "Muhammad Usama",
    content: {
      leadParagraph:
        "Intermittent fasting is an eating pattern that alternates between periods when you eat and periods when you do not eat. Unlike a diet that mainly focuses on specific foods, intermittent fasting primarily changes when you eat.",
      sections: [
        {
          heading: "How Does Intermittent Fasting Work?",
          body: [
            "At a simple level, intermittent fasting extends the amount of time between meals.",
            "After you eat, your body has energy available from the food you recently consumed. As the fasting period continues, that readily available energy is used and the body increasingly draws on stored energy.",
          ],
        },
        {
          heading: "What Is Metabolic Switching?",
          body: [
            "Metabolic switching is a term used to describe a shift in the body's energy use as fasting continues, moving from readily accessible, sugar-based fuel toward using stored fat for energy.",
            "It is useful to think of metabolic switching as a gradual process, not a precise clock event.",
          ],
        },
      ],
      clinicalNotice:
        "Intermittent fasting is not appropriate for everyone. Pregnant or breastfeeding individuals, children and teenagers, and people with certain medical conditions or medications should seek medical guidance.",
    },
  },
];
