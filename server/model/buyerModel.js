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

const getCheckoutDetails = (buyerID, res) => {
  db.getConnection((err, connection) => {
    if (err) {
      return res.json({ error: "Internal Server Error" });
    } else {
      const status = 1;
      const sql =
        "SELECT * FROM address_book WHERE buyerID = ?  AND status = ?";
      connection.query(sql, [buyerID, status], (err, result) => {
        connection.release();
        if (err) {
          return res.json({ error: "Internal Server Error" });
        } else {
          res.json({ address: result[0] });
        }
      });
    }
  });
};

const getOrders = (buyerID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql =
          "SELECT order_items.*, products.title, products.shippingTime, product_images.image1, orders.datetime FROM order_items INNER JOIN orders ON order_items.orderID = orders.orderID INNER JOIN products ON order_items.productID = products.productID INNER JOIN product_images ON products.productID = product_images.productID WHERE orders.buyerID = ? AND order_items.status = ? OR order_items.status = ? ORDER BY order_items.orderItemID DESC";
        connection.query(
          sql,
          [buyerID, "Pending", "Shipped"],
          (error, results) => {
            connection.release();
            if (error) {
              reject();
            } else {
              resolve(results);
            }
          }
        );
      }
    });
  });
};

module.exports = { createBuyer, findBuyer, isBuyerExists,
  getCheckoutDetails,
  getOrders,};
