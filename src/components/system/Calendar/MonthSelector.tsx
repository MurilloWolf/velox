"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo } from "react";
import { useI18n } from "@/i18n/useI18n";

interface MonthSelectorProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

export function MonthSelector({
  selectedDate,
  onDateChange,
}: MonthSelectorProps) {
  const { locale } = useI18n();
  const currentMonth = selectedDate.getMonth();
  const monthFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat(locale, {
        month: "long",
        year: "numeric",
      }),
    [locale]
  );
  const monthLabel = monthFormatter
    .format(selectedDate)
    .replace(/^./, (char) => char.toUpperCase());

  const handlePreviousMonth = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(currentMonth - 1);
    onDateChange(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(currentMonth + 1);
    onDateChange(newDate);
  };

  return (
    <div className="flex items-center justify-between rounded-lg p-1 text-white">
      <Button
        variant="ghost"
        size="icon"
        onClick={handlePreviousMonth}
        className="hover:bg-secondary cursor-pointer h-8 w-8 sm:h-10 sm:w-10"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>

      <div className="text-center flex-1">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold truncate">
          {monthLabel}
        </h2>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={handleNextMonth}
        className="hover:bg-secondary cursor-pointer h-8 w-8 sm:h-10 sm:w-10"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>
    </div>
  );
}
