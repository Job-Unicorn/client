import React, { useReducer } from "react";
import { ChatInitialState } from "../initialState/chat";
import { chatReducer } from "../reducers/ChatReducer";

export const useChatState = () => {
  const [chatState, chatDispatch] = useReducer(chatReducer, ChatInitialState);
  return { chatState, chatDispatch };
};
