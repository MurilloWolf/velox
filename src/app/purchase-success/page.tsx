"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  CheckCircle,
  Package,
  Mail,
  Hash,
  Sparkles,
  ArrowRight,
} from "lucide-react";

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
  const [isAnimating, setIsAnimating] = useState(false);

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

      setTimeout(() => setIsAnimating(true), 100);
    } catch (error) {
      console.error("Token inválido:", error);
      setIsValidAccess(false);
    }
  }, [searchParams]);

  if (isValidAccess === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-[#000c5a]/80 to-black relative overflow-hidden flex items-center justify-center">
        {/* Background particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 h-32 w-32 bg-[#d5fe46]/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-20 h-40 w-40 bg-[#f05a24]/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/3 h-24 w-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-[#d5fe46]/30 border-t-[#d5fe46] mx-auto mb-4" />
          <p className="text-white/70 text-lg">Verificando acesso...</p>
        </div>
      </div>
    );
  }

  if (!isValidAccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-[#000c5a]/80 to-black relative overflow-hidden flex items-center justify-center">
        {/* Background particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 h-32 w-32 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-20 h-40 w-40 bg-red-400/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative z-10 max-w-md w-full mx-4">
          <div className="bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-[0_25px_80px_-20px_rgba(0,0,0,0.65)]">
            <div className="text-red-400 text-6xl mb-6">⚠️</div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Acesso Negado
            </h1>
            <p className="text-white/70 leading-relaxed">
              Este link é inválido ou expirou. Por favor, refaça sua compra ou
              entre em contato conosco.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#000c5a]/80 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Animated background particles */}
        <div className="absolute top-20 left-20 h-32 w-32 bg-[#d5fe46]/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-40 right-32 h-24 w-24 bg-[#f05a24]/15 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-32 h-40 w-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-20 h-28 w-28 bg-blue-500/15 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "3s" }}
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-[#d5fe46]/5 via-transparent to-[#f05a24]/5 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div
          className={`w-full max-w-2xl transition-all duration-1000 ${
            isAnimating
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.65)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d5fe46]/10 via-transparent to-[#f05a24]/10 rounded-3xl" />

            <div className="relative z-10 text-center space-y-8">
              <div className="relative inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-[#d5fe46]/30 rounded-full blur-xl animate-pulse" />
                <div className="relative bg-gradient-to-br from-[#d5fe46]/20 to-[#d5fe46]/10 backdrop-blur-xl border border-[#d5fe46]/30 rounded-full p-6 shadow-[0_20px_70px_-20px_rgba(213,254,70,0.5)]">
                  <CheckCircle className="w-16 h-16 text-[#d5fe46] drop-shadow-[0_0_8px_rgba(213,254,70,0.8)]" />
                </div>

                <Sparkles
                  className="absolute -top-2 -right-2 w-6 h-6 text-[#d5fe46] animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                />
                <Sparkles
                  className="absolute -bottom-1 -left-1 w-4 h-4 text-[#f05a24] animate-bounce"
                  style={{ animationDelay: "1s" }}
                />
                <Sparkles
                  className="absolute top-2 left-12 w-3 h-3 text-purple-400 animate-bounce"
                  style={{ animationDelay: "1.5s" }}
                />
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#d5fe46] to-[#f05a24] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(213,254,70,0.3)]">
                  Compra Realizada!
                </h1>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#d5fe46]/15 backdrop-blur-sm border border-[#d5fe46]/30 px-4 py-2">
                  <span className="text-[#d5fe46] font-medium">
                    Hello World!
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#d5fe46] animate-pulse" />
                </div>
                <p className="text-white/80 text-lg leading-relaxed max-w-md mx-auto">
                  Sua compra foi processada com sucesso e você já pode acessar
                  seu conteúdo.
                </p>
              </div>
            </div>
          </div>

          {/* Purchase details card */}
          {purchaseData && (
            <div
              className={`mt-6 transition-all duration-1000 delay-300 ${
                isAnimating
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                    <Package className="w-5 h-5 text-[#d5fe46]" />
                  </div>
                  <h3 className="text-white font-semibold text-lg">
                    Detalhes da Compra
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.04] backdrop-blur-sm border border-white/5">
                    <div className="bg-[#d5fe46]/15 backdrop-blur-sm rounded-lg p-2">
                      <Package className="w-4 h-4 text-[#d5fe46]" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-medium">
                        Produto
                      </p>
                      <p className="text-white font-semibold">
                        {purchaseData.productName}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.04] backdrop-blur-sm border border-white/5">
                    <div className="bg-[#f05a24]/15 backdrop-blur-sm rounded-lg p-2">
                      <Mail className="w-4 h-4 text-[#f05a24]" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-medium">Email</p>
                      <p className="text-white font-semibold">
                        {purchaseData.buyerEmail}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.04] backdrop-blur-sm border border-white/5">
                    <div className="bg-purple-500/15 backdrop-blur-sm rounded-lg p-2">
                      <Hash className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-medium">
                        ID da Compra
                      </p>
                      <p className="text-white font-mono text-sm">
                        {purchaseData.purchaseId}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Footer message */}
          <div
            className={`mt-8 text-center transition-all duration-1000 delay-600 ${
              isAnimating
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }`}
          >
            <p className="text-white/50 text-sm">
              Você receberá um email de confirmação em breve
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
