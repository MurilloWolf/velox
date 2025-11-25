import calendarPage from "@/i18n/messages/pt/pages/calendar";
import { useI18n } from "../useI18n";

export type CalendarPageMessages = typeof calendarPage;

export function useCalendarMessages(): CalendarPageMessages {
  const { messages } = useI18n();
  const calendarMessages =
    (messages.pages?.calendar as CalendarPageMessages | undefined) ||
    (messages.calendar as CalendarPageMessages | undefined);

  if (!calendarMessages) {
    throw new Error(
      "Calendar messages are not available for the current locale."
    );
  }

  return calendarMessages;
}
