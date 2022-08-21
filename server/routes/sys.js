const express = require("express");
const router = express.Router();
const sysController = require("../controller/sysController");

router.route("/login").post(sysController.loginSysUsers);

module.exports = router;
