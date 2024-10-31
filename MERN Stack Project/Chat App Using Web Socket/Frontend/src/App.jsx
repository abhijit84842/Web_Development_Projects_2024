import { io } from "socket.io-client";
import "./App.css";
import { useEffect, useMemo, useState } from "react";

function App() {
  // useMemo -> it prevent unnecessay rendering , so that io("http://localhost:3000") it not connecte with socket server again and again.(and also prevent new socket id generate)
  const socket = useMemo(() => io("http://localhost:3000"), []); // connected to the socket server

  const [message, setMessage] = useState(); // store the user input
  const [receivedMessages, setReceivedMessages] = useState([]); // to store the messages coming from server

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to the server => ", socket.id);
    });

    // // welcome message
    // socket.on("welcome", (msg) => {
    //   console.log(msg);
    // });

    // // broadcast msg
    // socket.on("broadwelcome", (msg) => {
    //   console.log(msg);
    // });

    // Listen for 'receive_message' event from the server
    socket.on("receive_message", (data) => {
      setReceivedMessages((prevMessages) => [...prevMessages, data]); // Add new message to list
    });

    // Clean up when component unmounts (disconnect from socket)
    return () => {
      socket.disconnect();
    };
  }, []);

  // Function to send a message to the server
  const sendMessage = () => {
    // const socket = io("http://localhost:3000"); // Reconnect to the server
    socket.emit("send_message", message); // Emit 'send_message' event to server with message data
    setMessage(""); // Clear input after sending
  };
  return (
    <div>
      <h1>Socket.io Chat Application</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)} // Update message state with user input
        placeholder="write your message"
      />
      <button onClick={() => sendMessage()}>Send Message</button>

      <ul>
        {receivedMessages.map((msg) => (
          <li key={msg.id}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
