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
  const verificationDocFront = data.verificationDocFront;
  const verificationDocBack = data.verificationDocBack;

  db.getConnection((err, connection) => {
    if (err) {
      throw err;
    } else {
      const sql =
        "INSERT INTO seller_requests_docs (requestID, frontDocName, backDocName) VALUES (? , ?, ? )";
      connection.query(
        sql,
        [requestID, verificationDocFront, verificationDocBack],
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
          connection.release();
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

const addAuction = (
  sellerID,
  title,
  description,
  category,
  subCategory,
  attrNames,
  attrValues,
  stPrice,
  duration,
  endDate,
  endTime,
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
        console.log(attrNames);
        console.log(attrValues);
        const sql =
          "INSERT INTO auctions (sellerID, title, description, category, subCategory, attribute1Name, attribute1Value, attribute2Name, attribute2Value, attribute3Name, attribute3Value,attribute4Name, attribute4Value, attribute5Name, attribute5Value, startingPrice, Duration, endDate, endTime, isShippingToWorldwide, shippingTime, shippingPrice) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        connection.query(
          sql,
          [
            sellerID,
            title,
            description,
            category,
            subCategory,
            attrNames[0],
            attrValues[0],
            attrNames[1],
            attrValues[1],
            attrNames[2],
            attrValues[2],
            attrNames[3],
            attrValues[3],
            attrNames[4],
            attrValues[4],
            stPrice,
            duration,
            endDate,
            endTime,
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
                  return res.json({ error: "Internal Server Error" });
                } else {
                  const sql =
                    "SELECT auctionID FROM auctions WHERE sellerID=? ORDER BY auctionID DESC LIMIT 1";
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

const addAuctionImages = (
  auctionID,
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
        "INSERT INTO auction_images (auctionID, image1, image2, image3, image4, image5) VALUES (?,?,?,?,?,?)";
      connection.query(
        sql,
        [auctionID, image1, image2, image3, image4, image5],
        (err, results) => {
          connection.release();
          if (err) {
            return res.json({ error: "Internal Server Error" });
          } else {
            res.json({ success: "Auction has been successfully added" });
          }
        }
      );
    }
  });
};

const getSellerListings = (sellerID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql =
          "SELECT products.*, product_images.image1, product_images.image2, product_images.image3, product_images.image4, product_images.image5 FROM products INNER JOIN product_images ON products.productID = product_images.productID WHERE products.sellerID = ?";
        connection.query(sql, [sellerID], (err, results) => {
          connection.release();
          if (err) {
            reject();
          } else {
            console.log(results);
            resolve(results);
          }
        });
      }
    });
  });
};

const getSellerAuctions = (sellerID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql =
          "SELECT auctions.*, auction_images.image1, auction_images.image2, auction_images.image3, auction_images.image4, auction_images.image5 FROM auctions INNER JOIN auction_images ON auctions.auctionID = auction_images.auctionID WHERE auctions.sellerID = ?";
        connection.query(sql, [sellerID], (err, results) => {
          connection.release();
          if (err) {
            reject();
          } else {
            console.log(results);
            resolve(results);
          }
        });
      }
    });
  });
};

const getPendingOrders = (sellerID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql =
          "SELECT order_items.*, order_address.*, products.title, products.shippingTime, product_images.image1, orders.datetime FROM order_items INNER JOIN orders ON order_items.orderID = orders.orderID INNER JOIN products ON order_items.productID = products.productID INNER JOIN product_images ON products.productID = product_images.productID INNER JOIN order_address ON orders.orderID = order_address.orderID WHERE order_items.sellerID = ? AND order_items.status = ? ORDER BY order_items.orderItemID";
        connection.query(sql, [sellerID, "Pending"], (err, results) => {
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

const updateShippingStatus = (orderItemID, res) => {
  const now = new Date();
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql =
          "UPDATE order_items SET status =?, shippedDate=? WHERE orderItemID = ?";
        connection.query(sql, ["Shipped", now, orderItemID], (err, results) => {
          connection.release();
          if (err) {
            reject();
          } else {
            console.log(results);
            resolve();
          }
        });
      }
    });
  });
};

const getShippedOrders = (sellerID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql =
          "SELECT order_items.*, order_address.*, products.title, products.shippingTime, product_images.image1, orders.datetime FROM order_items INNER JOIN orders ON order_items.orderID = orders.orderID INNER JOIN products ON order_items.productID = products.productID INNER JOIN product_images ON products.productID = product_images.productID INNER JOIN order_address ON order_items.orderID = order_address.orderID WHERE order_items.sellerID = ? AND order_items.status = ? ORDER BY order_items.orderItemID";
        connection.query(sql, [sellerID, "Shipped"], (err, results) => {
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

const getCompletedOrders = (sellerID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql =
          "SELECT order_items.*, order_address.*, products.title, products.shippingTime, product_images.image1, orders.datetime FROM order_items INNER JOIN orders ON order_items.orderID = orders.orderID INNER JOIN products ON order_items.productID = products.productID INNER JOIN product_images ON products.productID = product_images.productID INNER JOIN order_address ON order_items.orderItemID = order_address.orderItemID WHERE order_items.sellerID = ? AND order_items.status = ? ORDER BY order_items.orderItemID";
        connection.query(sql, [sellerID, "Completed"], (err, results) => {
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

const getSellerFromStore = (storeID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error!" });
      } else {
        const sql = "SELECT sellerID FROM stores WHERE storeID = ?";
        connection.query(sql, [storeID], (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results[0]);
          }
        });
      }
    });
  });
};

const getAnnualSalesData = (sellerID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error!" });
      } else {
        console.log(sellerID);
        const sql =
          "select date_format(orders.datetime, '%M') AS month,sum(order_items.orderPrice) AS sales from orders INNER JOIN order_items ON orders.orderID = order_items.orderID WHERE order_items.sellerID=? group by month";
        connection.query(sql, [sellerID], (error, results) => {
          connection.release();
          if (error) {
            reject();
          } else {
            console.log(results);
            resolve(results);
          }
        });
      }
    });
  });
};

module.exports = {
  createSellerRequest,
  submitSellerVerificationDocs,
  isSellerExists,
  addProduct,
  addAuction,
  addAuctionImages,
  addProductImages,
  getSellerListings,
  getSellerAuctions,
  getPendingOrders,
  updateShippingStatus,
  getShippedOrders,
  getCompletedOrders,
  getAnnualSalesData,
};
