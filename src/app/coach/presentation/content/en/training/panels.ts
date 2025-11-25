import type { SubsectionExplanationProps } from "@/app/coach/components/Subsections/SubExplanations";
import type { TrainingTypeGuideProps } from "@/app/coach/components/Subsections/TrainingTypeGuide";
import type { PanelEntry } from "../../../types";

export const trainingPanel: PanelEntry = {
  label: "Training Panel",
  title: "Turn race goals into actionable sessions",
  description:
    "Progressive plans, target paces by distance and quick tweaks to balance schedule and performance.",
  highlights: {
    title: "This week's focus",
    items: [
      "Define the key session of the week",
      "Adjust the long run to your current target",
      "Add a short strength routine for balance",
    ],
  },
};

export const explanationPanel = (
  props: SubsectionExplanationProps
): PanelEntry => ({
  label: "Explanations",
  title: "Understanding each workout",
  description: props.description,
  highlights: props.bullets?.length
    ? {
        title: "Read carefully",
        items: props.bullets,
      }
    : undefined,
});

export const trainingTypePanel = (
  props: TrainingTypeGuideProps
): PanelEntry => {
  const highlightItems = [
    ...props.whenToUse.slice(0, 2),
    props.tips[0],
  ].filter(Boolean);

  return {
    label: props.title,
    title: props.title,
    description: props.goal,
    highlights: highlightItems.length
      ? {
          title: "Take to the workout",
          items: highlightItems,
        }
      : undefined,
  };
};
