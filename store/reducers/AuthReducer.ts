import { AuthInitialState, AuthState } from "../state/auth";
import { AuthActionType } from "../types/Auth";

interface AuthPayload {
  id: AuthState["id"];
  username: AuthState["username"];
  email: AuthState["email"];
}

export const authReducer = (
  state: AuthState,
  action: { type: AuthActionType; payload: AuthPayload }
) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...AuthInitialState,
      };

    default:
      return state;
  }
};
