import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
} from "@/components/ui";

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

export default function RunningNutritionHome() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="rounded-3xl bg-gradient-to-br from-emerald-600/20 via-emerald-700/10 to-emerald-900/10 border border-emerald-500/20 p-6 md:p-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-200">
            Corra melhor com nutrição inteligente
          </h1>
          <p className="text-emerald-100/80 text-lg max-w-3xl">
            Protocolos claros para treinos e provas. Doses, timing, hidratação e
            recuperação — do 5k à ultra.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {["5K", "10K", "15K", "21K", "42K", "ULTRA"].map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-emerald-900/30 text-emerald-200 border border-emerald-400/30"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <Card className="bg-background/60">
            <CardHeader>
              <CardTitle>Regras de Ouro</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Teste tudo nos treinos. Nada novo no dia da prova.</p>
              <p>Géis sempre com água; alterne água e isotônico.</p>
              <p>Ajuste por clima e sudorese; priorize segurança.</p>
            </CardContent>
          </Card>
          <Card className="bg-background/60">
            <CardHeader>
              <CardTitle>Alertas Rápidos</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Evite AINEs sem orientação (risco renal/estomacal).</p>
              <p>Hiponatremia: não exagere em água sem sódio.</p>
              <p>
                Intolerância à lactose? Prefira bebidas vegetais/alternativas.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background/60">
            <CardHeader>
              <CardTitle>Checklist Pré-Prova</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Estratégia de gel/bebida por km/tempo definida.</p>
              <p>Rotas de hidratação e postos mapeados.</p>
              <p>Plano de clima: calor/frio/chuva, roupa e eletrólitos.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER CALLOUT */}
      <section className="mt-10">
        <Card>
          <CardHeader>
            <CardTitle>Mensagem Importante</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              Maratona: recomenda-se ter completado pelo menos{" "}
              <b>32 km em até 4h</b> em treinos longos antes de tentar a prova.
            </p>
            <p>
              Ultras: controle a ingestão por <b>tempo</b> (60–120 g CHO/h),
              equilibre água e eletrólitos e tenha plano de{" "}
              <b>crew/drop bags</b>.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
