import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
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

export default function NutritionSection(props: NutritionSectionProps) {
  const { intro, levels, races } = props;
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-balance">
          {intro.title}
        </h2>
        <p className="mt-2 text-lg text-muted-foreground text-pretty">
          {intro.description}
        </p>
      </div>

      <Tabs defaultValue="level" className="space-y-6">
        <TabsList>
          <TabsTrigger value="level">Por Nível</TabsTrigger>
          <TabsTrigger value="race">Por Prova</TabsTrigger>
        </TabsList>

        <TabsContent value="level" className="space-y-6">
          {Object.entries(levels).map(([key, data]) => (
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
            {Object.entries(races).map(([key, race]) => (
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
