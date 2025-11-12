import Image from "next/image";
import {
  CheckCircle2,
  ExternalLink,
  FileSpreadsheet,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/products";
import type { CheckoutSuccessPayload } from "@/types/purchases";
import { getProductPreviewUrl, getProductDownloadUrl } from "@/lib/imageUtils";

interface PurchaseSuccessStateProps {
  product: Product;
  checkoutResult: CheckoutSuccessPayload["data"];
  customerEmail: string;
  accentColor?: "green" | "yellow"; // green para free, yellow para premium
  onComplete: () => void;
  title?: string;
  subtitle?: string;
}

export default function PurchaseSuccessState({
  product,
  checkoutResult,
  customerEmail,
  accentColor = "green",
  onComplete,
  title = "Conteúdo liberado!",
  subtitle = "Você já pode acessar os materiais pelos links abaixo.",
}: PurchaseSuccessStateProps) {
  const resolvedProduct = checkoutResult?.purchase.product ?? product;
  const buyerEmail = checkoutResult?.purchase.buyerEmail ?? customerEmail;
  const deliveryLink = checkoutResult?.purchase.deliveryLink;
  const imageLink = resolvedProduct.imageLink;

  const colors = {
    green: {
      ringFrom: "from-green-400/20",
      ringTo: "to-green-500/10",
      border: "border-green-400/30",
      shadow: "shadow-[0_20px_70px_-20px_rgba(74,222,128,0.35)]",
      icon: "text-green-400",
      title: "text-green-400",
      email: "text-green-200",
      primaryBtn: "bg-green-400/15 text-green-200 hover:bg-green-400/25",
      secondaryBtn: "bg-white/10 text-white hover:bg-white/20",
      completeBtn:
        "border-green-400/40 text-green-200 hover:bg-green-400/10 hover:text-green-100",
    },
    yellow: {
      ringFrom: "from-[#d5fe46]/20",
      ringTo: "to-[#f05a24]/10",
      border: "border-[#d5fe46]/30",
      shadow: "shadow-[0_25px_80px_-20px_rgba(213,254,70,0.3)]",
      icon: "text-[#d5fe46]",
      title: "text-[#d5fe46]",
      email: "text-[#d5fe46]",
      primaryBtn: "bg-[#d5fe46]/15 text-[#d5fe46] hover:bg-[#d5fe46]/25",
      secondaryBtn: "bg-[#f05a24]/15 text-[#f6ff8d] hover:bg-[#f05a24]/20",
      completeBtn:
        "bg-gradient-to-r from-[#d5fe46] via-[#f6ff8d] to-[#f05a24] hover:from-[#f6ff8d] hover:via-[#d5fe46] hover:to-[#f05a24] text-black font-bold shadow-[0_12px_40px_rgba(240,90,36,0.35)]",
    },
  };

  const colorScheme = colors[accentColor];

  return (
    <div className="space-y-8 py-10 px-4 sm:px-6">
      <div className="text-center space-y-4">
        <div
          className={`rounded-full w-20 h-20 bg-gradient-to-br ${colorScheme.ringFrom} ${colorScheme.ringTo} backdrop-blur-xl ${colorScheme.border} flex items-center justify-center mx-auto ${colorScheme.shadow}`}
        >
          <CheckCircle2
            className={`w-10 h-10 ${colorScheme.icon} drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]`}
          />
        </div>
        <div className="space-y-3">
          <h3 className={`text-2xl font-bold ${colorScheme.title}`}>{title}</h3>
          <p className="text-slate-200 text-base leading-relaxed max-w-2xl mx-auto">
            Enviamos os detalhes para{" "}
            <strong className={colorScheme.email}>{buyerEmail}</strong> e{" "}
            {subtitle}
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl bg-white/[0.05] border border-white/10 backdrop-blur-xl p-6 space-y-5 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.65)]">
          <div>
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <ExternalLink className={`w-5 h-5 ${colorScheme.icon}`} />
              Link de acesso
            </h4>
            <p className="text-sm text-white/60 mt-1">
              Acesse o conteúdo completo através do link de entrega.
            </p>
          </div>
          <div className="space-y-3">
            {deliveryLink ? (
              <Button
                asChild
                className={`cursor-pointer w-full justify-start gap-3 rounded-2xl ${colorScheme.primaryBtn}`}
                variant="outline"
              >
                <a
                  href={deliveryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  Acessar conteúdo
                </a>
              </Button>
            ) : (
              <p className="text-sm text-white/50">
                Link de entrega não disponível.
              </p>
            )}
            {imageLink ? (
              <Button
                asChild
                className={`cursor-pointer w-full justify-start gap-3 rounded-2xl ${colorScheme.secondaryBtn}`}
                variant="outline"
              >
                <a
                  href={getProductDownloadUrl(imageLink)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4" />
                  Baixar visualização (PNG)
                </a>
              </Button>
            ) : (
              <p className="text-sm text-white/50">
                Visualização da planilha não disponível.
              </p>
            )}
          </div>
        </div>

        <div className="rounded-3xl bg-white/[0.05] border border-white/10 backdrop-blur-xl p-6 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.65)]">
          {resolvedProduct.imageLink ? (
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={getProductPreviewUrl(resolvedProduct.imageLink)}
                alt={resolvedProduct.title}
                width={560}
                height={360}
                className="w-full h-auto object-cover"
              />
            </div>
          ) : (
            <div className="flex h-full min-h-[200px] flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-black/40">
              <FileSpreadsheet className={`w-10 h-10 ${colorScheme.icon}/80`} />
              <p className="text-sm text-white/60">
                Visualização indisponível no momento
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-xs text-white/50">
          Caso precise de suporte, responda o email recebido com sua dúvida.
        </p>
        <Button
          onClick={onComplete}
          variant="outline"
          className={`cursor-pointer rounded-2xl ${colorScheme.completeBtn}`}
        >
          {accentColor === "green" ? "Fechar" : "Finalizar"}
        </Button>
      </div>
    </div>
  );
}
