"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Eye, Search } from "lucide-react";
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
import { PreviewDialog } from "./index";

const trainingPlans = [
  {
    id: 1,
    title: "Planilha 5K - Iniciante",
    level: "Iniciante",
    distance: "5K",
    duration: "8 semanas",
    frequency: "3x/semana",
    description: "Programa de 8 semanas para completar seus primeiros 5km",
    preview: `SEMANA 1-2: Base Aeróbica
- Seg: 20min caminhada/corrida alternada
- Qua: 25min caminhada/corrida alternada
- Sex: 20min caminhada/corrida alternada

SEMANA 3-4: Progressão
- Seg: 25min corrida leve
- Qua: 30min corrida leve
- Sex: 25min corrida leve

SEMANA 5-6: Consolidação
- Seg: 30min corrida contínua
- Qua: 35min corrida contínua
- Sex: 30min corrida contínua

SEMANA 7-8: Preparação Final
- Seg: 35min corrida + 3x1min forte
- Qua: 40min corrida leve
- Sex: 30min + simulado 5K`,
  },
  {
    id: 2,
    title: "Planilha 10K - Iniciante",
    level: "Iniciante",
    distance: "10K",
    duration: "10 semanas",
    frequency: "3-4x/semana",
    description: "Transição de 5K para 10K em 10 semanas",
    preview: `FASE 1 (Semanas 1-3): Base
- Seg: 30min corrida leve
- Qua: 35min corrida leve
- Sex: 40min corrida leve
- Dom: 45min longão

FASE 2 (Semanas 4-7): Construção
- Seg: 35min + 4x2min ritmo
- Qua: 40min corrida leve
- Sex: 35min + 5x2min ritmo
- Dom: 50-60min longão

FASE 3 (Semanas 8-10): Pico
- Seg: 40min + 6x2min forte
- Qua: 45min corrida leve
- Sex: 35min + simulado 8K
- Dom: 60min longão`,
  },
  {
    id: 3,
    title: "Base Aeróbica - Iniciante",
    level: "Iniciante",
    distance: "Base",
    duration: "12 semanas",
    frequency: "3x/semana",
    description: "Construa sua base aeróbica com treinos progressivos",
    preview: `Objetivo: Desenvolver capacidade aeróbica fundamental

FASE 1 (Semanas 1-4):
- 3x por semana: 20-30min corrida leve
- Foco: Consistência e adaptação

FASE 2 (Semanas 5-8):
- 3x por semana: 30-40min corrida leve
- Adicionar 1 longão de 45min

FASE 3 (Semanas 9-12):
- 3x por semana: 35-45min corrida leve
- Longão: 50-60min
- Introduzir ritmo controlado`,
  },
  {
    id: 4,
    title: "Planilha Meia Maratona",
    level: "Intermediário",
    distance: "21K",
    duration: "12 semanas",
    frequency: "4-5x/semana",
    description: "Prepare-se para 21K com treinos de qualidade",
    preview: `FASE BASE (Semanas 1-4):
- Seg: 40min leve
- Ter: 45min ritmo moderado
- Qui: 40min leve
- Sab: 50-60min longão
- Dom: 30min regenerativo

FASE CONSTRUÇÃO (Semanas 5-8):
- Seg: 45min leve
- Ter: 50min + 6x3min ritmo
- Qui: 45min leve
- Sab: 70-90min longão
- Dom: 35min regenerativo

FASE PICO (Semanas 9-11):
- Seg: 50min leve
- Ter: 60min + 8x3min forte
- Qui: 45min leve
- Sab: 90-120min longão
- Dom: 40min regenerativo

SEMANA 12: Taper + Prova`,
  },
  {
    id: 5,
    title: "Planilha 10K - Sub 50min",
    level: "Intermediário",
    distance: "10K",
    duration: "10 semanas",
    frequency: "4-5x/semana",
    description: "Quebre a barreira dos 50 minutos nos 10km",
    preview: `Pace Alvo: 5:00/km

FASE 1 (Semanas 1-3):
- Seg: 40min @ 5:30/km
- Qua: 8x400m @ 4:40/km (rec 90s)
- Sex: 35min leve
- Dom: 60min @ 5:40/km

FASE 2 (Semanas 4-7):
- Seg: 45min @ 5:20/km
- Qua: 5x1000m @ 4:50/km (rec 2min)
- Sex: 40min leve
- Dom: 70min @ 5:30/km

FASE 3 (Semanas 8-10):
- Seg: 50min @ 5:10/km
- Qua: 3x2000m @ 4:55/km (rec 3min)
- Sex: 35min leve
- Dom: Simulado 8K @ pace prova`,
  },
  {
    id: 6,
    title: "Treinos de Velocidade",
    level: "Intermediário",
    distance: "Velocidade",
    duration: "8 semanas",
    frequency: "4x/semana",
    description: "Melhore seu pace com treinos intervalados",
    preview: `SEMANA 1-2: Adaptação
- Ter: 10x200m (rec 60s)
- Qui: 6x400m (rec 90s)
- Sab: 4x800m (rec 2min)

SEMANA 3-4: Progressão
- Ter: 12x200m (rec 45s)
- Qui: 8x400m (rec 75s)
- Sab: 5x800m (rec 90s)

SEMANA 5-6: Intensificação
- Ter: 15x200m (rec 45s)
- Qui: 10x400m (rec 60s)
- Sab: 6x800m (rec 90s)

SEMANA 7-8: Pico
- Ter: 8x300m (rec 60s)
- Qui: 6x600m (rec 90s)
- Sab: 4x1000m (rec 2min)`,
  },
  {
    id: 7,
    title: "Planilha 5K - Sub 25min",
    level: "Intermediário",
    distance: "5K",
    duration: "8 semanas",
    frequency: "5x/semana",
    description: "Atinja seu melhor tempo nos 5km",
    preview: `Pace Alvo: 5:00/km

FASE 1 (Semanas 1-3):
- Seg: 35min @ 5:30/km
- Ter: 10x400m @ 4:40/km
- Qui: 30min leve
- Sex: 6x800m @ 4:50/km
- Dom: 50min @ 5:40/km

FASE 2 (Semanas 4-6):
- Seg: 40min @ 5:20/km
- Ter: 12x400m @ 4:35/km
- Qui: 35min leve
- Sex: 8x800m @ 4:45/km
- Dom: 60min @ 5:30/km

FASE 3 (Semanas 7-8):
- Seg: 40min @ 5:10/km
- Ter: 6x1000m @ 4:50/km
- Qui: 30min leve
- Sex: Simulado 4K @ pace
- Dom: 50min leve`,
  },
  {
    id: 8,
    title: "Planilha Maratona - Sub 4h",
    level: "Avançado",
    distance: "42K",
    duration: "16 semanas",
    frequency: "5-6x/semana",
    description: "Programa completo para quebrar as 4 horas",
    preview: `Pace Alvo: 5:40/km

FASE BASE (Semanas 1-6):
- Seg: 50min @ 6:10/km
- Ter: 60min ritmo @ 5:50/km
- Qui: 45min leve
- Sex: 50min + 6x3min @ 5:30/km
- Dom: 90-120min @ 6:20/km

FASE CONSTRUÇÃO (Semanas 7-12):
- Seg: 60min @ 6:00/km
- Ter: 70min + 8x4min @ 5:30/km
- Qui: 50min leve
- Sex: 60min ritmo @ 5:45/km
- Dom: 120-150min @ 6:10/km

FASE PICO (Semanas 13-15):
- Seg: 60min @ 5:50/km
- Ter: 80min + 10x3min @ 5:20/km
- Qui: 50min leve
- Sex: 70min @ 5:40/km
- Dom: 150-180min @ 6:00/km

SEMANA 16: Taper + Maratona`,
  },
  {
    id: 9,
    title: "Planilha Maratona - Sub 3h30",
    level: "Avançado",
    distance: "42K",
    duration: "16 semanas",
    frequency: "6x/semana",
    description: "Treino avançado para corredores experientes",
    preview: `Pace Alvo: 4:58/km

FASE BASE (Semanas 1-6):
- Seg: 60min @ 5:30/km
- Ter: 70min + 8x3min @ 4:45/km
- Qua: 45min regenerativo
- Qui: 60min ritmo @ 5:10/km
- Sex: 50min leve
- Dom: 120-150min @ 5:40/km

FASE CONSTRUÇÃO (Semanas 7-12):
- Seg: 70min @ 5:20/km
- Ter: 80min + 10x4min @ 4:40/km
- Qua: 50min regenerativo
- Qui: 70min @ 5:00/km
- Sex: 55min leve
- Dom: 150-180min @ 5:30/km

FASE PICO (Semanas 13-15):
- Seg: 75min @ 5:10/km
- Ter: 90min + 12x3min @ 4:35/km
- Qua: 50min regenerativo
- Qui: 80min @ 4:58/km
- Sex: 50min leve
- Dom: 180-210min @ 5:20/km

SEMANA 16: Taper + Maratona`,
  },
  {
    id: 10,
    title: "Ultra Maratona 50K",
    level: "Avançado",
    distance: "50K",
    duration: "20 semanas",
    frequency: "5-6x/semana",
    description: "Preparação para sua primeira ultra",
    preview: `FASE BASE (Semanas 1-8):
- Construir volume gradualmente
- Longões: 90-150min
- Volume semanal: 60-80km
- Foco: Resistência aeróbica

FASE CONSTRUÇÃO (Semanas 9-16):
- Longões: 150-210min
- Volume semanal: 80-100km
- Treinos em trilha
- Back-to-back longões

FASE PICO (Semanas 17-19):
- Longões: 210-240min
- Volume semanal: 90-110km
- Simulados de 30-35K
- Treino de nutrição

SEMANA 20: Taper + Ultra`,
  },
  {
    id: 11,
    title: "Planilha Meia - Sub 1h30",
    level: "Avançado",
    distance: "21K",
    duration: "12 semanas",
    frequency: "6x/semana",
    description: "Maximize seu desempenho na meia maratona",
    preview: `Pace Alvo: 4:16/km

FASE BASE (Semanas 1-4):
- Seg: 50min @ 4:50/km
- Ter: 60min + 8x3min @ 4:00/km
- Qua: 40min regenerativo
- Qui: 55min ritmo @ 4:30/km
- Sex: 45min leve
- Dom: 90min @ 5:00/km

FASE CONSTRUÇÃO (Semanas 5-9):
- Seg: 60min @ 4:40/km
- Ter: 70min + 10x3min @ 3:55/km
- Qua: 45min regenerativo
- Qui: 65min @ 4:20/km
- Sex: 50min leve
- Dom: 100-120min @ 4:50/km

FASE PICO (Semanas 10-11):
- Seg: 65min @ 4:30/km
- Ter: 75min + 12x2min @ 3:50/km
- Qua: 45min regenerativo
- Qui: 70min @ 4:16/km
- Sex: 45min leve
- Dom: Simulado 18K @ pace

SEMANA 12: Taper + Meia`,
  },
  {
    id: 12,
    title: "Peak Performance",
    level: "Avançado",
    distance: "Periodização",
    duration: "24 semanas",
    frequency: "6-7x/semana",
    description: "Periodização avançada para competidores",
    preview: `MACROCICLO 1 (Semanas 1-8): Base
- Volume alto, intensidade baixa
- Desenvolvimento aeróbico
- Fortalecimento muscular

MACROCICLO 2 (Semanas 9-16): Construção
- Volume moderado-alto
- Intensidade progressiva
- Treinos específicos

MACROCICLO 3 (Semanas 17-22): Pico
- Volume moderado
- Alta intensidade
- Simulados e ajustes

MICROCICLO (Semanas 23-24): Taper
- Volume reduzido
- Manutenção de intensidade
- Recuperação e prova`,
  },
];

