import { headers } from "@/next.config";
import { useCallback, useEffect, useRef, useState } from "react";

export const useHttpClient = () => {
  const [isloading, setIsLoading] = useState(false);
  const [Neterror, setError] = useState(null);

  const activeHttpRequests = useRef([]);
  // to cancel aborted request to avoid updating state in a non-active component

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);
      try {
        const response = await fetch(
          url,
          {
            method,
            body,
            headers,
            signal: httpAbortCtrl.signal,
          }
          // { cache: "no-store" }
        );

        let responseData = await response.json();
        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setIsLoading(false);
        return responseData;
      } catch (e) {
        setError(e.message);
        setIsLoading(false);
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };
  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);
  return { isloading, Neterror, sendRequest, clearError };
};
