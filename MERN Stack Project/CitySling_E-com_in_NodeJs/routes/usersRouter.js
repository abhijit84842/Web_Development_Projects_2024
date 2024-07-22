const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

// model require
const UserModel = require("../models/userModel");

router.get("/", (req, res) => {
  res.render("createuser");
});

// create a new user
router.post("/create", async (req, res) => {
  // console.log(req.body)

  let { username, fullname, age, email, password, phno } = req.body;

  // PASSWORD ENCRYPTION BY bcrypt
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, async function(err, hash) {
      // Store hash in your password DB.

       // check Database empty or not
  let usercheck = await UserModel.find();
  if (usercheck.length == 0) {
    let result = await UserModel.create({
      username,
      fullname,
      age,
      email,
      password:hash,
      phno,
    });
    res.status(201).send("user created Successfully..");
  } else {
    // check user already exists or not in database
    let user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      let result = await UserModel.create({
        username,
        fullname,
        age,
        email,
        password:hash,
        phno,
      });

      res.status(201).send("User Created Successfully.. " + result);
    } else {
      return res.send("User already exists..");
    }
  }

    });
  });

 
});

module.exports = router;
