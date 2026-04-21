const fs = require("fs");

module.exports = (bot) => {
  bot.events = new Map();

  const files = fs.readdirSync("./events");

  for (const file of files) {
    const ev = require(`../events/${file}`);
    bot.events.set(ev.name, ev);
    console.log(`⚡ Event Loaded: ${ev.name}`);
  }

  bot.on("message", (ctx) => {
    const ev = bot.events.get("message");
    if (ev) ev.run(ctx, bot);
  });

  bot.on("new_chat_members", (ctx) => {
    const ev = bot.events.get("join");
    if (ev) ev.run(ctx, bot);
  });
};
