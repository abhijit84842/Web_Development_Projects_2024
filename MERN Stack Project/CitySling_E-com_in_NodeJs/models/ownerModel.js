const { default: mongoose } = require("mongoose");

const OwnerSchema = mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    gstin:String,
    picture:String,
    products:{
        type:Array,
        default:[]
    }
})

module.exports = mongoose.model("owner", OwnerSchema)