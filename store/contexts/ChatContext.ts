import React from "react";

export interface Chat {
  sender: string;
  message: string;
  time: Date;
}

export interface ChatContextInterface {
  chatState: {
    messages: Chat[];
  };
}

export const ChatContext = React.createContext<ChatContextInterface | null>(
  null
);
