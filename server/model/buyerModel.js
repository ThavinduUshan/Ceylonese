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

const getCompletedOrders = (buyerID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql =
          "SELECT order_items.*, stores.storeName, products.productID, reviews.productRating, products.title, products.shippingTime, product_images.image1, orders.datetime FROM order_items INNER JOIN orders ON order_items.orderID = orders.orderID INNER JOIN products ON order_items.productID = products.productID INNER JOIN product_images ON products.productID = product_images.productID INNER JOIN reviews ON reviews.orderItemID = order_items.orderItemID INNER JOIN stores ON stores.sellerID = order_items.sellerID WHERE orders.buyerID = ? AND order_items.status = ? ORDER BY order_items.orderItemID";
        connection.query(sql, [buyerID, "Completed"], (error, results) => {
          connection.release();
          if (error) {
            reject();
          } else {
            resolve(results);
          }
        });
      }
    });
  });
};

const checkBidCount = () => {
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

const ratingItem = (requestID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error!" });
      } else {
        const sql =
          "SELECT stores.sellerID, stores.storeID, stores.storeName, products.productID, products.title, product_images.image1 FROM order_items INNER JOIN products on order_items.productID = products.productID INNER JOIN stores on stores.sellerID = products.sellerID INNER JOIN product_images on product_images.productID = products.productID WHERE order_items.orderItemID=? ";
        connection.query(sql, [requestID], (error, results) => {
          connection.release();
          if (error) {
            reject();
          } else {
            resolve(results[0]);
          }
        });
      }
    });
  });
};

const updateLastBid = (auctionID) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) throw err;
      else {
        const sql = "UPDATE biddings SET status=? WHERE auctionID = ?";
        connection.query(sql, [0, auctionID], (err, results) => {
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

const submitReview = (data, res) => {
  const {
    orderItemID,
    storeID,
    productID,
    storeRating,
    productRating,
    review,
  } = data;
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql =
          "INSERT INTO reviews (orderItemID, storeID, storeRating, productID, productRating, review) VALUES (?,?,?,?,?,?)";
        connection.query(
          sql,
          [orderItemID, storeID, storeRating, productID, productRating, review],
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

const getCompletedOrdersTop = (buyerID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql =
          "SELECT order_items.*, stores.storeName, products.productID, reviews.productRating, products.title, products.shippingTime, product_images.image1, orders.datetime FROM order_items INNER JOIN orders ON order_items.orderID = orders.orderID INNER JOIN products ON order_items.productID = products.productID INNER JOIN product_images ON products.productID = product_images.productID INNER JOIN reviews ON reviews.orderItemID = order_items.orderItemID INNER JOIN stores ON stores.sellerID = order_items.sellerID WHERE orders.buyerID = ? AND order_items.status = ? ORDER BY order_items.orderItemID LIMIT 3";
        connection.query(sql, [buyerID, "Completed"], (error, results) => {
          connection.release();
          if (error) {
            reject();
          } else {
            resolve(results);
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

const getBidder = (auctionID, buyerID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql =
          "SELECT * FROM biddings WHERE buyerID = ? AND auctionID = ? ORDER BY bidID DESC LIMIT 1";
        connection.query(sql, [buyerID, auctionID], (error, results) => {
          if (error) {
            reject();
          } else {
            resolve(results[0]);
          }
        });
      }
    });
  });
};

const getOrdersTop = (buyerID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql =
          "SELECT order_items.*, products.title, products.shippingTime, product_images.image1, orders.datetime FROM order_items INNER JOIN orders ON order_items.orderID = orders.orderID INNER JOIN products ON order_items.productID = products.productID INNER JOIN product_images ON products.productID = product_images.productID WHERE orders.buyerID = ? AND order_items.status = ? OR order_items.status = ? ORDER BY order_items.orderItemID DESC LIMIT 3";
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

const createOrder = (buyerID, subTotal, total) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        console.log(err);
      } else {
        const sql =
          "INSERT INTO orders (buyerID, subTotal, total) VALUES (?, ?, ?)";
        connection.query(sql, [buyerID, subTotal, total], (err, results) => {
          connection.release();
          if (err) {
            console.log(err);
            reject();
          } else {
            console.log(results);
            db.getConnection((err, connection) => {
              if (err) {
                console.log(err);
              } else {
                const sql =
                  "SELECT * FROM orders ORDER BY orderID DESC LIMIT 1";
                connection.query(sql, [], (err, results) => {
                  connection.release();
                  if (err) {
                    reject();
                  } else {
                    console.log(results);
                    resolve(results[0]);
                  }
                });
              }
            });
          }
        });
      }
    });
  });
};

