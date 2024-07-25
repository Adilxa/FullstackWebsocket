const Router = require("express").Router;
const messageController = require("../controllers/message-controller");

const router = new Router();

router.post(
  "/messages",
  messageController.createMessage.bind(messageController)
);
router.get("/messages", messageController.getMessages.bind(messageController));

module.exports = router;
