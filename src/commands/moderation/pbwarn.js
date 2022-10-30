const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pbwarn")
    .setDescription(
      "Warns a member of your discord regarding their profile picture"
    )
    .addUserOption((option) =>
      option
        .setName("target")
        .setRequired(true)
        .setDescription("The member you want to warn!")
    ),

  async execute(interaction) {
    const message = await interaction.deferReply({
      fetchReply: true,
    });
    if (interaction.channel == "1034792203739996230") {
      const NACHRICHT = "Hey Du! \n \nUnserem TASK-Mod-Team ist aufgefallen, dass dein Profilbild nicht unseren Serverrichtlinien entspricht. Wir bitten Dich, entsprechende Änderungen durchzuführen, um ein freundliches und sicheres Zusammensein zu gewährleisten. \nSollte uns auffallen, dass sich keine Besserung zeigt, sind weiterführende Maßnahmen nicht auszuschließen. \nBei Fragen stehen dir gerne SplashyKhan und tomgaming5887 sowie alle V12-Bitrubos gerne zur Verfügung.\nVielen Dank für Dein Verständnis und weiterhin viel Spaß bei TASK Force! \n\nDiese Nachricht wurde automatisch erstellt.";
        
      const user = interaction.options.getUser("target");
      const newMessage = `pbwarn wurde gegen ${user.tag}ausgefuehrt`;
      user.send({ content: NACHRICHT });
      await interaction.editReply({
        content: newMessage,
      });
      console.log(`pbwarn wurde gegen ${user.tag}ausgefuehrt`);
    } else {
      const newMessage1 = "Keine Berechtigung um dieses Kommando auszuführen";
      await interaction.editReply({
        content: newMessage1,
      });
    }
  },
};
