const express = require("express");
const router = express.Router();
const sellerController = require("../controller/sellerController");

router.route("/requests").post(sellerController.submitSellerRequests);
router.route("/login").post(sellerController.loginSeller);
router.route("/addproduct").post(sellerController.addProduct);
router.route("/addauction").post(sellerController.addAuction);
router.route("/getlistings").post(sellerController.getSellerListings);
router.route("/getauctions").post(sellerController.getSellerAuctions);
router
  .route("/getproductsfromstore")
  .post(sellerController.getProductsFromStore);
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
