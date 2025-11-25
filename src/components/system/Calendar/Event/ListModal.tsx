"use client";

import { type CSSProperties } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { Event } from "../types";
import { useI18n } from "@/i18n/useI18n";
import { useCalendarMessages } from "@/i18n/hooks/useCalendarMessages";

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
  const { locale } = useI18n();
  const { listModal } = useCalendarMessages();
  const modalSafeArea: CSSProperties = {
    paddingTop: "max(env(safe-area-inset-top), 12px)",
    paddingBottom: "max(env(safe-area-inset-bottom), 12px)",
    paddingLeft: "max(env(safe-area-inset-left), 12px)",
    paddingRight: "max(env(safe-area-inset-right), 12px)",
  };

  if (!isOpen) return null;

  const eventDate = events[0]?.date;
  const formattedDate = eventDate
    ? new Intl.DateTimeFormat(locale, {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
        .format(eventDate)
        .replace(/^./, (char) => char.toUpperCase())
    : "";

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
        }
      }}
    >
      <DialogContent
        showCloseButton={false}
        className="w-full max-w-[min(92vw,900px)] sm:max-w-2xl lg:max-w-3xl max-h-[92vh] overflow-visible border-none bg-transparent p-0 text-white"
        style={modalSafeArea}
      >
        <div className="relative w-full max-h-[90vh] overflow-y-auto sm:overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-black/95 via-black/80 to-black/85 shadow-[0_30px_90px_-25px_rgba(0,0,0,0.85)]">
          <div className="sticky top-0 flex items-center justify-between gap-4 border-b border-white/10 bg-gradient-to-r from-black via-black/80 to-black px-6 py-5">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                {listModal.title}
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

          <div className="max-h-[calc(90vh-132px)] overflow-y-auto px-6 pb-8 pt-6">
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
                        {event.organization}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
