const express = require("express");
const router = express.Router();
const sellerController = require("../controller/sellerController");

router.route("/requests").post(sellerController.submitSellerRequests);
router.route("/login").post(sellerController.loginSeller);
router.route("/addproduct").post(sellerController.addProduct);
router.route("/addauction").post(sellerController.addAuction);
router.route("/getlistings").post(sellerController.getSellerListings);
router.route("/getauctions").post(sellerController.getSellerAuctions);
router.route("/orders").post(sellerController.getPendingOrders);
router
  .route("/orders/update/shipping")
  .post(sellerController.updateShippingStatus);
router.route("/orders/shipped").post(sellerController.getShippedOrders);
router.route("/orders/completed").post(sellerController.getCompletedOrders);
router
  .route("/getproductsfromstore")
  .post(sellerController.getProductsFromStore);
router
  .route("/charts/getannualsalesdata")
  .post(sellerController.getAnnualSalesData);
router
  .route("/charts/getchartdata")
  .post(sellerController.getSalesByCategories);

module.exports = router;
