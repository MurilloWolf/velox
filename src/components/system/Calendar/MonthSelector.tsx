"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MonthSelectorProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export function MonthSelector({
  selectedDate,
  onDateChange,
}: MonthSelectorProps) {
  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();

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
        className="hover:bg-secondary cursor-pointer"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <div className="text-center">
        <h2 className="text-2xl font-bold">
          {MONTHS[currentMonth]} {currentYear}
        </h2>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={handleNextMonth}
        className="hover:bg-secondary cursor-pointer"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  );
}
