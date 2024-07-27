const express = require("express");
const router = express.Router();

const isLoggedIn= require("../middlewares/isLogin")

const adminLoggedIn=require("../middlewares/adminIsLogIn")

// protected route..
router.get("/", isLoggedIn, (req, res) => {
  res.render("allproducts")

});

// showing women products
router.get("/women", isLoggedIn, (req,res)=>{
  res.render("womenproducts")
})

// showing trolley products.
router.get("/trolley",isLoggedIn,(req,res)=>{
  res.render("trolleyproducts")
})

router.get("/addproducts", adminLoggedIn , (req,res)=>{
  res.render("addproduct")
})





module.exports = router;
