const express = require("express");
const path = require("path");

const cors = require("cors");
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

//Middleware import
const IsLoggedIn = require("./middleware/isLoggedIn");

// multer
const upload = require("./config/multerConfig");

// Model import
const FoodModel = require("../Backend/models/foodModel");
const OwnerModel = require("../Backend/models/ownerModel");

const app = express();

const URL =
  "mongodb+srv://admin:admin@cluster0.50snh.mongodb.net/Food_Plaza_App_Using_React?retryWrites=true&w=majority&appName=Cluster0";

//json data
app.use(express.json());

// url data
app.use(express.urlencoded({ extended: true }));

// for static file
app.use(express.static(path.join(__dirname, "public")));

// Enable CORS for all routes
app.use(
  cors({
    origin: "http://localhost:5173", // my frontend's origin
    credentials: true, // Allow credentials (cookies) to be sent with requests
  })
);

// Use cookie-parser to access and parse cookies in requests
app.use(cookieParser());

// Routing API

app.get("/api/fooddata", async (req, res) => {
  try {
    await mongoose.connect(URL);
    console.log("DB Connected successfully..");
    let data = await FoodModel.find();
    if (!data) {
      res.json({ mgs: "data not found..", success: false });
    } else {
      res.json({ data, success: true });
    }
  } catch (err) {
    console.log(err.message);
  }
});

// POST API for create Owner AC
app.post("/api/owner/createac", async (req, res) => {
  // console.log(req.body)

  let { name, age, email, password } = req.body;
  try {
    await mongoose.connect(URL);
    // console.log("connected")
    let owner = await OwnerModel.find();

    if (owner.length > 0) {
      res.status(400).json({ msg: "owner already exists", success: false });
    } else {
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
          // Store hash in your password DB.
          try {
            await mongoose.connect(URL);
            let result = await OwnerModel.create({
              name,
              age,
              email,
              password: hash,
            });

            res.status(200).json({ result, success: true });
          } catch (err) {
            console.log(err.message);
          }
        });
      });
    }
  } catch (err) {
    console.log(err.message);
  }
});

// POST API FOR ADD FOODS
app.post(
  "/api/addfood",
  IsLoggedIn,
  upload.single("image"),
  async (req, res) => {
    // console.log(req.file);
    // console.log(req.body)
    let { name, price, type, description } = req.body;

    try {
      await mongoose.connect(URL);
      // console.log("DB connected successfully..")
      let result = await FoodModel.create({
        image: req.file.buffer,
        name,
        price,
        type,
        description,
      });
      res
        .status(201)
        .json({
          data: result,
          msg: "Food added successfully..",
          success: true,
        });
    } catch (err) {
      console.log(err.message);
    }
  }
);

// POST login
app.post("/api/login", async (req, res) => {
  // console.log(req.body)
  let { email, password } = req.body;
  try {
    await mongoose.connect(URL);
    let owner = await OwnerModel.findOne({ email });
    if (!owner) {
      res.status(401).json({ msg: "Owner does not exists..", success: false });
    } else {
      // compare the password
      bcrypt.compare(password, owner.password, function (err, result) {
        // result == true
        if (result == false) {
          res.status(401).json({ msg: "incorrect password", success: false });
        } else {
          // JWT Token set
          let token = JWT.sign(
            { email: owner.email, id: owner._id },
            "secrect",
            { expiresIn: "4h" }
          );
          // console.log(token)
          // set cookie
          res.cookie("token", token, {
            httpOnly: false,
            // httpOnly:true,        // Ensures the cookie is only accessible by the server

            secure: true, // Set to true if using HTTPS or set it false

            // sameSite:'Strict',             // Prevents CSRF attacks
            sameSite: "none", // Allows the cookie to be sent in cross-site requests

            // maxAge: 60 * 60 * 1000 // 1 hour
          });
          res.status(302).json({ msg: "successfully login", success: true });
        }
      });
    }
  } catch (err) {
    console.log(err.message);
  }
});

// logout Route
app.get("/api/logout", (req, res) => {
  res.cookie("token", "");
  res.json({ msg: "logout", success: true });
});

app.listen(3002, () => {
  console.log(`Port number is => 3002`);
});
