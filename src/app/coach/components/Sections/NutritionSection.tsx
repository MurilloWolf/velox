import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
} from "@/components/ui";
import { useI18n } from "@/i18n/useI18n";

export type NutritionTip = {
  title: string;
  description: string;
  category: string;
};

export type NutritionLevel = {
  title: string;
  tips: NutritionTip[];
};

export type NutritionRaceGuide = {
  title: string;
  tips: string[];
};

export type NutritionSectionProps = {
  intro: {
    title: string;
    description: string;
  };
  levels: Record<string, NutritionLevel>;
  races: Record<string, NutritionRaceGuide>;
};

const SECTION_COPY = {
  "pt-BR": {
    hero: {
      kicker: "Nutrição aplicada ao treino",
      title: "Corra melhor com nutrição inteligente",
      description:
        "Protocolos claros para treinos e provas. Doses, timing, hidratação e recuperação — do 5km à ultra.",
      distanceTags: ["5km", "10km", "15km", "21km", "42km", "ULTRA"],
      cards: [
        {
          title: "Regras de Ouro",
          items: [
            "Teste tudo nos treinos. Nada novo no dia da prova.",
            "Géis sempre com água; alterne água e isotônico.",
            "Ajuste por clima e sudorese; priorize segurança.",
          ],
        },
        {
          title: "Alertas Rápidos",
          items: [
            "Evite AINEs sem orientação (risco renal/estomacal).",
            "Hiponatremia: não exagere em água sem sódio.",
            "Intolerância à lactose? Prefira bebidas vegetais/alternativas.",
          ],
        },
        {
          title: "Checklist Pré-Prova",
          items: [
            "Estratégia de gel/bebida por km/tempo definida.",
            "Rotas de hidratação e postos mapeados.",
            "Plano de clima: calor/frio/chuva, roupa e eletrólitos.",
          ],
        },
      ],
    },
    message: {
      title: "Mensagem Importante",
      paragraphs: [
        "Maratona: recomenda-se ter completado pelo menos 32 km em até 4h em treinos longos antes de tentar a prova.",
        "Ultras: controle a ingestão por tempo (60–120 g CHO/h), equilibre água e eletrólitos e tenha plano de crew/drop bags.",
      ],
    },
    races: {
      title: "Protocolos por distância",
      description: "Ajuste alimentação e hidratação conforme sua prova-chave.",
      badgeLabel: "Distância",
      distanceLabels: {
        "5k": "5km",
        "10k": "10km",
        half: "21km",
        marathon: "42km",
      },
    },
    levels: {
      badge: "Guias por nível",
    },
  },
  "en-US": {
    hero: {
      kicker: "Fueling as part of training",
      title: "Run better with smart nutrition",
      description:
        "Clear protocols for workouts and race day. Timing, hydration and recovery dialed from 5K to ultra.",
      distanceTags: ["5K", "10K", "15K", "21K", "42K", "ULTRA"],
      cards: [
        {
          title: "Golden rules",
          items: [
            "Rehearse everything in training. Nothing new on race day.",
            "Pair gels with water and alternate water with sports drinks.",
            "Adjust intake for climate, humidity and sweat rate.",
          ],
        },
        {
          title: "Fast alerts",
          items: [
            "Skip NSAIDs without medical guidance (kidney/GI risk).",
            "Hyponatremia: avoid chugging only water with no sodium.",
            "Lactose intolerant? Use plant-based or alternative drinks.",
          ],
        },
        {
          title: "Race-day checklist",
          items: [
            "Define gel/drink strategy by kilometer or elapsed time.",
            "Map aid stations and personal bottle drops.",
            "Plan for weather: heat/cold/rain, clothing and electrolytes.",
          ],
        },
      ],
    },
    message: {
      title: "Important note",
      paragraphs: [
        "Marathon: log at least one 20-mile/32 km long run in under 4 hours before toeing the line.",
        "Ultras: fuel by time (60–120 g carbs per hour), balance fluids/electrolytes and plan crew or drop bags.",
      ],
    },
    races: {
      title: "Distance-specific playbooks",
      description: "Match fueling and hydration to every race focus.",
      badgeLabel: "Distance",
      distanceLabels: {
        "5k": "5K",
        "10k": "10K",
        half: "21K",
        marathon: "42K",
      },
    },
    levels: {
      badge: "Guides by level",
    },
  },
} as const;

