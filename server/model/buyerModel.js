const db = require("../config/database");

const createBuyer = (data, res) => {
  db.getConnection((err, connection) => {
    if (err) return res.status(500).json({ error: "Internal Server Error!" });

    const username = data.username;
    const email = data.email;
    const password = data.password;

    const sql =
      "INSERT INTO buyers (username, email, password) VALUES (?, ?, ?)";
    connection.query(sql, [username, email, password], (error, results) => {
      connection.release();

      if (error) {
        res.json({ error: "Internal Server Error!" });
      } else {
        res.status(200).json({ success: true, results: results });
      }
    });
  });
};

const findBuyer = (username) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) throw err;

      const sql = "SELECT * FROM buyers WHERE username=?";
      connection.query(sql, username, (error, results) => {
        connection.release();
        if (error) throw error;

        if (results.length === 0 && !error) {
          resolve();
        } else {
          reject();
        }
      });
    });
  });
};

const isBuyerExists = (username) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) throw err;

      const sql = "SELECT * FROM buyers WHERE username=?";
      connection.query(sql, username, (error, results) => {
        connection.release();
        if (error) throw error;
        console.log(results);
        if (results.length === 1 && !error) {
          resolve(results[0]);
        } else {
          reject();
        }
      });
    });
  });
};

const checkBidCount = (res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql = "SELECT COUNT(auctionID) AS COUNT FROM biddings";
        connection.query(sql, [], (error, results) => {
          connection.release();
          if (error) {
            reject();
          } else {
            resolve(results[0].COUNT);
          }
        });
      }
    });
  });
};

const updateLastBid = () => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) throw err;
      else {
        const sql =
          "UPDATE biddings SET status=? WHERE bidID=(SELECT bidID FROM biddings ORDER BY bidID DESC LIMIT 1)";
        connection.query(sql, [0], (err, results) => {
          if (err) {
            reject();
          } else {
            resolve();
          }
        });
      }
    });
  });
};

const newBid = (buyerID, auctionID, bidAmount, res) => {
  db.getConnection((err, connection) => {
    if (err) throw err;
    else {
      const sql =
        "INSERT INTO biddings (auctionID, buyerID, bidAmount, status) VALUES (?, ?, ?, ?)";
      connection.query(
        sql,
        [auctionID, buyerID, bidAmount, 1],
        (error, results) => {
          if (error) {
            return res.json({ error: "Internal Server Error" });
          } else {
            console.log("hellpo");
            res.json({
              success: "Your Bid has been successfully added!",
            });
          }
        }
      );
    }
  });
};

module.exports = {
  createBuyer,
  findBuyer,
  isBuyerExists,
  checkBidCount,
  updateLastBid,
  newBid,
};
