"use client";
import { useMemo, useState, useEffect } from "react";
import { Search, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";

import { PurchaseDialog, ProductContent } from "@/components/system";
import { Product } from "@/types/products";
import { fetchAvailableProducts } from "@/services/actions/products";

export type TrainingPlan = Product;

export type TrainingSectionProps = {
  header: {
    title: string;
    description: string;
  };
};

export default function TrainingSection({ header }: TrainingSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [previewPlan, setPreviewPlan] = useState<TrainingPlan | null>(null);
  const [plans, setPlans] = useState<TrainingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isBlockingClose, setIsBlockingClose] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        // const result = {
        //   products: [
        //     {
        //       id: "cmhchihz8000tz47pl9n0kq2s",
        //       title: "Primeiros 10km",
        //       subtitle: "Planilha de 8 semanas para correr seus primeiros 10km",
        //       priceCents: 0,
        //       currency: "BRL",
        //       isAvailable: true,
        //       isFree: true,
        //       categories: ["10km", "iniciante"],
        //       driveLink:
        //         "https://docs.google.com/spreadsheets/d/1f1_6VFua6xLUXp7zHDmypwiDu71mFs-D/edit?usp=sharing&ouid=106148854244649472480&rtpof=true&sd=true",
        //       imageLink:
        //         "https://docs.google.com/spreadsheets/d/1f1_6VFua6xLUXp7zHDmypwiDu71mFs-D/edit?usp=sharing&ouid=106148854244649472480&rtpof=true&sd=true",
        //       createdAt: "2025-10-29T21:05:20.427Z",
        //       updatedAt: "2025-10-29T21:05:20.427Z",
        //     },
        //     {
        //       id: "cmhchdjxe000sz47p35pbqgrk",
        //       title: "Primeiros 5km",
        //       subtitle: "Planilha de 4 semanas para os seus primeiros 5km",
        //       priceCents: 10000,
        //       currency: "BRL",
        //       isAvailable: true,
        //       isFree: false,
        //       categories: ["5km"],
        //       driveLink:
        //         "https://docs.google.com/spreadsheets/d/1f1_6VFua6xLUXp7zHDmypwiDu71mFs-D/edit?usp=sharing&ouid=106148854244649472480&rtpof=true&sd=true",
        //       imageLink:
        //         "https://docs.google.com/spreadsheets/d/1f1_6VFua6xLUXp7zHDmypwiDu71mFs-D/edit?usp=sharing&ouid=106148854244649472480&rtpof=true&sd=true",
        //       createdAt: "2025-10-29T21:01:29.731Z",
        //       updatedAt: "2025-10-29T21:04:14.121Z",
        //     },
        //   ],
        // };
        const result = await fetchAvailableProducts();
        if (result.error) {
          setError(result.error);
        } else {
          setPlans(result.products || []);
        }
      } catch (err) {
        setError("Erro ao carregar produtos");
        console.error("Error loading products:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const categories = useMemo(() => {
    const allCategories = plans.flatMap((plan) => plan.categories || []);
    return Array.from(new Set(allCategories)).sort();
  }, [plans]);

  const filteredPlans = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return plans.filter((plan) => {
      const matchesCategory =
        categoryFilter === "all" ||
        (plan.categories && plan.categories.includes(categoryFilter));
      const matchesSearch =
        normalizedSearch.length === 0 ||
        plan.title.toLowerCase().includes(normalizedSearch) ||
        plan.subtitle.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [plans, categoryFilter, searchTerm]);

  const currentPlan = previewPlan
    ? plans.find((plan) => plan.id === previewPlan.id) ?? null
    : null;

  const formatPrice = (
    priceCents: number,
    currency: string,
    isFree: boolean
  ) => {
    if (isFree) return "Gratuito";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: currency || "BRL",
    }).format(priceCents / 100);
  };

  const handleSelectPlan = (plan: TrainingPlan) => {
    setIsBlockingClose(false);
    setPreviewPlan(plan);
  };

  const handleClosePreview = () => {
    setIsBlockingClose(false);
    setPreviewPlan(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-muted-foreground">Carregando planilhas...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-red-400">Erro: {error}</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-balance">
            {header.title}
          </h2>
          <p className="mt-2 text-lg text-muted-foreground text-pretty">
            {header.description}
          </p>
        </div>
      </div>

      <div className="space-y-4 rounded-lg border border-border/60 bg-card p-4 shadow-sm bg-gradient-to-br from-slate-900/60 to-black/60">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar planilha..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-3">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as categorias</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="rounded-lg border border-border/60 ">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead>Categorias</TableHead>
                <TableHead>Preço</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPlans.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className="text-center text-muted-foreground"
                  >
                    Nenhum produto encontrado
                  </TableCell>
                </TableRow>
              ) : (
                filteredPlans.map((plan) => (
                  <TableRow
                    key={plan.id}
                    className="group cursor-pointer hover:bg-accent/10 transition-colors"
                    onClick={() => handleSelectPlan(plan)}
                  >
                    <TableCell className="font-medium text-card-foreground">
                      <div className="relative flex flex-row items-center w-full">
                        <div>
                          <p className="text-lg">{plan.title}</p>
                          <p className="text-sm text-muted-foreground ">
                            {plan.subtitle}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {plan.categories.slice(0, 2).map((category) => (
                          <Badge
                            key={category}
                            variant="outline"
                            className="text-xs"
                          >
                            {category}
                          </Badge>
                        ))}
                        {plan.categories.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{plan.categories.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div
                        className={` text-md ${
                          plan.isFree
                            ? "text-white font-bold"
                            : "font-semibold bg-transparent"
                        }`}
                      >
                        {plan.isFree ? (
                          <div className=" w-fit text-center px-4 p-1 rounded-full text-green-400 shadow-sm shadow-green-400/50">
                            {formatPrice(
                              plan.priceCents,
                              plan.currency,
                              plan.isFree
                            )}
                          </div>
                        ) : (
                          <div className="w-fit px-4 flex justify-center items-center flex-row gap-2 p-1 rounded-full text-amber-400 shadow-sm shadow-amber-400/50 group-hover:bg-amber-400 transition-colors">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 group-hover:text-black group-hover:fill-transparent transition-colors" />
                            <p className="text-amber-300 group-hover:text-black transition-colors">
                              {formatPrice(
                                plan.priceCents,
                                plan.currency,
                                plan.isFree
                              )}
                            </p>
                          </div>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <PurchaseDialog
        open={Boolean(previewPlan)}
        onOpenChange={(open) => {
          if (!open) {
            handleClosePreview();
          }
        }}
        isPurchaseInProgress={isBlockingClose}
        title={previewPlan?.title}
        description={previewPlan?.subtitle}
        size="large"
        metadata={
          currentPlan ? (
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
              <Badge
                className={`font-medium ${
                  currentPlan.isFree
                    ? "bg-green-600 text-white border-green-500 hover:bg-green-600/90"
                    : "bg-amber-600 text-white border-amber-500 hover:bg-amber-600/90"
                }`}
              >
                {formatPrice(
                  currentPlan.priceCents,
                  currentPlan.currency,
                  currentPlan.isFree
                )}
              </Badge>
              {currentPlan.categories.slice(0, 3).map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className={`hover:bg-transparent ${
                    currentPlan.isFree
                      ? "bg-transparent  border-green-500  text-green-300"
                      : "bg-transparent  border-amber-500  text-amber-300"
                  }`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          ) : null
        }
      >
        {currentPlan && (
          <ProductContent
            product={currentPlan}
            onComplete={handleClosePreview}
            onProcessingChange={setIsBlockingClose}
          />
        )}
      </PurchaseDialog>
    </div>
  );
}
