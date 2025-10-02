import { Heart, Github, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import veloxLogo from "../../../public/Velox.png";
export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image
              src={veloxLogo}
              alt="VELOX"
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
              <a
                href="https://github.com/MurilloWolf"
                target="_blank"
                className="hover:text-[#d5fe46] transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/RunningVelox"
                target="_blank"
                className="hover:text-[#d5fe46] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/runningvelox/"
                target="_blank"
                className="hover:text-[#d5fe46] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-[#d5fe46]">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#" className="hover:text-[#d5fe46] transition-colors">
                  Sobre o Bot
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d5fe46] transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d5fe46] transition-colors">
                  Adicionar Corrida
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:text-[#d5fe46] transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-[#d5fe46]">Legal</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#d5fe46] transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#d5fe46] transition-colors">
                  FAQ
                </a>
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
