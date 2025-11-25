import sponsorsPage from "@/i18n/messages/pt/pages/sponsors";
import { useI18n } from "../useI18n";

export type SponsorsPageMessages = typeof sponsorsPage;

export function useSponsorsMessages(): SponsorsPageMessages {
  const { messages } = useI18n();
  const sponsorsMessages =
    (messages.pages?.sponsors as SponsorsPageMessages | undefined) ||
    (messages.sponsors as SponsorsPageMessages | undefined);

  if (!sponsorsMessages) {
    throw new Error(
      "Sponsors messages are not available for the current locale."
    );
  }

  return sponsorsMessages;
}
