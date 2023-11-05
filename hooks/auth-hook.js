import { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/router";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);

  const router = useNavigate();

  const [showNotification, setShowNotification] = useState(false);
  const [notification, setnotification] = useState({
    head: "error",
    message: "something went wrong",
  });
  const notify = (header, messagee) => {
    setnotification({
      head: header,
      message: messagee,
    });
    setShowNotification(true);
    setTimeout(function () {
      setShowNotification(false);
      setnotification({});
    }, 5000);
  };

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
    router.push("/register");
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (storedData && storedData.token) {
      login(storedData.userId, storedData.token);
    } else {
      logout();
    }
  }, [login]);
  return {
    userId,
    token,
    isLoggedIn,
    showNotification,
    notification,
    setnotification,
    notify,
    login,
    logout,
  };
};
