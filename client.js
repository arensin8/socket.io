function initialChatbox() {
  const localStorageValue = localStorage.getItem("messages");
  const messages = (localStorageValue ? localStorageValue.split("#") : []).map(
    (item) => {
      if (item) return item;
    }
  );
  messages?.forEach((item) => {
    const paraghrapElement = document.createElement("p");
    paraghrapElement.innerText = item;
    const chatBox = document.querySelector(".chatBox");
    chatBox.appendChild(paraghrapElement);
  });
}

initialChatbox();

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
  const localStorageValue = localStorage.getItem("messages")
    ? localStorage.getItem("messages") + "#" + message
    : message;
  localStorage.setItem("messages", localStorageValue);
  // const paraghrapElement = document.createElement("p");
  // paraghrapElement.innerText = message;
  // const chatBox = document.querySelector(".chatBox");
  // chatBox.appendChild(paraghrapElement);
});
