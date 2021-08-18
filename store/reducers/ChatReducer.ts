import { Chat } from "../contexts/ChatContext";
import { ChatState } from "../initialState/chat";

export const chatReducer = (
  state: ChatState,
  action: { type: string; payload: Chat }
) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            sender: action.payload.sender,
            message: action.payload.message,
            time: new Date(Date.now()),
          },
        ],
      };

    default:
      return state;
  }
};
