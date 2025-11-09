"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ExternalLink, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useAnalytics from "@/tracking/useAnalytics";
import type { Event } from "../types";
import { Badge } from "@/components/ui";
import EventImagePreview from "./EventImagePreview";

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
  const { trackRaceView, trackRaceLocationClick, trackRaceRegistrationClick } =
    useAnalytics();

  useEffect(() => {
    if (isOpen && event) {
      trackRaceView(event.id, event.title, event.distances, event.city, {
        event_date: event.date.toISOString(),
        event_location: event.location,
      });
    }
  }, [isOpen, event, trackRaceView]);

  const handleLocationClick = () => {
    if (event) {
      trackRaceLocationClick(event.id, event.location, {
        event_title: event.title,
      });
    }
  };

  const handleRegistrationClick = () => {
    if (event) {
      trackRaceRegistrationClick(
        event.id,
        event.title,
        event.link || "",
        "external",
        {
          event_date: event.date.toISOString(),
        }
      );
    }
  };

  if (!event) return null;

  const normalizeDate = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const today = normalizeDate(new Date());
  const eventDate = normalizeDate(event.date);
  const registrationClosed = eventDate <= today || event.status === "CLOSED";

  const formattedDate = event.date.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    event.location
  )}`;

  const eventStatusMap = {
    OPEN: "Aberto",
    CLOSED: "Encerradas",
    COMING_SOON: "Em Breve",
    CANCELLED: "Evento Cancelado",
  };

  const badgeStyles = {
    OPEN: "bg-green-500/20 text-green-400 border-green-400/30",
    CLOSED: "bg-red-500/20 text-red-400 border-red-400/30",
    COMING_SOON: "bg-yellow-500/20 text-yellow-400 border-yellow-400/30",
    CANCELLED: "bg-gray-500/20 text-gray-400 border-gray-400/30",
  };

  const eventStatus =
    eventStatusMap[event.status as keyof typeof eventStatusMap] ||
    "Status Desconhecido";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl min-w-3xl w-full max-h-[90vh] overflow-hidden p-0 bg-gradient-to-br from-black via-black/60 to-black/80 border-white/10 text-white">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Lado esquerdo - Imagem */}
          <div className="lg:w-1/2 relative">
            <EventImagePreview
              image={event.promoImageUrl}
              formattedDate={formattedDate}
              time={event.time}
              title={event.title}
            />
          </div>

          {/* Lado direito - Informações */}
          <div className="lg:w-1/2  flex flex-col">
            <DialogHeader className="border-b border-white/10 px-6 py-4">
              <DialogTitle className="text-2xl font-bold text-white text-left">
                {event.title}
                <p className="text-sm leading-relaxed text-white/80">
                  {event.organization}
                </p>
              </DialogTitle>
            </DialogHeader>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-wider text-white/70 font-medium">
                    Inscrições
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      className={
                        badgeStyles[event.status as keyof typeof badgeStyles]
                      }
                    >
                      {eventStatus}
                    </Badge>
                  </div>
                </div>

                {event.distances && event.distances.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-sm uppercase tracking-wider text-white/70 font-medium">
                      Distâncias
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {event.distances.map((distance, index) => (
                        <Badge
                          key={`${event.id}-distance-${index}`}
                          className="rounded-lg border border-[#d5fe46]/30 bg-transparent   text-[#d5fe46] transition-colors hover:border-[#d5fe46]/50 hover:bg-[#d5fe46]/15"
                        >
                          {distance}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className=" ">
              <div className="space-y-3 bg-white/5 border-t border-white/10 px-6 py-4">
                <p className="text-sm uppercase tracking-wider text-white/70 font-bold">
                  Endereço
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="flex flex-col gap-2 font-medium text-sm rounded-xl text-cyan-400">
                    <div>
                      <span className="font-bold text-md">{event.uf}</span>,{" "}
                      {event.city}
                    </div>
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full h-11 bg-transparent text-cyan-500 border-2 border-cyan-500/70 font-semibold hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:border-cyan-400 hover:[text-shadow:_0_0_10px_rgba(34,211,238,0.8)] transition-all rounded-lg"
                >
                  <Link
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLocationClick}
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <Map className="h-4 w-4" />
                    Ver no Maps
                  </Link>
                </Button>
              </div>
            </div>

            <div className="px-6 py-4">
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
                      className="w-full h-11 bg-[#d5fe46] text-black font-semibold hover:shadow-[0_0_20px_rgba(213,254,70,0.6)] hover:[text-shadow:_0_0_8px_rgba(0,0,0,0.3)] hover:bg-[#e0ff55] transition-all rounded-lg"
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
