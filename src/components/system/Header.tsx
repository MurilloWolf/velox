import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full  bg-[#121212] backdrop-blur supports-[backdrop-filter]:bg-[#000]/90">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#d5fe46] to-[#121212]">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#d5fe46] to-[#121212] bg-clip-text text-transparent">
              VELOX
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-white">
            <Link
              href="/#recursos"
              className="text-sm font-medium text-white hover:text-[#d5fe46] transition-colors"
            >
              Recursos
            </Link>
            <Link
              href="/#corridas"
              className="text-sm font-medium text-white hover:text-[#d5fe46] transition-colors"
            >
              Corridas
            </Link>
            <Link
              href="/info"
              className="text-sm font-medium text-white hover:text-[#d5fe46] transition-colors"
            >
              Bot Telegram
            </Link>
            <Link
              href="/sponsors"
              className="text-sm font-medium text-white hover:text-[#d5fe46] transition-colors"
            >
              Patrocínio
            </Link>
            <Link
              href="/#contato"
              className="text-sm font-medium text-white hover:text-[#d5fe46] transition-colors"
            >
              Contato
            </Link>
          </nav>

          <Button
            size="sm"
            className="text-[#000c5a] bg-[#d5fe46] hover:bg-[#d5fe46]/100 hover:opacity-80  cursor-pointer"
          >
            <Zap className="mr-2 h-4 w-4" />
            Começar Agora
          </Button>
        </div>
      </div>
    </header>
  );
}
