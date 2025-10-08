"use client";

import { useState } from "react";
import { Copy, Download, Check, Eye, Search } from "lucide-react";

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
  Button,
  Badge,
  Input,
} from "@/components/ui/";
import { PreviewDialog } from "./index";
import { prompts } from "../presentation/prompts";

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

      <PreviewDialog
        open={!!previewPrompt}
        onOpenChange={() => setPreviewPrompt(null)}
        title={previewPrompt?.title}
        description={previewPrompt?.description}
        size="compact"
        metadata={
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Categoria:</span>
              <Badge variant="outline">{previewPrompt?.category}</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Tema:</span>
              <Badge variant="secondary">{previewPrompt?.subcategory}</Badge>
            </div>
          </div>
        }
        previewContent={
          <div className="glass-scrollbar max-h-64 overflow-y-auto rounded-lg border border-[#1b2b44] bg-[#060f21] p-4">
            <pre className="whitespace-pre-wrap text-sm font-mono text-slate-100">
              {previewPrompt?.prompt}
            </pre>
          </div>
        }
        actions={
          <div className="flex justify-end gap-2">
            <Button
              size="sm"
              className="bg-transparent border-[#1b2b44] hover:bg-transparent focus:ring-0"
              variant="outline"
              onClick={() => setPreviewPrompt(null)}
            >
              Fechar
            </Button>
            <Button
              className="bg-[#1b2b44] border-[#1b2b44] hover:bg-transparent focus:ring-0"
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
        }
      />
    </div>
  );
}
