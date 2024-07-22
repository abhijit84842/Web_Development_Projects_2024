const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Model require
const UserModel = require("../models/userModel");
const OwnerModel = require("../models/ownerModel");
const router = express.Router();

// render the login page...
router.get("/", (req, res) => {
  res.render("login");
});

// post request
router.post("/userlogin", async (req, res) => {
  let { email, password } = req.body;

  // // owner loging Authentication Check...
  // let owner = await OwnerModel.findOne({email:req.body.email})
  // if(!owner){
  //   return res.status(401).send("Owner not found..")
  // }else{
  //   bcrypt.compare(password, owner.password, function(err, result) {
  //     // result == true
  //     if(result==false){
  //       return res.status(401).send("Owner password is incorrect..")
  //     }else{
  //       let token = jwt.sign({email:email},"ownerkey")
  //       res.cookie("token" ,token)

  //       return res.redirect("/addproducts")
  //     }

  // });
  // }

  // user loging Authentication check..
  let user = await UserModel.findOne({ email: email });
  if (!user) {
    return res.status(401).send("incorrect email id...");
  } else {
    // compare with DB stored password...
    bcrypt.compare(password, user.password, function (err, result) {
      if (result == false) {
        return res.status(401).send("incorrect password..");
      } else {
        // set cookie by JWT
        let token = jwt.sign({ email: req.body.email }, "secrect");
        res.cookie("token", token);

        res.status(200).redirect("/");
      }
    });
  }
});

module.exports = router;
