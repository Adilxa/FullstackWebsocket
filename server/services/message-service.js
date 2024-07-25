class MessageService {
  constructor() {
    this.messages = [];
    this.limit = 9;
  }

  addMessage(message) {
    if (this.messages.length >= this.limit) {
      this.messages.shift();
    }
    this.messages.push(message);
    return this.messages;
  }

  getAllMessages() {
    return this.messages;
  }
}

module.exports = new MessageService();
