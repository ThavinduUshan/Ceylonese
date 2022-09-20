const express = require("express");
const router = express.Router();
const buyerController = require("../controller/buyerController");

router.route("/register").post(buyerController.createBuyer);

router.route("/login").post(buyerController.LoginBuyer);
router.route("/bid").post(buyerController.placeBid);
router.route("/checkout/details").post(buyerController.getCheckoutDetails);
router.route("/orders").post(buyerController.getOrders);
router.route("/orders/completed").post(buyerController.getCompletedOrders);
router.route("/bids/active").post(buyerController.getBidsActive);
router.route("/bids/ended").post(buyerController.getBidsEnded);
router.route("/orders/orderitem/:id").get(buyerController.ratingItem);
router.route("/orders/review/submit").post(buyerController.submitReview);
router.route("/getbidder").post(buyerController.getBidder);
router.route("/orders/pending/top").post(buyerController.getOrdersTop);
router
  .route("/orders/completed/top")
  .post(buyerController.getOrdersCompletedTop);

module.exports = router;
