const { SlashCommandBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Returns my ping'),
async execute(interaction, client) {
    const message = await interaction.deferReply({
        fetchReply: true
    });
    if(interaction.channel == '1034792203739996230') {
        const newMessage = `API Latency: ${client.ws.ping}\nClient Ping: ${message.createdTimestamp - interaction.createdTimestamp}`
        await interaction.editReply({
            content : newMessage
        });
    } else {
        await interaction.editReply({content :'Dieses Kommando ist hier nicht erlaubt'})
    }
} 
}