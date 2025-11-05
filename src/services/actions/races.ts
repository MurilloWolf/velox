"use server";

import type {
  FetchRacesResult,
  RaceApiItem,
  RaceApiResponse,
  RaceEvent,
} from "@/types/race";
import ENDPOINTS from "../config";

const formatDescription = (race: RaceApiItem) => {
  const pieces: string[] = [];

  if (race.organization) {
    pieces.push(`Organização: ${race.organization}`);
  }

  return pieces.join(" • ") || "Detalhes adicionais serão divulgados em breve.";
};

const normaliseLocation = (race: RaceApiItem) => {
  if (race.location) {
    return race.location;
  }

  const cityState = [race.city, race.state].filter(Boolean).join(" - ");
  return cityState || "Local a definir";
};

const normaliseTime = (time?: string | null) => {
  if (!time) {
    return "Horário a definir";
  }

  return time;
};

const buildRaceSummary = (race: RaceApiItem): RaceEvent => ({
  id: race.id,
  title: race.title,
  date: race.date,
  time: normaliseTime(race.time),
  location: normaliseLocation(race),
  description: formatDescription(race),
  promoImageUrl: race.promoImageUrl || undefined,
  link: race.link,
  status: race.status,
  distances: race.distances,
});

export async function fetchRacesAction(): Promise<FetchRacesResult> {
  try {
    const response = await fetch(ENDPOINTS.RACES, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Fail on fetch races: ${response.status}`);
    }

    const payload = (await response.json()) as RaceApiResponse;

    if (!payload.success || !Array.isArray(payload.data)) {
      throw new Error("Invalid response received from race API.");
    }
    const races = payload.data.map(buildRaceSummary);
    return { races, error: null };
  } catch (error) {
    console.error("Error loading races:", error);
    return {
      races: null,
      error: "Failed to load races at this time. Please try again later.",
    };
  }
}
