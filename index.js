const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

var greet = false;
var hiResponses = ["Hello darling!", "Ah, hello my sweet angel :heart: !", "Hello my dear~", "Hello my love :heart_eyes:", "Hey there beautiful :sunglasses:"];

bot.on('ready', function (evt) {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Here for you my love`);
});

bot.on('message', (message) => {
    if(message.includes('hi') || message.includes('Hi') || message.includes('hello') || message.includes('Hello') || 
	message.includes('Hey') || message.includes('hey')) {
		greet = true
		
    }
	if (greet) {
		var hiAux = hiResponses[Math.floor(Math.random()*hiResponses.length)];
        message.reply(hiAux);
	}
});

bot.login(process.env.token);
