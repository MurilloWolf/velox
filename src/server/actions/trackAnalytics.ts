"use server";

import { TrackEventParams } from "@/tracking/use-track";

interface TrackApiResponse {
  success: boolean;
}

const TRACKEVENTS_ENDPOINT =
  "https://dash-bot-api.fly.dev/api/analytics/events";

export async function sendTrackEvent(
  trackEvent: TrackEventParams
): Promise<{ success: true } | { success: false; error: string }> {
  try {
    const response = await fetch(TRACKEVENTS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.FRONTEND_BEARER_TOKEN}`,
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
