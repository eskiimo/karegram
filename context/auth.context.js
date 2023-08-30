import { createContext, useContext } from "react";
import { useAuth } from "@/hooks/auth-hook";
//
const AuthContext = createContext({
  isLoggedIn: true,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
});

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AppWrapper({ children }) {
  const { login, logout, isLoggedIn, userId, token } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        token: token,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
