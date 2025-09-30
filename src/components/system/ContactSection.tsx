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
    <section id="contato" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <MessageSquare className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-4 text-balance font-sans text-3xl font-bold text-foreground md:text-4xl">
              Entre em Contato
            </h2>
            <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
              Tem alguma dúvida, sugestão ou quer adicionar uma corrida? Fale
              conosco!
            </p>
          </div>

          <div className="flex flex-col justify-evenly gap-6 mb-12 sm:w-4/4 sm:flex-row ">
            <Card className="w-full sm:w-2/4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Instagram className="h-5 w-5 text-primary" />
                  Instagram
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Envie uma mensagem direta para nosso perfil no Instagram:
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent cursor-pointer"
                  onClick={handleInstagram}
                >
                  @RunningVelox
                </Button>
              </CardContent>
            </Card>

            <Card className="w-full sm:w-2/4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  E-mail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Prefere e-mail? Envie sua mensagem para:
                  <br />
                  <br />
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent cursor-pointer"
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
