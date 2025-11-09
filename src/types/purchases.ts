import { Product } from "./products";

export type PaymentProvider = "stripe" | "mercado_pago";

export type PurchaseStatus =
  | "PENDING"
  | "PAID"
  | "FAILED"
  | "REFUNDED"
  | "EXPIRED";

export interface PurchaseIntent {
  clientSecret: string;
  paymentIntentId: string;
}

export interface Purchase {
  id: string;
  productId: string;
  buyerEmail?: string | null;
  buyerName?: string | null;
  pricePaidCents: number;
  currency: string;
  isFree: boolean;
  status: PurchaseStatus;
  createdAt: string;
  paidAt?: string | null;
  product: Product;
  deliveryLink?: string | null;
}

export interface CheckoutRequestPayload {
  productId: string;
  buyerEmail: string;
  buyerName?: string;
  paymentProvider?: PaymentProvider;
}

export interface CheckoutSuccessPayload {
  success: true;
  message: string;
  data: {
    purchase: Purchase;
    requiresPayment: boolean;
    paymentProvider?: PaymentProvider;
    intent?: PurchaseIntent;
  };
}

export interface CheckoutErrorPayload {
  success: false;
  message: string;
  error?: string;
}

export type CheckoutResponsePayload =
  | CheckoutSuccessPayload
  | CheckoutErrorPayload;
