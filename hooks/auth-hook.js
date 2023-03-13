import { useCallback, useState, useEffect } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();

  const login = useCallback((user) => {
    setIsLoggedIn(true);
    setUser(user);

    console.log("hook user " + user);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        user: user,
      })
    );
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setIsLoggedIn(false);

    console.log("hook log out " + isLoggedIn);
    localStorage.removeItem("userData");
  }, []);

  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem("userData"));
  //   if (storedData) {
  //     login(storedData.user);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // }, [login]);
  return { user, isLoggedIn, login, logout };
};
