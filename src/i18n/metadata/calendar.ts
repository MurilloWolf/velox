import type { Locale } from "@/i18n/config";
import { defaultLocale } from "@/i18n/config";

type CalendarMetadataContent = {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  image: string;
};

const calendarMetadataByLocale: Record<Locale, CalendarMetadataContent> = {
  "pt-BR": {
    title: "Calendário de corridas - VELOX Corridas",
    description:
      "Consulte o calendário atualizado de corridas de rua, meias maratonas e provas em todo o Brasil.",
    keywords: [
      "calendário de corridas",
      "corridas Brasil",
      "provas de rua",
      "corrida 2025",
      "agenda de maratonas",
    ],
    path: "/calendar",
    image: "/velox_x.png",
  },
  "en-US": {
    title: "Race calendar - VELOX Races",
    description:
      "Browse the latest road races, half marathons and marathon events across Brazil.",
    keywords: [
      "race calendar",
      "brazil races",
      "road races",
      "2025 races",
      "marathon schedule",
    ],
    path: "/calendar",
    image: "/velox_x.png",
  },
};

export const getCalendarMetadataContent = (
  locale: Locale = defaultLocale
): CalendarMetadataContent =>
  calendarMetadataByLocale[locale] ?? calendarMetadataByLocale[defaultLocale];
