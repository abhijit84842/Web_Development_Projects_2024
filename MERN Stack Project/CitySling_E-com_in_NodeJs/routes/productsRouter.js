const express = require("express");
const router = express.Router();

// middleware import
const isUserLoggedIn= require("../middlewares/isLogin")

const isAdminLoggedIn=require("../middlewares/adminIsLogIn");

// Multer import..
const upload= require("../config/multer-configuration")

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

  let addProductMsg=req.flash("success")
  res.render("addproduct", {addProductMsg})
})

// POST req for add Products.
router.post("/addproducts" , isAdminLoggedIn ,upload.single('image') ,async (req,res)=>{
  // console.log(req.file.buffer)
  try{
    let { name , subtitle, company, description,price,size,color,category,discount,features,material}=req.body
    let products= await ProductModel.create({
      image: req.file.buffer,
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
  
    // flash msg
    req.flash("success" , "Product added successfully...")
    res.redirect("/products/addproducts")
  }catch(err){
    console.log(err.message)
  }

})





module.exports = router;
