const infoPage = {
  hero: {
    badge: {
      label: "VELOX Bot",
      description: "Take control of your races in seconds",
    },
    title: "Your smart racing hub directly in Telegram",
    description:
      "Track registrations, receive real-time alerts and customize the search for the races you want the most. All inside a fast, runner-friendly interface.",
    primaryCta: "Open on Telegram",
  },
  howItWorksCard: {
    title: "Get started in three quick steps",
    description: "Use the bot as if it were a dedicated app.",
  },
  howItWorks: [
    {
      step: "1",
      title: "Connect on Telegram",
      description:
        "Search for @RunningVeloxBot or tap the button below to start instantly.",
    },
    {
      step: "2",
      title: "Look for your races",
      description:
        "Filter by distance, city or date to find events that match your goals.",
    },
    {
      step: "3",
      title: "Monitor in real time",
      description:
        "Get instant alerts for new races, changes and registrations as soon as they happen.",
    },
  ],
  commandsSection: {
    title: "Core commands",
    description:
      "Filter by category or search keywords to discover everything the bot can do.",
    searchPlaceholder: "Search command, distance, category...",
    emptyStateTitle: "Nothing found",
    emptyStateDescription:
      "Adjust the search text or pick another category to see available commands.",
    exampleLabel: "Example",
  },
  categories: ["All", "Basic", "Settings", "Race"],
  commands: [
    {
      id: "start",
      command: "/start",
      icon: "send",
      description:
        "Sends a friendly greeting, introduces the bot and suggests the next steps.",
      example: "/start",
      category: "Basic",
    },
    {
      id: "ajuda",
      command: "/ajuda",
      icon: "help-circle",
      description:
        "Lists every available command and explains the feature categories.",
      example: "/ajuda",
      category: "Basic",
    },
    {
      id: "corridas",
      command: "/corridas",
      icon: "trophy",
      description:
        "Shows open races with buttons to view details or filter by distance.",
      example: "/corridas",
      category: "Race",
    },
    {
      id: "buscar-corridas",
      command: "/buscar_corridas",
      icon: "search",
      description:
        "Opens quick filters by distance range so you can find targeted races.",
      example: "/buscar_corridas",
      category: "Race",
    },
    {
      id: "proxima-corrida",
      command: "/proxima_corrida",
      icon: "calendar",
      description:
        "Returns the next upcoming race with date, location and available distances.",
      example: "/proxima_corrida",
      category: "Race",
    },
    {
      id: "favoritos",
      command: "/favoritos",
      icon: "star",
      description:
        "Displays your favorited races and lets you open the details instantly.",
      example: "/favoritos",
      category: "Race",
    },
    {
      id: "preferencias",
      command: "/preferencias",
      icon: "settings",
      description:
        "Configure alerts, favorite distances and the default region used in searches.",
      example: "/preferencias",
      category: "Settings",
    },
  ],
};

export default infoPage;
