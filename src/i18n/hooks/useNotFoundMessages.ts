import notFoundPage from "@/i18n/messages/pt/pages/not-found";
import { useI18n } from "../useI18n";

export type NotFoundPageMessages = typeof notFoundPage;

export function useNotFoundMessages(): NotFoundPageMessages {
  const { messages } = useI18n();
  const notFoundMessages =
    (messages.pages?.notFound as NotFoundPageMessages | undefined) ||
    (messages.notFound as NotFoundPageMessages | undefined);

  if (!notFoundMessages) {
    throw new Error(
      "Not found page messages are not available for this locale."
    );
  }

  return notFoundMessages;
}
