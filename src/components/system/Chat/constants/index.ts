import { Message } from "../types";
import { RateLimitViolation } from "../utils/rate-limit";

export const ASSISTANT_FALLBACK_MESSAGE =
  "Desculpe, não consegui gerar uma resposta agora. Tente novamente em instantes.";

export const DEFAULT_USER_NAME = "Visitante";

export const INITIAL_MESSAGE: Message = {
  id: "welcome",
  text: "Olá! 👋 Bem-vindo ao nosso FAQ. Como posso ajudá-lo hoje?",
  sender: "bot",
  timestamp: new Date(),
  format: "text",
};

export const RATE_LIMIT_MESSAGES: Record<RateLimitViolation, string> = {
  min_length:
    "Preciso de um pouco mais de contexto para ajudar. Escreva uma mensagem mais completa.",
  duplicate:
    "Recebi essa mensagem há pouco tempo. Tente reformular a pergunta em vez de repetir.",
  frequency:
    "Você enviou muitas mensagens em sequência. Aguarde alguns segundos antes de continuar.",
};
