"use client";

import { useMemo, useState } from "react";
import { Check, Copy, Download, Eye, Search } from "lucide-react";

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
} from "@/components/ui";

import PreviewDialog from "../PreviewDialog";

export type PromptItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  prompt: string;
};

export type PromptSectionProps = {
  header: {
    title: string;
    description: string;
  };
  prompts: PromptItem[];
  categories?: string[];
};

export default function PromptsSection({
  header,
  prompts,
  categories,
}: PromptSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewPrompt, setPreviewPrompt] = useState<PromptItem | null>(null);

  const availableCategories = useMemo(() => {
    if (categories?.length) {
      return categories;
    }
    return Array.from(new Set(prompts.map((prompt) => prompt.category)));
  }, [categories, prompts]);

  const filteredPrompts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return prompts.filter((prompt) => {
      const matchesCategory =
        categoryFilter === "all" || prompt.category === categoryFilter;
      const matchesSearch =
        normalizedSearch.length === 0 ||
        prompt.title.toLowerCase().includes(normalizedSearch) ||
        prompt.description.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [prompts, categoryFilter, searchTerm]);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const downloadPrompt = (prompt: PromptItem) => {
    const blob = new Blob([`${prompt.title}\n\n${prompt.prompt}`], {
      type: "text/plain",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${prompt.title.toLowerCase().replace(/\s+/g, "-")}.txt`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-balance">
          {header.title}
        </h2>
        <p className="mt-2 text-lg text-muted-foreground text-pretty">
          {header.description}
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar prompts..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas categorias</SelectItem>
            {availableCategories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-lg border border-border/60">
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
        open={Boolean(previewPrompt)}
        onOpenChange={() => setPreviewPrompt(null)}
        title={previewPrompt?.title}
        description={previewPrompt?.description}
        size="compact"
        metadata={
          previewPrompt ? (
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Categoria:</span>
                <Badge variant="outline">{previewPrompt.category}</Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Tema:</span>
                <Badge variant="secondary">{previewPrompt.subcategory}</Badge>
              </div>
            </div>
          ) : null
        }
        previewContent={
          <div className="glass-scrollbar max-h-64 overflow-y-auto rounded-lg border border-[#1b2b44] bg-[#060f21] p-4">
            <pre className="whitespace-pre-wrap text-sm font-mono text-slate-100">
              {previewPrompt?.prompt}
            </pre>
          </div>
        }
      />
    </div>
  );
}
