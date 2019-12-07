const express = require("express");
const Route = express.Router();

const data = require("./routers/data");

Route.use("/data", data);

module.exports = Route;
