import type { Metadata } from "next";
import type { ReactNode } from "react";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Como funciona o VELOX Bot - Comandos e recursos",
  description:
    "Conheça os comandos do VELOX Bot no Telegram, veja como salvar corridas e aproveite dicas exclusivas para corredores.",
  keywords: [
    "comandos velox",
    "bot de corrida telegram",
    "como usar velox",
    "tips para corredores",
  ],
  path: "/info",
  image: "/velox_x.png",
});

export default function InfoLayout({ children }: { children: ReactNode }) {
  return children;
}
