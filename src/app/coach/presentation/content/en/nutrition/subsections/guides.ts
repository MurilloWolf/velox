import {
  NutritionDistanceGuide,
  NutritionDistanceGuideProps,
} from "@/app/coach/components/Subsections";
import type { SubsectionContent } from "../../../../types";

type NutritionGuideConfig = {
  id: string;
  label: string;
  props: NutritionDistanceGuideProps;
};

const guides: NutritionGuideConfig[] = [
  {
    id: "nutrition-5k",
    label: "5K",
    props: {
      title: "Smart fueling for 5K",
      distanceTag: "5K",
      description:
        "Short races demand quick energy, a light stomach and precise hydration timing for 20–40 minute efforts.",
      goal:
        "Keep glycogen available without GI distress so you can explode off the line.",
      rationale:
        "Lean protocols steady blood glucose, deliver fast energy and avoid performance drops from a heavy stomach.",
      focusPoints: [
        "Disciplined 24 h lead-in: moderate carbs, low fat.",
        "Calculated pre-race snack that neither overloads nor underfuels.",
        "Hydration spread in tiny sips to keep the stomach light.",
        "Accelerated recovery with a carb + protein combo right after the finish.",
      ],
      preparation: {
        title: "Before the race",
        intro:
          "Layer carb intake in light waves to reach the start line without feeling stuffed.",
        blocks: [
          {
            title: "24 h prior",
            description:
              "Base meals on simple/moderate carbs paired with lean protein and little fat.",
            bullets: [
              "White rice, potatoes, tapioca, fine oats and fruit are your best sources.",
              "Lean protein in small portions (chicken, fish, eggs, tofu).",
              "Hydrate with 35–40 ml/kg across the day; coconut water and light sports drinks count.",
            ],
          },
          {
            title: "Last full meal (3 h before)",
            description:
              "Choose easy-to-digest carbs with a small dose of protein.",
            bullets: [
              "Ideas: tapioca with jam, white bread with honey + half banana, sweet potato with a boiled egg.",
              "Skip excess fiber, full-fat dairy and fried foods.",
              "If nerves hit, split the meal into two halves 30 minutes apart.",
            ],
          },
          {
            title: "30–45 minutes out",
            description:
              "Final tweaks to steady glucose without bloating your stomach.",
            bullets: [
              "Use a 15–25 g carb snack (small banana, sports drink, gel).",
              "Small sips of water (100–150 ml) just to avoid dry mouth.",
              "Finish the warm-up before the snack to avoid reflux.",
            ],
          },
        ],
      },
      raceExecution: {
        title: "During the race",
        intro:
          "Most 5K races don’t need solid intake; focus on rhythm and avoiding a dry throat.",
        blocks: [
          {
            title: "Minimal hydration",
            description:
              "Use aid stations only if needed and prioritize tiny sips.",
            bullets: [
              "100 ml of water mid-race is enough in mild weather.",
              "In heat, alternate with diluted sports drink for light sodium.",
              "Avoid large gulps to prevent the “sloshing stomach” feeling.",
            ],
          },
          {
            title: "Energy",
            description:
              "Only necessary for athletes running >25 minutes or in extreme conditions.",
            bullets: [
              "If you take a gel, pick a runny texture for quick intake.",
              "Test everything during intervals before race day.",
            ],
          },
        ],
      },
      recovery: {
        title: "After the race",
        intro:
          "Replenish high-intensity glycogen and trigger muscle repair immediately after the final sprint.",
        blocks: [
          {
            title: "First 30 minutes",
            description:
              "Combine carbs and protein at roughly a 3:1 ratio.",
            bullets: [
              "Options: yogurt with fruit and oats, whey shake with banana, turkey sandwich.",
              "Drink 400–600 ml of fluids; sports drinks help on hot days.",
            ],
          },
          {
            title: "1–3 hours later",
            description:
              "Eat a full meal with complex carbs, lean protein and colorful veggies.",
            bullets: [
              "Think rice, pasta or tubers + chicken or fish + varied salad.",
              "Add healthy fats (olive oil, avocado) to aid vitamin absorption.",
            ],
          },
          {
            title: "Next workout",
            description:
              "If you have a session the next day, plan an extra bedtime snack.",
            bullets: [
              "Banana with peanut butter or warm oats aid overnight replenishment.",
            ],
          },
        ],
      },
      supplements: [
        "Caffeine 30 minutes before (3–4 mg/kg) if you’re used to the stimulus.",
        "Carb gel for athletes racing longer than 30 minutes.",
        "Chronic beta-alanine can reduce the burning sensation in sprints.",
      ],
      watchouts: [
        "Skip full-fat dairy or high-fiber foods in the final hours.",
        "Nothing new on race day—no untested gels or supplements.",
        "Starting dehydrated kills power within the first kilometer.",
      ],
      glossary: [
        {
          term: "Gel",
          description:
            "Concentrated carb sachet—stick to flavors/textures tested in training.",
        },
        {
          term: "All-out",
          description:
            "Slang for going to the limit; requires a light stomach to avoid nausea.",
        },
        {
          term: "Carb timing",
          description:
            "Planning the exact moment to ingest carbs before and after hard work.",
        },
      ],
    },
  },
  {
    id: "nutrition-10k",
    label: "10K",
    props: {
      title: "Consistent fueling for 10K",
      distanceTag: "10K",
      description:
        "Mid-distance races demand a balance between energy reserves and lightness to hold a strong pace for 45–70 minutes.",
      goal:
        "Max out muscle glycogen and keep blood sugar steady without bloating.",
      rationale:
        "Spreading carbs over the last 36 hours plus light fueling during the race delays fatigue and keeps mechanics sharp.",
      focusPoints: [
        "Light 36 h carb load with familiar foods.",
        "Timed pre-race snack (3 h and 45 min out) to ensure availability.",
        "Strategic fueling every 30–35 minutes via gels or sports drinks.",
        "Three-step recovery plan (0–30 min, 3 h, 24 h) to bounce back fast.",
      ],
      preparation: {
        title: "Before the race",
        intro:
          "Work with two key windows: 36–18 hours out and 3 hours pre-start, adjusting fiber and sodium.",
        blocks: [
          {
            title: "36–18 hours prior",
            description:
              "Gently raise carb intake (6–7 g/kg) without blowing up total calories.",
            bullets: [
              "Use simple pasta, white breads, ripe fruit and cereals.",
              "Reduce fried foods, very fibrous greens and legumes.",
              "Add ~500 ml of electrolyte-rich fluids split into three servings.",
            ],
          },
          {
            title: "Night before",
            description: "Light dinner with dominant carbs and lean protein.",
            bullets: [
              "Ideas: rice + grilled chicken, gnocchi with light sauce, simple risotto.",
              "Skip heavy desserts or alcohol.",
            ],
          },
          {
            title: "3 h before gun time",
            description:
              "Main meal with medium-absorption carbs and little fat.",
            bullets: [
              "Thin oat pancake with honey, white bread + jelly + light scrambled egg.",
              "Sip 300–400 ml of water split over the hour, finishing 60 minutes before.",
            ],
          },
          {
            title: "45 minutes before",
            description:
              "Fast carbs (20–25 g) plus electrolytes if it’s hot.",
            bullets: [
              "Use a caffeinated gel, sports drink or race gummies.",
              "Stop fluid intake 15 minutes before the start.",
            ],
          },
        ],
      },
      raceExecution: {
        title: "During the race",
        intro:
          "Keep small, frequent intakes to hold pace from kilometer one.",
        blocks: [
          {
            title: "Hydration",
            description:
              "Sip 80–120 ml at each aid station or every 2 km, alternating water and sports drink.",
            bullets: [
              "In temps above 24 ºC, push to 150 ml and consider a salt capsule if you sweat heavily.",
              "Use a bottle or pinched cup to drink in two sips.",
            ],
          },
          {
            title: "Energy",
            description:
              "If you race longer than 40 minutes, include one gel or ~120 ml of carb drink.",
            bullets: [
              "Take it around km 5–6 followed by water for absorption.",
              "Runners above 60 minutes can plan a second shot near km 8.",
            ],
          },
        ],
      },
      recovery: {
        title: "After the race",
        intro:
          "Triple replacement—energy, protein and electrolytes—to protect VO2 and threshold gains.",
        blocks: [
          {
            title: "0–30 minutes",
            description:
              "Light liquid + solid combo at a 3:1 carb/protein ratio.",
            bullets: [
              "Whey shake with juice + banana, Greek yogurt with light granola.",
              "Drink 600–800 ml split between water and sports drink.",
            ],
          },
          {
            title: "1–3 hours post",
            description: "Colorful meal with complex carbs.",
            bullets: [
              "Brown rice or quinoa + salmon + sauteed veggies.",
              "Add sodium (olives, light broth) to replace sweat losses.",
            ],
          },
          {
            title: "Next 24 hours",
            description:
              "Keep fluids high and eat protein-rich snacks every 3 hours.",
            bullets: [
              "Yogurt with chia, scrambled eggs with light bread, fruit with nuts.",
            ],
          },
        ],
      },
      supplements: [
        "Caffeine 45 minutes before (up to 6 mg/kg) if you’ve tried it in long runs.",
        "Nitrates (beet juice) 2–3 hours prior if you respond well.",
        "Concentrated carb drink (maltodextrin) for athletes racing aggressively.",
      ],
      watchouts: [
        "Ignoring sodium on hot days spikes cramp risk.",
        "Carrying two gels untested leads to stomach issues.",
        "Grazing on fatty foods the day before slows digestion.",
      ],
      glossary: [
        {
          term: "Carb loading",
          description:
            "Strategy of increasing carbs in the days before to saturate glycogen.",
        },
        {
          term: "PRE",
          description:
            "Shorthand for the main pre-race meal (about 3 h before).",
        },
        {
          term: "Shot",
          description:
            "Term used for small doses of gel, honey or concentrated drinks taken mid-race.",
        },
      ],
    },
  },
  {
    id: "nutrition-15k",
    label: "15K",
    props: {
      title: "15K nutrition guide",
      distanceTag: "15K",
      description:
        "A transition distance that demands more robust carb and sodium planning to hold 70–100 minutes of running.",
      goal:
        "Boost energy autonomy without upsetting the gut so fuel lasts to the final kilometer.",
      rationale:
        "Moderate carb loading, fractional fueling and electrolyte focus prevent the pace drop between km 10–14.",
      focusPoints: [
        "Start nutrition planning 48 h out prioritizing clean carbs.",
        "Pre-race meal plus ~2 g sodium spread across the day.",
        "Two-step gel/drink plan (around 45 and 75 minutes) during the race.",
        "Recovery focused on high-quality protein and antioxidants.",
      ],
      preparation: {
        title: "Before the race",
        intro:
          "The lead-up matters more—raise carb and sodium gradually.",
        blocks: [
          {
            title: "48–24 hours prior",
            description:
              "Raise carbs to ~7 g/kg and add extra sodium via food.",
            bullets: [
              "Lean on simple pasta, mashed potatoes, white breads, fruit juice.",
              "Season with sea salt or drink electrolyte water to reach ~2 g sodium/day.",
              "Avoid risky raw foods (mayo, street salads).",
            ],
          },
          {
            title: "Night before",
            description:
              "Bigger dinner but low fat: favor carbs + light protein.",
            bullets: [
              "Sweet potato with shredded chicken, al dente pasta with simple tomato sauce.",
              "Finish hydration an hour before bed to avoid sleep interruptions.",
            ],
          },
          {
            title: "3 h before",
            description:
              "Eat ~1–1.5 g/kg carbs plus ~0.3 g/kg protein.",
            bullets: [
              "Fine oat pancake with honey and egg whites, rice + scrambled egg + banana.",
              "Coffee or black tea are fine if you’re accustomed.",
            ],
          },
          {
            title: "60–30 minutes before",
            description:
              "Fast carbs + moderate sodium to prime the finish.",
            bullets: [
              "Gel or drink (20–25 g carbs) + 200 ml water.",
              "In heat, add a salt capsule (400–500 mg) under professional guidance.",
            ],
          },
        ],
      },
      raceExecution: {
        title: "During the race",
        intro:
          "Spread energy so km 12–15 match the pace of km 1.",
        blocks: [
          {
            title: "First half",
            description:
              "At km 6–7, take the first gel or ~150 ml carb drink.",
            bullets: [
              "Always chase with sips of water for fast absorption.",
              "If you prefer solids, use athlete-specific chews.",
            ],
          },
          {
            title: "Second half",
            description:
              "Plan the second gel between km 11–12, especially if racing >70 min.",
            bullets: [
              "Choose versions with electrolytes or light caffeine.",
              "If you rely on sports drinks, alternate with water to avoid sugar overload.",
            ],
          },
          {
            title: "Hydration",
            description:
              "Drink 120–150 ml per station; adjust for humid weather.",
            bullets: [
              "Split the sip in two to avoid choking.",
              "Aim for pale yellow urine before the start.",
            ],
          },
        ],
      },
      recovery: {
        title: "After the race",
        intro:
          "Three-step process to limit muscle damage and restore immunity.",
        blocks: [
          {
            title: "First 20 minutes",
            description:
              "Liquid carbs + protein and a sodium hit.",
            bullets: [
              "Banana smoothie + whey + pinch of salt, whole grape juice + whey.",
            ],
          },
          {
            title: "Next 1–2 hours",
            description:
              "Full meal with whole grains, lean protein and veggies.",
            bullets: [
              "Brown rice + fish + mixed vegetables, quinoa + lean meat + veggies.",
              "Add antioxidant fruit (berries, orange).",
            ],
          },
          {
            title: "Rest of the day",
            description:
              "Protein snacks every 3 hours plus steady hydration (~35 ml/kg).",
            bullets: [
              "Protein yogurt, scrambled eggs, low-sugar protein bar.",
            ],
          },
        ],
      },
      supplements: [
        "BCAA or EAA may help runners with heavy weekly volume.",
        "Split caffeine (half before, half around km 10) for aggressive pacing.",
        "Nighttime magnesium to support neuromuscular recovery.",
      ],
      watchouts: [
        "Don’t skip the second carb intake—that sustains the finish.",
        "Heavy solids at km 10 can cause side stitches.",
        "Carrying a heavy bottle without practice changes arm mechanics.",
      ],
      glossary: [
        {
          term: "Longao (long run)",
          description: "Weekly long run where you rehearse nutrition strategy.",
        },
        {
          term: "Lap",
          description: "Manual split on the watch to mark intervals—use it for gels.",
        },
        {
          term: "FC",
          description:
            "Heart rate; monitor zones to adjust intake during the race.",
        },
      ],
    },
  },
  {
    id: "nutrition-21k",
    label: "21K",
    props: {
      title: "Strategic half-marathon fueling",
      distanceTag: "21K",
      description:
        "Covering 21 km means periodized carb loading, electrolyte plans and dress rehearsals for 90–140 minutes on the move.",
      goal:
        "Keep glycogen topped off and the gut adapted to multiple intakes mid-race.",
      rationale:
        "Layered carbs, sodium and hydration help you hold race pace at km 18 when many fade.",
      focusPoints: [
        "Ramp carbs 3 days prior with minimal fiber swings.",
        "Plan gels/drinks every 35–40 minutes, synced with hydration.",
        "Manage 600–800 mg sodium spread before and during the race.",
        "Recover like a marathon: protein, antioxidants and sleep.",
      ],
      preparation: {
        title: "Before the race",
        intro:
          "Work ahead: tune carb and sodium intake starting 72 hours out.",
        blocks: [
          {
            title: "72–48 hours before",
            description:
              "Raise carbs to 7–8 g/kg; keep protein moderate.",
            bullets: [
              "Spread carbs across 5–6 meals (pasta, tubers, fruit, bread).",
              "Cut insoluble fiber (kale, raw grains).",
              "Add gentle sodium via broths, coconut water or diluted sports drink.",
            ],
          },
          {
            title: "48–24 hours",
            description:
              "Continue carb loading and fine-tune fluids; rehearse race-day meals.",
            bullets: [
              "Repeat familiar menus to avoid surprises.",
              "Add an extra bedtime snack (oatmeal, bread with honey).",
            ],
          },
          {
            title: "3 h before",
            description:
              "Robust meal (~1.5 g/kg carbs) with light protein and little salt.",
            bullets: [
              "White rice + omelet + banana, white bread + jelly + lactose-free yogurt.",
              "Finish water intake 45 minutes prior to avoid bathroom stops.",
            ],
          },
          {
            title: "90–30 minutes before",
            description:
              "Fast carbs plus electrolytes to top off fuel and sodium.",
            bullets: [
              "Caffeinated gel or concentrated sports drink (20–30 g carbs).",
              "Salt capsule (500–600 mg) 30 minutes out if it's hot.",
            ],
          },
        ],
      },
      raceExecution: {
        title: "During the race",
        intro:
          "Regular fueling is decisive to hold pace after km 15.",
        blocks: [
          {
            title: "Carb plan",
            description:
              "Gels or drinks every 35–40 minutes (roughly km 7, 14, 18).",
            bullets: [
              "Vary textures (gel, drink, chew) to keep the gut comfortable.",
              "Always pair with water to aid absorption.",
            ],
          },
          {
            title: "Hydration",
            description:
              "Drink 150–200 ml at every station (every 2–3 km). Alternate water and sports drink.",
            bullets: [
              "If you wear a belt, plan two bottles (water + sports drink).",
              "Consider extra intake late if your mouth feels dry.",
            ],
          },
          {
            title: "Sodium & caffeine",
            description:
              "Target 600–800 mg sodium across the race; extra caffeine only if tested.",
            bullets: [
              "Use capsules around km 10 or high-sodium sports drinks.",
              "A final caffeinated gel near km 17 can boost the closing sprint.",
            ],
          },
        ],
      },
      recovery: {
        title: "After the race",
        intro:
          "Recover like a mini marathon—layered structure throughout the day.",
        blocks: [
          {
            title: "0–30 minutes",
            description:
              "Super shake with carbs, protein and sodium.",
            bullets: [
              "Banana smoothie with whey + salt + coconut water.",
              "White bread sandwich + turkey + fruit.",
            ],
          },
          {
            title: "2–4 hours",
            description:
              "Full meal focused on complex carbs and lean protein.",
            bullets: [
              "Pasta with lean meat and tomato sauce, rice + fish + veggies.",
              "Add antioxidants (berries, turmeric, ginger).",
            ],
          },
          {
            title: "12–24 hours",
            description:
              "Protein snacks every 3 hours, constant hydration and magnesium at night.",
            bullets: [
              "Protein yogurt, eggs, cottage cheese, fruit with nuts.",
            ],
          },
        ],
      },
      supplements: [
        "Caffeine (4–6 mg/kg) 45 minutes before; split half around km 14 if tolerated.",
        "Powdered carbs (maltodextrin, palatinose) to dilute in your own bottle.",
        "Chronic bicarbonate protocols may help threshold—do it with supervision.",
      ],
      watchouts: [
        "No new gels on race day—stick to trained flavors.",
        "Ignoring sodium leads to dizziness and late-race collapse.",
        "Excess fiber the day before can cause GI urgency.",
      ],
      glossary: [
        {
          term: "FCM",
          description:
            "Maximum heart rate, used to control effort versus fuel intake.",
        },
        {
          term: "Gels every 7K",
          description:
            "Classic strategy: take a gel roughly every 7 km; adjust to your race duration.",
        },
        {
          term: "Diluted sports drink",
          description:
            "Half-and-half mix of sports drink and water to reduce sugar concentration.",
        },
      ],
      tables: [
        {
          title: "Carb plan by kilometer",
          caption:
            "Based on a 1h40–2h finish; shift points according to available aid.",
          headers: ["Moment", "Intake", "Note"],
          rows: [
            [
              "45 min before",
              "20–25 g gel + 150 ml water",
              "Take it post warm-up and cut fluids 15 min before the start.",
            ],
            [
              "Km 7",
              "Standard gel (25 g)",
              "Drink 2–3 sips of water immediately to help absorption.",
            ],
            [
              "Km 14",
              "Caffeinated gel or 150 ml sports drink",
              "Use caffeine only if you’ve tested it in long runs.",
            ],
            [
              "Km 18",
              "Light gel or concentrated sports drink",
              "Last boost for the finish—always pair with water.",
            ],
          ],
        },
      ],
      alerts: [
        {
          title: "Weather above 24 ºC",
          description:
            "Add an extra salt capsule (300–400 mg) around km 12 and shorten drink intervals to avoid a drop in blood pressure.",
        },
        {
          title: "Heavy stomach",
          description:
            "If nausea hits, swap the next gel for sips of sports drink and opt for caffeine-free versions.",
        },
        {
          title: "Races with few aid stations",
          description:
            "Carry your own bottle with carb drink to guarantee intake around km 14 if no official station exists.",
        },
      ],
    },
  },
  {
    id: "nutrition-42k",
    label: "42K",
    props: {
      title: "Complete marathon fueling",
      distanceTag: "42K",
      description:
        "A marathon is a coordinated mission: heavy carb intake, sodium/electrolyte replacement and pre-tested gear.",
      goal:
        "Toe the line with max glycogen, an adapted gut, a 60–90 g carb/h plan and immediate post-race recovery.",
      rationale:
        "Without structure, the wall arrives before km 32. Adequate carbs, sodium and fluids keep the brain fed and delay the crash.",
      focusPoints: [
        "72 h carb load at 8–10 g/kg with gradual fiber reduction.",
        "Hourly intake plan (carbs, sodium, fluids) rehearsed on long runs.",
        "Assign gels to key kilometers (8, 14, 20, 26, 32, 36).",
        "Post-race recovery with plenty of fluids, protein and complex carbs.",
      ],
      preparation: {
        title: "Before the race",
        intro: "Strategy starts three days before—no new experiments.",
        blocks: [
          {
            title: "72–48 hours",
            description:
              "Raise carbs to 8–10 g/kg focusing on familiar foods.",
            bullets: [
              "Simple pasta, rice, potatoes, breads, ripe fruit and juices.",
              "Cut insoluble fiber and raw veggies; go for cooked versions.",
              "Split meals into 6–7 smaller sittings to keep the stomach light.",
            ],
          },
          {
            title: "48–24 hours",
            description: "Map every meal; include extra sodium (2–3 g/day).",
            bullets: [
              "Light salty broth, electrolyte water, salt capsules if it’s hot.",
              "Mini snacks every 3 hours (bread with honey, dried fruit, sports drink).",
            ],
          },
          {
            title: "Night before",
            description: "Light dinner centered on carbs with minimal sauce.",
            bullets: [
              "Pasta with light white sauce, simple risotto, mashed potatoes + chicken.",
              "Finish heavy hydration 2 h before bed; only small sips after.",
            ],
          },
          {
            title: "3–4 hours pre-start",
            description:
              "Main meal with ~2 g/kg carbs and 0.4 g/kg protein.",
            bullets: [
              "Bagel with honey + scrambled egg, rice + omelet + banana.",
              "Drink 500 ml of electrolyte beverage split into three servings.",
            ],
          },
          {
            title: "60–15 minutes before",
            description:
              "Final sequence of fast carbs + sodium + caffeine (if usual).",
            bullets: [
              "Caffeinated gel, concentrated sports drink, carb chew.",
              "Salt capsule 30 minutes before (500–600 mg) plus small sips of water.",
            ],
          },
        ],
      },
      raceExecution: {
        title: "During the race",
        intro: "Run the plan you tested on long runs; only adjust for weather.",
        blocks: [
          {
            title: "Carbs per hour",
            description:
              "Target 60–70 g/h if you finish under 4 h; faster runners can aim for 80–90 g/h.",
            bullets: [
              "Combine gels, carb drinks and chews to vary texture.",
              "Take gels every 25–30 minutes (km 8, 14, 20, 26, 32, 36).",
              "Use watch alerts; marking laps helps you stick to the plan.",
            ],
          },
          {
            title: "Hydration",
            description:
              "Drink 150–200 ml at every station (every 2–3 km).",
            bullets: [
              "Alternate water and sports drink; if you carry bottles, refill calmly.",
              "On cold days reduce volume but maintain cadence.",
            ],
          },
          {
            title: "Sodium & caffeine",
            description:
              "Total 1–1.5 g sodium across the race; split caffeine into doses.",
            bullets: [
              "Capsules every 60–70 minutes or high-sodium sports drinks.",
              "Final caffeine shot at km 32 helps break the “wall.”",
            ],
          },
        ],
      },
      recovery: {
        title: "After the race",
        intro:
          "Recovery is part of the plan—think about 24 hours of protocols.",
        blocks: [
          {
            title: "First 15 minutes",
            description: "Drink rich in carbs, protein and sodium.",
            bullets: [
              "Shake with banana, whey, salt, coconut water and honey.",
              "Light salty soup if your stomach prefers savory.",
            ],
          },
          {
            title: "1–2 hours",
            description:
              "Hearty meal with complex carbs, lean protein and cooked veggies.",
            bullets: [
              "Pasta, rice, potatoes or quinoa + fish/chicken + vegetables.",
              "Add antioxidants and anti-inflammatory foods (turmeric, ginger).",
            ],
          },
          {
            title: "Rest of the day",
            description:
              "Steady fluids (35–45 ml/kg) plus protein-focused snacks.",
            bullets: [
              "Protein yogurt, lean-meat sandwich, dried fruit with nuts.",
              "Magnesium and omega-3s support sleep quality and recovery.",
            ],
          },
        ],
      },
      supplements: [
        "Fractioned caffeine plan (e.g., 200 mg pre + 100 mg at km 25 + 100 mg at km 35).",
        "Gels combining maltodextrin + fructose to reach 90 g/h.",
        "Salt capsules (500–600 mg) every 45–60 minutes for heavy sweaters.",
      ],
      watchouts: [
        "Never try anything new on race day—test it at least twice on long runs.",
        "Skipping intake after km 30 accelerates the wall.",
        "Overdoing carb loading with fried food causes widespread heaviness.",
      ],
      glossary: [
        {
          term: "Muro",
          description:
            "The famous “wall”: shutdown around km 30–35 when carbs and sodium run low.",
        },
        {
          term: "Specific long run",
          description:
            "Long run used to test nutrition exactly as on race day.",
        },
        {
          term: "Brick de gel",
          description:
            "Small pouch with gels organized by order—a marathon staple.",
        },
      ],
      tables: [
        {
          title: "Carb intake map",
          caption:
            "Baseline for 3h30–4h30 marathoners; adjust timings to your pace.",
          headers: ["Kilometer", "Intake", "Notes"],
          rows: [
            [
              "45 min before",
              "25 g gel + 200 ml electrolyte drink",
              "Take it after dynamic stretching.",
            ],
            [
              "Km 8",
              "Standard gel 25 g",
              "Take with water; set a watch alarm.",
            ],
            [
              "Km 14",
              "Light caffeinated gel",
              "Pair with 150 ml of sports drink.",
            ],
            [
              "Km 20–21",
              "30 g gel or 250 ml drink",
              "Critical moment to keep glucose stable.",
            ],
            [
              "Km 26–27",
              "Gel with extra sodium",
              "Ideal to replace electrolytes lost so far.",
            ],
            [
              "Km 32",
              "Caffeinated gel or fast-acting carb",
              "Helps break the wall—drink water right after.",
            ],
            [
              "Km 36–37",
              "Final light gel or concentrated drink",
              "Important to maintain mental focus late.",
            ],
          ],
        },
      ],
      alerts: [
        {
          title: "Extreme heat",
          description:
            "On days above 26 ºC, back off pace by 5–10 s/km and push sodium toward 1.5 g across the race.",
        },
        {
          title: "Untested gels",
          description:
            "Pack only flavors and brands rehearsed on specific long runs; surprises increase GI risk.",
        },
        {
          title: "Missed station",
          description:
            "If you miss an aid station, replan: take half a gel and wait for the next to avoid stomach overload.",
        },
      ],
    },
  },
  {
    id: "nutrition-ultra",
    label: "Ultra",
    props: {
      title: "Ultramarathon fueling",
      distanceTag: "Ultramarathon",
      description:
        "Races beyond 42 km (trails, 50K, 80K, 100K) require a hybrid plan with solid foods, varied fluids and thermal adaptation.",
      goal:
        "Maintain continuous carb intake (50–70 g/h) supported by light fats and protein to delay catabolism.",
      rationale:
        "Mixing solid, semi-solid and liquid sources reduces nausea, stabilizes glucose and prevents cognitive decline in long efforts.",
      focusPoints: [
        "4–5 day nutrition plan with carb loading and rising sodium.",
        "Aid-station chart (drop bags) listing varied foods.",
        "Intake strategy of 45–60 g carbs/h + light protein every 3 h.",
        "After-race recovery with aggressive fluids, electrolytes and calories.",
      ],
      preparation: {
        title: "Before the race",
        intro:
          "Organize logistics early: fuel kits for each leg and real food.",
        blocks: [
          {
            title: "5–3 days before",
            description:
              "Progressive carb load (6 → 8 g/kg) with familiar foods.",
            bullets: [
              "Include varied sources: rice, pasta, potatoes, cassava, fruit, breads.",
              "Raise sodium with broths, light soups and capsules if it’s hot.",
              "Test solid snacks (wraps, bread with spreads) on long runs.",
            ],
          },
          {
            title: "48–24 hours",
            description:
              "Dial in logistics: separate foods into numbered bags per aid station.",
            bullets: [
              "Assemble combos (gel + bar + capsule) for each leg.",
              "Include savory options (potatoes, mini sandwiches) and sweet ones.",
            ],
          },
          {
            title: "Pre-race meal (3–4 h before)",
            description:
              "Eat plenty of carbs with moderate protein and higher sodium.",
            bullets: [
              "Rice + eggs + banana + sports drink, pancakes with honey + whey in water.",
              "Drink 600 ml of electrolyte beverage up to 60 minutes before.",
            ],
          },
          {
            title: "Final hour",
            description:
              "Finish with a fast gel or drink and kit double-check.",
            bullets: [
              "Fast carbs (20–25 g) + salt capsule if weather is severe.",
              "Check gear, drop bags and planned intakes.",
            ],
          },
        ],
      },
      raceExecution: {
        title: "During the race",
        intro:
          "Adapt intake to terrain and temperature, prioritizing variety to avoid nausea.",
        blocks: [
          {
            title: "Carbohydrates",
            description:
              "Aim for 45–60 g/h on technical segments and up to 70 g/h on runnable stretches.",
            bullets: [
              "Combine gels, sports drinks, boiled potatoes, purees, bread with honey.",
              "Mix glucose and fructose sources to aid absorption.",
            ],
          },
          {
            title: "Light protein and fat",
            description:
              "Every 3 hours, eat 5–10 g of protein plus a small fat dose.",
            bullets: [
              "Mini sandwich with turkey, light cheese, nuts, amino capsules.",
              "Helps curb hunger and preserve lean mass.",
            ],
          },
          {
            title: "Hydration & sodium",
            description:
              "Plan 400–600 ml/h with 500–700 mg sodium, adjusting for heat and altitude.",
            bullets: [
              "Use a pack with two bottles: one water, one sports/carbo drink.",
              "Add extra electrolyte capsules on long climbs and hot stretches.",
            ],
          },
          {
            title: "Aid bases & drop bags",
            description:
              "Refuel, change socks/shirts, and eat more substantial solids.",
            bullets: [
              "Salty soups, instant noodles, rice with salmon, salted potatoes.",
              "Take small caffeine doses if you’re used to it.",
            ],
          },
        ],
      },
      recovery: {
        title: "After the race",
        intro: "Plan to recover for at least 48 hours.",
        blocks: [
          {
            title: "0–30 minutes",
            description:
              "Rehydrate with electrolyte drinks and liquid carbs.",
            bullets: [
              "Strong sports drink + coconut water + protein gel.",
              "If tolerated, a hot salty soup quickly restores sodium.",
            ],
          },
          {
            title: "1–3 hours",
            description:
              "Calorie-dense meal with complex carbs, protein and veggies.",
            bullets: [
              "Rice, pasta or potatoes + lean meat + cooked vegetables.",
              "Add fruit and antioxidant-rich foods.",
            ],
          },
          {
            title: "24–48 hours",
            description:
              "Protein-rich snacks every 3 hours, extra electrolytes and tons of water.",
            bullets: [
              "Protein yogurt, eggs, shakes, salty broths.",
              "Magnesium, zinc and omega-3 help the inflammatory response.",
            ],
          },
        ],
      },
      supplements: [
        "Micro doses of caffeine (100 mg) every 2–3 hours if you’re used to it.",
        "Gels mixing maltodextrin + fructose + sodium to reach 70 g/h.",
        "BCAA or EAA capsules every 3 hours to limit catabolism.",
        "Extra electrolyte tablets on very hot sections.",
      ],
      watchouts: [
        "Living on gels alone triggers nausea after 6–8 hours.",
        "Skipping protein at bases during long events accelerates muscle loss.",
        "Forgetting to label drop bags leads to missing critical fuel.",
      ],
      glossary: [
        {
          term: "Drop bag",
          description:
            "Bag delivered to the organization with supplies staged at specific bases.",
        },
        {
          term: "Crew",
          description:
            "Support team responsible for managing food, hydration and logistics.",
        },
        {
          term: "Trail mix",
          description:
            "Mix of nuts, dried fruit and chocolate commonly used in ultras.",
        },
      ],
      tables: [
        {
          title: "Hourly intake baseline",
          caption:
            "Use as a reference and adjust to available bases and drop bags.",
          headers: ["Moment", "Carbs", "Protein/Fat", "Notes"],
          rows: [
            [
              "Pre-start (45 min)",
              "25 g gel + electrolyte drink",
              "—",
              "Stop fluids 15 min before the gun.",
            ],
            [
              "Every 45–60 min",
              "25 g gel or 150 ml carb drink",
              "—",
              "Alternate formats to avoid nausea.",
            ],
            [
              "Every 3 hours",
              "Light sandwich or potato puree (20 g carbs)",
              "5–8 g protein + 3 g fat",
              "Bread with turkey, light cheese, nuts.",
            ],
            [
              "Main bases",
              "Pasta, rice, boiled potatoes",
              "Light soup with protein",
              "Use the stop to take extra sodium and warm fluids.",
            ],
            [
              "Night / cold sections",
              "Hot drink with maltodextrin",
              "Dark chocolate or peanut butter",
              "Helps thermoregulation in low temps.",
            ],
          ],
        },
      ],
      alerts: [
        {
          title: "Technical terrain or intense cold",
          description:
            "Increase light fats (nuts, peanut butter) to preserve heat and rely on hot drinks at bases.",
        },
        {
          title: "Loss of appetite",
          description:
            "Alternate sweet/savory and textures; include soups, broths and citrus fruits to reset the palate.",
        },
        {
          title: "Insufficient sodium",
          description:
            "Swollen hands or cramps signal adjustments—add electrolyte capsules and monitor urine color.",
        },
      ],
    },
  },
];

const nutritionGuideSubsections: SubsectionContent[] = guides.map(
  ({ id, label, props }) => ({
    id,
    label,
    component: NutritionDistanceGuide,
    props,
  })
);

export default nutritionGuideSubsections;
