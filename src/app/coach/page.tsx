"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui";

import {
  NutritionSection,
  PromptSection,
  TrainingSection,
  ResourcesSidebar,
} from "./components";

const sectionsById = {
  nutrition: <NutritionSection />,
  training: <TrainingSection />,
  prompts: <PromptSection />,
} as const;

export default function RecursosPage() {
  const [activeSection, setActiveSection] = useState("nutrition");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const rootSection = activeSection.split("-")[0] as keyof typeof sectionsById;
  const currentSection = sectionsById[rootSection] ?? null;

  return (
    <div className="relative flex min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(3,189,255,0.16),_rgba(0,0,0,0)_55%)]" aria-hidden />
      <ResourcesSidebar
        activeSection={activeSection}
        onSectionChange={(section) => {
          setActiveSection(section);
          setMobileMenuOpen(false);
        }}
        mobileOpen={mobileMenuOpen}
        onMobileClose={() => setMobileMenuOpen(false)}
      />

      <div className="flex-1 lg:pl-64">
        <header className="sticky top-0 z-40 border-b border-border/60 bg-gradient-to-r from-background/95 via-primary/15 to-secondary/10 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 items-center justify-between px-4 lg:px-8">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen((open) => !open)}
                aria-label="Alternar menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
              <h1 className="text-xl font-semibold text-primary-foreground">
                Recursos para Corredores
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Button asChild variant="ghost" size="sm">
                <a
                  href="https://t.me/VeloxBot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VELOX
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link href="/">Início</Link>
              </Button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-8 lg:px-8 lg:py-12">
          <div className="mb-8 overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/35 via-background/30 to-secondary/30 p-1">
            <div className="flex flex-col justify-between gap-6 rounded-[calc(theme(borderRadius.3xl)-0.5rem)] bg-background/80 px-6 py-6 shadow-[0_0_25px_-10px_rgba(3,189,255,0.35)] md:flex-row md:items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/80">
                  Painel Estratégico
                </span>
                <h2 className="mt-2 text-2xl font-semibold text-primary-foreground">
                  Personalize seus treinos com insights do coach digital
                </h2>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                  Explore planos de nutrição, treinos e prompts de IA ajustados para sua
                  rotina. Alterne as abas ao lado para navegar entre os recursos.
                </p>
              </div>
              <div className="flex w-full max-w-xs flex-col gap-3 rounded-2xl border border-secondary/30 bg-secondary/15 p-4 text-sm text-secondary-foreground">
                <span className="font-semibold text-secondary-foreground/90">
                  Destaques rápidos
                </span>
                <ul className="space-y-2 text-secondary-foreground/80">
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                    Programas para 5K, 10K e Maratona
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-secondary" />
                    Protocolos de nutrição para cada nível
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-primary/70" />
                    Prompts prontos para ajustar cargas e ritmo
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {currentSection}
        </main>
      </div>
    </div>
  );
}
