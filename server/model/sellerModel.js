const db = require("../config/database");

const createSellerRequest = (data, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) return res.status(500).json({ error: "Internal Server Error" });

      const email = data.email;
      const password = data.password;
      const storeName = data.storeName;
      const ownersName = data.ownersName;
      const ownersContactNo = data.ownersContactNo;
      const ownersAddress = data.ownersAddress;
      const verificationNo = data.verificationNo;
      const status = "Pending";

      const sql =
        "INSERT INTO seller_requests (email, password, storeName, ownersName, ownersContactNo, ownersAddress,verificationNo, status) VALUES (?, ? ,? ,? , ? , ? ,?, ?)";

      connection.query(
        sql,
        [
          email,
          password,
          storeName,
          ownersName,
          ownersContactNo,
          ownersAddress,
          verificationNo,
          status,
        ],
        (error, results) => {
          connection.release();

          if (error) {
            throw error;
          } else {
            db.getConnection((err, connection) => {
              if (err) {
                throw err;
              } else {
                const sql =
                  "SELECT requestID FROM seller_requests WHERE email=?";
                connection.query(sql, [email], (error, results) => {
                  connection.release();
                  if (error) {
                    reject();
                  } else {
                    resolve(results[0]);
                  }
                });
              }
            });
          }
        }
      );
    });
  });
};

const submitSellerVerificationDocs = (data, res) => {
  const requestID = data.requestID;
  const verificationDocs = data.verificationDocs;

  for (let i = 0; i < verificationDocs.length; i++) {
    db.getConnection((err, connection) => {
      if (err) {
        throw err;
      } else {
        const sql =
          "INSERT INTO seller_requests_docs (requestID, docName) VALUES (? , ? )";
        connection.query(
          sql,
          [requestID, verificationDocs[i]],
          (error, results) => {
            connection.release();

            if (error) {
              throw error;
            } else {
              console.log(results);
            }
          }
        );
      }
    });
  }
};

const isSellerExists = (email, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) return res.status(500).json({ error: "Internal Server Error" });

      const sql = "SELECT * FROM sellers WHERE email=?";
      connection.query(sql, email, (error, results) => {
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

const addProduct = (
  sellerID,
  title,
  description,
  type,
  category,
  subCategory,
  pColor,
  sColor,
  size,
  material,
  price,
  quantity,
  shipTo,
  shippingTime,
  shippingPrice,
  res
) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error 1" });
      } else {
        const sql =
          "INSERT INTO products (sellerID, title, description, isAuction, category, subCategory, pColor, sColor, size, material, price, quantity, isShipToWorldwide, shippingTime, shippingPrice) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        connection.query(
          sql,
          [
            sellerID,
            title,
            description,
            type,
            category,
            subCategory,
            pColor,
            sColor,
            size,
            material,
            price,
            quantity,
            shipTo,
            shippingTime,
            shippingPrice,
          ],
          (err, results) => {
            connection.release();
            if (err) {
              return res.json({ error: "Internal Server Error 2" });
            } else {
              db.getConnection((err, connection) => {
                if (err) {
                  return res.json({ error: "Internal Server Error 3" });
                } else {
                  const sql =
                    "SELECT productID FROM products WHERE sellerID=? ORDER BY productID DESC LIMIT 1";
                  connection.query(sql, [sellerID], (err, results) => {
                    connection.release();
                    if (err) {
                      reject();
                    } else {
                      resolve(results[0]);
                    }
                  });
                }
              });
            }
          }
        );
      }
    });
  });
};

const addProductImages = (
  productID,
  image1,
  image2,
  image3,
  image4,
  image5,
  res
) => {
  db.getConnection((err, connection) => {
    if (err) {
      return res.json({ error: "Internal Server Error" });
    } else {
      const sql =
        "INSERT INTO product_images (productID, image1, image2, image3, image4, image5) VALUES (?,?,?,?,?,?)";
      connection.query(
        sql,
        [productID, image1, image2, image3, image4, image5],
        (err, results) => {
          if (err) {
            return res.json({ error: "Internal Server Error" });
          } else {
            res.json({ success: "Product has been successfully added" });
          }
        }
      );
    }
  });
};

module.exports = {
  createSellerRequest,
  submitSellerVerificationDocs,
  isSellerExists,
  addProduct,
  addProductImages,
};
