import type { Locale } from "@/i18n/config";
import { defaultLocale } from "@/i18n/config";

type InfoMetadataContent = {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  image: string;
};

const infoMetadataByLocale: Record<Locale, InfoMetadataContent> = {
  "pt-BR": {
    title: "Bot VELOX - Comandos e central do corredor",
    description:
      "Conheça os principais comandos, descubra como funciona o bot e personalize alertas para as suas corridas favoritas no Telegram.",
    keywords: [
      "velox bot",
      "comandos velox",
      "telegram corridas",
      "bot de corrida",
    ],
    path: "/info",
    image: "/velox_x.png",
  },
  "en-US": {
    title: "VELOX Bot - Commands and runner hub",
    description:
      "Explore core commands, learn how the bot works and tailor alerts for your favorite races directly inside Telegram.",
    keywords: [
      "velox bot",
      "running bot telegram",
      "race bot commands",
      "velox commands",
    ],
    path: "/info",
    image: "/velox_x.png",
  },
};

export const getInfoMetadataContent = (
  locale: Locale = defaultLocale
): InfoMetadataContent =>
  infoMetadataByLocale[locale] ?? infoMetadataByLocale[defaultLocale];
