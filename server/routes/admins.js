const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");

router.route("/addmoderators").post(adminController.createMod);
router.route("/getmoderators").get(adminController.getModerators);
router.route("/reports/issues").post(adminController.getIssuesData);
router.route("/reports/sales").post(adminController.getSalesData);

module.exports = router;
