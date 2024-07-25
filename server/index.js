const express = require("express");
const cors = require("cors");
const router = require("./router/index");
const { WebSocketServer } = require("ws");
const messageService = require("./services/message-service");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.use("/api", router);

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

const wss = new WebSocketServer({ server });
global.wss = wss;

wss.on("connection", ws => {
  ws.send(JSON.stringify(messageService.getAllMessages()));
});
