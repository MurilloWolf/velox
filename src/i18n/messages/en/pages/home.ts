const homePage = {
  hero: {
    title: "Finding the best road races for you",
    subtitle: "Your complete running companion",
    cta: "Find races now",
  },
  botShowcase: {
    badgeLabel: "Telegram Bot",
    title: "Access everything inside Telegram",
    description:
      "Our smart bot brings the entire VELOX platform to your Telegram. Search races, get tips, access training plans and more without leaving the app.",
    features: [
      {
        title: "Simple Commands",
        description: "An intuitive interface with easy-to-use shortcuts",
      },
      {
        title: "Smart Notifications",
        description: "Receive alerts for new races and personalized reminders",
      },
      {
        title: "Favorites & History",
        description: "Save races and track your progress",
      },
    ],
    ctaLabel: "Open bot on Telegram",
    ctaAriaLabel: "Open the VELOX Bot on Telegram in a new tab",
    conversation: {
      userLabel: "You",
      firstCommand: "/corridas",
      botName: "VELOX Bot",
      botResponse: "I found 12 races! 🏃",
      raceSamples: [
        "📍 Washington Marathon - 42km",
        "📍 Alexandria Run - 10km",
      ],
      secondCommand: "/proximas_corridas",
    },
  },
  platformFeatures: {
    title: "Everything you need to run better",
    description:
      "VELOX combines every essential tool for runners into a single integrated platform",
    cards: [
      {
        id: "calendar",
        title: "Race Calendar",
        description:
          "Find 5K, 10K, half and full marathons across Brazil. Filter by distance, city and date.",
      },
      {
        id: "bot",
        title: "Telegram Bot",
        description:
          "Access every feature directly inside Telegram. Get alerts, reminders and more.",
      },
      {
        id: "training",
        title: "Training Plans",
        description:
          "Structured sessions for beginners and advanced runners. Get pro guidance for your next race.",
      },
      {
        id: "nutrition",
        title: "Nutrition Guide",
        description:
          "Learn when and how much to hydrate before, during and after each race.",
      },
    ],
    carouselAriaLabel: "View more features",
  },
  trainingSheets: {
    badgeLabel: "Accelerate your results",
    title: "Training Plans",
    highlight: "Personalized",
    description:
      "Transform your running with structured plans built by specialists. From first timers to advanced athletes, we have the right plan for you.",
    features: [
      {
        title: "Professional Plans",
        description: "Sessions designed by running coaches",
      },
      {
        title: "Guaranteed Progression",
        description: "Gradual, safe evolution for your performance",
      },
      {
        title: "Proven Results",
        description: "Over 1000 runners have already hit their goals",
      },
    ],
    ctaLabel: "View Training Plans",
    ctaTrackingLabel: "View Plans",
    footnote:
      "✨ Lifetime access • 🏃‍♂️ Expert support • 📈 Proven performance boosts",
  },
  ctaSection: {
    badgeText: "Focus on training, we handle the rest!",
    title: "The ultimate assistant for runners",
    description:
      "Velox gathers every race in one place, sends Telegram reminders, saves your favorite events and offers personalized tips to help you improve.",
    features: [
      {
        title: "Live calendar",
        description:
          "All races in your area with real-time updates and filters.",
      },
      {
        title: "Personalized alerts",
        description:
          "Save favorites and get Telegram notifications the moment something changes.",
      },
      {
        title: "Smart insights",
        description:
          "Find the race venue, weather outlook and training tips any time of day.",
      },
    ],
    buttonLabel: "Access bot on Telegram",
    buttonAriaLabel: "Open the VELOX Bot on Telegram",
    footnote:
      "Free • No signup • Instant replies · Continuously updated events",
  },
  contactSection: {
    badgeText: "We are online",
    title: "Talk to the VELOX team",
    description:
      "Share a race, ask questions about the Telegram bot or plan campaigns with our running community. Pick the channel that fits you best.",
    methods: [
      {
        id: "TELEGRAM",
        title: "Telegram team",
        description: "Real-time support, tips and race updates.",
        actionLabel: "Talk on Telegram",
        ariaLabel: "Open a chat with the VELOX team on Telegram",
      },
      {
        id: "EMAIL",
        title: "Email",
        description:
          "Replies within 24 business hours for partnerships or questions.",
        actionLabel: "Send email",
        ariaLabel: "Send an email to the VELOX team",
      },
      {
        id: "INSTAGRAM",
        title: "Instagram",
        description: "Follow us for daily tips and running news.",
        actionLabel: "@RunningVelox",
        ariaLabel: "Open the VELOX Instagram profile",
      },
    ],
  },
};

export default homePage;
