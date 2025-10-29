import { useCallback, useRef } from "react";
import useAnalytics from "@/tracking/useAnalytics";

export function useTrackSection() {
  const { trackEvent } = useAnalytics();
  const lastTrackedRef = useRef<string>("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleTrackSection = useCallback(
    (props: { section: string; basePath: string }) => {
      const trackId = `${props.basePath}?section=${props.section}`;

      if (lastTrackedRef.current === trackId) {
        return;
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        trackEvent({
          targetType: "COACH_SECTION",
          action: "VIEW",
          pagePath: trackId,
          targetId: props.section,
        });
        lastTrackedRef.current = trackId;
      }, 100);
    },
    [trackEvent]
  );

  return { trackSection: handleTrackSection };
}
