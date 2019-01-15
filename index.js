const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', function (evt) {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Here for you my love`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'hi':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hello darling!'
                });
            break;
            // Just add any case commands if you want to..
         }
    }
  });

bot.login(process.env.token);
