const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
    username:{
        type:String,
        unic:true,
        required:true,
        lowercase:true,
    },
    fullname:{
        type:String,
        trim:true,
        required:true,
    },
    usertype:{
        type:String,
        required:true,
    },

    age:String,
    
    email:{
        type:String,
        unic:true,
        required:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
    },
    phno:{
        type:Number,
        required:true,
        unic:true,
    },
    isadmin:Boolean,
    picture:String,
    address:{
        type:String,
        // required:true,
    },
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