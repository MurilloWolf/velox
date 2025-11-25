/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from "react";
import { sendTrackEvent } from "@/services/actions/trackAnalytics";
import useSessionId from "@/hooks/useSessionId";
import useDeviceInfo from "@/hooks/useDeviceInfo";

export type TrackChannel = "WEBSITE";

export type TrackAction =
  | "VIEW"
  | "CLICK"
  | "SUBMIT"
  | "FILTER"
  | "OPEN"
  | "CLOSE"
  | "PURCHASE";

export type TrackTargetType =
  | "PAGE"
  | "SECTION"
  | "BUTTON"
  | "LINK"
  | "FILTER"
  | "MODAL"
  | "CARD"
  | "RACE_EVENT"
  | "RACE_LOCATION"
  | "RACE_REGISTRATION"
  | "FORM"
  | "PRODUCT"
  | "CHECKOUT_STEP";

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

  props?: Record<
    string,
    string | Record<string, any> | number | boolean | null | undefined
  >;

  // Relations
  purchaseId?: string;
}

const sanitizePropValue = (value: unknown): string | undefined => {
  if (value === null || value === undefined) {
    return undefined;
  }

  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  if (Array.isArray(value)) {
    const serializedItems = value
      .map((item) => {
        if (
          item === null ||
          item === undefined ||
          typeof item === "function"
        ) {
          return null;
        }

        if (typeof item === "string" || typeof item === "number") {
          return String(item);
        }

        if (typeof item === "boolean") {
          return item ? "true" : "false";
        }

        try {
          return JSON.stringify(item);
        } catch {
          return null;
        }
      })
      .filter((item): item is string => Boolean(item));

    return serializedItems.length ? serializedItems.join(",") : undefined;
  }

  try {
    return JSON.stringify(value);
  } catch {
    return undefined;
  }
};

const sanitizeProps = (
  props?: Record<
    string,
    string | Record<string, any> | number | boolean | null | undefined
  >
): Record<string, string> | undefined => {
  if (!props) {
    return undefined;
  }

  const sanitizedEntries = Object.entries(props).reduce<
    Record<string, string>
  >((acc, [key, value]) => {
    const sanitizedValue = sanitizePropValue(value);
    if (sanitizedValue !== undefined) {
      acc[key] = sanitizedValue;
    }
    return acc;
  }, {});

  return Object.keys(sanitizedEntries).length ? sanitizedEntries : undefined;
};

