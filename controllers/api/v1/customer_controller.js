const Customer = require("../../../models/Customer");

// To create new request
module.exports.customerRequest = async (req, res) => {
  try {
    const { customerId, status } = req.body;
    let newRequest = await Customer.create({
      customerId: customerId,
      status: "Waiting",
    });
    return res.status(200).json(newRequest);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error!" });
  }
};

// get All customer request Information
module.exports.allRequests = async (req, res) => {
  try {
    let totalRequests = await Customer.find();
    return res.status(200).json(totalRequests);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error!" });
  }
};

// Get a single request detail
module.exports.request = async (req, res) => {
  try {
    let currentRequest = await Customer.findById(req.query.request_id);
    console.log(currentRequest);
    return res.status(200).json(currentRequest);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error!" });
  }
};
