"use client";
import { useMemo, useState, useEffect } from "react";
import { Download, Eye, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
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

import PreviewDialog from "../PreviewDialog";
import { fetchAvailableProducts } from "@/services/actions/products";
import { Product } from "@/types/products";

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

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
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
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPlans.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center text-muted-foreground"
                  >
                    Nenhum produto encontrado
                  </TableCell>
                </TableRow>
              ) : (
                filteredPlans.map((plan) => (
                  <TableRow key={plan.id}>
                    <TableCell className="font-medium text-card-foreground">
                      {plan.title}
                      <p className="text-sm text-muted-foreground">
                        {plan.subtitle}
                      </p>
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
                      <span className="font-medium">
                        {formatPrice(
                          plan.priceCents,
                          plan.currency,
                          plan.isFree
                        )}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={plan.isAvailable ? "default" : "secondary"}
                      >
                        {plan.isAvailable ? "Disponível" : "Indisponível"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setPreviewPlan(plan)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => window.open(plan.driveLink, "_blank")}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <PreviewDialog
        open={Boolean(previewPlan)}
        onOpenChange={() => setPreviewPlan(null)}
        title={previewPlan?.title}
        description={previewPlan?.subtitle}
        metadata={
          currentPlan ? (
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
              <span className="font-medium">
                {formatPrice(
                  currentPlan.priceCents,
                  currentPlan.currency,
                  currentPlan.isFree
                )}
              </span>
              <Badge
                variant={currentPlan.isAvailable ? "default" : "secondary"}
              >
                {currentPlan.isAvailable ? "Disponível" : "Indisponível"}
              </Badge>
              {currentPlan.categories.slice(0, 3).map((category) => (
                <Badge key={category} variant="outline" className="text-xs">
                  {category}
                </Badge>
              ))}
            </div>
          ) : null
        }
        previewContent={
          <div className="space-y-4">
            <div className="glass-scrollbar max-h-80 overflow-y-auto rounded-lg border border-border/60 bg-card/70 p-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm text-slate-200 mb-2">
                    Links de Acesso:
                  </h4>
                  <div className="space-y-2">
                    {currentPlan?.driveLink && (
                      <a
                        href={currentPlan.driveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-400 hover:text-blue-300 text-sm underline"
                      >
                        📁 Acessar no Google Drive
                      </a>
                    )}
                    {currentPlan?.notionLink && (
                      <a
                        href={currentPlan.notionLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-400 hover:text-blue-300 text-sm underline"
                      >
                        📋 Ver no Notion
                      </a>
                    )}
                  </div>
                </div>

                {currentPlan?.categories &&
                  currentPlan.categories.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-sm text-slate-200 mb-2">
                        Categorias:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {currentPlan.categories.map((category) => (
                          <Badge
                            key={category}
                            variant="outline"
                            className="text-xs"
                          >
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}
