const { Telegraf } = require("telegraf");
const express = require("express");
const fs = require("fs-extra");

const config = require("./config");
const commandHandler = require("./handlers/commandHandler");
const eventHandler = require("./handlers/eventHandler");

const bot = new Telegraf(config.token);
// Load handlers
commandHandler(bot);
eventHandler(bot);

// ===== UPTIME SERVER =====
const app = express();

app.get("/", (req, res) => {
  res.send("✅ Bot is Alive (Advanced)");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("🌐 Server running...");
});

// ===== START BOT =====
bot.launch();
console.log("🚀 Advanced Bot Running...");
