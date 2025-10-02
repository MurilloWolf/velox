import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import veloxLogo from "../../../public/velox-transparent.png";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full  bg-[#121212] backdrop-blur supports-[backdrop-filter]:bg-[#000]/90">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={veloxLogo}
              alt="VELOX Logo"
              width={150}
              height={32}
              className=" object-fit-contain"
            />
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
            className="text-black bg-[#d5fe46] hover:bg-[#d5fe46]/100 hover:opacity-80  cursor-pointer uppercase font-bold"
          >
            Ver no telegram
            <Send className=" h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
