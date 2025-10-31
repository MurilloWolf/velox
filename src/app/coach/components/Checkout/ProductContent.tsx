"use client";

import { Product } from "@/types/products";
import FreeContent from "./FreeContent";
import PremiumContent from "./PremiumContent";

interface ProductContentProps {
  product: Product;
  onComplete?: () => void;
}

export default function ProductContent({
  product,
  onComplete,
}: ProductContentProps) {
  const handleTransactionComplete = () => {
    onComplete?.();
  };

  const handleTransactionCancel = () => {
    onComplete?.();
  };

  if (product.isFree) {
    return <FreeContent product={product} onComplete={onComplete} />;
  }

  return (
    <PremiumContent
      product={product}
      onPurchaseComplete={handleTransactionComplete}
      onCancel={handleTransactionCancel}
    />
  );
}
