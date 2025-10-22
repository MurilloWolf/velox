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
        <h3 className="text-2xl font-semibold text-white/90">72–24h antes</h3>
        <div className="text-white/80 gap-4 flex flex-col">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            Estruture o carbo-load gradual para encher os estoques de glicogênio
            antes da maratona.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Carboidratos principais:</strong> arroz, massas, pães
              brancos, purê de batata.
            </li>
            <li>
              <strong>Proteínas moderadas:</strong> frango, peixe, ovos, tofu.
            </li>
            <li>
              <strong>Reduza fibras</strong> nos dois dias anteriores para evitar
              desconfortos.
            </li>
            <li>
              <strong>Hidratação elevada:</strong> 40–50 ml/kg/dia, incluindo
              bebida esportiva diluída.
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
            Refeição com foco em carboidratos fáceis de digerir e baixo teor de
            fibras e gorduras.
          </p>
          <div className="rounded-lg flex flex-col md:flex-row gap-4">
            <Image
              className="rounded-lg"
              alt="Refeição pré maratona"
              src="https://nutritotal.com.br/publico-geral/wp-content/uploads/2020/05/shutterstock_252100591.jpg"
              width={500}
              height={300}
            />
            <div className="text-lg  md:max-w-md">
              <p className="text-xl">Opções de refeição:</p>
              <Badge className="mb-2 mr-2 text-sm">Massa com azeite e sal</Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Arroz branco + ovo mexido + banana
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Tapioca recheada com mel + pasta de amendoim leve
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">Purê de batata + frango</Badge>
              <Badge className="mb-2 mr-2 text-sm">Bagel com geleia</Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-2xl  p-5 md:p-7 shadow-sm flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-white/90">
          60–15 Minutos Antes
        </h3>

        <div className="text-white/80 flex flex-col gap-4">
          Realize a última checagem de energia e hidratação sem sobrecarregar o
          estômago:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Gel de carboidrato (30 g) ou bebida esportiva concentrada.
            </li>
            <li>
              Cafeína (se tolerado) 30 min antes: 3–6 mg/kg.
            </li>
            <li>
              Goles pequenos de água para manter conforto gástrico.
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
          Estratégia de reposição contínua para 42 km: carboidratos regulares,
          hidratação constante e reposição de eletrólitos.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-white/80">
          <li>
            Carboidratos: 30–60 g/h (géis, bebidas esportivas, frutas) a cada
            6–8 km.
          </li>
          <li>
            Hidratação: 150–250 ml a cada posto. Alterne água e isotônico.
          </li>
          <li>
            Sais ou cápsulas de eletrólitos quando a prova for quente/úmida.
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
            Inicie reposição de carboidratos, eletrólitos e proteínas rapidamente
            para acelerar a recuperação pós maratona.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Bebidas isotônicas</strong> ou água de coco para repor sais.
            </li>
            <li>
              <strong>Shake de recuperação</strong> com carboidratos + proteína.
            </li>
            <li>
              <strong>Lanches leves:</strong> banana com mel, barras ricas em carbo.
            </li>
            <li>
              <strong>Vegetais ou frutas</strong> ricos em antioxidantes.
            </li>
          </ul>
        </div>
      </div>
      <div className="rounded-2xl  p-5 md:p-7  flex flex-col gap-4  shadow-sm">
        <h3 className="text-2xl font-semibold text-white/90">1h {`~`} 4h </h3>
        <div className="text-white/80 gap-4 flex flex-col">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            Refeições completas com carboidratos, proteínas e gorduras boas para
            reparo muscular e reposição energética.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Carboidratos complexos:</strong> massa, arroz, batata.
            </li>
            <li>
              <strong>Proteínas de alta qualidade:</strong> salmão, ovos, cortes
              magros.
            </li>
            <li>
              <strong>Gorduras boas:</strong> azeite, abacate, oleaginosas.
            </li>
            <li>
              <strong>Suplementação de eletrólitos</strong> conforme necessidade.
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

export default function FortyTwoKNutritionGuide() {
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
          Maratona 42km
        </h1>
        <p className="mt-3 max-w-3xl text-gray-300 text-base sm:text-lg">
          Guia nutricional completo para a maratona: preparação, estratégia de
          prova e recuperação.
        </p>
      </header>

      <section className="mx-auto max-w-5xl px-4 text-gray-400  bg-[#151515] rounded-2xl mb-8 ">
        <div className=" p-5 md:p-7 shadow-sm text-sm">
          <p className="leading-relaxed">
            A maratona exige planejamento nutricional criterioso: carregamento de
            carboidratos, hidratação estratégica e reposições durante a prova.
            Use este guia como base e personalize com seu nutricionista.
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
