import homePage from "@/i18n/messages/pt/pages/home";
import { useI18n } from "../useI18n";

export type HomePageMessages = typeof homePage;

export function useHomeMessages(): HomePageMessages {
  const { messages } = useI18n();
  const homeMessages =
    (messages.pages?.home as HomePageMessages | undefined) ||
    (messages.home as HomePageMessages | undefined);

  if (!homeMessages) {
    throw new Error("Home messages are not available in the current locale.");
  }

  return homeMessages;
}
