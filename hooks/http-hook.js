import { headers } from "@/next.config";
import { useCallback, useEffect, useRef, useState } from "react";

export const useHttpClient = () => {
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        });
        const responseData = await response.json();
        console.log(response.status);

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );
        if (!response.ok) {
          throw new Error(responseData.message);
        } else if (response.status <= 210 && response.status >= 200) {
          return responseData;
        }
        setIsLoading(false);
      } catch (e) {
        setError(e.message);
        setIsLoading(false);
      }
    },
    []
  );
  // {
  //   "Content-Type": "application/json",
  //    Authorization: `Bearer ${token}`,
  // }
  const clearError = () => {
    setError(null);
  };
  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);
  return { isloading, error, sendRequest, clearError };
};
