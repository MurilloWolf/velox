import { nutritionSectionContent } from "./nutrition/config";
import { trainingSectionContent } from "./training/config";
import { AISectionContent } from "./ai/config";
import type { SectionContent } from "../types";

export const coachContent: SectionContent[] = [
  nutritionSectionContent,
  trainingSectionContent,
  AISectionContent,
];
