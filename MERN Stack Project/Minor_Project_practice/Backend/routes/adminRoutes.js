const express = require("express");

// multer upload
const upload = require("../config/multerConfiguration")


const router = express.Router();

router.post("/createac", upload.single("img"),(req, res) => {
    let{name , age , email , password , phno}=req.body

    res.send("hi")

});

module.exports = router;

// Write router defination in this page
