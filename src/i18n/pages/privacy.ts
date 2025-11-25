import type { Locale } from "@/i18n/config";
import { defaultLocale } from "@/i18n/config";
import privacyPage from "@/i18n/messages/pt/pages/privacy";
import { messagesByLocale } from "@/i18n/messages";

export type PrivacyPageMessages = typeof privacyPage;

export const getPrivacyPageContent = (
  locale: Locale = defaultLocale
): PrivacyPageMessages => {
  const messages =
    (messagesByLocale[locale]?.pages?.privacy as PrivacyPageMessages) ||
    (messagesByLocale[defaultLocale]?.pages?.privacy as PrivacyPageMessages);

  if (!messages) {
    throw new Error("Privacy page messages not found for the selected locale.");
  }

  return messages;
};
