const https = require("https");
import { useCallback, useEffect, useRef, useState } from "react";

export const useHttpsClient = () => {
  const [isloading, setIsLoading] = useState(false);
  const [Neterror, setError] = useState(null);

  //   const activeHttpRequests = useRef([]);
  // to cancel aborted request to avoid updating state in a non-active component

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      const options = {
        url,
        method,
        body,
        headers,
        rejectUnauthorized: false,
      };
      //  const httpAbortCtrl = new AbortController();
      //  activeHttpRequests.current.push(httpAbortCtrl);
      setIsLoading(true);
      return new Promise((resolve, reject) => {
        https.request(options, (res) => {
          console.log("called", options);
          let body = "";
          res.on("data", (data) => {
            body += data;
          });
          res.on("end", () => {
            body = JSON.parse(body);
            setIsLoading(false);
            resolve(body);
          });
          res.on("error", (error) => {
            console.log(error);
            setError(error.message);
            setIsLoading(false);
            reject();
          });
        });
      });
    },
    []
  );

  const clearError = () => {
    setError(null);
  };
  //   useEffect(() => {
  //     return () => {
  //       activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
  //     };
  //   }, []);
  return { isloading, Neterror, sendRequest, clearError };
};
