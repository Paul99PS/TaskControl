const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("voicewarn")
    .setDescription(
      "Warns a member of your discord regarding their behavior in voice chats"
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
      const NACHRICHT = "Hey Du!\n\nUnserem TASK-Mod-Team ist aufgefallen, dass Du dich im (Voice-)Chat nicht an die Regeln hältst. Bitte passe Dein Verhalten an, damit sich weiterhin alle Servermitglieder wohlfühlen können.\nSollte uns auffallen, dass sich keine Besserung zeigt, sind weiterführende Maßnahmen nicht auszuschließen.\nBei Fragen stehen dir gerne SplashyKhan und tomgaming5887 sowie alle V12-Bitrubos gerne zur Verfügung.\nVielen Dank für Dein Verständnis und weiterhin viel Spaß bei TASK Force! \n\nDiese Nachricht wurde automatisch erstellt.";
        
      const user = interaction.options.getUser("target");
      const newMessage = `voicewarn wurde gegen ${user.tag} ausgefuehrt`;
      user.send({ content: NACHRICHT });
      await interaction.editReply({
        content: newMessage,
      });
      console.log(`voicewarn wurde gegen ${user.tag} ausgefuehrt`);
    } else {
      const newMessage1 = "Keine Berechtigung um dieses Kommando auszuführen";
      await interaction.editReply({
        content: newMessage1,
      });
    }
  },
};
