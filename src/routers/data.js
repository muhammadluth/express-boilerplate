const express = require("express");
const Route = express.Router();
const dataController = require("../controllers/data");

Route.get("/", dataController.getData)
  .post("/", dataController.postData)
  .put("/:id", dataController.putData)
  .delete("/:id", dataController.deleteData);

module.exports = Route;
