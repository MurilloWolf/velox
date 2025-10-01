import { Header, Footer } from "@/components/system";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
  const lastUpdate = "2025-09-30";
  return (
    <div className="min-h-screen bg-[#000] ">
      <Header />
      <section className="relative py-16 ">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-[#d5fe46] mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Política de Privacidade
            </h1>
            <p className="text-lg text-muted-foreground">
              Última atualização:{" "}
              {new Date(lastUpdate).toLocaleDateString("pt-BR")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="bg-[#121212]/70 backdrop-blur-lg rounded-t-xl p-8 md:p-12 shadow-sm space-y-8 ">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    1. Introdução
                  </h2>
                  <p className="text-white/60 leading-relaxed">
                    A sua privacidade é importante para nós. Esta Política de
                    Privacidade explica como coletamos, utilizamos e protegemos
                    os dados fornecidos pelos usuários ao interagir com o Velox
                    Bot no Telegram, seja em conversas privadas ou em grupos. Ao
                    utilizar nosso bot, você declara estar ciente e de acordo
                    com os termos descritos abaixo.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    2. Dados que Coletamos
                  </h2>
                  <p className="text-white/60 leading-relaxed mb-3">
                    Coletamos diferentes tipos de informações para fornecer e
                    melhorar nossos serviços:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-white/60 ml-4">
                    <li>
                      <strong>Informações do Telegram:</strong> ID do usuário,
                      nome de usuário (nome público escolhido pelo usuário).
                    </li>
                    <li>
                      <strong>
                        Mensagens enviadas ao bot em conversas privadas;
                      </strong>{" "}
                      Interações com o bot, comandos utilizados, mensagens
                      enviadas e recebidas
                    </li>
                    <li>
                      <strong>
                        Mensagens e interações realizadas em grupos nos quais o
                        bot esteja associado;
                      </strong>{" "}
                      Interações com o bot, comandos utilizados, mensagens
                      enviadas e recebidas
                    </li>
                    <li>
                      <strong>Datas e horários de envio das mensagens</strong>{" "}
                      <em>para melhor entendimento do contexto</em>
                    </li>
                    <li>
                      <strong>Interações realizadas dentro do bot</strong>,,
                      incluindo cliques em botões e comandos executados.
                    </li>
                    <li>
                      <strong>Dados de Pagamento:</strong> Informações de
                      assinatura e transações (processadas por terceiros
                      seguros)
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    3. Base Legal para o Tratamento de Dados
                  </h2>
                  <p className="text-white/60 leading-relaxed mb-3">
                    O tratamento dos dados pessoais realizado pelo Velox Bot
                    fundamenta-se nas seguintes hipóteses previstas na LGPD:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-white/60 ml-4">
                    <li>
                      <strong>Consentimento do usuário (art. 7º, I)</strong>, ao
                      utilizar o bot e aceitar esta Política de Privacidade;
                    </li>
                    <li>
                      <strong>
                        Legítimo interesse do controlador (art. 7º, IX)
                      </strong>
                      , para possibilitar o funcionamento adequado do serviço,
                      análise de uso e melhoria contínua da experiência.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    4. Compartilhamento de Informações
                  </h2>
                  <p className="text-white/60 leading-relaxed mb-3">
                    Não utilizamos os dados para fins comerciais, nem vendemos
                    ou compartilhamos informações com terceiros sem
                    consentimento expresso. Podemos compartilhar dados apenas
                    nas seguintes situações:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-white/60 ml-4">
                    <li>
                      <strong>Organizadores de Corridas:</strong> Informações
                      agregadas e anônimas para fins estatísticos
                    </li>
                    <li>
                      <strong>Parceiros e Patrocinadores:</strong> Dados
                      demográficos agregados sem identificação pessoal
                    </li>
                    <li>
                      <strong>Provedores de Serviço:</strong> Empresas que nos
                      auxiliam (hospedagem, pagamentos, análise)
                    </li>
                    <li>
                      <strong>Requisitos Legais:</strong> Quando exigido por lei
                      ou para proteger direitos legais
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    5. Retenção dos Dados
                  </h2>
                  <p className="text-white/60 leading-relaxed">
                    Os dados serão armazenados apenas pelo tempo necessário para
                    atender às finalidades descritas nesta política, ou até que
                    o usuário solicite sua exclusão.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    6. Armazenamento e Segurança
                  </h2>

                  <ul className="list-disc list-inside space-y-2 text-white/60 ml-4">
                    <li>
                      Os dados são armazenados em ambiente seguro, adotando
                      medidas técnicas e organizacionais adequadas para prevenir
                      acessos não autorizados.
                    </li>
                    <li>
                      O acesso às informações é restrito apenas à equipe
                      responsável pelo funcionamento do Velox Bot.
                    </li>
                    <li>
                      Caso sejam utilizados servidores localizados fora do
                      Brasil, poderá haver transferência internacional de dados,
                      sempre em conformidade com a LGPD e com garantias de
                      proteção adequadas.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    7. Direitos do Usuário
                  </h2>
                  <p className="text-white/60 leading-relaxed">
                    Nos termos da LGPD, o usuário tem direito a:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-white/60 ml-4">
                    <li>
                      Confirmar a existência de tratamento de dados pessoais
                    </li>
                    <li>
                      Solicitar acesso, correção ou exclusão de suas
                      informações;
                    </li>
                    <li>Revogar o consentimento a qualquer momento;</li>
                    <li>
                      Solicitar a anonimização, bloqueio ou eliminação de dados
                      desnecessários, excessivos ou tratados em desconformidade
                      com a LGPD
                    </li>
                  </ul>
                  <p className="text-white/60 leading-relaxed mt-3">
                    Para exercer seus direitos, entre em contato conosco através
                    do email ou Telegram indicados na seção 11.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    8. Cookies e Tecnologias Similares
                  </h2>
                  <p className="text-white/60 leading-relaxed">
                    Utilizamos cookies e tecnologias similares para melhorar sua
                    experiência, analisar o uso da plataforma e personalizar
                    conteúdo. Você pode controlar o uso de cookies através das
                    configurações do seu navegador.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    9. Menores de Idade
                  </h2>
                  <p className="text-white/60 leading-relaxed">
                    Nossos serviços não são direcionados a menores de 13 anos.
                    Não coletamos intencionalmente informações de crianças. Se
                    você acredita que coletamos dados de um menor, entre em
                    contato conosco imediatamente.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    10. Alterações nesta Política
                  </h2>
                  <p className="text-white/60 leading-relaxed">
                    Esta Política de Privacidade pode ser alterada a qualquer
                    momento, sendo a versão mais recente sempre publicada em
                    nossa homepage. Recomendamos a revisão periódica deste
                    documento.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    11. Contato
                  </h2>
                  <p className="text-white/60 leading-relaxed">
                    Se você tiver dúvidas sobre esta Política de Privacidade ou
                    sobre como tratamos seus dados pessoais, entre em contato
                    conosco:
                  </p>
                  <div className="mt-4 p-4 bg-[#121212]/50 rounded-lg">
                    <p className="text-white/70">
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:velox.running.app@gmail.com"
                        className="text-white hover:underline"
                      >
                        velox.running.app@gmail.com
                      </a>
                    </p>
                    <p className="text-white/60 mt-2">
                      <strong>Instagram:</strong>{" "}
                      <a
                        href="https://t.me/veloxsupport"
                        className="text-white hover:underline"
                      >
                        @runningvelox
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-b-xl p-4 bg-[#121212]">
                <p className="text-sm text-white/50 text-center">
                  Esta política está em conformidade com a Lei Geral de Proteção
                  de Dados (LGPD) e regulamentações internacionais de
                  privacidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
