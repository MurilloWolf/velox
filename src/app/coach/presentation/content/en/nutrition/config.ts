import { Apple } from "lucide-react";

import { NutritionSection } from "@/app/coach/components/Sections";
import type {
  NutritionSectionProps,
  NutritionLevel,
  NutritionRaceGuide,
} from "@/app/coach/components/Sections";
import type { SectionContent } from "../../../types";
import { nutritionPanel } from "./panels";
import subsections from "./subsections";

const intro: NutritionSectionProps["intro"] = {
  title: "Nutrition Tips",
  description:
    "Complete fueling guides for runners of every level and distance.",
};

const levels: Record<string, NutritionLevel> = {
  beginner: {
    title: "Beginner Nutrition",
    tips: [
      {
        title: "Hydration Comes First",
        description:
          "Drink at least 2 liters of water per day. Bump it to 3–4 liters on training days.",
        category: "Hydration",
      },
      {
        title: "Carbohydrates = Energy",
        description:
          "Eat complex carbs like brown rice, sweet potato and oats 2–3 hours before training.",
        category: "Pre-workout",
      },
      {
        title: "Protein for Recovery",
        description:
          "Add lean protein (chicken, fish, eggs) to every meal to help rebuild muscles.",
        category: "Recovery",
      },
      {
        title: "Skip Heavy Foods",
        description:
          "Avoid running on a full stomach. Wait at least two hours after large meals.",
        category: "General tip",
      },
    ],
  },
  intermediate: {
    title: "Intermediate Nutrition",
    tips: [
      {
        title: "Nutrient Timing",
        description:
          "Consume carbs + protein in the 30–60 minute window post-workout to optimize recovery.",
        category: "Post-workout",
      },
      {
        title: "Strategic Supplementation",
        description:
          "Consider BCAA, whey protein and maltodextrin for longer or more intense sessions.",
        category: "Supplements",
      },
      {
        title: "Nutrition Periodization",
        description:
          "Match carb intake to training volume: more carbs on heavy days, less on easy ones.",
        category: "Strategy",
      },
      {
        title: "Healthy Fats",
        description:
          "Include avocado, nuts and olive oil for hormonal balance and long-lasting fuel.",
        category: "Macronutrients",
      },
    ],
  },
  advanced: {
    title: "Advanced Nutrition",
    tips: [
      {
        title: "Strategic Carb Loading",
        description:
          "Increase carbs to 8–10 g/kg in the 2–3 days before long races to top up glycogen.",
        category: "Race day",
      },
      {
        title: "Fueling During the Race",
        description:
          "For races longer than 90 minutes: target 30–60 g of carbs per hour via gels, drinks or food.",
        category: "During race",
      },
      {
        title: "Test Everything",
        description:
          "Never try new foods or supplements on race day. Rehearse the entire plan in training.",
        category: "Strategy",
      },
      {
        title: "Advanced Recovery",
        description:
          "Aim for a 3:1 or 4:1 carb-to-protein ratio after hard sessions. Creatine is welcome.",
        category: "Recovery",
      },
    ],
  },
};

const races: Record<string, NutritionRaceGuide> = {
  "5k": {
    title: "Fueling and Hydration for 5K races",
    tips: [
      "In the 24 hours before race day, prioritize easy-to-digest carbs (rice, potatoes, pasta, fruit, oats, light breads) and keep fat/fiber low to avoid GI distress.",
      "Include lean proteins in moderate portions (chicken, fish, eggs or tofu) to support recovery without feeling heavy.",
      "Hydrate steadily with 35–45 ml of fluids per kilogram throughout the day — for a 70 kg runner that’s roughly 2.5–3 liters split among water, sports drinks and coconut water.",
      "2–3 hours before the start, eat a light meal rich in quick/medium absorption carbs, moderate protein and low fat/fiber: toast with honey, banana with oats, tapioca with jam or sweet potato with a boiled egg.",
      "Avoid brand-new foods, dairy, fried items and spicy condiments in the final hours to minimize surprises.",
      "30–60 minutes before the gun, if you have a gap, use a fast snack (banana or gel with 20–30 g of carbs) plus small sips of water or sports drink (100–200 ml).",
      "During the race, comfort is the priority: small gulps of water at aid stations usually suffice. On very hot days, add ~100 ml of sports drink to replace sodium/potassium.",
      "Within 30 minutes after finishing, combine carbs and protein in a 3:1 or 4:1 ratio (banana smoothie with whey, yogurt with fruit and oats, chicken sandwich) and drink 500–700 ml of fluids, favoring sports drinks if you sweated a lot.",
      "Between 1 and 3 hours post-race, eat a full meal with complex carbs (rice, potatoes, quinoa), lean protein and vegetables to speed glycogen and micronutrient replenishment.",
      "Useful supplements: whey right after the race, gels or sports drinks before/after intense efforts >25 minutes, caffeine (3–6 mg/kg) 30–45 minutes before, beta-alanine and creatine for ongoing use — always with professional guidance.",
      "Adjust the strategy to your level: beginners focus on light meals and steady hydration; advanced athletes test caffeine timing, snacks and recovery protocols during training.",
    ],
  },
  "10k": {
    title: "Fueling for 10K",
    tips: [
      "Eat a carb-focused breakfast about 3 hours before the start.",
      "Consider a gel 15 minutes before if you plan to run aggressively.",
      "Sip water at every aid station when available.",
      "Recover with a protein shake plus banana right after crossing the finish line.",
    ],
  },
  half: {
    title: "Half Marathon Nutrition",
    tips: [
      "Do a light carb load in the 2 days leading up to the event.",
      "Take a gel or isotonic every 40–45 minutes.",
      "Drink every 3–5 km to stay ahead of dehydration.",
      "Eat a full recovery meal within 2 hours after the race.",
    ],
  },
  marathon: {
    title: "Marathon Nutrition",
    tips: [
      "Serious carb loading: raise carb intake for 3 days before the race.",
      "Use a gel every 30–40 minutes during the event.",
      "Alternate isotonic drinks and water at each aid station.",
      "Consider a caffeine boost around kilometer 30 for the final push.",
      "Electrolytes and salt management are essential for long efforts.",
    ],
  },
};

const props: NutritionSectionProps = {
  intro,
  levels,
  races,
};

export const nutritionSectionContent: SectionContent = {
  id: "nutrition",
  label: "Nutrition Tips",
  icon: Apple,
  component: NutritionSection,
  props,
  panel: nutritionPanel,
  subsections: subsections,
};
