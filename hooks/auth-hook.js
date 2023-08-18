import { useCallback, useState, useEffect } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();

  const login = useCallback((id, token) => {
    setIsLoggedIn(true);
    setUser(user);

    localStorage.setItem(
      "userData",
      JSON.stringify({
        id: id,
        token: token,
      })
    );
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setIsLoggedIn(false);
    console.log("triggered");

    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem("userData");

    if (storedData) {
      JSON.parse(storedData);
      login(storedData.user);
    } else {
      setIsLoggedIn(false);
    }
  }, [login]);
  return { user, isLoggedIn, login, logout };
};
