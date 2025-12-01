"use client";

import { useMemo, useState } from "react";
import {
  Calendar,
  HelpCircle,
  Search,
  Send,
  Settings,
  Star,
  Trophy,
} from "lucide-react";

import { Footer, Header, PageTracker } from "@/components/system";
import { Badge, Card, CardContent } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import useAnalytics from "@/tracking/useAnalytics";
import { useInfoMessages } from "@/i18n/hooks/useInfoMessages";
import { TELEGRAM_BOT_WEB_URL, openTelegramTarget } from "@/lib/telegram";

const commandIconMap = {
  send: Send,
  "help-circle": HelpCircle,
  settings: Settings,
  trophy: Trophy,
  search: Search,
  calendar: Calendar,
  star: Star,
} as const;

type CommandIconKey = keyof typeof commandIconMap;

export default function InfoPageClient() {
  const infoMessages = useInfoMessages();
  const { hero, howItWorksCard, howItWorks, commandsSection, categories } =
    infoMessages;

  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [hoveredCommand, setHoveredCommand] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { trackButtonClick } = useAnalytics();

  const commands = useMemo(
    () =>
      infoMessages.commands.map((cmd) => ({
        ...cmd,
        icon: commandIconMap[cmd.icon as CommandIconKey],
      })),
    [infoMessages.commands]
  );

  const handleTelegramClick = () => {
    trackButtonClick(
      "bot_showcase:telegram_button",
      hero.primaryCta,
      TELEGRAM_BOT_WEB_URL
    );
    openTelegramTarget("bot");
  };

  const filteredCommands = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const isAllCategory = activeCategory === categories[0];

    return commands.filter((cmd) => {
      const matchesCategory = isAllCategory || cmd.category === activeCategory;

      if (!normalizedSearch) {
        return matchesCategory;
      }

      const haystack = [cmd.command, cmd.description, cmd.example, cmd.category]
        .join(" ")
        .toLowerCase();

      return matchesCategory && haystack.includes(normalizedSearch);
    });
  }, [activeCategory, categories, commands, searchTerm]);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100">
      <PageTracker pagePath="/info" />
      <Header />
      <main className="relative overflow-hidden" id="conteudo-principal">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-36 top-24 h-72 w-72 rounded-full bg-[#d5fe46]/10 blur-3xl" />
          <div className="absolute -right-48 top-1/3 h-80 w-80 rounded-full bg-[#2b1d05]/40 blur-[110px]" />
          <div className="absolute bottom-10 left-1/2 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#d5fe46]/15 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto space-y-16 px-4 py-16">
          <section className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#d5fe46]/12 pr-4 py-1 text-sm font-medium text-slate-200 shadow-[0_0_20px_rgba(213,254,70,0.08)]">
                <span className="rounded-full bg-[#d5fe46] px-2 py-1 text-xs font-bold uppercase tracking-wide text-[#050505]">
                  {hero.badge.label}
                </span>
                {hero.badge.description}
              </div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                {hero.title}
              </h1>
              <p className="max-w-2xl text-lg text-slate-300">
                {hero.description}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  onClick={handleTelegramClick}
                  className="cursor-pointer rounded-lg bg-[#d5fe46] px-6 py-5 text-base font-semibold uppercase tracking-wide text-[#050505] shadow-[0_15px_45px_-20px_rgba(213,254,70,0.7)] transition-transform hover:-translate-y-0.5 hover:bg-[#d5fe46]/90"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {hero.primaryCta}
                </Button>
              </div>
            </div>

            <Card className="relative overflow-hidden border border-[#242424] bg-[#0e0e0e]/90 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.7)] lg:ml-auto">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#d5fe46]/20 via-transparent to-transparent" />
              <CardContent className="relative space-y-6 p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d5fe46]/60 text-[#050505]">
                    <Send className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white">
                      {howItWorksCard.title}
                    </h2>
                    <p className="text-sm text-slate-400">
                      {howItWorksCard.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-5">
                  {howItWorks.map((item) => (
                    <div
                      key={item.step}
                      className="relative rounded-2xl border border-[#1f1f1f] bg-[#111111]/90 p-4 pl-16 transition-all duration-300 hover:-translate-y-1 hover:border-[#d5fe46]/60"
                    >
                      <span className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#d5fe46] text-base font-bold text-[#050505] shadow-md">
                        {item.step}
                      </span>
                      <p className="text-sm font-semibold text-slate-100">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white">
                  {commandsSection.title}
                </h2>
                <p className="max-w-2xl text-sm text-slate-400">
                  {commandsSection.description}
                </p>
              </div>
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <Input
                  type="search"
                  value={searchTerm}
                  placeholder={commandsSection.searchPlaceholder}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  className="h-11 rounded-full border border-[#2c2c2c] bg-[#0d0d0d] pl-9 pr-4 text-sm text-slate-100 shadow-[0_10px_35px_-25px_rgba(0,0,0,0.9)] transition-colors placeholder:text-slate-500 focus-visible:border-[#d5fe46] focus-visible:ring-[#d5fe46]/30"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "cursor-pointer rounded-full border border-[#2c2c2c] bg-[#0d0d0d] px-5 py-2 text-sm font-semibold text-slate-300 transition-all hover:-translate-y-0.5 hover:border-[#d5fe46]/70 hover:text-[#d5fe46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d5fe46]/60",
                    activeCategory === category &&
                      "border-[#d5fe46] bg-[#d5fe46]/15 text-[#d5fe46] shadow-[0_10px_35px_-25px_rgba(213,254,70,0.6)]"
                  )}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {filteredCommands.length === 0 ? (
                <Card className="col-span-full border border-dashed border-[#2f2f2f] bg-[#0d0d0d] text-center text-slate-300">
                  <CardContent className="py-12">
                    <p className="mb-2 text-lg font-semibold">
                      {commandsSection.emptyStateTitle}
                    </p>
                    <p className="text-sm text-slate-500">
                      {commandsSection.emptyStateDescription}
                    </p>
                  </CardContent>
                </Card>
              ) : (
                filteredCommands.map((cmd) => {
                  const Icon = cmd.icon;
                  const isHovered = hoveredCommand === cmd.command;

                  return (
                    <Card
                      key={cmd.command}
                      onMouseEnter={() => setHoveredCommand(cmd.command)}
                      onMouseLeave={() => setHoveredCommand(null)}
                      className={cn(
                        "group relative overflow-hidden border border-[#1c1c1c] bg-[#0e0e0e]/90 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_rgba(213,254,70,0.8)]",
                        isHovered && "border-[#d5fe46]/70"
                      )}
                    >
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-80">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#d5fe46]/18 via-transparent to-transparent" />
                      </div>
                      <CardContent className="relative p-6">
                        <div className="flex items-start gap-4">
                          <div
                            className={cn(
                              "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#d5fe46]/60 text-[#050505] transition-all duration-300",
                              isHovered &&
                                "scale-105 shadow-[0_12px_30px_-20px_rgba(213,254,70,0.8)]"
                            )}
                          >
                            <Icon className="h-7 w-7 text-[#050505]" />
                          </div>
                          <div className="flex-1">
                            <div className="mb-3 flex flex-wrap items-center gap-2">
                              <code className="rounded-full bg-[#141414] px-3 py-1 font-mono text-sm font-semibold text-slate-200">
                                {cmd.command}
                              </code>
                              <Badge
                                variant="secondary"
                                className={cn(
                                  "rounded-full border border-transparent bg-[#d5fe46]/18 text-[#d5fe46] transition-all",
                                  isHovered && "border-[#d5fe46]/70"
                                )}
                              >
                                {cmd.category}
                              </Badge>
                            </div>
                            <p className="mb-4 text-sm leading-relaxed text-slate-300">
                              {cmd.description}
                            </p>
                            <div className="inline-flex items-center gap-2 rounded-full bg-[#141414] px-3 py-1.5 text-xs font-medium text-slate-300">
                              <span className="uppercase tracking-wide text-slate-500">
                                {commandsSection.exampleLabel}
                              </span>
                              <code className="font-mono text-slate-200">
                                {cmd.example}
                              </code>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
