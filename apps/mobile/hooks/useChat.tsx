import { useState } from "react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  contentType:
    | "text"
    | "startingForm"
    | "portionSizeForm"
    | "recipePreferenceForm";
  content?: string;
}

const startingMessages: ChatMessage[] = [
  {
    id: "1",
    role: "assistant",
    contentType: "startingForm",
  },
];

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>(startingMessages);

  const addMessage = (message: ChatMessage) => {
    setMessages((prev) => [...prev, message]);
  };

  return {
    messages,
    addMessage,
  };
}
