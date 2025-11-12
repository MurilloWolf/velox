import { CheckCircle } from "lucide-react";

interface ErrorDisplayProps {
  errorMessage: string | null;
  customerEmail: string;
  productTitle: string;
  accentColor?: "green" | "yellow";
}

export default function ErrorDisplay({
  errorMessage,
  customerEmail,
  productTitle,
  accentColor = "green",
}: ErrorDisplayProps) {
  if (!errorMessage) return null;

  const colors = {
    green: {
      emailHighlight: "text-green-200",
    },
    yellow: {
      emailHighlight: "text-[#f6ff8d]",
    },
  };

  const colorScheme = colors[accentColor];

  const isAlreadyPurchased =
    errorMessage === "already_purchased" ||
    errorMessage.toLowerCase().includes("purchase already exists") ||
    errorMessage.toLowerCase().includes("já adquiriu") ||
    errorMessage.toLowerCase().includes("already purchased");

  if (isAlreadyPurchased) {
    return (
      <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6 space-y-4">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-3">
            <div>
              <h4 className="text-amber-200 font-semibold text-base mb-2">
                Você já possui este conteúdo!
              </h4>
              <p className="text-amber-100/90 text-sm leading-relaxed">
                Este email já foi usado para adquirir este material
                anteriormente. Verifique sua caixa de entrada (incluindo spam)
                para encontrar o email com os links de acesso.
              </p>
            </div>

            <div className="space-y-2 text-sm">
              <p className="text-amber-100/80">
                <strong>Não encontrou o email?</strong> Aqui estão algumas
                dicas:
              </p>
              <ul className="list-disc list-inside space-y-1 text-amber-100/70 ml-2">
                <li>Verifique sua pasta de spam ou lixo eletrônico</li>
                <li>
                  Procure por emails de &quot;{productTitle}&quot; ou nosso
                  domínio
                </li>
                <li>
                  Confirme se digitou o email correto:{" "}
                  <strong className="text-amber-200">{customerEmail}</strong>
                </li>
              </ul>
            </div>

            <div className="pt-2 border-t border-amber-500/20">
              <p className="text-amber-100/80 text-sm">
                <strong>Ainda precisa de ajuda?</strong> Entre em contato com
                nosso suporte e informe o email{" "}
                <strong className={colorScheme.emailHighlight}>
                  {customerEmail}
                </strong>
                para reenviarmos o acesso.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
      {errorMessage}
    </div>
  );
}
