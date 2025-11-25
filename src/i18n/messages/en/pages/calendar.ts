const calendarPage = {
  hero: {
    title: "Race Calendar",
    subtitle: "Keep an eye on upcoming races",
  },
  upcoming: {
    title: "Upcoming Races",
    viewDetailsLabel: "See details",
  },
  emptyState:
    "No races were found for the next months. Please check back soon for new updates.",
  errorState:
    "We couldn’t load the races right now. Please try again in a moment.",
  calendarGrid: {
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    viewMoreLabel: "See more ({count})",
  },
  eventDetail: {
    registrationLabel: "Registration",
    distancesLabel: "Distances",
    addressLabel: "Address",
    viewOnMaps: "View on Maps",
    registrationClosed: "Registration closed",
    registrationButton: "Register for the race",
    status: {
      OPEN: "Open",
      CLOSED: "Closed",
      COMING_SOON: "Coming soon",
      CANCELLED: "Cancelled",
      UNKNOWN: "Status not available",
    },
  },
  listModal: {
    title: "Day Events",
  },
};

export default calendarPage;
