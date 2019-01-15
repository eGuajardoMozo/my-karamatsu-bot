const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

var sayingHi = ["hi", "Hi", "hello", "Hello", "hey", "Hey"];
var hiResponses = ["Hello darling!", "Ah, hello my sweet angel :heart: !", "Hello my dear~", "Hello my love :heart_eyes:", "Hey there beautiful :sunglasses:"];

bot.on('ready', function (evt) {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Here for you my love`);
});

bot.on('message', (message) => {
	for (var i = 0; i < sayingHi.length; i++)
	{
		if(message.content.includes(sayingHi[i])) {
			var hiAux = hiResponses[Math.floor(Math.random()*hiResponses.length)];
			message.reply(hiAux);
		}
	}
});

bot.login(process.env.token);
