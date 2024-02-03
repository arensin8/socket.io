const { log } = require("console");

const socket = new WebSocket("ws://localhost:3000");

socket.onopen = (event) => {
  socket.send("hello server");
};

socket.onmessage = (event) => {
  socket.send("Hello server i want to read your data");
  document.write(event.data);
};

socket.onclose = (event) => {
  socket.send("I quit from socket");
  console.log(event.data);
};

socket.onerror = (error) => {
    console.log(error.message);
  };
