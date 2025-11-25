import { makeRenderer } from "./factories";
import type { CoachRootSection } from "./themes";
import type {
  CoachNavigationSection,
  CoachSectionConfig,
  PanelEntry,
  SectionContent,
} from "./types";

const buildSections = (content: SectionContent[]): CoachSectionConfig[] =>
  content.map(({ id, label, icon, component, props, panel, subsections }) => ({
    id,
    label,
    icon,
    panel,
    render: makeRenderer(component, props),
    subsections: subsections?.map((subsection) => ({
      id: subsection.id,
      label: subsection.label,
      panel: subsection.panel,
      render: makeRenderer(subsection.component, subsection.props),
    })),
  }));

const buildNavigation = (
  sections: CoachSectionConfig[]
): CoachNavigationSection[] =>
  sections.map(({ id, label, icon, subsections }) => ({
    id,
    label,
    icon,
    subsections:
      subsections?.map(({ id, label }) => ({
        id,
        label,
      })) ?? undefined,
  }));

export const buildCoachPresentation = (content: SectionContent[]) => {
  const coachSections = buildSections(content);
  const navigationSections = buildNavigation(coachSections);
  const sectionRenderers = Object.fromEntries(
    coachSections.map(({ id, render }) => [id, render])
  );

  const subsectionRenderers = Object.fromEntries(
    coachSections.flatMap(({ subsections }) =>
      subsections?.map(({ id, render }) => [id, render]) ?? []
    )
  );

  const getPanelContent = (
    root: CoachRootSection,
    subsectionId: string
  ): PanelEntry => {
    const subsectionEntry = coachSections
      .flatMap((section) => section.subsections ?? [])
      .find((subsection) => subsection.id === subsectionId);

    if (subsectionEntry) {
      return subsectionEntry.panel ?? null;
    }

    const sectionEntry = coachSections.find((section) => section.id === root);
    return sectionEntry?.panel ?? null;
  };

  return {
    navigationSections,
    sectionRenderers,
    subsectionRenderers,
    getPanelContent,
  };
};
