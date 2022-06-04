const express = require("express");
const morgan = require("morgan");
const dataconnection = require("./SERVER/database/dataconnection");
const bodyparser = require("body-parser");
const app = express();

const env = require("dotenv");

env.config({ path: "config.env" });

// listening to requei

const port = process.env.PORT || 3500;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(express.static("asset"));

app.use(morgan("dev"));

// setting the routers

app.use(require("./SERVER/routers/router"));
