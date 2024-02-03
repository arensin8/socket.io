const http = require("http");
const WebSocket = require("ws");
const server = http.createServer();
const ws = new WebSocket.Server({ server });
ws.on("headers", (headers, req) => {
  console.log(headers);
});

ws.on("connection", (socket, req) => {
  socket.on("message", (data) => {
    console.log(data.toString());
  });
  socket.send("Hello client");
});

ws.on("error", (error) => {
    console.log(error.message);
  });

ws.on("close", () => {
  console.log("A client oeft the server");
});

server.listen(3000, () => console.log("http://localhost:3000"));
