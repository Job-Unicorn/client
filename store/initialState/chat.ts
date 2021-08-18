import { Chat } from "../contexts/ChatContext";

export interface ChatState {
  messages: Chat[];
}

export const ChatInitialState: ChatState = { messages: [] };