export default function useAnalytics() {
  const { sessionId, deviceId, updateActivity } = useSessionId();
  const deviceInfo = useDeviceInfo();

  // Função genérica para track de eventos (mantida para compatibilidade)
  const trackEvent = useCallback(
    (
      trackEvent: Omit<TrackEventParams, "channel" | "sessionId" | "deviceId">
    ) => {
      updateActivity("track_event");

      const eventData = {
        ...trackEvent,
        channel: "WEBSITE" as const,
        sessionId: sessionId || undefined,
        deviceId: deviceId || undefined,
        pagePath:
          trackEvent.pagePath ||
          (typeof window !== "undefined"
            ? window.location.pathname
            : undefined),
        isMobile: trackEvent.isMobile ?? deviceInfo?.isMobile,
        userAgent: trackEvent.userAgent ?? deviceInfo?.userAgent,
        props: sanitizeProps(trackEvent.props),
      };

      if (process.env.NODE_ENV === "development") {
        console.log(`📊 Track Event: ${trackEvent.action}`, eventData);
        return;
      }

      sendTrackEvent(eventData);
    },
    [sessionId, deviceId, updateActivity, deviceInfo]
  );

  const trackPageView = useCallback(
    (targetId: string, props?: Record<string, any>) => {
      trackEvent({
        action: "VIEW",
        targetType: "PAGE",
        targetId,
        props,
      });
    },
    [trackEvent]
  );

  const trackLinkClick = useCallback(
    (
      targetId: string,
      linkText?: string,
      linkHref?: string,
      props?: Record<string, any>
    ) => {
      trackEvent({
        action: "CLICK",
        targetType: "LINK",
        targetId,
        props: {
          link_text: linkText,
          link_href: linkHref,
          ...props,
        },
      });
    },
    [trackEvent]
  );

  const trackButtonClick = useCallback(
    (
      targetId: string,
      linkText?: string,
      linkHref?: string,
      props?: Record<string, any>
    ) => {
      trackEvent({
        action: "CLICK",
        targetType: "BUTTON",
        targetId,
        props: {
          link_text: linkText,
          link_href: linkHref,
          ...props,
        },
      });
    },
    [trackEvent]
  );

  const trackCardClick = useCallback(
    (targetId: string, position?: number, props?: Record<string, any>) => {
      trackEvent({
        action: "CLICK",
        targetType: "CARD",
        targetId,
        props: {
          position,
          ...props,
        },
      });
    },
    [trackEvent]
  );

  const trackSectionView = useCallback(
    (targetId: string, props?: Record<string, any>) => {
      trackEvent({
        action: "VIEW",
        targetType: "SECTION",
        targetId,
        props,
      });
    },
    [trackEvent]
  );

  const trackFormSubmit = useCallback(
    (
      targetId: string,
      fields?: string[],
      hasErrors?: boolean,
      props?: Record<string, any>
    ) => {
      trackEvent({
        action: "SUBMIT",
        targetType: "FORM",
        targetId,
        props: {
          fields,
          errors: hasErrors,
          ...props,
        },
      });
    },
    [trackEvent]
  );

  const trackFilter = useCallback(
    (
      targetId: string,
      filterName: string,
      filterValue: string,
      isActive: boolean,
      props?: Record<string, any>
    ) => {
      trackEvent({
        action: "FILTER",
        targetType: "FILTER",
        targetId,
        props: {
          filter_name: filterName,
          filter_value: filterValue,
          active: isActive,
          ...props,
        },
      });
    },
    [trackEvent]
  );

  const trackModalOpen = useCallback(
    (targetId: string, props?: Record<string, any>) => {
      trackEvent({
        action: "OPEN",
        targetType: "MODAL",
        targetId: `modal:${targetId}`,
        props,
      });
    },
    [trackEvent]
  );

  const trackModalClose = useCallback(
    (targetId: string, props?: Record<string, any>) => {
      trackEvent({
        action: "CLOSE",
        targetType: "MODAL",
        targetId: `modal:${targetId}`,
        props,
      });
    },
    [trackEvent]
  );

  const trackRaceView = useCallback(
    (
      raceSlug: string,
      raceName?: string,
      distance?: string | string[] | number[],
      city?: string,
      props?: Record<string, any>
    ) => {
      trackEvent({
        action: "VIEW",
        targetType: "RACE_EVENT",
        targetId: `race:${raceSlug}`,
        props: {
          race_name: raceName,
          distance,
          city,
          ...props,
        },
      });
    },
    [trackEvent]
  );

  const trackRaceLocationClick = useCallback(
    (raceSlug: string, locationName?: string, props?: Record<string, any>) => {
      trackEvent({
        action: "CLICK",
        targetType: "RACE_LOCATION",
        targetId: `race:${raceSlug}`,
        props: {
          location_name: locationName,
          ...props,
        },
      });
    },
    [trackEvent]
  );

  const trackRaceRegistrationClick = useCallback(
    (
      raceSlug: string,
      raceName?: string,
      registrationLink?: string,
      provider?: string,
      props?: Record<string, any>
    ) => {
      trackEvent({
        action: "CLICK",
        targetType: "RACE_REGISTRATION",
        targetId: `race:${raceSlug}`,
        props: {
          race_name: raceName,
          registration_link: registrationLink,
          provider,
          ...props,
        },
      });
    },
    [trackEvent]
  );

  const trackCheckoutStep = useCallback(
    (step: string, productSlug?: string, props?: Record<string, any>) => {
      trackEvent({
        action: "VIEW",
        targetType: "CHECKOUT_STEP",
        targetId: `checkout:${step}`,
        props: {
          product_slug: productSlug,
          ...props,
        },
      });
    },
    [trackEvent]
  );

  const trackCheckoutPaymentSubmit = useCallback(
    (
      provider: string,
      paymentIntentId?: string,
      props?: Record<string, any>
    ) => {
      trackEvent({
        action: "SUBMIT",
        targetType: "CHECKOUT_STEP",
        targetId: "checkout:payment_submit",
        props: {
          provider,
          payment_intent_id: paymentIntentId,
          ...props,
        },
      });
    },
    [trackEvent]
  );

  const trackPurchase = useCallback(
    (
      productSlug: string,
      amount: number,
      currency: string,
      provider: string,
      purchaseId?: string,
      props?: Record<string, any>
    ) => {
      trackEvent({
        action: "PURCHASE",
        targetType: "PRODUCT",
        targetId: `product:${productSlug}`,
        purchaseId,
        props: {
          amount,
          currency,
          provider,
          ...props,
        },
      });
    },
    [trackEvent]
  );

  const trackNavigationClick = useCallback(
    (
      area: "header" | "footer",
      slug: string,
      linkText?: string,
      linkHref?: string
    ) => {
      trackLinkClick(`nav:${area}:${slug}`, linkText, linkHref);
    },
    [trackLinkClick]
  );

  const trackSocialClick = useCallback(
    (platform: string, props?: Record<string, any>) => {
      trackLinkClick(`social:${platform}`, undefined, undefined, props);
    },
    [trackLinkClick]
  );

  const trackMediaKitDownload = useCallback(
    (props?: Record<string, any>) => {
      trackEvent({
        action: "CLICK",
        targetType: "BUTTON",
        targetId: "sponsors:media_kit_download",
        props: {
          file_type: "media_kit",
          download_source: "sponsors_page",
          ...props,
        },
      });
    },
    [trackEvent]
  );

  return {
    trackEvent,
    trackPageView,
    trackLinkClick,
    trackButtonClick,
    trackCardClick,
    trackSectionView,
    trackFormSubmit,
    trackFilter,
    trackModalOpen,
    trackModalClose,
    trackRaceView,
    trackRaceLocationClick,
    trackRaceRegistrationClick,
    trackCheckoutStep,
    trackCheckoutPaymentSubmit,
    trackPurchase,
    trackNavigationClick,
    trackSocialClick,
    trackMediaKitDownload,
    sessionId,
    deviceId,
    updateActivity,
  };
}
