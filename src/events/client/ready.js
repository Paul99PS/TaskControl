module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        client.user.setActivity('NoReply BOT! Ich sorge für Recht und Ordnung und infomiere die Mitglieder dieses Server')
        console.log(`Ready!!! ${client.user.tag} is logged in and online`);
    }
}