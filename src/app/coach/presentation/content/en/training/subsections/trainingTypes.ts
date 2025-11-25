import {
  TrainingTypeGuide,
  TrainingTypeGuideProps,
} from "@/app/coach/components/Subsections";
import type { SubsectionContent } from "../../../../types";
import { trainingTypePanel } from "../panels";

type TrainingTypeConfig = {
  id: string;
  label: string;
  props: TrainingTypeGuideProps;
};

const trainingTypes: TrainingTypeConfig[] = [
  {
    id: "training-type-fartlek",
    label: "Fartlek",
    props: {
      title: "Fartlek",
      description:
        "Free-form pace changes alternating surges and jogs without full stops, working both the mind and cardio adaptation.",
      goal:
        "Build resistance to pace swings and improve quick transitions between moderate and hard zones.",
      rationale:
        "Alternating aerobic and anaerobic stimuli in the same workout teaches the body to buffer lactate and regain rhythm—essential on hilly courses or crowded races.",
      aliases: ["pace play", "free fartlek", "FTK"],
      structure: [
        {
          label: "Warm-up",
          description:
            "10–15 minutes of progressive jog with 2–3 accelerations of 20 seconds to activate coordination.",
        },
        {
          label: "Main block",
          description:
            "Sets of 1–3 minutes strong followed by 1–2 minutes easy, picking visual references (light post, corner, climb).",
        },
        {
          label: "Cool-down",
          description:
            "8–12 minutes of easy running plus dynamic stretches or mobility.",
        },
      ],
      intensityCues: [
        "Hard parts near 5K effort or RPE 8–9/10.",
        "Easy parts at conversational pace (4–5/10) to recover without stopping.",
        "Vary terrain to sharpen neuromuscular adaptation.",
      ],
      whenToUse: [
        "Start of specific cycles after a big base block.",
        "Busy weeks when you need versatile intensity.",
        "Prep for races with hills, surface changes or lots of turns.",
      ],
      tips: [
        "Mentally plan change points before starting to avoid overcooking early reps.",
        "Start controlled and let the final surges get progressively faster.",
        "Use manual lap to compare strong vs. easy sections afterwards.",
      ],
      watchouts: [
        "Skip super-aggressive fartleks in the same week as a long run or key race.",
        "If the hard pace falls apart, cut reps to 45–60 seconds instead of forcing.",
      ],
    },
  },
  {
    id: "training-type-tiro",
    label: "Sprint reps",
    props: {
      title: "Sprint work (pure speed)",
      description:
        "Short explosive repetitions with generous rest to build power, coordination and economy at very fast paces.",
      goal:
        "Raise top speed and recruit fast-twitch fibers that support surges and strong finishes.",
      rationale:
        "Long rests let each rep be executed with clean mechanics and high neural output, lifting your speed ceiling so race paces feel easier.",
      aliases: ["sprint", "all-out", "rep"],
      structure: [
        {
          label: "Warm-up",
          description:
            "12–15 minutes of easy running, hip mobility and 4 x 80 m strides.",
        },
        {
          label: "Repetitions",
          description:
            "6–10 reps of 80–150 m at 95–100% with jog or walk recovery until fully ready.",
        },
        {
          label: "Recovery block",
          description:
            "3–4 minutes of easy jog between sets, keeping posture relaxed for the next series.",
        },
        {
          label: "Cool-down",
          description:
            "10 minutes easy running plus calf/hamstring mobility.",
        },
      ],
      intensityCues: [
        "High cadence, short strides, stable torso.",
        "Recover until breathing returns to normal; quality beats quantity.",
        "Focus on landing under your center of mass to avoid overstriding.",
      ],
      whenToUse: [
        "Speed phase before entering race-pace blocks.",
        "Reduced-volume weeks (taper) to keep the legs snappy.",
        "Neuromuscular reinforcement periods for long-distance runners.",
      ],
      tips: [
        "Do sprints on flat terrain or a track to reduce injury risk.",
        "Use a responsive shoe for better feedback.",
        "If power drops, cut the number of reps and finish with good mechanics.",
      ],
      watchouts: [
        "Avoid on days of accumulated fatigue or heavy legs—strain risk climbs.",
        "Don’t race training partners; stay focused on execution.",
      ],
    },
  },
  {
    id: "training-type-tiro-distancia",
    label: "Distance intervals",
    props: {
      title: "Distance-based intervals",
      description:
        "Intervals with fixed distances (200 m, 400 m, 1 km) targeting race pace or faster with controlled recoveries.",
      goal:
        "Sharpen target pace and VO2 max while keeping consistent splits through progressive reps.",
      rationale:
        "Measured distances make pace control precise, building time in the target zone and muscle memory for race day.",
      aliases: ["400 repeats", "metric intervals"],
      structure: [
        {
          label: "Warm-up",
          description:
            "15 minutes of easy running plus drills and strides.",
        },
        {
          label: "Main sets",
          description:
            "Example: 6 x 400 m at 3K–5K pace with 200 m jog, or 5 x 1000 m at 10K pace with 2 minutes easy.",
        },
        {
          label: "Bonus rep",
          description:
            "Optional last rep slightly faster to simulate the race finish.",
        },
        {
          label: "Cool-down",
          description:
            "8–10 minutes of jogging plus light quad/hamstring stretches.",
        },
      ],
      intensityCues: [
        "Use pace per km as the main guide; keep variation under 2 seconds between reps.",
        "Active recovery at 60–70% of race pace to maintain aerobic stimulus.",
        "Breathing should be strong but controlled—short sentences during recovery.",
      ],
      whenToUse: [
        "Specific blocks for 5K, 10K and half marathon.",
        "Weeks focused on VO2 max or short/mid race pace.",
        "Athletes who like clear pace and distance feedback.",
      ],
      tips: [
        "Set automatic laps or use the marked track for accuracy.",
        "Control the opening reps—start slightly conservative.",
        "Adjust recovery: if pace drops by >5 s, add 30 seconds rest.",
      ],
      watchouts: [
        "Excessive volume of long reps can disrupt the week’s long run.",
        "Avoid medium intervals the day after heavy strength sessions.",
      ],
    },
  },
  {
    id: "training-type-tiro-tempo",
    label: "Timed intervals",
    props: {
      title: "Timed intervals",
      description:
        "Clock-based intervals (e.g., 2' hard / 1' easy) for when distance markers are unavailable or you want to train by feel.",
      goal:
        "Build tolerance to intense rhythms guided by perception and cadence without relying on measured distances.",
      rationale:
        "Letting the watch dictate duration keeps you in target zones even with sketchy GPS and controls load by time.",
      aliases: ["timed interval", "2-for-1", "on/off"],
      structure: [
        {
          label: "Warm-up",
          description:
            "12 minutes easy running plus 3 x 30-second accelerations to prime heart rate.",
        },
        {
          label: "Progressive block",
          description:
            "Sets like 8 x (2' hard / 1' easy) or 5 x (3' hard / 90\" easy) on flat ground.",
        },
        {
          label: "Finishing block",
          description:
            "Two extra reps at controlled effort to lock in technique under fatigue.",
        },
        {
          label: "Cool-down",
          description:
            "10 minutes easy plus a short walk to bring heart rate down.",
        },
      ],
      intensityCues: [
        "Use RPE 7–8/10 or HR zone 4 as a guide.",
        "Keep cadence steady even on uneven terrain.",
        "Breathe 2 inhales / 2 exhales during the hard segments.",
      ],
      whenToUse: [
        "Days when you can’t measure distance (parks, treadmills).",
        "Weeks focused on feel rather than watch pace.",
        "Transition block between free fartleks and metric intervals.",
      ],
      tips: [
        "Set watch alerts so you don’t need to stare at the screen.",
        "Don’t start with long blocks; add hard duration every 1–2 weeks.",
        "If the last block feels brutal, keep duration and reduce intensity.",
      ],
      watchouts: [
        "Unstable GPS can mess with analysis—check cadence and HR metrics later.",
        "On hot days drop the expected effort by 5–8% to avoid overheating.",
      ],
    },
  },
  {
    id: "training-type-long-run",
    label: "Long runs",
    props: {
      title: "Long run",
      description:
        "Extended sessions that build muscular/mental endurance and improve fat utilization as fuel.",
      goal:
        "Develop endurance, energy efficiency and prepare the body for total race time.",
      rationale:
        "Continuous volume at moderate intensity expands capillarization, boosts glycogen stores and teaches you to run tired.",
      aliases: ["long run", "LR", "endurance run"],
      structure: [
        {
          label: "Warm-up",
          description:
            "3–4 km very easy, focusing on loosening hips and relaxed cadence.",
        },
        {
          label: "Main body",
          description:
            "Central portion at moderate aerobic effort (upper Z2/lower Z3) with optional progression over the final 20%.",
        },
        {
          label: "Fast finish (optional)",
          description:
            "Last 15–20 minutes at race pace to simulate finishing under fatigue.",
        },
        {
          label: "Cool-down",
          description:
            "500–800 m walking plus immediate fueling and hydration.",
        },
      ],
      intensityCues: [
        "Comfortable conversational pace (RPE 5–6/10) most of the time.",
        "Keep cadence steady; avoid big stride changes on hills.",
        "Add progressive segments only if you’re recovering well.",
      ],
      whenToUse: [
        "Weekly in specific phases for half and full marathons.",
        "Every other week during base for 10K plans.",
        "Mental rehearsal before goal races while testing nutrition and gear.",
      ],
      tips: [
        "Simulate race fueling/hydration during the long run.",
        "Break it mentally into blocks (e.g., three parts) to stay focused.",
        "Plan active recovery the next day (easy jog or walk).",
      ],
      watchouts: [
        "Increase mileage gradually (10% guideline).",
        "Leave at least 48 hours between long runs and hard sessions.",
      ],
    },
  },
  {
    id: "training-type-easy-run",
    label: "Easy runs",
    props: {
      title: "Easy / recovery run",
      description:
        "Short, easy outings aimed at active recovery, reducing stiffness without adding meaningful fatigue.",
      goal:
        "Promote blood flow, accelerate clearance of metabolic waste and maintain volume without stressing the body.",
      rationale:
        "Low intensity keeps aerobic fibers active and adds weekly mileage with minimal hormonal impact, supporting supercompensation.",
      aliases: ["recovery run", "easy run", "shakeout"],
      structure: [
        {
          label: "Controlled start",
          description:
            "5 minutes extremely easy, almost power walking, to wake the muscles.",
        },
        {
          label: "Middle block",
          description:
            "20–40 minutes at a comfortable pace with relaxed posture and arms.",
        },
        {
          label: "Cool-down",
          description:
            "5 minutes even easier jog plus light dynamic stretches.",
        },
      ],
      intensityCues: [
        "Full conversation without breathlessness (RPE 3–4/10).",
        "Soft cadence—aim for quiet steps and short ground contact.",
        "Keep HR in Z1–Z2, far from spikes.",
      ],
      whenToUse: [
        "Day after hard workouts, long runs or races.",
        "Between intensity sessions in the same week as a lactate flush.",
        "As an active warm-up (shakeout) before short races.",
      ],
      tips: [
        "Resist the urge to speed up—the benefit lies in keeping it easy.",
        "Use soft terrain (grass, dirt) to spare joints.",
        "Focus on relaxed form and posture.",
      ],
      watchouts: [
        "If HR creeps up, walk 1–2 minutes and restart slowly.",
        "Don’t let ego turn an easy day into moderate—it steals energy from key sessions.",
      ],
    },
  },
  {
    id: "training-type-interval",
    label: "Structured intervals",
    props: {
      title: "Structured interval workout",
      description:
        "Repeated blocks toggling between threshold/VO2 efforts and planned recoveries with an eye on weekly load and precise metrics.",
      goal:
        "Increase sustainable speed and raise tolerance to lactate build-up during controlled efforts.",
      rationale:
        "Reps keep quality time in key zones while partial recoveries let you add volume without losing technique.",
      aliases: ["interval", "running HIIT", "RI"],
      structure: [
        {
          label: "Warm-up",
          description:
            "15 minutes easy plus drills (high knees, skipping, cadence work).",
        },
        {
          label: "Main sets",
          description:
            "Example: 4 x 5 minutes at threshold with 2 minutes easy or 3 x 8 minutes at half-marathon pace with 90 seconds.",
        },
        {
          label: "Bonus rep (optional)",
          description:
            "Add one progressive rep if the body responds well.",
        },
        {
          label: "Cool-down",
          description:
            "10 minutes easy plus hip/ankle mobility.",
        },
      ],
      intensityCues: [
        "Paces between 10K effort and threshold (around RPE 7/10).",
        "Breathing strong but controlled; arms firm with relaxed hands.",
        "Active recovery around 60% of target race pace.",
      ],
      whenToUse: [
        "Specific phases for 10K, half and full marathon cycles.",
        "Weeks focusing on VO2 or lactate threshold.",
        "Athletes who benefit from predictable structure to track progress.",
      ],
      tips: [
        "Plan target pace beforehand and review each split for adjustments.",
        "Use track, treadmill or flat routes to minimize pace swings.",
        "Hold strong posture during recoveries—they’re part of the workout.",
      ],
      watchouts: [
        "High interval volume can clash with tempo or long runs—balance total load.",
        "Signs of central fatigue (insomnia, irritability) call for an immediate intensity drop.",
      ],
    },
  },
  {
    id: "training-type-rodagem",
    label: "Steady run",
    props: {
      title: "Controlled steady run",
      description:
        "Continuous run at a comfortable yet stable pace—faster than recovery but below race effort.",
      goal:
        "Build a solid aerobic base, reinforce running economy and accumulate weekly mileage.",
      rationale:
        "Holding a steady pace in moderate zones strengthens slow-twitch fibers, improves stride efficiency and boosts mitochondrial density.",
      aliases: ["steady run", "moderate easy run", "R2"],
      structure: [
        {
          label: "Start",
          description:
            "10 minutes easing into pace until breathing and cadence settle.",
        },
        {
          label: "Middle",
          description:
            "30–60 minutes at a steady pace (upper Z2 / lower Z3) without major swings.",
        },
        {
          label: "Finish",
          description:
            "5 minutes progressive plus 5 minutes easy cool-down.",
        },
      ],
      intensityCues: [
        "RPE 5–6/10: short phrases possible, not full conversations.",
        "Heart rate around 75–85% of max.",
        "Fluid cadence; keep torso tall and arms at ~90 degrees.",
      ],
      whenToUse: [
        "2–3 times per week in most cycles.",
        "Days without speed work to keep volume consistent.",
        "Transition between base and specific phases.",
      ],
      tips: [
        "Choose routes that allow steady pace to track progress.",
        "On climbs, reduce speed but maintain relative effort.",
        "Add 4–6 x 20-second strides after the run for coordination.",
      ],
      watchouts: [
        "If it feels too easy, nudge pace up; if it gets hard, drop back to recovery pace.",
        "Keep steady runs at 50–70% of the weekly long-run volume.",
      ],
    },
  },
];

const trainingTypeSubsections: SubsectionContent[] = trainingTypes.map(
  ({ id, label, props }) => ({
    id,
    label,
    component: TrainingTypeGuide,
    props,
    panel: trainingTypePanel(props),
  })
);

export default trainingTypeSubsections;
