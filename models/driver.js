const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
  },
  {
    timestamps: true,
  }
);

const Driver = mongoose.model("Driver", driverSchema);
module.exports = Driver;
