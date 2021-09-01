import React from "react";
import { ChatInitialState, ChatState } from "../state/chat";

export interface Chat {
  id: string;
  sender: string;
  message: string;
  time: Date;
}

export interface ChatContextInterface {
  chatState: ChatState;
  chatDispatch: Function;
}

export const ChatContext = React.createContext<ChatContextInterface>({
  chatState: ChatInitialState,
  chatDispatch: () => {},
});
