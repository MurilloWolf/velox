import { Dumbbell } from "lucide-react";
import {
  TrainingSection,
  TrainingSectionProps,
} from "@/app/coach/components/Sections";
import type { SectionContent } from "../../types";
import plans from "./plans";
import subsections from "./subsections";
import { trainingPanel } from "./panels";

const header: TrainingSectionProps["header"] = {
  title: "Planilhas de Treino",
  description:
    "Escolha a planilha ideal para sua meta, nível e disponibilidade de treinos.",
};

const props: TrainingSectionProps = {
  header,
  plans,
};

export const trainingSectionContent: SectionContent = {
  id: "training",
  label: "Treinos",
  icon: Dumbbell,
  component: TrainingSection,
  props,
  panel: trainingPanel,
  subsections,
};
