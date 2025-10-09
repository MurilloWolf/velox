"use client";

import { useMemo, useState } from "react";
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

export type TrainingPlan = {
  id: number;
  title: string;
  level: string;
  distance: string;
  duration: string;
  frequency: string;
  description: string;
  preview: string;
};

export type TrainingSectionProps = {
  header: {
    title: string;
    description: string;
  };
  plans: TrainingPlan[];
};

export default function TrainingSection({ header, plans }: TrainingSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState<string>("all");
  const [distanceFilter, setDistanceFilter] = useState<string>("all");
  const [previewPlan, setPreviewPlan] = useState<TrainingPlan | null>(null);

  const levels = useMemo(
    () => Array.from(new Set(plans.map((plan) => plan.level))).sort(),
    [plans]
  );
  const distances = useMemo(
    () => Array.from(new Set(plans.map((plan) => plan.distance))).sort(),
    [plans]
  );

  const filteredPlans = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return plans.filter((plan) => {
      const matchesLevel = levelFilter === "all" || plan.level === levelFilter;
      const matchesDistance =
        distanceFilter === "all" || plan.distance === distanceFilter;
      const matchesSearch =
        normalizedSearch.length === 0 ||
        plan.title.toLowerCase().includes(normalizedSearch) ||
        plan.description.toLowerCase().includes(normalizedSearch);

      return matchesLevel && matchesDistance && matchesSearch;
    });
  }, [plans, levelFilter, distanceFilter, searchTerm]);

  const currentPlan = previewPlan
    ? plans.find((plan) => plan.id === previewPlan.id) ?? null
    : null;

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

      <div className="space-y-4 rounded-lg border border-border/60 bg-card p-4 shadow-sm">
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
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Nível" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os níveis</SelectItem>
                {levels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={distanceFilter} onValueChange={setDistanceFilter}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Distância" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as distâncias</SelectItem>
                {distances.map((distance) => (
                  <SelectItem key={distance} value={distance}>
                    {distance}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="rounded-lg border border-border/60">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Planilha</TableHead>
                <TableHead>Nível</TableHead>
                <TableHead>Distância</TableHead>
                <TableHead>Duração</TableHead>
                <TableHead>Frequência</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPlans.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center text-muted-foreground"
                  >
                    Nenhuma planilha encontrada
                  </TableCell>
                </TableRow>
              ) : (
                filteredPlans.map((plan) => (
                  <TableRow key={plan.id}>
                    <TableCell className="font-medium text-card-foreground">
                      {plan.title}
                      <p className="text-sm text-muted-foreground">
                        {plan.description}
                      </p>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{plan.level}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{plan.distance}</Badge>
                    </TableCell>
                    <TableCell>{plan.duration}</TableCell>
                    <TableCell>{plan.frequency}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setPreviewPlan(plan)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
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
        description={previewPlan?.description}
        metadata={
          currentPlan ? (
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
              <Badge variant="outline">{currentPlan.level}</Badge>
              <Badge variant="secondary">{currentPlan.distance}</Badge>
              <span>{currentPlan.duration}</span>
              <span>{currentPlan.frequency}</span>
            </div>
          ) : null
        }
        previewContent={
          <pre className="glass-scrollbar max-h-80 overflow-y-auto whitespace-pre-wrap rounded-lg border border-border/60 bg-card/70 p-4 text-sm text-card-foreground">
            {currentPlan?.preview}
          </pre>
        }
      />
    </div>
  );
}
