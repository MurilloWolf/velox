```react
import { Header, Footer } from "@/components/system";
import { Badge, Card, CardContent } from "@/components/ui";
import { Button } from "@/components/ui/button";
import {
Rocket,
Lightbulb,
Sparkles,
Bot,
Satellite,
Workflow,
Users,
Terminal,
Compass,
} from "lucide-react";

const phases = [
{
title: "Agora",
timeframe: "Q1 · Q2 2024",
headline: "Experiência impecável para comunidade de corredores",
description:
"Entregas focadas em consolidar o Velox como assistente indispensável, com dados confiáveis e interações de alto impacto.",
highlights: [
"Dashboard de provas com filtros inteligentes e alertas ajustáveis",
"Integração com calendários pessoais e sincronização em tempo real",
"Revisão da UX do bot para fluxos mais curtos e respostas humanizadas",
],
},
{
title: "Próximo",
timeframe: "Q3 2024",
headline: "Expansão da inteligência e personalização",
description:
"Transformar o Velox em copiloto estratégico: recomendações proativas, insights e planos adaptativos para cada corredor.",
highlights: [
"Motor de recomendações com IA para provas-alvo e treinos complementares",
"Relatórios semanais com progresso, métricas de performance e sugestões",
"Lançamento do modo comunidades para organizar grupos de corrida",
],
},
{
title: "Futuro",
timeframe: "2025+",
headline: "Ecossistema aberto, colaborativo e data-driven",
description:
"Abrir caminhos para que marcas, organizadores e atletas criem experiências conectadas dentro do universo Velox.",
highlights: [
"Marketplace de serviços para assessorias e treinadores",
"APIs públicas para parceiros e integração com wearables",
"Camada de insights preditivos para planejamento de temporadas",
],
},
];

const innovationTracks = [
{
title: "IA Conversacional",
description:
"Fluxos hipercontextuais, tom motivador e memória das interações para acompanhar cada atleta de ponta a ponta.",
icon: Bot,
},
{
title: "Experiência Holográfica",
description:
"Interface glassmorphism com animações leves e feedback visual em tempo real para elevar a sensação futurista.",
icon: Sparkles,
},
{
title: "Dados & Insights",
description:
"Métricas de corrida, benchmarks e previsões baseados em comportamentos da comunidade nacional.",
icon: Satellite,
},
{
title: "Comunidade Viva",
description:
"Grupos temáticos, missões colaborativas e gamificação para engajar corredores em rede.",
icon: Users,
},
];

const inspirationBursts = [
{
label: "Design Sprint",
text: "Prototipar widgets responsivos para o bot direto no Telegram Web, com visual dinâmico e dark-first.",
icon: Lightbulb,
},
{
label: "Labs",
text: "Explorar comandos multimodais: voz, foto da planilha de treino e reconhecimento instantâneo de padrões.",
icon: Terminal,
},
{
label: "Parcerias",
text: "Cocriar desafios com circuitos de corrida e marcas esportivas para gerar recompensas exclusivas.",
icon: Workflow,
},
{
label: "Research",
text: "Entrevistas quinzenais com corredores iniciantes e elites para calibrar linguagem, timing e recomendações.",
icon: Compass,
},
];

export default function RoadmapPage() {
return (
<div className="relative min-h-screen bg-[#050505] text-slate-100">
<Header />

<main className="relative overflow-hidden">
<div className="pointer-events-none absolute inset-0">
<div className="absolute -left-36 top-24 h-72 w-72 rounded-full bg-[#d5fe46]/15 blur-3xl" />
<div className="absolute right-[-15%] top-1/3 h-96 w-96 rounded-full bg-[#1a1307]/60 blur-[120px]" />
<div className="absolute bottom-10 left-1/2 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#d5fe46]/10 via-transparent to-transparent blur-3xl" />
</div>

<div className="relative z-10">
<section className="container mx-auto flex flex-col gap-12 px-4 py-20 lg:flex-row lg:items-center">
<div className="flex-1 space-y-6">
<Badge className="w-fit rounded-full border border-[#d5fe46]/50 bg-[#d5fe46]/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#d5fe46]">
Velox Roadmap
</Badge>
<h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
Construindo o futuro do bot mais veloz das corridas brasileiras
</h1>
<p className="max-w-2xl text-lg text-slate-300 md:text-xl">
Um panorama vivo das apostas ousadas, evoluções técnicas e
experiências que transformarão cada conversa com o Velox em um
portal de insights, preparo e diversão para a comunidade.
</p>
<div className="flex flex-wrap gap-4">
<Button className="h-auto rounded-lg bg-[#d5fe46] px-6 py-4 text-base font-semibold uppercase tracking-wide text-black shadow-[0_20px_55px_-32px_rgba(213,254,70,0.9)] transition-transform hover:-translate-y-0.5 hover:bg-[#d5fe46]/90">
<Rocket className="mr-2 h-5 w-5" />
Entrar no Board de Ideias
</Button>
<Button
variant="outline"
className="h-auto rounded-lg border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold uppercase tracking-wide text-slate-100 backdrop-blur transition-all hover:border-[#d5fe46]/60 hover:text-[#d5fe46]"
>
Baixar versão detalhada
</Button>
</div>
</div>
<div className="flex-1">
<Card className="border border-white/10 bg-white/5 backdrop-blur-xl">
<CardContent className="space-y-4 p-6">
<div className="flex items-center gap-3">
<div className="rounded-full bg-[#d5fe46]/20 p-3">
<Sparkles className="h-6 w-6 text-[#d5fe46]" />
</div>
<div>
<p className="text-sm uppercase tracking-wide text-slate-400">
Horizonte Velox
</p>
<p className="text-lg font-medium text-white">
3 pilares, uma visão audaciosa
</p>
</div>
</div>
<p className="text-sm leading-relaxed text-slate-300">
Cada fase do roadmap é redesenhada mensalmente com base em
métricas de uso, feedback da comunidade e aprendizado
continuo das interações com o bot. Transparência e
governança participativa são princípios chave.
</p>
<div className="grid gap-2 text-sm text-slate-200/80">
<div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-3 py-2">
<span>Feedbacks incorporados por sprint</span>
<span className="font-semibold text-[#d5fe46]">96%</span>
</div>
<div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-3 py-2">
<span>Velocidade média de entrega</span>
<span className="font-semibold text-[#d5fe46]">1.8 semanas</span>
</div>
<div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-3 py-2">
<span>Taxa de satisfação da comunidade</span>
<span className="font-semibold text-[#d5fe46]">4.8/5</span>
</div>
</div>
</CardContent>
</Card>
</div>
</section>

<section className="container mx-auto space-y-10 px-4 pb-20">
<div className="flex flex-col gap-3">
<h2 className="text-3xl font-semibold text-white md:text-4xl">
Fases do Roadmap
</h2>
<p className="max-w-3xl text-base text-slate-300">
Um trajeto transparente para que todos possam acompanhar o ritmo
de construção do projeto e contribuir com ideias que acelerem o
impacto coletivo.
</p>
</div>
<div className="grid gap-8 lg:grid-cols-3">
{phases.map((phase) => (
<Card
key={phase.title}
className="group border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl transition-all duration-300 hover:border-[#d5fe46]/60 hover:shadow-[0_30px_65px_-40px_rgba(213,254,70,0.8)]"
>
<CardContent className="space-y-5 p-6">
<div className="flex items-center justify-between">
<Badge className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-200">
{phase.title}
</Badge>
<span className="text-xs font-medium uppercase tracking-wider text-slate-400">
{phase.timeframe}
</span>
</div>
<h3 className="text-xl font-semibold text-white">
{phase.headline}
</h3>
<p className="text-sm leading-relaxed text-slate-300">
{phase.description}
</p>
<ul className="space-y-3 text-sm text-slate-200/80">
{phase.highlights.map((item) => (
<li
key={item}
className="flex items-start gap-2 rounded-md border border-white/5 bg-white/5 px-3 py-2 backdrop-blur"
>
<span className="mt-0.5 h-2 w-2 rounded-full bg-[#d5fe46]" />
<span>{item}</span>
</li>
))}
</ul>
</CardContent>
</Card>
))}
</div>
</section>

<section className="container mx-auto grid gap-12 px-4 pb-20 lg:grid-cols-[1.3fr_1fr]">
<div className="space-y-8">
<div className="flex flex-col gap-2">
<h2 className="text-3xl font-semibold text-white md:text-4xl">
Trilhas de inovação
</h2>
<p className="max-w-2xl text-base text-slate-300">
Hubs criativos que guiam squads multidisciplinares para protótipos
rápidos, com ciclos de pesquisa, teste e aprendizado contínuo.
</p>
</div>
<div className="grid gap-6 md:grid-cols-2">
{innovationTracks.map((track) => (
<Card
key={track.title}
className="border border-white/10 bg-white/5 p-0 backdrop-blur-xl"
>
<CardContent className="space-y-3 p-5">
<div className="flex items-center gap-3">
<div className="rounded-lg bg-[#d5fe46]/20 p-2">
<track.icon className="h-5 w-5 text-[#d5fe46]" />
</div>
<h3 className="text-lg font-semibold text-white">
{track.title}
</h3>
</div>
<p className="text-sm text-slate-300">{track.description}</p>
</CardContent>
</Card>
))}
</div>
</div>
<aside className="h-full">
<Card className="relative h-full border border-white/10 bg-gradient-to-br from-[#0b0b0b]/80 via-white/5 to-transparent backdrop-blur-xl">
<CardContent className="space-y-6 p-6">
<div className="flex items-center gap-3">
<div className="rounded-full bg-[#d5fe46]/20 p-3">
<Lightbulb className="h-6 w-6 text-[#d5fe46]" />
</div>
<div>
<p className="text-xs uppercase tracking-widest text-slate-400">
Momentos de inspiração
</p>
<p className="text-xl font-semibold text-white">
Sparks que alimentam o roadmap
</p>
</div>
</div>
<div className="space-y-4">
{inspirationBursts.map((burst) => (
<div
key={burst.label}
className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
>
<div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#d5fe46]">
<burst.icon className="h-4 w-4" />
{burst.label}
</div>
<p className="text-sm text-slate-300">{burst.text}</p>
</div>
))}
</div>
<div className="rounded-lg border border-[#d5fe46]/40 bg-[#d5fe46]/10 px-4 py-3 text-sm text-[#d5fe46]">
Quer sugerir algo? Envie ideias pelo canal exclusivo do
projeto e participe das votações mensais.
</div>
</CardContent>
</Card>
</aside>
</section>
</div>
</main>

<Footer />
</div>
);
}

```
