"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Download, Check, Eye, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/";

const prompts = [
  {
    id: 1,
    title: "Criar Planilha Personalizada",
    category: "Treinos",
    subcategory: "Planejamento",
    description: "Gere uma planilha de treino adaptada ao seu nível e objetivo",
    prompt: `Crie uma planilha de treino de corrida personalizada com as seguintes informações:
- Nível atual: [iniciante/intermediário/avançado]
- Objetivo: [5K/10K/Meia/Maratona]
- Tempo disponível: [X semanas]
- Frequência semanal: [X dias]
- Melhor tempo atual: [seu tempo]
- Objetivo de tempo: [tempo desejado]

Inclua: aquecimento, treinos de base, intervalados, longões e recuperação.`,
  },
  {
    id: 2,
    title: "Análise de Desempenho",
    category: "Treinos",
    subcategory: "Análise",
    description: "Analise seus treinos e identifique pontos de melhoria",
    prompt: `Analise meu desempenho recente na corrida:
- Treinos da última semana: [descreva seus treinos]
- Sensações durante os treinos: [como se sentiu]
- Tempos/paces: [seus tempos]
- Dificuldades encontradas: [descreva]

Forneça insights sobre: pontos fortes, áreas de melhoria, ajustes necessários e próximos passos.`,
  },
  {
    id: 3,
    title: "Treino Intervalado Personalizado",
    category: "Treinos",
    subcategory: "Treino",
    description: "Crie sessões de treino intervalado específicas",
    prompt: `Crie um treino intervalado de corrida para:
- Objetivo: [melhorar velocidade/resistência/VO2max]
- Distância da prova alvo: [5K/10K/etc]
- Pace atual: [seu pace]
- Tempo disponível: [minutos]
- Local: [pista/rua/esteira]

Inclua: aquecimento, séries, recuperação e volta à calma com tempos específicos.`,
  },
  {
    id: 4,
    title: "Periodização de Treino",
    category: "Treinos",
    subcategory: "Planejamento",
    description: "Planeje ciclos de treino com periodização adequada",
    prompt: `Crie um plano de periodização para corrida:
- Prova alvo: [distância e data]
- Nível: [iniciante/intermediário/avançado]
- Semanas disponíveis: [número]
- Pontos fracos: [velocidade/resistência/força]

Divida em fases: base, construção, pico e recuperação com objetivos específicos.`,
  },
  {
    id: 5,
    title: "Plano Nutricional Semanal",
    category: "Nutrição",
    subcategory: "Planejamento",
    description: "Crie um plano de alimentação para a semana de treinos",
    prompt: `Crie um plano nutricional semanal para corredor:
- Nível de treino: [iniciante/intermediário/avançado]
- Volume semanal: [km por semana]
- Objetivo: [performance/perda de peso/ganho de massa]
- Restrições: [vegetariano/vegano/intolerâncias]
- Dias de treino: [segunda, quarta, sexta, etc]

Inclua: café da manhã, almoço, jantar, lanches e timing de nutrientes.`,
  },
  {
    id: 6,
    title: "Estratégia Nutricional para Prova",
    category: "Nutrição",
    subcategory: "Competição",
    description: "Planeje sua nutrição antes, durante e depois da prova",
    prompt: `Crie uma estratégia nutricional completa para prova:
- Distância: [5K/10K/Meia/Maratona]
- Horário da prova: [manhã/tarde]
- Duração estimada: [tempo]
- Experiência com géis/isotônicos: [sim/não]

Inclua: refeições 3 dias antes, café da manhã, nutrição durante, e recuperação pós-prova.`,
  },
  {
    id: 7,
    title: "Suplementação para Corredores",
    category: "Nutrição",
    subcategory: "Suplementação",
    description: "Recomendações de suplementos baseadas em seus objetivos",
    prompt: `Sugira um protocolo de suplementação para corredor:
- Objetivo: [performance/recuperação/saúde geral]
- Nível: [iniciante/intermediário/avançado]
- Volume de treino: [km/semana]
- Idade: [sua idade]
- Restrições: [alergias/intolerâncias]

Inclua: suplementos essenciais, timing, dosagem e benefícios esperados.`,
  },
  {
    id: 8,
    title: "Superar Platô de Performance",
    category: "Motivação",
    subcategory: "Mindset",
    description: "Estratégias para quebrar estagnação nos treinos",
    prompt: `Estou em um platô de performance na corrida:
- Tempo estagnado: [semanas/meses]
- Distância atual: [km]
- Pace atual: [min/km]
- Rotina de treino: [descreva]
- Sensação: [desmotivado/cansado/entediado]

Forneça estratégias para: quebrar o platô, renovar motivação e alcançar novos objetivos.`,
  },
  {
    id: 9,
    title: "Preparação Mental para Prova",
    category: "Motivação",
    subcategory: "Mindset",
    description: "Técnicas de mentalização e preparação psicológica",
    prompt: `Preciso de preparação mental para minha prova:
- Distância: [5K/10K/Meia/Maratona]
- Dias até a prova: [número]
- Ansiedade/nervosismo: [nível de 1-10]
- Experiência anterior: [primeira prova/veterano]
- Objetivo: [completar/tempo específico]

Inclua: técnicas de visualização, controle de ansiedade, estratégia mental e mantras.`,
  },
  {
    id: 10,
    title: "Manter Consistência nos Treinos",
    category: "Motivação",
    subcategory: "Hábitos",
    description: "Estratégias para criar e manter hábitos de treino",
    prompt: `Quero criar consistência nos meus treinos de corrida:
- Rotina atual: [descreva]
- Dificuldades: [falta de tempo/motivação/cansaço]
- Objetivo: [treinar X vezes por semana]
- Horário disponível: [manhã/tarde/noite]

Forneça: estratégias de hábito, dicas de organização, motivação e accountability.`,
  },
  {
    id: 11,
    title: "Protocolo de Recuperação Pós-Treino",
    category: "Recuperação",
    subcategory: "Recuperação",
    description: "Otimize sua recuperação após treinos intensos",
    prompt: `Crie um protocolo de recuperação pós-treino:
- Tipo de treino: [longão/intervalado/fácil]
- Intensidade: [leve/moderada/alta]
- Duração: [minutos/km]
- Sintomas: [dor muscular/fadiga/lesão leve]
- Tempo até próximo treino: [horas/dias]

Inclua: alongamento, nutrição, hidratação, sono, e técnicas de recuperação ativa.`,
  },
  {
    id: 12,
    title: "Prevenção de Lesões",
    category: "Recuperação",
    subcategory: "Prevenção",
    description: "Exercícios e cuidados para prevenir lesões comuns",
    prompt: `Crie um plano de prevenção de lesões para corredor:
- Histórico: [lesões anteriores ou pontos fracos]
- Volume semanal: [km]
- Tipo de pisada: [pronada/supinada/neutra]
- Superfície de treino: [asfalto/terra/pista]

Inclua: exercícios de fortalecimento, alongamentos, mobilidade e cuidados preventivos.`,
  },
  {
    id: 13,
    title: "Recuperação Pós-Prova",
    category: "Recuperação",
    subcategory: "Recuperação",
    description: "Plano completo de recuperação após competições",
    prompt: `Preciso de um plano de recuperação pós-prova:
- Distância da prova: [5K/10K/Meia/Maratona]
- Como se sentiu: [ótimo/cansado/muito desgastado]
- Sintomas: [dores/fadiga/lesões leves]
- Próxima prova: [data ou "sem planos"]

Inclua: descanso ativo, nutrição, quando voltar a treinar e progressão de volume.`,
  },
];

