const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', function (evt) {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`I'm back darling!`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '!';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}hi`){
    message.channel.send("Hello darling!");
  }
});

bot.login(process.env.token);
