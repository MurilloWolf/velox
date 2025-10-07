"use server";

import type { RaceEvent } from "@/types/race";

const RACES_ENDPOINT = "https://dash-bot-api.fly.dev/api/races";

type RaceApiItem = {
  id: string;
  title: string;
  organization?: string;
  distances?: string[];
  date: string;
  location?: string;
  city?: string;
  state?: string;
  link?: string;
  time?: string | null;
  status?: string;
};

type RaceApiResponse = {
  success: boolean;
  data?: RaceApiItem[];
};

export type FetchRacesResult =
  | { races: RaceEvent[]; error: null }
  | { races: null; error: string };

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
  link: race.link,
  status: race.status,
  distances: race.distances,
});

export async function fetchRacesAction(): Promise<FetchRacesResult> {
  try {
    const response = await fetch(RACES_ENDPOINT, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Falha ao buscar corridas: ${response.status}`);
    }

    const payload = (await response.json()) as RaceApiResponse;

    if (!payload.success || !Array.isArray(payload.data)) {
      throw new Error("Resposta inválida recebida da API de corridas.");
    }

    const races = payload.data.map(buildRaceSummary);
    return { races, error: null };
  } catch (error) {
    console.error("Erro ao carregar corridas:", error);
    return {
      races: null,
      error: "Não foi possível carregar as corridas no momento. Tente novamente mais tarde.",
    };
  }
}
