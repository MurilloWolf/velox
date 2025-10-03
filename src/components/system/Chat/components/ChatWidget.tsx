"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import ChatPanel from "./ChatPanel";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isFaqPage = pathname?.startsWith("/faq");

  if (isFaqPage) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex max-w-full flex-col items-end gap-3 p-2 sm:p-0">
      {isOpen ? (
        <div
          id="chat-widget"
          className={cn("w-[min(92vw,480px)]", "sm:w-[420px]", "lg:w-[440px]")}
        >
          <ChatPanel
            variant="widget"
            onClose={() => setIsOpen(false)}
            className="rounded-3xl border-white/30 bg-black/45"
            contentClassName="px-3 py-3 sm:px-4 sm:py-4"
          />
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full bg-[#2563EB] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#93C5FD] active:scale-95"
        aria-expanded={isOpen}
        aria-controls="chat-widget"
      >
        <MessageCircle className="h-5 w-5" />
        {isOpen ? "Minimizar chat" : "Fale com a gente"}
      </button>
    </div>
  );
}
