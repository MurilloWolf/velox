"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Avatar from "./Avatar";
import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";
import MeshGradient from "../MashGradiant";
import type { Message } from "./types";
import {
  sendChatCompletion,
  type ChatHistoryItem,
} from "@/server/actions/chat";

const DEFAULT_USER_NAME = "Visitante";
const INITIAL_MESSAGE: Message = {
  id: "welcome",
  text: "Olá! 👋 Bem-vindo ao nosso FAQ. Como posso ajudá-lo hoje?",
  sender: "bot",
  timestamp: new Date(),
  format: "text",
};

const createMessageId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;

const getTimeOfDay = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "manhã";
  if (hour >= 12 && hour < 18) return "tarde";
  return "noite";
};

const buildHistoryPayload = (entries: Message[]): ChatHistoryItem[] =>
  entries.slice(-20).map((entry) => ({
    role: entry.sender === "bot" ? "assistant" : "user",
    message: entry.text,
  }));

const isHtmlContent = (value: string) =>
  /<\/?[a-z][\s\S]*>/i.test(value.trim());

export default function FAQChat() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const shouldAutoScrollRef = useRef(true);

  const scrollToBottom = (
    options: ScrollIntoViewOptions = { behavior: "smooth" }
  ) => {
    messagesEndRef.current?.scrollIntoView(options);
  };

  useEffect(() => {
    const node = chatContainerRef.current;
    if (!node) {
      return;
    }

    const handleScroll = () => {
      console.log("Scroll event detected");
      const { scrollTop, scrollHeight, clientHeight } = node;
      const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);
      shouldAutoScrollRef.current = distanceFromBottom > 120;
    };

    handleScroll();
    node.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      node.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (shouldAutoScrollRef.current) {
      scrollToBottom();
    }
  }, [messages]);

  const handleSendMessage = async () => {
    const trimmedInput = inputValue.trim();
    if (!trimmedInput || isSending) {
      return;
    }

    const userMessage: Message = {
      id: createMessageId(),
      text: trimmedInput,
      sender: "user",
      timestamp: new Date(),
      format: "text",
    };

    const previousMessages = [...messages];
    shouldAutoScrollRef.current = true;
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsSending(true);

    try {
      const data = await sendChatCompletion({
        userName: DEFAULT_USER_NAME,
        timeOfDay: getTimeOfDay(),
        currentQuestion: trimmedInput,
        history: buildHistoryPayload(previousMessages),
      });

      const assistantMessages = Array.isArray(data?.messages)
        ? data.messages
        : [data?.message ?? "Desculpe, não consegui gerar uma resposta agora."];

      const formattedMessages = assistantMessages
        .map((raw) => {
          if (raw == null) {
            return null;
          }

          const text = String(raw);
          return {
            id: createMessageId(),
            text,
            sender: "bot" as const,
            timestamp: new Date(),
            format: isHtmlContent(text) ? "html" : "text",
          } satisfies Message;
        })
        .filter(Boolean) as Message[];

      if (!formattedMessages.length) {
        formattedMessages.push({
          id: createMessageId(),
          text: "Desculpe, não consegui gerar uma resposta agora.",
          sender: "bot",
          timestamp: new Date(),
          format: "text",
        });
      }

      setMessages((prev) => [...prev, ...formattedMessages]);
    } catch (error) {
      console.error("Erro ao conversar com o assistente:", error);
      const fallbackMessage: Message = {
        id: createMessageId(),
        text:
          error instanceof Error
            ? `Desculpe, ocorreu um erro: ${error.message}`
            : "Desculpe, não consegui obter uma resposta no momento. Tente novamente em instantes.",
        sender: "bot",
        timestamp: new Date(),
        format: "text",
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <MeshGradient>
      <div className="p-2 flex h-[calc(100vh-4rem)] md:h-screen flex-col">
        <div className="w-full h-full min-h-[400px] md:min-h-[700px] mx-auto my-2 md:my-10 flex max-w-3xl flex-col overflow-hidden rounded-lg md:rounded-2xl border border-white/20 bg-white/5 shadow-2xl backdrop-blur-xl">
          <header className="flex items-center gap-4 border-b border-white/10 bg-white/10 px-2 py-1 md:px-6 md:py-4 backdrop-blur-xl">
            <Image
              src="/velox_x.png"
              alt="Velox"
              className="h-8 w-8 md:h-12 md:w-12 rounded-full object-contain"
              width={60}
              height={60}
            />
            <div className="flex flex-col text-center">
              <h1 className="text-lg sm:text-xl md:text-2xl text-left font-semibold text-white">
                Velox
              </h1>
              <p className="text-xs md:text-sm text-white/80">
                Assistente Virtual
              </p>
            </div>
          </header>
          <div
            ref={chatContainerRef}
            className="glass-scrollbar flex-1 overflow-y-auto bg-white/5 px-4 py-6 backdrop-blur-lg"
          >
            <div className="mx-auto max-w-4xl space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <Avatar message={message} />
                  <MessageBubble message={message} />
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
          <ChatInput
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSendMessage={handleSendMessage}
            handleKeyPress={handleKeyPress}
            disabled={isSending}
          />
        </div>
      </div>
    </MeshGradient>
  );
}
