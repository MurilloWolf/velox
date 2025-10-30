import type { Metadata } from "next";

import {
  EventCalendar,
  Header,
  Footer,
  MashGradiant,
  PageTracker,
} from "@/components/system";
import { calendarPageContent } from "@/presentation";
import { fetchRacesAction } from "@/services/actions/races";
import { buildMetadata } from "@/lib/seo";

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
      <PageTracker pagePath="/calendar" />
      <Header />
      <MashGradiant>
        <main
          id="conteudo-principal"
          className="relative z-10 h-full max-w-4xl bg-white/10 my-4 rounded-2xl p-4 md:p-8 justify-center items-center mx-auto"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-balance mb-2 text-white">
                {calendarPageContent.title}
              </h1>
              <p className="text-white/80">{calendarPageContent.subtitle}</p>
            </div>
            <EventCalendar races={races ?? []} error={error} />
          </div>
        </main>
      </MashGradiant>

      <Footer />
    </div>
  );
}
