const express = require("express");

const isLoggedIn = require("../middlewares/isLogin");

let ProductModel = require("../models/productModel");
let UserModel = require("../models/userModel");
const router = express.Router();

// Rendering the Cart page
router.get("/", isLoggedIn, async (req, res) => {
  res.render("cart");
});

// Add to Cart
router.get("/:id", isLoggedIn, async (req, res) => {
  // console.log(req.user1.email)

  try {
    let cartProduct = await ProductModel.findOne({ _id: req.params.id });
    // console.log(cartProduct)

    let user = await UserModel.findOne({ email: req.user1.email });
    user.cart.push(cartProduct._id);
    await user.save();

    req.flash("successCart" , "Added to Cart")
    res.redirect("/products");
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
