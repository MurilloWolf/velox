import { useCallback } from "react";
import useAnalytics from "@/tracking/useAnalytics";

export function useTrackSection() {
  const { trackEvent } = useAnalytics();

  const handleTrackSection = useCallback(
    (props: { section: string; basePath: string }) => {
      trackEvent({
        targetType: "COACH_SECTION",
        action: "VIEW",
        pagePath: `${props.basePath}?section=${props.section}`,
        targetId: props.section,
      });
    },
    [trackEvent]
  );

  return { trackSection: handleTrackSection };
}
