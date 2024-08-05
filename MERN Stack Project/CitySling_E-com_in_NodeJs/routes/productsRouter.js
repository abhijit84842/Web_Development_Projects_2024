const express = require("express");
const router = express.Router();

// middleware import
const isUserLoggedIn= require("../middlewares/isLogin")

const isAdminLoggedIn=require("../middlewares/adminIsLogIn");

// model import..
const ProductModel= require("../models/productModel")

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
router.post("/addproducts" , isAdminLoggedIn ,async (req,res)=>{
  console.log(req.body)
  let {image, name , subtitle, company, description,price,size,color,category,discount,features,material}=req.body
  let products= await ProductModel.create({
    image,
    name,
    subtitle,
    company,
    description,
    price,
    size,
    color,
    category,
    discount,
    features,
    material,

  })


  res.send("Product added successfully.." + products)
})





module.exports = router;
