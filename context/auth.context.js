import { createContext, useContext } from "react";
import { useAuth } from "@/hooks/auth-hook";

const AuthContext = createContext({
  isLoggedIn: true,
  userId: null,
  login: () => {},
  logout: () => {},
});

export function AppWrapper({ children }) {
  const { login, logout, isLoggedIn, userId } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
