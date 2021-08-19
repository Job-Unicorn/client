import { useReducer } from "react";
import { AuthInitialState } from "../initialState/auth";
import { authReducer } from "../reducers/AuthReducer";

export const useAuthState = () => {
  const [authState, authDispatch] = useReducer(authReducer, AuthInitialState);
  return { authState, authDispatch };
};
