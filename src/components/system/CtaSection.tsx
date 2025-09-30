import { Button } from "@/components/ui/button";
import { Send, Bell, Star } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex gap-2">
            <Star className="h-8 w-8 text-yellow-300 fill-yellow-300" />
            <Star className="h-8 w-8 text-yellow-300 fill-yellow-300" />
            <Star className="h-8 w-8 text-yellow-300 fill-yellow-300" />
          </div>

          <h2 className="mb-6 text-balance font-sans text-3xl font-bold text-white md:text-5xl">
            Pronto para Começar sua Jornada?
          </h2>

          <p className="mb-8 max-w-2xl text-pretty text-lg text-white/90 leading-relaxed">
            Junte-se a milhares de corredores que já usam nosso bot para
            encontrar as melhores corridas. Receba notificações sobre novas
            corridas e não perca nenhuma oportunidade!
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto"
            >
              <Send className="mr-2 h-5 w-5" />
              Acessar Bot no Telegram
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
            >
              <Bell className="mr-2 h-5 w-5" />
              Ativar Notificações
            </Button>
          </div>

          <p className="mt-6 text-sm text-white/70">
            Gratuito para sempre • Sem cadastro necessário • Atualizações em
            tempo real
          </p>
        </div>
      </div>
    </section>
  );
}
