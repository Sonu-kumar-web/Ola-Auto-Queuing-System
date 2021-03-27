const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    customerId: {
      type: String,
      required: true,
    },
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
    },
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
