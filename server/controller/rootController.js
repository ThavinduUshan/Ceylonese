const rootModel = require("../model/rootModel");

const getProducts = async (req, res) => {
  try {
    await rootModel.getProducts().then((results) => {
      const products = results;
      res.json({ products: products });
    });
  } catch (err) {
    return res.json({ error: err });
  }
};

const getProductDetails = async (req, res) => {
  const productID = req.params.id;

  try {
    await rootModel.getProductDetails(productID, res).then((result) => {
      const product = result;
      console.log(product);
      res.json({ product: product });
    });
  } catch (err) {
    return res.json({ error: err });
  }
};

const getAuctions = async (req, res) => {
  try {
    await rootModel.getAuctions().then((results) => {
      const auctions = results;
      res.json({ auctions: auctions });
    });
  } catch (err) {
    return res.json({ error: err });
  }
};

const getAuctionDetails = async (req, res) => {
  const auctionID = req.params.id;

  try {
    await rootModel.getAuctionDetails(auctionID, res).then((result) => {
      const auction = result;
      console.log(auction);
      res.json({ auction: auction });
    });
  } catch (err) {
    return res.json({ error: err });
  }
};

module.exports = {
  getProducts,
  getProductDetails,
  getAuctions,
  getAuctionDetails,
};
