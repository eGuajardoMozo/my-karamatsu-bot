const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', function (evt) {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Here for you my love`);
});

bot.on('message', (message) => {
    if(message.content.includes('hi') || message.content.includes('hello')) {
        message.reply('Hello darling!');
    }
});

bot.login(process.env.token);
