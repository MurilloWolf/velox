"use client";

import { useMemo, useState, useEffect } from "react";
import { Calendar } from "../Calendar";
import { MonthSelector } from "../MonthSelector";
import { ListModal, Detail } from "./index";

import type { Event } from "../types";
import type { RaceEvent } from "@/types/race";

interface EventCalendarProps {
  races: RaceEvent[];
  error?: string | null;
  selectedRaceId?: string | null;
  onRaceSelected?: (raceId: string | null) => void;
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

export function EventCalendar({
  races,
  error,
  selectedRaceId,
  onRaceSelected,
}: EventCalendarProps) {
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

  useEffect(() => {
    if (selectedRaceId) {
      const event = events.find((e) => e.id === selectedRaceId);
      if (event) {
        setSelectedEvent(event);
        onRaceSelected?.(null);
      }
    }
  }, [selectedRaceId, events, onRaceSelected]);

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
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 sm:gap-4 md:gap-5">
        <div className="rounded-2xl lg:rounded-3xl border border-white/10 bg-white/[0.05] px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.65)]">
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
          <div className="rounded-xl lg:rounded-2xl border border-red-500/40 bg-red-500/10 px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-red-200">
            {error}
          </div>
        )}
        {!error && events.length === 0 && (
          <div className="rounded-xl lg:rounded-2xl border border-white/10 bg-white/[0.08] px-3 py-4 sm:px-4 sm:py-5 text-xs sm:text-sm text-white/70 text-center">
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
