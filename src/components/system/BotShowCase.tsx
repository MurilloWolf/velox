import FlurryBackground from "@/app/privacy/flurrybackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send, MessageSquare, Bell, Star } from "lucide-react";

export default function BotShowcase() {
  return (
    <section className="py-20 md:py-28 bg-black/80">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d5fe46] px-4 py-2 mb-4">
              <Send className="h-4 w-4 text-black" />
              <span className="text-sm font-medium text-black">
                Bot Telegram
              </span>
              <FlurryBackground />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-white bg-clip-text text-transparent leading-normal">
              Acesse direto no Telegram
            </h2>
            <p className="text-lg  mb-8 leading-relaxed text-[#eee]/90">
              Nosso bot inteligente traz toda a plataforma VELOX para o seu
              Telegram. Busque corridas, receba dicas, acesse treinos e muito
              mais sem sair do app.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10  shrink-0">
                  <MessageSquare className="h-5 w-5 text-[#d5fe46]/60" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Comandos Simples
                  </h4>
                  <p className="text-sm text-[#f5f5f5]/80">
                    Interface intuitiva com comandos fáceis de usar
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 shrink-0">
                  <Bell className="h-5 w-5 text-[#d5fe46]/60" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Notificações Inteligentes
                  </h4>
                  <p className="text-sm text-[#f5f5f5]/80">
                    Receba alertas de novas corridas e lembretes personalizados
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10  shrink-0">
                  <Star className="h-5 w-5 text-[#d5fe46]/60" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Favoritos e Histórico
                  </h4>
                  <p className="text-sm text-[#f5f5f5]/80">
                    Salve corridas e acompanhe seu progresso
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full font-semibold sm:w-2/4 uppercase bg-[#d5fe46] brightness-90 hover:bg-[#d5fe46]/90 text-black  hover:opacity-80 cursor-pointer"
            >
              <Send className="mr-2 h-5 w-5" />
              Abrir Bot no Telegram
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
                      Você
                    </span>
                  </div>
                  <p className="text-sm text-white">/corridas</p>
                </div>
                <div className="bg-gradient-to-r to-[#666]  from-[#212121] rounded-lg p-4 shadow-md text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Send className="h-4 w-4 text-[#d5fe46]" />
                    </div>
                    <span className="font-semibold text-sm text-[#d5fe46]">
                      VELOX Bot
                    </span>
                  </div>
                  <p className="text-sm">Encontrei 12 corridas! 🏃</p>
                  <div className="mt-3 space-y-2">
                    <div className="bg-white/10 rounded p-2 text-xs">
                      📍 Maratona de São Paulo - 42km
                    </div>
                    <div className="bg-white/10 rounded p-2 text-xs">
                      📍 Corrida do Ibirapuera - 10km
                    </div>
                  </div>
                </div>

                <div className="bg-white/15 rounded-lg p-4 shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full bg-primary/90 flex items-center justify-center">
                      <span className="text-sm">👤</span>
                    </div>
                    <span className="text-md text-white font-semibold">
                      Você
                    </span>
                  </div>
                  <p className="text-sm text-white">/proximas_corridas</p>
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
