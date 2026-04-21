module.exports = {
  name: "message",
  run(ctx) {
    if (!ctx.message.text) return;

    const msg = ctx.message.text.toLowerCase();

    if (msg.includes("hello")) {
      ctx.reply("👋 Hi there!");
    }

    if (msg.includes("bot")) {
      ctx.reply("🤖 I'm alive!");
    }
  }
};
