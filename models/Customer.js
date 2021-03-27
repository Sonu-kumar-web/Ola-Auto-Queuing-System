const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    customerId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
