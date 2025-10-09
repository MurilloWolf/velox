import { HelloWorldSection } from "../../../../components/Subsections";
import type { SubsectionContent } from "../../../types";
import { helloWorldPanel } from "../panels";

const helloWorldProps = {
  title: "Hello Section",
  description:
    "Hello World! Este é um exemplo simples de conteúdo exibido ao selecionar uma subseção personalizada.",
};

const HelloWordSubsection: SubsectionContent = {
  id: "prompts-hello",
  label: "Hello World",
  component: HelloWorldSection,
  props: helloWorldProps,
  panel: helloWorldPanel,
};
export default HelloWordSubsection;
