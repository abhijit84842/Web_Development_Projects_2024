const express = require("express");
const bcrypt = require("bcrypt");

// model require
const OwnerModel = require("../models/ownerModel");

const isAdminLoggedIn=require("../middlewares/adminIsLogIn")

const router = express.Router();

// console.log(process.env)

//* * Only Development Base routing in top...* *//

// conditional routing..
if (process.env.NODE_ENV === "development") {
  // this route only show in dev mode not production mode
  router.post("/create", async (req, res) => {
    // console.log(req.body)

    let { fullname, email, password, gstin } = req.body;

    let owner = await OwnerModel.find();
    if (owner.length > 0) {

      // flash msg
      req.flash("error" , "You don't have permission to create a new owner...")


      return res
        .status(401)
        .redirect("/owners/createowner");
    } else {
      // encrypted password....using bcrypt
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
          let result = await OwnerModel.create({
            fullname,
            usertype: "owner",
            email,
            password: hash,
            gstin,
          });

          // flash msg
          req.flash("success" , "Your account created successfully...")
          res.status(201).redirect("/owners");
        });
      });
    }
  });
}

if (process.env.NODE_ENV == "development") {
  
  // Rendering the owner page..
  router.get("/", (req, res) => {
    
    // Flash Messages...
    let flashmsg=req.flash("adminIsLoginError")

    let adminLoginSuccessMsg= req.flash("AdminSuccessMsg")
    

    let adminLogout=req.flash("adminLogout")

    let adminCreatedSuccessMsg= req.flash("success")
    

    res.render("ownerpage",{adminLoginSuccessMsg , flashmsg ,adminLogout , adminCreatedSuccessMsg});
  });
}

if (process.env.NODE_ENV == "development") {
  router.get("/createowner", (req, res) => {

    let ownerCreateErr= req.flash("error")
    
    res.render("createowner" , {ownerCreateErr});
  });
}


//* *Only Production Enviourment Base routing in Buttom...* *//

console.log(process.env.NODE_ENV); // first  we have to set Node enviroment

module.exports = router;
