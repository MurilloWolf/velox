import { Send } from "lucide-react";
import { Button, Input } from "@/components/ui";

interface IChatInputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleSendMessage: () => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export default function ChatInput(props: IChatInputProps) {
  const { setInputValue, handleSendMessage, handleKeyPress, disabled } = props;
  return (
    <div className="rounded-b-2xl border-t border-white/10 bg-black/10 px-4 py-4 backdrop-blur-xl">
      <div className="mx-auto flex max-w-4xl items-center gap-3">
        <Input
          value={props.inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          maxLength={120}
          placeholder="Digite sua pergunta..."
          className="flex-1 border border-transparent bg-transparent text-xl text-white placeholder:text-white/60 shadow-none focus:border-transparent focus:outline-none focus:shadow-none focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none"
          disabled={disabled}
        />
        <Button
          onClick={handleSendMessage}
          size="icon"
          className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90"
          disabled={disabled}
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
