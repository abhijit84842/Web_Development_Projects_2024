const express = require('express')
const isLoggedin = require('../middleware/isLoggedin')

const router= express.Router()

router.get("/allproduct",isLoggedin, (req,res)=>{
    res.send("all product")
})

router.post("/addproduct", isLoggedin, (req,res)=>{
    res.send("add product")
})

module.exports = router