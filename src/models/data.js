const connect = require("../configs/database");

module.exports = {
  getData: () => {
    return new Promise((resolve, reject) => {
      connect.query("SELECT * FROM data", (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  postData: data => {
    return new Promise((resolve, reject) => {
      connect.query("INSERT INTO data SET ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  putData: data => {
    return new Promise((resolve, reject) => {
      connect.query("UPDATE data SET ? WHERE ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  deleteData: data => {
    return new Promise((resolve, reject) => {
      connect.query("DELETE FROM data WHERE id=?", [data], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  }
};
