const router = require("express");
const render = require("../render/render");
const control = require("../controller/control");

const rout = router.Router();

rout.get("/api/getall", control.getall);

rout.delete("/api/delete/:id", control.deleteUser);

rout.post("/api/post", control.post);

rout.put("/api/put/:id", control.put);

module.exports = rout;
