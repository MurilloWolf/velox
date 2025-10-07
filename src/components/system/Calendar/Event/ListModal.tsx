"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui";
import type { Event } from "../types";

interface EventListModalProps {
  isOpen: boolean;
  onClose: () => void;
  events: Event[];
  onEventClick: (event: Event) => void;
}

export default function EventListModal({
  isOpen,
  onClose,
  events,
  onEventClick,
}: EventListModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const eventDate = events[0]?.date;
  const formattedDate = eventDate
    ? eventDate.toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/80 backdrop-blur"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl max-h-[82vh] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_30px_90px_-25px_rgba(0,0,0,0.85)]">
        <div className="sticky top-0 flex items-center justify-between gap-4 border-b border-white/10 bg-gradient-to-r from-primary/30 via-black/40 to-transparent px-8 py-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Eventos do Dia
            </h2>
            <p className="mt-1 text-sm text-white/70">{formattedDate}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white/80 hover:text-white"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="max-h-[calc(82vh-132px)] overflow-y-auto px-6 pb-8 pt-6">
          <div className="space-y-4">
            {events.map((event) => (
              <button
                key={event.id}
                onClick={() => onEventClick(event)}
                className="group w-full rounded-2xl border border-white/10 bg-white/[0.07] p-5 text-left transition-all hover:-translate-y-[1px] hover:border-primary/60 hover:bg-white/10"
              >
                <div className="flex items-start justify-between gap-4 cursor-pointer">
                  <div className="flex-1">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[#d5fe46] px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                        {event.time}
                      </span>
                      <h3 className="text-lg font-semibold text-white group-hover:text-white/90">
                        {event.title}
                      </h3>
                    </div>
                    <p className="line-clamp-3 text-sm leading-relaxed text-white/70">
                      {event.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
