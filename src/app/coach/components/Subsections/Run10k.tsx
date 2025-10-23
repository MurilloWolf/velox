import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";

import Image from "next/image";
import { useState } from "react";

const BeforeRaceContent = () => {
  return (
    <section className="mx-auto min-w-full max-w-5xl  md:p-4 text-slate-200  bg-[#151515] rounded-2xl flex flex-col gap-12 md:gap-4">
      <div className="rounded-2xl  p-5 md:p-7  flex flex-col gap-4  shadow-sm">
        <h3 className="text-3xl font-bold">Antes da Prova</h3>
        <h3 className="text-2xl font-semibold text-white/90">
          24 {`-`} 36h Antes
        </h3>
        <div className="text-white/80 gap-4 flex flex-col">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            O objetivo é otimizar os estoques de glicogênio e garantir boa
            hidratação.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-4">
            <li>
              <strong>Aumente gradualmente o consumo de carboidratos:</strong>{" "}
              <p>
                Arroz, Macarrão, batata, massas, frutas, pão integral leve,
                aveia, tapioca.
              </p>
            </li>
            <li>
              <strong>Proteínas magras:</strong>
              <p>frango, peixe, ovos, tofu — em porções moderadas.</p>
            </li>
            <li>
              <strong>
                Evite alimentos gordurosos, frituras e excesso de fibras.
              </strong>
            </li>
            <li>
              <strong>Hidratação constante: </strong> 35–45 ml/kg/dia de
              líquidos. <br />
              <p>
                Exemplo: atleta de 70 kg → 2,5–3 litros/dia entre água,
                isotônicos e água de coco.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="rounded-2xl  p-5 md:p-7 shadow-sm flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-white/90">
          3h - 4h Antes da Largada
        </h3>
        <div className="text-white/80 flex flex-col gap-4">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            Faça uma refeição leve e familiar, com foco em carboidratos de fácil
            digestão, baixa gordura e proteína leve.
          </p>
          <div className="rounded-lg flex flex-col md:flex-row gap-4">
            <Image
              className="rounded-lg"
              alt="Refeição leve"
              src="https://nutritotal.com.br/publico-geral/wp-content/uploads/2020/05/shutterstock_252100591.jpg"
              width={500}
              height={300}
            />
            <div>
              <div className="text-lg  md:max-w-md">
                <p className="text-xl">Opções de refeição:</p>
                <Badge className="mb-2 mr-2 text-sm">
                  Pão francês com queijo branco e suco de laranja
                </Badge>
                <Badge className="mb-2 mr-2 text-sm">
                  Tapioca com banana e canela
                </Badge>
                <Badge className="mb-2 mr-2 text-sm">
                  Aveia com mel e frutas (banana, maçã ou mamão)
                </Badge>
                <Badge className="mb-2 mr-2 text-sm">
                  Panqueca de aveia com mel
                </Badge>
                <Badge className="mb-2 mr-2 text-sm">
                  Pão integral com pasta de amendoim
                </Badge>
                <Badge className="mb-2 mr-2 text-sm">
                  Vitamina de banana com leite desnatado e aveia
                </Badge>
                <Badge className="mb-2 mr-2 text-sm">
                  Batata-doce amassada com mel
                </Badge>
                <Badge className="mb-2 mr-2 text-sm">
                  Iogurte natural com granola leve
                </Badge>
                <Badge className="mb-2 mr-2 text-sm">
                  Pão com geleia e café preto leve
                </Badge>
              </div>
              <div className="bg-[#252525] text-sm p-4 rounded-xl">
                <p>Evite alimentos muito fibrosos ou de difícil digestão.</p>
                <p>Evite alimentos novos ou muito condimentados.</p>
                <p>Tome 400 - 600 ml de líquidos até 2h antes da prova.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-2xl  p-5 md:p-7 shadow-sm flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-white/90">
          30–60 Minutos Antes
        </h3>

        <div className="text-white/80 flex flex-col gap-4">
          Reforce a energia disponível com um snack rápido:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>1 banana, 1 gel de carboidrato (20 - 30g) leve.</li>
            <li>1 barrinha esportiva pequena</li>
            <li>
              Pequenos goles de água ou isotônico (100 - 200 ml) para manter a
              hidratação sem sobrecarregar o estômago.
            </li>
            <li>
              Se já testado, cafeína (3 - 6 mg/kg) pode ser usada para foco e
              resistência.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const DuringRaceContent = () => {
  return (
    <section className="mx-auto min-w-full  max-w-5xl  md:p-4 text-slate-200  bg-[#151515] rounded-2xl flex flex-col gap-12 md:gap-4">
      <div className="rounded-2xl  p-5 md:p-7  flex flex-col gap-4  shadow-sm">
        <h3 className="text-3xl font-bold">Durante a Prova</h3>
        <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
          Para provas de 10 km, a hidratação e o aporte de carboidratos devem
          ser planejados de acordo com o ritmo e a duração prevista.
          <br />
          <span className="text-amber-200">
            {" "}
            A prova de 10 km dura de 35 a 70 minutos, dependendo do ritmo
          </span>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-4 text-white/80">
          <li>
            <strong>Hidratação:</strong> pequenas doses (100 - 150 ml) de água a
            cada 15 - 20 minutos.
          </li>
          <li>
            <strong>Isotônicos:</strong> úteis para repor sódio e potássio em
            provas acima de 45 minutos ou sob calor
          </li>
          <li>
            <strong>Carboidratos:</strong> géis ou bebidas energéticas podem ser
            utilizados conforme necessário.
            <p>
              Se a prova durar mais de{" "}
              <span className="text-lg font-bold">50 minutos</span>, consuma 1
              gel (20 - 30g) por volta do{" "}
              <span className="text-lg font-bold">km 5 - 6</span>.
            </p>
            <p>
              Prefira géis já testados em treinos e sempre com um gole de água
              junto.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

const AfterRaceContent = () => {
  return (
    <section className="mx-auto min-w-full max-w-5xl  md:p-4 text-slate-200  bg-[#151515] rounded-2xl flex flex-col gap-12 md:gap-4">
      <div className="rounded-2xl  p-5 md:p-7  flex flex-col gap-4  shadow-sm">
        <h3 className="text-3xl font-bold">Pós-Prova</h3>
        <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
          Após cruzar a linha de chegada, o corpo precisa repor glicogênio,
          reparar microlesões musculares e restaurar o equilíbrio hídrico.
        </p>

        <div className="text-white/80 gap-4 flex flex-col">
          <ul className="list-disc list-inside mt-2 space-y-4">
            <h3 className="text-2xl font-semibold text-white/90">
              Primeiros 30 min
            </h3>
            <li>
              <strong>Combine carboidrato + proteína:</strong>
              <p>
                Vitamina de banana com whey, iogurte com frutas, pão com queijo
                magro e suco.
              </p>
            </li>
            <li>
              <strong>Carboidratos + proteína:</strong>
              <p>shake com banana + whey ou iogurte com granola.</p>
            </li>
            <li>
              <strong>Frutas ricas em potássio:</strong>
              <p>banana, melão ou laranja.</p>
            </li>
            <li>
              <strong>Reponha líquidos:</strong>
              <p>500 - 700 ml de água, isotônico ou água de coco.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="rounded-2xl  p-5 md:p-7  flex flex-col gap-4  shadow-sm">
        <h3 className="text-2xl font-semibold text-white/90">1h {`~`} 3h </h3>
        <div className="text-white/80 gap-4 flex flex-col">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            Equilibre novamente os estoques de glicogênio e mantenha a
            hidratação ao longo do dia.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Carboidratos complexos:</strong> arroz, batata-doce,
              quinoa.
            </li>
            <li>
              <strong>Proteínas magras:</strong> frango, carne vermelha, peixe,
              ovos, tofu.
            </li>
            <li>
              <strong>Vegetais e frutas</strong> para vitaminas, minerais e
              antioxidantes.
            </li>
            <li>
              <strong>Dica:</strong> adicione azeite ou abacate para uma dose
              leve de gordura boa.
            </li>
            <li>
              <strong>Hidratação contínua:</strong> 35–45 ml/kg ao longo do dia.
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
      timing: "Pré-prova (ou durante, se < 25 min de esforço intenso)",
      primaryFunction: "Energia rápida",
    },
    {
      name: "Cafeína (3 - 6 mg/kg)",
      timing: "30 - 45 min antes da largada",
      primaryFunction:
        "Melhora foco, tempo de reação e redução da percepção de esforço",
    },
    {
      name: "Beta-alanina",
      timing: "Uso contínuo (2 - 4 g/dia por 4 - 6 semanas)",
      primaryFunction:
        "Reduz acúmulo de ácido lático, melhora tolerância ao esforço",
    },
    {
      name: "Creatina",
      timing: "Uso contínuo (3 - 5 g/dia)",
      primaryFunction: "Melhora força, explosão e recuperação muscular",
    },
    {
      name: "Eletrólitos (sódio, potássio, magnésio)",
      timing: "Durante provas longas ou em clima quente",
      primaryFunction:
        "Prevenção de cãibras e manutenção do equilíbrio hídrico",
    },
  ];

  return (
    <section className="mx-fit max-w-5xl bg-[#151515] text-slate-200 md:p-4 rounded-2xl">
      <div className="rounded-2xl p-5 md:p-7 shadow-sm flex flex-col gap-4">
        <h3 className="text-3xl font-bold flex items-center gap-2">
          Suplementos Recomendados
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

export default function TenKNutritionGuide() {
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
          Prova de 10km
        </h1>
        <p className="mt-3 max-w-3xl text-gray-300 text-base sm:text-lg">
          Foco em resistência sólida, performance sustentada e recuperação.
          Linguagem técnica, acessível e com exemplos práticos para iniciantes e
          avançados.
        </p>
      </header>

      <section className="mx-auto max-w-5xl px-4 text-gray-400  bg-[#151515] rounded-2xl mb-8 ">
        <div className=" p-5 md:p-7 shadow-sm text-sm">
          <p className="leading-relaxed">
            Provas de 10 km exigem ritmo constante e controle de energia. A
            demanda energética combina vias aeróbias e glicolíticas. Um plano
            nutricional bem estruturado garante estoque de glicogênio adequado,
            evita desconfortos gastrointestinais e acelera a recuperação.
          </p>
        </div>
      </section>
      <h5 className="text-4xl font-bold p-4">Recomendações</h5>

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
    </div>
  );
}
