const { default: mongoose } = require("mongoose");

ProductSchema = mongoose.Schema({
  proname: String,
  company: String,
  price: Number,
  image: String,
  description: String,
  bgcolor: String,
  panelcolor: String,
  textcolor: String,
  discount: {
    type: Number,
    default: 0,
  },
});


module.exports = mongoose.model("product", ProductSchema)
