import type { Locale } from "@/i18n/config";
import { defaultLocale } from "@/i18n/config";

type CoachMetadataContent = {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  image: string;
};

const coachMetadataByLocale: Record<Locale, CoachMetadataContent> = {
  "pt-BR": {
    title: "Coach VELOX - Nutrição e treino",
    description:
      "Protocolos de nutrição, planejamento de treinos e guias por distância para evoluir dos 5km à ultramaratona.",
    keywords: [
      "coach velox",
      "nutrição corrida",
      "protocolos de prova",
      "treino de corrida",
      "dicas para corredores",
    ],
    path: "/coach",
    image: "/velox_x.png",
  },
  "en-US": {
    title: "VELOX Coach - Nutrition and training hub",
    description:
      "Fueling playbooks, race-day protocols and training guidance to level up from 5K to ultramarathon.",
    keywords: [
      "velox coach",
      "running nutrition guide",
      "race fueling",
      "running training tips",
      "distance running coach",
    ],
    path: "/coach",
    image: "/velox_x.png",
  },
};

export const getCoachMetadataContent = (
  locale: Locale = defaultLocale
): CoachMetadataContent =>
  coachMetadataByLocale[locale] ?? coachMetadataByLocale[defaultLocale];
