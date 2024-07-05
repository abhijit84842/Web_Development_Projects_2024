const express = require('express')

const router = express.Router()

// render the login page...
router.get("/", (req,res)=>{
    res.send("login hi")
})

module.exports=router