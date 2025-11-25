import type { PrivacySection } from "@/types/privacy";

const privacySections: PrivacySection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    paragraphs: [
      "Your privacy matters to us. This Privacy Policy explains how we collect, use and protect the information provided by users interacting with the Velox Bot on Telegram, whether in private conversations or groups. By using the bot you agree to the terms below.",
    ],
  },
  {
    id: "data-collection",
    title: "2. Data We Collect",
    paragraphs: [
      "We collect different types of information to deliver and improve our services:",
    ],
    bullets: [
      {
        strong: "Telegram information:",
        text: "User ID, username (public name chosen in Telegram).",
      },
      {
        strong: "Messages sent to the bot in private chats;",
        text: "Commands, replies and interactions exchanged with the bot.",
      },
      {
        strong: "Messages and interactions inside groups where the bot is present;",
        text: "Commands executed, replies and contextual information.",
      },
      {
        strong: "Timestamps of each interaction",
        note: "to understand the user context and offer better support",
      },
      {
        strong: "In-bot interactions",
        text: ", including button clicks and executed commands.",
      },
      {
        strong: "Payment data:",
        text: "Subscription details and transactions (processed by secure third parties).",
      },
    ],
  },
  {
    id: "legal-basis",
    title: "3. Legal Bases",
    paragraphs: [
      "Data processing follows the legal bases established by Brazilian LGPD/GDPR when applicable:",
    ],
    bullets: [
      {
        strong: "User consent",
        text: ", granted when the user starts interacting with the bot and accepts this policy;",
      },
      {
        strong: "Legitimate interest",
        text: ", to keep the service running properly, analyze usage and continuously improve the experience.",
      },
    ],
  },
  {
    id: "information-sharing",
    title: "4. Information Sharing",
    paragraphs: [
      "We do not sell personal data or share it with third parties without explicit consent. Data may only be shared in the following scenarios:",
    ],
    bullets: [
      {
        strong: "Race organizers:",
        text: "Aggregated and anonymized statistics.",
      },
      {
        strong: "Partners and sponsors:",
        text: "Demographic insights with no personal identification.",
      },
      {
        strong: "Service providers:",
        text: "Vendors that help us run the platform (hosting, payments, analytics).",
      },
      {
        strong: "Legal requirements:",
        text: "When demanded by law or to protect our legal rights.",
      },
    ],
  },
  {
    id: "data-retention",
    title: "5. Data Retention",
    paragraphs: [
      "Data is stored only for as long as necessary to fulfil the purposes described here, or until a deletion request is issued.",
    ],
  },
  {
    id: "storage-security",
    title: "6. Storage and Security",
    bullets: [
      {
        text: "Data is stored in secure environments with technical and organizational safeguards.",
      },
      {
        text: "Access is restricted to the maintenance team responsible for Velox Bot.",
      },
      {
        text: "If servers located outside Brazil are used, international transfers follow LGPD/GDPR requirements and adequate safeguards.",
      },
    ],
  },
  {
    id: "user-rights",
    title: "7. User Rights",
    paragraphs: ["You have the right to:"],
    bullets: [
      { text: "Confirm whether we process your data" },
      { text: "Request access, correction or deletion" },
      { text: "Withdraw consent at any time" },
      {
        text: "Request anonymization, blocking or elimination of unnecessary or excessive data",
      },
    ],
    closing:
      "To exercise your rights, contact us using the information in section 11.",
  },
  {
    id: "cookies",
    title: "8. Cookies and Similar Technologies",
    paragraphs: [
      "We use cookies and similar tools to improve your experience, analyze usage and personalize content. You can manage cookies through your browser settings.",
    ],
  },
  {
    id: "minors",
    title: "9. Children",
    paragraphs: [
      "Our services are not directed at children under 13. We do not intentionally collect data from minors. If you believe we collected such information, please contact us immediately.",
    ],
  },
  {
    id: "policy-changes",
    title: "10. Changes to this Policy",
    paragraphs: [
      "This policy may be updated at any time. The most recent version will always be available on our homepage. We recommend reviewing it periodically.",
    ],
  },
  {
    id: "contact",
    title: "11. Contact",
    paragraphs: [
      "If you have any questions about this policy or how we process personal data, contact us:",
    ],
  },
];

const privacyPage = {
  lastUpdate: "2025-09-30",
  hero: {
    title: "Privacy Policy",
    subtitleLabel: "Last updated on:",
  },
  sections: privacySections,
  contact: {
    email: {
      label: "Email",
      value: "velox.running.app@gmail.com",
    },
    instagram: {
      label: "Instagram / Support",
      value: "@runningvelox",
      href: "https://t.me/veloxsupport",
    },
  },
  footer:
    "We are committed to protecting your information and being transparent about the data we collect and use.",
} as const;

export default privacyPage;
