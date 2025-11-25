import footer from "@/i18n/messages/pt/layout/footer";
import { useI18n } from "../useI18n";

export type FooterMessages = typeof footer;

export function useFooterMessages(): FooterMessages {
  const { messages } = useI18n();
  const footerMessages = messages.layout?.footer as
    | FooterMessages
    | undefined;

  if (!footerMessages) {
    throw new Error("Footer messages are not available for the current locale.");
  }

  return footerMessages;
}
