"use client";
import FlurryBackground from "@/app/privacy/flurrybackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import useAnalytics from "@/tracking/useAnalytics";
import { Send, MessageSquare, Bell, Star } from "lucide-react";
import { useHomeMessages } from "@/i18n/hooks/useHomeMessages";

export default function BotShowcase() {
  const TELEGRAM_BOT_URL =
    `${process.env.NEXT_PUBLIC_BOT_URL}#${process.env.NEXT_PUBLIC_BOT_ID}` ||
    "https://web.telegram.org/a/#8475526575";
  const { trackButtonClick } = useAnalytics();
  const { botShowcase } = useHomeMessages();
  const featureIcons = [MessageSquare, Bell, Star] as const;

  const handleTelegramClick = () => {
    trackButtonClick(
      "bot_showcase:telegram_button",
      botShowcase.ctaLabel,
      TELEGRAM_BOT_URL
    );
    window.open(TELEGRAM_BOT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="bot-telegram"
      aria-labelledby="botshowcase-title"
      className="py-20 md:py-28 bg-black/80"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d5fe46] px-4 py-2 mb-4">
              <Send className="h-4 w-4 text-black" />
              <span className="text-sm font-medium text-black">
                {botShowcase.badgeLabel}
              </span>
              <FlurryBackground />
            </div>
            <h2
              id="botshowcase-title"
              className="text-4xl md:text-5xl font-bold mb-6 bg-white bg-clip-text text-transparent leading-normal"
            >
              {botShowcase.title}
            </h2>
            <p className="text-lg  mb-8 leading-relaxed text-[#eee]/90">
              {botShowcase.description}
            </p>

            <div className="space-y-4 mb-8">
              {botShowcase.features.map((feature, index) => {
                const Icon = featureIcons[index] || MessageSquare;
                return (
                  <div className="flex items-start gap-3" key={feature.title}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10  shrink-0">
                      <Icon className="h-5 w-5 text-[#d5fe46]/60" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-[#f5f5f5]/80">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button
              onClick={handleTelegramClick}
              size="lg"
              aria-label={botShowcase.ctaAriaLabel}
              className="w-full font-semibold sm:w-2/4 uppercase bg-[#d5fe46] brightness-90 hover:bg-[#d5fe46]/90 text-black  hover:opacity-80 cursor-pointer"
            >
              <Send className="mr-2 h-5 w-5" />
              {botShowcase.ctaLabel}
            </Button>
          </div>
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-[#364ff2]/10 to-accent/10 border-0 shadow-xl shadow-[#000c5a]/10">
              <div className="space-y-4">
                <div className="bg-white/15 rounded-lg p-4 shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full bg-primary/90 flex items-center justify-center">
                      <span className="text-sm">👤</span>
                    </div>
                    <span className="text-md text-white font-semibold">
                      {botShowcase.conversation.userLabel}
                    </span>
                  </div>
                  <p className="text-sm text-white">
                    {botShowcase.conversation.firstCommand}
                  </p>
                </div>
                <div className="bg-gradient-to-r to-[#666]  from-[#212121] rounded-lg p-4 shadow-md text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Send className="h-4 w-4 text-[#d5fe46]" />
                    </div>
                    <span className="font-semibold text-sm text-[#d5fe46]">
                      {botShowcase.conversation.botName}
                    </span>
                  </div>
                  <p className="text-sm">
                    {botShowcase.conversation.botResponse}
                  </p>
                  <div className="mt-3 space-y-2">
                    {botShowcase.conversation.raceSamples.map((sample) => (
                      <div
                        className="bg-white/10 rounded p-2 text-xs"
                        key={sample}
                      >
                        {sample}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/15 rounded-lg p-4 shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full bg-primary/90 flex items-center justify-center">
                      <span className="text-sm">👤</span>
                    </div>
                    <span className="text-md text-white font-semibold">
                      {botShowcase.conversation.userLabel}
                    </span>
                  </div>
                  <p className="text-sm text-white">
                    {botShowcase.conversation.secondCommand}
                  </p>
                </div>
              </div>
            </Card>
            <div className="absolute -top-4 -right-4 h-24 w-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
