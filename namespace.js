//Client's namespace's
const teachersSocket = io("http://localhost:3000/teachers");
teachersSocket.on("connect", (data) => {
  teachersSocket.emit("teachersClient", " message from teachers namespace");
  teachersSocket.on("techersServer", (data) => {
    console.log(data);
  });
});

const studentsSocket = io("http://localhost:3000/students");

studentsSocket.on("connect", (data) => {
  studentsSocket.emit("studentsClient", "message from students namespace");
  studentsSocket.on("studentsServer", (data) => {
    console.log(data);
  });
});

//Server namespace's
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
