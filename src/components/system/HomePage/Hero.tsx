"use client";
import { useEffect, useState } from "react";
import { ChevronDown, Calendar } from "lucide-react";
import Image from "next/image";
import useAnalytics from "@/tracking/useAnalytics";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/useI18n";

export default function Hero() {
  const [showScroll, setShowScroll] = useState(true);
  const { trackButtonClick } = useAnalytics();
  const { t } = useI18n();

  useEffect(() => {
    if (typeof window === "undefined") return;

    setShowScroll(window.scrollY <= 30);

    const onScroll = () => {
      setShowScroll(window.scrollY <= 30);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCalendarClick = () => {
    trackButtonClick("hero:primary_cta", "Encontrar Provas Agora", "/calendar");
    window.open("/calendar", "_self");
  };
  return (
    <section className="min-h-[900px] max-h-[calc(100vh-40vh)] h-full relative overflow-hidden bg-black/40 py-24 md:py-32">
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-evenly items-center text-center">
          <div className="flex flex-col items-center max-w-4xl sm:mr-10">
            <Image
              src="https://velox-images-bucket.s3.sa-east-1.amazonaws.com/public/velox-full-transparent.png"
              alt="Logo da Velox corridas"
              width={400}
              height={400}
              className="mb-6 object-cover xl:min-w-96 xl:min-h-96 xl:h-[600px] xl:w-[600px]"
            />
          </div>
          <div>
            <h1 className="text-5xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl">
              {t("home.hero.title")}
            </h1>
            <p className="mt-2 sm:mt-2 mb-10 max-w-3xl text-pretty text-xl text-white/85 md:text-2xl leading-relaxed font-medium">
              {t("home.hero.subtitle")}
            </p>
            {/* <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
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
            </div> */}
            <Button
              size="lg"
              onClick={handleCalendarClick}
              variant="outline"
              className="border-[#d5fe46] text-[#d5fe46] mt-16 bg-transparent ease-in-out duration-150 cursor-pointer uppercase text-lg py-4 px-7 h-auto transition-all hover:bg-[#d5fe46] hover:text-black"
            >
              <Calendar className="mr-2 h-4 w-4" />
              {t("home.hero.cta")}
            </Button>
          </div>
        </div>
      </div>
      <div
        className={`hidden sm:block absolute left-1/2 bottom-24 -translate-x-1/2 z-20 transition-opacity duration-500 ${
          showScroll ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!showScroll}
      >
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm md:text-base text-white/90 uppercase tracking-widest">
            Scroll
          </span>
          <div className="flex flex-col items-center -space-y-2">
            {[0, 1, 2].map((i) => (
              <ChevronDown
                key={i}
                size={28}
                className="text-white/90 animate-bounce"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
