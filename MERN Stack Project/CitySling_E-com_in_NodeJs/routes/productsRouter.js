const express = require("express");
const router = express.Router();

// middleware import
const isUserLoggedIn= require("../middlewares/isLogin")

const isAdminLoggedIn=require("../middlewares/adminIsLogIn");

// Multer import..
const upload= require("../config/multer-configuration")

// model import..
const ProductModel= require("../models/productModel")

// Show all Products...
router.get("/", isUserLoggedIn, async(req, res) => {

  let products= await ProductModel.find()
  // console.log(products)

  // flash msg
  let cartMsg=req.flash("successCart")
  
  res.render("allproducts",{navBar:true, products , cartMsg})

});

// Rendering the Product Only
router.get("/productonly/:id" ,async(req,res)=>{
  // console.log(req.params.id)
  try{
   let singleProduct= await ProductModel.findOne({_id:req.params.id})
  //  console.log(singleProduct)
  res.render("productonly",{singleProduct})

  }catch(err){
    console.log(err.message)
  }
  

})


// showing women products
router.get("/women", isUserLoggedIn, async(req,res)=>{
  try{
    const products= await ProductModel.find()

    let womenProducts= products.filter((items)=>{
      return items.category ==="women"
    })
    res.render("womenproducts" , {women: womenProducts})
  }catch(err){
    console.log(err.message)
  }

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
router.get("/trolley",isUserLoggedIn, async(req,res)=>{
  try{
    const trolleyProduct= await ProductModel.find()

    // find only which category is trolley
   let trolleyBags = trolleyProduct.filter((items)=>{
    return items.category==="trolley"
   })

    // console.log(trolleyBags)
    res.render("trolleyproducts" ,{trolley: trolleyBags})
  }catch(err){
    console.log(err.message)
  }
 
})

//Rendering the  Add your product by Owner
router.get("/addproducts", isAdminLoggedIn , (req,res)=>{

  let addProductMsg=req.flash("success")
  res.render("addproduct", {addProductMsg})
})

// POST req for add Products.
router.post("/addproducts" , isAdminLoggedIn ,upload.single('image') ,async (req,res)=>{
  // console.log(req.file)
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
