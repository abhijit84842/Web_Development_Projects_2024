const express = require("express");
const router = express.Router();

const isLoggedIn= require("../middlewares/isLogin")

const adminLoggedIn=require("../middlewares/adminIsLogIn")

// protected route..
router.get("/", isLoggedIn, (req, res) => {
  res.render("allproducts")

});


router.get("/women", isLoggedIn, (req,res)=>{
  res.render("womenproducts")
})

router.get("/addproducts", adminLoggedIn , (req,res)=>{
  res.render("addproduct")
})




module.exports = router;
