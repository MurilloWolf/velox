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
            O objetivo é garantir estoques adequados de glicogênio muscular e
            hepático, sem causar desconforto gastrointestinal.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Carboidratos:</strong> arroz, batata, aveia, pães
              integrais leves.
            </li>
            <li>
              <strong>Proteínas magras:</strong> frango, peixe, ovos, tofu — em
              porções moderadas.
            </li>
            <li>
              <strong>Evite gorduras e fibras</strong> para minimizar riscos de
              desconforto intestinal.
            </li>
            <li>
              <strong>Hidratação distribuída:</strong> ~35–45 ml/kg ao longo do
              dia. <br />
              Ex.: atleta de 70 kg → ~2,5–3 L (água, água de bebidas esportivas
              leves).
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
            Refeição leve, rica em carboidratos de rápida e média absorção,
            moderada em proteína, e pobre em gordura/fibra.
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
              <Badge className="mb-2 mr-2 text-sm">
                Pão integral com mel + banana
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">Tapioca com geleia</Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Batata-doce com ovo cozido
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">Aveia com frutas</Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Iogurte natural com granola leve
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Banana + doce de leite
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Pão francês + queijo branco e suco natural
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">Suco integral de uva</Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-2xl  p-5 md:p-7 shadow-sm flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-white/90">
          30–60 Minutos Antes
        </h3>

        <div className="text-white/80 flex flex-col gap-4">
          Se houver tempo entre o aquecimento e a largada, um snack de rápida
          absorção pode ajudar:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Banana ou gel de carboidrato (20–30 g) para um aporte rápido de
              energia.
            </li>
            <li>
              Pequenos goles de água ou isotônico (100–200 ml) para manter a
              hidratação sem sobrecarregar o estômago.
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
          Mínimo e Eficiente Provas de até 5 km geralmente duram de 15 a 40
          minutos, então a ingestão durante a corrida é limitada.{" "}
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-white/80">
          <li>
            Hidratação: Pequenos goles de água em pontos estratégicos, se
            necessário.
          </li>
          <li>
            Energia: Para provas mais longas ou em condições extremas, um gel de
            carboidrato pode ser considerado, mas geralmente não é necessário
            para 5 km.
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
            O objetivo é garantir estoques adequados de glicogênio muscular e
            hepático, sem causar desconforto gastrointestinal.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Carboidratos:</strong> arroz, batata, aveia, pães
              integrais leves.
            </li>
            <li>
              <strong>Proteínas magras:</strong> frango, peixe, ovos, tofu — em
              porções moderadas.
            </li>
            <li>
              <strong>Evite gorduras e fibras</strong> para minimizar riscos de
              desconforto intestinal.
            </li>
            <li>
              <strong>Hidratação distribuída:</strong> ~35–45 ml/kg ao longo do
              dia. <br />
              Ex.: atleta de 70 kg → ~2,5–3 L (água, água de bebidas esportivas
              leves).
            </li>
          </ul>
        </div>
      </div>
      <div className="rounded-2xl  p-5 md:p-7  flex flex-col gap-4  shadow-sm">
        <h3 className="text-2xl font-semibold text-white/90">1h {`~`} 3h </h3>
        <div className="text-white/80 gap-4 flex flex-col">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            O objetivo é garantir estoques adequados de glicogênio muscular e
            hepático, sem causar desconforto gastrointestinal.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Carboidratos:</strong> arroz, batata, aveia, pães
              integrais leves.
            </li>
            <li>
              <strong>Proteínas magras:</strong> frango, peixe, ovos, tofu — em
              porções moderadas.
            </li>
            <li>
              <strong>Evite gorduras e fibras</strong> para minimizar riscos de
              desconforto intestinal.
            </li>
            <li>
              <strong>Hidratação distribuída:</strong> ~35–45 ml/kg ao longo do
              dia. <br />
              Ex.: atleta de 70 kg → ~2,5–3 L (água, água de bebidas esportivas
              leves).
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
      timing: "Pré-prova",
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
      timing: "Uso contínuo (2–4 g/dia)",
      primaryFunction:
        "Reduz acúmulo de ácido lático, melhora tolerância ao esforço",
    },
    {
      name: "Creatina",
      timing: "Uso contínuo (3–5 g/dia)",
      primaryFunction: "Melhora força, explosão e recuperação muscular",
    },
  ];

  return (
    <section className="mx-fit max-w-5xl bg-[#151515] text-slate-200 md:p-4 rounded-2xl">
      <div className="rounded-2xl p-5 md:p-7 shadow-sm flex flex-col gap-4">
        <h3 className="text-3xl font-bold flex items-center gap-2">
          Suplementos Recomendados
        </h3>

        <Table className="max-w-fit">
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
                <TableCell className="text-white/80 text-wrap">
                  {item.timing}
                </TableCell>
                <TableCell className="text-white/80 text-wrap">
                  {item.primaryFunction}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p>
          {" "}
          ⚠️ Suplementos devem ser utilizados com acompanhamento profissional
          para ajuste de dose e segurança individual.
        </p>
      </div>
    </section>
  );
};
export default function FiveKNutritionGuide() {
  const [contentSelected, setContentSelected] = useState<string>("beforeRace");

  const contentOptions = [
    { id: "beforeRace", label: "Antes da prova" },
    { id: "duringRace", label: "Durante a prova" },
    { id: "afterRace", label: "Após a prova" },
    { id: "supplements", label: "Suplementos" },
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
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#111] md:p-4 rounded-2xl">
      <header className="mx-auto max-w-5xl px-4 pt-10 pb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white flex items-center gap-3">
          Prova de 5km
        </h1>
        <p className="mt-3 max-w-3xl text-gray-300 text-base sm:text-lg">
          Foco em velocidade, performance e recuperação. Linguagem técnica,
          acessível e com exemplos práticos para iniciantes, avançados, em forma
          e fora de forma.
        </p>
      </header>

      <section className="mx-auto max-w-5xl px-4 text-gray-400  bg-[#151515] rounded-2xl mb-8 ">
        <div className=" p-5 md:p-7 shadow-sm text-sm">
          <p className="leading-relaxed">
            Provas de 5 km são curtas, porém intensas. A demanda energética é
            majoritariamente glicolítica, com forte participação anaeróbica. Um
            plano nutricional bem cronometrado garante estoques de glicogênio
            adequados, reduz desconfortos gastrointestinais e acelera a
            recuperação pós-prova.
          </p>
        </div>
      </section>

      <div className="flex flex-row  gap-2 py-4 px-4 overflow-x-auto mx-auto max-w-5xl">
        {contentOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSelectContent(option.id)}
            className={`cursor-pointer px-4 py-2 rounded-full text-xs font-medium transition-colors min-w-[150px] md:min-w-fit ${
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
