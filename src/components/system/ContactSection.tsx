"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Instagram } from "lucide-react";

export default function ContactSection() {
  const handleInstagram = () => {
    window.open("https://www.instagram.com/runningvelox/", "_blank");
  };

  const handleMailTo = () => {
    window.location.href = "mailto:velox.running.app@gmail.com";
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-black/60">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <MessageSquare className="mx-auto mb-4 h-20 w-20 text-[#d5fe46]   shadow-lg p-2 " />
            <h2 className="mb-4 text-balance font-sans text-3xl font-bold  text-white text-shadow-[0_0_8px_#d5fe46] md:text-4xl">
              Entre em Contato
            </h2>
            <p className="text-pretty text-lg text-white/90 leading-relaxed">
              Tem alguma dúvida, sugestão ou quer adicionar uma corrida? Fale
              conosco!
            </p>
          </div>

          <div className="flex flex-col justify-evenly gap-6 mb-12 sm:w-4/4 sm:flex-row ">
            <Card className="w-full sm:w-2/4 bg-white/10 backdrop-blur-md rounded-lg border border-white/10 shadow-lg">
              <CardHeader>
                <CardTitle
                  className="text-lg flex items-center gap-2 text-white"
                  style={{ textShadow: "0 0 8px #C864FF" }}
                >
                  <Instagram
                    className="h-5 w-5 text-white"
                    style={{ filter: "drop-shadow(0 0 8px #C864FF)" }}
                  />
                  Instagram
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white font-normal mb-4">
                  Envie uma mensagem direta para nosso perfil
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent cursor-pointer text-white border-white/20 hover:border-white/40 hover:text-black"
                  onClick={handleInstagram}
                >
                  @RunningVelox
                </Button>
              </CardContent>
            </Card>

            <Card className="w-full sm:w-2/4 bg-white/10 backdrop-blur-md rounded-lg border border-white/10 shadow-lg">
              <CardHeader>
                <CardTitle
                  className="text-lg flex items-center gap-2 text-white"
                  style={{ textShadow: "0 0 8px #364ff2" }}
                >
                  <Mail
                    className="h-5 w-5 text-white"
                    style={{ filter: "drop-shadow(0 0 8px #364ff2)" }}
                  />
                  E-mail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white mb-4">
                  Prefere e-mail? Envie sua mensagem para:
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent cursor-pointer text-white border-white/20 hover:border-white/40 hover:text-black"
                  onClick={handleMailTo}
                >
                  velox.running.app@gmail.com
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
