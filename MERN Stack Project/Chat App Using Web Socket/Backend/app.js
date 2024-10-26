const express = require("express");

const path = require("path");
const cors= require("cors")



// import http module
const http = require("http");
//import socket.io server
const { Server } = require("socket.io");


const app = express();    // Set up an express server

const server = http.createServer(app);    // Create an HTTP server using express

// create new socket io server
const io = new Server(server , {
  cors:{
    origin: '*' , // Allow all origins (adjust this for production)
    methods:["GET","POST"],
    credentials:true,     // to allow cookies
  }
})   


// Handle new client connections
io.on("connection" , (socket)=>{        // here socket is basically a client
    console.log("A new user connected")
    console.log("id",socket.id)       // client id

    // send a welcome sms to client
    socket.emit("welcome", `welcome to the server ${socket.id}`)

    // Listen for 'send_message' from client
    socket.on('send_message' , (message)=>{
   
      io.emit('receive_message', message)   // Broadcast the message to all clients

    })

    // Handle client disconnection
    socket.on('disconnect', ()=>{
      console.log('A user disconnected')
    })
})



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
