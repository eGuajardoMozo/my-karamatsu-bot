const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
Random rnd = new Random();

string[] hiResponses = {"Hello darling!", "Ah, hello my sweet angel :heart: !", "Hello my dear~", "Hello my love :heart_eyes:" };
int i = rnd.Next(0, hiResponses.Length);

bot.on('ready', function (evt) {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Here for you my love`);
});

bot.on('message', (message) => {
    if(message.content.includes('hi') || message.content.includes('hello')) || message.content.includes('Hello')) || message.content.includes('Hi')) {
        message.reply(hiResponses[i]);
    }
});

bot.login(process.env.token);
