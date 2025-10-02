import { Bot, User } from "lucide-react";
import { Message } from "./types";

interface IAvatarProps {
  message: Message;
}
export default function Avatar(props: IAvatarProps) {
  const { message } = props;
  return (
    <div
      className={`flex bg-[#d5fe46] h-10 w-10 shrink-0 items-center justify-center rounded-full ${
        message.sender === "bot" ? "bg-[#d5fe46]" : "bg-white/60"
      }`}
    >
      {message.sender === "bot" ? (
        <Bot className="h-5 w-5 text-black font-bold stroke-2" />
      ) : (
        <User className="h-5 w-5 text-black font-bold stroke-2" />
      )}
    </div>
  );
}
