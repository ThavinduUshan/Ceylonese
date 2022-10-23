const express = require("express");
const router = express.Router();
const moderatorController = require("../controller/moderatorController");

router.route("/sellerrequests").get(moderatorController.getSellerRequests);
router.route("/sellerrequests/:id").get(moderatorController.getRequestDetails);
router.route("/sellerrequests/accept").post(moderatorController.acceptSeller);
router.route("/sellerrequests/reject").post(moderatorController.rejectSeller);
router
  .route("/supportticketissues")
  .post(moderatorController.getSupportTicketIssues);
router
  .route("/supportticketissues/:id")
  .get(moderatorController.getSupportTicketIssuesDetails);
router
  .route("/supportticket/close")
  .post(moderatorController.closeSupportTicket);
router.route("/supportticket/open").post(moderatorController.openSupportTicket);
router
  .route("/supportticketcomplains")
  .post(moderatorController.getSupportTicketComplains);
router
  .route("/supportticketcomplains/:id")
  .get(moderatorController.getSupportTicketComplainDetails);

  router
  .route("/Charts/getchartdata")
  .post(moderatorController.getSupportTicketTypes);

router
  .route("/Charts/getsellerrequestspercentages")
  .post(moderatorController.getSellerRequestsPercentages);

module.exports = router;
