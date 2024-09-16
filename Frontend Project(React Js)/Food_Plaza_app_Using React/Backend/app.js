const express = require("express");
const path = require("path");

const cors = require("cors");

const app = express();

//json data
app.use(express.json())

// url data
app.use(express.urlencoded({extended:true}))

// for static file
app.use(express.static(path.join(__dirname, "public")));

// Enable CORS for all routes
app.use(cors());



// Routing API
app.post("/api/addfood", (req, res) => {
  console.log(req.body);
});

app.get("/api/fooddata", (req, res) => {});

app.listen(3000, () => {
  console.log(`Port number is => 3000`);
});
