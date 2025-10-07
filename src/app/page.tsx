import type { Metadata } from "next";

import {
  Header,
  Hero,
  CtaSection,
  DonationSection,
  ContactSection,
  Footer,
  PlatformFeatures,
  BotShowcase,
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
      <Header />
      <main className="min-h-screen" id="conteudo-principal">
        <Hero />
        <BotShowcase />
        <PlatformFeatures />
        <CtaSection />
        <DonationSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
