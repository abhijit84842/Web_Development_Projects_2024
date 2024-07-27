const express= require("express")

const isLoggedIn =require("../middlewares/isLogin")
const router= express.Router()

router.get("/" , isLoggedIn, (req,res)=>{
    res.render("cart")
})

module.exports=router