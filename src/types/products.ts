export interface Product {
  id: string;
  title: string;
  subtitle: string;
  driveLink: string;
  notionLink: string;
  imageLink: string;
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
