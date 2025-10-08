"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

import {
  NutritionSection,
  PromptSection,
  TrainingSection,
  ResourcesSidebar,
  CoachHeader,
} from "./components";
import { sections } from "./presentation/sidebar";

const DEFAULT_SECTION = "nutrition";
const KNOWN_SECTIONS = new Set(
  sections.flatMap((section) => [
    section.id,
    ...(section.subsections?.map((subsection) => subsection.id) ?? []),
  ])
);

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

const sectionsById = {
  nutrition: <NutritionSection />,
  training: <TrainingSection />,
  prompts: <PromptSection />,
} as const;

const SECTION_THEMES = {
  nutrition: {
    header: {
      container:
        "border-[#1f5c32]/80 bg-gradient-to-r from-[#10301a]/90 via-[#174423]/80 to-[#1f5c32]/70",
      title: "text-[#d5fe46]",
      button: "hover:bg-[#1f5c32]/35 hover:text-[#d5fe46]",
    },
    overlays: {
      top: "bg-[radial-gradient(circle_at_top,_rgba(79,214,125,0.22),_rgba(3,7,18,0.92)_60%)]",
      bottom:
        "bg-[radial-gradient(circle_at_bottom,_rgba(213,254,70,0.18),_rgba(3,7,18,0)_65%)]",
    },
    hero: {
      wrapper:
        "border-[#1f5c32]/60 bg-gradient-to-br from-[#132c1c]/70 via-[#08160e]/60 to-[#0f3b26]/65 shadow-[0_20px_60px_-40px_rgba(19,82,42,0.85)]",
      inner: "bg-[#081910]/85",
      label:
        "border-[#4fd67d]/40 bg-[#4fd67d]/10 text-[#9bffbf]",
      heading: "text-[#d5fe46]",
      description: "text-[#c9f6db]",
      quickCard:
        "border-[#4fd67d]/35 bg-[#4fd67d]/12 text-[#d4ffe5]",
      quickHeading: "text-[#9bffbf]",
      quickText: "text-[#d4ffe5]",
      bullets: ["bg-[#d5fe46]", "bg-[#4fd67d]", "bg-[#9bffbf]"],
    },
    sidebar: {
      container:
        "border-r border-[#0f2919]/80 bg-[#06140d]/95 text-[#b7eccc] shadow-[0_25px_60px_-45px_rgba(16,48,26,0.6)]",
      inactive: "text-[#b7eccc]",
      hover: "hover:text-[#efffed]",
      active:
        "border-[#4fd67d]/45 bg-[#123923]/70 text-[#efffed] shadow-[0_15px_45px_-28px_rgba(79,214,125,0.6)]",
      icon: "text-[#8ee8b3]",
      divider: "border-[#0f2919]/60",
      subtext: "text-[#93d9b1]",
      subHover: "hover:text-[#efffed]",
      subActive: "text-[#d5fe46]",
    },
  },
  training: {
    header: {
      container:
        "border-[#9c3b00]/80 bg-gradient-to-r from-[#411700]/90 via-[#632300]/80 to-[#9c3b00]/70",
      title: "text-[#ff9448]",
      button: "hover:bg-[#ff8a3c]/20 hover:text-[#ffe0cc]",
    },
    overlays: {
      top: "bg-[radial-gradient(circle_at_top,_rgba(255,138,60,0.28),_rgba(3,7,18,0.9)_60%)]",
      bottom:
        "bg-[radial-gradient(circle_at_bottom,_rgba(255,166,86,0.2),_rgba(3,7,18,0)_65%)]",
    },
    hero: {
      wrapper:
        "border-[#9c3b00]/60 bg-gradient-to-br from-[#321205]/70 via-[#1a0904]/60 to-[#4a2008]/65 shadow-[0_20px_60px_-40px_rgba(156,59,0,0.8)]",
      inner: "bg-[#1c0d05]/85",
      label:
        "border-[#ff8a3c]/40 bg-[#ff8a3c]/10 text-[#ffbd85]",
      heading: "text-[#ff9448]",
      description: "text-[#ffd8c0]",
      quickCard:
        "border-[#ff8a3c]/30 bg-[#ff8a3c]/10 text-[#ffe1cc]",
      quickHeading: "text-[#ffbd85]",
      quickText: "text-[#ffe1cc]",
      bullets: ["bg-[#ff8a3c]", "bg-[#ffd166]", "bg-[#ffb347]"],
    },
    sidebar: {
      container:
        "border-r border-[#2f1306]/80 bg-[#1a0b04]/95 text-[#ffe1cc] shadow-[0_25px_60px_-45px_rgba(65,23,0,0.55)]",
      inactive: "text-[#ffe1cc]",
      hover: "hover:text-[#fff4eb]",
      active:
        "border-[#ff8a3c]/45 bg-[#4a2008]/70 text-[#fff4eb] shadow-[0_15px_40px_-28px_rgba(255,138,60,0.55)]",
      icon: "text-[#ff9448]",
      divider: "border-[#2f1306]/60",
      subtext: "text-[#ffcfad]",
      subHover: "hover:text-[#fff4eb]",
      subActive: "text-[#ff8a3c]",
    },
  },
  prompts: {
    header: {
      container:
        "border-[#0f2d52]/80 bg-gradient-to-r from-[#000c5a]/85 via-[#03143a]/80 to-[#052f3f]/70",
      title: "text-[#64a8ff]",
      button: "hover:bg-[#364ff2]/20 hover:text-[#d5fe46]",
    },
    overlays: {
      top: "bg-[radial-gradient(circle_at_top,_rgba(54,79,242,0.28),_rgba(3,7,18,0.85)_60%)]",
      bottom:
        "bg-[radial-gradient(circle_at_bottom,_rgba(213,254,70,0.18),_rgba(3,7,18,0)_65%)]",
    },
    hero: {
      wrapper:
        "border-[#0f2d52]/70 bg-gradient-to-br from-[#031a3a]/70 via-[#050a16]/60 to-[#052f3f]/65 shadow-[0_20px_60px_-40px_rgba(3,9,36,0.9)]",
      inner: "bg-[#030914]/85",
      label:
        "border-[#64a8ff]/40 bg-[#64a8ff]/10 text-[#9bc7ff]",
      heading: "text-[#64a8ff]",
      description: "text-[#d3e8ff]",
      quickCard:
        "border-[#64a8ff]/30 bg-[#64a8ff]/10 text-[#d3e8ff]",
      quickHeading: "text-[#9bc7ff]",
      quickText: "text-[#d3e8ff]",
      bullets: ["bg-[#364ff2]", "bg-[#64a8ff]", "bg-[#94c2ff]"],
    },
    sidebar: {
      container:
        "border-r border-[#0f2337]/80 bg-[#060a12]/95 text-[#cbd9ff] shadow-[0_25px_60px_-45px_rgba(3,18,40,0.9)]",
      inactive: "text-[#cbd9ff]",
      hover: "hover:text-white",
      active:
        "border-[#1c8cff]/60 bg-[#1c375e]/70 text-white shadow-[0_15px_45px_-28px_rgba(28,140,255,0.6)]",
      icon: "text-[#64a8ff]",
      divider: "border-[#0f2337]/60",
      subtext: "text-[#9fb7ff]",
      subHover: "hover:text-white",
      subActive: "text-[#64a8ff]",
    },
  },
} as const;

