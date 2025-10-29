"use client";

import { useEffect, useRef } from "react";
import useAnalytics from "@/tracking/useAnalytics";
import useDeviceInfo from "@/hooks/useDeviceInfo";

interface PageTrackerProps {
  pagePath: string;
}

export default function PageTracker({ pagePath }: PageTrackerProps) {
  const { trackEvent } = useAnalytics();
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
      trackEvent({
        targetType: "PAGE",
        action: "VIEW",
        pagePath,
        userAgent: deviceInfo.userAgent,
        isMobile: deviceInfo.isMobile,
        targetId: "coach_landing",
      });

      hasTracked.current = true;
    }
  }, [pagePath, deviceInfo, trackEvent]);

  return null;
}
