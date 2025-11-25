import { SubsectionExplanation } from "@/app/coach/components";
import { SubsectionExplanationProps } from "@/app/coach/components/Subsections/SubExplanations";
import type { SubsectionContent } from "../../../../types";
import { explanationPanel } from "../panels";

const explanationProps: SubsectionExplanationProps = {
  title: "Workout explanations",
  description:
    "Understand why each block exists, which stimulus it delivers and how to adjust when life happens.",
  bullets: [
    "How to sequence intensities and recovery windows",
    "Criteria to swap days or stack sessions",
    "Fatigue signals that tell you to dial the load back",
  ],
};

const explanationSubsection: SubsectionContent = {
  id: "training-explanations-training",
  label: "Workout types",
  component: SubsectionExplanation,
  props: explanationProps,
  panel: explanationPanel(explanationProps),
};

export default explanationSubsection;
