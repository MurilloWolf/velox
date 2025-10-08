"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight } from "lucide-react";
import { sections } from "../presentation/sidebar";
interface ResourcesSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
  theme: {
    container: string;
    inactive: string;
    hover: string;
    active: string;
    icon: string;
    divider: string;
    subtext: string;
    subActive: string;
    subHover: string;
  };
}

export default function ResourcesSidebar({
  activeSection,
  onSectionChange,
  mobileOpen,
  onMobileClose,
  theme,
}: ResourcesSidebarProps) {
  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#030712]/70 backdrop-blur-sm lg:hidden"
          onClick={onMobileClose}
        />
      )}
      <aside
        className={cn(
          "fixed left-0 top-16 bottom-0 z-40 w-64 transition-transform duration-200",
          theme.container,
          mobileOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0"
        )}
      >
        <ScrollArea className="glass-scrollbar h-full py-6">
          <div className="space-y-1 px-3">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection.startsWith(section.id);

              return (
                <div key={section.id} className="space-y-1">
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start gap-3 font-medium border border-transparent transition-colors",
                      theme.inactive,
                      theme.hover,
                      isActive && theme.active
                    )}
                    onClick={() => {
                      onSectionChange(section.id);
                      onMobileClose();
                    }}
                  >
                    <Icon
                      className={cn(
                        "h-4 w-4 transition-colors",
                        theme.icon,
                        isActive && "text-inherit"
                      )}
                    />
                    {section.label}
                  </Button>

                  {isActive && section.subsections && (
                    <div
                      className={cn(
                        "ml-7 space-y-1 border-l pl-3",
                        theme.divider
                      )}
                    >
                      {section.subsections.map((subsection) => (
                        <Button
                          key={subsection.id}
                          variant="ghost"
                          size="sm"
                          className={cn(
                            "w-full justify-start text-sm border border-transparent transition-colors",
                            theme.subtext,
                            theme.subHover,
                            activeSection === subsection.id && theme.subActive
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
