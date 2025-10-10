/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import type { ComponentType } from "react";
import type { LucideIcon } from "lucide-react";

import type { CoachRootSection } from "./themes";

export type PanelHighlights = {
  title?: string;
  items: string[];
};

export type PanelContent = {
  label?: string;
  title: string;
  description?: string;
  highlights?: PanelHighlights;
};

export type PanelEntry = PanelContent | null;

export type RendererFactory = () => React.JSX.Element;

export type SubsectionContent = {
  id: string;
  label: string;
  component: ComponentType<any>;
  props?: object;
  panel?: PanelEntry;
};

export type SectionContent = {
  id: CoachRootSection;
  label: string;
  icon: LucideIcon;
  component: ComponentType<any>;
  props?: object;
  panel?: PanelEntry;
  subsections?: SubsectionContent[];
};

export type CoachSubsectionConfig = {
  id: string;
  label: string;
  panel?: PanelEntry;
  render: RendererFactory;
};

export type CoachSectionConfig = {
  id: CoachRootSection;
  label: string;
  icon: LucideIcon;
  panel?: PanelEntry;
  render: RendererFactory;
  subsections?: CoachSubsectionConfig[];
};

export type CoachNavigationSection = {
  id: CoachRootSection;
  label: string;
  icon: LucideIcon;
  subsections?: Array<{ id: string; label: string }>;
};
