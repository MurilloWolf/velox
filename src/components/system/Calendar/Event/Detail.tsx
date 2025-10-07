"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Event } from "../types";

interface EventDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: Event | null;
}

export default function EventDetailsModal({
  isOpen,
  onClose,
  event,
}: EventDetailsModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !event) return null;

  const formattedDate = event.date.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    event.location
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/85 backdrop-blur"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl max-h-[82vh] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-2xl shadow-[0_30px_90px_-25px_rgba(0,0,0,0.85)]">
        <div className="sticky top-0 border-b border-white/10 bg-gradient-to-r from-primary/30 via-black/35 to-transparent px-8 py-6">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1 text-white">
              <h2 className="mb-2 text-3xl font-semibold leading-tight text-balance">
                {event.title}
              </h2>
              <p className="text-sm capitalize text-white/70">
                {formattedDate}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="shrink-0 text-white/80 hover:text-white cursor-pointer hover:bg-black/20 transition"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="max-h-[calc(82vh-132px)] overflow-y-auto px-8 pb-9 pt-7 text-white">
          <div className="space-y-5">
            <div className="grid gap-4 md:grid-cols-[minmax(0,160px)_minmax(0,1fr)]">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 backdrop-blur md:self-start">
                <div className="rounded-xl p-2.5 text-[#d5fe46]">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-white/60">
                    Horário
                  </p>
                  <p className="text-sm font-semibold text-white">
                    {event.time}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-4 backdrop-blur">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl p-2.5 text-[#d5fe46]">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-white/60">
                      Local
                    </p>
                    <Link
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-[#d5fe46] transition hover:text-[#c6f542]"
                    >
                      <span className="truncate">{event.location}</span>
                      <ExternalLink className="h-4 w-4 shrink-0" />
                    </Link>
                  </div>
                </div>

                {event.distances && event.distances.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {event.distances.map((distance, index) => (
                      <span
                        key={`${event.id}-distance-${index}`}
                        className="rounded-full border border-[#d5fe46]/30 bg-[#d5fe46]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d5fe46]"
                      >
                        {distance}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-wide text-white/60">
                Descrição
              </p>
              <p className="mt-2 text-base leading-relaxed text-white/80">
                {event.description}
              </p>
            </div>

            {event.link && (
              <div className="rounded-2xl border border-[#d5fe46]/40 bg-[#d5fe46]/10 p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-wide text-[#d5fe46]/80">
                  Inscrições
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Garanta sua vaga diretamente com os organizadores da prova.
                </p>
                <Button
                  asChild
                  className="mt-4 w-full cursor-pointer bg-[#d5fe46] text-black transition hover:bg-[#c6f542]"
                >
                  <Link
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    Inscrever-se na corrida
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
