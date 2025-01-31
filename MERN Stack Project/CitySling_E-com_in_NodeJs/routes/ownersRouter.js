const express = require("express");
const bcrypt = require("bcrypt");

// model require
const OwnerModel = require("../models/ownerModel");

const isAdminLoggedIn = require("../middlewares/adminIsLogIn");

const router = express.Router();


//* * Only Development Base routing in top...* *//
router.post("/create", async (req, res) => {
  // console.log(req.body)

  let { fullname, email, password, gstin } = req.body;

  let owner = await OwnerModel.find();
  if (owner.length > 0) {
    // flash msg
    req.flash("error", "You already have an account, please login ...");

    return res.status(401).redirect("/owners/createowner");
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
        req.flash("success", "Your account created successfully...");
        res.status(201).redirect("/owners");
      });
    });
  }
});

// Rendering the owner page..
router.get("/", (req, res) => {
  // Flash Messages...
  let flashmsg = req.flash("adminIsLoginError");

  let adminLoginSuccessMsg = req.flash("AdminSuccessMsg");

  let adminLogout = req.flash("adminLogout");

  let adminCreatedSuccessMsg = req.flash("success");

  res.render("ownerpage", {
    adminLoginSuccessMsg,
    flashmsg,
    adminLogout,
    adminCreatedSuccessMsg,
  });
});

router.get("/createowner", (req, res) => {
  let ownerCreateErr = req.flash("error");

  res.render("createowner", { ownerCreateErr });
});

//* *Only Production Enviourment Base routing in Buttom...* *//

// console.log(process.env.NODE_ENV); // first  we have to set Node enviroment

module.exports = router;
