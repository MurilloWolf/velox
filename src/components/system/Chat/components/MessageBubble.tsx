import { Message } from "../types";
export interface IMessageBubbleProps {
  message: Message;
}

export default function MessageBubble(props: IMessageBubbleProps) {
  const { message } = props;
  const isHtml = message.format === "html" && message.sender === "bot";

  return (
    <div
      className={`flex max-w-[70%] rounded-lg px-1 py-2 flex-col bg-black/20 text-white break-words overflow-hidden ${
        message.sender === "user" ? "items-end" : "items-start"
      }`}
    >
      <div
        className={`rounded-2xl text-md px-2 ${
          message.sender === "bot"
            ? "bg-[var(--bot-message)] text-foreground"
            : "bg-[var(--user-message)] text-foreground"
        }`}
      >
        {isHtml ? (
          <div
            className={`chat-html text-sm md:text-md leading-relaxed whitespace-pre-wrap break-words ${
              message.sender === "user" ? "text-white/60" : "text-white"
            }`}
            dangerouslySetInnerHTML={{ __html: message.text }}
          />
        ) : (
          <p
            className={`text-sm md:text-md leading-relaxed whitespace-pre-wrap break-words ${
              message.sender === "user" ? "text-white/60" : "text-white"
            }`}
          >
            {message.text}
          </p>
        )}
      </div>
      <span
        className={`text-xs px-2 pt-0 pb-1 ${
          message.sender === "user" ? "text-white/60" : "text-white"
        }`}
      >
        {message.timestamp.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
    </div>
  );
}
