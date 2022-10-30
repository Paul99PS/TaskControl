const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("kicks the member provided")
    .addUserOption((option) =>
      option
        .setName("target")
        .setRequired(true)
        .setDescription("The member you want to kick!")
    )
    .addStringOption(
      ((option) => option
        .setName("reason")
        .setDescription(
          "The reason for kicking the member provided which is sent to the member.")
          .setRequired(true)
      )
    ),

  async execute(interaction, client) {
    if (interaction.channel == "1034792203739996230") {
      const user = interaction.options.getUser("target");
      const reason = interaction.options.getString("reason");
      const member = await interaction.guild.members
        .fetch(user.id)
        .catch(console.error);

      await user
        .send({
          content: `Hey Du! \n\nUnser TASK-Mod-Team sieht sich leider gezwungen, dich vom Server zu kicken, da Dein Regelverstoß zu schwerwiegend war oder vorherige Maßnahmen zu keiner Besserung geführt haben. Bitte überdenke dein Verhalten und joine unserem Server erst wieder wenn du dir über die begangenen Fehler bewusst bist!!\nBei Fragen stehen dir gerne SplashyKhan und tomgaming5887 sowie alle V12-Bitrubos gerne zur Verfügung.\nVielen Dank für Dein Verständnis! \n\n Der Grund für den Kick ist: ${reason} \n\nDiese Nachricht wurde automatisch erstellt.`,
        })
        .catch(console.log("Benutzer hat seine DMs ausgeschaltet!"));

      await member.kick(reason).catch(sonsole.error);

      const message = await interaction.deferReply({
        fetchReply: true,
      });

      const newMessage = `${user.tag} wurde gekickt`;
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
