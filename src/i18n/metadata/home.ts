import type { Locale } from "@/i18n/config";
import { defaultLocale } from "@/i18n/config";

type HomeMetadataContent = {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  image: string;
};

const homeMetadataByLocale: Record<Locale, HomeMetadataContent> = {
  "pt-BR": {
    title: "VELOX Corridas - Calendário, dicas e bot no Telegram",
    description:
      "Encontre corridas em todo o Brasil, receba alertas no Telegram e organize seus treinos com o VELOX Corridas.",
    keywords: [
      "velox corridas",
      "bot de corrida",
      "corridas no telegram",
      "agenda de corridas",
      "eventos de corrida Brasil",
    ],
    path: "/",
    image: "/velox_x.png",
  },
  "en-US": {
    title: "VELOX Races - Calendar, tips and Telegram bot",
    description:
      "Discover road races across Brazil, get Telegram alerts and organize your training with VELOX Races.",
    keywords: [
      "velox races",
      "running bot",
      "telegram running bot",
      "race calendar brazil",
      "road races brazil",
    ],
    path: "/",
    image: "/velox_x.png",
  },
};

export const getHomeMetadataContent = (
  locale: Locale = defaultLocale
): HomeMetadataContent =>
  homeMetadataByLocale[locale] ?? homeMetadataByLocale[defaultLocale];
