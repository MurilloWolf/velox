import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              VELOX
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/#recursos"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Recursos
            </Link>
            <Link
              href="/#corridas"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Corridas
            </Link>
            <Link
              href="/info"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Bot Telegram
            </Link>
            <Link
              href="/sponsors"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Patrocínio
            </Link>
            <Link
              href="/#contato"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Contato
            </Link>
          </nav>

          <Button
            size="sm"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
          >
            <Zap className="mr-2 h-4 w-4" />
            Começar Agora
          </Button>
        </div>
      </div>
    </header>
  );
}
