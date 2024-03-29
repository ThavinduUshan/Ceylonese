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
router.route("/charts/gettopproducts").post(sellerController.getTopProducts);
router.route("/getsales").post(sellerController.getSalesCount);
router.route("/getorders").post(sellerController.getOrdersCount);
router.route("/getpartnerships").post(sellerController.getPartnershipCount);
router.route("/gettodaysales").post(sellerController.getTodaySalesCount);
router.route("/getpendingorders").post(sellerController.getPendingOrdersCount);
router
  .route("/getcompletedorders")
  .post(sellerController.getCompletedOrdersCount);
router
  .route("/getbestsellingproducts")
  .post(sellerController.getBestSellingProducts);
router
  .route("/partnership/request")
  .post(sellerController.addPartnershipRequest);
router
  .route("/partnerships/pending")
  .post(sellerController.getPendingPartnerships);

router.route("/partnership/:id").get(sellerController.getPartnership);
router.route("/partnerships/accept").post(sellerController.acceptPartnership);
router.route("/partnerships/reject").post(sellerController.rejectPartnership);
router
  .route("/partnerships/active")
  .post(sellerController.getActivePartnerships);
router.route("/partnerships/end").post(sellerController.endPartnership);
router.route("/partnerships/ended").post(sellerController.getEndedPartnerships);

module.exports = router;
