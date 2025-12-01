const homePage = {
  hero: {
    title: "Encontrando as melhores provas de corrida para você",
    subtitle: "Sua plataforma completa de corridas",
    cta: "Encontrar Provas Agora",
  },
  botShowcase: {
    badgeLabel: "Bot Telegram",
    title: "Acesse direto no Telegram",
    description:
      "Nosso bot inteligente traz toda a plataforma VELOX para o seu Telegram. Busque corridas, receba dicas, acesse treinos e muito mais sem sair do app.",
    features: [
      {
        title: "Comandos Simples",
        description: "Interface intuitiva com comandos fáceis de usar",
      },
      {
        title: "Notificações Inteligentes",
        description:
          "Receba alertas de novas corridas e lembretes personalizados",
      },
      {
        title: "Favoritos e Histórico",
        description: "Salve corridas e acompanhe seu progresso",
      },
    ],
    ctaLabel: "Abrir bot no Telegram",
    ctaAriaLabel: "Abrir o VELOX Bot no Telegram em uma nova aba",
    conversation: {
      userLabel: "Você",
      firstCommand: "/corridas",
      botName: "VELOX Bot",
      botResponse: "Encontrei 12 corridas! 🏃",
      raceSamples: [
        "📍 Maratona de São Paulo - 42km",
        "📍 Corrida do Ibirapuera - 10km",
      ],
      secondCommand: "/proximas_corridas",
    },
  },
  platformFeatures: {
    title: "Tudo que você precisa para correr melhor",
    description:
      "VELOX reúne todas as ferramentas essenciais para corredores em uma única plataforma integrada",
    cards: [
      {
        id: "calendar",
        title: "Calendário de Corridas",
        description:
          "Encontre corridas de 5km, 10km, meia maratona e maratona completa em todo o Brasil. Filtros por distância, cidade e data.",
      },
      {
        id: "bot",
        title: "Bot no Telegram",
        description:
          "Acesse todas as funcionalidades direto no Telegram. Notificações de novas corridas, lembretes e muito mais.",
      },
      {
        id: "training",
        title: "Planos de Treino",
        description:
          "Treinos estruturados para iniciantes e avançados. Prepare-se para sua próxima corrida com orientação profissional.",
      },
      {
        id: "nutrition",
        title: "Guia de Nutrição",
        description:
          "Aprenda quando e quanto beber antes, durante e depois das corridas. Dicas para diferentes distâncias e climas.",
      },
    ],
    carouselAriaLabel: "Ver mais recursos",
  },
  trainingSheets: {
    comingSoon: "Em breve",
    badgeLabel: "Acelere seus resultados",
    title: "Planilhas de Treino",
    highlight: "Personalizadas",
    description:
      "Transforme sua corrida com planilhas estruturadas por especialistas. Do iniciante ao avançado, temos o treino ideal para você.",
    features: [
      {
        title: "Planilhas Profissionais",
        description: "Treinos estruturados por especialistas em corrida",
      },
      {
        title: "Progressão Garantida",
        description: "Evolução gradual e segura do seu desempenho",
      },
      {
        title: "Resultados Comprovados",
        description: "Mais de 1000 corredores já alcançaram seus objetivos",
      },
    ],
    ctaLabel: "Ver Planilhas de Treino",
    ctaTrackingLabel: "Ver Planilhas",
    footnote:
      "✨ Acesso vitalício • 🏃‍♂️ Suporte especializado • 📈 Resultados garantidos",
  },
  ctaSection: {
    badgeText: "Foque nos treinos, deixe o resto com a gente!",
    title: "O assistente definitivo para corredores",
    description:
      "O Velox reúne todas as corridas em um só lugar, envia lembretes no Telegram, salva seus eventos favoritos e ainda oferece dicas personalizadas para você melhorar seu desempenho.",
    features: [
      {
        title: "Calendário vivo",
        description:
          "Todas as corridas da sua região, atualizadas em tempo real.",
      },
      {
        title: "Alertas personalizados",
        description:
          "Salve suas corridas favoritas e receba notificações no Telegram.",
      },
      {
        title: "Insights inteligentes",
        description:
          "Encontre o local da prova, previsão do tempo, dicas de treino a qualquer hora do dia.",
      },
    ],
    buttonLabel: "Acessar bot no Telegram",
    buttonAriaLabel: "Acessar o VELOX Bot no Telegram",
    footnote:
      "Gratuito • Sem cadastro • Respostas imediatas · Eventos atualizados",
  },
  contactSection: {
    badgeText: "Estamos online",
    title: "Fale com a equipe VELOX",
    description:
      "Compartilhe uma corrida, tire dúvidas sobre o bot no Telegram ou combine campanhas com a nossa comunidade de corredores. Escolha o canal mais prático para você.",
    methods: [
      {
        id: "TELEGRAM",
        title: "Equipe no Telegram",
        description: "Suporte em tempo real, dicas e atualizações de corridas.",
        actionLabel: "Falar no Telegram",
        ariaLabel: "Abrir conversa com a equipe VELOX no Telegram",
      },
      {
        id: "EMAIL",
        title: "E-mail",
        description:
          "Retorno em até 24h úteis para parcerias e dúvidas gerais.",
        actionLabel: "Enviar e-mail",
        ariaLabel: "Enviar um e-mail para a equipe VELOX",
      },
      {
        id: "INSTAGRAM",
        title: "Instagram",
        description: "Siga-nos para dicas diárias e novidades sobre corridas.",
        actionLabel: "@RunningVelox",
        ariaLabel: "Abrir o perfil do VELOX no Instagram",
      },
    ],
  },
};

export default homePage;
