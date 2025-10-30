"use server";

import {
  ProductApiResponse,
  Product,
  FetchProductsResult,
} from "@/types/products";
import ENDPOINTS from "../config";

const buildProductSummary = (product: Product): Product => ({
  id: product.id,
  title: product.title,
  subtitle: product.subtitle,
  driveLink: product.driveLink,
  notionLink: product.notionLink,
  imageLink: product.imageLink,
  priceCents: product.priceCents,
  currency: product.currency,
  isFree: product.isFree,
  isAvailable: product.isAvailable,
  categories: product.categories,
  createdAt: product.createdAt,
  updatedAt: product.updatedAt,
});

export async function fetchAvailableProducts(): Promise<FetchProductsResult> {
  try {
    const response = await fetch(`${ENDPOINTS.PRODUCTS}/available`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Fail on fetch products: ${response.status}`);
    }

    const payload = (await response.json()) as ProductApiResponse;

    if (!payload.success || !Array.isArray(payload.data)) {
      throw new Error("Invalid response received from product API.");
    }

    const products = payload.data.map(buildProductSummary);
    return { products, error: null };
  } catch (error) {
    console.error("Error loading products:", error);
    return {
      products: null,
      error: "Failed to load products at this time. Please try again later.",
    };
  }
}
