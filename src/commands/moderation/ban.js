const { SlashCommandBuilder, time } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("bans the member provided")
    .addUserOption((option) =>
      option
        .setName("target")
        .setRequired(true)
        .setDescription("The member you want to ban!")
    )
    .addStringOption(
      (option = option
        .setName("reason")
        .setDescription("The reason for ban the member provided which is sent to the member.")
        .setRequired(true)
      )
    )
    .addIntegerOption(
      (option = option
        .setName("days")
        .setDescription("The amount of days you want to ban the user, Number must be between 0 and 7")
        .setRequired(false))
    ),

  async execute(interaction, client) {
    if (interaction.channel == "1034792203739996230") {
      const user = interaction.options.getUser("target");
      const reason = interaction.options.getString("reason");
      const time = interaction.option.days;
      const member = await interaction.guild.members
        .fetch(user.id)
        .catch(console.error);

      await user
        .send({
          content: `Hey Du! \n\nUnser TASK-Mod-Team sieht sich leider gezwungen, dich vom Server zu für ${time} Tage zu bannen, da Dein Regelverstoß zu schwerwiegend war oder vorherige Maßnahmen zu keiner Besserung geführt haben. Bitte überdenke dein Verhalten und joine unserem Server erst wieder wenn du dir über die begangenen Fehler bewusst bist!!\nBei Fragen steht das Team gerne zur Verfügung.\nVielen Dank für Dein Verständnis! \n\n Der Grund für den Kick ist: ${reason}`,
        })
        .catch(console.log("Benutzer hat seine DMs ausgeschaltet!"));

      await member
        .ban({ deleteMessageDays: time, reason: reason })
        .catch(sonsole.error);

      const message = await interaction.deferReply({
        fetchReply: true,
      });

      const newMessage = `${user.tag} wurde gebannt für ${time} Tage `;
      await interaction.editReply({
        content: newMessage,
      });
    } else {
      await interaction.editReply({
        content: "Dieses Kommando ist hier nicht erlaubt",
      });
    }
  },
};
