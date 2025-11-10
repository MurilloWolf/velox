"use client";

import { Button } from "@/components/ui/button";
import { FileSpreadsheet, Star, TrendingUp, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import useAnalytics from "@/tracking/useAnalytics";
import { useState, useRef, useEffect } from "react";

export default function TrainingSheets() {
  const { trackButtonClick, trackSectionView } = useAnalytics();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          trackSectionView("training_sheets");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [trackSectionView]);

  const handleCTAClick = () => {
    trackButtonClick("training_sheets:main_cta", "Ver Planilhas", "/training-sheets");
  };

  const features = [
    {
      icon: <FileSpreadsheet className="w-6 h-6" />,
      title: "Planilhas Profissionais",
      description: "Treinos estruturados por especialistas em corrida"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Progressão Garantida",
      description: "Evolução gradual e segura do seu desempenho"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Resultados Comprovados",
      description: "Mais de 1000 corredores já alcançaram seus objetivos"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-black via-[#001122] to-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-[10%] h-40 w-40 bg-[#d5fe46]/20 rounded-full blur-3xl animate-pulse" />
        <div 
          className="absolute bottom-20 right-[10%] h-48 w-48 bg-[#d5fe46]/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-32 w-32 bg-green-400/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative container mx-auto px-4">
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5fe46]/30 bg-[#d5fe46]/10 backdrop-blur-xl px-6 py-3 text-sm uppercase tracking-widest text-[#d5fe46] font-semibold shadow-[0_0_20px_rgba(213,254,70,0.2)]">
              <Zap className="h-4 w-4" />
              Acelere seus resultados
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-[#d5fe46] to-white bg-clip-text text-transparent leading-tight">
                Planilhas de Treino
                <br />
                <span className="text-[#d5fe46]">Personalizadas</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                Transforme sua corrida com planilhas estruturadas por especialistas. 
                Do iniciante ao avançado, temos o treino ideal para você.
              </p>
            </div>

            {/* Features Grid */}
            <div 
              className={`grid md:grid-cols-3 gap-6 mt-12 transition-all duration-1000 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl p-6 shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:bg-white/[0.08] hover:border-[#d5fe46]/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(213,254,70,0.15)] hover:-translate-y-2"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d5fe46]/5 via-transparent to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#d5fe46]/15 text-[#d5fe46] group-hover:bg-[#d5fe46]/25 group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(213,254,70,0.2)]">
                      {feature.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-[#d5fe46] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div 
              className={`mt-12 transition-all duration-1000 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <Button
                asChild
                size="lg"
                onClick={handleCTAClick}
                className="group relative overflow-hidden bg-gradient-to-r from-[#d5fe46] to-green-400 hover:from-green-400 hover:to-[#d5fe46] text-black font-bold text-lg px-8 py-6 h-auto rounded-2xl shadow-[0_0_30px_rgba(213,254,70,0.3)] hover:shadow-[0_0_50px_rgba(213,254,70,0.5)] transition-all duration-500 hover:scale-105"
              >
                <Link href="/training-sheets" className="flex items-center gap-3">
                  <FileSpreadsheet className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  Ver Planilhas de Treino
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </Link>
              </Button>

              <p className="text-white/60 text-sm mt-4">
                ✨ Acesso vitalício • 🏃‍♂️ Suporte especializado • 📈 Resultados garantidos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}