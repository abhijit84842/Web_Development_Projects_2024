const { default: mongoose } = require("mongoose");


const foodSchema = mongoose.Schema({
    name:String,
    description: String,
    type:String,
    price:String,
    image:{
        type:String,
        default:"default.png"
    }
})

module.exports = mongoose.model("foodlist" , foodSchema)