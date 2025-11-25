import type { SubsectionExplanationProps } from "@/app/coach/components/Subsections/SubExplanations";
import type { TrainingTypeGuideProps } from "@/app/coach/components/Subsections/TrainingTypeGuide";
import type { PanelEntry } from "../../../types";

export const trainingPanel: PanelEntry = {
  label: "Painel Treinos",
  title: "Transforme metas em sessões práticas",
  description:
    "Planilhas progressivas, ritmos-alvo por distância e ajustes rápidos para conciliar agenda e performance.",
  highlights: {
    title: "Em destaque",
    items: [
      "Defina o treino-chave da semana",
      "Ajuste o longão de acordo com sua meta atual",
      "Inclua exercícios de força complementar",
    ],
  },
};

export const explanationPanel = (
  props: SubsectionExplanationProps
): PanelEntry => ({
  label: "Explicações",
  title: "Entendendo cada treino",
  description: props.description,
  highlights: props.bullets?.length
    ? {
        title: "Leia com atenção",
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
          title: "Leve para o treino",
          items: highlightItems,
        }
      : undefined,
  };
};
