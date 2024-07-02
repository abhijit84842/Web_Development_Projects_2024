const express = require("express");

// model require
const OwnerModel= require("../models/ownerModel");
const ownerModel = require("../models/ownerModel");

const router = express.Router();

//* * Only Development Base routing in top...* *//

// conditional routing..
if (process.env.NODE_ENV === "development") {
  // this route only show in dev mode not production mode
  router.post("/create", async(req, res) => {
   let owner= await OwnerModel.find()
   if(owner.length > 0){
    return res.send("You don't have permission to create a new owner").status(503)
   }else{
    let result=await ownerModel.create({
      fullname:"Abhijit Das",
      email:"abhijit721201@gmail.com",
      password:"123",
      gstin:"GSTN1203145SGV",
     
    })
    res.send("Owner Created Successfully..").status(200)
   }
   
   
  });
}

//* * Both Enviourment Base routing in middle...* *//
router.get("/", (req, res) => {
  res.send("hi ");
});

//* *Only Production Enviourment Base routing in Buttom...* *//

console.log(process.env.NODE_ENV); // first  we have to set Node enviroment

module.exports = router;
