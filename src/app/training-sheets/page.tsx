"use client";

import { useState, useRef, useEffect } from "react";
import {
  TrendingUp,
  Zap,
  ArrowRight,
  Target,
  Award,
  Sparkles,
  Users,
  ExternalLink,
  ShoppingCart,
  Loader2,
  FileSpreadsheet,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  PageTracker,
  PurchaseDialog,
  PremiumContent,
  FreeContent,
} from "@/components/system";
import useAnalytics from "@/tracking/useAnalytics";
import { fetchAvailableProducts } from "@/services/actions/products";
import { Product } from "@/types/products";
import { getProductPreviewUrl } from "@/lib/imageUtils";

export default function TrainingSheetsPage() {
  const { trackPageView, trackButtonClick, trackCardClick } = useAnalytics();
  const [isVisible, setIsVisible] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [purchaseDialogOpen, setPurchaseDialogOpen] = useState(false);
  const [isPurchaseProcessing, setIsPurchaseProcessing] = useState(false);
  const [previewError, setPreviewError] = useState<Record<string, boolean>>({});
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    trackPageView("training_sheets");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    const loadProducts = async () => {
      try {
        const result = await fetchAvailableProducts();
        if (result.products && result.error === null) {
          const trainingProducts = result.products.filter(
            (product) =>
              product.categories?.some(
                (cat) =>
                  cat.toLowerCase().includes("training") ||
                  cat.toLowerCase().includes("treino") ||
                  cat.toLowerCase().includes("planilha")
              ) ||
              (result.products && result.products.length <= 6)
          );
          setProducts(
            trainingProducts.length > 0 ? trainingProducts : result.products
          );
        }
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
    return () => observer.disconnect();
  }, [trackPageView]);

  const handleCTAClick = (location: string) => {
    trackButtonClick(`training_sheets:${location}`, "Começar Agora", "/coach");
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setPurchaseDialogOpen(true);
    trackCardClick(`product:${product.id}`);
  };

  const formatPrice = (priceCents: number, currency: string) => {
    if (priceCents === 0) return "Gratuito";
    const price = priceCents / 100;
    const formmatedCurrency = currency === "BRL" ? "R$" : "$";
    return `${formmatedCurrency} ${price.toFixed(2).replace(".", ",")}`;
  };

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Objetivos Claros",
      description: "Cada treino tem um propósito específico para sua evolução",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Progressão Científica",
      description: "Baseado em metodologias comprovadas de treinamento",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Estrutura Profissional",
      description:
        "Planilhas desenvolvidas seguindo padrões de treinamento esportivo",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Melhor experiência",
      description:
        "Nossas planilhas são fáceis de seguir e adaptadas para todos os níveis",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <PageTracker pagePath="/training-sheets" />
      <main className="min-h-screen bg-gradient-to-br from-black via-[#001122] to-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#001122] to-black" />
          <div className="absolute top-20 left-[10%] h-40 w-40 bg-[#d5fe46]/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute top-40 right-[15%] h-32 w-32 bg-green-400/15 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-40 left-[20%] h-48 w-48 bg-[#d5fe46]/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          />
          <div
            className="absolute bottom-20 right-[10%] h-36 w-36 bg-emerald-400/15 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "6s" }}
          />
        </div>
        <section ref={heroRef} className="relative pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div
              className={`text-center space-y-8 transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d5fe46]/30 bg-[#d5fe46]/10 backdrop-blur-xl px-6 py-3 text-sm uppercase tracking-widest text-[#d5fe46] font-semibold shadow-[0_0_30px_rgba(213,254,70,0.2)]">
                <Sparkles className="h-4 w-4 animate-pulse" />
                Transforme sua corrida
              </div>
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-[#d5fe46] to-white bg-clip-text text-transparent leading-tight">
                  Planilhas de Treino
                  <br />
                  <span className="text-[#d5fe46] drop-shadow-[0_0_30px_rgba(213,254,70,0.5)]">
                    Profissionais
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto">
                  Do seu primeiro 5K à maratonas. Planilhas estruturadas,
                  progressivas e testadas para você alcançar seus objetivos.
                </p>
              </div>

              <div
                className={`mt-12 transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <Button
                  asChild
                  size="lg"
                  onClick={() => handleCTAClick("hero")}
                  className="group relative overflow-hidden bg-gradient-to-r from-[#d5fe46] to-green-400 hover:from-green-400 hover:to-[#d5fe46] text-black font-bold text-xl px-10 py-8 h-auto rounded-2xl shadow-[0_0_40px_rgba(213,254,70,0.4)] hover:shadow-[0_0_60px_rgba(213,254,70,0.6)] transition-all duration-500 hover:scale-105"
                >
                  <Link href="/coach" className="flex items-center gap-3">
                    <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    Começar Agora
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 px-4 relative">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Nossas <span className="text-[#d5fe46]">Planilhas</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
                Planilhas profissionais criadas por especialistas para acelerar
                seus resultados
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#d5fe46]/20 to-green-400/20 text-[#d5fe46] border border-[#d5fe46]/30 hover:bg-[#d5fe46]/10 transition-all duration-300"
              >
                <Link
                  href="/coach?section=training"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver Todas as Planilhas
                </Link>
              </Button>
            </div>
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-[#d5fe46]" />
                <span className="ml-3 text-white/70">
                  Carregando produtos...
                </span>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.slice(0, 6).map((product) => (
                  <div
                    key={product.id}
                    className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-black/50 to-black/80 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_60px_rgba(213,254,70,0.2)] transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
                    onClick={() => handleProductClick(product)}
                  >
                    {product.imageLink && (
                      <div className="relative h-48 overflow-hidden rounded-t-3xl">
                        {!previewError[product.id] ? (
                          <Image
                            src={getProductPreviewUrl(product.imageLink)}
                            alt={product.title}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={() => {
                              setPreviewError((prev) => ({
                                ...prev,
                                [product.id]: true,
                              }));
                            }}
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#d5fe46]/20 to-green-400/20 flex items-center justify-center">
                            <div className="text-center space-y-2">
                              <FileSpreadsheet className="w-8 h-8 text-[#d5fe46] mx-auto" />
                              <span className="text-xs text-white/60">
                                Preview indisponível
                              </span>
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        {product.isFree && (
                          <div className="absolute top-4 right-4">
                            <div className="bg-gradient-to-r from-[#d5fe46] to-green-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                              Gratuito
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    <div className="p-6 relative z-10">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#d5fe46] transition-colors duration-300">
                          {product.title}
                        </h3>
                        <p className="text-white/70 text-sm line-clamp-2">
                          {product.subtitle}
                        </p>
                      </div>
                      {product.categories && product.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.categories
                            .slice(0, 2)
                            .map((category, idx) => (
                              <span
                                key={idx}
                                className="bg-[#d5fe46]/20 text-[#d5fe46] px-2 py-1 rounded-lg text-xs font-medium"
                              >
                                {category}
                              </span>
                            ))}
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-white">
                          {formatPrice(product.priceCents, product.currency)}
                        </div>
                      </div>
                      <Button
                        className="w-full mt-4 bg-gradient-to-r from-[#d5fe46]/20 to-green-400/20 text-[#d5fe46] border border-[#d5fe46]/30 hover:bg-[#d5fe46]/30 transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProductClick(product);
                        }}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Ver Detalhes
                      </Button>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d5fe46]/5 to-transparent rounded-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        <PurchaseDialog
          open={purchaseDialogOpen}
          onOpenChange={setPurchaseDialogOpen}
          title={selectedProduct?.title}
          description={selectedProduct?.subtitle}
          size="large"
          isPurchaseInProgress={isPurchaseProcessing}
        >
          {selectedProduct &&
            (selectedProduct.isFree ? (
              <FreeContent
                product={selectedProduct}
                onProcessingChange={setIsPurchaseProcessing}
              />
            ) : (
              <PremiumContent
                product={selectedProduct}
                onPurchaseComplete={() => setPurchaseDialogOpen(false)}
                onCancel={() => setPurchaseDialogOpen(false)}
                onProcessingChange={setIsPurchaseProcessing}
              />
            ))}
        </PurchaseDialog>
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Por que Nossas{" "}
                <span className="text-[#d5fe46]">Planilhas?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="group text-center p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.05] hover:border-[#d5fe46]/30 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#d5fe46]/10 text-[#d5fe46] mb-6 group-hover:bg-[#d5fe46]/20 group-hover:scale-110 transition-all duration-500">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* TODO - FUTURE SECTION */}
        {/* <section className="py-20 px-4 relative">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Histórias de <span className="text-[#d5fe46]">Sucesso</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Veja os resultados de quem já transformou sua corrida
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[
                {
                  url: "/images/runner-1.jpg",
                  alt: "Corredor em treino matinal",
                },
                { url: "/images/runner-2.jpg", alt: "Atleta em competição" },
                {
                  url: "/images/spreadsheet-preview.jpg",
                  alt: "Preview da planilha",
                },
                { url: "/images/runner-3.jpg", alt: "Grupo de corrida" },
                { url: "/images/coach-analysis.jpg", alt: "Análise técnica" },
                { url: "/images/runner-4.jpg", alt: "Corredor em meta" },
                {
                  url: "/images/training-data.jpg",
                  alt: "Dashboard de treino",
                },
                { url: "/images/runner-5.jpg", alt: "Treino intervalado" },
              ].map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#d5fe46]/20 to-green-400/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-xl bg-[#d5fe46]/30 flex items-center justify-center">
                      <Users className="w-6 h-6 text-[#d5fe46]" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white text-sm font-medium">
                      {image.alt}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  quote: "Reduzi meu tempo na meia maratona em 8 minutos!",
                  author: "Maria Silva",
                  achievement: "21K em 1h45min",
                  improvement: "-8min",
                },
                {
                  quote: "Finalmente consegui correr minha primeira maratona.",
                  author: "João Santos",
                  achievement: "42K completos",
                  improvement: "Meta alcançada",
                },
                {
                  quote:
                    "As planilhas são muito bem estruturadas e fáceis de seguir.",
                  author: "Ana Costa",
                  achievement: "10K em 52min",
                  improvement: "-5min",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#d5fe46]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="text-[#d5fe46] text-sm font-medium">
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                  <blockquote className="text-white mb-4 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="text-[#d5fe46] font-semibold mb-2">
                    {testimonial.author}
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">
                      {testimonial.achievement}
                    </span>
                    <span className="text-green-400 font-bold">
                      {testimonial.improvement}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
