const express = require('express');
const router = express.Router();

router.use('/api', require('./api/index.js'));

// console.log("Router");

module.exports = router;