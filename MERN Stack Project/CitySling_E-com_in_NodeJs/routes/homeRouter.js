const express = require("express")

const router = express.Router()

router.get("/" , (req,res)=>{

    // Flash msg
    let flashmsg= req.flash("userIsLoginError")
    // console.log(flashmsg)

    res.render("index" ,{flashmsg})
})


module.exports=router