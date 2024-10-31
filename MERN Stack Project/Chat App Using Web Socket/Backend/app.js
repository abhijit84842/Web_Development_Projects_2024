const express = require("express");

const path = require("path");
const cors = require("cors");

// import http module
const http = require("http");
//import socket.io server
const { Server } = require("socket.io");

const app = express(); // Set up an express server

const server = http.createServer(app); // Create an HTTP server using express

// create new socket io server
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins (adjust this for production)
    methods: ["GET", "POST"],
    credentials: true, // to allow cookies
  },
});

// Handle new client connections
io.on("connection", (socket) => {
  // here socket is basically a client
  console.log(`A new user connected => ${socket.id}`);

  // // send a welcome msg to the client
  // socket.emit("welcome", `welcome to the server and id is => ${socket.id}`)

  // // broadcast the sms
  // socket.broadcast.emit("broadwelcome" , `${socket.id} joind the server`)

  // Listen for 'send_message' from client
  socket.on("send_message", (data) => {
    // send sms to the particular room
    socket.to(data.roomId).emit("receive_message", data.message);

    // socket.broadcast.emit("receive_message", message) // except the sender sms will be send the all socket or client
    // io.emit("receive_message", message); // Broadcast the message to all clients(send sms to full curcit)
  });

  // Handle client disconnection
  socket.on("disconnect", () => {
    console.log("USER DISCONNECTED => ", socket.id);
  });
});

// for json data
app.use(express.json());

// for formdata
app.use(express.urlencoded({ extended: true }));

// to access static file
app.use(express.static(path.join(__dirname, "public")));

// handle cors origin error
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // allow creadentials (cookies) to be sent with request
  })
);

server.listen(3000, () => {
  console.log("Server is Running PORT=> " + 3000);
});
