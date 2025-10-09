import { TrainingPlan } from "@/app/coach/components/Sections";

const plans: TrainingPlan[] = [
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
- Sex: 50min + 6x3min @ 5:25/km
- Dom: 120-150min @ 6:10/km

FASE PICO (Semanas 13-15):
- Seg: 50min leve
- Ter: 80min + 4x5min @ 5:20/km
- Qui: 60min leve
- Sab: 150-180min longão controlado
- Dom: 40min regenerativo

SEMANA 16: Taper + Prova`,
  },
];

export default plans;
