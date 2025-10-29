"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnalyticsActions } from "@/tracking/types";
import useAnalytics from "@/tracking/useAnalytics";
import { Instagram, Mail, Send } from "lucide-react";

export default function ContactSection() {
  const instagramUrl = "https://www.instagram.com/runningvelox/";
  const telegramUrl = "https://t.me/veloxsupport";
  const emailAddress = "velox.running.app@gmail.com";

  const { trackEvent } = useAnalytics();

  const contactMethods = [
    {
      id: "TELEGRAM",
      title: "Equipe no Telegram",
      description: "Suporte em tempo real, dicas e atualizações de corridas.",
      actionLabel: "Falar no Telegram",
      href: telegramUrl,
      icon: Send,
      ariaLabel: "Abrir conversa com a equipe VELOX no Telegram",
    },
    {
      id: "EMAIL",
      title: "E-mail",
      description: "Retorno em até 24h úteis para parcerias e dúvidas gerais.",
      actionLabel: "Enviar e-mail",
      href: `mailto:${emailAddress}`,
      icon: Mail,
      ariaLabel: "Enviar um e-mail para a equipe VELOX",
    },
    {
      id: "INSTAGRAM",
      title: "Instagram",
      description: "Siga-nos para dicas diárias e novidades sobre corridas.",
      actionLabel: "@RunningVelox",
      href: instagramUrl,
      icon: Instagram,
      ariaLabel: "Abrir o perfil do VELOX no Instagram",
    },
  ] as const;

  const handleTrackSocialMedia = (id: string) => {
    trackEvent({
      action: AnalyticsActions.BUTTON_CLICK,
      targetType: "CONTACT_METHOD",
      targetId: id,
      pagePath: "/#contato",
    });
  };

  const handleContactClick = (id: string) => {
    handleTrackSocialMedia(id);
    window.open(
      contactMethods.find((method) => method.id === id)?.href,
      "_blank"
    );
  };

  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="relative overflow-hidden py-16 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-black to-[#020202]" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-64 w-64 rounded-full bg-[#d5fe46]/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#1a2dff]/10 blur-3xl" />

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-lg shadow-[0_30px_70px_-40px_rgba(213,254,70,0.35)]">
            <div className="flex flex-col items-start gap-6 text-white md:flex-row md:items-center md:justify-between">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#d5fe46]/40 bg-[#d5fe46]/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#d5fe46]">
                  Estamos online
                </span>
                <h2
                  id="contato-title"
                  className="text-balance text-3xl font-semibold text-white md:text-4xl"
                >
                  Fale com a equipe VELOX
                </h2>
                <p className="max-w-xl text-sm text-white/80 md:text-base">
                  Compartilhe uma corrida, tire dúvidas sobre o bot no Telegram
                  ou combine campanhas com a nossa comunidade de corredores.
                  Escolha o canal mais prático para você.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <Card
                    key={method.title}
                    className="h-full border border-white/10 bg-black/60 text-white ease-in duration-100 delay-0 transition hover:-translate-y-1 hover:border-[#d5fe46]/40"
                  >
                    <CardHeader className="space-y-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d5fe46]/15 text-[#d5fe46]">
                        <Icon aria-hidden className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg text-white">
                        {method.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-white/70">
                        {method.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        onClick={() => handleContactClick(method.id)}
                        aria-label={method.ariaLabel}
                        variant="outline"
                        className="w-full cursor-pointer border-[#d5fe46]/40 bg-transparent text-[#d5fe46] hover:bg-[#d5fe46] hover:text-black"
                      >
                        {method.actionLabel}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
