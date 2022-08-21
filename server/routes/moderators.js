const express = require("express");
const router = express.Router();
const moderatorController = require("../controller/moderatorController");

router.route("/sellerrequests").get(moderatorController.getSellerRequests);
router.route("/sellerrequests/:id").get(moderatorController.getRequestDetails);
router.route("/sellerrequests/accept").post(moderatorController.acceptSeller);
router.route("/sellerrequests/reject").post(moderatorController.rejectSeller);
module.exports = router;
