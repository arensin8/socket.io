const socket = io("http://localhost:3000");

socket.on('connect', data => {
  socket.emit('welcome-client' ,' Hello serevr , I am client' )
  socket.on('welcome-server' , data => {
    console.log(data);
  } )
})


