"use client";

import type { ReactNode } from "react";

import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { useI18n } from "@/i18n/useI18n";

export type NutritionTimelineBlock = {
  title: string;
  description: string;
  bullets?: string[];
};

export type NutritionTimelineSection = {
  title: string;
  intro?: string;
  blocks: NutritionTimelineBlock[];
};

export type NutritionGlossaryEntry = {
  term: string;
  description: string;
};

export type NutritionTable = {
  title: string;
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type NutritionAlert = {
  title: string;
  description: string;
};

export type NutritionDistanceGuideProps = {
  title: string;
  distanceTag: string;
  description: string;
  goal: string;
  rationale: string;
  focusPoints: string[];
  preparation: NutritionTimelineSection;
  raceExecution: NutritionTimelineSection;
  recovery: NutritionTimelineSection;
  supplements?: string[];
  watchouts?: string[];
  glossary: NutritionGlossaryEntry[];
  tables?: NutritionTable[];
  alerts?: NutritionAlert[];
};

const GUIDE_TEXT = {
  "pt-BR": {
    timelineKicker: "Estrutura",
    strategyBadge: "Nutrição estratégica",
    goalHeading: "Objetivo",
    rationaleHeading: "Por que funciona",
    focusHeading: "Focos principais",
    tableKicker: "Planejamento rápido",
    supplementsHeading: "Suplementos e ajustes",
    alertsHeading: "Alertas importantes",
    watchoutsHeading: "Erros comuns",
    glossaryHeading: "Siglas e gírias",
  },
  "en-US": {
    timelineKicker: "Framework",
    strategyBadge: "Strategic fueling",
    goalHeading: "Objective",
    rationaleHeading: "Why it works",
    focusHeading: "Primary focus points",
    tableKicker: "Quick planning",
    supplementsHeading: "Supplements & tweaks",
    alertsHeading: "Important alerts",
    watchoutsHeading: "Common mistakes",
    glossaryHeading: "Terms & jargon",
  },
} as const;

type GuideCopy = (typeof GUIDE_TEXT)[keyof typeof GUIDE_TEXT];

const SectionWrapper = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <section
    className={`rounded-2xl border border-white/5 bg-black/25 p-6 shadow-sm md:p-8 ${className}`}
  >
    {children}
  </section>
);

