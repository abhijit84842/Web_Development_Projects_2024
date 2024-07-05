const express = require('express')

const router = express.Router()

// render the login page...
router.get("/", (req,res)=>{
    res.render("login")
})

// post request
router.post("/success" , (req,res)=>{
    console.log(req.body)
    res.redirect("/")
})

module.exports=router