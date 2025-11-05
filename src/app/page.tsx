import type { Metadata } from "next";

import {
  Header,
  Hero,
  CtaSection,
  ContactSection,
  Footer,
  PlatformFeatures,
  BotShowcase,
  PageTracker,
} from "@/components/system";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "VELOX Corridas - Calendário, dicas e bot no Telegram",
  description:
    "Encontre corridas em todo o Brasil, receba alertas no Telegram e organize seus treinos com o VELOX Corridas.",
  keywords: [
    "velox corridas",
    "bot de corrida",
    "corridas no telegram",
    "agenda de corridas",
    "eventos de corrida Brasil",
  ],
  path: "/",
  image: "/velox_x.png",
});

export default function Home() {
  return (
    <>
      <PageTracker pagePath="/" />
      <Header />
      <main className="min-h-screen" id="conteudo-principal">
        <Hero />
        <BotShowcase />
        <PlatformFeatures />
        <CtaSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
