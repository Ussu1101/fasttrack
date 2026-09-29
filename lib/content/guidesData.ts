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
    slug: "what-can-you-drink-while-fasting",
    title: "What Can You Drink While Intermittent Fasting?",
    shortDescription: "A comprehensive evidence-based breakdown of water, black coffee, teas, electrolytes, and zero-calorie sweeteners during fasting windows.",
    category: "Hydration",
    readTime: "6 min read",
    publishedAt: "2024-03-15",
    updatedAt: "2024-03-15",
    author: "Muhammad Usama",
    content: {
      leadParagraph:
        "One of the most frequent questions for intermittent fasting practitioners is what beverages are permitted during fasting hours without disrupting metabolic rest. The primary biochemical goal is to avoid stimulating cephalic or digestive insulin release.",
      sections: [
        {
          heading: "1. Pure Water & Mineral Water",
          body: [
            "Still and naturally sparkling mineral waters are completely non-caloric and essential for maintaining vascular volume during a fast.",
            "Mineral waters rich in calcium, magnesium, and sodium provide natural electrolytic support without any caloric penalty.",
          ],
          keyTakeaway: "Unflavored water is the gold standard for every intermittent fasting protocol.",
        },
        {
          heading: "2. Black Coffee & Espresso",
          body: [
            "Black coffee contains roughly 2–5 calories per cup from trace micronutrients, which is metabolically negligible and does not break a fast.",
            "Polyphenols such as chlorogenic acid found in dark roast coffee have been observed in animal and human cell trials to support cellular autophagy.",
            "Crucially, avoid milk, half-and-half, oat milk, sugar, or flavored coffee syrups, all of which trigger immediate insulin secretion.",
          ],
          keyTakeaway: "Keep coffee strictly black without dairy or sweeteners.",
        },
        {
          heading: "3. Green, Black, and Herbal Teas",
          body: [
            "Unsweetened green tea (rich in epigallocatechin gallate, or EGCG) and black tea are outstanding fasting accompaniments.",
            "Herbal infusions like chamomile, peppermint, and rooibos are naturally caffeine-free options for evening fasting hours.",
          ],
        },
        {
          heading: "4. Electrolytes & Sodium",
          body: [
            "As insulin drops during fasting, the kidneys excrete sodium more readily (natriuresis).",
            "Consuming pure salt water or unsweetened electrolyte powders (sodium, potassium, magnesium without maltodextrin or sugar) prevents muscle cramps, fatigue, and headaches.",
          ],
        },
        {
          heading: "5. What to Strictly Avoid",
          body: [
            "Bone broth (contains protein and amino acids which activate mTOR).",
            "Fruit juices, soda, alcohol, and branch-chain amino acids (BCAAs).",
            "Dairy and plant milks with added sugars or emulsifiers.",
          ],
        },
      ],
      clinicalNotice:
        "Individuals with cardiovascular hypertension or kidney disease should review electrolyte supplementation with their doctor.",
    },
  },
  {
    slug: "how-to-handle-hunger",
    title: "How to Manage and Conquer Fasting Hunger",
    shortDescription: "Understand the episodic nature of ghrelin hormone pulses and psychological vs. physiological hunger during your fasting window.",
    category: "Physiology",
    readTime: "7 min read",
    publishedAt: "2024-03-14",
    updatedAt: "2024-03-14",
    author: "Muhammad Usama",
    content: {
      leadParagraph:
        "Hunger is not a linear climb that worsens indefinitely until you eat. Biologically, hunger operates in rhythmic episodic waves driven by circadian conditioned hormonal pulses of ghrelin.",
      sections: [
        {
          heading: "1. The Ghrelin Wave Principle",
          body: [
            "Ghrelin peaks around your accustomed habitual meal times. If you normally eat breakfast at 8:00 AM, ghrelin will surge around that hour regardless of energy balance.",
            "If you do not eat, ghrelin drops back down spontaneously within 30 to 45 minutes as counter-regulatory hormones stabilize.",
          ],
          keyTakeaway: "Hunger comes in brief 30-minute waves. Riding out the peak allows it to subside naturally.",
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
    slug: "fasting-and-exercise",
    title: "Intermittent Fasting and Exercise: How to Train Safely",
    shortDescription: "Strategic timing guidelines for resistance training, cardio workouts, electrolyte replacement, and muscle mass retention.",
    category: "Movement",
    readTime: "8 min read",
    publishedAt: "2024-03-12",
    updatedAt: "2024-03-12",
    author: "Muhammad Usama",
    content: {
      leadParagraph:
        "Training in a fasted state can be safe and highly effective when matched with the appropriate workout intensity and meal timing.",
      sections: [
        {
          heading: "1. Low-Intensity Steady State (Zone 2 Cardio)",
          body: [
            "Brisk walking, casual cycling, and easy jogging are ideal during fasted hours. In the absence of elevated insulin, intramuscular and subcutaneous fat oxidation is optimized.",
          ],
          keyTakeaway: "Zone 2 aerobic exercise thrives in a fasted state with adequate hydration.",
        },
        {
          heading: "2. Heavy Resistance Training & Hypertrophy",
          body: [
            "For heavy weightlifting, training near the end of your fasting window is often optimal. This allows you to transition directly into your eating window for post-workout protein synthesis.",
            "Consuming 30–40g of protein within 1–2 hours following resistance training ensures muscle protein synthesis exceeds protein breakdown.",
          ],
        },
        {
          heading: "3. Hydration & Intra-Workout Electrolytes",
          body: [
            "When exercising while fasted, you lose additional sodium and water through sweat. Ensure you drink electrolyte-supplemented water before and during demanding training sessions.",
          ],
        },
      ],
      clinicalNotice:
        "Diabetic individuals or those on glucose-regulating medication should never exercise fasted without direct clinical supervision.",
    },
  },
  {
    slug: "fasting-and-sleep",
    title: "Intermittent Fasting and Sleep Quality",
    shortDescription: "How aligning meal windows with circadian biology protects melatonin secretion, core body temperature, and deep restorative sleep.",
    category: "Recovery",
    readTime: "6 min read",
    publishedAt: "2024-03-10",
    updatedAt: "2024-03-10",
    author: "Muhammad Usama",
    content: {
      leadParagraph:
        "Meal timing exerts a profound influence on sleep latency, nocturnal heart rate variability (HRV), and stage 3/4 deep restorative sleep.",
      sections: [
        {
          heading: "1. The Thermic Cost of Late Digestion",
          body: [
            "Digesting complex macronutrients raises core body temperature. For sleep onset to occur normally, circadian biology requires a drop of approximately 1°C in core body temperature.",
            "Finishing dinner 3 to 4 hours before bedtime permits gastric emptying, allowing resting heart rate to lower earlier in the night.",
          ],
          keyTakeaway: "A 3-hour digestive buffer before sleep improves sleep latency and nocturnal HRV.",
        },
        {
          heading: "2. Gastroesophageal Reflux Prevention",
          body: [
            "Lying supine with a full stomach causes nocturnal acid reflux and micro-arousals that fragment sleep architecture.",
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
    publishedAt: "2024-03-08",
    updatedAt: "2024-03-08",
    author: "Muhammad Usama",
    content: {
      leadParagraph:
        "After 16 to 24 hours of digestive stillness, your stomach enzymes, pancreatic juices, and gut microbiome have down-regulated. How you break your fast sets the tone for digestion and energy for the remainder of the day.",
      sections: [
        {
          heading: "1. Start With Gentle Foods",
          body: [
            "Warm bone or vegetable broth with a pinch of sea salt.",
            "Soft-boiled or scrambled eggs with a slice of avocado.",
            "Steamed greens with extra virgin olive oil and wild-caught salmon or grilled chicken.",
          ],
          keyTakeaway: "Prioritize warm, easily absorbed whole foods rich in amino acids and clean lipids.",
        },
        {
          heading: "2. What NOT to Break With",
          body: [
            "Avoid high-glycemic carbohydrates like croissants, donuts, or sweetened smoothies. These provoke reactive hypoglycemia, leaving you sleepy and famished within 90 minutes.",
            "Avoid very spicy or deep-fried foods which can irritate the resting stomach lining.",
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
    publishedAt: "2024-03-05",
    updatedAt: "2024-03-05",
    author: "Muhammad Usama",
    content: {
      leadParagraph:
        "While intermittent fasting is structurally straightforward, small behavioral missteps can derail metabolic benefits and cause unnecessary fatigue.",
      sections: [
        {
          heading: "1. Treating the Eating Window as a Caloric Free-for-All",
          body: [
            "Fasting does not negate the laws of thermodynamics. Consuming ultra-processed, calorie-dense junk food during your feeding window undermines cardiovascular and metabolic health.",
          ],
        },
        {
          heading: "2. Chronically Inadequate Protein Intake",
          body: [
            "Limiting your meals to an 8-hour or 4-hour window requires deliberate planning to consume sufficient dietary protein (aim for 1.6–2.2g per kg of body weight) to protect lean skeletal muscle.",
          ],
        },
        {
          heading: "3. Skipping Electrolyte Replacement",
          body: [
            "Water alone is insufficient. If you experience dizziness, mental haze, or leg cramps, sodium, potassium, and magnesium supplementation is often the missing link.",
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
];