export default function PromptsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [previewPrompt, setPreviewPrompt] = useState<
    (typeof prompts)[0] | null
  >(null);

  const filteredPrompts = prompts.filter((prompt) => {
    const matchesSearch =
      prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || prompt.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const downloadPrompt = (prompt: (typeof prompts)[0]) => {
    const blob = new Blob([`${prompt.title}\n\n${prompt.prompt}`], {
      type: "text/plain",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${prompt.title.toLowerCase().replace(/\s+/g, "-")}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-balance">
          Prompts de IA
        </h2>
        <p className="mt-2 text-lg text-muted-foreground text-pretty">
          Prompts prontos para usar com ChatGPT, Claude ou outras IAs para
          otimizar seus treinos
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar prompts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas categorias</SelectItem>
            <SelectItem value="Treinos">Treinos</SelectItem>
            <SelectItem value="Nutrição">Nutrição</SelectItem>
            <SelectItem value="Motivação">Motivação</SelectItem>
            <SelectItem value="Recuperação">Recuperação</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Prompt</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Subcategoria</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPrompts.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center text-muted-foreground"
                >
                  Nenhum prompt encontrado
                </TableCell>
              </TableRow>
            ) : (
              filteredPrompts.map((prompt) => {
                const isCopied = copiedId === prompt.id;

                return (
                  <TableRow key={prompt.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{prompt.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {prompt.description}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{prompt.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{prompt.subcategory}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setPreviewPrompt(prompt)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() =>
                            copyToClipboard(prompt.prompt, prompt.id)
                          }
                        >
                          {isCopied ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => downloadPrompt(prompt)}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog
        open={!!previewPrompt}
        onOpenChange={() => setPreviewPrompt(null)}
      >
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{previewPrompt?.title}</DialogTitle>
            <DialogDescription>{previewPrompt?.description}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex gap-2">
              <Badge variant="outline">{previewPrompt?.category}</Badge>
              <Badge variant="secondary">{previewPrompt?.subcategory}</Badge>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <pre className="whitespace-pre-wrap text-sm font-mono">
                {previewPrompt?.prompt}
              </pre>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setPreviewPrompt(null)}>
                Fechar
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  previewPrompt &&
                  copyToClipboard(previewPrompt.prompt, previewPrompt.id)
                }
              >
                {copiedId === previewPrompt?.id ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copiado
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copiar
                  </>
                )}
              </Button>
              <Button
                onClick={() => previewPrompt && downloadPrompt(previewPrompt)}
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
