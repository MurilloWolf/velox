const infoPage = {
  hero: {
    badge: {
      label: "Bot VELOX",
      description: "Controle total das suas provas em segundos",
    },
    title: "Sua central inteligente de corridas direto no Telegram",
    description:
      "Acompanhe inscrições, receba alertas em tempo real e personalize a busca pelas provas que você mais quer correr. Tudo em uma interface rápida, estilosa e feita para corredores.",
    primaryCta: "Abrir no Telegram",
  },
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
      title: "Procure suas corridas",
      description:
        "Filtre por distância, cidade ou data para encontrar as provas que mais combinam com você.",
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
    searchPlaceholder: "Buscar comando, distância, categoria...",
    emptyStateTitle: "Nada encontrado",
    emptyStateDescription:
      "Ajuste o texto da busca ou escolha outra categoria para visualizar os comandos disponíveis.",
    exampleLabel: "Exemplo",
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
    {
      id: "preferencias",
      command: "/preferencias",
      icon: "settings",
      description:
        "Configura alertas, distâncias favoritas e a região padronizada para as buscas.",
      example: "/preferencias",
      category: "Configuracao",
    },
  ],
};

export default infoPage;
