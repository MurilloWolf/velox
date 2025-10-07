"use client";

import type React from "react";

import type { Event } from "../types";

interface EventBadgeProps {
  event: Event;
  onClick: (e: React.MouseEvent) => void;
}

export default function EventBadge({ event, onClick }: EventBadgeProps) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer w-full text-left px-2 py-1 rounded text-xs bg-[#d5fe46] text-black font-medium hover:bg-[#d5fe46]/85 transition-colors truncate"
    >
      <span className="font-medium">{event.time}</span> {event.title}
    </button>
  );
}
