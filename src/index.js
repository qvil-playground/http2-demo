// Server-side example
const http2 = require("http2");
const fs = require("fs");
const path = require("path");

const PORT = 8443;
const server = http2.createSecureServer({
  key: fs.readFileSync("localhost-privkey.pem"),
  cert: fs.readFileSync("localhost-cert.pem")
});
server.on("error", err => console.error(err));

server.on("stream", (stream, headers) => {
  // stream is a Duplex
  stream.respond({
    "content-type": "text/html",
    ":status": 200
  });
  // stream.end("<h1>Hello World</h1>");
  stream.end(fs.readFileSync(path.join(__dirname, "./index.html")));
});

server.listen(PORT, () => {
  console.log(`Server learning https://localhost:${PORT} 🚀`);
});
