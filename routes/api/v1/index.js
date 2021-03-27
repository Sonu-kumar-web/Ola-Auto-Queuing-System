const express = require("express");
const router = express();

const driverController = require("../../../controllers/api/v1/driver_controller");
const customerController = require("../../../controllers/api/v1/customer_controller");

router.post("/registerDriver", driverController.registerDriver);
router.get("/getDrivers", driverController.getDrivers);
router.post("/accept", driverController.accept);

router.post("/customerRequest", customerController.customerRequest);
router.get("/requests", customerController.requests);

module.exports = router;
