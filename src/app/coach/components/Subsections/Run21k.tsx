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
        <h3 className="text-2xl font-semibold text-white/90">48–24h antes</h3>
        <div className="text-white/80 gap-4 flex flex-col">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            Organize um mini-carbo load para otimizar estoques de glicogênio
            antes da meia maratona.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Carboidratos predominantes:</strong> arroz, massa, pão
              branco/toast, batata.
            </li>
            <li>
              <strong>Proteínas moderadas:</strong> ovos, frango, peixes, tofu.
            </li>
            <li>
              <strong>Pequenas porções de gordura</strong> para digestão leve.
            </li>
            <li>
              <strong>Hidratação escalonada:</strong> 35–50 ml/kg/dia divididos
              ao longo do dia.
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
            Refeição rica em carboidratos de média absorção e baixa em fibras e
            gorduras para facilitar a digestão.
          </p>
          <div className="rounded-lg flex flex-col md:flex-row gap-4">
            <Image
              className="rounded-lg"
              alt="Refeição para meia maratona"
              src="https://nutritotal.com.br/publico-geral/wp-content/uploads/2020/05/shutterstock_252100591.jpg"
              width={500}
              height={300}
            />
            <div className="text-lg  md:max-w-md">
              <p className="text-xl">Opções de refeição:</p>
              <Badge className="mb-2 mr-2 text-sm">Massa com molho leve</Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Arroz branco + frango grelhado + legumes cozidos
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Tapioca recheada com ovo mexido
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">Panqueca de aveia e mel</Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Sanduíche de pão branco com peito de peru
              </Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-2xl  p-5 md:p-7 shadow-sm flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-white/90">
          60–15 Minutos Antes
        </h3>

        <div className="text-white/80 flex flex-col gap-4">
          Ajustes finais para garantir energia disponível durante toda a meia
          maratona:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Gel de carboidrato ou bebida esportiva (20–30 g).
            </li>
            <li>
              Cafeína (se habitual) 30 min antes: 3–6 mg/kg.
            </li>
            <li>
              Hidrate-se com goles pequenos (100–200 ml).
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
          Planeje ingestão de carboidratos a cada 30–40 minutos para manter o
          ritmo durante os 21 km.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-white/80">
          <li>
            Hidratação: 150–250 ml de água/isotônico a cada posto disponível.
          </li>
          <li>
            Carboidratos: gel (30 g) ou bebida esportiva a cada 7–8 km.
          </li>
          <li>
            Eletrólitos extras se o clima estiver quente e úmido.
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
            Priorização de carboidratos de rápida absorção + proteína para
            reparação.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Bebidas isotônicas</strong> para reposição de eletrólitos.
            </li>
            <li>
              <strong>Shake com whey e fruta</strong> ou iogurte com mel e granola.
            </li>
            <li>
              <strong>Frutas ricas em antioxidantes:</strong> frutas vermelhas,
              laranja.
            </li>
            <li>
              <strong>Compressão e alongamento</strong> para acelerar a
              recuperação.
            </li>
          </ul>
        </div>
      </div>
      <div className="rounded-2xl  p-5 md:p-7  flex flex-col gap-4  shadow-sm">
        <h3 className="text-2xl font-semibold text-white/90">1h {`~`} 3h </h3>
        <div className="text-white/80 gap-4 flex flex-col">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            Refeição completa para reposição de glicogênio muscular e suporte à
            imunidade.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Carboidratos:</strong> batata, arroz, massa.
            </li>
            <li>
              <strong>Proteínas:</strong> carnes magras, ovos, leguminosas.
            </li>
            <li>
              <strong>Gorduras saudáveis:</strong> azeite, oleaginosas.
            </li>
            <li>
              <strong>Vegetais variados</strong> para micronutrientes.
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

export default function TwentyOneKNutritionGuide() {
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
          Prova de 21km
        </h1>
        <p className="mt-3 max-w-3xl text-gray-300 text-base sm:text-lg">
          Guia nutricional para meia maratona, com foco em energia sustentável,
          hidratação e recuperação eficaz.
        </p>
      </header>

      <section className="mx-auto max-w-5xl px-4 text-gray-400  bg-[#151515] rounded-2xl mb-8 ">
        <div className=" p-5 md:p-7 shadow-sm text-sm">
          <p className="leading-relaxed">
            Em 21 km, a estratégia nutricional precisa manter glicogênio, evitar
            hipoglicemia e suportar a musculatura durante toda a prova. Ajuste a
            ingestão conforme peso, ritmo e temperatura.
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
