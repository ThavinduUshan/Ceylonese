const bcrypt = require("bcrypt");
const buyerModel = require("../model/buyerModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const createBuyer = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username) {
    return res.json({ error: "Username is required!" });
  }

  if (!email) {
    return res.json({ error: "Email is required!" });
  }

  if (!password) {
    return res.json({ error: "Password is required!" });
  }

  try {
    await buyerModel.findBuyer(username).then(() => {
      try {
        bcrypt.hash(password, 10).then((hash) => {
          const data = {
            username: username,
            email: email,
            password: hash,
          };
          buyerModel.createBuyer(data, res);
        });
      } catch {
        res.json({ error: "Internal Server Error!" });
      }
    });
  } catch {
    res.json({ error: "Username is already taken!" });
  }
};

const LoginBuyer = async (req, res) => {
  const { username, password } = req.body;

  if (!username) {
    return res.json({ error: "username cant be empty" });
  }

  if (!password) {
    return res.json({ error: "password cant be empty" });
  }

  try {
    await buyerModel.isBuyerExists(username).then((user) => {
      try {
        bcrypt.compare(password, user.password).then((match) => {
          if (match) {
            const accessToken = jwt.sign(
              {
                id: user.id,
                username: user.username,
                roles: 5150,
              },
              process.env.ACCESS_TOKEN_SECRET,
              {
                expiresIn: "30s",
              }
            );

            const refreshToken = jwt.sign(
              {
                id: user.id,
                username: user.username,
              },
              process.env.REFRESH_TOKEN_SECRET,
              {
                expiresIn: "1d",
              }
            );

            //for testing
            res.json({
              user: user,
              roles: 5150,
              success: "user has been successfuly logged in",
              accessToken: accessToken,
            });
          } else {
            res.json({ error: "username or password is incorrect!" });
          }
        });
      } catch {
        res.json({ error: "Internal server error!" });
      }
    });
  } catch {
    res.json({ error: "username or password incorrect" });
  }
};

const getCheckoutDetails = async (req, res) => {
  const { buyerID } = req.body;

  if (buyerID) {
    buyerModel.getCheckoutDetails(buyerID, res);
  } else {
    return res.json({ error: "Something went wrong!" });
  }
};

const getOrders = async (req, res) => {
  console.log("here");
  const { buyerID } = req.body;
  console.log("this", buyerID);
  try {
    await buyerModel.getOrders(buyerID, res).then((response) => {
      const requests = response;
      console.log(requests);
      res.json({ requests: requests });
    });
  } catch (err) {
    return res.json({ error: "Internal Server Error" });
  }
};

const getCompletedOrders = async (req, res) => {
  const { buyerID } = req.body;

  try {
    await buyerModel.getCompletedOrders(buyerID, res).then((response) => {
      const orders = response;
      console.log(orders);
      res.json({ orders: orders });
    });
  } catch (err) {
    return res.json({ error: "Internal Server Error" });
  }
};

const ratingItem = async (req, res) => {
  const requestID = req.params.id;
  console.log("here", requestID);
  try {
    await buyerModel.ratingItem(requestID, res).then((response) => {
      const details = response;
      console.log(details);
      res.json({
        request: details,
      });
    });
  } catch (err) {
    res.json({ error: err });
  }
};

const submitReview = async (req, res) => {
  const data = req.body;
  console.log(data);

  try {
    await buyerModel.submitReview(data, res).then(() => {
      buyerModel.getProductRating(data, res).then((results) => {
        const totalRating = results.total;
        const reviewCount = results.reviewCount;

        const averageRating = parseFloat(
          parseInt(totalRating) / parseInt(reviewCount)
        ).toFixed(1);

        buyerModel.updateProductRating(data, averageRating, res).then(() => {
          buyerModel
            .updateOrderItemStatus(data, averageRating, res)
            .then(() => {
              res.json({ success: "Review Added" });
            });
        });
      });
    });
  } catch (err) {
    return res.json({ error: "Something went wrong" });
  }
};

const getOrdersTop = async (req, res) => {
  console.log("here");
  const { buyerID } = req.body;
  console.log("this", buyerID);
  try {
    await buyerModel.getOrdersTop(buyerID, res).then((response) => {
      const requests = response;
      console.log(requests);
      res.json({ requests: requests });
    });
  } catch (err) {
    return res.json({ error: "Internal Server Error" });
  }
};

const getOrdersCompletedTop = async (req, res) => {
  const { buyerID } = req.body;

  try {
    await buyerModel.getCompletedOrdersTop(buyerID, res).then((response) => {
      const orders = response;
      console.log(orders);
      res.json({ orders: orders });
    });
  } catch (err) {
    return res.json({ error: "Internal Server Error" });
  }
};

const getBidder = async (req, res) => {
  const { auctionID, buyerID } = req.body;
  try {
    await buyerModel.getBidder(auctionID, buyerID, res).then((results) => {
      const bidder = results;
      res.json({ bidder: bidder });
    });
  } catch (err) {
    return res.json({ error: error });
  }
};

module.exports = {
  createBuyer,
  LoginBuyer,
  getCheckoutDetails,
  getOrders,
  getCompletedOrders,
  ratingItem,
  submitReview,
  getOrdersTop,
  getOrdersCompletedTop,
  placeBid,
  getBidder,
};
