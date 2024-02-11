const socket = io("http://localhost:3000");
socket.on("connect", (data) => {
  const sendBtn = document.getElementById("sendBtn");
  sendBtn.addEventListener("click", (e) => {
    const textBox = document.getElementById("text");
    const message = textBox.value;
    if (!message) throw alert("Text box cant be empty");
    socket.emit("clientMessage", message);
    textBox.value = "";
  });
});

socket.on("globalMessage", (message) => {
  const paraghrapElement = document.createElement("p");
  paraghrapElement.innerText = message;
  const chatBox = document.querySelector(".chatBox");
  chatBox.appendChild(paraghrapElement);
});
