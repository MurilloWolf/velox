const sponsorsPage = {
  hero: {
    badgeLabel: "Sponsorship Program",
    title: "Build the future with VELOX",
    description:
      "We are opening a window for brands to connect with runners in an authentic way. No inflated metrics: we believe in co-creation, bespoke deliveries and real proximity from day one.",
    primaryCta: {
      label: "Contact us",
      ariaLabel: "Start a WhatsApp conversation with the VELOX team",
      link: null,
    },
    secondaryCta: {
      label: "Download media kit",
      ariaLabel: "Download the VELOX media kit",
      link: null,
    },
    highlights: [
      {
        label: "Momentum",
        title: "Ecosystem on the rise",
        description:
          "We are in the early stage of building our ecosystem, creating unique opportunities for brands that want to be there from the very beginning.",
      },
      {
        label: "Reach",
        title: "Growing organic base",
        description:
          "Gaining new runners every day, we are becoming the go-to platform for athletes looking for simplicity when choosing races and training plans.",
      },
      {
        label: "Events",
        title: "One-of-a-kind in Brazil",
        description:
          "We are doing what no one has done: connecting a large set of road races in a single destination.",
      },
    ],
  },
  differentiatorsSection: {
    title: "Why your brand matches VELOX",
    description:
      "We are building an engaged community of runners. These are the differentiators that make VELOX the ideal platform for your brand to reach this audience.",
    cards: [
      {
        icon: "target",
        title: "Relevance",
        description:
          "Your race or brand presented to the right audience at the right moment.",
        detail:
          "Instead of generic ads, your brand is promoted to runners who already showed interest in similar events and sports products.",
      },
      {
        icon: "chart-column-increasing",
        title: "Accurate metrics",
        description:
          "We track every campaign transparently, so you know exactly what resonates.",
        detail:
          "You can compare performance directly with other sports events running on the platform.",
      },
      {
        icon: "trending-up",
        title: "Actionable insights from day one",
        description: "Clear metrics to assess engagement, interest and conversion.",
        detail:
          "Detailed reports about your event or campaign, allowing quick optimizations to maximize results.",
      },
    ],
  },
  ctaCard: {
    title: "Let's craft the ideal pilot for your brand",
    description:
      "Schedule a call to map audiences, prioritize race calendars and turn each touchpoint into a competitive advantage.",
    cta: {
      label: "Send a message",
      ariaLabel: "Open a conversation with the VELOX team",
      link: null,
    },
  },
  contact: {
    whatsappNumber: "5518997708504",
    whatsappMessage:
      "Hi! I'd like to learn more about VELOX sponsorship opportunities.",
  },
  mediaKit: {
    fileId: "1XgAViZrE26H6zy-xjDWi2y68bGSsH9pa",
    fileName: "Velox_Media_Kit.pdf",
  },
} as const;

export default sponsorsPage;
