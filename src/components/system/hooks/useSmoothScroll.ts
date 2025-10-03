"use client";
import { useCallback } from "react";

export const useSmoothScroll = () =>
  useCallback((selector: string) => {
    if (!selector.startsWith("#")) {
      window.location.assign(selector);
      return;
    }

    const target = document.querySelector(selector);
    if (!target) {
      return;
    }

    const element = target as HTMLElement;
    const top = element.getBoundingClientRect().top + window.scrollY - 80;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }, []);

export type SmoothScrollHandler = (selector: string) => void;
