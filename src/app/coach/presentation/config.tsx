import type { CoachRootSection } from "./themes";
import { coachContent } from "./content";
import { makeRenderer } from "./factories";
import type {
  CoachNavigationSection,
  CoachSectionConfig,
  PanelEntry,
} from "./types";

export const coachSections: CoachSectionConfig[] = coachContent.map(
  ({ id, label, icon, component, props, panel, subsections }) => ({
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
  })
);

export const navigationSections: CoachNavigationSection[] = coachSections.map(
  ({ id, label, icon, subsections }) => ({
    id,
    label,
    icon,
    subsections:
      subsections?.map(({ id, label }) => ({
        id,
        label,
      })) ?? undefined,
  })
);

export const sectionRenderers = Object.fromEntries(
  coachSections.map(({ id, render }) => [id, render])
);

export const subsectionRenderers = Object.fromEntries(
  coachSections.flatMap(({ subsections }) =>
    subsections?.map(({ id, render }) => [id, render]) ?? []
  )
);

export const getPanelContent = (
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
