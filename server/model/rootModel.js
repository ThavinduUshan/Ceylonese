const db = require("../config/database");

const getProducts = (res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        res.json({ error: "Internal Server Error" });
      } else {
        const sql =
          "SELECT sellers.sellerID, stores.storeName, products.*, product_images.image1, product_images.image2, product_images.image3, product_images.image4,product_images.image5 FROM sellers INNER JOIN stores ON sellers.sellerID = stores.sellerID INNER JOIN products ON products.sellerID = sellers.sellerID INNER JOIN product_images ON products.productID = product_images.productID";
        connection.query(sql, [], (err, results) => {
          connection.release();
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

const getProductDetails = (productID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql =
          "SELECT sellers.sellerID, stores.storeName, products.*, product_images.image1, product_images.image2, product_images.image3, product_images.image4,product_images.image5 FROM sellers INNER JOIN stores ON sellers.sellerID = stores.sellerID INNER JOIN products ON products.sellerID = sellers.sellerID INNER JOIN product_images ON products.productID = product_images.productID WHERE products.productID = ?";
        connection.query(sql, [productID], (err, results) => {
          if (err) {
            reject();
          } else {
            resolve(results[0]);
          }
        });
      }
    });
  });
};

module.exports = { getProducts, getProductDetails };
