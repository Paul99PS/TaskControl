const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("talk")
    .setDescription(
      "Informs a member Servermanagement has a wish to have a talk with that member."
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
      const NACHRICHT = "Hey Du!\n\nUnser TASK-Mod-Team möchte mit Dir sprechen. Bitte melde Dich so bald wie möglich bei einem Mod und vereinbare einen Gesprächstermin.\nBei Fragen stehen dir gerne SplashyKhan und tomgaming5887 sowie alle V12-Bitrubos gerne zur Verfügung.\nVielen Dank für Dein Verständnis und weiterhin viel Spaß bei TASK Force! \n\nDiese Nachricht wurde automatisch erstellt.";
        
      const user = interaction.options.getUser("target");
      const newMessage = `talk wurde gegen ${user.tag} ausgefuehrt`;
      user.send({ content: NACHRICHT });
      await interaction.editReply({
        content: newMessage,
      });
      console.log(`talk wurde gegen ${user.tag} ausgefuehrt`);
    } else {
      const newMessage1 = "Keine Berechtigung um dieses Kommando auszuführen";
      await interaction.editReply({
        content: newMessage1,
      });
    }
  },
};
