const express = require("express");
const router = express.Router();
const rootController = require("../controller/rootController");

router.route("/getproducts").get(rootController.getProducts);
router.route("/getproducts/:id").get(rootController.getProductDetails);

module.exports = router;
