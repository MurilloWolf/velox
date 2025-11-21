import { NextRequest, NextResponse } from "next/server";

import ENDPOINTS from "@/services/config";

const resolveFrontendToken = () => {
  if (process.env.NODE_ENV === "development") {
    return process.env.FRONTEND_BEARER_TOKEN_DEV;
  }

  return process.env.FRONTEND_BEARER_TOKEN;
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const purchaseId = searchParams.get("purchaseId");
  const email = searchParams.get("email");

  if (!purchaseId || !email) {
    return NextResponse.json(
      {
        success: false,
        message: "purchaseId and email are required",
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

  const backendUrl = new URL(
    `${ENDPOINTS.PURCHASES}/${purchaseId}/access`
  );
  backendUrl.searchParams.set("email", email);

  let backendResponse: Response;
  try {
    backendResponse = await fetch(backendUrl.toString(), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });
  } catch (error) {
    console.error("[Purchase access] Failed to reach backend:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to reach purchase service",
      },
      { status: 502 }
    );
  }

  let payload: unknown;
  try {
    payload = await backendResponse.json();
  } catch (error) {
    console.error(
      "[Purchase access] Failed to parse backend response:",
      error
    );
    return NextResponse.json(
      {
        success: false,
        message: "Invalid response received from purchase service",
      },
      { status: 502 }
    );
  }

  return NextResponse.json(payload, { status: backendResponse.status });
}

