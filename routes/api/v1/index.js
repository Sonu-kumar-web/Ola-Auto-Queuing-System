const express = require("express");
const router = express();

const jobController = require('../../../controllers/api/v1/job');


router.get('/jobs', jobController.jobs);

module.exports = router;