const express = require("express");
const router = express.Router();
const path = require("path");
const fileUpload = require("express-fileupload");
const fileExtLimitter = require("../middleware/fileExtLimitter");
const fileSizeLimitter = require("../middleware/fileSizeLimitter");
const filePayloadExists = require("../middleware/filePayloadExists");

router
  .route("/docs")
  .post(fileUpload({ createParentPath: true }), (req, res) => {
    const files = req.files;

    console.log(files);

    let fileNames = [];
    //console.log(files.item(i).name);

    Object.keys(files).forEach((key) => {
      const filepath = path.join(
        __dirname,
        "..",
        "uploads",
        "docs",
        files[key].name
      );
      files[key].mv(filepath, (err) => {
        if (err) return res.status(500).json({ error: err });
      });

      fileNames.push(files[key].name);
    });

    return res.json({
      files: fileNames,
      success: "Images has been logged!",
    });
  });

router
  .route("/products")
  .post(fileUpload({ createParentPath: true }), (req, res) => {
    const files = req.files;

    console.log(files);

    let fileNames = [];
    //console.log(files.item(i).name);

    Object.keys(files).forEach((key) => {
      const filepath = path.join(
        __dirname,
        "..",
        "uploads",
        "products",
        files[key].name
      );
      files[key].mv(filepath, (err) => {
        if (err) return res.status(500).json({ error: err });
      });

      fileNames.push(files[key].name);
    });

    return res.json({
      files: fileNames,
      success: "Images has been logged!",
    });
  });

router
  .route("/auctions")
  .post(fileUpload({ createParentPath: true }), (req, res) => {
    const files = req.files;

    console.log(files);

    let fileNames = [];
    //console.log(files.item(i).name);

    Object.keys(files).forEach((key) => {
      const filepath = path.join(
        __dirname,
        "..",
        "uploads",
        "auctions",
        files[key].name
      );
      files[key].mv(filepath, (err) => {
        if (err) return res.status(500).json({ error: err });
      });

      fileNames.push(files[key].name);
    });

    return res.json({
      files: fileNames,
      success: "Images has been logged!",
    });
  });

module.exports = router;
