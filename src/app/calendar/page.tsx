import type { Metadata } from "next";

import { Header, Footer, MashGradiant, PageTracker } from "@/components/system";
import { calendarPageContent } from "@/presentation";
import { fetchRacesAction } from "@/services/actions/races";
import { buildMetadata } from "@/lib/seo";
import { CalendarPageClient } from "./CalendarPageClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildMetadata({
  title: "Calendário de corridas - VELOX Corridas",
  description:
    "Consulte o calendário atualizado de corridas de rua, meias maratonas e provas em todo o Brasil.",
  keywords: [
    "calendário de corridas",
    "corridas Brasil",
    "provas de rua",
    "corrida 2025",
    "agenda de maratonas",
  ],
  path: "/calendar",
  image: "/velox_x.png",
});

export default async function CalendarPage() {
  const { races, error } = await fetchRacesAction();

  return (
    <div className="min-h-screen bg-black/95">
      <Header />
      <MashGradiant>
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
