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

module.exports = { createBuyer, LoginBuyer,
  getCheckoutDetails, };
