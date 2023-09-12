import { createContext, useContext } from "react";
import { useAuth } from "@/hooks/auth-hook";
//
const AuthContext = createContext({
  isLoggedIn: true,
  userId: null,
  token: null,
  showNotification: true,
  notify: () => {},
  login: () => {},
  logout: () => {},
  notification: {},
});

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AppWrapper({ children }) {
  const {
    login,
    logout,
    isLoggedIn,
    userId,
    token,
    notify,
    showNotification,
    notification,
  } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        token: token,
        showNotification: showNotification,
        notify: notify,
        login: login,
        logout: logout,
        notification: notification,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
