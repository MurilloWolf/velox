"use client";

import { Product } from "@/types/products";
import FreeContent from "./FreeContent";
import PremiumContent from "./PremiumContent";

interface ProductContentProps {
  product: Product;
  onComplete?: () => void;
  onProcessingChange?: (isProcessing: boolean) => void;
}

export default function ProductContent({
  product,
  onComplete,
  onProcessingChange,
}: ProductContentProps) {
  const handleTransactionComplete = () => {
    onComplete?.();
  };

  const handleTransactionCancel = () => {
    onComplete?.();
  };

  if (product.isFree) {
    return (
      <FreeContent
        product={product}
        onComplete={onComplete}
        onProcessingChange={onProcessingChange}
      />
    );
  }

  return (
    <PremiumContent
      product={product}
      onPurchaseComplete={handleTransactionComplete}
      onCancel={handleTransactionCancel}
      onProcessingChange={onProcessingChange}
    />
  );
}
