const Customer = require("../../../models/Customer");

// To handle new request
module.exports.customerRequest = async (req, res) => {
  try {
    await Customer.create({
      customerId: req.body.customerId,
    });
    return res.status(200).json({ msg: "Request Successful!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error!" });
  }
};

// get customer request Information
module.exports.requests = async (req, res) => {
  try {
    let totalRequests = await Customer.find();
    return res.status(200).json(totalRequests);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error!" });
  }
};
