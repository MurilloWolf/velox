"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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

  if (!event) return null;

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl min-w-3xl w-full max-h-[90vh] overflow-hidden p-0 bg-gradient-to-br from-black via-black/60 to-black/80 border-white/10 text-white">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Lado esquerdo - Imagem */}
          <div className="lg:w-1/2 relative">
            {event.promoImageUrl ? (
              <div className="relative h-64 lg:h-full">
                <Image
                  src={event.promoImageUrl}
                  alt={`Imagem promocional - ${event.title}`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-sm text-white/90 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="capitalize">{formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/90">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-64 lg:h-full bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
                <div className="text-center text-white/50">
                  <Calendar className="h-16 w-16 mx-auto mb-4" />
                  <p>Sem imagem disponível</p>
                </div>
              </div>
            )}
          </div>

          {/* Lado direito - Informações */}
          <div className="lg:w-1/2  flex flex-col">
            <DialogHeader className="border-b border-white/10 px-6 py-4">
              <DialogTitle className="text-2xl font-bold text-white text-left">
                {event.title}
              </DialogTitle>
            </DialogHeader>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-6">
                {/* Cards de informações principais */}
                <div className="grid gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/[0.07]">
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

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/[0.07]">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-cyan-500/10 p-2.5">
                        <MapPin className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-white/50 mb-0.5">Local</p>
                        <Link
                          href={mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleLocationClick}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
                        >
                          <span className="truncate">{event.location}</span>
                          <ExternalLink className="h-3.5 w-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/[0.07]">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-white/10 p-2.5">
                        <Calendar className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-white/50 mb-0.5">Data</p>
                        <p className="text-sm font-semibold text-white capitalize">
                          {formattedDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Distâncias disponíveis */}
                {event.distances && event.distances.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-wider text-white/50 font-medium">
                      Distâncias Disponíveis
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {event.distances.map((distance, index) => (
                        <span
                          key={`${event.id}-distance-${index}`}
                          className="rounded-lg border border-[#d5fe46]/30 bg-[#d5fe46]/10 px-3 py-1.5 text-sm font-semibold text-[#d5fe46] transition-colors hover:border-[#d5fe46]/50 hover:bg-[#d5fe46]/15"
                        >
                          {distance}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Descrição do evento */}
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-wider text-white/50 font-medium">
                    Sobre o Evento
                  </p>
                  <p className="text-sm leading-relaxed text-white/70">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer com botão de inscrição */}
            <div className="border-t border-white/10 px-6 py-4">
              {event.link && (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
