import { useCallback } from "react";
import { sendTrackEvent } from "@/server/actions/trackAnalytics";

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
  const trackEvent = useCallback(
    (trackEvent: Omit<TrackEventParams, "channel">) => {
      sendTrackEvent({ ...trackEvent, channel: "WEBSITE" });
    },
    []
  );

  return { trackEvent };
}