const TimelineSection = ({
  section,
  strings,
}: {
  section: NutritionTimelineSection;
  strings: GuideCopy;
}) => (
  <SectionWrapper>
    <div className="space-y-4">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-[#d5fe46]/80">
          {strings.timelineKicker}
        </p>
        <h4 className="text-2xl font-semibold text-white md:text-3xl">
          {section.title}
        </h4>
        {section.intro ? (
          <p className="mt-2 text-sm text-white/75 md:text-base">
            {section.intro}
          </p>
        ) : null}
      </div>
      <div className="space-y-4">
        {section.blocks.map((block) => (
          <div
            key={block.title}
            className="rounded-xl border border-white/10 bg-black/40 p-5"
          >
            <span className="text-sm font-semibold uppercase tracking-wide text-[#d5fe46]">
              {block.title}
            </span>
            <p className="mt-2 text-sm text-white/80 md:text-base">
              {block.description}
            </p>
            {block.bullets?.length ? (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/75 md:text-base">
                {block.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default function NutritionDistanceGuide(
  props: NutritionDistanceGuideProps
) {
  const {
    title,
    distanceTag,
    description,
    goal,
    rationale,
    focusPoints,
    preparation,
    raceExecution,
    recovery,
    supplements,
    watchouts,
    glossary,
    tables,
    alerts,
  } = props;
  const { isBrazilExperience } = useI18n();
  const strings = GUIDE_TEXT[isBrazilExperience ? "pt-BR" : "en-US"];

  return (
    <article className="mx-auto flex max-w-5xl flex-col gap-10 rounded-2xl bg-gradient-to-br from-slate-900/60 to-black/60 p-4 text-slate-200 md:gap-12 md:p-8">
      <header className="rounded-2xl bg-gradient-to-br from-slate-900/60 to-black/60  p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3 md:max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">{distanceTag}</Badge>
              <Badge className="bg-[#d5fe46] text-slate-900">
                {strings.strategyBadge}
              </Badge>
            </div>
            <h3 className="text-3xl font-bold md:text-4xl">{title}</h3>
            <p className="text-base text-white/80 md:text-lg">{description}</p>
          </div>
          <div className="flex flex-col gap-3 md:max-w-xs">
            <SectionWrapper className="border-white/10 bg-black/40 p-5 md:p-6">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-[#d5fe46]">
                {strings.goalHeading}
              </h4>
              <p className="mt-2 text-sm text-white/80 md:text-base">{goal}</p>
            </SectionWrapper>
            <SectionWrapper className="border-white/10 bg-black/40 p-5 md:p-6">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-[#d5fe46]">
                {strings.rationaleHeading}
              </h4>
              <p className="mt-2 text-sm text-white/80 md:text-base">
                {rationale}
              </p>
            </SectionWrapper>
          </div>
        </div>
      </header>

      <SectionWrapper>
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-white md:text-3xl">
            {strings.focusHeading}
          </h4>
          <ul className="grid gap-3 md:grid-cols-2">
            {focusPoints.map((focus) => (
              <li
                key={focus}
                className="rounded-xl border border-white/10 bg-black/40 p-5 text-sm text-white/80 md:text-base"
              >
                {focus}
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      <TimelineSection section={preparation} strings={strings} />
      <TimelineSection section={raceExecution} strings={strings} />
      <TimelineSection section={recovery} strings={strings} />

      {tables?.length ? (
        <SectionWrapper>
          <div className="space-y-6">
            {tables.map((table) => (
              <div key={table.title} className="space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#d5fe46]/80">
                    {strings.tableKicker}
                  </p>
                  <h4 className="text-2xl font-semibold text-white md:text-3xl">
                    {table.title}
                  </h4>
                  {table.caption ? (
                    <p className="mt-2 text-sm text-white/70 md:text-base">
                      {table.caption}
                    </p>
                  ) : null}
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <Table>
                    <TableHeader className="bg-white/[0.05]">
                      <TableRow>
                        {table.headers.map((header) => (
                          <TableHead key={header} className="text-white">
                            {header}
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {table.rows.map((row, index) => (
                        <TableRow key={row.join("-") + index}>
                          {row.map((cell, idx) => (
                            <TableCell
                              key={`${cell}-${idx}`}
                              className="text-sm text-white/80"
                            >
                              {cell}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      ) : null}

      {supplements?.length ? (
        <SectionWrapper>
          <h4 className="text-2xl font-semibold text-white md:text-3xl">
            {strings.supplementsHeading}
          </h4>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/80 md:text-base">
            {supplements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionWrapper>
      ) : null}

      {alerts?.length ? (
        <SectionWrapper className="border border-amber-400/30 bg-amber-400/10">
          <h4 className="text-2xl font-semibold text-amber-50 md:text-3xl">
            {strings.alertsHeading}
          </h4>
          <div className="mt-4 space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.title}
                className="rounded-xl border border-amber-300/30 bg-amber-300/10 p-5"
              >
                <h5 className="text-sm font-semibold uppercase tracking-wide text-amber-100">
                  {alert.title}
                </h5>
                <p className="mt-2 text-sm text-amber-50/90 md:text-base">
                  {alert.description}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      ) : null}

      {watchouts?.length ? (
        <SectionWrapper className="border border-red-500/20 bg-red-500/10">
          <h4 className="text-2xl font-semibold text-red-50 md:text-3xl">
            {strings.watchoutsHeading}
          </h4>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-red-50/90 md:text-base">
            {watchouts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionWrapper>
      ) : null}

      <SectionWrapper>
        <h4 className="text-2xl font-semibold text-white md:text-3xl">
          {strings.glossaryHeading}
        </h4>
        <dl className="mt-4 grid gap-3 md:grid-cols-2">
          {glossary.map((entry) => (
            <div
              key={entry.term}
              className="rounded-xl border border-white/10 bg-black/40 p-5"
            >
              <dt className="text-sm font-semibold uppercase tracking-wide text-[#d5fe46]">
                {entry.term}
              </dt>
              <dd className="mt-2 text-sm text-white/80 md:text-base">
                {entry.description}
              </dd>
            </div>
          ))}
        </dl>
      </SectionWrapper>
    </article>
  );
}
