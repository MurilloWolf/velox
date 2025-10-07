import {
  EventCalendar,
  Header,
  Footer,
  MashGradiant,
} from "@/components/system";
import { calendarPageContent } from "@/presentation";
import { fetchRacesAction } from "@/server/actions/races";

export default async function Home() {
  const { races, error } = await fetchRacesAction();

  return (
    <div className="min-h-screen bg-black/95">
      <Header />
      <MashGradiant>
        <main className="relative z-10 h-full max-w-4xl bg-white/10 my-4 rounded-2xl p-4 md:p-8 justify-center items-center mx-auto">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-balance mb-2 text-white">
                {calendarPageContent.title}
              </h1>
              <p className="text-white/80">
                {calendarPageContent.subtitle}
              </p>
            </div>
            <EventCalendar races={races ?? []} error={error} />
          </div>
        </main>
      </MashGradiant>

      <Footer />
    </div>
  );
}
