import type { Message } from "../types";
import type { ChatHistoryItem } from "@/services/actions/chat";

export const createMessageId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;

export const buildHistoryPayload = (
  entries: Message[],
  limit = 20
): ChatHistoryItem[] =>
  entries.slice(-limit).map((entry) => ({
    role: entry.sender === "bot" ? "assistant" : "user",
    message: entry.text,
  }));

export const isHtmlContent = (value: string) =>
  /<\/?[a-z][\s\S]*>/i.test(value.trim());
