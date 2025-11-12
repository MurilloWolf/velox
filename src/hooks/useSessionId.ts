"use client";

import { useEffect, useState, useCallback, useRef } from "react";

const SESSION_STORAGE_KEY = "velox_session_id";
const DEVICE_STORAGE_KEY = "velox_device_id";
const SESSION_TIMEOUT = 30 * 60 * 1000;
const LAST_ACTIVITY_KEY = "velox_last_activity";

function generateSessionId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function isSessionExpired(): boolean {
  const lastActivity = localStorage.getItem(LAST_ACTIVITY_KEY);
  if (!lastActivity) return true;

  const timeDiff = Date.now() - parseInt(lastActivity, 10);
  return timeDiff > SESSION_TIMEOUT;
}

function updateLastActivity(): void {
  localStorage.setItem(LAST_ACTIVITY_KEY, Date.now().toString());
}

function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  delay: number
): T {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastExecTime = 0;

  return ((...args: Parameters<T>) => {
    const currentTime = Date.now();

    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  }) as T;
}

export default function useSessionId() {
  const [sessionId, setSessionId] = useState<string>("");
  const [deviceId, setDeviceId] = useState<string>("");
  const lastActivityRef = useRef<number>(Date.now());

  const refreshSession = useCallback(() => {
    const newSessionId = generateSessionId();
    localStorage.setItem(SESSION_STORAGE_KEY, newSessionId);
    updateLastActivity();
    setSessionId(newSessionId);
    return newSessionId;
  }, []);

  const updateActivity = useCallback(
    (eventType?: string) => {
      const now = Date.now();
      const timeSinceLastActivity = now - lastActivityRef.current;

      const oneSecond = 1000;
      if (timeSinceLastActivity > oneSecond) {
        lastActivityRef.current = now;
        updateLastActivity();
      }
    },
    [sessionId]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    let currentDeviceId = localStorage.getItem(DEVICE_STORAGE_KEY);
    if (!currentDeviceId) {
      currentDeviceId = generateSessionId();
      localStorage.setItem(DEVICE_STORAGE_KEY, currentDeviceId);
    }
    setDeviceId(currentDeviceId);

    let currentSessionId = localStorage.getItem(SESSION_STORAGE_KEY);

    if (!currentSessionId || isSessionExpired()) {
      currentSessionId = refreshSession();
    } else {
      updateActivity();
      setSessionId(currentSessionId);
    }

    const eventConfig = {
      immediate: ["click", "keypress", "touchstart", "submit"],
      moderate: {
        scroll: 2000,
        input: 1000,
        focus: 500,
        change: 500,
      },
      throttled: {
        mousemove: 5000,
        touchmove: 3000,
        mousedown: 1000,
        resize: 2000,
      },
    };

    const listeners: Array<() => void> = [];

    eventConfig.immediate.forEach((event) => {
      const handler = () => updateActivity(event);
      document.addEventListener(event, handler, { passive: true });
      listeners.push(() => document.removeEventListener(event, handler));
    });

    Object.entries(eventConfig.moderate).forEach(([event, delay]) => {
      const handler = throttle(() => updateActivity(event), delay);
      document.addEventListener(event, handler, { passive: true });
      listeners.push(() => document.removeEventListener(event, handler));
    });

    Object.entries(eventConfig.throttled).forEach(([event, delay]) => {
      const handler = throttle(() => updateActivity(event), delay);
      document.addEventListener(event, handler, { passive: true });
      listeners.push(() => document.removeEventListener(event, handler));
    });

    const handleVisibilityChange = () => {
      if (document.hidden) {
        updateActivity("page_hidden");
      } else {
        updateActivity("page_visible");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    listeners.push(() =>
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    );

    return () => listeners.forEach((cleanup) => cleanup());
  }, [refreshSession, updateActivity]);

  return {
    sessionId,
    deviceId,
    refreshSession,
    updateActivity,
  };
}
