const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

var hiResponses = ["Hello darling!", "Ah, hello my sweet angel :heart: !", "Hello my dear~", "Hello my love :heart_eyes:", "Hey there beautiful :sunglasses:"];
var byeResponses = ["I'll be here waiting for you my love :heart:", "Take care darling, I miss you already", "See you soon my angel!", "I'll see you later beautiful :rose:"];
var morningResponses = ["Good morning my sweet angel, did you sleep well?", "Good morning sunshine :heart: did you get the rest you needed?", "Good morning my darling, you slept well?", "Good morning love, did you have a good night's rest?", "Good morning flower, how are you feeling on this brand new morning? :sparkles:"];
var nightResponses = ["Sleep tight darling, I'll see you tomorrow", "Sweet dreams my angel", "Good night love :heart:", "Good night, I'll see you in my dreams darling", "Until tomorrow my sweet, good night"];

bot.on('ready', function (evt) {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Here for you my love`);
});

bot.on('message', function(message) {
    // Now, you can use the message variable inside

        var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
            message.channel.send("123")
            .catch(console.error); // add error handling here
        }, 1000); 
    
});

bot.on('message', async message => {
	//so he won't reply to himself
	if (message.author.bot) return;
	
	//Greetings and goodbyes
	if (message.content.includes('mornin') || message.content.includes('Mornin') || message.content.includes('good morning') || 
	message.content.includes('Good morning')) {
		var morningAux = morningResponses[Math.floor(Math.random()*morningResponses.length)];
		message.reply(morningAux);
	}
	
	else if (message.content.includes('good night') || message.content.includes('Good night')) {
		var nightAux = nightResponses[Math.floor(Math.random()*nightResponses.length)];
		message.reply(nightAux);
	}
	
    else if( message.content.includes('hi') || message.content.includes('Hi') || message.content.includes('Hello') || 
	message.content.includes('hello') || message.content.includes('Hey') || message.content.includes('hey')) {
		var hiAux = hiResponses[Math.floor(Math.random()*hiResponses.length)];
        message.reply(hiAux);
    }
	
	else if (message.content.includes('bye') || message.content.includes('Bye') || message.content.includes('I have to go') || 
	message.content.includes('i have to go') || message.content.includes('i gotta go') || message.content.includes('I gotta go')) {
		var byeAux = byeResponses[Math.floor(Math.random()*byeResponses.length)];
		message.reply(byeAux);
	}
	
});

bot.login(process.env.token);
