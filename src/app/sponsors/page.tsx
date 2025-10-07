"use client";
import { Header, Footer } from "@/components/system";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
} from "@/components/ui";
import { sponsorsPageContent } from "@/presentation";
import {
  Sparkles,
  Target,
  MessageSquare,
  TrendingUp,
  Send,
} from "lucide-react";

const differentiatorIconMap = {
  target: Target,
  "message-square": MessageSquare,
  "trending-up": TrendingUp,
} as const;

export default function SponsorsPage() {
  const { hero, differentiatorsSection, ctaCard } = sponsorsPageContent;
  const differentiatorItems = differentiatorsSection.cards.map((card) => ({
    ...card,
    icon: differentiatorIconMap[card.icon],
  }));

  const handleWhatsApp = () => {
    const phoneNumber = "5518997708504";
    const message = "Olá, gostaria de saber mais sobre o patrocínio da Velox.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handleMediaKit = () => {
    const mediaKitUrl = "";
    window.open(mediaKitUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#050807] to-black text-white">
      <Header />

      <main className="container mx-auto px-4 py-16 md:py-24 space-y-24">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black via-slate-950 to-emerald-950/40 px-6 py-16 md:px-12 shadow-[0_0_45px_rgba(18,255,120,0.12)]">
          <div className="pointer-events-none absolute -left-36 top-0 h-64 w-64 rounded-full bg-[#d5fe46]/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 -bottom-16 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#d5fe46]/40 bg-[#d5fe46]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[#d5fe46]/90">
              <Sparkles className="h-4 w-4" />
              {hero.badgeLabel}
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-6 text-lg text-white/80 md:text-xl">
              {hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                variant="outline"
                className="cursor-pointer h-12 px-6 text-base font-semibold text-[#d5fe46] border-[#d5fe46]/60 bg-transparent hover:bg-[#d5fe46] hover:text-black"
              >
                {hero.primaryCta}
              </Button>
              <Button
                onClick={() => handleMediaKit()}
                variant="secondary"
                className="cursor-pointer h-12 px-6 text-base font-semibold border border-[#d5fe46]/30 bg-[#d5fe46]/15 text-white hover:bg-[#d5fe46]/25"
              >
                {hero.secondaryCta}
              </Button>
            </div>
          </div>

          <div className="relative z-10 mt-12 grid gap-6 sm:grid-cols-3">
            {hero.highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-6 text-left transition hover:border-[#d5fe46]/40 hover:bg-white/[0.07]"
              >
                <p className="text-[11px] uppercase tracking-[0.4em] text-white/50">
                  {item.label}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              {differentiatorsSection.title}
            </h2>
            <p className="mt-4 text-base text-white/70 md:text-lg">
              {differentiatorsSection.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {differentiatorItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="h-full border-white/10 bg-black/40 backdrop-blur transition hover:-translate-y-1 hover:border-[#d5fe46]/40"
                >
                  <CardHeader className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d5fe46]/15 text-[#d5fe46]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl text-white">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-white/70">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {item.detail}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section>
          <Card className="relative overflow-hidden border border-[#d5fe46]/30 bg-gradient-to-r from-emerald-900 via-black to-slate-950">
            <div className="pointer-events-none absolute -right-44 top-0 h-72 w-72 rounded-full bg-[#d5fe46]/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-emerald-500/15 blur-3xl" />
            <CardContent className="relative z-10 flex flex-col gap-8 px-6 py-12 text-center md:flex-row md:items-center md:justify-between md:text-left md:px-12">
              <div className="mx-auto max-w-2xl md:mx-0">
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  {ctaCard.title}
                </h2>
                <p className="mt-4 text-base text-white/75 md:text-lg">
                  {ctaCard.description}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={() => handleWhatsApp()}
                  className="cursor-pointer h-12 px-6 text-base font-semibold bg-[#d5fe46] text-black hover:bg-[#c6f542]"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {ctaCard.secondaryCta}
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
