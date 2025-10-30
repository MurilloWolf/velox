"use server";

import { TrackEventParams } from "@/tracking/useAnalytics";

interface TrackApiResponse {
  success: boolean;
}

const TRACKEVENTS_ENDPOINT =
  "https://dash-bot-api.fly.dev/api/analytics/events";

const TRACKEVENTS_ENDPOINT_LOCAL = "http://localhost:4000/api/analytics/events";

export async function sendTrackEvent(
  trackEvent: TrackEventParams
): Promise<{ success: true } | { success: false; error: string }> {
  const TRACK_ENDPOINT =
    process.env.NODE_ENV === "development"
      ? TRACKEVENTS_ENDPOINT_LOCAL
      : TRACKEVENTS_ENDPOINT;

  const BEARER_TOKEN =
    process.env.NODE_ENV === "development"
      ? process.env.FRONTEND_BEARER_TOKEN_DEV
      : process.env.FRONTEND_BEARER_TOKEN;

  try {
    const response = await fetch(TRACK_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
      body: JSON.stringify(trackEvent),
      cache: "no-store",
    });

    const data = await response.clone().json();
    console.log(data);

    if (!data.success) {
      throw new Error(`Fail on track data: ${response.status}`);
    }

    const payload = (await response.json()) as TrackApiResponse;

    if (!payload.success) {
      throw new Error("Resposta inválida recebida da API de corridas.");
    }

    console.log("Evento de rastreamento enviado com sucesso.");

    return { success: true };
  } catch (error) {
    console.error("Fail:", error);
    return {
      success: false,
      error:
        "Não foi possível carregar as corridas no momento. Tente novamente mais tarde.",
    };
  }
}
