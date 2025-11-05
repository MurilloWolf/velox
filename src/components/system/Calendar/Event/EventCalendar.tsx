"use client";

import { useMemo, useState } from "react";
import { Calendar } from "../Calendar";
import { MonthSelector } from "../MonthSelector";
import { ListModal, Detail } from "./index";

import type { Event } from "../types";
import type { RaceEvent } from "@/types/race";

interface EventCalendarProps {
  races: RaceEvent[];
  error?: string | null;
}

const toEvent = (race: RaceEvent): Event | null => {
  const date = new Date(race.date);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return {
    id: race.id,
    title: race.title,
    date,
    time: race.time,
    organization: race.organization,
    location: race.location,
    attendees: [],
    link: race.link,
    status: race.status,
    distances: race.distances,
    promoImageUrl: race.promoImageUrl,
    city: race.city,
    uf: race.state,
  };
};

export function EventCalendar({ races, error }: EventCalendarProps) {
  const events = useMemo(
    () => races.map(toEvent).filter((event): event is Event => Boolean(event)),
    [races]
  );

  const [selectedDate, setSelectedDate] = useState(() => new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedDayEvents, setSelectedDayEvents] = useState<Event[] | null>(
    null
  );
  const [showEventList, setShowEventList] = useState(false);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleViewMoreClick = (events: Event[]) => {
    setSelectedDayEvents(events);
    setShowEventList(true);
  };

  const handleEventFromListClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleCloseEventDetails = () => {
    if (showEventList) {
      setSelectedEvent(null);
    } else {
      setSelectedEvent(null);
      setSelectedDayEvents(null);
    }
  };

  const handleCloseEventList = () => {
    setShowEventList(false);
    setSelectedDayEvents(null);
    setSelectedEvent(null);
  };

  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 sm:gap-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.05] px-3 py-3 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.65)] sm:px-4 sm:py-4">
          <MonthSelector
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
          />
        </div>
        <Calendar
          selectedDate={selectedDate}
          events={events}
          onEventClick={handleEventClick}
          onViewMoreClick={handleViewMoreClick}
        />
        {error && (
          <div className="rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        )}
        {!error && events.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-5 text-sm text-white/70">
            Nenhuma corrida encontrada para os próximos meses. Volte mais tarde
            para conferir novas atualizações.
          </div>
        )}
      </div>

      <ListModal
        isOpen={showEventList && !selectedEvent}
        onClose={handleCloseEventList}
        events={selectedDayEvents || []}
        onEventClick={handleEventFromListClick}
      />

      <Detail
        isOpen={!!selectedEvent}
        onClose={handleCloseEventDetails}
        event={selectedEvent}
      />
    </section>
  );
}
