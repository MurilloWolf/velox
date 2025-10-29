"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, MapPin, Clock, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import useAnalytics from "@/tracking/useAnalytics";
import { AnalyticsActions } from "@/tracking/types";
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
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && event) {
      trackEvent({
        action: AnalyticsActions.PAGE_VIEW,
        targetType: "RACE_EVENT",
        targetId: event.id,
        pagePath: `/calendar`,
        props: {
          eventTitle: event.title,
          eventDate: event.date.toISOString(),
          eventLocation: event.location,
        },
      });
    }
  }, [isOpen, event, trackEvent]);

  const handleLocationClick = () => {
    if (event) {
      trackEvent({
        action: AnalyticsActions.BUTTON_CLICK,
        targetType: "RACE_LOCATION",
        targetId: event.id,
        pagePath: `/calendar`,
        props: {
          eventTitle: event.title,
          eventLocation: event.location,
        },
      });
    }
  };

  const handleRegistrationClick = () => {
    if (event) {
      trackEvent({
        action: AnalyticsActions.BUTTON_CLICK,
        targetType: "RACE_REGISTRATION",
        targetId: event.id,
        pagePath: `/calendar`,
        props: {
          eventTitle: event.title,
          eventDate: event.date.toISOString(),
          registrationLink: event.link || "",
        },
      });
    }
  };

  if (!isOpen || !event) return null;

  const normalizeDate = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const today = normalizeDate(new Date());
  const eventDate = normalizeDate(event.date);
  const registrationClosed = eventDate <= today;

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
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d5fe46]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="relative border-b border-white/10 px-8 py-6">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1 space-y-2">
                <h2 className="text-3xl font-bold text-white text-balance leading-tight">
                  {event.title}
                </h2>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Calendar className="h-4 w-4" />
                  <span className="capitalize">{formattedDate}</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="shrink-0 text-white/60 hover:text-white hover:bg-white/10 rounded-lg"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="max-h-[calc(90vh-140px)] overflow-y-auto px-8 py-6">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-6">
                <div className="col-span-2 rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-[#d5fe46]/10 p-2.5">
                      <Clock className="h-5 w-5 text-[#d5fe46]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 mb-0.5">Horário</p>
                      <p className="text-lg font-semibold text-white">
                        {event.time}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-cyan-500/10 p-2.5">
                      <MapPin className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div className="min-w-0 flex-1 truncate">
                      <p className="text-xs text-white/50 mb-0.5">Local</p>
                      <Link
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleLocationClick}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
                      >
                        <span className="">{event.location}</span>
                        <ExternalLink className="h-3.5 w-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {event.distances && event.distances.length > 0 && (
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-wider text-white/50 font-medium">
                    Distâncias Disponíveis
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {event.distances.map((distance, index) => (
                      <span
                        key={`${event.id}-distance-${index}`}
                        className="rounded-lg border border-[#d5fe46]/30 bg-[#d5fe46]/10 px-4 py-2 text-sm font-semibold text-[#d5fe46] transition-colors hover:border-[#d5fe46]/50 hover:bg-[#d5fe46]/15"
                      >
                        {distance}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-wider text-white/50 font-medium">
                  Sobre o Evento
                </p>
                <p className="text-sm leading-relaxed text-white/70">
                  {event.description}
                </p>
              </div>

              {event.link && (
                <div className="pt-2">
                  {registrationClosed ? (
                    <Button
                      disabled
                      className="w-full h-11 rounded-lg bg-white/10 text-white/50 font-semibold cursor-not-allowed"
                    >
                      Inscrições encerradas
                    </Button>
                  ) : (
                    <Button
                      asChild
                      className="w-full h-11 bg-[#d5fe46] text-black font-semibold hover:bg-[#d5fe46]/70 transition-all rounded-lg"
                    >
                      <Link
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleRegistrationClick}
                        className="inline-flex items-center justify-center gap-2"
                      >
                        Inscrever-se na Corrida
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
