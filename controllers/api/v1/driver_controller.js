const Driver = require("../../../models/Driver");
const Customer = require("../../../models/Customer");

// Register new drivers >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
module.exports.registerDriver = async (req, res) => {
  let totalDriver = await Driver.count({}, function (err, count) {
    return count;
  });
  if (totalDriver < 5) {
    try {
      await Driver.create({
        name: req.body.name,
        status: req.body.status,
      });

      return res.status(200).json({ msg: "Driver Successfully Registered!" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Internal Server Error!" });
    }
  } else {
    return res
      .status(200)
      .json({ msg: "No position available for new Driver!" });
  }
};

// Get driver details >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
module.exports.getDrivers = async (req, res) => {
  try {
    let drivers = await Driver.find();
    return res.status(200).json(drivers);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error!" });
  }
};

// To handle Coming requests >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
module.exports.accept = async (req, res) => {
  try {
    const { driverId, customerId } = req.body;
    // Update driver data
    await Driver.findByIdAndUpdate(driverId, {
      status: "busy",
      customerId: customerId,
    });

    // Update customer data
    await Customer.findByIdAndUpdate(customerId, { status: "Ongoing" });

    let driverDetails = await Driver.findById(driverId).populate("customerId");

    // Changed driver and customer status after 5 minutes
    setTimeout(() => {
      changeStatus(driverId, customerId);
    }, 2000 * 60 * 5);

    return res.status(200).json({ driverDetails });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error!" });
  }
};

// Changed driver and customer
changeStatus = async (driverId, customerId) => {
  // Update driver data
  await Driver.findByIdAndUpdate(driverId, {
    status: "available",
    customerId: null,
  });

  // Update customer data
  await Customer.findByIdAndUpdate(customerId, { status: "Completed" });
};
