const https = require("https");

console.log("=== ZEpto Network Test ===");

https.get("https://api-gateway.zepto.co.in/", (res) => {
  console.log("STATUS:", res.statusCode);
  console.log("HEADERS:", res.headers);

  let body = "";

  res.on("data", chunk => body += chunk);

  res.on("end", () => {
    console.log("BODY:", body);
    process.exit(0);
  });

}).on("error", (err) => {
  console.error("ERROR:", err.message);
  process.exit(1);
});
