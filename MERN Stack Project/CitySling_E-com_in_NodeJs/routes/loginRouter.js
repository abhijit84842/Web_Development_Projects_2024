const express = require("express");



// importing Controler...
const UserLogin= require("../controllers/authControler")


const OwnerModel = require("../models/ownerModel");
const router = express.Router();

// render the user login page...
router.get("/", (req, res) => {
  res.render("login");
});

// render the Admin login page
router.get("/adminlogin", (req, res) => {
  res.render("adminlogin");
});

// post request for user login
router.post("/userlogin", UserLogin );

// post request for Owner login
router.post("/adminlogin", async (req, res) => {
  let { email, password } = req.body;
  let owner = await OwnerModel.findOne({ email: email });
  if (!owner) {
    return res.status(401).send("Owner not found..");
  } else {
    bcrypt.compare(password, owner.password, function (err, result) {
      // result == true
      if (result == false) {
        return res.status(401).send("Password is incorrect...");
      } else {
        // set JWT TOKEN...
       
        let token = GenerateToken(owner)
        res.cookie("atoken", token);
        res.redirect("/owners");
      }
    });
  }
});

module.exports = router;
