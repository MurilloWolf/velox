"use client";

import { useEffect, useRef } from "react";
import useTrack from "@/tracking/use-track";
import useDeviceInfo from "@/hooks/useDeviceInfo";

interface PageTrackerProps {
  pagePath: string;
}

export default function PageTracker({ pagePath }: PageTrackerProps) {
  const { trackEvent } = useTrack();
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
      });

      hasTracked.current = true;
    }
  }, [pagePath, deviceInfo, trackEvent]);

  return null;
}
