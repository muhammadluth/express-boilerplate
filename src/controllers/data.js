const dataModel = require("../models/data");

module.exports = {
  getData: (req, res) => {
    dataModel
      .getData()
      .then(result => {
        res.json({
          status: 200,
          message: "Success View all Data",
          data: result
        });
      })
      .catch(err => {
        res.json({
          status: 500,
          message: "Error View all Data"
        });
      });
  },
  postData: (req, res) => {
    const { name, message } = req.body;
    const data = { name, message };
    dataModel
      .postData(data)
      .then(result => {
        res.json({
          status: 200,
          message: "Success Add Data",
          data: result
        });
      })
      .catch(err => {
        res.json({
          status: 500,
          message: "Error Add Data"
        });
      });
  },
  putData: (req, res) => {
    const { name, message } = req.body;
    const data = { name, message };
    dataModel
      .putData([data, { id: req.params.id }])
      .then(result => {
        res.json({
          status: 200,
          message: "Success Update Data",
          data: result
        });
      })
      .catch(err => {
        res.json({
          status: 500,
          message: "Error Update Data"
        });
      });
  },
  deleteData: (req, res) => {
    dataModel
      .deleteData(req.params.id)
      .then(result => {
        res.json({
          status: 200,
          message: "Success Remove Data",
          data: result
        });
      })
      .catch(err => {
        res.json({
          status: 500,
          message: "Error Remove Data"
        });
      });
  }
};
