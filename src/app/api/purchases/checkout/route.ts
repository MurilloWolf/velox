import { NextRequest, NextResponse } from "next/server";

import ENDPOINTS from "@/services/config";
import {
  type CheckoutRequestPayload,
  type CheckoutResponsePayload,
} from "@/types/purchases";

const PURCHASE_CHECKOUT_ENDPOINT = `${ENDPOINTS.PURCHASES}/checkout`;

const resolveFrontendToken = () => {
  if (process.env.NODE_ENV === "development") {
    return process.env.FRONTEND_BEARER_TOKEN_DEV;
  }

  return process.env.FRONTEND_BEARER_TOKEN;
};

const buildBackendPayload = (
  body: CheckoutRequestPayload
): CheckoutRequestPayload => {
  const payload: CheckoutRequestPayload = {
    productId: body.productId,
    buyerEmail: body.buyerEmail,
  };

  if (body.buyerName) {
    payload.buyerName = body.buyerName;
  }

  if (body.paymentProvider) {
    payload.paymentProvider = body.paymentProvider;
  }

  return payload;
};

export async function POST(request: NextRequest) {
  let body: CheckoutRequestPayload;

  try {
    body = (await request.json()) as CheckoutRequestPayload;
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid JSON body",
      },
      { status: 400 }
    );
  }

  if (
    !body ||
    typeof body.productId !== "string" ||
    !body.productId.trim() ||
    typeof body.buyerEmail !== "string" ||
    !body.buyerEmail.trim()
  ) {
    return NextResponse.json(
      {
        success: false,
        message: "productId and buyerEmail are required",
      },
      { status: 400 }
    );
  }

  const token = resolveFrontendToken();

  if (!token) {
    return NextResponse.json(
      {
        success: false,
        message: "Frontend token is not configured",
      },
      { status: 500 }
    );
  }

  const backendPayload = buildBackendPayload(body);

  let backendResponse: Response;
  try {
    backendResponse = await fetch(PURCHASE_CHECKOUT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(backendPayload),
      cache: "no-store",
    });
  } catch (error) {
    console.error("[Checkout] Failed to reach backend:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to reach checkout service",
      },
      { status: 502 }
    );
  }

  let payload: CheckoutResponsePayload;

  try {
    payload = (await backendResponse.json()) as CheckoutResponsePayload;
  } catch (error) {
    console.error("[Checkout] Failed to parse backend response:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Invalid response received from checkout service",
      },
      { status: 502 }
    );
  }

  return NextResponse.json(payload, {
    status: backendResponse.status,
  });
}
