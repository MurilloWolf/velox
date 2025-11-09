"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface PurchaseData {
  purchaseId: string;
  productName: string;
  buyerEmail: string;
  timestamp: number;
}

export default function PurchaseSuccessPage() {
  const searchParams = useSearchParams();
  const [isValidAccess, setIsValidAccess] = useState<boolean | null>(null);
  const [purchaseData, setPurchaseData] = useState<PurchaseData | null>(null);

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      setIsValidAccess(false);
      return;
    }

    try {
      const decodedData = JSON.parse(atob(token));

      const currentTime = Date.now();
      const tokenAge = currentTime - decodedData.timestamp;
      const twoHours = 2 * 60 * 60 * 1000;

      if (tokenAge > twoHours) {
        setIsValidAccess(false);
        return;
      }

      setPurchaseData(decodedData);
      setIsValidAccess(true);
    } catch (error) {
      console.error("Token inválido:", error);
      setIsValidAccess(false);
    }
  }, [searchParams]);

  if (isValidAccess === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-[#000c5a] to-black flex items-center justify-center">
        <div className="text-white">Verificando acesso...</div>
      </div>
    );
  }

  if (!isValidAccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-[#000c5a] to-black flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Acesso Negado</h1>
          <p className="text-white/70">
            Este link é inválido ou expirou. Por favor, refaça sua compra ou
            entre em contato conosco.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#000c5a] to-black flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center">
        <div className="space-y-6">
          <div className="text-green-400 text-6xl">✓</div>
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Compra Realizada!
            </h1>
            <p className="text-white/70">
              Hello World! Sua compra foi processada com sucesso.
            </p>
          </div>

          {purchaseData && (
            <div className="space-y-2 text-sm text-white/60 border-t border-white/10 pt-4">
              <p>
                <strong>Produto:</strong> {purchaseData.productName}
              </p>
              <p>
                <strong>Email:</strong> {purchaseData.buyerEmail}
              </p>
              <p>
                <strong>ID da Compra:</strong> {purchaseData.purchaseId}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
