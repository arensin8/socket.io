const http = require("http");
const WebSocket = require("ws");
const express = require("express");
const app = express();
const server = http.createServer(app);
app.use(express.static("./"));
// const ws = new WebSocket.Server({ server });
const socketIO = require("socket.io");
const exp = require("constants");
const io = socketIO(server, {
  cors: {
    origin: "*",
  },
  serverClient: true,
});

io.on("connection", () => {
  io.emit("broadCast","hello everyone");
});
io.of("/teachers").on("connection", (socket) => {
  socket.emit("techersServer", "Hello teachers , I am server");
  socket.on("teachersClient", (data) => {
    console.log(data);
  });
});

io.of("/students").on("connection", (socket) => {
  socket.emit("studentsServer", "Hello students , I am server");
  socket.on("studentsClient", (data) => {
    console.log(data);
  });
});

server.listen(3000, () => console.log("http://localhost:3000"));
