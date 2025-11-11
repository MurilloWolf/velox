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
  AlertTriangle,
  UserCircle2,
  Send,
  ArrowLeft,
  ExternalLink,
  Download,
} from "lucide-react";
import { MashGradiant } from "@/components/system";
import { Badge } from "@/components/ui";
import Link from "next/link";

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
      <div className="min-h-screen bg-gradient-to-br relative overflow-hidden flex items-center justify-center">
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
      <MashGradiant>
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 h-32 w-32 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-20 right-20 h-40 w-40 bg-red-400/15 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>

          <div className="relative z-10 max-w-md w-full mx-4">
            <div className="bg-black/40 backdrop-blur-xl  rounded-xl p-8 text-center shadow-[0_25px_80px_-20px_#ff000050]">
              <div className="text-red-400 text-6xl mb-6 w-full flex justify-center">
                <AlertTriangle className="w-16 h-16" />
              </div>
              <h2 className="text-red-400 text-3xl font-bold">Acesso Negado</h2>
              <p className="text-white/70 leading-relaxed font-semibold">
                Este link é inválido ou expirou.
              </p>
              <div className="relative z-10 space-y-5 mt-12">
                <div className="space-y-4 text-sm text-white/80">
                  <div className="flex items-start gap-4 p-2 md:p-3 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/5 hover:bg-white/[0.08] transition-all duration-300">
                    <Mail className="w-5 h-5 text-[#d5fe46] mt-1 flex-shrink-0 drop-shadow-[0_0_4px_#d5fe46]" />
                    <div className="text-left">
                      <p className="font-semibold text-md  text-white/90">
                        Verifique seu email
                      </p>
                      <p className="text-xs md:text-sm text-white/60">
                        Todos os produtos são enviados por email.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-2 md:p-3 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/5 hover:bg-white/[0.08] transition-all duration-300">
                    <Send className="w-5 h-5 text-[#d5fe46] mt-1 flex-shrink-0 drop-shadow-[0_0_4px_#d5fe46]" />
                    <div className="text-left">
                      <p className="font-semibold text-md  text-white/90">
                        Verifique a caixa de spam
                      </p>
                      <p className="text-xs md:text-sm text-white/60">
                        Em alguns casos, nossos emails podem ir para a caixa de
                        spam.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-2 md:p-3 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/5 hover:bg-white/[0.08] transition-all duration-300">
                    <UserCircle2 className="w-5 h-5 text-[#d5fe46] mt-1 flex-shrink-0 drop-shadow-[0_0_4px_#d5fe46]" />
                    <div className="text-left">
                      <p className="font-semibold text-md  text-white/90">
                        Se o problema persistir, contate o suporte
                      </p>
                      <p className="text-xs md:text-sm text-white/60">
                        velox.running.app@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MashGradiant>
    );
  }

  return (
    <MashGradiant>
      <div className="min-h-screen  relative overflow-hidden bg-black/30">
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
          <div
            className={`w-full max-w-2xl transition-all duration-1000 ${
              isAnimating
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="bg-white/5 backdrop-blur-xl  rounded-xl p-8 md:p-12 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.65)] relative overflow-hidden">
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
                </div>

                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#d5fe46] to-[#f05a24] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(213,254,70,0.3)]">
                    Compra Realizada!
                  </h2>

                  <p className="text-white/80 text-lg leading-relaxed max-w-md mx-auto">
                    Sua compra foi processada com sucesso e você já pode acessar
                    seu conteúdo.
                  </p>
                </div>
              </div>
            </div>
            {purchaseData && (
              <div
                className={`mt-6 transition-all duration-1000 delay-300 ${
                  isAnimating
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                {" "}
                <div className="bg-white/5 backdrop-blur-xl mb-4  rounded-xl p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
                  <div className="mb-4">
                    <h4 className="text-white font-semibold text-2xl flex items-center gap-2">
                      Como acessar seu produto
                    </h4>
                    <p className="text-white/70">
                      Todos os produtos são entregues por email
                    </p>
                  </div>
                  <div className="p-2 mt-4">
                    <h3 className="text-lg text-[#d5fe46] font-semibold">
                      <Link
                        href={
                          "https://docs.google.com/spreadsheets/d/1A2B3C4D5E6F7G8H9I0J/edit?usp=sharing"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center  hover:scale-110 transition-transform duration-200"
                      >
                        Google Sheets
                        <ExternalLink className=" ml-2 w-4 h-4 " />
                      </Link>
                    </h3>
                    <p className="text-white/70">
                      Fazer a cópia para seu prórpio drive ou baixar a planilha
                      para seu computador/celulcar
                    </p>
                  </div>
                  <div className="p-2 mt-4">
                    <h3 className="text-lg text-[#d5fe46] font-semibold">
                      <div className="block items-center gap-2 w-fit hover:scale-110 transition-transform duration-200 cursor-pointer">
                        Download da Imagem
                        <Download className=" ml-2 w-4 h-4 inline-block " />
                      </div>
                    </h3>
                    <p className="text-white/70 text-xs">
                      A imagem da planilha fica disponivel somente para download
                      por um tempo limitado, caso deseje fazer o download
                      novamente entre em contato com nosso suporte
                    </p>
                  </div>
                </div>
                {/* Details */}
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-white/3 backdrop-blur-sm rounded-lg p-2">
                      <Package className="w-8 h-8 text-[#d5fe46]" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-white font-semibold text-lg">
                        Detalhes da Compra
                      </h3>
                      <Badge className="text-xs bg-transparent text-[#d5fe46] border border-[#d5fe46]/30">
                        <Hash className="w-4 h-4 text-[#d5fe46]" />

                        {purchaseData.purchaseId
                          .trim()
                          .slice(0, 8)
                          .toUpperCase()}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/3 backdrop-blur-sm ">
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

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/3 backdrop-blur-sm ">
                      <div className="bg-[#f05a24]/15 backdrop-blur-sm rounded-lg p-2">
                        <Mail className="w-4 h-4 text-[#f05a24]" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm font-medium">
                          Entregue para
                        </p>
                        <p className="text-white font-semibold">
                          {purchaseData.buyerEmail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Alert */}
                <div className="mt-12 lg:col-span-2 rounded-xl p-4 sm:p-6 bg-white/5 backdrop-blur-xl shadow-[0_25px_80px_-20px_rgba(240,90,36,0.35)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f05a24]/15 via-transparent to-red-500/12 rounded-xl" />
                  <div className="relative z-10">
                    <h5 className="font-bold text-red-400 mb-3 flex items-center gap-2 text-sm">
                      <AlertTriangle className="w-12 h-12 text-red-400" />
                      Se algum link não estiver funcionando ou não recebeu o
                      email com o seu produto solicite o reenvio:
                    </h5>
                    <p className="inline-flex gap-2 text-red-300/90 font-normal text-sm leading-relaxed">
                      Entre em contato pelo email
                      <span className="text-red-400 font-semibold">
                        velox.running.app@gmail.com
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MashGradiant>
  );
}
