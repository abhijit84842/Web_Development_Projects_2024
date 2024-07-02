const express = require("express");

const router = express.Router();

//* * Only Development Base routing in top...* *//

// conditional routing..
if (process.env.NODE_ENV === "development") {
  // this route only show in dev mode not production mode
  router.post("/create", (req, res) => {
    res.send("create");
  });
}

//* * Both Enviourment Base routing in middle...* *//
router.get("/", (req, res) => {
  res.send("hi ");
});

//* *Only Production Enviourment Base routing in Buttom...* *//

console.log(process.env.NODE_ENV); // first  we have to set Node enviroment

module.exports = router;
