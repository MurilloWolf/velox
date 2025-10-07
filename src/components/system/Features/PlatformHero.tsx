"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, Dumbbell, Droplets, Send, TrendingUp } from "lucide-react";

import FeatureCard from "./FeatureCard";
import training from "../../../../public/running-bg.jpg";
import nutrition from "../../../../public/nutrition.jpg";
import womanPhone from "../../../../public/woman-telephone.jpg";
import calendar from "../../../../public/calendar.jpg";
import airunning from "../../../../public/AiRunning.png";

function throttle<T extends (this: unknown, ...args: unknown[]) => void>(
  func: T,
  limit: number
): T {
  let inThrottle = false;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const throttled = function (
    this: ThisParameterType<T>,
    ...args: Parameters<T>
  ) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  } as T;

  return throttled;
}

export default function PlatformFeatures() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showScroll, setShowScroll] = useState(false);
  const features = [
    {
      icon: Calendar,
      title: "Calendário de Corridas",
      description:
        "Encontre corridas de 5km, 10km, meia maratona e maratona completa em todo o Brasil. Filtros por distância, cidade e data.",
      img: calendar,
    },
    {
      icon: Send,
      title: "Bot no Telegram",
      description:
        "Acesse todas as funcionalidades direto no Telegram. Notificações de novas corridas, lembretes e muito mais.",
      img: womanPhone,
    },
    {
      icon: Dumbbell,
      title: "Planos de Treino",
      description:
        "Treinos estruturados para iniciantes e avançados. Prepare-se para sua próxima corrida com orientação profissional.",
      img: training,
    },
    {
      icon: Droplets,
      title: "Guia de Nutrição",
      description:
        "Aprenda quando e quanto beber antes, durante e depois das corridas. Dicas para diferentes distâncias e climas.",
      img: nutrition,
    },
    {
      icon: TrendingUp,
      title: "IA Prompts",
      description:
        "Gere planos de treino, dicas de nutrição e estratégias de corrida com prompts personalizados.",
      img: airunning,
    },
  ];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId: number;
    let isScrolling = false;
    let currentVelocity = 0;
    const friction = 0.98;

    const isMobile = window.innerWidth < 768;

    const updateScroll = () => {
      if (Math.abs(currentVelocity) < 0.5) {
        isScrolling = false;
        return;
      }

      const node = containerRef.current;
      if (!node) return;

      currentVelocity *= friction;

      const maxScroll = node.scrollWidth - node.clientWidth;
      let nextScroll = node.scrollLeft + currentVelocity;

      if (nextScroll <= 0) {
        nextScroll = 0;
        currentVelocity = 0;
        isScrolling = false;
      } else if (nextScroll >= maxScroll) {
        nextScroll = maxScroll;
        currentVelocity = 0;
        isScrolling = false;
      }

      node.scrollLeft = nextScroll;

      if (isScrolling) {
        rafId = requestAnimationFrame(updateScroll);
      }
    };

    const throttledShowScroll = throttle(() => {
      const canOverflow = el.scrollWidth > el.clientWidth + 8;
      const canScrollRight =
        el.scrollLeft + el.clientWidth < el.scrollWidth - 290;
      setShowScroll(canOverflow && canScrollRight);
    }, 100);

    const onWheel = throttle((...args: unknown[]) => {
      const e = args[0] as WheelEvent;
      const node = containerRef.current;
      if (!node) return;

      const delta = e.deltaY;
      if (Math.abs(delta) < 5) return;

      const maxScroll = node.scrollWidth - node.clientWidth;
      const toTheRight = delta > 0;
      const toTheLeft = delta < 0;
      const canScrollHorizontally =
        (toTheRight && node.scrollLeft < maxScroll - 1) ||
        (toTheLeft && node.scrollLeft > 1);

      if (!canScrollHorizontally) {
        window.scrollBy({ top: delta });
        throttledShowScroll();
        return;
      }

      e.preventDefault();

      const multiplier = 1.1;
      const speed = Math.min(Math.abs(delta) * multiplier, 48);

      // Keep page movement responsive while still animating the horizontal carousel.
      window.scrollBy({ top: delta * 0.85 });

      if (
        (toTheRight && node.scrollLeft > maxScroll - 100) ||
        (toTheLeft && node.scrollLeft < 100)
      ) {
        currentVelocity = (delta > 0 ? speed : -speed) * 0.5;
      } else {
        currentVelocity = delta > 0 ? speed : -speed;
      }

      if (!isScrolling) {
        isScrolling = true;
        rafId = requestAnimationFrame(updateScroll);
      }

      throttledShowScroll();
    }, 16);
    throttledShowScroll();
    el.addEventListener("scroll", throttledShowScroll, { passive: true });
    window.addEventListener("resize", throttledShowScroll, { passive: true });

    // Only add wheel event listener on desktop
    if (!isMobile) {
      el.addEventListener("wheel", onWheel, { passive: false });
    }

    return () => {
      el.removeEventListener("scroll", throttledShowScroll);
      window.removeEventListener("resize", throttledShowScroll);
      if (!isMobile) {
        el.removeEventListener("wheel", onWheel);
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const scrollNext = () => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({
      left: el.clientWidth * 0.75,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="recursos"
      aria-labelledby="recursos-title"
      className="relative py-20 md:py-28 from-transparent via-[#121212] to-black bg-gradient-to-b"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="recursos-title"
            className="mt-20 text-5xl md:text-5xl font-bold mb-4 bg-white bg-clip-text text-transparent"
          >
            Tudo que você precisa para correr melhor
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto text-pretty">
            VELOX reúne todas as ferramentas essenciais para corredores em uma
            única plataforma integrada
          </p>
        </div>

        <div
          ref={containerRef}
          className="flex flex-nowrap gap-6 overflow-x-auto py-4 -mx-4 px-4 snap-x snap-mandatory lg:snap-none scrollbar-hidden md:overscroll-contain will-change-scroll"
        >
          {features.map((feature, index) => {
            return (
              <FeatureCard
                key={index}
                feature={feature}
                index={index}
                scrollNext={scrollNext}
                showScroll={showScroll}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
