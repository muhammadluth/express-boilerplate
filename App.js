const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
require("dotenv").config();

const App = express();
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));
App.use(logger("dev"));

const route = require("./src/index");

const Port = process.env.PORT;

App.listen(Port, function() {
  console.log("Sever has running");
});

App.use("/api", route);
App.get("*"),
  (res, req) => {
    res.send("404 Page Not Found");
  };
