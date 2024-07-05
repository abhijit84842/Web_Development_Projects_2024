const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("createuser");

});

// create a new user 
router.post("/create" , (req,res)=>{
  res.send("user created")
})

module.exports = router;
