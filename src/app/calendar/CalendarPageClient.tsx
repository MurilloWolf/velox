"use client";

import { useMemo, useState } from "react";
import { EventCalendar } from "@/components/system";
import { Badge, Button, Card, CardHeader } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import type { RaceEvent } from "@/types/race";
import { useI18n } from "@/i18n/useI18n";
import { useCalendarMessages } from "@/i18n/hooks/useCalendarMessages";

interface CalendarPageClientProps {
  races: RaceEvent[];
  error?: string | null;
}

export function CalendarPageClient({ races, error }: CalendarPageClientProps) {
  const maxUpcomingRaces = 5;
  const [selectedRaceId, setSelectedRaceId] = useState<string | null>(null);
  const { locale } = useI18n();
  const messages = useCalendarMessages();
  const dateFormatter = useMemo(
    () => new Intl.DateTimeFormat(locale, { dateStyle: "short" }),
    [locale]
  );

  const handleViewDetails = (race: RaceEvent) => {
    setSelectedRaceId(race.id);
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 gap-4 lg:gap-6">
        <div className="hidden lg:block lg:col-span-2 xl:col-span-2">
          <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 sticky top-4">
            <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
              {messages.upcoming.title}
            </h3>
            <div className="space-y-3">
              {races?.slice(0, maxUpcomingRaces).map((race) => (
                <Card
                  key={race.id}
                  className="bg-white/3 p-0 w-full border-white/5 group hover:translate-x-[6px] transition-transform hover:shadow-[0_0_10px_rgba(213,254,70,0.6)]"
                >
                  <div className="flex flex-row gap-2 justify-center">
                    <div className="flex flex-col w-full p-3 lg:p-4">
                      <CardHeader className="p-0">
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="text-sm lg:text-lg font-semibold text-white line-clamp-2">
                            {race.title}
                          </h4>
                          <p className="text-white/80 text-xs font-mono whitespace-nowrap">
                            {dateFormatter.format(new Date(race.date))}
                          </p>
                        </div>
                        <p className="text-white text-xs -mt-1">
                          {race.city}, {race.state}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {race.distances?.map((distance) => (
                            <Badge
                              key={distance}
                              className="inline-block bg-transparent border border-[#D5FE46]/20 text-[#D5FE46]/80 text-xs px-2 py-1 rounded-full"
                            >
                              {distance}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
                      <div className="hidden py-3 group-hover:block">
                        <Button
                          className="text-black bg-[#D5FE46] hover:bg-[#D5FE46]/80 justify-center items-center inline-flex w-full text-sm"
                          onClick={() => handleViewDetails(race)}
                        >
                          {messages.upcoming.viewDetailsLabel}{" "}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <main
          id="conteudo-principal"
          className="col-span-1 lg:col-span-3 xl:col-span-3 w-full bg-black/10 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-2xl min-h-screen lg:min-h-0"
        >
          <EventCalendar
            races={races ?? []}
            error={error}
            selectedRaceId={selectedRaceId}
            onRaceSelected={setSelectedRaceId}
          />
        </main>
      </div>
    </div>
  );
}
