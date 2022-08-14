const express = require("express");
const router = express.Router();
const buyerController = require("../controller/buyerController");

router.route("/register").post(buyerController.createBuyer);

router.route("/login").post(buyerController.LoginBuyer);

module.exports = router;
