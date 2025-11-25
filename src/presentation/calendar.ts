import { defaultLocale, type Locale } from "@/i18n/config";
import { messagesByLocale } from "@/i18n/messages";

export const getCalendarPageContent = (locale: Locale = defaultLocale) => {
  const dictionary = messagesByLocale[locale] ?? messagesByLocale[defaultLocale];

  return {
    title: dictionary.calendar.title,
    subtitle: dictionary.calendar.subtitle,
  } as const;
};
