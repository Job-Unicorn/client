import React from "react";
import { ChatState } from "../initialState/chat";

export interface Chat {
  sender: string;
  message: string;
  time: Date;
}

export interface ChatContextInterface {
  chatState: ChatState;
}

export const ChatContext = React.createContext<ChatContextInterface | null>(
  null
);
