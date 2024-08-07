const express = require("express")

const router = express.Router()

router.get("/" , (req,res)=>{

    // Flash msg for  logIsLoggedIn Error..
    let flashmsg= req.flash("userIsLoginError" )
    console.log(flashmsg)
    // Flash msg for userLogin Error..
    let successLoginMsg = req.flash("userLoginSuccess")
    console.log(successLoginMsg)

    res.render("index" ,{flashmsg , successLoginMsg})
})


module.exports=router