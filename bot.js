const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("526849328292298780")
setInterval(function() {
channel.send(`allh akbr`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
