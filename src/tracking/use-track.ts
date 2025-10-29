import { useCallback } from "react";
import { sendTrackEvent } from "@/server/actions/trackAnalytics";
import useSessionId from "@/hooks/useSessionId";

export type TrackChannel = "WEBSITE";

export interface TrackEventParams {
  // PAGE, PRODUCT, PURCHASE, etc.
  targetType: string;
  // ID of the target entity (e.g., productId, purchaseId)
  targetId?: string;
  // TELEGRAM, EMAIL, WEBSITE, WHATSAPP
  channel: TrackChannel;
  // CLICK, VIEW, DOWNLOAD, etc.
  action: string;
  // /coach?section=training, /contact, etc.
  pagePath?: string;
  sessionId?: string;
  deviceId?: string;

  // Additional fields
  referrer?: string;

  // UTM parameters for marketing attribution
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;

  // Mobile or Desktop user agent info
  userAgent?: string;
  isMobile?: boolean;
  // Additional information about the event
  props?: Record<string, string>;

  // Relations
  purchaseId?: string;
}

export default function useTrack() {
  const { sessionId, deviceId, updateActivity } = useSessionId();

  const trackEvent = useCallback(
    (
      trackEvent: Omit<TrackEventParams, "channel" | "sessionId" | "deviceId">
    ) => {
      updateActivity("track_event");

      if (process.env.NODE_ENV === "development") {
        console.log(`📊 Track Event: ${trackEvent.action}`, {
          ...trackEvent,
          sessionId,
          deviceId,
        });
      }

      sendTrackEvent({
        ...trackEvent,
        channel: "WEBSITE",
        sessionId: sessionId || undefined,
        deviceId: deviceId || undefined,
      });
    },
    [sessionId, deviceId, updateActivity]
  );

  return {
    trackEvent,
    sessionId,
    deviceId,
    updateActivity,
  };
}
