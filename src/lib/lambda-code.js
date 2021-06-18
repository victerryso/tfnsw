const https = require("https");

const key = "xxx";

// Request data from tfnsw api
exports.handler = async (event, context) => {
  const params = event.rawQueryString;

  const options = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `apikey ${key}`,
    },
    hostname: "api.transport.nsw.gov.au",
    port: 443,
    path: `/v1/tp/add_info?outputFormat=rapidJSON&version=10.2.1.42&${params}`,
    method: "GET",
  };

  const promise = new Promise((resolve, reject) => {
    https
      .get(options, (response) => {
        let json = "";

        response.on("data", (chunk) => {
          json += chunk;
        });

        response.on("end", () => {
          resolve({
            statusCode: 200,
            headers: {
              "Access-Control-Allow-Origin": "*", // Required for CORS support to work
              "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
            },
            body: JSON.stringify(json),
          });
        });
      })
      .on("error", (e) => {
        reject(Error(e));
      });
  });

  return promise;
};
