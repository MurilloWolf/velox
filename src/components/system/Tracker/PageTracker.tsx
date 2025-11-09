"use client";

import { useEffect, useRef } from "react";
import useAnalytics from "@/tracking/useAnalytics";
import useDeviceInfo from "@/hooks/useDeviceInfo";

interface PageTrackerProps {
  pagePath: string;
  pageSlug?: string; // Para permitir personalizar o targetId
}

export default function PageTracker({ pagePath, pageSlug }: PageTrackerProps) {
  const { trackPageView } = useAnalytics();
  const deviceInfo = useDeviceInfo();
  const hasTracked = useRef(false);
  const lastTrackedPath = useRef<string>("");

  useEffect(() => {
    if (!deviceInfo) return;

    if (pagePath !== lastTrackedPath.current) {
      hasTracked.current = false;
      lastTrackedPath.current = pagePath;
    }

    if (!hasTracked.current) {
      // Determina o slug da página baseado no caminho ou usa o fornecido
      const slug =
        pageSlug ||
        (pagePath === "/"
          ? "home"
          : pagePath.replace(/^\//, "").replace(/\//g, "_").toLowerCase() ||
            "unknown");

      trackPageView(slug, {
        path: pagePath,
        user_agent: deviceInfo.userAgent,
        browser: deviceInfo.browser,
        os: deviceInfo.os,
      });

      hasTracked.current = true;
    }
  }, [pagePath, pageSlug, deviceInfo, trackPageView]);

  return null;
}
