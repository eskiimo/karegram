import { useCallback, useEffect, useRef, useState } from "react";

export const useHttpClient = () => {
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(async (url, method = "GET", body = null) => {
    setIsLoading(true);
    const httpAbortCtrl = new AbortController();
    activeHttpRequests.current.push(httpAbortCtrl);
    try {
      const response = await fetch(url, {
        method,
        body,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        signal: httpAbortCtrl.signal,
      });
      const responseData = await response.json();
      console.log(responseData);

      activeHttpRequests.current = activeHttpRequests.current.filter(
        (reqCtrl) => reqCtrl !== httpAbortCtrl
      );
      if (!response.ok) {
        throw new Error("response not ok ");
      }
      setIsLoading(false);
      return responseData;
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
      console.log(e.message);
    }
  }, []);

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
