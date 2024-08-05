const express = require("express");

// importing Controler...
const {userLogin , ownerLogin } = require("../controllers/authControler");



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

// Post request for USER login
router.post("/userlogin" , userLogin);

// Post request for OWNER login
router.post("/adminlogin" , ownerLogin);

module.exports = router;
