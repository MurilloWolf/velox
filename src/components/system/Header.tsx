"use client";
import type { MouseEvent } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Send, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useAnalytics from "@/tracking/useAnalytics";
import { useHeaderMessages } from "@/i18n/hooks/useHeaderMessages";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { TELEGRAM_BOT_WEB_URL, openTelegramTarget } from "@/lib/telegram";

export default function Header() {
  const { trackNavigationClick, trackButtonClick } = useAnalytics();
  const headerMessages = useHeaderMessages();
  const scrollTo = useSmoothScroll();
  const pathname = usePathname();
  const navItems = headerMessages.navItems;

  const handleSmoothNavigation = (
    event: MouseEvent<HTMLElement>,
    href: string,
    scrollTarget?: string
  ) => {
    trackNavigationClick("header", href.replace(/^\//, "").replace("#", ""));

    if (scrollTarget && window.location.pathname === "/") {
      event.preventDefault();
      scrollTo(scrollTarget);
      return;
    }
  };

  const handleTelegramClick = () => {
    trackButtonClick(
      "header:telegram_button",
      headerMessages.telegramButton.fullLabel,
      TELEGRAM_BOT_WEB_URL
    );
    openTelegramTarget("bot");
  };

  const MobileNavigation = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden text-white hover:bg-white/10"
          aria-label={headerMessages.mobileMenuAriaLabel}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[280px] bg-black/95 border-gray-800 backdrop-blur-sm"
      >
        <SheetHeader className="pb-6">
          <SheetTitle className="text-white text-left">
            <Image
              src="https://velox-images-bucket.s3.sa-east-1.amazonaws.com/public/velox-transparent.png"
              alt={headerMessages.logoAlt}
              width={120}
              height={28}
              className="object-fit-contain"
              onClick={(event) => handleSmoothNavigation(event, "/")}
            />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 p-4">
          {navItems.map((item) => {
            const isActive = !item.scrollTarget && pathname === item.href;

            return (
              <SheetClose asChild key={item.id}>
                <Link
                  href={item.href}
                  onClick={(event) =>
                    handleSmoothNavigation(event, item.href, item.scrollTarget)
                  }
                  className={`
                    flex items-center px-4 py-3 rounded-lg text-white font-medium 
                    transition-all duration-200 hover:bg-[#d5fe46]/20 hover:text-[#d5fe46]
                    ${
                      isActive
                        ? "bg-[#d5fe46]/10 text-[#d5fe46] border-l-2 border-[#d5fe46]"
                        : ""
                    }
                  `}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </SheetClose>
            );
          })}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <SheetClose asChild>
              <Button
                onClick={handleTelegramClick}
                className="w-full text-black bg-[#d5fe46] hover:bg-[#e0ff55] hover:shadow-[0_0_20px_rgba(213,254,70,0.6)] font-semibold transition-all group"
              >
                <Send className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1 group-hover:rotate-12" />
                {headerMessages.telegramButton.fullLabel}
              </Button>
            </SheetClose>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-black backdrop-blur supports-[backdrop-filter]:bg-white/4">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="md:hidden">
            <MobileNavigation />
          </div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://velox-images-bucket.s3.sa-east-1.amazonaws.com/public/velox-transparent.png"
              alt={headerMessages.logoAlt}
              width={150}
              height={32}
              className="object-fit-contain"
              onClick={(event) => handleSmoothNavigation(event, "/")}
            />
          </Link>
          <nav
            className="hidden md:flex items-center gap-6 text-white"
            aria-label={headerMessages.navAriaLabel}
          >
            <ul className="flex items-center gap-6 text-sm font-medium">
              {navItems.map((item) => {
                const isActive = !item.scrollTarget && pathname === item.href;

                return (
                  <li key={item.id} className="list-none">
                    <Link
                      href={item.href}
                      onClick={(event) =>
                        handleSmoothNavigation(
                          event,
                          item.href,
                          item.scrollTarget
                        )
                      }
                      className={`
                        group hover:bg-[#d5fe46]/50 text-md px-4 py-2 rounded-md hover:rotate-2 cursor-pointer 
                        transition-colors text-white font-bold block
                        ${isActive ? "text-[#d5fe46]" : ""}
                      `}
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
            aria-label={headerMessages.telegramButton.ariaLabel}
            className="text-black bg-[#d5fe46] hover:bg-[#e0ff55] hover:rotate-2 hover:shadow-[0_0_20px_rgba(213,254,70,0.6)] hover:[text-shadow:_0_0_8px_rgba(0,0,0,0.3)] cursor-pointer uppercase font-semibold transition-all group"
          >
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:rotate-12" />
            <span className="hidden sm:inline ml-2">
              {headerMessages.telegramButton.shortLabel}
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
