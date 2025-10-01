import { Button } from "@/components/ui/button";
import MashGradient from "./MashGradiant";
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
      className="py-16 md:py-24  bg-[#121212] relative overflow-hidden"
    >
      {/* <div className="absolute top-0 left-0 w-96 h-96 bg-[#d5fe46]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" /> */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#d5fe46] to-[#121212] mb-6 shadow-xl">
              <Heart className="h-10 w-10 text-white fill-white animate-pulse" />
            </div>
            <h2 className="mb-4 text-balance font-sans text-4xl font-bold text-[#d5fe46] md:text-5xl">
              Apoie a VELOX
            </h2>
            <p className="text-pretty text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-medium">
              Ajude a manter a plataforma gratuita e com novas funcionalidades
              para toda a comunidade de corredores!
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-10">
            <Card className="text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-gray-400 border-2 hover:border-secondary bg-[#121212]/20 group">
              <CardHeader className="">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gray-500/20 to-accent/20">
                  <Coffee className="h-8 w-8 text-gray-400" />
                </div>
                <CardTitle className="text-2xl text-gray-400 group-hover:text-shadow-[0_0_8px_gray]">
                  Café
                </CardTitle>
                <CardDescription className="text-2xl font-bold text-gray-400">
                  R$ 10
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400 mb-6">
                  Um cafézinho para manter o projeto vivo
                </p>
                <Button className="group  w-full hover:font-bold hover:text-white bg-gradient-to-r from-gray-500 to-gray-300 hover:opacity-90 text-white cursor-pointer">
                  Doar R$ 10
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-[0_0_8px_#f05a24] transition-all hover:-translate-y-2 border-2 border-[#f05a24]/50 hover:border-[#f05a24] bg-[#121212]/20 relative group">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 bg-gradient-to-r from-[#121212] to-[#212121] border-[1px] border-[#f05a24]/50 text-[#f05a24] text-xs font-bold px-3 py-1 rounded-full">
                  <Sparkles className="h-3 w-3 " />
                  POPULAR
                </span>
              </div>
              <CardHeader className="pb-4">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br rom-gray-500/20 to-accent/20">
                  <Zap className="h-8 w-8 text-[#f05a24]" />
                </div>
                <CardTitle className="text-2xl text-[#f05a24] group-hover:text-shadow-[0_0_8px_#f05a24]">
                  Powerade
                </CardTitle>
                <CardDescription className="text-2xl font-bold text-[#f05a24]">
                  R$ 25
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm  text-gray-300 mb-6">
                  Ajude-nos a a ir mais longe
                </p>
                <Button className="w-full cursor-pointer hover:font-bold hover:text-white bg-gradient-to-r from-[#f05a24]/40 to-[#f05a24]/80 hover:opacity-90 text-white">
                  Doar R$ 25
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-[#d5fe46]/50 hover:border-[#d5fe46] bg-[#121212]/80 group">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gray-500/20 to-accent/20">
                  <Heart className="h-8 w-8 text-[#d5fe46] fill-[#d5fe46]" />
                </div>
                <CardTitle className="text-2xl text-[#d5fe46] group-hover:text-shadow-[0_0_8px_#d5fe46]">
                  Carbo gel
                </CardTitle>
                <CardDescription className="text-2xl font-bold text-[#d5fe46]">
                  R$ 50+
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#d5fe46] mb-6">
                  Nos ajude a ir mais rápido
                </p>
                <Button className="w-full hover:font-bold hover:text-white cursor-pointer bg-gradient-to-r from-[#d5fe46]/40 to-[#d5fe46]/80 hover:opacity-90 text-white">
                  Doar R$ 50+
                </Button>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-[#202020]/60 border-0">
            <CardContent>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d5fe46]/80">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#d5fe46]">
                    Como sua doação ajuda:
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Mantemos os servidores ativos, adicionamos novas corridas
                    semanalmente, desenvolvemos novos recursos como dicas e
                    treinos personalizados, e oferecemos suporte à comunidade de
                    corredores.{" "}
                    <strong> Cada contribuição faz diferença!</strong>
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
