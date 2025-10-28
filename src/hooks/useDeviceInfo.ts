"use client";

import { useState, useEffect } from "react";

interface DeviceInfo {
  userAgent: string;
  isMobile: boolean;
  isDesktop: boolean;
  isTablet: boolean;
  browser: string;
  os: string;
}

export default function useDeviceInfo(): DeviceInfo | null {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && navigator) {
      const userAgent = navigator.userAgent;
      const isMobile = /Mobi|Android/i.test(userAgent);
      const isTablet = /iPad|Tablet/i.test(userAgent);
      const isDesktop = !isMobile && !isTablet;

      let browser = "Unknown";
      if (userAgent.includes("Chrome")) browser = "Chrome";
      else if (userAgent.includes("Firefox")) browser = "Firefox";
      else if (userAgent.includes("Safari") && !userAgent.includes("Chrome"))
        browser = "Safari";
      else if (userAgent.includes("Edge")) browser = "Edge";

      let os = "Unknown";
      if (userAgent.includes("Windows")) os = "Windows";
      else if (userAgent.includes("Mac")) os = "macOS";
      else if (userAgent.includes("Linux")) os = "Linux";
      else if (userAgent.includes("Android")) os = "Android";
      else if (
        userAgent.includes("iOS") ||
        userAgent.includes("iPhone") ||
        userAgent.includes("iPad")
      )
        os = "iOS";

      setDeviceInfo({
        userAgent,
        isMobile,
        isDesktop,
        isTablet,
        browser,
        os,
      });
    }
  }, []);

  return deviceInfo;
}
