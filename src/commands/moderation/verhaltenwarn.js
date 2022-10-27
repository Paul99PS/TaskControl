const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("verhaltenwarn")
    .setDescription(
      "Warns a member of your discord regarding their behavior in general"
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
      const NACHRICHT = "Hey Du! \n\nUnserem TASK-Mod-Team ist aufgefallen, dass es viele Beschwerden über Dich gibt. Bitte bessere Dein Verhalten in Zukunft, damit wir auch weiterhin viel Spaß und freundliche Unterhaltungen haben können. \nSollte uns auffallen, dass sich keine Besserung zeigt, sind weiterführende Maßnahmen nicht auszuschließen. \nBei Fragen steht das Team gerne zur Verfügung.\nVielen Dank für Dein Verständnis und weiterhin viel Spaß bei TASK Force!";
        
      const newMessage = "verhaltenwarn wurde ausgefuehrt";
      const user = interaction.options.getUser("target");
      user.send({ content: NACHRICHT });
      await interaction.editReply({
        content: newMessage,
      });
      console.log("verhaltenwarn wurde ausgefuehrt");
    } else {
      const newMessage1 = "Keine Berechtigung um dieses Kommando auszuführen";
      await interaction.editReply({
        content: newMessage1,
      });
    }
  },
};
