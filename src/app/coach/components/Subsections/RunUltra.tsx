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
        <h3 className="text-2xl font-semibold text-white/90">7–3 dias antes</h3>
        <div className="text-white/80 gap-4 flex flex-col">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            Planeje o carregamento de carboidratos prolongado e ajuste fibras para
            longas distâncias (&gt;42 km).
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Carboidratos predominantes:</strong> arroz, batata-doce,
              massas, pão branco.
            </li>
            <li>
              <strong>Proteínas de fácil digestão:</strong> ovos, frango, tofu.
            </li>
            <li>
              <strong>Fibras moderadas</strong> reduzindo vegetais crus nos dois
              dias anteriores.
            </li>
            <li>
              <strong>Hidratação elevada:</strong> 40–55 ml/kg/dia, incluindo
              eletrólitos.
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
            Foco em carboidratos de média absorção, baixo teor de fibra e gorduras
            para facilitar a digestão.
          </p>
          <div className="rounded-lg flex flex-col md:flex-row gap-4">
            <Image
              className="rounded-lg"
              alt="Refeição pré ultramaratona"
              src="https://nutritotal.com.br/publico-geral/wp-content/uploads/2020/05/shutterstock_252100591.jpg"
              width={500}
              height={300}
            />
            <div className="text-lg  md:max-w-md">
              <p className="text-xl">Opções de refeição:</p>
              <Badge className="mb-2 mr-2 text-sm">Massa com azeite e mel</Badge>
              <Badge className="mb-2 mr-2 text-sm">Arroz branco com ovos</Badge>
              <Badge className="mb-2 mr-2 text-sm">Batata-doce amassada</Badge>
              <Badge className="mb-2 mr-2 text-sm">Panqueca de aveia e mel</Badge>
              <Badge className="mb-2 mr-2 text-sm">Pão branco com geleia</Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-2xl  p-5 md:p-7 shadow-sm flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-white/90">
          60–15 Minutos Antes
        </h3>

        <div className="text-white/80 flex flex-col gap-4">
          Ajustes finais pensando no início conservador e longa duração da prova:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Gel ou bebida esportiva (20–30 g) + goles de água.
            </li>
            <li>
              Cafeína (se tolerado) 30 min antes, 3–6 mg/kg.
            </li>
            <li>
              Checar equipamentos e fontes de energia sólidas/líquidas.
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
          Ultramaratonas exigem estratégia de alimentação contínua, combinando
          líquidos e sólidos leves.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-white/80">
          <li>
            Carboidratos: 40–70 g/h (géis, bebidas, batatas, frutas secas,
            sandwiches).
          </li>
          <li>
            Hidratação: 150–250 ml a cada 15–20 min, ajustando por clima.
          </li>
          <li>
            Eletrólitos: cápsulas ou bebidas com sódio, potássio e magnésio.
          </li>
          <li>
            Inclua pequenas porções salgadas para evitar aversão ao doce.
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
          Primeiras 2h
        </h3>
        <div className="text-white/80 gap-4 flex flex-col">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            Reposição agressiva de carboidratos, eletrólitos e proteínas para
            reparar a musculatura após longas horas de esforço.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Bebidas isotônicas</strong> + água para reidratação.
            </li>
            <li>
              <strong>Shake recovery</strong> com carbo e proteína (3:1).
            </li>
            <li>
              <strong>Alimentos salgados leves:</strong> caldos, sopas, sanduíches.
            </li>
            <li>
              <strong>Alongamentos e mobilidade</strong> para iniciar a
              recuperação.
            </li>
          </ul>
        </div>
      </div>
      <div className="rounded-2xl  p-5 md:p-7  flex flex-col gap-4  shadow-sm">
        <h3 className="text-2xl font-semibold text-white/90">6h seguintes</h3>
        <div className="text-white/80 gap-4 flex flex-col">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            Refeições completas distribuídas ao longo do dia para restaurar
            energia, regenerar tecidos e apoiar imunidade.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Carboidratos variados:</strong> arroz, quinoa, batatas,
              pães.
            </li>
            <li>
              <strong>Proteínas de alto valor biológico:</strong> carnes, ovos,
              laticínios, leguminosas.
            </li>
            <li>
              <strong>Gorduras boas:</strong> azeite, abacate, oleaginosas.
            </li>
            <li>
              <strong>Vitaminas e minerais:</strong> vegetais coloridos, frutas.
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

export default function UltraMarathonNutritionGuide() {
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
          Ultramaratona
        </h1>
        <p className="mt-3 max-w-3xl text-gray-300 text-base sm:text-lg">
          Estrutura de nutrição para provas acima de 42 km, com foco em estratégia
          de longo prazo, variedade energética e recuperação robusta.
        </p>
      </header>

      <section className="mx-auto max-w-5xl px-4 text-gray-400  bg-[#151515] rounded-2xl mb-8 ">
        <div className=" p-5 md:p-7 shadow-sm text-sm">
          <p className="leading-relaxed">
            Use esta base para planejar nutrição de ultramaratonas. Adapte o plano
            a clima, altimetria, postos de apoio e tolerância individual. Teste a
            estratégia nos treinos longos.
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
