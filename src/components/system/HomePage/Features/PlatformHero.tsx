"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentType, SVGProps } from "react";
import { useRouter } from "next/navigation";
import { Calendar, Dumbbell, Droplets, Send } from "lucide-react";

import { AnalyticsActions } from "@/tracking/types";
import useAnalytics from "@/tracking/useAnalytics";
import { useHomeMessages } from "@/i18n/hooks/useHomeMessages";

import FeatureCard from "./FeatureCard";

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

type CoachRootSection = "nutrition" | "training" | "prompts";

type FeatureItem = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  img: string;
  section?: CoachRootSection;
  href?: string;
  externalUrl?: string;
};

const BASE_S3_URL =
  "https://velox-images-bucket.s3.sa-east-1.amazonaws.com/public";

export default function PlatformFeatures() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showScroll, setShowScroll] = useState(false);
  const router = useRouter();
  const { trackEvent } = useAnalytics();
  const { platformFeatures } = useHomeMessages();

  const featureBlueprints: Array<
    FeatureItem & { id: "calendar" | "bot" | "training" | "nutrition" }
  > = [
    {
      id: "calendar",
      icon: Calendar,
      title: "",
      description: "",
      img: `${BASE_S3_URL}/calendar.jpg`,
      href: "/calendar",
    },
    {
      id: "bot",
      icon: Send,
      title: "",
      description: "",
      img: `${BASE_S3_URL}/woman-telephone.jpg`,
      externalUrl: "https://t.me/VeloxBot",
    },
    {
      id: "training",
      icon: Dumbbell,
      title: "",
      description: "",
      img: `${BASE_S3_URL}/running-bg.jpg`,
      section: "training",
    },
    {
      id: "nutrition",
      icon: Droplets,
      title: "",
      description: "",
      img: `${BASE_S3_URL}/nutrition.jpg`,
      section: "nutrition",
    },
  ];

  const features: FeatureItem[] = featureBlueprints.map((feature) => {
    const translation = platformFeatures.cards.find(
      (card) => card.id === feature.id
    );
    return {
      ...feature,
      title: translation?.title ?? "",
      description: translation?.description ?? "",
    };
  });

  const handleFeatureSelect = (feature: FeatureItem) => {
    trackEvent({
      targetType: "BOT_FEATURE",
      action: AnalyticsActions.BUTTON_CLICK,
      pagePath: window.location.pathname,
      targetId: `FEATURE:${feature.title}`,
    });
    if (feature.section) {
      router.push(`/coach?section=${feature.section}`);
      return;
    }

    if (feature.href) {
      router.push(feature.href);
      return;
    }

    if (feature.externalUrl) {
      window.open(feature.externalUrl, "_blank", "noopener,noreferrer");
    }
  };

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
            {platformFeatures.title}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto text-pretty">
            {platformFeatures.description}
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
                scrollLabel={platformFeatures.carouselAriaLabel}
                onSelect={() => handleFeatureSelect(feature)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
