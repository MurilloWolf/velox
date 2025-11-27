const notFoundPage = {
  badgeLabel: "Error 404",
  title: "Oops, this track hasn't been mapped yet 🚧",
  description:
    "Looks like you sprinted to a place we're still building. While we open new routes, explore the experiences that are already ready to boost your journey.",
  primaryCta: {
    label: "Back to the start",
    href: "/",
  },
  secondaryCta: {
    label: "Frequently asked questions",
    href: "/faq",
  },
  suggestionBadge: "Velox recommends",
  suggestionCta: "Explore →",
  suggestions: [
    {
      icon: "compass",
      title: "Discover races",
      description:
        "Browse the complete calendar and find new events in seconds.",
      href: "/calendar",
    },
    {
      icon: "sparkles",
      title: "Meet the bot",
      description: "See the Velox bot commands and features that speed you up.",
      href: "/info",
    },
  ],
} as const;

export default notFoundPage;
