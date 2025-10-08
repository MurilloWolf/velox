"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { LucideIcon } from "lucide-react";
import { Apple, Dumbbell, Sparkles, ChevronRight } from "lucide-react";

interface ResourcesSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

type ResourceSection = {
  id: string;
  label: string;
  icon: LucideIcon;
  subsections?: Array<{ id: string; label: string }>;
};

const sections: ResourceSection[] = [
  {
    id: "nutrition",
    label: "Dicas de Nutrição",
    icon: Apple,
    subsections: [
      { id: "nutrition-beginner", label: "Iniciante" },
      { id: "nutrition-intermediate", label: "Intermediário" },
      { id: "nutrition-advanced", label: "Avançado" },
      { id: "nutrition-5k", label: "5K" },
      { id: "nutrition-10k", label: "10K" },
      { id: "nutrition-half", label: "Meia Maratona" },
      { id: "nutrition-marathon", label: "Maratona" },
    ],
  },
  {
    id: "training",
    label: "Planilhas de Treino",
    icon: Dumbbell,
    subsections: [
      { id: "training-beginner", label: "Iniciante" },
      { id: "training-intermediate", label: "Intermediário" },
      { id: "training-advanced", label: "Avançado" },
    ],
  },
  {
    id: "prompts",
    label: "Prompts de IA",
    icon: Sparkles,
    subsections: [
      { id: "prompts-training", label: "Treinos" },
      { id: "prompts-nutrition", label: "Nutrição" },
      { id: "prompts-motivation", label: "Motivação" },
      { id: "prompts-recovery", label: "Recuperação" },
    ],
  },
];

export default function ResourcesSidebar({
  activeSection,
  onSectionChange,
  mobileOpen,
  onMobileClose,
}: ResourcesSidebarProps) {
  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={onMobileClose}
        />
      )}
      <aside
        className={cn(
          "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r border-border bg-sidebar text-sidebar-foreground shadow-sm transition-transform duration-200 lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <ScrollArea className="h-full py-6">
          <div className="space-y-1 px-3">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection.startsWith(section.id);

              return (
                <div key={section.id} className="space-y-1">
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start gap-3 font-medium text-sidebar-foreground/80 hover:text-sidebar-foreground",
                      isActive &&
                        "border border-primary/40 bg-primary/25 text-primary-foreground shadow-[0_8px_30px_-18px_rgba(3,189,255,0.6)]"
                    )}
                    onClick={() => {
                      onSectionChange(section.id);
                      onMobileClose();
                    }}
                  >
                    <Icon className="h-4 w-4" />
                    {section.label}
                  </Button>

                  {isActive && section.subsections && (
                    <div className="ml-7 space-y-1 border-l border-border pl-3">
                      {section.subsections.map((subsection) => (
                        <Button
                          key={subsection.id}
                          variant="ghost"
                          size="sm"
                          className={cn(
                            "w-full justify-start text-sm text-muted-foreground hover:text-foreground",
                            activeSection === subsection.id &&
                              "font-medium text-primary"
                          )}
                          onClick={() => {
                            onSectionChange(subsection.id);
                            onMobileClose();
                          }}
                        >
                          <ChevronRight className="mr-2 h-3 w-3" />
                          {subsection.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </aside>
    </>
  );
}
