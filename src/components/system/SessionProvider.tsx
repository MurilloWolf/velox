"use client";

import { useEffect } from "react";
import useSessionId from "@/hooks/useSessionId";

interface SessionProviderProps {
  children: React.ReactNode;
}

export default function SessionProvider({ children }: SessionProviderProps) {
  const { sessionId, deviceId } = useSessionId();

  useEffect(() => {
    if (typeof window !== "undefined" && sessionId) {
      (
        window as Window & {
          __veloxSession?: {
            sessionId: string;
            deviceId: string;
            timestamp: number;
          };
        }
      ).__veloxSession = {
        sessionId,
        deviceId,
        timestamp: Date.now(),
      };
    }

    return () => {
      if (typeof window !== "undefined") {
        delete (window as Window & { __veloxSession?: unknown }).__veloxSession;
      }
    };
  }, [sessionId, deviceId]);

  return <>{children}</>;
}
