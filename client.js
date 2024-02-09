const socket = io("http://localhost:3000");
socket.on("broadCast", (data) => {
  console.log(data);
});


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
