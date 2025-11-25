import Link from "next/link";
import React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/useI18n";

interface ICoachHeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  theme: {
    container: string;
    title: string;
    button: string;
  };
}

const HEADER_COPY = {
  "pt-BR": {
    title: "Recursos para Corredores",
    home: "Início",
    toggleLabel: "Alternar menu",
  },
  "en-US": {
    title: "Runner resources",
    home: "Home",
    toggleLabel: "Toggle navigation",
  },
} as const;

export default function CoachHeader(props: ICoachHeaderProps) {
  const { mobileMenuOpen, setMobileMenuOpen, theme } = props;
  const { isBrazilExperience } = useI18n();
  const copy = HEADER_COPY[isBrazilExperience ? "pt-BR" : "en-US"];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur supports-[backdrop-filter]:bg-opacity-70",
        theme.container
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "lg:hidden text-slate-200 transition-colors",
              theme.button
            )}
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={copy.toggleLabel}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
          <h1 className={cn("text-xl font-semibold", theme.title)}>
            {copy.title}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="ghost"
            size="lg"
            className={cn("text-slate-200 transition-colors", theme.button)}
          >
            <Link href="/" className="uppercase">
              {copy.home}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
