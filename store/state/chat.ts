import { Chat } from "../contexts/ChatContext";

export interface ChatState {
  messages: Chat[];
}

export const ChatInitialState: ChatState = {
  messages: [
    {
      id: "something",
      message: "A random message",
      sender: "Aarush",
      time: new Date(Date.now()),
    },
    {
      id: "something2",
      message: "A random message",
      sender: "Not Aarush",
      time: new Date(Date.now()),
    },
  ],
};
