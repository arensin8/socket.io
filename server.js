const http = require("http");
const WebSocket = require("ws");
const server = http.createServer();
// const ws = new WebSocket.Server({ server });
const socketIO = require("socket.io");
const io = socketIO(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.emit("welcome-server", "Hello client , I am server");
  socket.on("welcome-client", (data) => {
    console.log(data);
  });
});

server.listen(3000, () => console.log("http://localhost:3000"));
