module.exports = {
  name: "start",
  run(ctx) {
    ctx.reply(`
👋 Welcome ${ctx.from.first_name}

🔥 Advanced Render Bot Ready
⚡ Fast | Stable | 24/7

Use /help
    `);
  }
};
