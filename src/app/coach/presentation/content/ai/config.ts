import { Sparkles } from "lucide-react";
import prompts from "./prompts";
import subsections from "./subsections";
import { PromptSection } from "../../../components/Sections";
import type { PromptSectionProps } from "../../../components/Sections";
import type { SectionContent } from "../../types";
import { aiSectionPanel } from "./panels";

const header: PromptSectionProps["header"] = {
  title: "Prompts de IA",
  description:
    "Prompts prontos para usar com ChatGPT, Claude ou outras IAs para otimizar seus treinos",
};

const props: PromptSectionProps = {
  header,
  prompts,
};

export const AISectionContent: SectionContent = {
  id: "prompts",
  label: "Prompts de IA",
  icon: Sparkles,
  component: PromptSection,
  props,
  panel: aiSectionPanel,
  subsections,
};
