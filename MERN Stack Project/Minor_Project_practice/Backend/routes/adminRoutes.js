const express = require("express");

const router = express.Router();

router.post("/createac", (req, res) => {
    console.log(req.body)
  res.send("hiii");

});

module.exports = router;

// Write router defination in this page
