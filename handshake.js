//client
const socket = io("http://localhost:3000", {
  query: {
    field1: "valu1",
    field2: "valu2",
  },
  transportOptions: {
    polling: {
      extraHeaders: {
        Authorization: "Bearer <token>",
      },
    },
  },
});

//server
io.on("connection", (socket) => {
    console.log(socket.handshake.query);
    console.log(socket.handshake.headers["authorization"]);
  });