import { Button } from "@/components/ui/button";
import { Zap, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[#121212] to-[#212121] py-24 md:py-32">
      <div className="absolute inset-0 bg-[url('/abstract-running-pattern.png')] opacity-5 bg-cover bg-center" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-evenly items-center text-center">
          <div className="flex flex-col items-center max-w-3xl">
            <div className="mb-8 flex h-32 w-32 md:h-40 md:w-40 items-center justify-center rounded-3xl bg-white shadow-2xl">
              <Zap
                className="h-20 w-20 md:h-24 md:w-24 text-primary"
                strokeWidth={2.5}
              />
            </div>

            <h1 className="mb-6 text-balance font-sans text-5xl font-bold text-white md:text-7xl lg:text-8xl">
              VELOX
            </h1>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#d5fe46] backdrop-blur-sm px-4 py-2">
              <Sparkles className="h-4 w-4 text-black" />
              <span className="text-sm font-medium text-black">
                Plataforma Completa para Corredores
              </span>
            </div>
          </div>
          <div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#d5fe46] text-shadow-[0_0_8px_#d5fe46] mb-2">
                  500+
                </div>
                <div className="text-sm text-white/80">Corridas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#d5fe46] text-shadow-[0_0_8px_#d5fe46] mb-2">
                  10k+
                </div>
                <div className="text-sm text-white/80">Corredores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#d5fe46] text-shadow-[0_0_8px_#d5fe46] mb-2">
                  100+
                </div>
                <div className="text-sm text-white/80">Dicas & Treinos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#d5fe46] text-shadow-[0_0_8px_#d5fe46] mb-2">
                  24/7
                </div>
                <div className="text-sm text-white/80">Disponível</div>
              </div>
            </div>
            <p className="mt-10 sm:mt-10 mb-10 max-w-3xl text-pretty text-xl text-white/85 md:text-2xl leading-relaxed font-medium">
              Sua plataforma completa para corrida: encontre eventos, receba
              dicas personalizadas, acesse treinos e muito mais. Tudo integrado
              ao Telegram!
            </p>

            <Button
              size="lg"
              variant="outline"
              className="border-[#d5fe46] text-[#d5fe46] bg-transparent ease-in-out duration-150 cursor-pointer uppercase text-lg py-4 px-7 h-auto transition-all hover:bg-[#d5fe46] hover:text-black"
            >
              <Zap className="mr-2 h-4 w-4" />
              Começar Agora
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-t from-background  to-[#d5fe46]" />
    </section>
  );
}
