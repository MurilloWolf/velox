"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Avatar from "./Avatar";
import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";
import MeshGradient from "../MashGradiant";

type Message = {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
};

const FAQ_RESPONSES: Record<string, string> = {
  "o que é":
    "Sou um assistente virtual de FAQ. Estou aqui para responder suas perguntas frequentes sobre nossos serviços e produtos.",
  horário: "Nosso horário de atendimento é de segunda a sexta, das 9h às 18h.",
  contato:
    "Você pode entrar em contato conosco pelo email contato@exemplo.com ou pelo telefone (11) 1234-5678.",
  preço:
    "Nossos preços variam de acordo com o plano escolhido. Temos opções a partir de R$ 29,90/mês.",
  suporte:
    "Oferecemos suporte técnico 24/7 para todos os nossos clientes através do chat, email e telefone.",
  cancelamento:
    "Você pode cancelar seu plano a qualquer momento sem multas. O cancelamento é processado em até 48 horas.",
  pagamento:
    "Aceitamos cartão de crédito, débito, PIX e boleto bancário como formas de pagamento.",
  entrega:
    "O prazo de entrega varia de 3 a 7 dias úteis dependendo da sua localização.",
};

export default function FAQChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Olá! 👋 Bem-vindo ao nosso FAQ. Como posso ajudá-lo hoje?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    for (const [key, response] of Object.entries(FAQ_RESPONSES)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    return "Desculpe, não encontrei uma resposta específica para sua pergunta. Você pode reformular ou perguntar sobre: horários, contato, preços, suporte, cancelamento, pagamento ou entrega.";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <MeshGradient>
      <div className="flex h-screen flex-col">
        {/* Header */}
        <div className="w-full h-full min-h-[700px] mx-auto my-10 flex max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-2xl backdrop-blur-xl">
          <header className="flex items-center gap-4 border-b border-white/10 bg-white/10 px-6 py-4 backdrop-blur-xl">
            <Image
              src="/velox_x.png"
              alt="Velox"
              className="h-12 w-12 rounded-full object-contain"
              width={60}
              height={60}
            />
            <div className="flex flex-col text-center">
              <h1 className="text-2xl text-left font-semibold text-white">
                Velox
              </h1>
              <p className="text-sm text-white/80">Assistente Virtual</p>
            </div>
          </header>

          {/* Chat Container */}
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
          />
        </div>
      </div>
    </MeshGradient>
  );
}
