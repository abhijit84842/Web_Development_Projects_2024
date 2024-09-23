const { default: mongoose } = require("mongoose");


const foodSchema = mongoose.Schema({
    name:String,
    description: String,
    type:String,
    price:String,
    image:{
        type:Buffer,
    }
})

module.exports = mongoose.model("foodlist" , foodSchema)