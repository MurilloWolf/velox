"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

import { ResourcesSidebar, CoachHeader, Panel } from "./components";
import { SECTION_THEMES, type CoachRootSection } from "./presentation/themes";
import {
  navigationSections,
  sectionRenderers,
  subsectionRenderers,
  getPanelContent,
} from "./presentation/config";

const DEFAULT_SECTION: CoachRootSection = "nutrition";
const KNOWN_SECTIONS = new Set(
  navigationSections.flatMap((section) => [
    section.id,
    ...(section.subsections?.map((subsection) => subsection.id) ?? []),
  ])
);

const isCoachRootSection = (value: string): value is CoachRootSection =>
  Object.hasOwn(sectionRenderers, value as CoachRootSection);

const normalizeSection = (candidate: string | null): string => {
  if (!candidate) {
    return DEFAULT_SECTION;
  }

  if (KNOWN_SECTIONS.has(candidate)) {
    return candidate;
  }

  const rootCandidate = candidate.split("-")[0];
  return KNOWN_SECTIONS.has(rootCandidate) ? rootCandidate : DEFAULT_SECTION;
};

export default function CoachPage() {
  return (
    <Suspense fallback={<CoachPageFallback />}>
      <CoachPageContent />
    </Suspense>
  );
}

function CoachPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sectionParam = searchParams.get("section");

  const [activeSection, setActiveSection] = useState(() =>
    normalizeSection(sectionParam)
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const nextSection = normalizeSection(sectionParam);
    if (nextSection !== activeSection) {
      setActiveSection(nextSection);
    }
  }, [sectionParam, activeSection]);

  const handleSectionChange = (section: string) => {
    const normalized = normalizeSection(section);
    if (normalized !== activeSection) {
      setActiveSection(normalized);
    }

    if (normalized !== normalizeSection(sectionParam)) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("section", normalized);
      const queryString = params.toString();
      router.replace(queryString ? `/coach?${queryString}` : "/coach", {
        scroll: false,
      });
    }
  };

  const rootSectionCandidate = activeSection.split("-")[0] ?? DEFAULT_SECTION;
  const rootSection = (
    isCoachRootSection(rootSectionCandidate)
      ? rootSectionCandidate
      : DEFAULT_SECTION
  ) as CoachRootSection;

  const subsectionRenderer =
    subsectionRenderers[activeSection as keyof typeof subsectionRenderers];
  const rootRenderer = sectionRenderers[rootSection];
  const currentSection = useMemo(
    () => (subsectionRenderer ?? rootRenderer)?.() ?? null,
    [rootRenderer, subsectionRenderer]
  );

  const theme = SECTION_THEMES[rootSection];
  const panelContent = getPanelContent(rootSection, activeSection);

  return (
    <div className="relative h-screen overflow-hidden bg-[#030712] text-slate-100">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10",
          theme.overlays.top
        )}
        aria-hidden
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64",
          theme.overlays.bottom
        )}
        aria-hidden
      />

      <ResourcesSidebar
        sections={navigationSections}
        activeSection={activeSection}
        onSectionChange={(section) => {
          handleSectionChange(section);
          setMobileMenuOpen(false);
        }}
        mobileOpen={mobileMenuOpen}
        onMobileClose={() => setMobileMenuOpen(false)}
        theme={theme.sidebar}
      />
      <CoachHeader
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        theme={theme.header}
      />

      <div className="absolute inset-x-0 top-16 bottom-0 flex">
        <div className="hidden lg:block lg:w-64" aria-hidden />
        <div className="glass-scrollbar flex-1 overflow-y-auto overflow-x-hidden">
          <div className="mx-auto max-w-5xl px-4 py-8 lg:px-8 lg:py-12">
            {panelContent ? (
              <Panel theme={theme} content={panelContent} />
            ) : null}
            <div className="pb-10">{currentSection}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CoachPageFallback() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#030712] text-slate-200">
      Carregando painel do coach...
    </div>
  );
}
