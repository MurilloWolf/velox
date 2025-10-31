"use client";

import { useState } from "react";
import { Download, ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/products";

interface FreeContentProps {
  product: Product;
  onComplete?: () => void;
}

export default function FreeContent({ product, onComplete }: FreeContentProps) {
  const [isAccessing, setIsAccessing] = useState(false);
  const [hasAccessed, setHasAccessed] = useState(false);

  const handleAccess = async () => {
    setIsAccessing(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (product.driveLink) {
        window.open(product.driveLink, "_blank", "noopener,noreferrer");
      }
      if (product.notionLink) {
        window.open(product.notionLink, "_blank", "noopener,noreferrer");
      }

      setHasAccessed(true);

      setTimeout(() => {
        onComplete?.();
      }, 2000);
    } catch (error) {
      console.error("Erro ao acessar conteúdo:", error);
    } finally {
      setIsAccessing(false);
    }
  };

  if (hasAccessed) {
    return (
      <div className="text-center space-y-4 py-8">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto" />
        <div>
          <h3 className="text-lg font-semibold text-green-400">
            Conteúdo Acessado com Sucesso!
          </h3>
          <p className="text-slate-300 mt-2">
            Os links foram abertos em novas abas. Você pode fechar esta janela.
          </p>
        </div>
      </div>
    );
  }

  return <div className="space-y-6"></div>;
}
