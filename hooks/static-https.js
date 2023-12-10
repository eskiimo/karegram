const https = require("https");

export const sendreq = async (
  url,
  method = "GET",
  body = null,
  headers = {}
) => {
  const options = {
    method,
    body,
    headers,
    rejectUnauthorized: false,
  };
  return new Promise((resolve, reject) => {
    https.get(url, options, (res) => {
      let body = "";
      res.on("data", (data) => {
        body += data;
      });
      res.on("end", () => {
        body = JSON.parse(body);
        resolve(body);
      });
      res.on("error", (error) => {
        console.log(error);
        reject();
      });
    });
  });
};
