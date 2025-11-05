"use client";
import { Heart, Github, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
import useAnalytics from "@/tracking/useAnalytics";
import { AnalyticsActions } from "@/tracking/types";

export default function Footer() {
  const { trackEvent } = useAnalytics();

  const handleTrackClick = (
    href: string,
    targetType: string = "EXTERNAL_LINK"
  ) => {
    trackEvent({
      action: AnalyticsActions.BUTTON_CLICK,
      targetType: targetType,
      targetId: "FOOTER:" + href,
      pagePath: window.location.pathname,
    });
  };

  const handleExternalLinkClick = (href: string, destiny: string) => {
    handleTrackClick(destiny, "EXTERNAL_LINK");
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const handleInternalLinkClick = (href: string) => {
    handleTrackClick(href, "LINK");
    window.location.href = href;
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image
              src="https://velox-images-bucket.s3.sa-east-1.amazonaws.com/public/logo-transparent-velox.png"
              alt="Logotipo do VELOX Corridas"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-xs text-background/80 leading-relaxed ">
              ⚡ Seu assistente de corridas no Telegram.
              <br /> Encontre, gerencie e receba notificações de corridas.
            </p>
            <p className="text-xs text-background/80 leading-relaxed mb-4">
              Tudo de forma rápida, fácil e gratuita!
            </p>
            <div className="flex gap-4">
              <button
                onClick={() =>
                  handleExternalLinkClick(
                    "https://github.com/MurilloWolf",
                    "GITHUB"
                  )
                }
                aria-label="GitHub do VELOX"
                className="hover:text-[#d5fe46] transition-colors cursor-pointer"
              >
                <Github className="h-5 w-5" />
              </button>
              <button
                onClick={() =>
                  handleExternalLinkClick(
                    "https://twitter.com/RunningVelox",
                    "TWITTER"
                  )
                }
                aria-label="Perfil do VELOX no X"
                className="hover:text-[#d5fe46] transition-colors cursor-pointer"
              >
                <Twitter className="h-5 w-5" />
              </button>
              <button
                onClick={() =>
                  handleExternalLinkClick(
                    "https://www.instagram.com/runningvelox/",
                    "INSTAGRAM"
                  )
                }
                aria-label="Instagram do VELOX"
                className="hover:text-[#d5fe46] transition-colors cursor-pointer"
              >
                <Instagram className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-[#d5fe46]">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <button
                  onClick={() => handleInternalLinkClick("/info")}
                  className="hover:text-[#d5fe46] transition-colors cursor-pointer"
                >
                  Sobre o Bot
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleInternalLinkClick("/#recursos")}
                  className="hover:text-[#d5fe46] transition-colors cursor-pointer"
                >
                  Como Funciona
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleInternalLinkClick("#contato")}
                  className="hover:text-[#d5fe46] transition-colors cursor-pointer"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-[#d5fe46]">Legal</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <button
                  onClick={() => handleInternalLinkClick("/privacy")}
                  className="hover:text-[#d5fe46] transition-colors cursor-pointer"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleInternalLinkClick("/faq")}
                  className="hover:text-[#d5fe46] transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p className="flex items-center justify-center gap-2">
            Feito com{" "}
            <Heart className="h-4 w-4 text-[#d5fe46] fill-[#d5fe46]" /> para a
            comunidade de corredores
          </p>
          <p className="mt-2">© 2025 VELOX. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
