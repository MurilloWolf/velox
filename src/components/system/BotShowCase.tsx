import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send, MessageSquare, Bell, Star } from "lucide-react";

export default function BotShowcase() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-4">
              <Send className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Bot Telegram
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Acesse tudo direto no Telegram
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nosso bot inteligente traz toda a plataforma VELOX para o seu
              Telegram. Busque corridas, receba dicas, acesse treinos e muito
              mais sem sair do app.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Comandos Simples</h4>
                  <p className="text-sm text-muted-foreground">
                    Interface intuitiva com comandos fáceis de usar
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                  <Bell className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    Notificações Inteligentes
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Receba alertas de novas corridas e lembretes personalizados
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Favoritos e Histórico</h4>
                  <p className="text-sm text-muted-foreground">
                    Salve corridas e acompanhe seu progresso
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="w-2/4 bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              <Send className="mr-2 h-5 w-5" />
              Abrir Bot no Telegram
            </Button>
          </div>

          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-sm">👤</span>
                    </div>
                    <span className="font-medium text-sm">Você</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    /buscar corridas São Paulo
                  </p>
                </div>

                <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-4 shadow-md text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Send className="h-4 w-4" />
                    </div>
                    <span className="font-medium text-sm">VELOX Bot</span>
                  </div>
                  <p className="text-sm">
                    Encontrei 12 corridas em São Paulo! 🏃
                  </p>
                  <div className="mt-3 space-y-2">
                    <div className="bg-white/10 rounded p-2 text-xs">
                      📍 Maratona de São Paulo - 42km
                    </div>
                    <div className="bg-white/10 rounded p-2 text-xs">
                      📍 Corrida do Ibirapuera - 10km
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-sm">👤</span>
                    </div>
                    <span className="font-medium text-sm">Você</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    /dica hidratação
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
