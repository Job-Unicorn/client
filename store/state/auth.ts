export interface AuthState {
  id: string | undefined;
  username: string | undefined;
  isAuthenticated: boolean;
  email: string | undefined;
}

export const AuthInitialState: AuthState = {
  id: undefined,
  username: undefined,
  isAuthenticated: false,
  email: undefined,
};
