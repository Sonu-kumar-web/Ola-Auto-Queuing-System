const Driver = require("../../../models/driver");

module.exports.registerDriver = async (req, res) => {
  try {
    let newDriver = await Driver.create({
      name: req.body.name,
      status: req.body.status,
    });

    return res.status(200).json({ msg: "Driver Successfully Registered!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error!" });
  }
};
