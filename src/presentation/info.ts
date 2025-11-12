export const infoPageContent = {
  hero: {
    badge: {
      label: "Bot VELOX",
      description: "Controle total das suas provas em segundos",
    },
    title: "Sua central inteligente de corridas direto no Telegram",
    description:
      "Acompanhe inscrições, receba alertas em tempo real e personalize a busca pelas provas que você mais quer correr. Tudo em uma interface rápida, estilosa e feita para corredores.",
    primaryCta: "Abrir no Telegram",
    secondaryCta: "Ver todos os comandos",
  },
  quickStats: [
    {
      label: "Corridas monitoradas",
      value: "850+",
      helper: "Atualizadas diariamente",
    },
    {
      label: "Alertas enviados",
      value: "12k",
      helper: "Em tempo real",
    },
    {
      label: "Cidades cobertas",
      value: "120",
      helper: "Em todo o Brasil",
    },
  ],
  howItWorksCard: {
    title: "Comece em três passos rápidos",
    description:
      "Interaja com o bot como se estivesse em um aplicativo próprio.",
  },
  howItWorks: [
    {
      step: "1",
      title: "Conecte-se no Telegram",
      description:
        "Busque por @RunningVeloxBot ou clique em iniciar direto pelo botão abaixo.",
    },
    {
      step: "2",
      title: "Personalize alertas",
      description:
        "Combine cidade, distância e data ideal para receber só o que importa.",
    },
    {
      step: "3",
      title: "Monitore em tempo real",
      description:
        "Receba inscrições abertas, mudanças de percurso e novas corridas instantaneamente.",
    },
  ],
  commandsSection: {
    title: "Comandos principais",
    description:
      "Filtre por categoria ou pesquise por palavras-chave para descobrir tudo que o bot oferece.",
    searchPlaceholder: "Buscar comando, distancia, categoria...",
    emptyStateTitle: "Nada encontrado",
    emptyStateDescription:
      "Ajuste o texto da busca ou escolha outra categoria para visualizar os comandos disponíveis.",
  },
  categories: ["Todos", "Basico", "Configuracao", "Corrida"],
  commands: [
    {
      id: "start",
      command: "/start",
      icon: "send",
      description:
        "Envia uma saudação dinâmica, apresenta o bot e sugere próximos passos.",
      example: "/start",
      category: "Basico",
    },
    {
      id: "ajuda",
      command: "/ajuda",
      icon: "help-circle",
      description:
        "Lista todos os comandos disponíveis e explica cada categoria de recursos.",
      example: "/ajuda",
      category: "Basico",
    },
    {
      id: "corridas",
      command: "/corridas",
      icon: "trophy",
      description:
        "Lista corridas abertas com botões para ver detalhes ou filtrar por distância.",
      example: "/corridas",
      category: "Corrida",
    },
    {
      id: "buscar-corridas",
      command: "/buscar_corridas",
      icon: "search",
      description:
        "Abre atalhos de filtro por faixa de distância para encontrar corridas específicas.",
      example: "/buscar_corridas",
      category: "Corrida",
    },
    {
      id: "proxima-corrida",
      command: "/proxima_corrida",
      icon: "calendar",
      description:
        "Retorna a prova mais próxima de acontecer, formatada com data, local e distâncias.",
      example: "/proxima_corrida",
      category: "Corrida",
    },
    {
      id: "favoritos",
      command: "/favoritos",
      icon: "star",
      description:
        "Mostra a lista de corridas marcadas como favoritas e permite abrir os detalhes.",
      example: "/favoritos",
      category: "Corrida",
    },
  ],
  proTipsSection: {
    title: "Dicas para aproveitar melhor",
    description: "Um atalho para explorar todo o potencial do bot.",
  },
  proTips: [
    "Use /notificar on para receber alertas de novas corridas",
    "Salve suas corridas favoritas para acesso rápido",
    "Combine filtros de distância e cidade para busca precisa",
    "O bot é atualizado diariamente com novas corridas",
  ],
} as const;
