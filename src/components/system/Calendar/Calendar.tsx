"use client";

import { EventBadge } from "./Event";
import type { Event } from "./types";

interface CalendarProps {
  selectedDate: Date;
  events: Event[];
  onEventClick: (event: Event) => void;
  onViewMoreClick: (events: Event[]) => void;
}

const WEEKDAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

export function Calendar({
  selectedDate,
  events,
  onEventClick,
  onViewMoreClick,
}: CalendarProps) {
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const startingDayOfWeek = firstDay.getDay();

  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();

  const days: (number | null)[] = [];

  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const eventsByDay = events.reduce((acc, event) => {
    const eventDate = event.date;
    if (eventDate.getMonth() === month && eventDate.getFullYear() === year) {
      const day = eventDate.getDate();
      if (!acc[day]) {
        acc[day] = [];
      }
      acc[day].push(event);
    }
    return acc;
  }, {} as Record<number, Event[]>);

  const handleDayClick = (day: number) => {
    const dayEvents = eventsByDay[day];
    if (dayEvents && dayEvents.length >= 3) {
      onViewMoreClick(dayEvents);
    }
  };

  const today = new Date();
  const isSameDay = (day: number) =>
    today.getFullYear() === year &&
    today.getMonth() === month &&
    today.getDate() === day;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl shadow-[0_25px_80px_-20px_rgba(0,0,0,0.75)]">
      <div className="overflow-hidden">
        <div className="overflow-x-auto md:overflow-visible">
          <div className="min-w-[560px] lg:min-w-0">
            <div className="grid grid-cols-7 border-b rounded-t-3xl border-white/10 bg-white/[0.08]">
              {WEEKDAYS.map((day) => (
                <div
                  key={day}
                  className="px-2 py-2 text-center text-[0.7rem] font-semibold uppercase tracking-wide text-white/70 md:text-xs"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Grade de dias */}
            <div className="grid grid-cols-7">
              {days.map((day, index) => {
                const dayEvents = day ? eventsByDay[day] : [];
                const hasEvents = dayEvents && dayEvents.length > 0;
                const showViewMore = dayEvents && dayEvents.length >= 3;

                const isToday = day ? isSameDay(day) : false;

                return (
                  <div
                    key={index}
                    className={`min-h-[88px] border-b border-r border-white/10 px-2 py-2 transition-colors md:min-h-[110px] ${
                      isToday ? "bg-[#d5fe46]/30 " : "hover:bg-white/[0.08]"
                    }`}
                    onClick={() => day && handleDayClick(day)}
                  >
                    {day && (
                      <>
                        <div className="mb-2 flex items-center justify-between text-sm font-semibold text-white">
                          <span
                            className={`flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                              isToday
                                ? "bg-white/20 text-white shadow-lg shadow-primary/30"
                                : "bg-white/10 text-white/90"
                            }`}
                          >
                            {day}
                          </span>
                        </div>
                        <div className="space-y-1">
                          {showViewMore ? (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onViewMoreClick(dayEvents);
                              }}
                              className="w-full cursor-pointer rounded-md border border-[#d5fe46]/80 bg-[#d5fe46] px-3 py-2 text-left text-[0.8rem] font-medium text-black transition-colors hover:bg-[#d5fe46]/80"
                            >
                              Ver mais ({dayEvents.length})
                            </button>
                          ) : (
                            hasEvents &&
                            dayEvents.slice(0, 2).map((event) => (
                              <EventBadge
                                key={event.id}
                                event={event}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onEventClick(event);
                                }}
                              />
                            ))
                          )}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
