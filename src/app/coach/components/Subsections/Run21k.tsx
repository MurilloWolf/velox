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
          48 - 72h Antes — Fase de Carbo-loading
        </h3>
        <div className="text-white/80 gap-4 flex flex-col">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            Organize um mini-carbo load para otimizar estoques de glicogênio
            antes da meia maratona.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <p>
                <strong>Carboidratos predominantes:</strong> arroz, massa, pão
                branco/toast, batata.
              </p>
              <p>Cerca de 8g - 10g por kg por dia</p>
            </li>
            <li>
              <strong>Proteínas moderadas:</strong> ovos, frango, peixes, tofu.
            </li>
            <li>
              <strong>Pequenas porções de gordura</strong> para digestão leve.
            </li>
            <li>
              <strong>Hidratação escalonada:</strong> 35 - 50 ml/kg/dia
              divididos ao longo do dia.
            </li>
            <li>
              <strong>Evite:</strong> Alcool, Feijão, cafeína em excesso,
              alimentos gordurosos ou muito fibrosos.
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
            <div className="text-lg  md:max-w-md lg:max-w-xl">
              <p className="text-xl">Opções de refeição:</p>
              <Badge className="mb-2 mr-2 text-sm">
                Pão branco com mel e café preto leve
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Panqueca de banana, aveia e clara de ovo
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Arroz com frango e legumes cozidos
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Tapioca com banana e mel
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Pão integral com pasta de amendoim
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Aveia com mel e uva-passa
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Creme de arroz com banana e canela
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Batata-doce com ovo cozido
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Vitamina de banana com whey protein (ou leite vegetal)
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Sanduíche de ricota com geleia
              </Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-2xl  p-5 md:p-7 shadow-sm flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-white/90">
          30 - 60 Minutos Antes
        </h3>

        <div className="text-white/80 flex flex-col gap-4">
          Ajustes finais para garantir energia disponível durante toda a meia
          maratona:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Gel de carboidrato (20g - 30g).</li>
            <li>Cafeína (se habitual) 30 min antes: 3 - 6 mg/kg.</li>
            <li>Isotônico (200ml)</li>
            <li>
              Se o clima for quente: 1 cápsula de eletrólitos (sódio + potássio)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const DuringRaceContent = () => {
  return (
    <section className="mx-fit max-w-5xl bg-[#151515] text-slate-200 md:p-4 rounded-2xl">
      <div className="rounded-2xl p-5 md:p-7 shadow-sm flex flex-col gap-4">
        <h3 className="text-3xl font-bold">Durante a Prova</h3>
        <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
          Planeje ingestão de carboidratos a cada 30 - 40 minutos para manter o
          ritmo durante os 21 km.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-white/80">
          <li>
            <strong>Hidratação:</strong> 150 - 250 ml de água/isotônico a cada
            posto disponível.
          </li>
          <li>
            <strong>Carboidratos:</strong> gel (30 g) ou bebida esportiva a cada
            7 - 8 km.
          </li>
          <li>
            <strong>Eletrólitos:</strong> se o clima estiver quente e úmido.
          </li>
        </ul>
        <h3 className="text-2xl font-semibold text-white/90 mt-4">Carbo Gel</h3>
        <p className="text-white/80">
          Para manter níveis ótimos de glicose sanguínea e retardar a fadiga,
          siga o plano abaixo:
        </p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Momento</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Quantidade</TableHead>
              <TableHead>Observação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-white/90">
                Km 0 (largada)
              </TableCell>
              <TableCell className="text-white/80">—</TableCell>
              <TableCell className="text-white/80">—</TableCell>
              <TableCell className="text-white/80">
                Café da manhã leve ou gel 15 min antes
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-white/90">
                Km 7 - 8
              </TableCell>
              <TableCell className="text-white/80">
                1º Gel de carboidrato
              </TableCell>
              <TableCell className="text-white/80">20g - 30g</TableCell>
              <TableCell className="text-white/80">
                Comece cedo antes de sentir fome
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-white/90">
                Km 14 - 15
              </TableCell>
              <TableCell className="text-white/80">
                2º Gel + bebida esportiva
              </TableCell>
              <TableCell className="text-white/80">20g - 30g</TableCell>
              <TableCell className="text-white/80">
                Mantém glicemia e retarda fadiga
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-white/90">Km 21</TableCell>
              <TableCell className="text-white/80">
                3º Carbo Gel + isotônico
              </TableCell>
              <TableCell className="text-white/80">
                {" "}
                20g - 30g + cafeina
              </TableCell>
              <TableCell className="text-white/80">
                Ponto médio da prova
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-white/90">
                Km 28 - 30
              </TableCell>
              <TableCell className="text-white/80">4º Carbo Gel</TableCell>
              <TableCell className="text-white/80">20g - 30g</TableCell>
              <TableCell className="text-white/80">
                Previne queda brusca de energia
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-white/90">
                Km 35 - 37
              </TableCell>
              <TableCell className="text-white/80">5º ou + Carbo Gel</TableCell>
              <TableCell className="text-white/80">20g - 30g</TableCell>
              <TableCell className="text-white/80">
                Energia extra se necessário
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

const AfterRaceContent = () => {
  return (
    <section className="mx-auto min-w-full max-w-5xl  md:p-4 text-slate-200  bg-[#151515] rounded-2xl flex flex-col gap-12 md:gap-4">
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
              <strong>Shake com whey e fruta</strong> ou iogurte com mel e
              granola.
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
          <p className="border-s-amber-300 px-4 border-l-2 bg-amber-900/40 p-3 rounded-md flex flex-col gap-4 ">
            Hidratação contínua nas próximas 6h é essencial para equilibrar
            sódio e líquidos.
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
    {
      name: "Nitratos (beterraba concentrada)",
      timing:
        "2 - 3 horas antes da prova (500 ml de suco ou 70 ml de concentrado)",
      primaryFunction: "Melhora eficiência cardiovascular e resistência",
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

export default function TwentyOneKNutritionGuide() {
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
          Meia Maratona - 21km
        </h1>
        <p className="mt-3 max-w-3xl text-gray-300 text-base sm:text-lg">
          Guia nutricional para meia maratona.
        </p>
        <div className="flex flex-col gap-4 my-4 bg-[#151515] p-2 md:p-6 rounded-2xl">
          <p className="mt-3  text-gray-300 text-base sm:text-lg">
            21km é uma distância desafiadora que exige um grau avançado de
            preparo físico e mental. A nutrição adequada antes, durante e após a
            prova é crucial
          </p>
          <p>
            Se você nunca correu essa distância antes, é altamente recomendável
            que faça um planejamento cuidadoso, incluindo treinos longos, e pelo
            menos uma simulação completa de prova para testar sua estratégia
            nutricional.
          </p>
          <p className="py-2">
            A meia maratona é o divisor de águas do corredor de resistência. A
            diferença entre completar bem e “quebrar” está no controle de
            energia e líquidos.
          </p>
        </div>
        <div className="mt-4">
          <div className="border-s-amber-300 px-4 border-l-2 bg-amber-900/40 p-3 rounded-md flex flex-col gap-4 ">
            <p>
              <strong>⚠️ Aviso:</strong> Não recomendamos realizar uma meia
              maratona sem ao menos ter realizado uma corrida de pelo menos{" "}
              <span className="font-bold text-md">17 km dentro de 3h</span> em
              treinos prévios.
            </p>
            <p className="text-amber-300">
              Provas que ultrapassam 3h desgastam muito o corpo e podem levar a
              lesões. Por esse motivo, é fundamental respeitar os limites do seu
              corpo e buscar orientação profissional.
            </p>
          </div>
        </div>
      </header>
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
