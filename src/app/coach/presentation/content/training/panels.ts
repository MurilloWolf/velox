import type { PanelEntry } from "../../types";
import type { SubsectionExplanationProps } from "@/app/coach/components/Subsections/SubExplanations";

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
