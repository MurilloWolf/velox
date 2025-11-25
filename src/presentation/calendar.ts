import { defaultLocale, type Locale } from "@/i18n/config";
import { messagesByLocale } from "@/i18n/messages";
import calendarPage from "@/i18n/messages/pt/pages/calendar";

type CalendarMessages = typeof calendarPage;

export const getCalendarPageContent = (locale: Locale = defaultLocale) => {
  const dictionary =
    (messagesByLocale[locale]?.pages?.calendar as CalendarMessages | undefined) ||
    (messagesByLocale[defaultLocale]?.pages?.calendar as
      | CalendarMessages
      | undefined);

  const hero = dictionary?.hero;

  return {
    title: hero?.title ?? "Calendário de Eventos",
    subtitle: hero?.subtitle ?? "Fique de olho nas próximas corridas",
  } as const;
};
