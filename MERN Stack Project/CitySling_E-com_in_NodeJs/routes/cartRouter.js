const express = require("express");

const isLoggedIn = require("../middlewares/isLogin");

let ProductModel = require("../models/productModel");
let UserModel = require("../models/userModel");
const { set } = require("mongoose");
const router = express.Router();

// Rendering the Cart page
router.get("/", isLoggedIn, async (req, res) => {
  let user = await UserModel.findOne({ email: req.user1.email }).populate(
    "cart"
  );
  // console.log(user)
  let cartProducts = user.cart;

  // let unicCartProducts = cartProducts.filter(
  //   (product, index, self) =>
  //     index === self.findIndex((p) => p._id === product._id)
  // );
  // console.log(unicCartProducts);

  if (cartProducts.length > 0) {
    // bill Calculate
    // Product Price
    let price = cartProducts.map((items) => {
      return items.price;
    });
    // Product Discount
    let discount = cartProducts.map((item) => {
      return item.discount;
    });
    // console.log(discount)

    // Total MRP
    let totalMRP = price.reduce((a, b) => {
      return a + b;
    });
    // Total Discount
    let totalDiscount = discount.reduce((a, b) => {
      return a + b;
    });

    // shipping charges
    let shippingCharge = 0;

    // discount MRP Calculate
    let totalDiscountMRP = (totalMRP * totalDiscount) / 100;

    // Total Bill Amount
    let totalBill = totalMRP - totalDiscountMRP + shippingCharge;
    // console.log(totalBill)
    res.render("cart", {
      // unicCartProducts,
      cartProducts,
      totalMRP,
      totalDiscountMRP,
      shippingCharge,
      totalBill,
    });
  } else {
    res.render("emptycart");
  }
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

    req.flash("successCart", "Added to Cart");
    res.redirect("/products");
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
