export const locales = ["pt-BR", "en-US"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-BR";

export const isLocale = (value: string | null | undefined): value is Locale =>
  Boolean(value && locales.includes(value as Locale));
