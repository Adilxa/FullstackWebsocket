const messageService = require("../services/message-service");
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/api-error");

class MessageController {
  createMessage(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ApiError.BadRequestError("Invalid request", errors.array())
        );
      }
      const { message } = req.body;
      const messages = messageService.addMessage(message);
      res.status(201).send({ message: "Message created" });
      this.notifyClients(messages);
    } catch (e) {
      next(e);
    }
  }

  getMessages(_, res, next) {
    try {
      const messages = messageService.getAllMessages();
      res.send(messages);
    } catch (e) {
      next(e);
    }
  }

  notifyClients(messages) {
    if (global.wss) {
      global.wss.clients.forEach(client => {
        if (client.readyState === 1) {
          client.send(JSON.stringify(messages));
        }
      });
    }
  }
}

module.exports = new MessageController();
