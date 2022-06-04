const dataconnect = require("../database/dataconnection");

const Schemez = dataconnect.Schema;

const tablesettings = new Schemez(
  {
    task: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const models = dataconnect.model("task", tablesettings);

module.exports = models;
