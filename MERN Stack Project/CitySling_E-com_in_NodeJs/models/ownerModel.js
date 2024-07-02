const { default: mongoose } = require("mongoose");

const OwnerSchema = mongoose.Schema({
    fullname:{
        type:String,
        minLength:3,
        trim:true,
        required:true,
    },
    email:{
        type:String,
        lowercase:true,
        unic:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    gstin:{
        type:String,
        unic:true,
        required:true,
    },
    picture:String,
    products:{
        type:Array,
        default:[]
    }
})

module.exports = mongoose.model("owner", OwnerSchema)