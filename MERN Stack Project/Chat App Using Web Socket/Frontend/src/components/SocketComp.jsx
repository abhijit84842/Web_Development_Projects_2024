import React, { useEffect, useState } from "react";
import { io } from "socket.io-client"; // Importing Socket.IO client

const SocketComp = () => {
  const [message, setMessage] = useState(); // store the user input
  const [receivedMessages, setReceivedMessages] = useState([]); // to store the messages coming from server

  const SOCKET_SERVER_URL = "http://localhost:3000"; // server url

  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL); // Connect to the Socket.IO server

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
    const socket = io(SOCKET_SERVER_URL); // Reconnect to the server
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
        {receivedMessages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default SocketComp;
