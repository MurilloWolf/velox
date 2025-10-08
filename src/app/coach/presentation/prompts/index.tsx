export const prompts = [
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
