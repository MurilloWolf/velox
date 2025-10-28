"use client";

import { useEffect } from "react";
import useTrack from "@/tracking/use-track";
import useDeviceInfo from "@/hooks/useDeviceInfo";

interface PageTrackerProps {
  pagePath: string;
}

export default function PageTracker({ pagePath }: PageTrackerProps) {
  const { trackEvent } = useTrack();
  const deviceInfo = useDeviceInfo();

  useEffect(() => {
    if (deviceInfo) {
      trackEvent({
        targetType: "PAGE",
        action: "VIEW",
        pagePath,
        userAgent: deviceInfo.userAgent,
        isMobile: deviceInfo.isMobile,
      });
    }
  }, [pagePath, trackEvent, deviceInfo]);

  return null;
}
