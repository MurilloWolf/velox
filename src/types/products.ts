export interface Product {
  id: string;
  title: string;
  subtitle: string;
  imageLink: string;
  driveLink?: string | null;
  priceCents: number;
  currency: string;
  isFree: boolean;
  isAvailable: boolean;
  categories: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductApiResponse {
  success: boolean;
  data?: Product[];
  count?: number;
}

export type FetchProductsResult = {
  products: Product[] | null;
  error: string | null;
};
