interface LoadingStateProps {
  email: string;
  title?: string;
  description?: string;
  accentColor?: "green" | "yellow";
}

export default function LoadingState({
  email,
  title = "Finalizando seu acesso...",
  description = "Estamos preparando tudo para você!",
  accentColor = "green",
}: LoadingStateProps) {
  const colors = {
    green: {
      ringFrom: "from-green-400/20",
      ringTo: "to-green-500/10",
      border: "border-green-400/30",
      shadow: "shadow-[0_20px_70px_-20px_rgba(74,222,128,0.35)]",
      spinnerBorder: "border-green-400/30",
      spinnerTop: "border-t-green-400",
      pingBorder: "border-green-400/20",
      title: "text-green-400",
      email: "text-green-200",
      dots: "bg-green-400",
    },
    yellow: {
      ringFrom: "from-[#d5fe46]/20",
      ringTo: "to-[#f05a24]/10",
      border: "border-[#d5fe46]/30",
      shadow: "shadow-[0_20px_70px_-20px_rgba(213,254,70,0.35)]",
      spinnerBorder: "border-[#d5fe46]/30",
      spinnerTop: "border-t-[#d5fe46]",
      pingBorder: "border-[#d5fe46]/20",
      title: "text-[#d5fe46]",
      email: "text-[#f6ff8d]",
      dots: "bg-[#d5fe46]",
    },
  };

  const colorScheme = colors[accentColor];

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 py-10 px-4 sm:px-6">
      <div className="text-center space-y-6">
        <div className="relative">
          <div
            className={`rounded-full w-24 h-24 bg-gradient-to-br ${colorScheme.ringFrom} ${colorScheme.ringTo} backdrop-blur-xl ${colorScheme.border} flex items-center justify-center mx-auto ${colorScheme.shadow}`}
          >
            <div
              className={`w-8 h-8 border-3 ${colorScheme.spinnerBorder} ${colorScheme.spinnerTop} rounded-full animate-spin`}
            ></div>
            <div
              className={`absolute inset-0 rounded-full border-2 ${colorScheme.pingBorder} animate-ping`}
            ></div>
          </div>
        </div>

        <div className="space-y-4">
          <h3
            className={`text-3xl font-bold ${colorScheme.title} animate-pulse`}
          >
            {title}
          </h3>
          <div className="space-y-2">
            <p className="text-slate-200 text-lg leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
            <p className="text-base max-w-xl mx-auto">
              Em instantes você será redirecionado para acessar seu conteúdo
              enviado para{" "}
              <strong className={colorScheme.email}>{email}</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <div
            className={`w-2 h-2 ${colorScheme.dots} rounded-full animate-bounce [animation-delay:-0.3s]`}
          ></div>
          <div
            className={`w-2 h-2 ${colorScheme.dots} rounded-full animate-bounce [animation-delay:-0.15s]`}
          ></div>
          <div
            className={`w-2 h-2 ${colorScheme.dots} rounded-full animate-bounce`}
          ></div>
        </div>
      </div>

      <div className="text-center space-y-2 max-w-md">
        <p className="text-xs text-white/60">
          Caso não seja redirecionado automaticamente, verifique o email enviado
          com os links de acesso.
        </p>
      </div>
    </div>
  );
}
