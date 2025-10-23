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
    <section className="mx-auto min-w-full max-w-5xl md:p-4 text-slate-200 bg-[#151515] rounded-2xl flex flex-col gap-12 md:gap-4">
      <div className="rounded-2xl p-5 md:p-7 flex flex-col gap-4 shadow-sm">
        <h3 className="text-3xl font-bold">Antes da Prova</h3>
        <h3 className="text-2xl font-semibold text-white/90">24–36h Antes</h3>
        <div className="text-white/80 gap-4 flex flex-col">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            Otimize glicogênio muscular e hepático sem causar desconforto
            gastrointestinal.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Carboidratos complexos:</strong> arroz, massa, batata,
              pães e frutas maduras.
              <p>
                Meta: <b>6–8 g/kg/dia</b> distribuídos em 4–6 refeições.
              </p>
            </li>
            <li>
              <strong>Proteínas magras:</strong> frango, peixe, ovos, tofu —
              porções moderadas.
            </li>
            <li>
              <strong>Baixo teor de gordura e fibra</strong> para digestão
              eficiente.
            </li>
            <li>
              <strong>Hidratação distribuída:</strong> ~35–45 ml/kg/dia com água
              e isotônicos leves.
            </li>
            <li>
              <strong>Evite</strong> álcool, condimentos fortes e alimentos
              novos.
            </li>
          </ul>
        </div>
      </div>

      <div className="rounded-2xl p-5 md:p-7 shadow-sm flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-white/90">
          3h – 4h Antes da Largada
        </h3>
        <div className="text-white/80 flex flex-col gap-4">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            Refeição leve, rica em carboidratos e moderada em proteína. Baixa em
            fibras/gorduras.
          </p>
          <div className="rounded-lg flex flex-col md:flex-row gap-4">
            <Image
              className="rounded-lg"
              alt="Refeição leve"
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop"
              width={500}
              height={300}
            />
            <div className="text-lg md:max-w-md">
              <p className="text-xl">Opções de refeição:</p>
              <Badge className="mb-2 mr-2 text-sm">
                Arroz branco + frango grelhado + legumes cozidos
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Arroz branco + ovo mexido
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Panqueca de banana, aveia e mel
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Tapioca com pasta de amendoim
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Iogurte (ou bebida vegetal) com frutas e chia
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Batata-doce cozida com azeite leve
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Sanduíche leve de peito de peru + suco natural
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Vitamina de frutas + aveia + maltodextrina
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Pão francês + queijo branco + café leve
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl p-5 md:p-7 shadow-sm flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-white/90">
          30–60 Minutos Antes
        </h3>
        <div className="text-white/80 flex flex-col gap-4">
          Ajuste final para garantir energia disponível sem pesar o estômago:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Gel de carboidrato (20–30 g) <b>com água</b>.
            </li>
            <li>Banana madura.</li>
            <li>
              Pequenos goles de água ou isotônico (100–200 ml) antes da largada.
            </li>
            <li>
              Cafeína (3–6 mg/kg) <i>se já testada</i> em treinos.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const DuringRaceContent = () => {
  return (
    <section className="mx-auto min-w-full max-w-5xl md:p-4 text-slate-200 bg-[#151515] rounded-2xl flex flex-col gap-12 md:gap-4">
      <div className="rounded-2xl p-5 md:p-7 flex flex-col gap-4 shadow-sm">
        <h3 className="text-3xl font-bold">Durante a Prova</h3>
        <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
          A prova de 15 km demanda reposição <b>programada</b>, especialmente se
          ultrapassar <span className="font-bold text-lg">70 minutos</span>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-white/80">
          <li>Pequenos goles (100–150 ml) a cada 15–20 minutos.</li>
          <li>
            Isotônico a cada 30–40 minutos para repor sódio e evitar câimbras.
            <p>
              <i>*Em clima quente, priorize alternar isotônico e água.</i>
            </p>
          </li>
        </ul>
        <h3 className="text-2xl font-semibold text-white/90 mt-4">
          Carboidratos (Géis/Bebidas)
        </h3>
        <p className="text-white/80">
          Para manter glicemia e retardar a fadiga, siga um plano simples:
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
                Café da manhã leve ou gel 15–30 min antes
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-white/90">
                Km 5–6
              </TableCell>
              <TableCell className="text-white/80">
                1º Gel de carboidrato
              </TableCell>
              <TableCell className="text-white/80">20–30 g</TableCell>
              <TableCell className="text-white/80">
                Primeiro reforço; sempre com 100–150 ml de água
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-white/90">
                Km 10–12
              </TableCell>
              <TableCell className="text-white/80">
                2º Gel ou bebida esportiva
              </TableCell>
              <TableCell className="text-white/80">20–30 g</TableCell>
              <TableCell className="text-white/80">
                Mantém glicemia; evite gel + isotônico ao mesmo tempo
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-white/90">
                Km 14–15
              </TableCell>
              <TableCell className="text-white/80">
                Isotônico (opcional)
              </TableCell>
              <TableCell className="text-white/80">—</TableCell>
              <TableCell className="text-white/80">
                Goles para o sprint final sem desconforto GI
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
    <section className="mx-auto min-w-full max-w-5xl md:p-4 text-slate-200 bg-[#151515] rounded-2xl flex flex-col gap-12 md:gap-4">
      <div className="rounded-2xl p-5 md:p-7 flex flex-col gap-4 shadow-sm">
        <h3 className="text-3xl font-bold">Pós-Prova</h3>
        <h3 className="text-2xl font-semibold text-white/90">
          Primeiros 30–60 min
        </h3>
        <div className="text-white/80 gap-4 flex flex-col">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            Combine <b>carboidratos e proteínas na proporção 3:1</b> para
            reposição de glicogênio e reparo muscular.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Shake recovery:</strong> whey/bebida vegetal + banana +
              aveia fina.
            </li>
            <li>
              <strong>Alternativas:</strong> sanduíche de frango + suco;
              iogurte/bebida vegetal com frutas e mel.
            </li>
            <li>
              <strong>Reidratação:</strong> 600–800 ml de água/isotônico
              conforme sede e cor da urina.
            </li>
            <li>
              <strong>Alongamentos leves</strong> e caminhada para facilitar
              recuperação.
            </li>
          </ul>
        </div>
      </div>

      <div className="rounded-2xl p-5 md:p-7 flex flex-col gap-4 shadow-sm">
        <h3 className="text-2xl font-semibold text-white/90">1h – 3h Após</h3>
        <div className="text-white/80 gap-4 flex flex-col">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            Refeição completa com foco em reabastecer glicogênio, reparar
            tecidos e repor micronutrientes.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Carboidratos complexos:</strong> arroz, quinoa, batata.
            </li>
            <li>
              <strong>Proteínas magras:</strong> peixe, frango, cortes magros.
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
      name: "Carboidrato em gel/bebida",
      timing: "Durante (>50–60 min)",
      primaryFunction: "Energia rápida e estável",
    },
    {
      name: "Cafeína (3–6 mg/kg)",
      timing: "30–45 min antes",
      primaryFunction: "Foco e menor percepção de esforço",
    },
    {
      name: "Beta-alanina (2–4 g/dia)",
      timing: "Uso contínuo",
      primaryFunction: "Tamponamento do H+; tolerância ao esforço",
    },
    {
      name: "Creatina (3–5 g/dia)",
      timing: "Uso contínuo",
      primaryFunction: "Explosão, força e recuperação",
    },
    {
      name: "Eletrólitos (Na⁺/K⁺/Mg²⁺)",
      timing: "Durante clima quente",
      primaryFunction: "Prevenção de cãibras / equilíbrio hídrico",
    },
    {
      name: "Palatinose® (isomaltulose)",
      timing: "Pré e durante",
      primaryFunction: "Liberação lenta; estabilidade glicêmica",
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
        <p className="text-white/80 mt-2">
          ⚠️ Suplementos devem ser usados com acompanhamento profissional e{" "}
          <b>testados em treinos</b>.
        </p>
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
          Prova de 15 km
        </h1>
        <div className="flex flex-col gap-4 mt-4 text-gray-400">
          <p>
            A prova de 15 km exige planejamento nutricional preciso — nem tão
            leve quanto 10 km, nem tão complexo quanto meia maratona.
          </p>
          <p className="mt-3 max-w-3xl text-gray-400 text-base sm:text-lg">
            A diferença crucial está na manutenção da energia e da hidratação
            contínua. Teste previamente géis/bebidas e ajuste o plano ao clima e
            ao seu ritmo.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 text-gray-400 bg-[#151515] rounded-2xl mb-8 ">
        <div className="p-5 md:p-7 shadow-sm text-sm">
          <p className="leading-relaxed">
            Um bom plano para 15 km mantém o glicogênio estável, previne quedas
            de rendimento e minimiza desconfortos gastrointestinais.
          </p>
        </div>
      </section>

      <h5 className="text-4xl font-bold p-4">Recomendações</h5>
      <div className="flex flex-row gap-2 py-4 px-4 overflow-x-auto mx-auto max-w-5xl">
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
