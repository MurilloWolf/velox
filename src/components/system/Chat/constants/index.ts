import { Message } from "../types";
import { RateLimitViolation } from "../utils/rate-limit";

export type ChatLocaleKey = "pt-BR" | "en-US";

export type ChatCopy = {
  fallback: string;
  defaultUserName: string;
  initialMessage: string;
  rateLimitMessages: Record<RateLimitViolation, string>;
};

const CHAT_COPY: Record<ChatLocaleKey, ChatCopy> = {
  "pt-BR": {
    fallback:
      "Desculpe, não consegui gerar uma resposta agora. Tente novamente em instantes.",
    defaultUserName: "Visitante",
    initialMessage: "Olá! 👋 Bem-vindo ao nosso FAQ. Como posso ajudá-lo hoje?",
    rateLimitMessages: {
      min_length:
        "Preciso de um pouco mais de contexto para ajudar. Escreva uma mensagem mais completa.",
      duplicate:
        "Recebi essa mensagem há pouco tempo. Tente reformular a pergunta em vez de repetir.",
      frequency:
        "Você enviou muitas mensagens em sequência. Aguarde alguns segundos antes de continuar.",
    },
  },
  "en-US": {
    fallback:
      "Sorry, I couldn’t generate a response this time. Please try again in a moment.",
    defaultUserName: "Guest",
    initialMessage: "Hi there! 👋 Welcome to our FAQ. How can I help today?",
    rateLimitMessages: {
      min_length:
        "I need a bit more context to help. Please share a more detailed message.",
      duplicate:
        "I received this same message recently. Try rephrasing your question instead of repeating it.",
      frequency:
        "You sent many messages in a row. Please wait a few seconds before continuing.",
    },
  },
} as const;

export const getChatCopy = (locale: ChatLocaleKey = "pt-BR"): ChatCopy =>
  CHAT_COPY[locale] ?? CHAT_COPY["pt-BR"];

export const buildInitialMessage = (
  text: string = CHAT_COPY["pt-BR"].initialMessage
): Message => ({
  id: "welcome",
  text,
  sender: "bot",
  timestamp: new Date(),
  format: "text",
});
