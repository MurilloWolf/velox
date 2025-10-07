"use client";
import type { MouseEvent } from "react";

import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import veloxLogo from "../../../public/velox-transparent.png";
import Image from "next/image";
import Link from "next/link";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { usePathname } from "next/navigation";

export default function Header() {
  const scrollTo = useSmoothScroll();
  const pathname = usePathname();

  type NavItem = {
    label: string;
    href: string;
    scrollTarget?: string;
  };

  const navItems: readonly NavItem[] = [
    { label: "Recursos", href: "/#recursos", scrollTarget: "#recursos" },
    { label: "Corridas", href: "/calendar" },
    { label: "Bot", href: "/info" },
    { label: "Patrocínio", href: "/sponsors" },
    { label: "FAQ", href: "/faq" },
    { label: "Contato", href: "/#contato", scrollTarget: "#contato" },
  ] as const;

  const handleSmoothNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) {
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    if (window.location.pathname !== "/") {
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
              alt="Logotipo do VELOX Corridas"
              width={150}
              height={32}
              className=" object-fit-contain"
            />
          </Link>

          <nav
            className="hidden md:flex items-center gap-6 text-white"
            aria-label="Navegação principal"
          >
            <ul className="flex items-center gap-6 text-sm font-medium">
              {navItems.map((item) => {
                const isActive = item.scrollTarget
                  ? pathname === "/"
                  : pathname === item.href;

                return (
                  <li key={item.label} className="list-none">
                    <Link
                      href={item.href}
                      onClick={(event) =>
                        item.scrollTarget
                          ? handleSmoothNavigation(event, item.scrollTarget)
                          : undefined
                      }
                      className="transition-colors text-white hover:text-[#d5fe46]"
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Button
            size="sm"
            asChild
            className=" text-black bg-[#d5fe46] hover:bg-[#d5fe46]/100 hover:opacity-80  cursor-pointer uppercase font-semibold"
          >
            <a
              href="https://t.me/veloxsupport"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale com o VELOX no Telegram"
            >
              <Send className=" h-4 w-4" />
              Telegram
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
