const express = require("express")

const router = express.Router()

router.get("/" , (req,res)=>{

    // Flash msg for  IsLoggedIn Error..
    let flashmsg= req.flash("userIsLoginError" )

    // Flash msg for userLogin success..
    let successLoginMsg = req.flash("userLoginSuccess")

    // Flash msg for user Logout...
    let userLogOutMsg= req.flash("userLogOutMsg")

    res.render("index" ,{flashmsg , successLoginMsg , userLogOutMsg})
})


module.exports=router