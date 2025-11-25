import type { SectionContent } from "../types";
import { coachContent as coachContentPt } from "./pt";
import { coachContent as coachContentEn } from "./en";

export const COACH_CONTENT_BY_LOCALE: Record<string, SectionContent[]> = {
  "pt-BR": coachContentPt,
  "en-US": coachContentEn,
};

export const getCoachContentByLocale = (locale: string): SectionContent[] =>
  COACH_CONTENT_BY_LOCALE[locale] ?? coachContentPt;
