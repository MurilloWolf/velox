import type { Metadata } from "next";

import { Header, Footer, MashGradiant, PageTracker } from "@/components/system";
import { getRequestLocaleInfo } from "@/i18n/getRequestLocaleInfo";
import { getCalendarPageContent } from "@/presentation";
import { fetchRacesAction } from "@/services/actions/races";
import { buildMetadata } from "@/lib/seo";
import { getCalendarMetadataContent } from "@/i18n/metadata/calendar";
import { CalendarPageClient } from "./CalendarPageClient";
import type { Locale } from "@/i18n/config";

const COUNTRY_BY_LOCALE: Record<Locale, "US" | "BR"> = {
  "pt-BR": "BR",
  "en-US": "US",
};

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getRequestLocaleInfo();
  return buildMetadata(getCalendarMetadataContent(locale));
}

export default async function CalendarPage() {
  const { locale } = await getRequestLocaleInfo();
  const calendarPageContent = getCalendarPageContent(locale);
  const country = COUNTRY_BY_LOCALE[locale];
  const { races, error } = await fetchRacesAction({ country });

  return (
    <div className="min-h-screen bg-black/95">
      <Header />
      <MashGradiant className="min-h-screen">
        <div className="p-4 sm:p-6 md:p-8 lg:p-12 overflow-auto">
          <PageTracker pagePath="/calendar" />
          <div className="flex flex-col items-center justify-center relative z-20 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance mb-2 text-white drop-shadow-lg text-center">
              {calendarPageContent.title}
            </h2>
            <p className="text-white text-sm sm:text-md md:text-lg drop-shadow-md text-center max-w-2xl">
              {calendarPageContent.subtitle}
            </p>
          </div>
          <CalendarPageClient races={races ?? []} error={error} />
        </div>
      </MashGradiant>
      <Footer />
    </div>
  );
}
