import { SubsectionExplanation } from "@/app/coach/components";
import { SubsectionExplanationProps } from "@/app/coach/components/Subsections/SubExplanations";
import type { SubsectionContent } from "../../../../types";
import { explanationPanel } from "../panels";

const explanationProps: SubsectionExplanationProps = {
  title: "Explicações dos treinos",
  description:
    "Entenda por que cada bloco de treino existe, qual estímulo ele gera e como adaptar quando necessário.",
  bullets: [
    "Sequência de intensidades e tempos de recuperação",
    "Critérios para trocar dias ou combinar sessões",
    "Sinais de fadiga para reduzir carga sem perder progresso",
  ],
};

const explanationSubsection: SubsectionContent = {
  id: "training-explanations-training",
  label: "Tipos de Treino",
  component: SubsectionExplanation,
  props: explanationProps,
  panel: explanationPanel(explanationProps),
};

export default explanationSubsection;
