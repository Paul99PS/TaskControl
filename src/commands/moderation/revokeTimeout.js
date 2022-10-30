const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("revoketimeout")
    .setDescription(
      "Informs the member that the timeout got revoked"
    )
    .addUserOption((option) =>
      option
        .setName("target")
        .setRequired(true)
        .setDescription("The member you want to revoke the timeout from!")
    ),

  async execute(interaction, client) {
  
    if (interaction.channel == "1034792203739996230") {
      

      
      const user = interaction.options.getUser("target");
      const reason = `Hey Du! \n\nUnser TASK-Mod-Team hat sich entschieden deinen Timeout zurückzuziehen! \nBei Fragen stehen dir gerne SplashyKhan und tomgaming5887 sowie alle V12-Bitrubos gerne zur Verfügung.\nVielen Dank für Dein Verständnis! \n\nDiese Nachricht wurde automatisch erstellt.`;
      const member = await interaction.guild.members
        .fetch(user.id)
        .catch(console.error);
      await user.send(reason).catch(console.error);
      await member.timeout(null).catch(console.error);
      await interaction.reply({
        content: `Time out ${user.tag} successfully: revoked`,
      })
      console.log("revoketimeout wurde ausgefuehrt");
    } else {
      const newMessage1 = "Keine Berechtigung um dieses Kommando auszuführen";
      await interaction.reply({
        content: newMessage1,
      });
    }
  },
};
