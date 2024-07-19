const express = require("express");

// model require
const OwnerModel = require("../models/ownerModel");

const router = express.Router();

// console.log(process.env)

//* * Only Development Base routing in top...* *//

// conditional routing..
if (process.env.NODE_ENV === "development") {
  // this route only show in dev mode not production mode
  router.post("/create", async(req, res) => {
    // console.log(req.body)

   let owner= await OwnerModel.find()
   if(owner.length > 0){
    return res.status(401).send("You don't have permission to create a new owner")
   }else{
    let {fullname , email, password, gstin}=req.body
    let result=await OwnerModel.create({
      fullname,
      email,
      password,
      gstin,
     
    })
    res.status(201).send("Owner Created Successfully.." + result)
   }
   
   
  });
}

//* * Both Enviourment Base routing in middle...* *//
router.get("/", (req, res) => {
  res.render("createowner");
});

//* *Only Production Enviourment Base routing in Buttom...* *//

console.log(process.env.NODE_ENV); // first  we have to set Node enviroment

module.exports = router;
