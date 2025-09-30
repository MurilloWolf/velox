import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Coffee, Zap, Sparkles } from "lucide-react";

export default function DonationSection() {
  return (
    <section
      id="apoie"
      className="py-16 md:py-24 bg-gradient-to-br from-[#d5fe46]/10 via-[#121212]/10 to-[#121212]/10 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#d5fe46] to-[#121212] mb-6 shadow-xl">
              <Heart className="h-10 w-10 text-white fill-white animate-pulse" />
            </div>
            <h2 className="mb-4 text-balance font-sans text-4xl font-bold text-foreground md:text-5xl">
              Apoie a VELOX
            </h2>
            <p className="text-pretty text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto font-medium">
              Ajude a manter a plataforma gratuita e com novas funcionalidades
              para toda a comunidade de corredores!
            </p>
          </div>

          {/* Donation Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-10">
            <Card className="text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-2 hover:border-secondary bg-white">
              <CardHeader className="">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary/20 to-accent/20">
                  <Coffee className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Café</CardTitle>
                <CardDescription className="text-2xl font-bold text-secondary">
                  R$ 10
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  Um cafézinho para manter o desenvolvedor acordado
                </p>
                <Button className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90 text-white">
                  Doar R$ 10
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-2 hover:border-accent bg-white relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 bg-gradient-to-r from-[#121212] to-[#212121] text-[#d5fe46] text-xs font-bold px-3 py-1 rounded-full">
                  <Sparkles className="h-3 w-3 " />
                  POPULAR
                </span>
              </div>
              <CardHeader className="pb-4">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-primary/20">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Powerade</CardTitle>
                <CardDescription className="text-2xl font-bold text-accent">
                  R$ 25
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  Ajude a pagar os custos de servidor
                </p>
                <Button className="w-full bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white">
                  Doar R$ 25
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-2 hover:border-primary bg-white">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-chart-4/20">
                  <Heart className="h-8 w-8 text-primary fill-primary" />
                </div>
                <CardTitle className="text-2xl">Carbo gel</CardTitle>
                <CardDescription className="text-2xl font-bold text-primary">
                  R$ 50+
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  Seja um super apoiador do projeto
                </p>
                <Button className="w-full bg-gradient-to-r from-primary to-chart-4 hover:opacity-90 text-white">
                  Doar R$ 50+
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Impact Statement */}
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
            <CardContent>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">
                    Como sua doação ajuda:
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mantemos os servidores ativos, adicionamos novas corridas
                    semanalmente, desenvolvemos novos recursos como dicas e
                    treinos personalizados, e oferecemos suporte à comunidade de
                    corredores. Cada contribuição faz diferença!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
