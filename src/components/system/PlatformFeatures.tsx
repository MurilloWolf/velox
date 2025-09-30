import { Card } from "@/components/ui/card";
import {
  Calendar,
  Lightbulb,
  Dumbbell,
  Droplets,
  Send,
  TrendingUp,
} from "lucide-react";

export default function PlatformFeatures() {
  const features = [
    {
      icon: Calendar,
      title: "Calendário de Corridas",
      description:
        "Encontre corridas de 5km, 10km, meia maratona e maratona completa em todo o Brasil. Filtros por distância, cidade e data.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Send,
      title: "Bot no Telegram",
      description:
        "Acesse todas as funcionalidades direto no Telegram. Notificações de novas corridas, lembretes e muito mais.",
      gradient: "from-primary to-accent",
    },
    {
      icon: Lightbulb,
      title: "Dicas Personalizadas",
      description:
        "Receba dicas de corrida baseadas no seu nível, objetivos e histórico. Conselhos sobre técnica, equipamentos e nutrição.",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: Dumbbell,
      title: "Planos de Treino",
      description:
        "Treinos estruturados para iniciantes e avançados. Prepare-se para sua próxima corrida com orientação profissional.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Droplets,
      title: "Guia de Hidratação",
      description:
        "Aprenda quando e quanto beber antes, durante e depois das corridas. Dicas para diferentes distâncias e climas.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: TrendingUp,
      title: "Acompanhamento",
      description:
        "Salve suas corridas favoritas, acompanhe seu progresso e receba recomendações personalizadas.",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="recursos" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-4">
            <span className="text-sm font-medium text-primary">
              Recursos da Plataforma
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Tudo que você precisa para correr melhor
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            VELOX reúne todas as ferramentas essenciais para corredores em uma
            única plataforma integrada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 group"
            >
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
