const db = require("../config/database");

const isUserExists = (email, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error" });
      } else {
        const sql = "SELECT * FROM sys_users WHERE email=?";
        connection.query(sql, [email], (err, results) => {
          if (!err && results.length === 1) {
            resolve(results[0]);
          } else {
            reject();
          }
        });
      }
    });
  });
};

module.exports = { isUserExists };
