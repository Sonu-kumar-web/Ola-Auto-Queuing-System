const mongoose = require("mongoose");

const driverSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const Driver = mongoose.model("Driver", driverSchema);
module.exports = Driver;