const LEVEL_ORDER = ["beginner", "intermediate", "advanced"] as const;
const RACE_ORDER = ["5k", "10k", "half", "marathon"] as const;

export default function NutritionSection({
  intro,
  levels,
  races,
}: NutritionSectionProps) {
  const { isBrazilExperience } = useI18n();
  const copy = SECTION_COPY[isBrazilExperience ? "pt-BR" : "en-US"];

  const orderedLevels = [
    ...LEVEL_ORDER.map((key) => levels[key]).filter(
      (level): level is NutritionLevel => Boolean(level)
    ),
    ...Object.entries(levels)
      .filter(
        ([key]) => !LEVEL_ORDER.includes(key as (typeof LEVEL_ORDER)[number])
      )
      .map(([, level]) => level),
  ];

  const raceEntries = [
    ...RACE_ORDER.map((key) =>
      races[key] ? { id: key, guide: races[key] } : null
    ).filter(
      (
        entry
      ): entry is {
        id: (typeof RACE_ORDER)[number];
        guide: NutritionRaceGuide;
      } => Boolean(entry)
    ),
    ...Object.entries(races)
      .filter(
        ([key]) => !RACE_ORDER.includes(key as (typeof RACE_ORDER)[number])
      )
      .map(([id, guide]) => ({ id, guide })),
  ];

  const formatDistanceLabel = (id: string) =>
    copy.races.distanceLabels[
      id as keyof (typeof copy.races)["distanceLabels"]
    ] ?? id.toUpperCase();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      <section className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-600/20 via-emerald-700/10 to-emerald-900/10 p-6 md:p-10">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/70">
            {copy.hero.kicker}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-emerald-100 md:text-5xl">
            {copy.hero.title}
          </h1>
          <p className="text-lg text-emerald-100/80 md:max-w-3xl">
            {copy.hero.description}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {copy.hero.distanceTags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="border border-emerald-400/30 bg-emerald-900/30 text-emerald-200"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {copy.hero.cards.map((card) => (
            <Card key={card.title} className="bg-background/60">
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                {card.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-white/5 bg-white/5 p-6 shadow-[0_20px_60px_-30px_rgba(13,148,136,0.5)] md:p-10">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d5fe46]/70">
            {copy.levels.badge}
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {intro.title}
          </h2>
          <p className="text-lg text-white/80">{intro.description}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {orderedLevels.map((level) => (
            <div
              key={level.title}
              className="rounded-2xl border border-white/10 bg-black/40 p-5"
            >
              <h3 className="text-xl font-semibold text-white">
                {level.title}
              </h3>
              <div className="mt-4 space-y-4">
                {level.tips.map((tip) => (
                  <div
                    key={tip.title}
                    className="rounded-xl border border-white/10 bg-black/30 p-4"
                  >
                    <Badge
                      variant="outline"
                      className="border-white/25 text-xs text-white/80"
                    >
                      {tip.category}
                    </Badge>
                    <h4 className="mt-3 text-base font-semibold text-white">
                      {tip.title}
                    </h4>
                    <p className="text-sm text-white/75">{tip.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-400/20 bg-gradient-to-bl from-emerald-950/60 to-black/70 p-6 md:p-10">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/70">
            {copy.races.badgeLabel}
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {copy.races.title}
          </h2>
          <p className="text-lg text-white/80">{copy.races.description}</p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {raceEntries.map(({ id, guide }) => (
            <div
              key={`${id}-${guide.title}`}
              className="rounded-2xl border border-white/10 bg-black/40 p-5"
            >
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="border-[#d5fe46]/50">
                  {formatDistanceLabel(id)}
                </Badge>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white">
                {guide.title}
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/80">
                {guide.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Card className="bg-white/90 text-slate-800">
          <CardHeader>
            <CardTitle>{copy.message.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-slate-600">
            {copy.message.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
