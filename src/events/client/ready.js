module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        client.user.setActivity('NoReply BOT! Ich sorge für Recht und Ordnung und infomiere die Mitglieder dieses Server', 4)
        console.log(`Ready!!! ${client.user.tag} is logged in and online`);
    }
}