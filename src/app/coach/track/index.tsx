import { useCallback } from "react";
import useTrack from "@/tracking/use-track";

export function useTrackSection() {
  const { trackEvent } = useTrack();

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
