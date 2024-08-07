const express = require("express")

const router = express.Router()

router.get("/" , (req,res)=>{

    // Flash msg for  logIsLoggedIn Error..
    let flashmsg= req.flash("userIsLoginError" )

    // Flash msg for userLogin Error..
    let successLoginMsg = req.flash("userLoginSuccess")

    res.render("index" ,{flashmsg , successLoginMsg})
})


module.exports=router