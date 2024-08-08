const { default: mongoose } = require("mongoose");

ProductSchema = mongoose.Schema({
  
  image:Buffer,

  name: {
    type:String,
    trim:true,
    required:true,
  },
  subtitle:{
    type:String,
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
  description:{
    type:String,
    required:true
  },
  size:{
    type:String,
    required:true,
  },
  color:{
    type:String,
  },
  features:{
    type:String,
  },
  category:{
    type:String,
    required:true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  material:{
    type:String,
    required:true,
  }
});


module.exports = mongoose.model("product", ProductSchema)
