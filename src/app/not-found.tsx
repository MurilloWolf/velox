import Link from "next/link";
import { Header, Footer } from "@/components/system";
import { Card, CardContent, Button } from "@/components/ui";
import { notFoundPageContent } from "@/presentation";
import { Compass, Home, Sparkles } from "lucide-react";

const suggestionIconMap = {
  compass: Compass,
  sparkles: Sparkles,
} as const;

export default function NotFound() {
  const suggestions = notFoundPageContent.suggestions.map((item) => ({
    ...item,
    icon: suggestionIconMap[item.icon],
  }));

  return (
    <div className="relative min-h-screen bg-[#050505] text-slate-100">
      <Header />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#d5fe46]/10 blur-3xl" />
          <div className="absolute right-[-20%] top-1/3 h-[26rem] w-[26rem] rounded-full bg-[#1b1605]/60 blur-[140px]" />
          <div className="absolute bottom-10 left-1/2 h-56 w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#d5fe46]/15 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-24">
          <section className="mx-auto max-w-4xl space-y-10 text-center">
            <Badge404 label={notFoundPageContent.badgeLabel} />
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                {notFoundPageContent.title}
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-slate-300">
                {notFoundPageContent.description}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  className="h-auto rounded-lg bg-[#d5fe46] px-6 py-4 text-base font-semibold uppercase tracking-wide text-black shadow-[0_20px_55px_-32px_rgba(213,254,70,0.9)] transition-transform hover:-translate-y-0.5 hover:bg-[#d5fe46]/90"
                >
                  <Link href={notFoundPageContent.primaryCta.href}>
                    <Home className="mr-2 h-5 w-5" />
                    {notFoundPageContent.primaryCta.label}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto rounded-lg border border-white/10 hover:bg-transparent bg-white/5 px-6 py-4 text-base font-semibold uppercase tracking-wide text-slate-100 backdrop-blur transition-all hover:border-[#d5fe46]/60 hover:text-[#d5fe46]"
                >
                  <Link href={notFoundPageContent.secondaryCta.href}>
                    {notFoundPageContent.secondaryCta.label}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {suggestions.map((item) => (
                <Card
                  key={item.title}
                  className="border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl transition-all duration-300 hover:border-[#d5fe46]/60 hover:shadow-[0_30px_65px_-40px_rgba(213,254,70,0.8)]"
                >
                  <Link href={item.href} className="block h-full">
                    <CardContent className="flex h-full flex-col gap-4 p-6 text-left">
                      <div className="flex items-center gap-3 text-[#d5fe46]">
                        <item.icon className="h-5 w-5" />
                        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d5fe46]">
                          {notFoundPageContent.suggestionBadge}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-white">
                        {item.title}
                      </h2>
                      <p className="text-sm text-slate-300">
                        {item.description}
                      </p>
                      <span className="mt-auto text-sm font-semibold text-[#d5fe46]">
                        {notFoundPageContent.suggestionCta}
                      </span>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Badge404({ label }: { label: string }) {
  return (
    <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[#d5fe46]/40 bg-[#d5fe46]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#d5fe46] shadow-[0_0_25px_rgba(213,254,70,0.18)]">
      <span className="flex h-2 w-2 rounded-full bg-[#d5fe46]" />
      <span>{label}</span>
      <span className="flex h-2 w-2 rounded-full bg-[#d5fe46]" />
    </div>
  );
}
