const express = require("express");

const path = require("path");
const cors = require("cors");


// import http module
const http = require("http");
//import socket.io server
const { Server } = require("socket.io");


const app = express();

const server = http.createServer(app);

const io = new Server(server)   // create new socket io server

io.on("connection" , (socket)=>{        // here socket is basically client
    console.log("A new user connected" , socket.id)
})

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

// handle cors origin error
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // allow creadentials (cookies) to be sent with request
  })
);

app.get("/api/name", (req, res) => {
  return res.json({
    name: "Abhijit Das",
    address: "Chandrakona Town",
  });
});
server.listen(3000, () => {
  console.log("Server is Running PORT=> " + 3000);
});
