"use client";

import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/i18n/useI18n";

export type TrainingStructureItem = {
  label: string;
  description: string;
};

export type TrainingTypeGuideProps = {
  title: string;
  description: string;
  goal: string;
  rationale: string;
  aliases?: string[];
  structure: TrainingStructureItem[];
  intensityCues?: string[];
  whenToUse: string[];
  tips: string[];
  watchouts?: string[];
};

const GUIDE_TEXT = {
  "pt-BR": {
    badge: "Guia de treino",
    goalHeading: "Objetivo do treino",
    rationaleHeading: "Por que funciona",
    structureHeading: "Como montar",
    structureDescription:
      "Use a estrutura abaixo como referência e adapte volumes conforme o momento da periodização.",
    intensityHeading: "Ritmo e intensidade",
    intensityDescription:
      "Use estas referências para manter o estímulo certo durante toda a sessão.",
    whenHeading: "Quando incluir no ciclo",
    tipsHeading: "Dicas práticas",
    watchoutsHeading: "Fique atento",
  },
  "en-US": {
    badge: "Workout guide",
    goalHeading: "Session purpose",
    rationaleHeading: "Why it works",
    structureHeading: "How to structure",
    structureDescription:
      "Use this outline as a reference and adjust the volume to your current phase.",
    intensityHeading: "Pace & intensity",
    intensityDescription:
      "Rely on these cues to keep the right stimulus from start to finish.",
    whenHeading: "When to schedule it",
    tipsHeading: "Practical tips",
    watchoutsHeading: "Stay aware",
  },
} as const;

export default function TrainingTypeGuide(props: TrainingTypeGuideProps) {
  const {
    title,
    description,
    goal,
    rationale,
    aliases,
    structure,
    intensityCues,
    whenToUse,
    tips,
    watchouts,
  } = props;
  const { isBrazilExperience } = useI18n();
  const strings = GUIDE_TEXT[isBrazilExperience ? "pt-BR" : "en-US"];

  return (
    <article className="mx-auto flex max-w-5xl flex-col gap-10 rounded-2xl bg-gradient-to-br from-slate-900/60 to-black/60 p-4 text-slate-200 md:gap-12 md:p-8">
      <header className="rounded-2xl bg-gradient-to-br from-slate-900/60 to-black/60 p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d5fe46]/80">
              {strings.badge}
            </p>
            <h3 className="text-3xl font-bold md:text-4xl">{title}</h3>
            <p className="text-base text-white/80 md:text-lg">{description}</p>
          </div>
          {aliases?.length ? (
            <div className="flex flex-wrap gap-2 md:max-w-xs">
              {aliases.map((alias) => (
                <Badge key={alias} variant="outline">
                  {alias}
                </Badge>
              ))}
            </div>
          ) : null}
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/5 bg-black/30 p-5">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#d5fe46]">
            {strings.goalHeading}
          </h4>
          <p className="mt-3 text-sm text-white/85 md:text-base">{goal}</p>
        </div>
        <div className="rounded-2xl border border-white/5 bg-black/30 p-5">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#d5fe46]">
            {strings.rationaleHeading}
          </h4>
          <p className="mt-3 text-sm text-white/85 md:text-base">{rationale}</p>
        </div>
      </section>

      <section className="rounded-2xl border border-white/5 bg-black/20 p-6 shadow-sm md:p-7">
        <h4 className="text-2xl font-semibold text-white">
          {strings.structureHeading}
        </h4>
        <p className="mt-2 text-sm text-white/75 md:text-base">
          {strings.structureDescription}
        </p>
        <div className="mt-6 space-y-4">
          {structure.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/10 bg-black/40 p-5"
            >
              <span className="text-sm font-semibold uppercase tracking-wide text-[#d5fe46]">
                {item.label}
              </span>
              <p className="mt-2 text-sm text-white/80 md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {intensityCues?.length ? (
        <section className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6 shadow-sm md:p-7">
          <h4 className="text-2xl font-semibold text-emerald-100">
            {strings.intensityHeading}
          </h4>
          <p className="mt-2 text-sm text-emerald-50/80 md:text-base">
            {strings.intensityDescription}
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-emerald-50 md:text-base">
            {intensityCues.map((cue) => (
              <li key={cue}>{cue}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="rounded-2xl border border-white/5 bg-black/20 p-6 shadow-sm md:p-7">
        <h4 className="text-2xl font-semibold text-white">
          {strings.whenHeading}
        </h4>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/80 md:text-base">
          {whenToUse.map((situation) => (
            <li key={situation}>{situation}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-white/5 bg-black/20 p-6 shadow-sm md:p-7">
        <h4 className="text-2xl font-semibold text-white">
          {strings.tipsHeading}
        </h4>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/80 md:text-base">
          {tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>

      {watchouts?.length ? (
        <section className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6 shadow-sm md:p-7">
          <h4 className="text-2xl font-semibold text-red-50">
            {strings.watchoutsHeading}
          </h4>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-red-50/90 md:text-base">
            {watchouts.map((warning) => (
              <li key={warning}>{warning}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
