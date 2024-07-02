// Connect with MongoDB 

const { default: mongoose } = require("mongoose");
const config= require("config") 

// dev mode console using set env variable 
const dbgr = require("debug")("development:mongoose")


//// production mode console using set env variable
// const dbgrp = require("debug")("production:mongoose")




// const DbConnection= async()=>{
//     try{
//         await mongoose.connect(config.get("MONGODB_URL"))       // GET connection string by config
//         dbgr("DB Connected Successfully...")
//         // dbgrp("DB Connected Successfully...")
//     }catch(err){
//         dbgr("not connected ... " + err.message)
//         // dbgrp("not connected ... " + err.message)
//     }
// }  




// exports the hole database connection..
// module.exports= DbConnection()          