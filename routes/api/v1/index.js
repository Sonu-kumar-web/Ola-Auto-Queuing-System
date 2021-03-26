const express = require("express");
const router = express();

const driverController = require("../../../controllers/api/v1/driver_controller");

router.post("/registerDriver", driverController.registerDriver);
router.get("/getDrivers", driverController.getDrivers);

module.exports = router;