const addOrderAddress = (orderID, address) => {
  const { city, country, line1, line2, postal_code } = address;
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        console.log(err);
      } else {
        const sql =
          "INSERT INTO order_address (orderID, line1, line2, city, country, postalCode) VALUES (?, ? , ? , ?, ?, ?)";
        connection.query(
          sql,
          [orderID, line1, line2, city, country, postal_code],
          (err, results) => {
            connection.release();
            if (err) {
              console.log(err);
              reject();
            } else {
              console.log(results);
              resolve();
            }
          }
        );
      }
    });
  });
};

const placeOrder = (orderID, cart) => {
  db.getConnection((err, connection) => {
    if (err) {
      console.log(err);
    } else {
      const sql =
        "INSERT INTO order_items (orderID,productID, sellerID, orderQuantity, orderPrice, status) VALUES (?, ?, ? ,? , ? ,? )";
      connection.query(
        sql,
        [
          orderID,
          cart.productID,
          cart.sellerID,
          cart.quantity,
          cart.price,
          "Pending",
        ],
        (err, results) => {
          connection.release();
          if (err) {
            console.log("error");
          }
        }
      );
    }
  });
};

const getBidsActive = (buyerID, res) => {
  const now = new Date();
  console.log(now);
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql =
          "SELECT biddings.*, auctions.*, auction_images.* FROM biddings INNER JOIN auctions ON biddings.auctionID = auctions.auctionID INNER JOIN auction_images ON auctions.auctionID = auction_images.auctionID WHERE biddings.buyerID = ? AND auctions.endDate > ? ORDER BY biddings.bidID DESC LIMIT 1";
        connection.query(sql, [buyerID, now], (err, results) => {
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

const getBidsEnded = (buyerID, res) => {
  const now = new Date();
  console.log(now);
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql =
          "SELECT biddings.*, auctions.*, auction_images.* FROM biddings INNER JOIN auctions ON biddings.auctionID = auctions.auctionID INNER JOIN auction_images ON auctions.auctionID = auction_images.auctionID WHERE biddings.buyerID = ? AND auctions.endDate < ? ";
        connection.query(sql, [buyerID, now], (err, results) => {
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

const getBidsCompleted = (buyerID, res) => {
  const now = new Date();
  console.log(now);
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql =
          "SELECT biddings.*, auctions.*, auction_images.* FROM biddings INNER JOIN auctions ON biddings.auctionID = auctions.auctionID INNER JOIN auction_images ON auctions.auctionID = auction_images.auctionID WHERE biddings.buyerID = ? AND auctions.endDate < ? ";
        connection.query(sql, [buyerID, now], (err, results) => {
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

const getProductRating = (data, res) => {
  const { productID } = data;
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json("Internal Server Error");
      } else {
        const sql =
          "SELECT SUM(productRating) AS total, COUNT(productID) AS reviewCount FROM reviews WHERE productID = ?";
        connection.query(sql, [productID], (error, results) => {
          if (error) {
            console.log("error in get");
            reject();
          } else {
            console.log(results);
            resolve(results[0]);
          }
        });
      }
    });
  });
};
const updateProductRating = (data, averageRating, res) => {
  const { productID } = data;
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql = "UPDATE products SET averageRating = ? WHERE productID = ?";
        connection.query(sql, [averageRating, productID], (error, results) => {
          if (error) {
            console.log("Error In UpdateProductRating");
            reject();
          } else {
            console.log("Update success!");
            resolve();
          }
        });
      }
    });
  });
};

const updateOrderItemStatus = (data, res) => {
  const { orderItemID } = data;
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql = "UPDATE order_items SET status =? WHERE orderItemID = ?";
        connection.query(sql, ["Completed", orderItemID], (error, results) => {
          if (error) {
            reject();
          } else {
            resolve(results);
          }
        });
      }
    });
  });
};

module.exports = {
  createBuyer,
  findBuyer,
  isBuyerExists,
  getCheckoutDetails,
  getOrders,
  getCompletedOrders,
  ratingItem,
  submitReview,
  getCompletedOrdersTop,
  getOrdersTop,
  checkBidCount,
  updateLastBid,
  newBid,
  getBidder,
  createOrder,
  addOrderAddress,
  placeOrder,
  getBidsActive,
  getBidsEnded,
  getBidsCompleted,
  updateProductRating,
  updateOrderItemStatus,
};
