export type Message = {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
  format?: "text" | "html";
};
