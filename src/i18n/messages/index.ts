import type { Locale } from "../config";
import enUS from "./en/en-US";
import ptBR from "./pt/pt-BR";

type DeepWiden<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : T extends Array<infer U>
  ? Array<DeepWiden<U>>
  : { [K in keyof T]: DeepWiden<T[K]> };

export type MessageTree = DeepWiden<typeof ptBR>;

export const messagesByLocale = {
  "pt-BR": ptBR,
  "en-US": enUS,
} satisfies Record<Locale, MessageTree>;
