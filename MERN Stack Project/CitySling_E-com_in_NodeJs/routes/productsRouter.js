const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All Products...")

});


router.get("/women" ,(req,res)=>{
  res.render("womenproducts")
})

module.exports = router;
