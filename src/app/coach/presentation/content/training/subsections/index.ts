import { SubsectionContent } from "../../../types";
import explanationSubsection from "./explanations";
import trainingTypeSubsections from "./trainingTypes";

const subsections: SubsectionContent[] = [
  explanationSubsection,
  ...trainingTypeSubsections,
];

export default subsections;
