import { io } from "socket.io-client";
import "./App.css";
import { useEffect, useMemo, useState } from "react";

function App() {
  // useMemo -> it prevent unnecessay rendering , so that io("http://localhost:3000") it not connecte with socket server again and again.(and also prevent new socket id generate)
  const socket = useMemo(() => io("http://localhost:3000"), []); // connected to the socket server

  const [message, setMessage] = useState(); // store the user input
  const [receivedMessages, setReceivedMessages] = useState([]); // to store the messages coming from server
  const [room, setRoom] = useState(); // to store the my room id
  const [roomId, setRoomdId] = useState(); // to store the destination room id

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to the server => ", socket.id);
      setRoom(socket.id);
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
      console.log(data);
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
    socket.emit("send_message", { message, roomId }); // Emit 'send_message' event , to send message to the server.
    setMessage(""); // Clear input after sending
    setRoomdId("");
  };
  return (
    <div className="main-container">
      <h1>Simple Chat Application Using Web Socket</h1>
      <div>
        <p>My Room id is = {room}</p>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)} // Update message state with user input
          placeholder="write your message..."
        />

        <input
          type="text"
          value={roomId}
          onChange={(e) => setRoomdId(e.target.value)}
          placeholder="write receiver room id...."
        />
        <button onClick={() => sendMessage()}>Send Message</button>
      </div>

      <ul>
        {receivedMessages.map((msg) => (
          <li key={msg.id}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
