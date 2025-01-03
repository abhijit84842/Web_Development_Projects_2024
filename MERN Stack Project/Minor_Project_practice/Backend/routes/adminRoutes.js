const express = require("express");

// multer upload
const upload = require("../config/multerConfiguration");
// bcrypt
const bcrypt = require("bcrypt");

const { default: mongoose } = require("mongoose");
const AdminModel = require("../models/adminModel");

// DB URL
const url =
  "mongodb+srv://minorProjectPractice:admin@projectcluster1.zoxj2.mongodb.net/MinorProject_For_Practice?retryWrites=true&w=majority&appName=ProjectCluster1";

const router = express.Router();

router.post("/createac", upload.single("image"), async (req, res) => {
  // console.log(req.file.buffer)
  // console.log(req.body)
  let { name, email, password, phno } = req.body;
  try {
    await mongoose.connect(url);
    console.log("db connected successfully");
    let owner = await AdminModel.find();

    if (owner.length > 0) {
      res.status(400).json({ msg: "owner already exists", success: false });
    } else {
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
          // Store hash in your password DB
          try {
            await mongoose.connect(url);
            let result = await AdminModel.create({
              image: req.file.buffer,
              name,
              email,
              phno,
              password: hash,
            });
            res
              .status(200)
              .json({ msg: "Account created Successfully", success: true });
          } catch (err) {
            console.log("db not connected..");
          }
        });
      });
    }
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;

// Write router defination in this page
