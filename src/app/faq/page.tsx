import type { Metadata } from "next";

import { Header, Footer, Chat } from "@/components/system";
import { buildMetadata } from "@/lib/seo";

const faqs = [
  {
    question: "Como o VELOX encontra e atualiza as corridas?",
    answer:
      "Monitoramos calendários oficiais, inscrições abertas e recebemos contribuições da comunidade. As provas são organizadas e revisadas semanalmente pela equipe antes de aparecerem no bot.",
  },
  {
    question: "Preciso pagar para usar o VELOX Bot no Telegram?",
    answer:
      "Não. Todas as funcionalidades do bot – busca de corridas, alertas, favoritos, dicas de treino e de nutrição – são gratuitas. Você pode apoiar o projeto com doações opcionais.",
  },
  {
    question: "Como recebo alertas das minhas provas favoritas?",
    answer:
      "Dentro do bot, utilize o comando /favoritos para salvar uma corrida. O VELOX envia lembretes automáticos antes da data da prova e compartilha atualizações sempre que houver mudanças importantes.",
  },
  {
    question: "Posso sugerir uma corrida que ainda não está listada?",
    answer:
      "Sim! Abra o bot, envie o comando /adicionar_corrida ou entre em contato pelos nossos canais oficiais. Basta informar nome, cidade, distância, data e link de inscrição.",
  },
  {
    question: "Meus dados ficam protegidos ao conversar com o bot?",
    answer:
      "Coletamos apenas informações necessárias para operar o serviço, respeitando a LGPD. Você pode solicitar exclusão ou alteração dos seus dados a qualquer momento pelo e-mail velox.running.app@gmail.com.",
  },
  {
    question: "Quais dispositivos são compatíveis?",
    answer:
      "O VELOX funciona em qualquer aparelho que execute o Telegram (iOS, Android, desktop ou web). O site é responsivo e otimizado para telas menores, leitores de tela e alto contraste.",
  },
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
} as const;

export const metadata: Metadata = buildMetadata({
  title: "Perguntas frequentes - VELOX Corridas",
  description:
    "Tire dúvidas sobre o VELOX Corridas, saiba como usar o bot no Telegram e como acompanhar novos eventos.",
  keywords: ["faq velox", "perguntas corridas bot", "suporte velox"],
  path: "/faq",
  image: "/velox_x.png",
});

export default function FaqaPage() {
  return (
    <div className="min-h-screen bg-[#000] ">
      <Header />
      <main
        id="conteudo-principal"
        className="relative z-10 bg-gradient-to-b from-black via-[#050505] to-transparent"
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </main>
      <Chat />
      <Footer />
    </div>
  );
}
