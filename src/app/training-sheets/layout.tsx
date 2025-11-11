import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ChatWidget, Footer, Header } from "@/components/system";

export const metadata: Metadata = buildMetadata({
  title: "Planilhas de Treino - VELOX Corridas",
  description:
    "Planilhas de treino profissionais para corredores. Do iniciante ao avançado, acelere seus resultados com treinos estruturados por especialistas.",
  keywords: [
    "planilhas de treino",
    "treino de corrida",
    "planilha de corrida",
    "treino personalizado",
    "coaching de corrida",
  ],
  path: "/training-sheets",
  image: "/velox_x.png",
});

export default function TrainingSheetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      <ChatWidget />
      {children}
      <Footer />
    </div>
  );
}
