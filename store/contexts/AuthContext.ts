import React from "react";
import { AuthInitialState, AuthState } from "../state/auth";

export interface AuthContextInterface {
  authState: AuthState;
  authDispatch: Function;
}

export const AuthContext = React.createContext<AuthContextInterface>({
  authState: AuthInitialState,
  authDispatch: () => {},
});
