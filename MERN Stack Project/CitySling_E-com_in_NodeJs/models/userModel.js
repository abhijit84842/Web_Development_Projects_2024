const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
    username:String,
    fullname:String,
    age:String,
    email:String,
    password:String,
    phno:Number,
    isadmin:Boolean,
    picture:String,
    address:String,
    cart:{
        type:Array,
        default:[]
    },
    orders:{
        type:Array,
        default:[]
    },




})

module.exports = mongoose.model("user",UserSchema)