export default function TrainingSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState<string>("all");
  const [distanceFilter, setDistanceFilter] = useState<string>("all");
  const [previewPlan, setPreviewPlan] = useState<
    (typeof trainingPlans)[0] | null
  >(null);

  const filteredPlans = trainingPlans.filter((plan) => {
    const matchesSearch =
      plan.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = levelFilter === "all" || plan.level === levelFilter;
    const matchesDistance =
      distanceFilter === "all" || plan.distance === distanceFilter;

    return matchesSearch && matchesLevel && matchesDistance;
  });

  const handleDownload = (plan: (typeof trainingPlans)[0]) => {
    const content = `${plan.title}\n\n${plan.description}\n\nDuração: ${plan.duration}\nFrequência: ${plan.frequency}\nNível: ${plan.level}\n\n${plan.preview}`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${plan.title.toLowerCase().replace(/\s+/g, "-")}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-balance">
          Planilhas de Treino
        </h2>
        <p className="mt-2 text-lg text-muted-foreground text-pretty">
          Programas de treino estruturados para todos os níveis e objetivos
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar planilhas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={levelFilter} onValueChange={setLevelFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Nível" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os níveis</SelectItem>
            <SelectItem value="Iniciante">Iniciante</SelectItem>
            <SelectItem value="Intermediário">Intermediário</SelectItem>
            <SelectItem value="Avançado">Avançado</SelectItem>
          </SelectContent>
        </Select>
        <Select value={distanceFilter} onValueChange={setDistanceFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Distância" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas distâncias</SelectItem>
            <SelectItem value="5K">5K</SelectItem>
            <SelectItem value="10K">10K</SelectItem>
            <SelectItem value="21K">Meia Maratona</SelectItem>
            <SelectItem value="42K">Maratona</SelectItem>
            <SelectItem value="50K">Ultra</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-lg border">
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
                  <TableCell>
                    <div>
                      <div className="font-medium">{plan.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {plan.description}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{plan.level}</Badge>
                  </TableCell>
                  <TableCell>{plan.distance}</TableCell>
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
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDownload(plan)}
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

      <PreviewDialog
        open={!!previewPlan}
        onOpenChange={() => setPreviewPlan(null)}
        title={previewPlan?.title}
        description={previewPlan?.description}
        metadata={
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Nível:</span>
              <Badge variant="outline">{previewPlan?.level}</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Duração:</span>
              <span className="font-medium text-slate-100">
                {previewPlan?.duration}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Frequência:</span>
              <span className="font-medium text-slate-100">
                {previewPlan?.frequency}
              </span>
            </div>
          </div>
        }
        previewContent={
          <div className="glass-scrollbar max-h-64 overflow-y-auto rounded-lg border border-[#1b2b44] bg-[#060f21] p-4">
            <pre className="whitespace-pre-wrap text-sm font-mono text-slate-100">
              {previewPlan?.preview}
            </pre>
          </div>
        }
        actions={
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              className="bg-transparent border-[#1b2b44] text-slate-100 hover:bg-[#0a162b]"
              onClick={() => setPreviewPlan(null)}
            >
              Fechar
            </Button>
            <Button onClick={() => previewPlan && handleDownload(previewPlan)}>
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        }
      />
    </div>
  );
}
