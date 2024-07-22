const { default: mongoose } = require("mongoose");

ProductSchema = mongoose.Schema({
  proname: {
    type:String,
    trim:true,
    required:true,
  },
  company: {
    type:String,
    required:true,
  },
  price:{
    type:Number,
    required:true,
  },
  image: String,
  description: String,
  bgcolor: String,
  panelcolor: String,
  textcolor: String,
  category:{
    type:String,
    required:true,
  },
  discount: {
    type: Number,
    default: 0,
  },
});


module.exports = mongoose.model("product", ProductSchema)
