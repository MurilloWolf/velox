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
        <h3 className="text-3xl font-bold">Antes da Prova (Ultra)</h3>
        <h3 className="text-2xl font-semibold text-white/90">
          7 - 10 dias — Taper + Planejamento Logístico
        </h3>
        <div className="text-white/80 gap-4 flex flex-col">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            Para ultras, a performance depende tanto do condicionamento quanto
            do <b>plano de logística</b>: mochila, pontos de apoio, crew,{" "}
            <i>drop bags</i>, iluminação, roupas e alimentação real.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Teste tudo</strong> nos longões (30 - 50 km) e treinos em
              terreno/horário similares (noite/frio/calor).
            </li>
            <li>
              <strong>Estruture drop bags</strong> (cada 30 - 50 km): géis,
              barras, comida real, meias, lubrificante, baterias.
            </li>
            <li>
              <strong>Plano A/B/C</strong> para clima (calor, frio, chuva) e
              altitude. Inclua capa de chuva e aquecimento extra.
            </li>
            <li>
              <strong>Check de saúde</strong>: avalie ferro, vitamina D, sono,
              hidratação basal; converse com profissional.
            </li>
          </ul>
        </div>
      </div>

      <div className="rounded-2xl p-5 md:p-7 flex flex-col gap-4 shadow-sm">
        <h3 className="text-2xl font-semibold text-white/90">
          48 - 72h — Carbo-loading criterioso + Hidratação
        </h3>
        <div className="text-white/80 gap-4 flex flex-col">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            Otimize glicogênio sem irritar o trato gastrointestinal. Prefira
            alimentos <b>baixos em fibras</b> e gorduras.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Carboidratos:</strong> 8 - 10 g/kg/dia (arroz, batata,
              massa, pães, tapioca, frutas maduras).
            </li>
            <li>
              <strong>Proteínas magras:</strong> frango, peixe, ovos, tofu.
              Porções moderadas.
            </li>
            <li>
              <strong>Hidratação alta:</strong> 45 - 55 ml/kg/dia; inclua água
              de coco e soluções com eletrólitos.
            </li>
            <li>
              <strong>Sódio diário extra:</strong> 1 - 2 g/dia distribuído nas
              refeições (ajusta de acordo com sudorese).
            </li>
            <li>
              <strong>Evite:</strong> álcool, condimentos fortes, integrais em
              excesso, laticínios gordos, novos suplementos.
            </li>
          </ul>
        </div>
      </div>

      <div className="rounded-2xl p-5 md:p-7 shadow-sm flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-white/90">
          3 - 4h Antes da Largada
        </h3>
        <div className="text-white/80 flex flex-col gap-4">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            Refeição familiar, baixa em fibras e moderada em proteína. Sem
            exageros: evite distensão abdominal.
          </p>
          <div className="rounded-lg flex flex-col md:flex-row gap-4">
            <Image
              className="rounded-lg"
              alt="Refeição para ultramaratona"
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop"
              width={500}
              height={300}
            />
            <div className="text-lg md:max-w-md lg:max-w-xl">
              <p className="text-xl">Opções pré-largada (escolha 1):</p>
              <Badge className="mb-2 mr-2 text-sm">
                Arroz branco + frango grelhado + purê de batata
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Tapioca com geleia + banana madura
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Pão branco com mel + café leve
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Batata-doce amassada + ovo cozido
              </Badge>
              <Badge className="mb-2 mr-2 text-sm">
                Creme de arroz com mel + frutas macias
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl p-5 md:p-7 shadow-sm flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-white/90">
          30 - 45 Minutos Antes
        </h3>
        <div className="text-white/80 flex flex-col gap-2">
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>1 gel (20 - 30 g CHO) + 150 - 200 ml de água.</li>
            <li>
              Cafeína <span className="text-white/90">(3 - 4 mg/kg)</span> se já
              testada em longões.
            </li>
            <li>
              Clima quente: 1 cápsula de eletrólitos (300 - 500 mg de sódio).
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
        <h3 className="text-3xl font-bold">Durante a Prova (Ultra)</h3>
        <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
          Em ultras, o controle é por <b>tempo</b>, não por quilômetro. Busque{" "}
          <b>60 - 90 g CHO/h</b> como base e até
          <b> 90 - 120 g CHO/h</b> se tolerado, usando{" "}
          <i>múltiplos transportadores</i> (glicose + frutose).
        </p>

        <h4 className="text-2xl font-semibold text-white/90">
          Hidratação & Eletrólitos
        </h4>
        <ul className="list-disc list-inside mt-2 space-y-1 text-white/80">
          <li>
            <strong>Água/isotônico:</strong> 150 - 250 ml a cada 15 - 20 min
            (ajuste por clima, ritmo e sudorese).
          </li>
          <li>
            <strong>Sódio alvo:</strong> ~300 - 600 mg/h (até 800 mg/h em
            suadores salinos/calor intenso). Distribua entre bebida e cápsulas.
          </li>
          <li>
            Evite grandes volumes de uma vez; prefira goles frequentes. Reforce
            em subidas longas e trechos expondo ao sol.
          </li>
        </ul>

        <h4 className="text-2xl font-semibold text-white/90 mt-4">
          Carboidratos por Hora (modelo prático)
        </h4>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Janela</TableHead>
              <TableHead>Opções</TableHead>
              <TableHead>Quantidade</TableHead>
              <TableHead>Notas</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-white/90">
                Min 0 - 20
              </TableCell>
              <TableCell className="text-white/80">
                Gel (glicose) + goles de água
              </TableCell>
              <TableCell className="text-white/80">20 - 30 g CHO</TableCell>
              <TableCell className="text-white/80">
                Início da janela; fácil absorção
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-white/90">
                Min 20 - 40
              </TableCell>
              <TableCell className="text-white/80">
                Bebida esportiva (glicose+frutose) ou chews
              </TableCell>
              <TableCell className="text-white/80">20 - 30 g CHO</TableCell>
              <TableCell className="text-white/80">
                Ajuste isotônico se muito suor
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-white/90">
                Min 40 - 60
              </TableCell>
              <TableCell className="text-white/80">
                Comida real leve (1/2 sanduíche, batata cozida, banana)
              </TableCell>
              <TableCell className="text-white/80">20 - 40 g CHO</TableCell>
              <TableCell className="text-white/80">
                Mastigue devagar, água junto
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p className="text-white/70 mt-2">
          ↳ Repita o bloco por horas, variando sabores/texturas para evitar
          fadiga gustativa.
        </p>

        <h4 className="text-2xl font-semibold text-white/90 mt-6">
          Comida Real de Posto/Apoio
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            "Caldo salgado/ensopado",
            "Batata cozida/salgada",
            "Arroz simples + sal",
            "Banana/Maçã",
            "Sanduíche simples (pão branco + geleia/amendoim)",
            "Biscoito salgado",
            "Sopa instantânea",
            "Purê de batata",
            "Macarrão ao sugo leve",
          ].map((t) => (
            <Badge key={t} className="mb-2 mr-2 text-sm">
              {t}
            </Badge>
          ))}
        </div>

        <h4 className="text-2xl font-semibold text-white/90 mt-6">
          Ciclo de Cafeína (opcional)
        </h4>
        <ul className="list-disc list-inside mt-2 space-y-1 text-white/80">
          <li>Pré-largada: 2 - 3 mg/kg (se tolerado).</li>
          <li>
            Noite/madrugada: microdoses (25 - 50 mg) a cada 60 - 90 min para
            vigília sem desconforto GI.
          </li>
          <li>Evite somar cafeína alta com desidratação/estômago vazio.</li>
        </ul>

        <h4 className="text-2xl font-semibold text-white/90 mt-6">
          Identificando sintomas (rápido)
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-lg border border-white/10 p-4">
            <p className="font-semibold text-white">Náusea / Enjoo</p>
            <ul className="list-disc list-inside text-white/80 mt-1 space-y-1">
              <li>Reduza intensidade por 5 - 10 min; respiração nasal.</li>
              <li>
                Troque gel por <i>real food</i> + goles de água.
              </li>
              <li>Use gengibre (balas/chá frio) e sabores salgados.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-white/10 p-4">
            <p className="font-semibold text-white">Cãibras / Hiponatremia</p>
            <ul className="list-disc list-inside text-white/80 mt-1 space-y-1">
              <li>
                Eletrólitos 300 - 600 mg Na⁺/h; avalie aumentar se suador
                salino.
              </li>
              <li>
                Reduza água pura se estiver urinando claro demais + inchaço.
              </li>
              <li>Inclua caldo salgado e alimentos com sal.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const AfterRaceContent = () => {
  return (
    <section className="mx-auto min-w-full max-w-5xl md:p-4 text-slate-200 bg-[#151515] rounded-2xl flex flex-col gap-12 md:gap-4">
      <div className="rounded-2xl p-5 md:p-7 flex flex-col gap-4 shadow-sm">
        <h3 className="text-3xl font-bold">Pós-Prova (Ultra)</h3>
        <h3 className="text-2xl font-semibold text-white/90">
          Primeiras 1 - 2h
        </h3>
        <div className="text-white/80 gap-4 flex flex-col">
          <p className="border-s-emerald-500 px-4 border-l-2 bg-emerald-900/40 p-3 rounded-md">
            Foque em reidratação guiada por sede + eletrólitos e carboidratos de
            fácil digestão. Evite álcool nas primeiras 24 - 48h.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>CHO+PRO (3:1):</strong> shake com banana + whey/vegetal;
              sopa com arroz + frango.
            </li>
            <li>
              <strong>Líquidos:</strong> 1 - 1,5 L nas 2h iniciais, fracionando.
            </li>
            <li>
              <strong>Eletrólitos:</strong> cápsulas/bebidas para repor sódio
              perdido.
            </li>
          </ul>
        </div>
      </div>

      <div className="rounded-2xl p-5 md:p-7 flex flex-col gap-4 shadow-sm">
        <h3 className="text-2xl font-semibold text-white/90">6 - 24h</h3>
        <div className="text-white/80 gap-4 flex flex-col">
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Refeições completas com carboidrato, proteína magra e vegetais
              cozidos.
            </li>
            <li>Inclua ferro, magnésio e vitaminas do complexo B.</li>
            <li>Sono: priorize 9 - 10h na primeira noite pós-prova.</li>
          </ul>
        </div>
      </div>

      <div className="rounded-2xl p-5 md:p-7 flex flex-col gap-4 shadow-sm">
        <h3 className="text-2xl font-semibold text-white/90">48 - 72h</h3>
        <div className="text-white/80 gap-4 flex flex-col">
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Retome ingestão calórica normal; hidrate-se conforme sede + cor da
              urina.
            </li>
            <li>
              Evite AINEs por conta própria durante e imediatamente após a prova
              (risco renal/estomacal) — consulte médico.
            </li>
            <li>Movimento leve: caminhada, mobilidade, alongamentos suaves.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const SupplementsContent = () => {
  const supplements = [
    {
      name: "Géis/chews/bebidas (glicose+frutose)",
      timing: "Durante (a cada 20 - 30 min)",
      primaryFunction: "Atinge 60 - 90 até 120 g CHO/h",
    },
    {
      name: "Eletrólitos (Na⁺/K⁺/Mg²⁺)",
      timing: "Durante e pós",
      primaryFunction: "300 - 600 mg Na⁺/h; previne hiponatremia/cãibras",
    },
    {
      name: "Cafeína",
      timing: "Pré + microdoses noturnas",
      primaryFunction: "Vigília e foco; use com parcimônia",
    },
    {
      name: "Palatinose®/Isomaltulose",
      timing: "Pré e durante",
      primaryFunction: "Liberação lenta, estabilidade glicêmica",
    },
    {
      name: "Pectina/Gengibre (alimento)",
      timing: "Durante (conforme sintomas)",
      primaryFunction: "Ajuda contra náusea leve",
    },
    {
      name: "Proteína de fácil digestão",
      timing: "Durante (provas >8 - 10h) e pós",
      primaryFunction: "Apoio à saciedade e reparo",
    },
    {
      name: "Ômega-3 (uso diário)",
      timing: "Crônico",
      primaryFunction: "Apoio anti-inflamatório",
    },
  ];

  return (
    <section className="mx-fit max-w-5xl bg-[#151515] text-slate-200 md:p-4 rounded-2xl">
      <div className="rounded-2xl p-5 md:p-7 shadow-sm flex flex-col gap-4">
        <h3 className="text-3xl font-bold flex items-center gap-2">
          Suplementos Recomendados (Ultra)
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
          ⚠️ Use suplementos com acompanhamento profissional e sempre{" "}
          <b>testados em treinos longos</b>.
        </p>
      </div>
    </section>
  );
};

const ExtraTipsContent = () => {
  return (
    <section className="mx-fit max-w-5xl bg-[#151515] text-slate-200 md:p-4 rounded-2xl">
      <div className="rounded-2xl p-5 md:p-7 shadow-sm flex flex-col gap-4">
        <h3 className="text-3xl font-bold">
          Dicas Extras (Crew, Drop Bags, Noite)
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-lg border border-white/10 p-4">
            <p className="font-semibold text-white">Crew & Drop Bags</p>
            <ul className="list-disc list-inside text-white/80 mt-1 space-y-1">
              <li>
                Liste itens por posto: comida, meias, lubrificante,
                lanterna/reserva, pilhas, casaco.
              </li>
              <li>
                Saquinhos por hora com 60 - 90 g CHO: géis/chews + cápsula de
                sal.
              </li>
              <li>
                Revisão de pés: vaselina/antifricção, fita, troca de meias.
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-white/10 p-4">
            <p className="font-semibold text-white">Noite & Sono</p>
            <ul className="list-disc list-inside text-white/80 mt-1 space-y-1">
              <li>
                Lanterna + headlamp reserva. Cheque baterias em cada drop bag.
              </li>
              <li>
                Micro-sonecas (5 - 15 min) em provas de 24 - 48h, se necessário.
              </li>
              <li>Use cafeína em microdoses; evite picos grandes noturnos.</li>
            </ul>
          </div>
        </div>
        <div className="rounded-lg border border-amber-500/30 bg-amber-900/30 p-4 mt-2">
          <p className="font-semibold text-amber-300">Alerta de Segurança</p>
          <ul className="list-disc list-inside text-amber-100 mt-1 space-y-1">
            <li>
              Hiponatremia ocorre ao <b>exagerar em água sem sódio</b>. Busque
              equilíbrio água × eletrólitos.
            </li>
            <li>
              Evite anti-inflamatórios (AINEs) durante a prova sem orientação
              médica (risco renal).
            </li>
            <li>
              Se tontura persistente, vômitos repetidos, confusão ou calafrios:
              procure equipe médica imediatamente.
            </li>
          </ul>
        </div>
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
        return <ExtraTipsContent />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#111] md:p-4 rounded-2xl">
      <header className="mx-auto max-w-5xl px-4 pt-10 pb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white flex items-center gap-3">
          Ultramaratona (50k - 100mi)
        </h1>
        <p className="mt-3 max-w-3xl text-gray-300 text-base sm:text-lg">
          Guia nutricional para <b>ultras</b>: estratégia por tempo, comida
          real, eletrólitos e segurança.
        </p>
        <div className="mt-4">
          <div className="border-s-amber-300 px-4 border-l-2 bg-amber-900/40 p-3 rounded-md flex flex-col gap-3">
            <p>
              ⚠️ <b>Aviso:</b> Não recomendamos tentar uma ultramaratona sem
              base consolidada em maratona, longões <b>back-to-back</b>e treinos
              noturnos. Faça avaliação médica e teste toda a estratégia
              nutricional previamente.
            </p>
            <p className="text-amber-300">
              Esforços acima de 6 - 12h elevam o risco de desidratação,
              hiponatremia, lesões e queda imunológica. Respeite sinais do corpo
              e acione a equipe médica ao primeiro sinal de alerta.
            </p>
          </div>
        </div>
      </header>

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
