import {
  TrainingTypeGuide,
  TrainingTypeGuideProps,
} from "@/app/coach/components/Subsections";
import type { SubsectionContent } from "../../../../types";
import { trainingTypePanel } from "../panels";

type TrainingTypeConfig = {
  id: string;
  label: string;
  props: TrainingTypeGuideProps;
};

const trainingTypes: TrainingTypeConfig[] = [
  {
    id: "training-type-fartlek",
    label: "Fartlek",
    props: {
      title: "Fartlek",
      description:
        "Sessões com mudanças livres de ritmo que alternam acelerações e trotes sem pausas completas, trabalhando tanto a cabeça quanto a adaptação cardiorrespiratória.",
      goal:
        "Criar resistência às variações de pace e melhorar a transição rápida entre zonas moderadas e fortes.",
      rationale:
        "Ao alternar estímulos aeróbicos e anaeróbicos no mesmo treino você ensina o corpo a tamponar lactato e recuperar ritmo em corrida, algo decisivo em percursos com altimetria ou provas cheias.",
      aliases: ["jogo de ritmo", "fartlek livre", "FTK"],
      structure: [
        {
          label: "Aquecimento",
          description:
            "10-15 minutos de trote progressivo com 2-3 acelerações de 20 segundos para ativar coordenação.",
        },
        {
          label: "Bloco principal",
          description:
            "Sequências de 1-3 minutos forte seguidos de 1-2 minutos leve, escolhendo referências visuais (poste, esquina, subida).",
        },
        {
          label: "Desaquecimento",
          description:
            "8-12 minutos de corrida leve + alongamentos dinâmicos ou mobilidade articular.",
        },
      ],
      intensityCues: [
        "Partes fortes próximas ao ritmo de prova de 5K ou percepção 8-9/10.",
        "Trechos leves em ritmo de conversa (4-5/10) para recuperar sem parar.",
        "Terrenos variados potencializam a adaptação neuromuscular.",
      ],
      whenToUse: [
        "Início de ciclos específicos após fase de base volumosa.",
        "Semanas com agenda apertada em que você precisa de intensidade versátil.",
        "Preparação para provas com altimetria, mudanças de terreno ou muitas curvas.",
      ],
      tips: [
        "Planeje mentalmente pontos de troca antes de começar para evitar exageros nas primeiras repetições.",
        "Comece controlado e acelere progressivamente nas últimas variações fortes.",
        "Use o lap manual do relógio para comparar tempos fortes e leves na análise pós-treino.",
      ],
      watchouts: [
        "Evite fartleks muito agressivos na mesma semana de um longo ou prova importante.",
        "Se o ritmo forte degringolar, encurte o estímulo para 45-60 segundos em vez de forçar.",
      ],
    },
  },
  {
    id: "training-type-tiro",
    label: "Tiro",
    props: {
      title: "Tiro (velocidade pura)",
      description:
        "Repetições curtas e explosivas com descanso generoso para desenvolver potência, coordenação e economia em ritmos muito rápidos.",
      goal:
        "Aprimorar a velocidade máxima e recrutar fibras rápidas que sustentam acelerações e final de prova.",
      rationale:
        "Descansos amplos permitem executar cada repetição com técnica limpa e alta potência neural, elevando o teto de velocidade para que ritmos de prova pareçam mais confortáveis.",
      aliases: ["tiro", "sprint", "all-out", "rep"],
      structure: [
        {
          label: "Aquecimento",
          description:
            "12-15 minutos de rodagem leve, mobilidade de quadril e 4 strides de 80 metros.",
        },
        {
          label: "Repetições",
          description:
            "6-10 tiros de 80-150 metros com esforço forte (95-100%) e trote ou caminhada até recuperar completamente.",
        },
        {
          label: "Recuperação",
          description:
            "3-4 minutos de trote leve entre blocos, mantendo postura solta para a próxima série.",
        },
        {
          label: "Desaquecimento",
          description:
            "10 minutos de corrida fácil + soltura de panturrilha e posterior.",
        },
      ],
      intensityCues: [
        "Execute com cadência alta, passadas curtas e tronco estável.",
        "Recupere até a respiração voltar ao normal; qualidade > quantidade.",
        "Foque em pisar embaixo do corpo, evitando sobrepassadas.",
      ],
      whenToUse: [
        "Fase de velocidade antes de entrar em blocos de ritmos específicos.",
        "Semanas com volume reduzido (taper) para manter o toque rápido sem fadiga.",
        "Períodos de reforço neuromuscular em atletas de longa distância.",
      ],
      tips: [
        "Faça tiros em terreno plano ou pista para reduzir risco de lesão.",
        "Use tênis firme para melhor resposta e controle técnico.",
        "Se perder potência, reduza o número de tiros e encerre com técnica boa.",
      ],
      watchouts: [
        "Evite em dias de cansaço acumulado ou musculatura pesada; risco de distensão aumenta.",
        "Não transforme tiros em competição com parceiros — mantenha foco na execução.",
      ],
    },
  },
  {
    id: "training-type-tiro-distancia",
    label: "Tiro por distância",
    props: {
      title: "Tiro por distância",
      description:
        "Intervalos com metragem fixa (200 m, 400 m, 1 km) buscando ritmos de prova ou acima dela, com recuperações controladas.",
      goal:
        "Aprimorar ritmo alvo e VO2 máx. mantendo consistência de pace em repetições progressivas.",
      rationale:
        "Distâncias medidas permitem monitorar pace com precisão, acumulando tempo na zona alvo e criando memória muscular específica para a prova.",
      aliases: ["tiro 400", "repetição", "intervalo métrico"],
      structure: [
        {
          label: "Aquecimento",
          description:
            "15 minutos de corrida leve + exercícios educativos e strides.",
        },
        {
          label: "Séries principais",
          description:
            "Exemplo: 6x400 m em ritmo de 3K-5K com 200 m trote; ou 5x1000 m em ritmo de 10K com 2 minutos leves.",
        },
        {
          label: "Bloco bônus",
          description:
            "Última repetição levemente mais forte para simular final de prova (opcional).",
        },
        {
          label: "Desaquecimento",
          description:
            "8-10 minutos de trote + alongamento leve de quadríceps e posterior.",
        },
      ],
      intensityCues: [
        "Use pace/km como referência principal; mantenha variação <2 segundos entre repetições.",
        "Recuperação ativa em 60-70% do ritmo de prova para manter estímulo aeróbico.",
        "Respiração forte, porém controlada, permitindo frases curtas nas recuperações.",
      ],
      whenToUse: [
        "Blocos específicos para 5K, 10K e meia maratona.",
        "Semanas foco em VO2 máx. ou ritmo de prova curto/médio.",
        "Atletas que gostam de feedback claro de pace e distância.",
      ],
      tips: [
        "Configure laps automáticos no relógio ou use pista marcada para precisão.",
        "Controle saídas agressivas — pace levemente conservador nas primeiras repetições.",
        "Ajuste a recuperação: se pace cair >5 s, aumente descanso em 30 segundos.",
      ],
      watchouts: [
        "Volume exagerado de tiros longos pode comprometer o longo da semana.",
        "Não faça tiros médios no dia seguinte a treinos de força pesados.",
      ],
    },
  },
  {
    id: "training-type-tiro-tempo",
    label: "Tiro por tempo",
    props: {
      title: "Tiro por tempo",
      description:
        "Intervalos cronometrados (ex.: 2' forte / 1' leve) ideais quando não há marcação de distância ou para focar na sensação de esforço.",
      goal:
        "Construir tolerância a ritmos intensos guiando-se por percepção e cadência, sem depender de distâncias medidas.",
      rationale:
        "O relógio dita o estímulo, permitindo trabalhar ritmos-alvo mesmo em locais com GPS impreciso e mantendo controle de carga pela duração.",
      aliases: ["intervalo cronometrado", "2 por 1", "on/off"],
      structure: [
        {
          label: "Aquecimento",
          description:
            "12 minutos de corrida leve + 3 acelerações de 30 segundos para preparar a frequência cardíaca.",
        },
        {
          label: "Bloco progressivo",
          description:
            "Séries como 8x(2' forte / 1' leve) ou 5x(3' forte / 90\" leve) em terreno plano.",
        },
        {
          label: "Bloco final",
          description:
            "2 repetições extras em ritmo controlado para fixar técnica mesmo sob fadiga.",
        },
        {
          label: "Desaquecimento",
          description:
            "10 minutos leves e caminhada curta para baixar a frequência cardíaca.",
        },
      ],
      intensityCues: [
        "Usa-se percepção de esforço (RPE 7-8/10) ou zonas de FC (Z4).",
        "Cadência constante: mantenha passos por minuto estáveis, mesmo em terreno irregular.",
        "Controle respiração em 2 inspirações / 2 expirações nos trechos fortes.",
      ],
      whenToUse: [
        "Dias com impossibilidade de medir distância (treino em parques, esteira).",
        "Semanas em que você quer focar na sensação, não no pace do relógio.",
        "Blocos de transição entre fartleks livres e tiros métricos.",
      ],
      tips: [
        "Use alertas sonoros do relógio para não precisar olhar a tela durante o estímulo.",
        "Evite começar com blocos longos; aumente a duração forte a cada 1-2 semanas.",
        "Se o último bloco ficar muito difícil, mantenha tempo e reduza intensidade, não o contrário.",
      ],
      watchouts: [
        "GPS instável pode atrapalhar análise; acompanhe métricas de cadência e FC pós-treino.",
        "Em dias quentes ajuste o esforço esperado em 5-8% para evitar superaquecimento.",
      ],
    },
  },
  {
    id: "training-type-long-run",
    label: "Corridas longas",
    props: {
      title: "Corrida longa",
      description:
        "Sessões de maior duração (longão) que constroem resistência muscular, mental e aprimoram a utilização de gordura como combustível.",
      goal:
        "Desenvolver endurance, eficiência energética e preparar o corpo para o tempo total da prova.",
      rationale:
        "Volume contínuo em intensidade moderada amplia capilarização, melhora estoques de glicogênio e ensina o corpo a correr cansado.",
      aliases: ["longão", "LR", "endurance run"],
      structure: [
        {
          label: "Aquecimento",
          description:
            "3-4 km muito leves, com foco em liberar quadril e manter cadência relaxada.",
        },
        {
          label: "Corpo do longo",
          description:
            "Trecho central no ritmo da zona aeróbica moderada (Z2-Z3), podendo incluir progressão nos últimos 20%.",
        },
        {
          label: "Final forte (opcional)",
          description:
            "Últimos 15-20 minutos no ritmo de prova para simular final sob fadiga.",
        },
        {
          label: "Desaquecimento",
          description:
            "500-800 metros caminhando + alimentação e hidratação imediata.",
        },
      ],
      intensityCues: [
        "Ritmo de conversa confortável (RPE 5-6/10) na maior parte.",
        "Cadência constante; evite oscilar muito em subidas com passadas largas.",
        "Use trechos progressivos apenas se recuperação estiver em dia.",
      ],
      whenToUse: [
        "Fase específica para meias e maratonas (semanalmente).",
        "Planejamento de base para provas de 10K, com frequência quinzenal.",
        "Reforço mental antes de provas-alvo, testando nutrição e equipamentos.",
      ],
      tips: [
        "Simule alimentação e hidratação da prova durante o longão.",
        "Divida mentalmente em blocos (ex.: 3 partes) para manter foco.",
        "Mantenha recuperação ativa no dia seguinte (trote leve ou caminhada).",
      ],
      watchouts: [
        "Aumente a quilometragem progressivamente (regra dos 10%).",
        "Evite longos muito próximos de sessões intensas; deixe pelo menos 48 horas.",
      ],
    },
  },
  {
    id: "training-type-easy-run",
    label: "Corridas fáceis",
    props: {
      title: "Corrida fácil / regenerativa",
      description:
        "Rodagens curtinhas e tranquilas voltadas à recuperação ativa, reduzindo rigidez sem adicionar fadiga significativa.",
      goal:
        "Promover circulação sanguínea, acelerar remoção de resíduos metabólicos e manter volume sem estressar o corpo.",
      rationale:
        "Intensidade baixa mantém fibras aeróbicas ativas e amplia volume semanal com baixo impacto hormonal, favorecendo supercompensação.",
      aliases: ["regenerativo", "easy run", "shakeout"],
      structure: [
        {
          label: "Saída controlada",
          description:
            "5 minutos muito leves, quase caminhada rápida para acordar a musculatura.",
        },
        {
          label: "Bloco central",
          description:
            "20-40 minutos em ritmo confortável, mantendo postura e braços relaxados.",
        },
        {
          label: "Desaquecimento",
          description:
            "5 minutos de trote ainda mais leve + alongamentos dinâmicos leves.",
        },
      ],
      intensityCues: [
        "Deve permitir conversa completa sem faltar ar (RPE 3-4/10).",
        "Cadência suave; foque em pisadas silenciosas e contato curto com o solo.",
        "Monitorize FC: manter na zona Z1-Z2, longe de picos.",
      ],
      whenToUse: [
        "Dia seguinte a treinos fortes, longos ou provas.",
        "Entre sessões de intensidade na mesma semana, servindo como 'flush' de lactato.",
        "Antes de provas curtas como aquecimento ativo (shakeout).",
      ],
      tips: [
        "Resista à vontade de acelerar; a eficácia está em manter leve.",
        "Utilize terreno macio (grama, terra batida) para poupar articulações.",
        "Aproveite para focar em técnica de corrida relaxada e postura.",
      ],
      watchouts: [
        "Se a FC subir demais, caminhe por 1-2 minutos e retome devagar.",
        "Evite transformar corrida fácil em rodagem moderada por ego — isso rouba energia dos treinos chave.",
      ],
    },
  },
  {
    id: "training-type-interval",
    label: "Intervalados",
    props: {
      title: "Treino intervalado estruturado",
      description:
        "Blocos repetidos que alternam trechos em ritmo limiar ou VO2 máx. com recuperações planejadas, de olho em carga semanal e métricas precisas.",
      goal:
        "Aumentar velocidade sustentável e ampliar tolerância ao acúmulo de lactato em esforços controlados.",
      rationale:
        "Repetições mantêm tempo de qualidade em zonas críticas enquanto recuperações parciais permitem somar volume sem perder execução técnica.",
      aliases: ["intervalado", "HIIT de corrida", "RI"],
      structure: [
        {
          label: "Aquecimento",
          description:
            "15 minutos leves + educativos focados em joelho alto, skipping e drils de cadência.",
        },
        {
          label: "Séries principais",
          description:
            "Ex.: 4x5 minutos em ritmo de limiar com 2 minutos leves ou 3x8 minutos em ritmo de meia maratona com 90 segundos.",
        },
        {
          label: "Repetição bônus (opcional)",
          description:
            "Uma série adicional levemente progressiva se o corpo responder bem.",
        },
        {
          label: "Desaquecimento",
          description:
            "10 minutos leves + exercícios de mobilidade para quadril e tornozelo.",
        },
      ],
      intensityCues: [
        "Ritmos entre prova de 10K e limiar (RPE 7/10) na maior parte.",
        "Respiração forte porém controlada; mantenha braços firmes e relaxe mãos.",
        "Recuperação ativa em torno de 60% do ritmo de prova alvo.",
      ],
      whenToUse: [
        "Fase específica de ciclos para 10K, meia e maratona.",
        "Semanas com foco em VO2 ou limiar anaeróbio.",
        "Atletas que precisam de estrutura previsível para acompanhar evolução.",
      ],
      tips: [
        "Planeje pace alvo antes e revise cada split para ajustar na próxima sessão.",
        "Use pista, esteira ou percurso plano para reduzir variação de ritmo.",
        "Mantenha postura firme nas recuperações — é parte do treino.",
      ],
      watchouts: [
        "Volume alto de intervalados pode conflitar com treinos de ritmo ou longão; ajuste carga total.",
        "Sintomas de fadiga central (insônia, irritabilidade) pedem redução imediata de intensidade.",
      ],
    },
  },
  {
    id: "training-type-rodagem",
    label: "Rodagem",
    props: {
      title: "Rodagem controlada",
      description:
        "Corrida contínua em ritmo confortável porém estável, maior que o regenerativo e menor que o ritmo de prova.",
      goal:
        "Construir base aeróbica sólida, reforçar economia de corrida e acumular quilometragem semanal.",
      rationale:
        "Manter pace constante em zona moderada fortalece fibras lentas, aperfeiçoa eficiência de passada e aumenta densidade mitocondrial.",
      aliases: ["rodagem", "run fácil forte", "R2"],
      structure: [
        {
          label: "Início",
          description:
            "10 minutos de pace leve até estabilizar respiração e cadência.",
        },
        {
          label: "Miolo",
          description:
            "30-60 minutos em pace estável (Z2 alta/Z3 baixa) sem grandes oscilações.",
        },
        {
          label: "Fechamento",
          description:
            "5 minutos progressivos + 5 minutos de desaquecimento leve.",
        },
      ],
      intensityCues: [
        "Percepção 5-6/10: consegue falar frases curtas, não completas.",
        "Frequência cardíaca entre 75-85% da FC máxima.",
        "Cadência fluida; mantenha tronco ereto e braços a 90 graus.",
      ],
      whenToUse: [
        "2-3 vezes por semana em praticamente qualquer ciclo.",
        "Dias sem treinos de velocidade, mantendo consistência de volume.",
        "Transição entre fases de base e específica.",
      ],
      tips: [
        "Escolha percursos que permitam manter pace constante para medir evolução.",
        "Controle o ritmo nas subidas: reduza velocidade, mantenha esforço relativo.",
        "Inclua 4-6 retas de 20 segundos pós-rodagem para trabalhar coordenação.",
      ],
      watchouts: [
        "Se virar corrida fácil demais, aumente levemente o pace; se ficar intenso demais, rebaixe para regenerativo.",
        "Não acumule rodagens longas demais — mantenha 50-70% do volume do longo semanal.",
      ],
    },
  },
];

const trainingTypeSubsections: SubsectionContent[] = trainingTypes.map(
  ({ id, label, props }) => ({
    id,
    label,
    component: TrainingTypeGuide,
    props,
    panel: trainingTypePanel(props),
  })
);

export default trainingTypeSubsections;
