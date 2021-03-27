const Driver = require("../../../models/Driver");

// Register new drivers
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

// Get driver details
module.exports.getDrivers = async (req, res) => {
  try {
    let drivers = await Driver.find();
    return res.status(200).json(drivers);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error!" });
  }
};
