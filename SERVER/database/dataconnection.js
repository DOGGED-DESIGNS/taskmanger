const mongoose = require("mongoose");

const env = require("dotenv");

env.config({ path: "config.env" });

const uri = process.env.MONGO_URI;

mongoose
  .connect(uri)
  .then(() => {
    console.log("connection sucessful");
  })
  .catch((err) => {
    console.log(err);
    console.log("there was an error inthe connection");
  });

module.exports = mongoose;
