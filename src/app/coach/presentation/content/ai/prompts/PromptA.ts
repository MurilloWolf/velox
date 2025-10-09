import { PromptItem } from "@/app/coach/components/Sections";

const promptA: PromptItem = {
  id: "prompt-criar-planilha-personalizada",
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
};

export default promptA;
