import { Apple } from "lucide-react";

import { NutritionSection } from "../../../components/Sections";
import type {
  NutritionSectionProps,
  NutritionLevel,
  NutritionRaceGuide,
} from "../../../components/Sections";
import type { SectionContent } from "../../types";
import { nutritionPanel } from "./panels";

const intro: NutritionSectionProps["intro"] = {
  title: "Dicas de Nutrição",
  description:
    "Guias completos de nutrição para corredores de todos os níveis e distâncias",
};

const levels: Record<string, NutritionLevel> = {
  beginner: {
    title: "Nutrição para Iniciantes",
    tips: [
      {
        title: "Hidratação é Fundamental",
        description:
          "Beba pelo menos 2 litros de água por dia. Aumente para 3-4 litros em dias de treino.",
        category: "Hidratação",
      },
      {
        title: "Carboidratos são Energia",
        description:
          "Consuma carboidratos complexos como arroz integral, batata doce e aveia 2-3 horas antes do treino.",
        category: "Pré-treino",
      },
      {
        title: "Proteína para Recuperação",
        description:
          "Inclua proteínas magras (frango, peixe, ovos) em todas as refeições para auxiliar na recuperação muscular.",
        category: "Recuperação",
      },
      {
        title: "Evite Alimentos Pesados",
        description:
          "Não corra com o estômago cheio. Espere pelo menos 2 horas após refeições grandes.",
        category: "Dica Geral",
      },
    ],
  },
  intermediate: {
    title: "Nutrição para Intermediários",
    tips: [
      {
        title: "Timing de Nutrientes",
        description:
          "Consuma carboidratos + proteína na janela de 30-60 minutos pós-treino para otimizar recuperação.",
        category: "Pós-treino",
      },
      {
        title: "Suplementação Estratégica",
        description:
          "Considere BCAA, whey protein e maltodextrina para treinos mais intensos e longos.",
        category: "Suplementos",
      },
      {
        title: "Periodização Nutricional",
        description:
          "Ajuste a ingestão de carboidratos conforme o volume de treino: mais carbs em dias pesados.",
        category: "Estratégia",
      },
      {
        title: "Gorduras Saudáveis",
        description:
          "Inclua abacate, castanhas e azeite para saúde hormonal e energia de longa duração.",
        category: "Macronutrientes",
      },
    ],
  },
  advanced: {
    title: "Nutrição para Avançados",
    tips: [
      {
        title: "Carb Loading Estratégico",
        description:
          "Aumente carboidratos para 8-10g/kg nos 2-3 dias antes de provas longas para maximizar glicogênio.",
        category: "Competição",
      },
      {
        title: "Nutrição Durante Corrida",
        description:
          "Para corridas >90min: 30-60g de carboidratos por hora via géis, isotônicos ou alimentos.",
        category: "Durante Prova",
      },
      {
        title: "Teste Tudo no Treino",
        description:
          "Nunca experimente novos alimentos ou suplementos no dia da prova. Teste tudo nos treinos.",
        category: "Estratégia",
      },
      {
        title: "Recuperação Avançada",
        description:
          "Proporção 3:1 ou 4:1 de carboidratos para proteína pós-treino intenso. Considere creatina.",
        category: "Recuperação",
      },
    ],
  },
};

const races: Record<string, NutritionRaceGuide> = {
  "5k": {
    title: "Nutrição para 5K",
    tips: [
      "Refeição leve 2-3 horas antes: banana com pasta de amendoim",
      "Não precisa de nutrição durante a prova",
      "Hidrate-se bem no dia anterior",
      "Evite alimentos novos no dia da prova",
    ],
  },
  "10k": {
    title: "Nutrição para 10K",
    tips: [
      "Café da manhã com carboidratos 3 horas antes",
      "Considere um gel 15min antes se for correr rápido",
      "Hidratação a cada posto se disponível",
      "Recuperação com shake de proteína + banana",
    ],
  },
  half: {
    title: "Nutrição para Meia Maratona",
    tips: [
      "Carb loading leve nos 2 dias anteriores",
      "Gel ou isotônico a cada 40-45 minutos",
      "Hidrate a cada 3-5km",
      "Refeição de recuperação em até 2 horas pós-prova",
    ],
  },
  marathon: {
    title: "Nutrição para Maratona",
    tips: [
      "Carb loading sério: 3 dias antes aumentar carboidratos",
      "Gel a cada 30-40 minutos durante a prova",
      "Isotônico + água alternados a cada posto",
      "Considere cafeína no km 30 para boost final",
      "Sal/eletrólitos são essenciais em provas longas",
    ],
  },
};

const subsections = [
  { id: "nutrition-beginner", label: "Iniciante" },
  { id: "nutrition-intermediate", label: "Intermediário" },
  { id: "nutrition-advanced", label: "Avançado" },
  { id: "nutrition-5k", label: "5K" },
  { id: "nutrition-10k", label: "10K" },
  { id: "nutrition-half", label: "Meia Maratona" },
  { id: "nutrition-marathon", label: "Maratona" },
];

const props: NutritionSectionProps = {
  intro,
  levels,
  races,
};

export const nutritionSectionContent: SectionContent = {
  id: "nutrition",
  label: "Dicas de Nutrição",
  icon: Apple,
  component: NutritionSection,
  props,
  panel: nutritionPanel,
  subsections: subsections.map((entry) => ({
    ...entry,
    component: NutritionSection,
    props,
  })),
};
