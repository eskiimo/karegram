import { useCallback, useState, useEffect } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);

  const login = useCallback((id, token) => {
    setIsLoggedIn(true);
    setUserId(id);
    setToken(token);

    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: id,
        token: token,
      })
    );
  }, []);

  const logout = useCallback(() => {
    setUserId(null);
    setToken(null);
    setIsLoggedIn(false);

    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem("userData");

    if (storedData) {
      JSON.parse(storedData);
      login(storedData.userId, storedData.token);
    } else {
      setIsLoggedIn(false);
    }
  }, [login]);
  return { userId, token, isLoggedIn, login, logout };
};
