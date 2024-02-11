const http = require("http");
const WebSocket = require("ws");
const express = require("express");
const app = express();
const server = http.createServer(app);
app.use(express.static("./"));
const socketIO = require("socket.io");
const io = socketIO(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("clientMessage", (data) => {
    io.emit('globalMessage', data)
  });
});

server.listen(3000, () => console.log("http://localhost:3000"));
