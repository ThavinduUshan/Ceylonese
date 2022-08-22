const db = require("../config/database");

const isModeratorExists = (email, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql = "SELECT * FROM sys_users WHERE email=? AND isAdmin=0";
        connection.query(sql, [email], (err, results) => {
          connection.release();
          if (!err && results.length === 0) {
            resolve(results[0]);
          } else {
            reject();
          }
        });
      }
    });
  });
};

const createModerator = (data, res) => {
  const { email, password } = data;
  db.getConnection((err, connection) => {
    if (err) {
      return res.json({ error: err });
    } else {
      const sql =
        "INSERT INTO sys_users (email, password, isAdmin) VALUES (?, ? ,?)";
      connection.query(sql, [email, password, 0], (err, results) => {
        connection.release();
        if (err) {
          return res.json({ error: "Internal Server Error" });
        } else {
          console.log(results);
          return res.json({ success: "Moderator Successfully Added" });
        }
      });
    }
  });
};

const getModerators = (req, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ err: "Internal Server error" });
      } else {
        const sql = "SELECT id, email FROM sys_users WHERE isAdmin=?";
        connection.query(sql, [0], (err, results) => {
          if (err) {
            reject();
          } else {
            resolve(results);
          }
        });
      }
    });
  });
};

module.exports = { isModeratorExists, createModerator, getModerators };
