const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

var hiResponses = ["Hello darling!", "Ah, hello my sweet angel :heart: !", "Hello my dear~", "Hello my love :heart_eyes:", "Hey there beautiful :sunglasses:"];

bot.on('ready', function (evt) {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Here for you my love`);
});

bot.on('message', (message) => {
    if(message.content.includes('hi')) {
		var hiAux = hiResponses[Math.floor(Math.random()*hiResponses.length)];
        message.reply(hiAux);
    }
	if(message.content.includes('Hi')) {
		var hiAux = hiResponses[Math.floor(Math.random()*hiResponses.length)];
        message.reply(hiAux);
    }
	if(message.content.includes('hello')) {
		var hiAux = hiResponses[Math.floor(Math.random()*hiResponses.length)];
        message.reply(hiAux);
    }
	if(message.content.includes('Hello')) {
		var hiAux = hiResponses[Math.floor(Math.random()*hiResponses.length)];
        message.reply(hiAux);
    }
	if(message.content.includes('hey')) {
		var hiAux = hiResponses[Math.floor(Math.random()*hiResponses.length)];
        message.reply(hiAux);
    }
	if(message.content.includes('Hey')) {
		var hiAux = hiResponses[Math.floor(Math.random()*hiResponses.length)];
        message.reply(hiAux);
    }

});

bot.login(process.env.token);
