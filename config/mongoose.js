const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/medibuddy");

const db = mongoose.connection;
db.on("error", console.log.bind(console, "Error in connection to Mongodb"));

db.once("open", function () {
  console.log("Connected to the MongoDB");
});

module.exports = db;
