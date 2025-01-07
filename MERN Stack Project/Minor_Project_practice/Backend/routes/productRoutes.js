const express = require('express')

const router= express.Router()

router.get("/allproduct", (req,res)=>{
    res.send("all product")
})

module.exports = router