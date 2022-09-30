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

const addSupportTicket = async (req, res) => {
  const { name, email, type, subject, description } = req.body;

  if (!name) {
    return res.json({ error: "Name is required!" });
  }

  if (!email) {
    return res.json({ error: "Email is required!" });
  }

  if (!subject) {
    return res.json({ error: "Subject is required!" });
  }

  if (!description) {
    return res.json({ error: "Description is required!" });
  }

  try {
    const data = {
      name: name,
      email: email,
      type: type,
      subject: subject,
      description: description,
    };
    rootModel.addSupportTicket(data, res);
  } catch (err) {
    res.json({ error: err });
  }
};

module.exports = {
  getProducts,
  getProductDetails,
  getAuctions,
  getAuctionDetails,
  addSupportTicket
};
