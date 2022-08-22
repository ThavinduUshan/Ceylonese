const sellerModel = require("../model/sellerModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const submitSellerRequests = async (req, res) => {
  const {
    email,
    password,
    storeName,
    ownersName,
    ownersContactNo,
    ownersAddress,
    verificationNo,
    verificationDocFront,
    verificationDocBack,
  } = req.body;

  if (!email) {
    return res.status(400).json({ error: "email can't be empty" });
  }

  if (!password) {
    return res.status(400).json({ error: "password can't be empty" });
  }

  if (!storeName) {
    return res.status(400).json({ error: "Store Name can't be empty" });
  }

  if (!ownersName) {
    return res.status(400).json({ error: "owners Name can't be empty" });
  }

  if (!ownersContactNo) {
    return res.status(400).json({ error: "owners Contact No can't be empty" });
  }

  if (!ownersAddress) {
    return res.status(400).json({ error: "owners Address No can't be empty" });
  }

  if (!verificationNo) {
    return res.status(400).json({ error: "Verfication No can't be empty" });
  }

  if (!verificationDocFront) {
    return res.status(400).json({ error: "Verfication Docs can't be empty" });
  }
  if (!verificationDocBack) {
    return res.status(400).json({ error: "Verfication Docs can't be empty" });
  }

  try {
    await bcrypt.hash(password, 10).then((hash) => {
      data = {
        email: email,
        password: hash,
        storeName: storeName,
        ownersName: ownersName,
        ownersContactNo: ownersContactNo,
        ownersAddress: ownersAddress,
        verificationNo: verificationNo,
      };

      sellerModel.createSellerRequest(data, res).then((response) => {
        const requestID = response.requestID;

        data = {
          requestID: requestID,
          verificationDocFront: verificationDocFront,
          verificationDocBack: verificationDocBack,
        };

        sellerModel.submitSellerVerificationDocs(data, res);
      });
    });
  } catch (err) {
    res.status(500).json({ err: err });
  }

  res.json("success!");
};

const loginSeller = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email cant be empty" });
  }
  if (!password) {
    return res.status(400).json({ error: "password cant be empty" });
  }
  try {
    await sellerModel.isSellerExists(email, res).then((seller) => {
      try {
        bcrypt.compare(password, seller.password).then((match) => {
          if (match) {
            const accessToken = jwt.sign(
              {
                id: seller.sellerID,
                email: seller.email,
                roles: 2347,
              },
              process.env.ACCESS_TOKEN_SECRET,
              {
                expiresIn: "30s",
              }
            );

            const refreshToken = jwt.sign(
              {
                id: seller.sellerID,
                email: seller.email,
              },
              process.env.REFRESH_TOKEN_SECRET,
              {
                expiresIn: "1d",
              }
            );

            //for testing
            res.json({
              user: seller,
              roles: 2347,
              success: "user has been successfuly logged in",
              accessToken: accessToken,
            });
          } else {
            res.json({ error: "email or password is incorrect!" });
          }
        });
      } catch (err) {
        return res.status(500).json({ error: err });
      }
    });
  } catch {
    return res.status(500).json({ error: "email or password is incorrect!" });
  }
};

const addProduct = async (req, res) => {
  const {
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
    image1,
    image2,
    image3,
    image4,
    image5,
  } = req.body;

  if (!sellerID) {
    return res.json({ error: "Something Went Wrong!" });
  }

  if (!title) {
    return res.json({ error: "title can't be empty" });
  }

  if (!description) {
    return res.json({ error: "descrption can't be empty" });
  }

  if (!category) {
    return res.json({ error: "category Went Wrong!" });
  }

  if (!subCategory) {
    return res.json({ error: "subcategory Went Wrong!" });
  }

  if (!price) {
    return res.json({ error: "price Went Wrong!" });
  }

  if (!quantity) {
    return res.json({ error: "quantity Went Wrong!" });
  }

  if (!shippingTime) {
    return res.json({ error: "shipping time Went Wrong!" });
  }

  if (!shippingPrice) {
    return res.json({ error: "shipping price Went Wrong!" });
  }

  if (!image1) {
    return res.json({ error: "images must be uploaded" });
  }
  if (!image2) {
    return res.json({ error: "images must be uploaded" });
  }
  if (!image3) {
    return res.json({ error: "images must be uploaded" });
  }
  if (!image4) {
    return res.json({ error: "images must be uploaded" });
  }
  if (!image5) {
    return res.json({ error: "images must be uploaded" });
  }
  console.log(1);

  try {
    await sellerModel
      .addProduct(
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
      )
      .then((product) => {
        console.log(product);
        const productID = product.productID;

        sellerModel.addProductImages(
          productID,
          image1,
          image2,
          image3,
          image4,
          image5,
          res
        );
      });
  } catch (err) {
    console.log(4);
    res.json({ error: err });
  }
};

const getSellerListings = async (req, res) => {
  const { sellerID } = req.body;
  console.log(sellerID);

  try {
    await sellerModel.getSellerListings(sellerID, res).then((results) => {
      const listings = results;
      console.log(listings);
      res.json({ listings: listings });
    });
  } catch (err) {
    return res.json({ error: "Internal Server Error!" });
  }
};

module.exports = {
  submitSellerRequests,
  loginSeller,
  addProduct,
  getSellerListings,
};
