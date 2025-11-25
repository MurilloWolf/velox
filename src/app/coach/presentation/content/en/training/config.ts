import { Dumbbell } from "lucide-react";
import {
  TrainingSection,
  TrainingSectionProps,
} from "@/app/coach/components/Sections";
import type { SectionContent } from "../../../types";
import subsections from "./subsections";
import { trainingPanel } from "./panels";

const header: TrainingSectionProps["header"] = {
  title: "Training Plans",
  description:
    "Pick the right template for your goal, current level and weekly availability.",
};

const props: TrainingSectionProps = {
  header,
};

export const trainingSectionContent: SectionContent = {
  id: "training",
  label: "Training",
  icon: Dumbbell,
  component: TrainingSection,
  props,
  panel: trainingPanel,
  subsections,
};
