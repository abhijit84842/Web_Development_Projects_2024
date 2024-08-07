const express = require('express')

const router= express.Router()

// Admin Logout..
router.get("/adminlogout", (req,res)=>{
    res.cookie("atoken", "")

    req.flash("adminLogout" , "You are logout...")
    res.redirect("/owners")
})

// User logout
router.get("/userlogout", (req,res)=>{
    res.cookie("utoken","")

    req.flash("userLogOutMsg",  "You are logout ...")
    res.redirect("/")
})

module.exports= router