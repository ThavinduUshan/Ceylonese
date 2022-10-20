const express = require("express");
const router = express.Router();
const chatController = require("../controller/chatController");

router.route("/rooms/buyer").post(chatController.getRoomsByBuyer);
router.route("/rooms/seller").post(chatController.getRoomsBySeller);
router.route("/:id").get(chatController.getChatsByRoomID);
router.route("/send").post(chatController.addMessage);

module.exports = router;
