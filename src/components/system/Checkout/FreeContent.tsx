"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  CheckCircle,
  Download,
  ExternalLink,
  FileSpreadsheet,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Product } from "@/types/products";
import type { CheckoutSuccessPayload } from "@/types/purchases";
import { checkoutPurchase, CheckoutError } from "@/services/purchases";
import useAnalytics from "@/tracking/useAnalytics";
import { getProductPreviewUrl } from "@/lib/imageUtils";
import { generatePurchaseSuccessUrl } from "@/lib/purchaseUtils";
import { LoadingState, ErrorDisplay } from "./shared";

type FreeCustomerInfo = {
  name: string;
  email: string;
};

interface FreeContentProps {
  product: Product;
  onComplete?: () => void;
  onProcessingChange?: (isProcessing: boolean) => void;
}

export default function FreeContent({
  product,
  onComplete,
  onProcessingChange,
}: FreeContentProps) {
  const [isAccessing, setIsAccessing] = useState(false);
  const [hasAccessed, setHasAccessed] = useState(false);
  const [previewError, setPreviewError] = useState(false);
  const [checkoutResult, setCheckoutResult] = useState<
    CheckoutSuccessPayload["data"] | null
  >(null);
  const [customerInfo, setCustomerInfo] = useState<FreeCustomerInfo>({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState<Partial<FreeCustomerInfo>>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const { trackFormSubmit } = useAnalytics();

  console.log("Product in FreeContent:", product);

  const contentReceived = [
    {
      title: "Conteúdo completo",
      description: "Todo o material organizado e pronto para uso",
    },
    {
      title: "Formato acessível",
      description: "Disponível em formato digital otimizado",
    },
    {
      title: "Atualizações vitalícias",
      description: "Sempre que houver melhorias, você recebe automaticamente",
    },
  ];

  const howToReceive = [
    { method: "Link abre automaticamente em nova aba", icon: ExternalLink },
    { method: "Faça download ou cópia do material", icon: Download },
    { method: "Salve o email para contato se precisar de suporte", icon: Mail },
  ];

  const validateForm = () => {
    const newErrors: Partial<FreeCustomerInfo> = {};
    let firstInvalid: keyof FreeCustomerInfo | null = null;

    if (!customerInfo.name.trim()) {
      newErrors.name = "Nome é obrigatório";
      firstInvalid = firstInvalid ?? "name";
    }

    if (!customerInfo.email.trim()) {
      newErrors.email = "Email é obrigatório";
      firstInvalid = firstInvalid ?? "email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)) {
      newErrors.email = "Email inválido";
      firstInvalid = firstInvalid ?? "email";
    }

    setErrors(newErrors);

    if (firstInvalid) {
      const ref = firstInvalid === "name" ? nameInputRef : emailInputRef;
      ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      ref.current?.focus({ preventScroll: true });
      return false;
    }

    return true;
  };

  const handleInputChange = (field: keyof FreeCustomerInfo, value: string) => {
    setCustomerInfo((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleAccess = async () => {
    if (!validateForm()) return;

    setIsAccessing(true);
    onProcessingChange?.(true);
    setErrorMessage(null);
    setCheckoutResult(null);
    setHasAccessed(false);

    try {
      const response = await checkoutPurchase({
        productId: product.id,
        buyerEmail: customerInfo.email.trim(),
        buyerName: customerInfo.name.trim(),
      });

      trackFormSubmit(`form:coach:free_access`, ["email", "name"], false, {
        product_id: product.id,
        product_slug: product.id,
        purchase_id: response.data.purchase.id,
      });

      setCheckoutResult(response.data);
      setHasAccessed(true);
      
      // Notify completion
      onComplete?.();

      // Redirect after showing loading state
      setTimeout(() => {
        const successUrl = generatePurchaseSuccessUrl({
          purchaseId: response.data.purchase.id,
          productName: response.data.purchase.product.title,
          buyerEmail: response.data.purchase.buyerEmail || customerInfo.email,
          driveLink: `https://docs.google.com/spreadsheets/d/${response.data.purchase.product.id}/edit?usp=sharing`,
          imageLink:
            response.data.purchase.product.imageLink ||
            response.data.purchase.deliveryLink ||
            undefined,
        });
        window.location.href = successUrl;
      }, 2000);
    } catch (error) {
      console.error("Erro ao acessar conteúdo:", error);

      const errorMessage = error instanceof Error ? error.message : "";
      const isAlreadyPurchased =
        errorMessage.toLowerCase().includes("purchase already exists") ||
        errorMessage.toLowerCase().includes("já adquiriu") ||
        errorMessage.toLowerCase().includes("already purchased");

      if (isAlreadyPurchased) {
        setErrorMessage("already_purchased");
      } else if (error instanceof CheckoutError) {
        setErrorMessage(error.message);
      } else if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage(
          "Não foi possível liberar o conteúdo. Tente novamente."
        );
      }
    } finally {
      setIsAccessing(false);
      onProcessingChange?.(false);
    }
  };

  if (hasAccessed) {
    const buyerEmail =
      checkoutResult?.purchase.buyerEmail ?? customerInfo.email;

    return (
      <LoadingState
        email={buyerEmail}
        title="Finalizando seu acesso..."
        description="Estamos preparando tudo para você!"
        accentColor="green"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:p-8">
      <div className="space-y-5">
        {product.imageLink && !previewError ? (
          <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl shadow-[0_25px_80px_-20px_rgba(0,0,0,0.75)] border border-white/5">
            <Image
              src={getProductPreviewUrl(product.imageLink)}
              alt={product.title}
              width={640}
              height={400}
              sizes="(max-width: 1024px) 100vw, 600px"
              className="w-full h-auto object-cover"
              onError={() => setPreviewError(true)}
            />
          </div>
        ) : (
          <div className="aspect-video bg-gradient-to-br from-black/40 via-[#000c5a]/20 to-black/60 rounded-3xl flex items-center justify-center border border-white/10 backdrop-blur-xl shadow-[0_25px_80px_-20px_rgba(0,0,0,0.75)]">
            <div className="text-center space-y-2 px-4">
              <FileSpreadsheet className="w-12 h-12 text-green-300/80 mx-auto" />
              <p className="text-sm text-white/60">
                Visualização indisponível no momento
              </p>
            </div>
          </div>
        )}

        <div className="rounded-3xl p-4 sm:p-6 bg-white/[0.06] backdrop-blur-xl shadow-[0_25px_80px_-20px_rgba(0,0,0,0.65)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-300/5 via-transparent to-blue-500/5 rounded-3xl" />
          <div className="relative z-10 space-y-5">
            <div>
              <h4 className="text-white font-semibold text-2xl mb-2">
                O que você recebe
              </h4>
              <p className="text-white/60 text-sm">
                Leve consigo a planilha completa com toda a estrutura necessária
                para seguir o plano gratuitamente.
              </p>
            </div>

            <div className="space-y-3 text-sm text-white/80">
              {contentReceived.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/5"
                >
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 drop-shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
                  <div>
                    <p className="font-semibold text-white/90 text-base">
                      {item.title}
                    </p>
                    <p className="text-sm text-white/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-3xl p-6 sm:p-8 bg-white/[0.06] backdrop-blur-xl shadow-[0_25px_80px_-20px_rgba(0,0,0,0.65)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-300/8 via-transparent to-blue-500/8 rounded-3xl" />
          <div className="relative z-10 space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-3xl font-bold text-green-300 drop-shadow-[0_0_6px_rgba(74,222,128,0.6)]">
                Acesse gratuitamente
              </h3>
              <p className="text-white/70 text-sm">
                Nenhum cadastro ou forma de pagamento necessária. Basta clicar e
                aproveitar.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-white/80 mb-2 block">
                  Seu nome
                </label>
                <Input
                  ref={nameInputRef}
                  type="text"
                  placeholder="Como podemos te chamar?"
                  value={customerInfo.name}
                  onChange={(event) =>
                    handleInputChange("name", event.target.value)
                  }
                  className={`bg-white/[0.08] border-white/15 backdrop-blur-sm text-white placeholder:text-white/50 rounded-2xl h-12 ${
                    errors.name
                      ? "border-red-400 shadow-[0_0_8px_rgba(239,68,68,0.3)]"
                      : "focus:border-green-300/60 focus:shadow-[0_0_8px_rgba(74,222,128,0.2)]"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-2 ml-2">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-semibold text-white/80 mb-2 block">
                  Email para envio
                </label>
                <Input
                  ref={emailInputRef}
                  type="email"
                  placeholder="voce@email.com"
                  value={customerInfo.email}
                  onChange={(event) =>
                    handleInputChange("email", event.target.value)
                  }
                  className={`bg-white/[0.08] border-white/15 backdrop-blur-sm text-white placeholder:text-white/50 rounded-2xl h-12 ${
                    errors.email
                      ? "border-red-400 shadow-[0_0_8px_rgba(239,68,68,0.3)]"
                      : "focus:border-green-300/60 focus:shadow-[0_0_8px_rgba(74,222,128,0.2)]"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-2 ml-2">
                    {errors.email}
                  </p>
                )}
                <p className="text-xs text-white/50 mt-2 ml-2">
                  Usamos esse email para enviar novidades e suporte.
                </p>
              </div>
            </div>

            <Button
              onClick={handleAccess}
              disabled={
                isAccessing ||
                !customerInfo.name.trim() ||
                !customerInfo.email.trim()
              }
              className="cursor-pointer w-full bg-gradient-to-r from-green-300 to-green-500 hover:from-green-400 hover:to-green-300 text-black font-semibold h-14 rounded-2xl text-lg transition-all duration-300 shadow-[0_12px_40px_rgba(74,222,128,0.35)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isAccessing ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Abrindo links...
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  Acessar conteúdo
                </div>
              )}
            </Button>

            <ErrorDisplay
              errorMessage={errorMessage}
              customerEmail={customerInfo.email}
              productTitle={product.title}
              accentColor="green"
            />

            <div className="rounded-2xl bg-white/[0.04] border border-white/5 p-5 space-y-3 text-sm text-white/70">
              <p className="font-semibold text-white flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-green-300" />
                Como aproveitar melhor
              </p>
              <ul className="space-y-2">
                {howToReceive.map((item) => (
                  <li key={item.method} className="flex items-start gap-3">
                    {item.icon && (
                      <item.icon className="w-4 h-4 text-green-200 mt-1 flex-shrink-0" />
                    )}
                    <span>{item.method}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-white/50 text-center">
              * Caso os links não abram, verifique o bloqueio de pop-ups do
              navegador e tente novamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
