module.exports = {
  name: "join",
  run(ctx) {
    const user = ctx.message.new_chat_members[0];

    ctx.reply(`
🎉 Welcome ${user.first_name}

🚀 Enjoy the group!
    `);
  }
};
