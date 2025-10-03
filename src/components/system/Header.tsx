"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import veloxLogo from "../../../public/velox-transparent.png";
import Image from "next/image";
import Link from "next/link";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

export default function Header() {
  const scrollTo = useSmoothScroll();

  const handleSmoothNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) {
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    if (window.location.pathname !== "/") {
      // Leave navigation to Next.js when we are on a different page
      return;
    }

    event.preventDefault();
    scrollTo(href);
  };

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
              onClick={(event) => handleSmoothNavigation(event, "#recursos")}
              className="text-sm font-medium text-white transition-colors hover:text-[#d5fe46]"
            >
              Recursos
            </Link>
            <Link
              href="/#corridas"
              onClick={(event) => handleSmoothNavigation(event, "#corridas")}
              className="text-sm font-medium text-white transition-colors hover:text-[#d5fe46]"
            >
              Corridas
            </Link>
            <Link
              href="/info"
              className="text-sm font-medium text-white hover:text-[#d5fe46] transition-colors"
            >
              Bot
            </Link>
            <Link
              href="/sponsors"
              className="text-sm font-medium text-white hover:text-[#d5fe46] transition-colors"
            >
              Patrocínio
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-white hover:text-[#d5fe46] transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/#contato"
              onClick={(event) => handleSmoothNavigation(event, "#contato")}
              className="text-sm font-medium text-white transition-colors hover:text-[#d5fe46]"
            >
              Contato
            </Link>
          </nav>

          <Button
            size="sm"
            className=" text-black bg-[#d5fe46] hover:bg-[#d5fe46]/100 hover:opacity-80  cursor-pointer uppercase font-semibold"
          >
            <Send className=" h-4 w-4" />
            telegram
          </Button>
        </div>
      </div>
    </header>
  );
}
