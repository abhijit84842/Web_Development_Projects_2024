const express = require("express");
const bcrypt = require("bcrypt");

// Model require
const UserModel = require("../models/userModel");
const router = express.Router();

// render the login page...
router.get("/", (req, res) => {
  res.render("login");
});

// post request
router.post("/success", async (req, res) => {
  let { email, password } = req.body;
  let user = await UserModel.findOne({ email: email });
  if (!user) {
    return res.status(404).send("incorrect email id...");
  } else {
    // compare with DB stored password...
    bcrypt.compare(password, user.password, function (err, result) {
      if (result==false) {
       return res.send("incorrect password..")
      } else {
        res.send("login successfully..")
      }
    });
  }
});

module.exports = router;
