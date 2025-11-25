import header from "@/i18n/messages/pt/layout/header";
import { useI18n } from "../useI18n";

export type HeaderMessages = typeof header;

export function useHeaderMessages(): HeaderMessages {
  const { messages } = useI18n();
  const headerMessages = messages.layout?.header as
    | HeaderMessages
    | undefined;

  if (!headerMessages) {
    throw new Error("Header messages are not available for the current locale.");
  }

  return headerMessages;
}
