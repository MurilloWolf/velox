interface PurchaseTokenData {
  purchaseId: string;
  productName: string;
  buyerEmail: string;
  timestamp: number;
}

/**
 * Generates a purchase token with embedded data and timestamp
 */
export function generatePurchaseToken(
  data: Omit<PurchaseTokenData, "timestamp">
): string {
  const tokenData: PurchaseTokenData = {
    ...data,
    timestamp: Date.now(),
  };

  return btoa(JSON.stringify(tokenData));
}

/**
 * Generates the full URL for the purchase success page with the token as a query parameter
 */
export function generatePurchaseSuccessUrl(
  data: Omit<PurchaseTokenData, "timestamp">
): string {
  const token = generatePurchaseToken(data);
  const baseUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return `${baseUrl}/purchase-success?token=${encodeURIComponent(token)}`;
}
