// Connect with MongoDB 

const { default: mongoose } = require("mongoose");
const config= require("config")         
const dbgr = require("debug")("development:mongoose")




const DbConnection= async()=>{
    try{
        await mongoose.connect(config.get("MONGODB_URL"))       // GET connection string by config
        dbgr("DB Connected Successfully...")
    }catch(err){
        dbgr("not connected ... " + err.message)
    }
}  




// exports the hole database connection..
module.exports= DbConnection()          