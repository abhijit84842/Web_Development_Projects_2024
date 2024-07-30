const express = require("express");
const router = express.Router();

const isUserLoggedIn= require("../middlewares/isLogin")

const isAdminLoggedIn=require("../middlewares/adminIsLogIn")

// protected route..
router.get("/", isUserLoggedIn, (req, res) => {
  res.render("allproducts")

});

// showing women products
router.get("/women", isUserLoggedIn, (req,res)=>{
  res.render("womenproducts")
})

// Showing Men products
router.get("/men",isUserLoggedIn , (req,res)=>{
  res.render("menproducts")
})

// Showing kids products
router.get("/kids" , isUserLoggedIn ,(req,res)=>{
  res.render("kidsproducts")
})
// showing trolley products.
router.get("/trolley",isUserLoggedIn, (req,res)=>{
  res.render("trolleyproducts")
})

//Rendering the  Add your product by Owner
router.get("/addproducts", isAdminLoggedIn , (req,res)=>{
  res.render("addproduct")
})

// POST req for add Products.
router.post("/addproducts" , isAdminLoggedIn , (req,res)=>{
  console.log(req.body)
  res.send("Product added successfully..")
})





module.exports = router;
