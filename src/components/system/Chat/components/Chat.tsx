"use client";

import MeshGradient from "../../MashGradiant";
import ChatPanel from "./ChatPanel";

export default function FAQChat() {
  return (
    <MeshGradient>
      <div className="p-2 flex h-[calc(100vh-4rem)] md:h-screen flex-col">
        <ChatPanel variant="full" />
      </div>
    </MeshGradient>
  );
}
