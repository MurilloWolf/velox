import {
  NutritionDistanceGuide,
  NutritionDistanceGuideProps,
} from "@/app/coach/components/Subsections";
import type { SubsectionContent } from "../../../types";

type NutritionGuideConfig = {
  id: string;
  label: string;
  props: NutritionDistanceGuideProps;
};

const guides: NutritionGuideConfig[] = [
  {
    id: "nutrition-5k",
    label: "5 km",
    props: {
      title: "Nutrição inteligente para 5 km",
      distanceTag: "5 km",
      description:
        "Corridas curtas pedem energia rápida, estômago leve e timing de hidratação preciso para lineares de 20 a 40 minutos.",
      goal:
        "Garantir glicogênio disponível sem desconforto gastrointestinal, preservando explosão desde o tiro de largada.",
      rationale:
        "Protocolos enxutos mantêm a glicemia estável, liberam energia rápida e evitam quedas de performance por estômago pesado.",
      focusPoints: [
        "Disciplina nas 24 h anteriores: carboidratos moderados e baixa gordura.",
        "Snack pré-prova calculado para não pesar nem faltar combustível.",
        "Hidratação distribuída em pequenos goles para não gerar sensação de empachamento.",
        "Recuperação acelerada com combo carb+proteína logo após cruzar a linha.",
      ],
      preparation: {
        title: "Antes da prova",
        intro:
          "Planeje a reposição de carboidratos em camadas leves para chegar na largada sem sensação de estômago cheio.",
        blocks: [
          {
            title: "24 h anteriores",
            description:
              "Baseie as refeições em carboidratos simples e moderados, mantendo proteínas magras e pouca gordura.",
            bullets: [
              "Arroz branco, batata, tapioca, aveia fina e frutas são as melhores fontes.",
              "Proteínas magras em pequenas porções (frango, peixe, ovos, tofu).",
              "Hidrate-se com 35-40 ml/kg ao longo do dia; água de coco e isotônico leve contam.",
            ],
          },
          {
            title: "Última refeição completa (3 h antes)",
            description:
              "Coma algo de fácil digestão com combinação de carboidrato + pequena dose de proteína.",
            bullets: [
              "Sugestões: tapioca com geleia, pão branco com mel + meia banana, batata-doce com ovo cozido.",
              "Evite fibras em excesso, laticínios integrais e frituras.",
              "Se estiver nervoso, divida a refeição em duas metades com 30 minutos de intervalo.",
            ],
          },
          {
            title: "30-45 minutos antes",
            description:
              "Ajustes finais para estabilizar glicose sem gerar peso abdominal.",
            bullets: [
              "Use snack de 15-25 g de carboidrato (banana pequena, bebida esportiva, gel).",
              "Pequenos goles de água (100-150 ml) apenas para aliviar boca seca.",
              "Finalize o aquecimento antes de consumir o snack para evitar refluxo.",
            ],
          },
        ],
      },
      raceExecution: {
        title: "Durante a corrida",
        intro:
          "Provas de 5 km geralmente dispensam ingestão sólida; foque em manter o ritmo e evitar secura na garganta.",
        blocks: [
          {
            title: "Hidratação mínima",
            description:
              "Use os postos apenas se sentir necessidade, priorizando goles pequenos.",
            bullets: [
              "100 ml de água no meio da prova já resolvem em clima ameno.",
              "Em calor intenso, alterne com isotônico diluído para sódio leve.",
              "Evite ingerir grandes quantidades para não sentir estômago balançando.",
            ],
          },
          {
            title: "Energia",
            description:
              "Somente necessário para atletas >25 minutos ou em condições extremas.",
            bullets: [
              "Se optar por gel, escolha textura líquida para ingestão rápida.",
              "Teste nos treinos intervalados antes de usar na prova.",
            ],
          },
        ],
      },
      recovery: {
        title: "Depois da prova",
        intro:
          "Recupere o glicogênio usado em intensidade alta e inicie reparo muscular imediatamente após o sprint final.",
        blocks: [
          {
            title: "Primeiros 30 minutos",
            description:
              "Faça uma combinação simples de carboidrato + proteína em proporção 3:1.",
            bullets: [
              "Opções: iogurte com fruta e aveia, shake de whey + banana, sanduíche de peito de peru.",
              "Reponha 400-600 ml de líquidos; isotônico ajuda em dias quentes.",
            ],
          },
          {
            title: "1 a 3 horas depois",
            description:
              "Refeição completa com carboidrato base, proteína magra e vegetais coloridos.",
            bullets: [
              "Inclua arroz, massa leve ou tubérculo + frango ou peixe + salada variada.",
              "Adicione gordura boa (azeite, abacate) para absorção de vitaminas.",
            ],
          },
          {
            title: "Próximo treino",
            description:
              "Se houver sessão no dia seguinte, planeje snack adicional antes de dormir.",
            bullets: [
              "Banana com pasta de amendoim ou mingau de aveia ajudam na reposição noturna.",
            ],
          },
        ],
      },
      supplements: [
        "Cafeína 30 minutos antes (3-4 mg/kg) para atletas acostumados ao estímulo.",
        "Gel de carboidrato para quem corre acima de 30 minutos em ritmo de prova.",
        "Beta-alanina em uso crônico pode reduzir sensação de queimação em tiros.",
      ],
      watchouts: [
        "Evite laticínios integrais ou muita fibra nas horas pré-prova.",
        "Não experimente suplementos ou géis inéditos no dia da corrida.",
        "Chegar desidratado à largada reduz potência já no primeiro quilômetro.",
      ],
      glossary: [
        {
          term: "Gel",
          description:
            "Sachê concentrado de carboidrato; escolha versões testadas nos treinos.",
        },
        {
          term: "All-out",
          description:
            "Expressão usada para correr no limite; exige estômago leve para não passar mal.",
        },
        {
          term: "Carb timing",
          description:
            "Planejamento do momento exato de ingerir carboidratos antes e depois dos esforços.",
        },
      ],
    },
  },
  {
    id: "nutrition-10k",
    label: "10 km",
    props: {
      title: "Nutrição para 10 km consistente",
      distanceTag: "10 km",
      description:
        "Provas intermediárias pedem equilíbrio entre reserva energética e leveza para sustentar o ritmo forte por 45-70 minutos.",
      goal:
        "Maximizar glicogênio muscular e manter níveis de glicose estáveis sem gerar distensão abdominal.",
      rationale:
        "Ao distribuir carboidratos nas últimas 36 horas e inserir reposição leve durante a prova, você atrasa a fadiga e mantém a mecânica eficiente.",
      focusPoints: [
        "Carb loading leve de 36 horas com alimentos conhecidos.",
        "Snack pré-prova calculado (3 h e 45 min antes) para disponibilidade energética.",
        "Reposição estratégica a cada 30-35 minutos em géis ou bebidas isotônicas.",
        "Plano de recuperação 3 etapas (0-30 min, 3 h, 24 h) para treinar novamente rápido.",
      ],
      preparation: {
        title: "Antes da prova",
        intro:
          "Planeje duas janelas principais: 36-18 horas e 3 horas antes da largada, ajustando fibras e sódio.",
        blocks: [
          {
            title: "36-18 horas antes",
            description:
              "Aumente levemente carboidratos (6-7 g/kg) sem exagerar nas calorias totais.",
            bullets: [
              "Inclua massas simples, pães claros, frutas maduras e cereais.",
              "Reduza frituras, folhas muito fibrosas e leguminosas.",
              "Mantenha 500 ml extras de água com eletrólitos divididos em 3 tomadas.",
            ],
          },
          {
            title: "Noite anterior",
            description:
              "Jantar leve com carboidrato predominante e proteína magra.",
            bullets: [
              "Sugestões: arroz + frango grelhado, gnocchi com molho leve, risoto simples.",
              "Evite sobremesas pesadas ou álcool.",
            ],
          },
          {
            title: "3 h antes da largada",
            description:
              "Refeição principal com carboidrato de média absorção e pouca gordura.",
            bullets: [
              "Panqueca de aveia fina com mel, pão branco + geleia + ovo mexido leve.",
              "Inclua 300-400 ml de água repartidos, finalizando até 60 minutos antes.",
            ],
          },
          {
            title: "45 minutos antes",
            description:
              "Carboidrato rápido (20-25 g) e eletrólitos se clima estiver quente.",
            bullets: [
              "Gel com cafeína, bebida esportiva, balas de goma específicas.",
              "Finalize ingestão hídrica 15 minutos antes da largada.",
            ],
          },
        ],
      },
      raceExecution: {
        title: "Durante a prova",
        intro:
          "Mantenha ingestões pequenas e frequentes para segurar ritmo desde o km 1.",
        blocks: [
          {
            title: "Hidratação",
            description:
              "Goles de 80-120 ml a cada posto ou 2 km, alternando água e isotônico.",
            bullets: [
              "Em calor >24 ºC aumente para 150 ml e inclua cápsula de sal se suar demais.",
              "Use squeeze ou copo amassado para beber em duas tomadas.",
            ],
          },
          {
            title: "Energia",
            description:
              "Para tempos acima de 40 minutos, inclua 1 gel ou 120 ml de bebida com carboidrato.",
            bullets: [
              "Consuma no km 5-6 seguido de água para facilitar absorção.",
              "Atletas acima de 60 minutos podem planejar segundo shot perto do km 8.",
            ],
          },
        ],
      },
      recovery: {
        title: "Depois da prova",
        intro:
          "Reposição tripla: energia, proteína e eletrólitos para preservar ganhos de VO2 e limiar.",
        blocks: [
          {
            title: "0-30 minutos",
            description:
              "Combo líquido + sólido leve com relação carb/proteína 3:1.",
            bullets: [
              "Shake de whey com suco + banana, iogurte grego + granola leve.",
              "Beba 600-800 ml entre água e isotônico.",
            ],
          },
          {
            title: "1-3 horas pós",
            description: "Refeição colorida com carboidrato complexo.",
            bullets: [
              "Arroz integral ou quinoa + salmão + vegetais refogados.",
              "Inclua sódio (azeitonas, caldo leve) para recuperar o que foi perdido no suor.",
            ],
          },
          {
            title: "24 horas seguintes",
            description:
              "Mantenha ingestão elevada de líquidos e snacks com proteína a cada 3 horas.",
            bullets: [
              "Iogurte com chia, ovos mexidos com pão leve, fruta + castanhas.",
            ],
          },
        ],
      },
      supplements: [
        "Cafeína 45 minutos antes (até 6 mg/kg) se já testada em treinos longos.",
        "Nitratos (suco de beterraba) 2-3 horas antes para quem responde bem.",
        "Bebida de carboidrato concentrada (maltodextrina) para atletas com ritmo intenso.",
      ],
      watchouts: [
        "Ignorar a ingestão de sódio em dias quentes eleva risco de câimbras.",
        "Carregar dois géis sem testar gera desconforto abdominal.",
        "Passar o dia anterior beliscando alimentos gordurosos diminui velocidade de digestão.",
      ],
      glossary: [
        {
          term: "Carb loading",
          description:
            "Estratégia de aumentar carboidratos nos dias anteriores para saturar o glicogênio.",
        },
        {
          term: "PRÉ",
          description:
            "Abreviação comum para a refeição principal pré-prova (3 h antes).",
        },
        {
          term: "Shot",
          description:
            "Termo usado para pequenas doses de gel, mel ou isotônico concentrado durante a corrida.",
        },
      ],
    },
  },
  {
    id: "nutrition-15k",
    label: "15 km",
    props: {
      title: "Guia nutricional para 15 km",
      distanceTag: "15 km",
      description:
        "Distância de transição que exige planejamento mais robusto de carboidrato e sódio para sustentar 70-100 minutos de esforço.",
      goal:
        "Aumentar a autonomia energética sem sacrificar o trato gastrointestinal, garantindo combustível até o último quilômetro.",
      rationale:
        "Um mix de carb loading moderado, reposição fracionada e atenção a eletrólitos evita queda de ritmo entre km 10-14.",
      focusPoints: [
        "Planejamento alimentar iniciado 48 horas antes com prioridade em carboidratos limpos.",
        "Refeição pré-prova completa com 2g de sódio distribuídos no dia.",
        "Estratégia dupla de gel/bebida (45 min e 75 min) durante a corrida.",
        "Recuperação focada em proteínas de alto valor biológico e antioxidantes.",
      ],
      preparation: {
        title: "Antes da prova",
        intro:
          "Período pré-prova ganha mais importância: aumente carboidrato e sódio gradativamente.",
        blocks: [
          {
            title: "48-24 horas antes",
            description:
              "Eleve ingestão de carboidratos para 7 g/kg e distribua sódio extra via alimentos.",
            bullets: [
              "Inclua massas simples, purê de batata, pães claros e suco de frutas.",
              "Tempere com sal marinho ou consuma água com eletrólitos para atingir ~2 g de sódio/dia.",
              "Evite alimentos crus de risco (maionese, saladas de rua).",
            ],
          },
          {
            title: "Noite anterior",
            description:
              "Jantar maior, porém sem exageros na gordura: prefira carboidrato + proteína leve.",
            bullets: [
              "Batata-doce com frango desfiado, massa al dente com molho de tomate simples.",
              "Finalize hidratação até 1 hora antes de dormir para evitar interrupções do sono.",
            ],
          },
          {
            title: "Pré-prova 3 h antes",
            description:
              "Faça refeição com 1-1,5 g/kg de carboidrato e 0,3 g/kg de proteína.",
            bullets: [
              "Panqueca de aveia fina com mel e clara de ovo, arroz + ovo mexido + banana.",
              "Café passado ou chá preto podem entrar, desde que já habituado.",
            ],
          },
          {
            title: "60-30 minutos antes",
            description:
              "Carboidrato rápido + dose moderada de sódio para calibrar o final da prova.",
            bullets: [
              "Gel ou bebida (20-25 g de carb) + 200 ml de água.",
              "Se calor, adicione cápsula de sal (400-500 mg) com orientação profissional.",
            ],
          },
        ],
      },
      raceExecution: {
        title: "Durante a prova",
        intro:
          "Distribua energia de forma que o km 12 ao 15 mantenham o mesmo ritmo do km 1.",
        blocks: [
          {
            title: "Primeira metade",
            description:
              "No km 6-7, ingira 1º gel ou 150 ml de bebida com carboidrato.",
            bullets: [
              "Sempre combine com goles de água para absorção rápida.",
              "Se preferir alimentos sólidos, escolha balas de goma específicas para atletas.",
            ],
          },
          {
            title: "Segunda metade",
            description:
              "Planeje segundo gel entre km 11-12, principalmente se ritmo >70 min.",
            bullets: [
              "Prefira versões com eletrólitos ou cafeína leve.",
              "Se usar bebida esportiva, alterne com água para evitar excesso de açúcar.",
            ],
          },
          {
            title: "Hidratação",
            description:
              "Beba 120-150 ml por posto; ajuste para clima úmido.",
            bullets: [
              "Divida o gole em duas partes para não engasgar.",
              "Atenção à coloração da urina antes da prova: amarelo claro é o objetivo.",
            ],
          },
        ],
      },
      recovery: {
        title: "Depois da prova",
        intro:
          "Processo em 3 etapas para reduzir danos musculares e restaurar imune.",
        blocks: [
          {
            title: "Primeiros 20 minutos",
            description:
              "Líquido com carboidrato + proteína e dose de sódio.",
            bullets: [
              "Vitamina de banana + whey + pitada de sal, suco de uva integral + whey.",
            ],
          },
          {
            title: "1-2 horas seguintes",
            description:
              "Refeição completa com grãos integrais, proteína magra e vegetais.",
            bullets: [
              "Arroz integral + peixe + mix de vegetais, quinoa + carne magra + legumes.",
              "Inclua fruta antioxidante (frutas vermelhas, laranja).",
            ],
          },
          {
            title: "Restante do dia",
            description:
              "Snacks com proteína a cada 3 horas e hidratação contínua (35 ml/kg).",
            bullets: [
              "Iogurte proteico, ovos mexidos, barra proteica low sugar.",
            ],
          },
        ],
      },
      supplements: [
        "BCAA ou EAA podem ajudar corridas com alto volume semanal.",
        "Cafeína fracionada (metade antes, metade no km 10) para ritmos fortes.",
        "Magnésio noturno para melhorar recuperação neuromuscular.",
      ],
      watchouts: [
        "Não negligencie a segunda ingestão de carboidrato — é ela que sustenta o final.",
        "Alimentos sólidos demais no km 10 podem gerar ponto lateral.",
        "Carregar garrafa pesada sem costume altera mecânica de braço.",
      ],
      glossary: [
        {
          term: "Longão",
          description: "Treino longo semanal onde você testa a estratégia nutricional.",
        },
        {
          term: "Lap",
          description: "Marcação manual do relógio para medir intervalos (use nos géis).",
        },
        {
          term: "FC",
          description:
            "Frequência cardíaca; monitore zonas para ajustar ingestões durante a prova.",
        },
      ],
    },
  },
  {
    id: "nutrition-21k",
    label: "21 km",
    props: {
      title: "Nutrição estratégica para meia maratona",
      distanceTag: "21 km",
      description:
        "21 km exigem periodização de carb loading, reposição de eletrólitos e testes prévios para 90-140 minutos correndo.",
      goal:
        "Manter glicogênio cheio e sistema digestivo adaptado a múltiplas ingestões durante a prova.",
      rationale:
        "Ao combinar protocolo escalonado de carboidratos, sódio e hidratação, você preserva ritmo de prova no km 18 quando muitos desaceleram.",
      focusPoints: [
        "Aumento de carboidratos 3 dias antes com variação mínima de fibra.",
        "Plano de géis/bebidas a cada 35-40 minutos, sincronizado com hidratação.",
        "Controle de sódio (600-800 mg) distribuído antes e durante a corrida.",
        "Recuperação pós no modo maratona: atenção a proteína, antioxidantes e sono.",
      ],
      preparation: {
        title: "Antes da prova",
        intro:
          "Trabalhe com antecedência: ajuste ingestão de carb e sódio a partir de 72 horas.",
        blocks: [
          {
            title: "72-48 horas antes",
            description:
              "Eleve carboidrato para 7-8 g/kg; mantenha proteínas moderadas.",
            bullets: [
              "Distribua carb em 5-6 refeições (massas, tubérculos, frutas, pão).",
              "Reduza fibras insolúveis (couve, grãos crus).",
              "Aumente sódio leve com caldos, água de coco, isotônico diluído.",
            ],
          },
          {
            title: "48-24 horas",
            description:
              "Continue o carb loading e ajuste líquidos; teste a alimentação da prova.",
            bullets: [
              "Repetir cardápio conhecido para evitar surpresas.",
              "Inclua lanche extra antes de dormir (mingau de aveia, pão com mel).",
            ],
          },
          {
            title: "Pré-prova 3 h antes",
            description:
              "Refeição robusta (1,5 g/kg de carbo) com proteína leve e pouco sal.",
            bullets: [
              "Arroz branco + omelete + banana, pão branco + geleia + iogurte sem lactose.",
              "Finalize ingestão de água 45 minutos antes para evitar paradas.",
            ],
          },
          {
            title: "90-30 minutos antes",
            description:
              "Carboidrato rápido + eletrólitos finalizam estoque e carregam sódio.",
            bullets: [
              "Gel com cafeína ou bebida esportiva concentrada (20-30 g carb).",
              "Cápsula de sal (500-600 mg) 30 minutos antes se clima quente.",
            ],
          },
        ],
      },
      raceExecution: {
        title: "Durante a prova",
        intro:
          "Manter ingestões regulares é decisivo para segurar ritmo a partir do km 15.",
        blocks: [
          {
            title: "Plano de carboidratos",
            description:
              "Géis ou bebidas a cada 35-40 minutos (aprox. km 7, 14, 18).",
            bullets: [
              "Alterar textura (gel, bebida, bloco mastigável) ajuda conforto gastrointestinal.",
              "Sempre beber água juntamente para facilitar absorção.",
            ],
          },
          {
            title: "Hidratação",
            description:
              "Beber 150-200 ml a cada posto (2-3 km). Alterne água e isotônico.",
            bullets: [
              "Se usar cinto, planeje 2 squeezes (água + isotônico).",
              "Avalie ingestão extra nos km finais se sentir boca seca.",
            ],
          },
          {
            title: "Sódio e cafeína",
            description:
              "600-800 mg de sódio durante toda a prova; cafeína extra apenas se testada.",
            bullets: [
              "Cápsulas no km 10 ou isotônicos ricos em sódio.",
              "Dose final de cafeína (gel) no km 17 ajuda sprint final.",
            ],
          },
        ],
      },
      recovery: {
        title: "Depois da prova",
        intro:
          "Trate a recuperação como mini maratona: estrutura em camadas ao longo do dia.",
        blocks: [
          {
            title: "0-30 minutos",
            description:
              "Super shake com carb, proteína e sódio.",
            bullets: [
              "Vitamina de banana com whey + sal + água de coco.",
              "Sanduíche de pão branco + peito de peru + fruta.",
            ],
          },
          {
            title: "2-4 horas",
            description:
              "Refeição completa com foco em carbo complexo e proteína magra.",
            bullets: [
              "Massa com carne magra e molho de tomate, arroz + peixe + vegetais.",
              "Inclua antioxidantes (frutas vermelhas, cúrcuma, gengibre).",
            ],
          },
          {
            title: "12-24 horas",
            description:
              "Snacks proteicos a cada 3 horas, hidratação constante e magnésio à noite.",
            bullets: [
              "Iogurte proteico, ovos, queijo cottage, frutas com castanhas.",
            ],
          },
        ],
      },
      supplements: [
        "Cafeína (4-6 mg/kg) 45 minutos antes, fracionando metade no km 14 se tolerado.",
        "Carboidrato em pó (maltodextrina, palatinose) para diluir em garrafa pessoal.",
        "Bicarbonato em protocolo crônico pode ajudar limiar, mas precisa de orientação.",
      ],
      watchouts: [
        "Não testar géis novos no dia; use apenas sabores treinados.",
        "Ignorar sódio leva a tontura e queda de performance no final.",
        "Exagerar na fibra no dia anterior pode causar urgência intestinal.",
      ],
      glossary: [
        {
          term: "FCM",
          description: "Frequência cardíaca máxima, usada para controlar esforço vs ingestão.",
        },
        {
          term: "Gels a cada 7k",
          description:
            "Estratégia clássica: consumir gel a cada 7 km; ajuste conforme tempo em prova.",
        },
        {
          term: "Isotônico diluído",
          description:
            "Mistura meio a meio de isotônico e água para reduzir concentração de açúcar.",
        },
      ],
      tables: [
        {
          title: "Plano de carboidrato por quilômetro",
          caption:
            "Baseado em ritmo de 1h40-2h; ajuste pontos conforme hidratação disponível.",
          headers: ["Momento", "Ingestão", "Observação"],
          rows: [
            [
              "45 min antes",
              "Gel 20-25 g + 150 ml água",
              "Consuma após o aquecimento e finalize líquidos até 15 min antes.",
            ],
            [
              "Km 7",
              "Gel tradicional (25 g)",
              "Beba 2-3 goles de água logo em seguida para ajudar absorção.",
            ],
            [
              "Km 14",
              "Gel com cafeína ou bebida esportiva 150 ml",
              "Escolha cafeína apenas se já tiver testado em longões.",
            ],
            [
              "Km 18",
              "Gel leve ou isotônico concentrado",
              "Último reforço para sprint final; combine com água.",
            ],
          ],
        },
      ],
      alerts: [
        {
          title: "Clima acima de 24 ºC",
          description:
            "Adicione cápsula de sal extra (300-400 mg) no km 12 e reduza intervalos entre goles para evitar queda de pressão.",
        },
        {
          title: "Estômago pesado",
          description:
            "Se sentir náusea, substitua próximo gel por bebida isotônica fracionada e prefira versões sem cafeína.",
        },
        {
          title: "Provas com poucas estações",
          description:
            "Carregue squeeze com bebida de carboidrato para garantir ingestão no km 14 se não houver ponto oficial.",
        },
      ],
    },
  },
  {
    id: "nutrition-42k",
    label: "42 km",
    props: {
      title: "Nutrição completa para maratona",
      distanceTag: "42 km",
      description:
        "Maratona exige operação de guerra: consumo elevado de carboidrato, reposição de sódio/eletrólitos e teste prévio de qualquer item.",
      goal:
        "Chegar com glicogênio máximo, intestino adaptado, plano de ingestão de 60-90 g de carbo/h e recuperação imediata pós-prova.",
      rationale:
        "Sem reposição estruturada, o km 32 chega mais cedo. Carbo, sódio e líquidos em volume adequado mantêm o cérebro abastecido e retardam o 'muro'.",
      focusPoints: [
        "Carb loading de 72 h com 8-10 g/kg e redução progressiva de fibras.",
        "Plano de ingestão por hora (carbo, sódio, líquidos) testado nos longões.",
        "Separar géis por quilometragem-chave (km 8, 14, 20, 26, 32, 36).",
        "Recuperação pós com grandes quantidades de líquidos, proteínas e carboidratos complexos.",
      ],
      preparation: {
        title: "Antes da prova",
        intro:
          "Estratégia começa 3 dias antes dispensando experimentos novos.",
        blocks: [
          {
            title: "72-48 horas",
            description:
              "Aumente carboidratos para 8-10 g/kg focando alimentos conhecidos.",
            bullets: [
              "Massas simples, arroz, batata, pães, frutas maduras e sucos.",
              "Reduza fibras insolúveis e vegetais crus; escolha versões cozidas.",
              "Distribua refeições em 6-7 momentos menores para não sobrecarregar o estômago.",
            ],
          },
          {
            title: "48-24 horas",
            description:
              "Detalhe cada refeição; inclua sódio extra (2-3 g/dia).",
            bullets: [
              "Caldo salgado leve, água com eletrólitos, cápsula de sal se clima quente.",
              "Faça mini lanches a cada 3 horas (pão com mel, frutas secas, isotônico).",
            ],
          },
          {
            title: "Noite anterior",
            description:
              "Jantar leve com foco em carboidrato e pouco molho.",
            bullets: [
              "Macarrão com molho branco leve, risoto simples, purê de batata + frango.",
              "Finalize hidratação forte até 2 h antes de dormir; depois apenas goles.",
            ],
          },
          {
            title: "3-4 horas antes da largada",
            description:
              "Refeição principal com 2 g/kg de carbo e 0,4 g/kg de proteína.",
            bullets: [
              "Bagel com mel + ovo mexido, arroz + omelete + banana.",
              "Beba 500 ml de bebida eletrolítica dividida em 3 tomadas.",
            ],
          },
          {
            title: "60-15 minutos antes",
            description:
              "Sequência final de carboidrato rápido + sódio + cafeína (se usual).",
            bullets: [
              "Gel com cafeína, bebida isotônica concentrada, mastigável de carbo.",
              "Cápsula de sal 30 minutos antes (500-600 mg) e pequenos goles de água.",
            ],
          },
        ],
      },
      raceExecution: {
        title: "Durante a prova",
        intro:
          "Execute o plano testado nos longões; ajuste apenas ao clima.",
        blocks: [
          {
            title: "Carboidrato por hora",
            description:
              "Busque 60-70 g/h se ritmo for <4h; atletas rápidos podem mirar 80-90 g/h.",
            bullets: [
              "Combine géis, bebidas com carb e blocos mastigáveis para variar textura.",
              "Consuma géis a cada 25-30 minutos (km 8, 14, 20, 26, 32, 36).",
              "Use relógio para alertas; marcar laps ajuda a não esquecer.",
            ],
          },
          {
            title: "Hidratação",
            description:
              "Ingestão constante de 150-200 ml a cada posto (2-3 km).",
            bullets: [
              "Alterar água/isotônico; se carregar garrafinhas, reabasteça com calma.",
              "Em dias frios reduza volume mas mantenha ingestão regular.",
            ],
          },
          {
            title: "Sódio e cafeína",
            description:
              "Total de 1-1,5 g de sódio durante prova; cafeína fracionada.",
            bullets: [
              "Cápsulas a cada 60-70 minutos ou isotônicos ricos em sódio.",
              "Dose final de cafeína no km 32 ajuda a romper o 'muro'.",
            ],
          },
        ],
      },
      recovery: {
        title: "Depois da prova",
        intro:
          "Recuperação é parte do plano; pense em 24 horas de protocolos.",
        blocks: [
          {
            title: "Primeiros 15 minutos",
            description:
              "Bebida rica em carbo, proteína e sódio.",
            bullets: [
              "Shake com banana, whey, sal, água de coco e mel.",
              "Sopa leve salgado se estômago aceitar melhor opção salgada.",
            ],
          },
          {
            title: "1-2 horas",
            description:
              "Refeição grande com carbo complexo, proteína magra e vegetais cozidos.",
            bullets: [
              "Massa, arroz, batata ou quinoa + peixe/frango + legumes.",
              "Inclua antioxidantes e alimentos anti-inflamatórios (açafrão, gengibre).",
            ],
          },
          {
            title: "Resto do dia",
            description:
              "Reposição constante de líquidos (35-45 ml/kg) e snacks com proteína.",
            bullets: [
              "Iogurte proteico, sanduíche de carne magra, frutas secas com castanhas.",
              "Magnésio e ômega-3 podem ajudar na qualidade do sono e recuperação.",
            ],
          },
        ],
      },
      supplements: [
        "Plano de cafeína fracionada (ex.: 200 mg pré + 100 mg km 25 + 100 mg km 35).",
        "Géis com mistura de maltodextrina + frutose para atingir 90 g/h.",
        "Sódio via cápsula (500-600 mg) a cada 45-60 min para quem sua muito.",
      ],
      watchouts: [
        "Não use nada inédito no dia da prova: teste no mínimo duas vezes nos longões.",
        "Ignorar ingestões após o km 30 leva ao famoso 'muro'.",
        "Carb loading exagerado com frituras causa sensação de peso generalizado.",
      ],
      glossary: [
        {
          term: "Muro",
          description:
            "Sensação de pane no km 30-35 quando faltam carboidratos e sódio.",
        },
        {
          term: "Longão específico",
          description:
            "Treino longo usado para testar nutrição exatamente como no dia da prova.",
        },
        {
          term: "Brick de gel",
          description:
            "Pequena bolsa com géis organizados por ordem, comum entre maratonistas.",
        },
      ],
      tables: [
        {
          title: "Mapa de ingestão de carboidratos",
          caption:
            "Plano padrão para maratonistas entre 3h30 e 4h30; ajuste tempos ao seu ritmo.",
          headers: ["Quilômetro", "Ingestão", "Notas"],
          rows: [
            [
              "45 min antes",
              "Gel 25 g + 200 ml bebida eletrolítica",
              "Consuma após alongamentos dinâmicos.",
            ],
            [
              "Km 8",
              "Gel tradicional 25 g",
              "Ingerir com água; use alarme no relógio.",
            ],
            [
              "Km 14",
              "Gel com cafeína leve",
              "Combine com 150 ml de isotônico.",
            ],
            [
              "Km 20-21",
              "Gel 30 g ou bebida 250 ml",
              "Momento crítico para manter glicemia estável.",
            ],
            [
              "Km 26-27",
              "Gel com sódio extra",
              "Ideal para repor eletrólitos perdidos até aqui.",
            ],
            [
              "Km 32",
              "Gel com cafeína ou carbo de rápida absorção",
              "Ajuda a romper o 'muro'; beba água logo após.",
            ],
            [
              "Km 36-37",
              "Último gel leve ou bebida esportiva concentrada",
              "Importante para manter foco mental no final.",
            ],
          ],
        },
      ],
      alerts: [
        {
          title: "Clima extremo",
          description:
            "Em dias quentes (>26 ºC) reduza ritmo alvo em 5-10 s/km e aumente ingestão de sódio para 1,5 g ao longo da prova.",
        },
        {
          title: "Gels não testados",
          description:
            "Inclua apenas sabores e marcas usados no longão específico; qualquer novidade aumenta risco de desconforto.",
        },
        {
          title: "Faltou estação",
          description:
            "Caso perca um posto, replaneje: ingerir meio gel e segurar até o próximo para evitar sobrecarga estomacal.",
        },
      ],
    },
  },
  {
    id: "nutrition-ultra",
    label: "Ultra",
    props: {
      title: "Nutrição para ultramaratonas",
      distanceTag: "Ultramaratona",
      description:
        "Provas acima de 42 km (trail, 50k, 80k, 100k) exigem plano híbrido com comidas sólidas, líquidos variados e adaptação térmica.",
      goal:
        "Manter ingestão contínua de carboidratos (50-70 g/h) com suporte de gordura e proteína leve para retardar catabolismo.",
      rationale:
        "Combinar fontes sólidas, semissólidas e líquidas diminui enjoo, estabiliza glicemia e previne queda cognitiva em esforços prolongados.",
      focusPoints: [
        "Planejamento alimentar de 4-5 dias com carb loading e aumento de sódio.",
        "Tabela de abastecimento por base (drop bag) com alimentos variados.",
        "Estratégia de ingestão 45-60 g de carbo/h + proteína leve a cada 3 h.",
        "Recuperação pós-prova com reposição agressiva de líquidos, eletrólitos e calorias.",
      ],
      preparation: {
        title: "Antes da prova",
        intro:
          "Organize logística com antecedência: kits de combustível para cada trecho e comida real.",
        blocks: [
          {
            title: "5-3 dias antes",
            description:
              "Carb loading progressivo (6 -> 8 g/kg) com alimentos familiares.",
            bullets: [
              "Inclua fontes variadas: arroz, massa, batata, mandioca, frutas, pães.",
              "Aumente sódio com caldos, sopas leves e cápsulas se clima quente.",
              "Teste snacks sólidos (wrap, pão com pasta) em treinos longos.",
            ],
          },
          {
            title: "48-24 horas",
            description:
              "Ajuste logística: separe alimentos por sacos numerados conforme bases.",
            bullets: [
              "Monte combos (gel + barra + cápsula) para cada trecho.",
              "Considere opções salgadas (batata, mini sanduíches) e doces.",
            ],
          },
          {
            title: "Refeição pré-prova (3-4 h antes)",
            description:
              "Coma bastante carboidrato com média proteína e sódio elevado.",
            bullets: [
              "Arroz + ovos + banana + isotônico, panquecas com mel + whey em água.",
              "Beba 600 ml de bebida eletrolítica até 60 minutos antes.",
            ],
          },
          {
            title: "Última hora",
            description:
              "Finalize com gel ou bebida rápida e confirmações de kit.",
            bullets: [
              "Carboidrato rápido (20-25 g) + cápsula de sal se clima severo.",
              "Cheque equipamentos, drop bags e ingestões planejadas.",
            ],
          },
        ],
      },
      raceExecution: {
        title: "Durante a prova",
        intro:
          "Adapte a ingestão ao terreno e temperatura, priorizando variedade para evitar enjoos.",
        blocks: [
          {
            title: "Carboidratos",
            description:
              "Mire 45-60 g/h em trechos mais leves e até 70 g/h em trechos corríveis.",
            bullets: [
              "Combine géis, bebidas isotônicas, batata cozida, purê, pão com mel.",
              "Misture fontes de glicose e frutose para facilitar absorção.",
            ],
          },
          {
            title: "Proteína e gordura leve",
            description:
              "A cada 3 horas, ingira 5-10 g de proteína e pequena dose de gordura.",
            bullets: [
              "Sanduíche mini com peito de peru, queijo leve, castanhas, cápsulas de aminoácidos.",
              "Ajuda a reduzir sensação de fome e preservar massa magra.",
            ],
          },
          {
            title: "Hidratação e sódio",
            description:
              "Planeje 400-600 ml/h com 500-700 mg de sódio, variando por clima.",
            bullets: [
              "Use mochila com duas garrafas: água e isotônico/ bebida com carb.",
              "Inclua cápsulas extra em subidas longas e trechos muito quentes.",
            ],
          },
          {
            title: "Bases e drop bags",
            description:
              "Reabasteça, troque meia/seca, consuma alimentos sólidos maiores.",
            bullets: [
              "Sopas salgadas, macarrão instantâneo, arroz com salmão, batata com sal.",
              "Aproveite para ingerir cafeína se estiver habituado (doses pequenas).",
            ],
          },
        ],
      },
      recovery: {
        title: "Depois da prova",
        intro:
          "Plano de recuperação deve durar pelo menos 48 horas.",
        blocks: [
          {
            title: "0-30 minutos",
            description:
              "Reidratação com bebidas eletrolíticas e carboidrato líquido.",
            bullets: [
              "Isotônico forte + água de coco + gel com proteína.",
              "Se tolerar, sopa quente salgada repõe sódio rapidamente.",
            ],
          },
          {
            title: "1-3 horas",
            description:
              "Refeição calórica com carboidrato complexo, proteína e vegetais.",
            bullets: [
              "Arroz, massa ou batata + carne magra + legumes cozidos.",
              "Inclua frutas e alimentos antioxidantes.",
            ],
          },
          {
            title: "24-48 horas",
            description:
              "Snacks ricos em proteína a cada 3 horas, suplementação de eletrólitos e muita água.",
            bullets: [
              "Iogurte proteico, ovos, shakes, caldos salgados.",
              "Magnésio, zinco e ômega-3 auxiliam recuperação inflamatória.",
            ],
          },
        ],
      },
      supplements: [
        "Cafeína em micro doses (100 mg) a cada 2-3 horas, se costume.",
        "Géis com mix de maltodextrina + frutose + sódio para atingir 70 g/h.",
        "BCAA ou EAA em cápsulas a cada 3 horas para reduzir catabolismo.",
        "Tabletes de eletrólitos extras em trechos muito quentes.",
      ],
      watchouts: [
        "Deixar a alimentação solidamente só em géis gera enjoo após 6-8 horas.",
        "Ignorar proteína nas bases em provas longas acelera perda muscular.",
        "Não marque drop bags pode resultar em falta de combustível adequado.",
      ],
      glossary: [
        {
          term: "Drop bag",
          description: "Bolsa entregue à organização com suprimentos em bases específicas.",
        },
        {
          term: "Crew",
          description: "Equipe de apoio responsável por logística de alimentos e hidratação.",
        },
        {
          term: "Trail mix",
          description: "Mistura de castanhas, frutas secas e chocolates usada em ultras.",
        },
      ],
      tables: [
        {
          title: "Plano base de ingestão por hora",
          caption:
            "Use como referência e ajuste à disponibilidade de bases e drop bags.",
          headers: ["Momento", "Carboidrato", "Proteína/Gordura", "Observações"],
          rows: [
            [
              "Pré-largada (45 min)",
              "Gel 25 g + bebida eletrolítica",
              "—",
              "Finalize líquidos 15 min antes da largada.",
            ],
            [
              "Cada 45-60 min",
              "Gel 25 g ou 150 ml bebida com carbo",
              "—",
              "Alterne formatos para evitar enjoo.",
            ],
            [
              "A cada 3 horas",
              "Sanduíche leve ou purê de batata (20 g carb)",
              "5-8 g proteína + 3 g gordura",
              "Pão com peito de peru, queijo leve, castanhas.",
            ],
            [
              "Bases principais",
              "Macarrão, arroz, batata cozida",
              "Sopa leve com proteína",
              "Aproveite para ingerir sódio extra e líquidos quentes.",
            ],
            [
              "Noite/Madrugada",
              "Bebida quente com maltodextrina",
              "Chocolate meio amargo ou manteiga de amendoim",
              "Ajuda na termorregulação em temperaturas baixas.",
            ],
          ],
        },
      ],
      alerts: [
        {
          title: "Terrain técnico ou frio intenso",
          description:
            "Aumente ingestão de gordura leve (castanhas, manteiga de amendoim) para preservar calor e use bebidas quentes nas bases.",
        },
        {
          title: "Perda de apetite",
          description:
            "Alternar doce/salgado e texturas ajuda; inclua sopas, caldos e frutas cítricas para 'limpar' o paladar.",
        },
        {
          title: "Sódio insuficiente",
          description:
            "Sintomas como mãos inchadas ou câimbras indicam ajuste; aumente cápsulas de eletrólitos e monitore urina.",
        },
      ],
    },
  },
];

const nutritionGuideSubsections: SubsectionContent[] = guides.map(
  ({ id, label, props }) => ({
    id,
    label,
    component: NutritionDistanceGuide,
    props,
  })
);

export default nutritionGuideSubsections;
