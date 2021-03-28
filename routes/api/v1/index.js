const express = require("express");
const router = express();

const driverController = require("../../../controllers/api/v1/driver_controller");
const customerController = require("../../../controllers/api/v1/customer_controller");

// For Driver routes
router.post("/registerDriver", driverController.registerDriver);
router.get("/getDrivers", driverController.getDrivers);
router.post("/accept", driverController.accept);
router.get("/singleDriver", driverController.singleDriver);

// For Customer routes
router.post("/customerRequest", customerController.customerRequest);
router.get("/allRequests", customerController.allRequests);
router.get("/request", customerController.request);

module.exports = router;
