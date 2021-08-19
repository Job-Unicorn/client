import React from "react";
import { AuthState } from "../state/auth";

export interface AuthContextInterface {
  authState: AuthState;
}

export const AuthContext = React.createContext<AuthContextInterface | null>(
  null
);
