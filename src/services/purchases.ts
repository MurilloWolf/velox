import type {
  CheckoutRequestPayload,
  CheckoutResponsePayload,
  CheckoutSuccessPayload,
} from "@/types/purchases";

export class CheckoutError extends Error {
  status: number;
  payload: CheckoutResponsePayload | null;

  constructor(
    message: string,
    status: number,
    payload: CheckoutResponsePayload | null = null
  ) {
    super(message);
    this.name = "CheckoutError";
    this.status = status;
    this.payload = payload;
  }
}

export async function checkoutPurchase(
  payload: CheckoutRequestPayload
): Promise<CheckoutSuccessPayload> {
  const response = await fetch("/api/purchases/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  let data: CheckoutResponsePayload | null = null;

  try {
    data = (await response.json()) as CheckoutResponsePayload;
  } catch {
    throw new CheckoutError(
      "Erro ao processar a resposta do checkout.",
      response.status || 500
    );
  }

  if (!response.ok || !data.success) {
    throw new CheckoutError(
      data?.message || "Não foi possível realizar o checkout.",
      response.status,
      data
    );
  }

  return data;
}
