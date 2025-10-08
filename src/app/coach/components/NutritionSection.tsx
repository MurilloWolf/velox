import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Badge,
} from "@/components/ui";

const nutritionByLevel = {
  beginner: {
    title: "Nutrição para Iniciantes",
    tips: [
      {
        title: "Hidratação é Fundamental",
        description:
          "Beba pelo menos 2 litros de água por dia. Aumente para 3-4 litros em dias de treino.",
        category: "Hidratação",
      },
      {
        title: "Carboidratos são Energia",
        description:
          "Consuma carboidratos complexos como arroz integral, batata doce e aveia 2-3 horas antes do treino.",
        category: "Pré-treino",
      },
      {
        title: "Proteína para Recuperação",
        description:
          "Inclua proteínas magras (frango, peixe, ovos) em todas as refeições para auxiliar na recuperação muscular.",
        category: "Recuperação",
      },
      {
        title: "Evite Alimentos Pesados",
        description:
          "Não corra com o estômago cheio. Espere pelo menos 2 horas após refeições grandes.",
        category: "Dica Geral",
      },
    ],
  },
  intermediate: {
    title: "Nutrição para Intermediários",
    tips: [
      {
        title: "Timing de Nutrientes",
        description:
          "Consuma carboidratos + proteína na janela de 30-60 minutos pós-treino para otimizar recuperação.",
        category: "Pós-treino",
      },
      {
        title: "Suplementação Estratégica",
        description:
          "Considere BCAA, whey protein e maltodextrina para treinos mais intensos e longos.",
        category: "Suplementos",
      },
      {
        title: "Periodização Nutricional",
        description:
          "Ajuste a ingestão de carboidratos conforme o volume de treino: mais carbs em dias pesados.",
        category: "Estratégia",
      },
      {
        title: "Gorduras Saudáveis",
        description:
          "Inclua abacate, castanhas e azeite para saúde hormonal e energia de longa duração.",
        category: "Macronutrientes",
      },
    ],
  },
  advanced: {
    title: "Nutrição para Avançados",
    tips: [
      {
        title: "Carb Loading Estratégico",
        description:
          "Aumente carboidratos para 8-10g/kg nos 2-3 dias antes de provas longas para maximizar glicogênio.",
        category: "Competição",
      },
      {
        title: "Nutrição Durante Corrida",
        description:
          "Para corridas >90min: 30-60g de carboidratos por hora via géis, isotônicos ou alimentos.",
        category: "Durante Prova",
      },
      {
        title: "Teste Tudo no Treino",
        description:
          "Nunca experimente novos alimentos ou suplementos no dia da prova. Teste tudo nos treinos.",
        category: "Estratégia",
      },
      {
        title: "Recuperação Avançada",
        description:
          "Proporção 3:1 ou 4:1 de carboidratos para proteína pós-treino intenso. Considere creatina.",
        category: "Recuperação",
      },
    ],
  },
};

const nutritionByRace = {
  "5k": {
    title: "Nutrição para 5K",
    tips: [
      "Refeição leve 2-3 horas antes: banana com pasta de amendoim",
      "Não precisa de nutrição durante a prova",
      "Hidrate-se bem no dia anterior",
      "Evite alimentos novos no dia da prova",
    ],
  },
  "10k": {
    title: "Nutrição para 10K",
    tips: [
      "Café da manhã com carboidratos 3 horas antes",
      "Considere um gel 15min antes se for correr rápido",
      "Hidratação a cada posto se disponível",
      "Recuperação com shake de proteína + banana",
    ],
  },
  half: {
    title: "Nutrição para Meia Maratona",
    tips: [
      "Carb loading leve nos 2 dias anteriores",
      "Gel ou isotônico a cada 40-45 minutos",
      "Hidrate a cada 3-5km",
      "Refeição de recuperação em até 2 horas pós-prova",
    ],
  },
  marathon: {
    title: "Nutrição para Maratona",
    tips: [
      "Carb loading sério: 3 dias antes aumentar carboidratos",
      "Gel a cada 30-40 minutos durante a prova",
      "Isotônico + água alternados a cada posto",
      "Considere cafeína no km 30 para boost final",
      "Sal/eletrólitos são essenciais em provas longas",
    ],
  },
};

export default function NutritionSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-balance">
          Dicas de Nutrição
        </h2>
        <p className="mt-2 text-lg text-muted-foreground text-pretty">
          Guias completos de nutrição para corredores de todos os níveis e
          distâncias
        </p>
      </div>

      <Tabs defaultValue="level" className="space-y-6">
        <TabsList>
          <TabsTrigger value="level">Por Nível</TabsTrigger>
          <TabsTrigger value="race">Por Prova</TabsTrigger>
        </TabsList>

        <TabsContent value="level" className="space-y-6">
          {Object.entries(nutritionByLevel).map(([key, data]) => (
            <Card key={key}>
              <CardHeader>
                <CardTitle>{data.title}</CardTitle>
                <CardDescription>
                  Orientações nutricionais específicas para seu nível
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {data.tips.map((tip, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-border bg-card p-4 space-y-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-semibold text-card-foreground">
                          {tip.title}
                        </h4>
                        <Badge variant="secondary" className="shrink-0">
                          {tip.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground text-pretty">
                        {tip.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="race" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(nutritionByRace).map(([key, race]) => (
              <Card key={key}>
                <CardHeader>
                  <CardTitle>{race.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {race.tips.map((tip, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          {index + 1}
                        </span>
                        <span className="text-sm text-muted-foreground text-pretty">
                          {tip}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
