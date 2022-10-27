const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("timeoutstd")
    .setDescription(
      "Informs the member of a timeout and times out that member for x hours"
    )
    .addUserOption((option) =>
      option
        .setName("target")
        .setRequired(true)
        .setDescription("The member you want to timeout!")
    )
    .addIntegerOption((option) =>
      option
        .setName("time")
        .setDescription("The amount of hours to timeout a member for")
        .setRequired(true)
    ),

  async execute(interaction, client) {
  
    if (interaction.channel == "1034792203739996230") {
            
      const user = interaction.options.getUser("target");
      const time = interaction.options.getInteger('time');
      const reason = `Hey Du! \n\nUnser TASK-Mod-Team sieht sich leider gezwungen, Dir für ${time} Stunden einen Time-Out zu geben, da Dein Regelverstoß zu schwerwiegend war oder vorherige Maßnahmen zu keiner Besserung geführt haben. Bitte nutze die Zeit, um dein Verhalten zu überdenken und somit weiteren Maßnahmen vorzubeugen!!\nBei Fragen steht das Team gerne zur Verfügung.\nVielen Dank für Dein Verständnis!`;
      const member = await interaction.guild.members
        .fetch(user.id)
        .catch(console.error);
      await user.send(reason).catch(console.error);
      await member.timeout(time * 60 * 60 * 1000).catch(console.error);
      await interaction.reply({
        content: `Time out ${user.tag} successfully: ${time} hours`,
      })
      console.log("timeoutstd wurde ausgefuehrt");
    } else {
      const newMessage1 = "Keine Berechtigung um dieses Kommando auszuführen";
      await interaction.reply({
        content: newMessage1,
      });
    }
  },
};
