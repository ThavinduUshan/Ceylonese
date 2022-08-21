const filePayloadExists = (req, res, next) => {
  if (!req.files) {
    return res.json({ error: "No Images has been selected!" });
  }
  next();
};

module.exports = filePayloadExists;
