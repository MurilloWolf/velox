import type { Locale } from "@/i18n/config";
import { defaultLocale } from "@/i18n/config";

type SponsorsMetadataContent = {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  image: string;
};

const sponsorsMetadataByLocale: Record<Locale, SponsorsMetadataContent> = {
  "pt-BR": {
    title: "Patrocínio VELOX - Conecte sua marca a corredores",
    description:
      "Descubra como cocriar experiências, promover eventos esportivos e engajar corredores com o ecossistema VELOX.",
    keywords: [
      "patrocínio corrida",
      "parcerias velox",
      "corridas rua patrocínio",
      "media kit velox",
      "marketing esportivo brasil",
    ],
    path: "/sponsors",
    image: "/velox_x.png",
  },
  "en-US": {
    title: "VELOX Sponsorship - Connect your brand with runners",
    description:
      "Learn how to co-create experiences, promote sports events and engage runners through the VELOX ecosystem.",
    keywords: [
      "running sponsorship",
      "velox partnerships",
      "brazil running media kit",
      "sports marketing brazil",
      "velox media kit",
    ],
    path: "/sponsors",
    image: "/velox_x.png",
  },
};

export const getSponsorsMetadataContent = (
  locale: Locale = defaultLocale
): SponsorsMetadataContent =>
  sponsorsMetadataByLocale[locale] ?? sponsorsMetadataByLocale[defaultLocale];
