import { Apple } from "lucide-react";

import { NutritionSection } from "../../../components/Sections";
import type {
  NutritionSectionProps,
  NutritionLevel,
  NutritionRaceGuide,
} from "../../../components/Sections";
import type { SectionContent } from "../../types";
import { nutritionPanel } from "./panels";
import subsections from "./subsections";

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
    title: "Alimentação e Hidratação para Provas de 5km",
    tips: [
      "24 horas antes: priorize carboidratos de fácil digestão (arroz, batata, macarrão, frutas, aveia, pães leves) e reduza excesso de gorduras e fibras para evitar desconforto gastrointestinal.",
      "Inclua proteínas magras em porções moderadas (frango, peixe, ovos ou tofu) para apoiar a recuperação sem pesar no estômago.",
      "Hidrate-se continuamente com 35-45 ml de líquidos por quilo ao longo do dia; para um corredor de 70 kg isso representa cerca de 2,5 a 3 litros entre água, isotônicos e água de coco.",
      "De 2 a 3 horas antes da largada faça uma refeição leve rica em carboidratos de rápida e média absorção, moderada em proteína e pobre em gordura/fibras, como pão com mel, banana com aveia, tapioca com geleia ou batata-doce com ovo cozido.",
      "Evite alimentos novos, leite, frituras e condimentos fortes na preparação imediata para reduzir riscos de desconforto.",
      "Entre 30 e 60 minutos antes, se houver intervalo, utilize um snack de rápida absorção (banana ou gel com 20-30 g de carboidratos) acompanhado de pequenos goles de água ou isotônico (100-200 ml).",
      "Durante a prova, foque em conforto: pequenos goles de água nos postos são suficientes; em dias muito quentes considere cerca de 100 ml de isotônico para repor sódio e potássio.",
      "Nos primeiros 30 minutos pós-prova combine carboidratos e proteína na proporção 3:1 ou 4:1 (vitamina de banana com whey, iogurte com frutas e aveia, sanduíche de frango) e ingira 500-700 ml de líquidos, privilegiando isotônicos se houve muito suor.",
      "Entre 1 e 3 horas após a corrida faça refeição completa com carboidratos complexos (arroz, batata, quinoa), proteínas magras e vegetais para acelerar reposição de glicogênio e micronutrientes.",
      "Suplementos úteis incluem whey protein no pós-prova, gel ou bebida esportiva antes/depois de esforços intensos >25 minutos, cafeína (3-6 mg/kg) 30-45 minutos antes, beta-alanina e creatina em uso contínuo — sempre com acompanhamento profissional.",
      "Adapte a estratégia ao nível: iniciantes priorizam leveza e hidratação consistente; atletas avançados testam timing de cafeína, snacks e recuperação ativa durante os treinos preparatórios.",
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
  subsections: subsections,
};
