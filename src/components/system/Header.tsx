"use client";
import type { MouseEvent } from "react";

import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { usePathname } from "next/navigation";
import useAnalytics from "@/tracking/useAnalytics";
import { AnalyticsActions } from "@/tracking/types";

export default function Header() {
  const TELEGRAM_BOT_URL = "https://web.telegram.org/a/#8475526575";

  const { trackEvent } = useAnalytics();

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
    trackEvent({
      targetType: "LINK",
      action: AnalyticsActions.BUTTON_CLICK,
      pagePath: window.location.pathname,
      targetId: `HEADER_NAVIGATION:${href}`,
    });
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

  const handleTelegramClick = () => {
    trackEvent({
      targetType: "BOT_LINK",
      action: AnalyticsActions.BUTTON_CLICK,
      pagePath: window.location.pathname,
      targetId: "HEADER_TELEGRAM_BUTTON",
    });
    window.open(TELEGRAM_BOT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <header className="sticky top-0 z-50 w-full  bg-[#121212] backdrop-blur supports-[backdrop-filter]:bg-[#000]/90">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://velox-images-bucket.s3.sa-east-1.amazonaws.com/public/velox-transparent.png"
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
            onClick={handleTelegramClick}
            size="sm"
            aria-label="VELOX BOT Telegram"
            className=" text-black bg-[#d5fe46] hover:bg-[#d5fe46]/100 hover:opacity-80  cursor-pointer uppercase font-semibold"
          >
            <Send className=" h-4 w-4" />
            Telegram
          </Button>
        </div>
      </div>
    </header>
  );
}
