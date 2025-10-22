import {
  Badge,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";

import Image from "next/image";
import { useState } from "react";

const BeforeRaceContent = () => {
  return (
    <section className="mx-auto max-w-5xl  md:p-4 text-slate-200  bg-[#151515] rounded-2xl flex flex-col gap-12 md:gap-4">
      <div className="rounded-2xl  p-5 md:p-7  flex flex-col gap-4  shadow-sm">
        <h3 className="text-3xl font-bold">Antes da Prova</h3>
        <h3 className="text-2xl font-semibold text-white/90">24h antes</h3>
        <div className="text-white/80 gap-4 flex flex-col">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            Aumente a disponibilidade de glicogênio muscular e hepático sem
            causar desconforto gastrointestinal.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Carboidratos complexos:</strong> arroz, massa, batata
              doce.
            </li>
            <li>
              <strong>Proteínas magras:</strong> frango, peixe, ovos, tofu — em
              porções moderadas.
            </li>
            <li>
              <strong>Controle fibras/gorduras</strong> para digestão eficiente.
            </li>
            <li>
              <strong>Hidratação distribuída:</strong> ~35–45 ml/kg ao longo do
              dia com água e isotônicos leves.
            </li>
          </ul>
        </div>
      </div>
      <div className="rounded-2xl  p-5 md:p-7 shadow-sm flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-white/90">
          3h Antes da Largada
        </h3>
        <div className="text-white/80 flex flex-col gap-4">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            Refeição moderada em carboidratos, com proteínas magras e pouca
            gordura, suficiente para sustentar 15 km.
          </p>
          <div className="rounded-lg flex flex-col md:flex-row gap-4">
            <Image
              className="rounded-lg"
              alt="Refeição leve"
              src="https://nutritotal.com.br/publico-geral/wp-content/uploads/2020/05/shutterstock_252100591.jpg"
              width={500}
              height={300}
            />
            <div className="text-lg  md:max-w-md">
              <p className="text-xl">Opções de refeição:</p>
              <Badge className="mb-2 mr-2 text-sm">Macarrão com molho leve</Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Tapioca com ovos mexidos e queijo branco
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">Sanduíche natural</Badge>
              <Badge className="mb-2 mr-2 text-sm">Aveia com frutas</Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Panqueca de banana com mel
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">Batata-doce amassada</Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-2xl  p-5 md:p-7 shadow-sm flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-white/90">
          30–60 Minutos Antes
        </h3>

        <div className="text-white/80 flex flex-col gap-4">
          Ajuste final para garantir energia disponível sem pesar o estômago:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Gel de carboidrato (20–30 g) ou banana madura.
            </li>
            <li>
              Pequenos goles de água ou isotônico (100–200 ml) antes da largada.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const DuringRaceContent = () => {
  return (
    <section className="mx-auto max-w-5xl  md:p-4 text-slate-200  bg-[#151515] rounded-2xl flex flex-col gap-12 md:gap-4">
      <div className="rounded-2xl  p-5 md:p-7  flex flex-col gap-4  shadow-sm">
        <h3 className="text-3xl font-bold">Durante a Prova</h3>
        <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
          Em 15 km, planeje ingestão de líquidos e carboidratos rápidos após o
          primeiro terço da prova.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-white/80">
          <li>
            Hidratação: 150–250 ml de água ou isotônico a cada 15–20 minutos.
          </li>
          <li>
            Carboidratos: 1 gel (20–30 g) ou pequenos goles de bebida esportiva
            entre km 6 e 10.
          </li>
        </ul>
      </div>
    </section>
  );
};

const AfterRaceContent = () => {
  return (
    <section className="mx-auto max-w-5xl  md:p-4 text-slate-200  bg-[#151515] rounded-2xl flex flex-col gap-12 md:gap-4">
      <div className="rounded-2xl  p-5 md:p-7  flex flex-col gap-4  shadow-sm">
        <h3 className="text-3xl font-bold">Pós-Prova</h3>
        <h3 className="text-2xl font-semibold text-white/90">
          Primeiros 30 min
        </h3>
        <div className="text-white/80 gap-4 flex flex-col">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            Combine carboidratos e proteínas em proporção 3:1 para reposição e
            reparo muscular.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Shake recovery:</strong> whey, banana e aveia.
            </li>
            <li>
              <strong>Alternativas:</strong> iogurte com frutas e mel, sanduíche
              com pasta de amendoim.
            </li>
            <li>
              <strong>Reidratação:</strong> bebidas com eletrólitos ou água de
              coco.
            </li>
            <li>
              <strong>Alongamentos leves</strong> para facilitar a recuperação.
            </li>
          </ul>
        </div>
      </div>
      <div className="rounded-2xl  p-5 md:p-7  flex flex-col gap-4  shadow-sm">
        <h3 className="text-2xl font-semibold text-white/90">1h {`~`} 3h </h3>
        <div className="text-white/80 gap-4 flex flex-col">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            Faça uma refeição completa com foco em reabastecer glicogênio e
            suportar reparo muscular.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Carboidratos complexos:</strong> arroz, quinoa ou batata.
            </li>
            <li>
              <strong>Proteínas magras:</strong> peixe, frango, cortes bovinos
              magros.
            </li>
            <li>
              <strong>Gorduras boas:</strong> azeite, abacate, sementes.
            </li>
            <li>
              <strong>Hidratação contínua</strong> monitorando cor da urina.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const SupplementsContent = () => {
  const supplements = [
    {
      name: "Whey protein",
      timing: "Pós-prova",
      primaryFunction: "Reparação e síntese muscular",
    },
    {
      name: "Carboidrato em gel ou bebida esportiva",
      timing: "Pré-prova (ou durante, se &gt;25 min de esforço intenso)",
      primaryFunction: "Energia rápida",
    },
    {
      name: "Cafeína (3–6 mg/kg)",
      timing: "30–45 min antes da largada",
      primaryFunction:
        "Melhora foco, tempo de reação e redução da percepção de esforço",
    },
    {
      name: "Beta-alanina",
      timing: "Uso contínuo (2–4 g/dia por 4–6 semanas)**",
      primaryFunction:
        "Reduz acúmulo de ácido lático, melhora tolerância ao esforço",
    },
    {
      name: "Creatina",
      timing: "Uso contínuo (3–5 g/dia)**",
      primaryFunction: "Melhora força, explosão e recuperação muscular",
    },
  ];

  return (
    <section className="mx-auto max-w-5xl bg-[#151515] text-slate-200 md:p-4 rounded-2xl">
      <div className="rounded-2xl p-5 md:p-7 shadow-sm flex flex-col gap-4">
        <h3 className="text-3xl font-bold flex items-center gap-2">
          <span aria-hidden="true">💊</span>
          4. Suplementos Recomendados
        </h3>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Suplemento</TableHead>
              <TableHead>Quando usar</TableHead>
              <TableHead>Função principal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {supplements.map((item) => (
              <TableRow key={item.name}>
                <TableCell className="font-medium text-white/90">
                  {item.name}
                </TableCell>
                <TableCell className="text-white/80">{item.timing}</TableCell>
                <TableCell className="text-white/80">
                  {item.primaryFunction}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableCaption className="text-amber-300">
            ⚠️ Suplementos devem ser utilizados com acompanhamento profissional
            para ajuste de dose e segurança individual.
          </TableCaption>
        </Table>
      </div>
    </section>
  );
};

export default function FifteenKNutritionGuide() {
  const [contentSelected, setContentSelected] = useState<string>("beforeRace");

  const contentOptions = [
    { id: "beforeRace", label: "Antes da prova" },
    { id: "duringRace", label: "Durante a prova" },
    { id: "afterRace", label: "Após a prova" },
    { id: "supplements", label: "Suplementos" },
    { id: "extraTips", label: "Dicas extras" },
  ];

  const handleSelectContent = (id: string) => {
    setContentSelected(id);
  };

  const renderContent = () => {
    switch (contentSelected) {
      case "beforeRace":
        return <BeforeRaceContent />;
      case "duringRace":
        return <DuringRaceContent />;
      case "afterRace":
        return <AfterRaceContent />;
      case "supplements":
        return <SupplementsContent />;
      case "extraTips":
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#111] md:p-4 rounded-2xl">
      <header className="mx-auto max-w-5xl px-4 pt-10 pb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white flex items-center gap-3">
          Prova de 15km
        </h1>
        <p className="mt-3 max-w-3xl text-gray-300 text-base sm:text-lg">
          Estrutura de alimentação para provas intermediárias, com foco em ritmo
          constante, economia de energia e recuperação.
        </p>
      </header>

      <section className="mx-auto max-w-5xl px-4 text-gray-400  bg-[#151515] rounded-2xl mb-8 ">
        <div className=" p-5 md:p-7 shadow-sm text-sm">
          <p className="leading-relaxed">
            Um planejamento nutricional para 15 km mantém o glicogênio estável,
            previne quedas de rendimento e minimiza desconfortos. Ajuste por peso,
            ritmo e clima.
          </p>
        </div>
      </section>

      <div className="flex flex-row gap-2 py-4 px-4 overflow-x-auto mx-auto max-w-5xl">
        {contentOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSelectContent(option.id)}
            className={`cursor-pointer px-4 py-2 rounded-full text-xs font-medium transition-colors ${
              contentSelected === option.id
                ? "bg-emerald-600 text-white"
                : "bg-white/10 text-gray-300 hover:bg-emerald-800"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">{renderContent()}</div>

      {/* Suplementos */}
    </div>
  );
}
