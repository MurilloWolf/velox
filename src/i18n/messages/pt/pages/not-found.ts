const notFoundPage = {
  badgeLabel: "Erro 404",
  title: "Ops, essa pista ainda não foi mapeada 🚧",
  description:
    "Parece que você correu para um lugar que ainda estamos construindo. Enquanto abrimos novas rotas, aproveite para explorar experiências que já estão prontas para impulsionar sua jornada.",
  primaryCta: {
    label: "Voltar para o início",
    href: "/",
  },
  secondaryCta: {
    label: "Perguntas frequentes",
    href: "/faq",
  },
  suggestionBadge: "Velox recomenda",
  suggestionCta: "Explorar →",
  suggestions: [
    {
      icon: "compass",
      title: "Descobrir corridas",
      description:
        "Explore o calendário completo e encontre novas provas em segundos.",
      href: "/calendar",
    },
    {
      icon: "sparkles",
      title: "Conhecer o bot",
      description:
        "Veja comandos e recursos do Velox para acelerar sua jornada.",
      href: "/info",
    },
  ],
} as const;

export default notFoundPage;
