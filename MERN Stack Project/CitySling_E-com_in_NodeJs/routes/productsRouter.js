const express = require("express");
const router = express.Router();

const isLoggedIn= require("../middlewares/isLogin")

// protected route..
// router.get("/", isLoggedIn, (req, res) => {
//   res.send("All Products...")

// });


router.get("/women", isLoggedIn, (req,res)=>{
  res.render("womenproducts")
})

router.get("/addproducts", isLoggedIn, (req,res)=>{
  res.render("addproduct")
})




module.exports = router;
