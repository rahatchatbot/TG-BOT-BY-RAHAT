const fs = require("fs");
const config = require("../config");
const cooldown = require("../utils/cooldown");

module.exports = (bot) => {
  bot.commands = new Map();

  const files = fs.readdirSync("./commands");

  for (const file of files) {
    const cmd = require(`../commands/${file}`);
    bot.commands.set(cmd.name, cmd);
    console.log(`✅ Command Loaded: ${cmd.name}`);
  }

  bot.on("text", async (ctx) => {
    const text = ctx.message.text;
    if (!text.startsWith(config.prefix)) return;

    const args = text.slice(config.prefix.length).split(" ");
    const name = args.shift().toLowerCase();

    const cmd = bot.commands.get(name);
    if (!cmd) return;

    if (cooldown(ctx.from.id, name)) {
      return ctx.reply("⏳ Wait a bit...");
    }

    try {
      await cmd.run(ctx, args, bot);
    } catch (e) {
      console.log(e);
    }
  });
};
