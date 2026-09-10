const https = require("https");

const options = {
  hostname: "api-gateway.zepto.co.in",
  path: "/rvms/api/v1/otp/vendor/send-otp",
  method: "OPTIONS",
  headers: {
    "Origin": "https://saathi.zepto.co.in",
    "Access-Control-Request-Method": "POST",
    "Access-Control-Request-Headers": "authorization,content-type"
  }
};

const req = https.request(options, (res) => {
  console.log("STATUS:", res.statusCode);
  console.log("HEADERS:", res.headers);

  let body = "";
  res.on("data", chunk => body += chunk);
  res.on("end", () => {
    console.log("BODY:", body);
  });
});

req.on("error", err => console.error("ERROR:", err));
req.end();
