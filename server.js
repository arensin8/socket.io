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
    io.emit("globalMessage", data);
  });
  
  socket.join(["React", "Next.Js"]);
  socket.leave("Next.Js");
  socket.broadcast.emit('event' , 'message')
  socket.on('disconnecting' , reason => {

  })
  socket.on('disconnect' , data => {
    
  })
  io.to('React').emit("new user added")
  console.log(socket.rooms);
});

server.listen(3000, () => console.log("http://localhost:3000"));