export default function RecursosPage() {
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

  const rootSection = activeSection.split("-")[0] as keyof typeof sectionsById;
  const currentSection = sectionsById[rootSection] ?? null;
  const theme = SECTION_THEMES[rootSection];
  const highlightItems = [
    "Programas para 5K, 10K e Maratona",
    "Protocolos de nutrição para cada nível",
    "Prompts prontos para ajustar cargas e ritmo",
  ];

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
            <div
              className={cn(
                "mb-8 overflow-hidden rounded-3xl border p-1",
                theme.hero.wrapper
              )}
            >
              <div
                className={cn(
                  "flex flex-col justify-between gap-6 rounded-[calc(theme(borderRadius.3xl)-0.5rem)] px-6 py-6 md:flex-row md:items-center",
                  theme.hero.inner
                )}
              >
                <div>
                  <span
                    className={cn(
                      "inline-flex items-center gap-3 rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em]",
                      theme.hero.label
                    )}
                  >
                    Painel Estratégico
                  </span>
                  <h2 className={cn("mt-2 text-2xl font-semibold", theme.hero.heading)}>
                    Personalize seus treinos com insights do coach digital
                  </h2>
                  <p className={cn("mt-2 max-w-xl text-sm", theme.hero.description)}>
                    Explore planos de nutrição, treinos e prompts de IA
                    ajustados para sua rotina. Alterne as abas ao lado para
                    navegar entre os recursos.
                  </p>
                </div>
                <div
                  className={cn(
                    "flex w-full max-w-xs flex-col gap-3 rounded-2xl border p-4 text-sm",
                    theme.hero.quickCard
                  )}
                >
                  <span className={cn("font-semibold", theme.hero.quickHeading)}>
                    Destaques rápidos
                  </span>
                  <ul className={cn("space-y-2", theme.hero.quickText)}>
                    {highlightItems.map((item, index) => (
                      <li key={item} className="flex items-center gap-2">
                        <span
                          className={cn(
                            "inline-flex h-2 w-2 rounded-full",
                            theme.hero.bullets[index] ?? theme.hero.bullets[0]
                          )}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="pb-10">{currentSection}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
