import { Apple, Dumbbell, Sparkles } from "lucide-react";

import type { LucideIcon } from "lucide-react";

export type ResourceSection = {
  id: string;
  label: string;
  icon: LucideIcon;
  subsections?: Array<{ id: string; label: string }>;
};

export const sections: ResourceSection[] = [
  {
    id: "nutrition",
    label: "Dicas de Nutrição",
    icon: Apple,
    subsections: [
      { id: "nutrition-beginner", label: "Iniciante" },
      { id: "nutrition-intermediate", label: "Intermediário" },
      { id: "nutrition-advanced", label: "Avançado" },
      { id: "nutrition-5k", label: "5K" },
      { id: "nutrition-10k", label: "10K" },
      { id: "nutrition-half", label: "Meia Maratona" },
      { id: "nutrition-marathon", label: "Maratona" },
    ],
  },
  {
    id: "training",
    label: "Planilhas de Treino",
    icon: Dumbbell,
    subsections: [
      { id: "training-beginner", label: "Iniciante" },
      { id: "training-intermediate", label: "Intermediário" },
      { id: "training-advanced", label: "Avançado" },
    ],
  },
  {
    id: "prompts",
    label: "Prompts de IA",
    icon: Sparkles,
    subsections: [
      { id: "prompts-training", label: "Treinos" },
      { id: "prompts-nutrition", label: "Nutrição" },
      { id: "prompts-motivation", label: "Motivação" },
      { id: "prompts-recovery", label: "Recuperação" },
    ],
  },
];
