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

const getAuctions = (res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        res.json({ error: "Internal Server Error" });
      } else {
        const sql =
          "SELECT sellers.sellerID, stores.storeName, auctions.*, auction_images.image1, auction_images.image2, auction_images.image3, auction_images.image4,auction_images.image5 FROM sellers INNER JOIN stores ON sellers.sellerID = stores.sellerID INNER JOIN auctions ON auctions.sellerID = sellers.sellerID INNER JOIN auction_images ON auctions.auctionID = auction_images.auctionID";
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

const getAuctionDetails = (auctionID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql =
          "SELECT sellers.sellerID, stores.storeName, auctions.*, biddings.bidAmount, auction_images.image1, auction_images.image2, auction_images.image3, auction_images.image4,auction_images.image5 FROM sellers INNER JOIN stores ON sellers.sellerID = stores.sellerID INNER JOIN auctions ON auctions.sellerID = sellers.sellerID INNER JOIN auction_images ON auctions.auctionID = auction_images.auctionID LEFT JOIN biddings ON auctions.auctionID = biddings.auctionID WHERE (CASE WHEN biddings.bidAmount IS NULL THEN auctions.auctionID = ? ELSE auctions.auctionID = ? AND biddings.status = ? END)";
        connection.query(sql, [auctionID, auctionID, 1], (err, results) => {
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

const getProductReviews = (productID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Internal Server Error" });
      } else {
        const sql =
          "SELECT  review, date, productRating, reviewID FROM reviews  WHERE productID = ? ORDER BY productRating DESC ";
        connection.query(sql, [productID], (error, results) => {
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


const checkPartnershipStatus = (productID, res) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        return res.json({ error: "Something went wrong" });
      } else {
        const sql =
          "SELECT partnershipID, status FROM partnerships WHERE senderProduct = ? OR receiverProduct = ? AND status = ?";
        connection.query(
          sql,
          [productID, productID, "Active"],
          (err, results) => {
            connection.release();
            if (err) {
              reject();
            } else if (results.length === 0) {
              resolve(false);
            } else {
              console.log(results[0]);
              resolve(results[0]);
            }
          }
        );

      }
    });
  });
};

module.exports = {
  getProducts,
  getProductDetails,
  getAuctions,
  getAuctionDetails,
  getProductReviews,
  checkPartnershipStatus,
};
