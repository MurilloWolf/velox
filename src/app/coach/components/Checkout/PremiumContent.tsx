"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  CreditCard,
  Shield,
  CheckCircle2,
  X,
  Mail,
  User,
  ExternalLink,
  FileSpreadsheet,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Product } from "@/types/products";

interface PremiumContentProps {
  product: Product;
  onPurchaseComplete?: () => void;
  onCancel?: () => void;
  onProcessingChange?: (isProcessing: boolean) => void;
}

type PaymentProvider = "stripe" | "mercadopago";

interface CustomerInfo {
  name: string;
  email: string;
}

export default function PremiumContent({
  product,
  onPurchaseComplete,
  onCancel,
  onProcessingChange,
}: PremiumContentProps) {
  const [selectedProvider, setSelectedProvider] =
    useState<PaymentProvider>("stripe");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState<Partial<CustomerInfo>>({});
  const [previewError, setPreviewError] = useState<boolean>(false);
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);

  const contentReceived = [
    {
      title: "Planilha de Treino Personalizada",
      description: "Google Sheets com macros e fórmulas avançadas",
    },
    {
      title: "Planilha para o Notion",
      description: "Uma outra opção caso prefira usar o Notion",
    },
    {
      title: "Acesso Vitalício",
      description: "Sem mensalidades, é seu para sempre",
    },
    {
      title: "Suporte Prioritário",
      description: "Suporte dedicado para dúvidas e assistência",
    },
    {
      title: "PNG da Planilha",
      description: "PNG da planilha para fácil acesso no celular",
    },
  ];

  const howToReceive = [
    { method: "Envio imediato por email após a compra", icon: Mail },
    { method: "Link de acesso", icon: ExternalLink },
  ];

  const formatPrice = (priceCents: number, currency: string) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: currency || "BRL",
    }).format(priceCents / 100);
  };

  const validateForm = (): keyof CustomerInfo | null => {
    const newErrors: Partial<CustomerInfo> = {};
    let firstInvalidField: keyof CustomerInfo | null = null;

    if (!customerInfo.name.trim()) {
      newErrors.name = "Nome é obrigatório";
      firstInvalidField = firstInvalidField ?? "name";
    }

    if (!customerInfo.email.trim()) {
      newErrors.email = "Email é obrigatório";
      firstInvalidField = firstInvalidField ?? "email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)) {
      newErrors.email = "Email inválido";
      firstInvalidField = firstInvalidField ?? "email";
    }

    setErrors(newErrors);
    return firstInvalidField;
  };

  const scrollToField = (field: keyof CustomerInfo) => {
    const fieldRef = field === "name" ? nameInputRef : emailInputRef;
    const element = fieldRef.current;

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.focus({ preventScroll: true });
    }
  };

  const handlePurchase = async () => {
    const firstInvalidField = validateForm();

    if (firstInvalidField) {
      scrollToField(firstInvalidField);
      return;
    }

    setIsProcessing(true);
    onProcessingChange?.(true);
    // TODO: Implementar lógica de pagamento aqui

    setTimeout(() => {
      setIsProcessing(false);
      setShowConfirmation(true);
      onProcessingChange?.(false);
    }, 2000);
  };

  const handleCancel = () => {
    if (!isProcessing) {
      onCancel?.();
      onProcessingChange?.(false);
    }
  };

  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (showConfirmation) {
    return (
      <div className="text-center space-y-6 py-12 max-w-md mx-auto">
        <div className="rounded-full w-20 h-20 bg-gradient-to-br from-[#d5fe46]/20 to-[#d5fe46]/10 backdrop-blur-xl border border-[#d5fe46]/30 flex items-center justify-center mx-auto shadow-[0_25px_80px_-20px_rgba(213,254,70,0.3)]">
          <CheckCircle2 className="w-10 h-10 text-[#d5fe46] drop-shadow-[0_0_8px_#d5fe46]" />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#d5fe46] text-shadow-[0_0_8px_#d5fe46]">
            Compra Realizada com Sucesso!
          </h3>
          <div className="bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-left">
            <p className="text-white/80 leading-relaxed">
              Você receberá um email em{" "}
              <strong className="text-[#d5fe46]">{customerInfo.email}</strong>{" "}
              com os links de acesso em instantes.
            </p>
          </div>
        </div>
        <Button
          onClick={onPurchaseComplete}
          className="bg-gradient-to-r from-[#d5fe46] via-[#f6ff8d] to-[#f05a24] hover:from-[#f6ff8d] hover:via-[#d5fe46] hover:to-[#f05a24] text-black font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 shadow-[0_12px_40px_rgba(240,90,36,0.35)] hover:shadow-[0_16px_56px_rgba(240,90,36,0.45)]"
        >
          Finalizar
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:p-8">
      <div className="space-y-4">
        {previewError ? (
          <div className="aspect-video bg-gradient-to-br from-black/40 via-[#000c5a]/20 to-black/60 rounded-3xl mb-4 flex items-center justify-center border border-white/10 backdrop-blur-xl shadow-[0_25px_80px_-20px_rgba(0,0,0,0.75)]">
            <div className="text-center space-y-2">
              <FileSpreadsheet className="w-12 h-12 text-[#d5fe46]/70 mx-auto" />
              <p className="text-sm text-white/60">
                Preview da Planilha Indisponível
              </p>
            </div>
          </div>
        ) : (
          <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl border border-white/5 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.75)]">
            <Image
              src={""}
              alt="preview planilha de treino"
              width={600}
              height={400}
              sizes="(max-width: 1024px) 100vw, 600px"
              className="w-full h-auto rounded-3xl"
              onError={() => setPreviewError(true)}
            />
          </div>
        )}

        <div className="rounded-3xl p-4 sm:p-6 bg-white/[0.05] backdrop-blur-xl border border-white/5 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#d5fe46]/10 via-transparent to-[#f05a24]/10 rounded-3xl" />
          <div className="relative z-10 space-y-5">
            <h4 className="font-bold text-white text-xl md:text-2xl flex items-center gap-2">
              <span className="text-[#d5fe46] text-shadow-[0_0_8px_#d5fe46]">
                ✨
              </span>
              O que você receberá:
            </h4>
            <div className="space-y-4 text-sm text-white/80">
              {contentReceived.map((item) => (
                <div
                  className="flex items-start gap-4 p-2 md:p-3 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/5 hover:bg-white/[0.08] transition-all duration-300"
                  key={item.title}
                >
                  <CheckCircle2 className="w-5 h-5 text-[#d5fe46] mt-1 flex-shrink-0 drop-shadow-[0_0_4px_#d5fe46]" />
                  <div>
                    <p className="font-semibold text-md md:text-lg text-white/90">
                      {item.title}
                    </p>
                    <p className="text-xs md:text-sm text-white/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl p-4 sm:p-6 bg-white/[0.05] backdrop-blur-xl border border-white/5 shadow-[0_25px_80px_-20px_rgba(213,254,70,0.25)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#d5fe46]/12 via-transparent to-[#f05a24]/12 rounded-3xl" />
          <div className="relative z-10 space-y-4">
            <h4 className="font-bold text-white mb-4 flex items-center gap-2 text-lg md:text-2xl">
              <Mail className="w-6 h-6 text-[#d5fe46] text-shadow-[0_0_8px_#d5fe46]" />
              Como você receberá:
            </h4>
            <div className="space-y-3 text-black/80 font-medium text-sm md:text-md">
              {howToReceive.map((item) => (
                <div
                  className="flex items-center gap-3 p-2 rounded-xl bg-white/5 backdrop-blur-sm"
                  key={item.method}
                >
                  {item.icon && (
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-200 flex-shrink-0" />
                  )}
                  <span className="font-semibold text-gray-200">
                    {item.method}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-3xl p-6 sm:p-8 bg-white/[0.05] backdrop-blur-xl border border-white/5 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.65)] relative overflow-hidden lg:sticky lg:top-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#d5fe46]/10 via-transparent to-[#f05a24]/10 rounded-3xl" />
          <div className="relative z-10">
            <div className="text-center mb-6 sm:mb-8">
              <div className="text-3xl sm:text-4xl font-bold text-[#f6ff8d] mb-3 text-shadow-[0_0_16px_rgba(213,254,70,0.75)]">
                {formatPrice(product.priceCents, product.currency)}
              </div>
              <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
                <Shield className="w-4 h-4 text-[#d5fe46]" />
                Pagamento único, acesso vitalício
              </div>
            </div>

            <div className="space-y-6 mb-6 sm:mb-8">
              <h5 className="font-semibold text-white/90 flex items-center gap-2 text-lg">
                <User className="w-5 h-5 text-[#d5fe46]" />
                Suas informações:
              </h5>

              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Seu nome completo"
                    value={customerInfo.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    ref={nameInputRef}
                    className={`bg-white/[0.08] border-white/20 backdrop-blur-sm text-white placeholder:text-white/50 rounded-2xl h-12 ${
                      errors.name
                        ? "border-red-400 shadow-[0_0_8px_rgba(239,68,68,0.3)]"
                        : "focus:border-[#d5fe46]/50 focus:shadow-[0_0_8px_rgba(213,254,70,0.2)]"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-2 ml-2">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={customerInfo.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    ref={emailInputRef}
                    className={`bg-white/[0.08] border-white/20 backdrop-blur-sm text-white placeholder:text-white/50 rounded-2xl h-12 ${
                      errors.email
                        ? "border-red-400 shadow-[0_0_8px_rgba(239,68,68,0.3)]"
                        : "focus:border-[#d5fe46]/50 focus:shadow-[0_0_8px_rgba(213,254,70,0.2)]"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-2 ml-2">
                      {errors.email}
                    </p>
                  )}
                  <p className="text-xs text-white/50 mt-2 ml-2">
                    Você receberá o produto neste email
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 mb-4">
              <h5 className="font-semibold text-white/90 text-lg">
                Forma de pagamento:
              </h5>

              <Tabs
                value={selectedProvider}
                onValueChange={(value) =>
                  setSelectedProvider(value as PaymentProvider)
                }
              >
                <TabsList className="grid w-full grid-cols-2 bg-white/[0.08] backdrop-blur-sm rounded-2xl border border-white/10">
                  <TabsTrigger
                    value="stripe"
                    className="text-gray-300 flex items-center gap-2 text-sm data-[state=active]:bg-[#d5fe46]/20 data-[state=active]:text-[#d5fe46] data-[state=active]:shadow-[0_0_8px_rgba(213,254,70,0.3)] rounded-xl"
                  >
                    <CreditCard className="w-4 h-4" />
                    Cartão
                  </TabsTrigger>
                  <TabsTrigger
                    value="mercadopago"
                    className="text-gray-300 flex items-center gap-2 text-sm data-[state=active]:bg-[#d5fe46]/20 data-[state=active]:text-[#d5fe46] data-[state=active]:shadow-[0_0_8px_rgba(213,254,70,0.3)] rounded-xl"
                  >
                    <CreditCard className="w-4 h-4" />
                    PIX/MP
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="stripe" className="mt-2">
                  <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-4 h-4 text-[#d5fe46]" />
                      <span className="text-sm font-medium text-white/90">
                        Stripe
                      </span>
                    </div>
                    <p className="text-sm text-white/60">
                      Cartão de crédito/débito internacional
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="mercadopago" className="mt-2">
                  <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-4 h-4 text-[#d5fe46]" />
                      <span className="text-sm font-medium text-white/90">
                        Mercado Pago
                      </span>
                    </div>
                    <p className="text-sm text-white/60">
                      PIX, cartão e outras formas brasileiras
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 sm:p-6 backdrop-blur-sm border border-white/10 mb-8">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-white">Produto</span>
                  <span className="text-white font-medium">
                    {formatPrice(product.priceCents, product.currency)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Processamento</span>
                  <span className="text-white/60">Incluído</span>
                </div>
                <div className="border-t border-white/10 pt-3 mt-3">
                  <div className="flex justify-between items-center font-medium">
                    <span className="text-white/90 text-lg">Total</span>
                    <span className="text-[#d5fe46] text-2xl font-bold text-shadow-[0_0_8px_#d5fe46]">
                      {formatPrice(product.priceCents, product.currency)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                onClick={handlePurchase}
                disabled={
                  isProcessing ||
                  !customerInfo.name.trim() ||
                  !customerInfo.email.trim()
                }
                asChild
                className="cursor-pointer w-full bg-gradient-to-r from-[#d5fe46] via-[#f6ff8d] to-[#f05a24] hover:from-[#f6ff8d] hover:via-[#d5fe46] hover:to-[#f05a24] text-black font-bold py-4 h-14 rounded-2xl text-lg transition-all duration-300 shadow-[0_12px_40px_rgba(240,90,36,0.35)] hover:shadow-[0_16px_56px_rgba(240,90,36,0.45)] disabled:opacity-50 disabled:cursor-not-allowed"
                size="lg"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Processando...
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5" />
                    Finalizar Compra
                  </div>
                )}
              </Button>

              <Button
                onClick={handleCancel}
                disabled={isProcessing}
                variant="outline"
                className="bg-transparent cursor-pointer w-full border-white/20 hover:bg-white/[0.08] text-white/80 hover:text-white rounded-2xl h-12 backdrop-blur-sm transition-all duration-300"
              >
                <X className="w-4 h-4 mr-2" />
                Cancelar
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-white/50 mt-6">
                <Shield className="w-4 h-4 text-[#d5fe46]" />
                Pagamento 100% seguro e criptografado
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 rounded-3xl p-4 sm:p-6 bg-white/[0.05] backdrop-blur-xl border border-red-500/10 shadow-[0_25px_80px_-20px_rgba(240,90,36,0.35)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f05a24]/15 via-transparent to-red-500/12 rounded-3xl" />
        <div className="relative z-10">
          <h5 className="font-bold text-red-400 mb-3 flex items-center gap-2 text-sm">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            Em caso de perda do link de acesso:
          </h5>
          <p className="text-red-300/90 font-normal text-sm leading-relaxed">
            Você pode solicitar o reenvio através do nosso suporte informando o
            email utilizado na compra.
          </p>
        </div>
      </div>
    </div>
  );
}
