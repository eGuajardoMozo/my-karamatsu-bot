const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

var hiResponses = ["Hello darling!", "Ah, hello my sweet angel :heart: !", "Hello my dear~", "Hello my love :heart_eyes:", "Hey there beautiful :sunglasses:"];
var morningResponses = ["Good morning my sweet angel", "Good morning sunshine :heart:", "Good morning sleepyhead", "Good morning love", "Good morning flower"];
var nightResponses = ["Sleep tight darling", "Sweet dreams my angel", "Good night love :heart:", "Good night, I'll see you in my dreams darling", "Until tomorrow my sweet, good night"];

bot.on('ready', function (evt) {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Here for you my love`);
});

bot.on('message', async message => {
	
	if (message.author.bot) return;
	
    if( message.content.includes('hi') || message.content.includes('Hi') || message.content.includes('Hello') || 
	message.content.includes('hello') || message.content.includes('Hey') || message.content.includes('hey')) {
		var hiAux = hiResponses[Math.floor(Math.random()*hiResponses.length)];
        message.reply(hiAux);
    }
	
	if (message.content.includes('mornin') || message.content.includes('Mornin') || message.content.includes('good morning') || 
	message.content.includes('Good morning')) {
		var morningAux = morningResponses[Math.floor(Math.random()*morningResponses.length)];
		message.reply(morningAux);
	}
	
	if (message.content.includes('good night') || message.content.includes('Good night')) {
		var nightAux = nightResponses[Math.floor(Math.random()*nightResponses.length)];
		message.reply(nightAux);
	}
});

bot.login(process.env.token);
