import type { Locale } from "@/i18n/config";
import { defaultLocale } from "@/i18n/config";

type PrivacyMetadataContent = {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  image: string;
};

const privacyMetadataByLocale: Record<Locale, PrivacyMetadataContent> = {
  "pt-BR": {
    title: "Política de Privacidade - VELOX Corridas",
    description:
      "Saiba como o VELOX trata dados pessoais, solicita consentimento e protege a privacidade da comunidade de corredores.",
    keywords: ["privacidade velox", "lgpd corridas", "dados pessoais bot"],
    path: "/privacy",
    image: "/velox_x.png",
  },
  "en-US": {
    title: "Privacy Policy - VELOX Races",
    description:
      "Learn how VELOX collects and protects personal data, requests consent and keeps the running community safe.",
    keywords: ["velox privacy", "running bot privacy", "data protection"],
    path: "/privacy",
    image: "/velox_x.png",
  },
};

export const getPrivacyMetadataContent = (
  locale: Locale = defaultLocale
): PrivacyMetadataContent =>
  privacyMetadataByLocale[locale] ?? privacyMetadataByLocale[defaultLocale];
