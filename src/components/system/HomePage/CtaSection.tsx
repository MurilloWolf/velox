import { Button } from "@/components/ui/button";
import { Send, Bell, CalendarCheck, Sparkles } from "lucide-react";
import MashGradiant from "../MashGradiant";

export default function CTASection() {
  const TELEGRAM_BOT_URL = "https://web.telegram.org/a/#8475526575";

  return (
    <MashGradiant>
      <section
        aria-labelledby="cta-title"
        className="relative overflow-hidden py-20 md:py-28"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
          <div className="absolute -top-32 right-[-10%] h-72 w-72 rounded-full bg-[#d5fe46]/25 blur-3xl" />
          <div className="absolute bottom-[-20%] left-[-10%] h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm uppercase tracking-widest text-white/90 backdrop-blur">
              <Sparkles className="h-4 w-4 text-[#d5fe46]" />
              Foque nos treinos, deixe o resto com a gente!
            </div>

            <div className="space-y-6">
              <h2
                id="cta-title"
                className="text-balance font-sans text-3xl font-bold text-white md:text-5xl"
              >
                O assistente definitivo para corredores
              </h2>
              <p className="mx-auto max-w-2xl text-pretty text-base text-white/80 md:text-lg">
                O Velox reúne todas as corridas em um só lugar, envia lembretes
                no Telegram, salva seus eventos favoritos e ainda oferece dicas
                personalizadas para você melhorar seu desempenho.
              </p>
            </div>

            <div className="grid w-full gap-6 md:grid-cols-3">
              <FeatureCard
                icon={<CalendarCheck className="h-6 w-6 text-[#d5fe46]" />}
                title="Calendário vivo"
                description="Todas as corridas da sua região, atualizadas em tempo real."
              />
              <FeatureCard
                icon={<Bell className="h-6 w-6 text-[#d5fe46]" />}
                title="Alertas personalizados"
                description="Salve suas corridas favoritas e receba notificações no Telegram."
              />
              <FeatureCard
                icon={<Sparkles className="h-6 w-6 text-[#d5fe46]" />}
                title="Insights inteligentes"
                description="Encontre o local da prova, previsão do tempo, dicas de treino a qualquer hora do dia."
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="cursor-pointer h-auto w-full bg-[#d5fe46] px-8 py-4 text-base font-semibold uppercase text-black hover:bg-[#d5fe46]/90 sm:w-auto"
              >
                <a
                  href={TELEGRAM_BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Acessar o VELOX Bot no Telegram"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Acessar bot no Telegram
                </a>
              </Button>
            </div>

            <div className="flex flex-col items-center gap-2 text-sm text-white/70 md:flex-row">
              <span>Gratuito • Sem cadastro • Respostas imediatas</span>
              <span className="hidden md:block">·</span>
              <span>Eventos atualizados</span>
            </div>
          </div>
        </div>
      </section>
    </MashGradiant>
  );
}

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-left shadow-[0_0_25px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1 hover:border-[#d5fe46]/60 hover:shadow-[0_0_35px_rgba(213,254,70,0.25)]">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex items-start gap-4">
        <div className="flex p-2 items-center justify-center rounded-full bg-white/10 text-[#d5fe46]">
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-white/85">{description}</p>
        </div>
      </div>
    </div>
  );
}
