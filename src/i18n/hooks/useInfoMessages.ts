import infoPage from "@/i18n/messages/pt/pages/info";
import { useI18n } from "../useI18n";

export type InfoPageMessages = typeof infoPage;

export function useInfoMessages(): InfoPageMessages {
  const { messages } = useI18n();
  const infoMessages =
    (messages.pages?.info as InfoPageMessages | undefined) ||
    (messages.info as InfoPageMessages | undefined);

  if (!infoMessages) {
    throw new Error("Info page messages are not available for this locale.");
  }

  return infoMessages;
}
