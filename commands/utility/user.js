const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("provides information about the user"),
  async execute(interaction) {
    await interaction.reply(
      `This command is run by${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`
    );
  },
};
