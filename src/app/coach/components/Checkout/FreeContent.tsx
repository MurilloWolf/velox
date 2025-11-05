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

type FreeCustomerInfo = {
  name: string;
  email: string;
};

interface FreeContentProps {
  product: Product;
  onComplete?: () => void;
}

export default function FreeContent({ product, onComplete }: FreeContentProps) {
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

  console.log("Product in FreeContent:", product);

  const contentReceived = [
    {
      title: "Planilha completa",
      description: "Organizada por semanas, com treinos distribuídos",
    },
    {
      title: "Formatos acessíveis",
      description: "Disponível no Google Sheets e Notion",
    },
    {
      title: "Atualizações vitalícias",
      description: "Sempre que houver melhorias, você recebe automaticamente",
    },
  ];

  const howToReceive = [
    { method: "Links abrem em novas abas automaticamente", icon: ExternalLink },
    { method: "Faça uma cópia para o seu drive/notion", icon: Download },
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
    setErrorMessage(null);
    setCheckoutResult(null);
    setHasAccessed(false);

    try {
      const response = await checkoutPurchase({
        productId: product.id,
        buyerEmail: customerInfo.email.trim(),
        buyerName: customerInfo.name.trim(),
      });

      setCheckoutResult(response.data);
      setHasAccessed(true);
    } catch (error) {
      console.error("Erro ao acessar conteúdo:", error);
      if (error instanceof CheckoutError) {
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
    }
  };

  if (hasAccessed) {
    const resolvedProduct = checkoutResult?.purchase.product ?? product;
    const buyerEmail =
      checkoutResult?.purchase.buyerEmail ?? customerInfo.email;
    const driveLink = resolvedProduct.driveLink;
    const notionLink = resolvedProduct.notionLink;
    const imageLink = resolvedProduct.imageLink;

    return (
      <div className="space-y-8 py-10 px-4 sm:px-6">
        <div className="text-center space-y-4">
          <div className="rounded-full w-20 h-20 bg-gradient-to-br from-green-400/20 to-green-500/10 backdrop-blur-xl border border-green-400/30 flex items-center justify-center mx-auto shadow-[0_20px_70px_-20px_rgba(74,222,128,0.35)]">
            <CheckCircle className="w-10 h-10 text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-green-400">
              Conteúdo liberado!
            </h3>
            <p className="text-slate-200 text-base leading-relaxed max-w-2xl mx-auto">
              Enviamos os detalhes para{" "}
              <strong className="text-green-200">{buyerEmail}</strong> e você
              também pode acessar os materiais pelos links abaixo.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-white/[0.05] border border-white/10 backdrop-blur-xl p-6 space-y-5 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.65)]">
            <div>
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-green-300" />
                Links de acesso
              </h4>
              <p className="text-sm text-white/60 mt-1">
                Faça uma cópia para o seu Drive/Notion para preservar o
                conteúdo.
              </p>
            </div>
            <div className="space-y-3">
              {driveLink ? (
                <Button
                  asChild
                  className="cursor-pointer w-full justify-start gap-3 rounded-2xl bg-green-400/15 text-green-200 hover:bg-green-400/25"
                  variant="outline"
                >
                  <a href={driveLink} target="_blank" rel="noopener noreferrer">
                    <FileSpreadsheet className="w-4 h-4" />
                    Abrir no Google Drive
                  </a>
                </Button>
              ) : (
                <p className="text-sm text-white/50">
                  Link do Google Drive não disponível.
                </p>
              )}
              {notionLink ? (
                <Button
                  asChild
                  className="cursor-pointer w-full justify-start gap-3 rounded-2xl bg-cyan-400/10 text-cyan-100 hover:bg-cyan-400/20"
                  variant="outline"
                >
                  <a
                    href={notionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Abrir no Notion
                  </a>
                </Button>
              ) : (
                <p className="text-sm text-white/50">
                  Link do Notion não disponível.
                </p>
              )}
              {imageLink ? (
                <Button
                  asChild
                  className="cursor-pointer w-full justify-start gap-3 rounded-2xl bg-white/10 text-white hover:bg-white/20"
                  variant="outline"
                >
                  <a href={imageLink} target="_blank" rel="noopener noreferrer">
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
            {resolvedProduct.imageLink && !previewError ? (
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={resolvedProduct.imageLink}
                  alt={resolvedProduct.title}
                  width={560}
                  height={360}
                  className="w-full h-auto object-cover"
                  onError={() => setPreviewError(true)}
                />
              </div>
            ) : (
              <div className="flex h-full min-h-[200px] flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-black/40">
                <FileSpreadsheet className="w-10 h-10 text-green-300/80" />
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
            className="cursor-pointer border-green-400/40 text-green-200 hover:bg-green-400/10 hover:text-green-100 rounded-2xl"
          >
            Fechar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:p-8">
      <div className="space-y-5">
        {product.imageLink && !previewError ? (
          <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl shadow-[0_25px_80px_-20px_rgba(0,0,0,0.75)] border border-white/5">
            <Image
              src={product.imageLink}
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

            {errorMessage ? (
              <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
                {errorMessage}
              </div>
            ) : null}

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
