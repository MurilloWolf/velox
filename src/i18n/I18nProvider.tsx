"use client";

import {
  createContext,
  useContext,
  useMemo,
  type PropsWithChildren,
} from "react";

import type { Locale } from "./config";
import type { MessageTree } from "./messages";

type ContentRegion = "BR" | "US";

type I18nContextValue = {
  locale: Locale;
  messages: MessageTree;
  t: (path: string) => string;
  contentRegion: ContentRegion;
  isBrazilExperience: boolean;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const getMessageFromPath = (
  messages: MessageTree,
  path: string
): string | null => {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (!acc || typeof acc !== "object") {
      return null;
    }
    return (acc as Record<string, unknown>)[key] ?? null;
  }, messages) as string | null;
};

type I18nProviderProps = PropsWithChildren<{
  locale: Locale;
  messages: MessageTree;
}>;

export function I18nProvider({
  children,
  locale,
  messages,
}: I18nProviderProps) {
  const value = useMemo<I18nContextValue>(() => {
    const translate = (path: string) =>
      getMessageFromPath(messages, path) ?? path;
    const isBrazilExperience = locale === "pt-BR";
    const contentRegion: ContentRegion = isBrazilExperience ? "BR" : "US";

    return {
      locale,
      messages,
      t: translate,
      contentRegion,
      isBrazilExperience,
    };
  }, [locale, messages]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18nContext = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
};
