import type { Metadata } from "next";
import type { ReactNode } from "react";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Patrocine o VELOX Corridas - mídia para eventos esportivos",
  description:
    "Conheça oportunidades de patrocínio e mídia do VELOX Corridas para divulgar provas e marcas para corredores.",
  keywords: [
    "patrocínio corridas",
    "mídia esportiva",
    "patrocinar eventos de corrida",
    "publicidade corrida de rua",
  ],
  path: "/sponsors",
  image: "/velox_x.png",
});

export default function SponsorsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

