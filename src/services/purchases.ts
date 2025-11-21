import type {
  CheckoutRequestPayload,
  CheckoutResponsePayload,
  CheckoutSuccessPayload,
  Purchase,
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
    console.log("Checkout response data:", data);
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

interface PurchaseAccessResponse {
  success: boolean;
  data?: {
    purchase: Purchase;
  };
  message?: string;
}

export async function fetchPurchaseAccess(
  purchaseId: string,
  buyerEmail: string
): Promise<Purchase> {
  const query = new URLSearchParams({
    purchaseId,
    email: buyerEmail,
  });

  const response = await fetch(`/api/purchases/access?${query.toString()}`, {
    method: "GET",
    cache: "no-store",
  });

  let data: PurchaseAccessResponse | null = null;

  try {
    data = (await response.json()) as PurchaseAccessResponse;
  } catch {
    throw new Error("Erro ao processar os dados da compra.");
  }

  if (!response.ok || !data?.success || !data.data?.purchase) {
    throw new Error(data?.message || "Não foi possível recuperar a compra.");
  }

  return data.data.purchase;
}
