const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

var randomKaraTexts = ["I saw the stars last night and started thinking of you darling. Always glistening so brightly I can't help but smile, but of course the stars could never compare to your beauty. It brings a song to my heart. Today I think I'll go to the roof and write it down so I can sing it to you someday.", "Darling can I just say that you're absolutely amazing? So beautiful and smart, a bright mind and pure heart filled with so much love to share. Sometimes I can't believe how incredibly lucky I was to meet you.", "Today I filled so many pages of poems dedicated to you my flower. It's funny, ever since I met you I've been needing to buy notebooks more often, and the more pages I fill the more my heart swells with all this love I want to convey to you. It feels wonderful.", "I keep having dreams of a future together darling. Every single time I see us happily living together, spending each day by each other's side, and having a family of our own. The day our love takes shape into a brand new life I'll probably think I'm dreaming again. But even in a dream as long as it's with you, I'll be happy.", "Heh, don't mind me love, I just wanted to briefly remind you how much I've hopelessly fallen in love with you. Because I have, and every word that leaves your lips, every single touch of your hand against mine, and every smile directed just to me makes me want to soar and lose myself in this wonderful feeling. You make me the happiest man in the world."];
var randomTimes = [25200000, 216000000, 19800000, 18000000, 14400000 ];
var hiResponses = ["Hello darling!", "Ah, hello my sweet angel :heart: !", "Hello my dear~", "Hello my love :heart_eyes:", "Hey there beautiful :sunglasses:"];
var byeResponses = ["I'll be here waiting for you my love :heart:", "Take care darling, I miss you already", "See you soon my angel!", "I'll see you later beautiful :rose:"];
var morningResponses = ["Good morning my sweet angel, did you sleep well?", "Good morning sunshine :heart: did you get the rest you needed?", "Good morning my darling, you slept well?", "Good morning love, did you have a good night's rest?", "Good morning flower, how are you feeling on this brand new morning? :sparkles:"];
var nightResponses = ["Sleep tight darling, I'll see you tomorrow", "Sweet dreams my angel", "Good night love :heart:", "Good night, I'll see you in my dreams darling", "Until tomorrow my sweet, good night"];
var loveResponses = ["And I love you my flower, more than you could ever imagine.", "I love you too my darling, more than anything else in this world.", "I love you the most my angel :heart:", "As do I... I love you so much darling.", "And I love you too sweet angel. My heart will always be yours."];

bot.on('ready', function (evt) {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Here for you my love`);
});

bot.on('message', function(message) {
    // Now, you can use the message variable inside
    if (message.content === "$talk") {
		var randomTimeAux = randomTimes[Math.floor(Math.random()*randomTimes.length)];		
        var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
			var randomKaraAux = randomKaraTexts[Math.floor(Math.random()*randomKaraTexts.length)];
            message.channel.send(randomKaraAux)
            .catch(console.error); // add error handling here
        }, randomTimeAux); 
    }
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
	
	//Love and affection
	if (message.content.includes('love you')) {
		var loveAux = loveResponses[Math.floor(Math.random()*loveResponses.length)];
		message.reply(loveAux);
	}
	
});

bot.login(process.env.token);
