const express = require("express");
const router = express();

router.use('/v1', require("./v1/index.js"));

// console.log("APi");

module.exports = router;