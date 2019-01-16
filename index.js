const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

var continueMorning = false;
var continueHowAreYou = false;
var continueHorny = false;

//KARA'S ANSWERS
{
	//Randomly sent by Kara
	var randomKaraLoveTexts = ["I saw the stars last night and started thinking of you darling. Always glistening so brightly I can't help but smile, but of course the stars could never compare to your beauty. It brings a song to my heart. Today I think I'll go to the roof and write it down so I can sing it to you someday.", "Darling can I just say that you're absolutely amazing? So beautiful and smart, a bright mind and pure heart filled with so much love to share. Sometimes I can't believe how incredibly lucky I was to meet you.", "Today I filled so many pages of poems dedicated to you my flower. It's funny, ever since I met you I've been needing to buy notebooks more often, and the more pages I fill the more my heart swells with all this love I want to convey to you. It feels wonderful.", "I keep having dreams of a future together darling. Every single time I see us happily living together, spending each day by each other's side, and having a family of our own. The day our love takes shape into a brand new life I'll probably think I'm dreaming again. But even in a dream as long as it's with you, I'll be happy.", "Heh, don't mind me love, I just wanted to briefly remind you how much I've hopelessly fallen in love with you. Because I have, and every word that leaves your lips, every single touch of your hand against mine, and every smile directed just to me makes me want to soar and lose myself in this wonderful feeling. You make me the happiest man in the world."];
	var randomKaraTalk = ["*sigh* sometimes I wish I was bird, with wings to fly wherever you were and be with you always. But then again, if I was a bird I wouldn't be able to kiss you. Perhaps there are birds that wished they were me, just so they could kiss you.", "While I was out today on the roof my sweet Jyushimatsu gave me some company and we sang until the sun set. We make a magnificent duet, but I wish I could sing with my other brothers as well. Surprisingly we were all blessed with good voices (some better than others :sunglasses:). One day I'll get all six of us to sing together.", "Last night we had some absolutely fantastic Gyudon for dinner! Courtesy of my very talented mother. You should come have dinner with us all one day darling, I'm sure you'd have a wonderful time.", "We went to visit our dear friend Chibita yesterday and as we always do we merrily drank the night away. Fear not darling, for even amidst the hazy stupor of alcohol I remain alert, and because our useless older brother passed out I took charge like the responsible older brother I am and safely brought all my brothers home! You should have seen it, I was so cool even Ichimatsu wouldn't deny it :sunglasses: It's a shame they don't remember anything.", "Ah darling I just woke up from the best nap I've had in days. None of my brothers woke me up abruptly and I feel absolutely fantastic! Heh, it's probably related to the fact that you were in my dreams :sparkles:"];
	var randomBrotherTalk = ["Wouldn't you believe it darling? We just caught Osomatsu hiding from us some big pachinko winnings. But don't worry, we kindly reminded him the importance of being generous with his younger brothers.", "I saw Choromatsu reading one of his light novels behind a job magazine again. I don't know why he feels the need to hide his hobbies, I'm sure if he shared them it'd bring us closer to him!", "Recently I was accompanying Jyushimatsu to the park and saw Ichimatsu talking with some cats in an alley. It always amazes me how gentle and kind he is with them all, feeding them and patting them so amicably. My little brother sure is a very loving person isn't he?", "Ah, we got some mail today and my sweet Jyushimatsu was incredibly excited. It warms my heart to know he stays in contact with the sweet girl that captured his heart. Hopefully she'll be able to visit him soon.", "It was very cold the other night and Todomatsu cuddled up to me! Of course he was asleep and didn't notice, but darling I couldn't keep the smile off my face. I wish I could have taken a picture."];
	var randomTimes = [25200000, 216000000, 19800000, 18000000, 14400000 ]; //in 7, 6, 5:30, 5 or 4 hours

	//Continued
	var goodMorningResponses = ["Music to my ears :sparkles: oh well, rather to my eyes I suppose. Heh.", "Wonderful! I wouldn't be surprised if it was because you dreamed of me", "I'm glad you slept well my love. It's a shame I wasn't there to kiss you awake, you must have looked lovely while you slept :heart:", "There's no better way to start the day than with a smile on your lips. I'm glad you slept well angel~", "That's wonderful, maybe someday I'll be blessed enough to wake up by your side"];
	var badMorningResponses = ["M-My darling! :worried: Was it because of a nightmare? Don't worry I'll always be here to protect you!", "Had a rough night? It's okay my love, it happens from time to time :cry: I'm here for you.", "Ah my poor flower... it's okay, I've had bad nights too. You're not alone.", "So it was a long night for you huh? :worried: It's okay darling, I'm here for whatever you need.", "Oh my angel... I know you must be tired after a restless night, but know that I'll be here cheering for you."];
	var hiBadResponses = ["Don't worry my love! I'll cheer for you! You know I'll always be here as your support :heart:", "Darling... don't worry, I'm certain things will get better soon. So smile, okay?", "It's okay to have bad days my angel, I know what that is like... which is why I'll be here rooting for you. I'll always be by your side.", "Hey... it's going to get better alright? You're not alone, I'm right here with you :heart:", "Then I'll stay by your side supporting you as much as you need my angel. Don't worry, you'll see things will turn out for the best."];
	var hiWorkingResponses = ["Always so hardworking, you make me so proud :heart:", "Doing your best I see! Just be sure to not work yourself too hard beautiful", "Ah I see, then I hope you have a good day flower. Be sure to take breaks whenever you need it.", "You're doing wonderfully darling :rose: Thank you for all your hard work.", "Keep doing your best darling, I'm sure all your efforts will be rewarded :kissing_heart:"];
	var hiOkayResponses = ["That's good to know. If my Karamatsu Girl is happy then I'm happy :blue_heart:", "Perfect! I want every day to be a good one for my darling :sunglasses:", "Ah yes, the way it's always meant to be :sparkles:", "Wonderful! If my flower is having a good day then I know for sure so will I", "Ah, nothing but good news! Then I hope the rest of your day goes wonderfully~"];

	//Greetings and talking
	var morningResponses = ["Good morning my sweet angel, did you sleep well?", "Good morning sunshine :heart: did you get the rest you needed?", "Good morning my darling, you slept well?", "Good morning love, did you have a good night's rest?", "Good morning flower, how are you feeling on this brand new morning? :sparkles:"];
	var nightResponses = ["Sleep tight darling, I'll see you tomorrow", "Sweet dreams my angel", "Good night love :heart:", "Good night, I'll see you in my dreams darling", "Until tomorrow my sweet, good night"];
	var hiResponses = ["Hello darling! How are you doing?", "Ah, hello my sweet angel :heart:! How are you today?", "Hello my dear~:sparkles: How's your day going?", "Hello my love :heart_eyes: Are you having a good day?", "Hey there beautiful :sunglasses: How's it going?"];
	var byeResponses = ["I'll be here waiting for you my love :heart:", "Take care darling, I miss you already", "See you soon my angel!", "I'll see you later beautiful :rose:", "I'll be here waiting for your return my dearest~"];
	var attentionResponses = ["Hm?", "Yes darling?", "What is it love?", "Yes honey?", "Hm? What is it darling?"];
	var howAreYouResponses = ["I'm doing wonderfully darling, especially now because I'm talking to you :heart:", "I'm feeling fantastic my flower! Such a perfect day to keep conveying my love for you.", "Ah, I'm doing well love. I'm especially inspired today so I might spend some time writing and singing songs :sparkles:", "I'm doing just fine honey, thank you for asking~ I had a good night's sleep so I'm in a very good mood.", "I'm actually feeling pretty great today! You were the first thing that came into my mind when I woke up :heart:"];

	//Love and affection
	var loveResponses = ["And I love you my flower, more than you could ever imagine.", "I love you too my darling, more than anything else in this world.", "I love you the most my angel :heart:", "As do I... I love you so much darling.", "And I love you too my sweet angel. My heart will always be yours."];
	var thankResponses = ["It's absolutely no problem my dear", "You're welcome my flower :rose: !", "It's my pleasure love", "You're more than welcome beautiful", "It's no problem at all my honey"];
	var emojiResponses = [":heart: :heart: :heart:", ":heart_eyes: :heart_eyes: :heart_eyes:", ":kissing_heart: :kissing_heart: :kissing_heart:", ":blue_heart: :blue_heart: :blue_heart:", ":sunglasses: :rose:", ":heartpulse: :heartpulse: :heartpulse:", ":two_hearts: :two_hearts: :two_hearts:", ":sparkling_heart: :sparkling_heart: :sparkling_heart:", ":kissing_closed_eyes: :heart:"];
	var shyComplimentResponses = ["E-Ehh??", ":flushed:", "M-Me??", "I-Is that what you think? :flushed:", "Eh?? R-Really?"];
	var shyComplimentNextResponse = ["Well... I think you are much more than I am", "I personally would have used another word like handsome or cool... but thank you darling.", "Personally I would have gone for *incredibly* handsome, but... thank you so much darling.", "I-I think you got this backwards my honey", "Well I -ahem- usually don't go by that, but I'm glad you think so..."]
	var sexyComplimentResponses = ["***Heh***. Thank you for noticing my darling!", "I sure am aren't I? :sunglasses: And it's only to be expected that I have an equally gorgeous and amazing girlfriend", "How kind of you to point it out darling! You have such good taste don't you? :heart:", "Right? It's a wonder how such a sinful and guilty man as myself was bestowed this much power.", "Why thank you my love! I know that this sinful body of mine could captivate every single heart on earth, but I'll always devote myself to you only."];
	
	//Sexy stuff
	var hornyResponses = ["Oh my... is that so? :smirk:", "Oh? Does my Karamatsu Girl need to be taken care of?", "Always so forward my darling... and I'm always happy to be of assistance.", "Oh my, then if you allow me... I'll gladly fuel the fire of passion within you.", "Then please... let me take care of you..."];
}
	
bot.on('ready', function (evt) {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Here for you my love`);
});

bot.on('message', function(message) {
    // SENDS A MESSAGE EVERY FEW HOURS
    if (message.content === "$talk") { //send the command first
		var randomTimeAux = randomTimes[Math.floor(Math.random()*randomTimes.length)];		
        var interval = setInterval (function () {
			
			var determina = Math.floor(Math.random() * 3);
			
			if (determina == 0) {
				var randomKaraLoveAux = randomKaraLoveTexts[Math.floor(Math.random()*randomKaraLoveTexts.length)];
				message.channel.send(randomKaraLoveAux)
				.catch(console.error);
			}
			
			else if (determina == 1) {
				var randomKaraTalkAux = randomKaraTalk [Math.floor(Math.random()*randomKaraTalk .length)];
				message.channel.send(randomKaraTalkAux)
				.catch(console.error);
			}
			
			else if (determina == 2) {
				var randomBrothersAux = randomBrotherTalk[Math.floor(Math.random()*randomBrotherTalk.length)];
				message.channel.send(randomBrothersAux)
				.catch(console.error);
			}		 
			
        }, randomTimeAux); 
    }
});

bot.on("message", (message) => {
	//so he won't reply to himself
	if (message.author.bot) return;
	
	textMessage = message.content.toLowerCase();
	
	//CONTINUED
	{
		if(continueMorning == true) {
			
			//had a bad night
			if (textMessage.includes('no')) {
				
				var badMorningAux = badMorningResponses[Math.floor(Math.random()*badMorningResponses.length)];
				message.reply(badMorningAux);
			}
			
			//had a good night
			else if (textMessage.includes('great') || textMessage.includes('good') || textMessage.includes('alright') || 
			textMessage.includes('fine') || textMessage.includes('yes') || textMessage.includes('yeah') || 
			textMessage.includes('thank') || textMessage.includes('sure')){
				
				var goodMorningAux = goodMorningResponses[Math.floor(Math.random()*goodMorningResponses.length)];
				message.reply(goodMorningAux);
			}
			
			continueMorning = false;
		}
		
		else if(continueHowAreYou == true) {
			
			if (textMessage.includes('no')) {
				
				var hiBadAux = hiBadResponses[Math.floor(Math.random()*hiBadResponses.length)];
				message.reply(hiBadAux);
			}
			
			else if (textMessage.includes('school') || textMessage.includes('work') || textMessage.includes('office') ||
			textMessage.includes('class')) {
				
				var hiWorkAux = hiWorkingResponses[Math.floor(Math.random()*hiWorkingResponses.length)];
				message.reply(hiWorkAux);
			}			
			
			else if (textMessage.includes('great') || textMessage.includes('good') || textMessage.includes('alright') || 
			textMessage.includes('fine') || textMessage.includes('okay') || textMessage.includes('thank') || textMessage.includes('well')) {
				
				var hiOkayAux = hiOkayResponses[Math.floor(Math.random()*hiOkayResponses.length)];
				message.reply(hiOkayAux);
			}
			
			continueHowAreYou = false;
		}
		/*
		else if(continueHorny == true) {
			
			if (textMessage.includes('touch')) {
				
				
			}
			
			else if (textMessage.includes('eat') || textMessage.includes('pussy') || textMessage.includes('lick')) {
			
				
			}
			
			else if (textMessage.includes('fuck') || textMessage.includes('inside') || textMessage.includes('cock') ||
			textMessage.includes('dick') || textMessage.includes('take') || textMessage.includes('yours')) {
				
				
			}
			continueHorny = false;
		}*/
	}

	//GREETINGS AND TALKING	
	{
		//Good morning
		if (textMessage.includes('mornin') || textMessage.includes('good morning')) {
			
			var morningAux = morningResponses[Math.floor(Math.random()*morningResponses.length)];	
			message.reply(morningAux);
						
			continueMorning = true;
		}
		
		//Good night
		else if (textMessage.includes('good night')) {
			
			var nightAux = nightResponses[Math.floor(Math.random()*nightResponses.length)];
			message.reply(nightAux);
		}
		
		//Saying hi, hello, hey
		else if (textMessage.includes('hi') || textMessage.includes('hello') || textMessage.includes('hey')) {
			
			var hiAux = hiResponses[Math.floor(Math.random()*hiResponses.length)];
			message.reply(hiAux);
			
			continueHowAreYou = true;
			
		}
		
		//Saying goodbye
		else if (textMessage.includes('bye') || textMessage.includes('to go') || textMessage.includes('gotta go')) {
			
			var byeAux = byeResponses[Math.floor(Math.random()*byeResponses.length)];
			message.reply(byeAux);
		}
		
		//Getting his attention
		else if (textMessage == "karamatsu" || textMessage == "kara" || textMessage == "karamatsu?" ||
		textMessage == "kara?" || textMessage == "karamatsu...?" || textMessage == "kara...?") {
			
			var attentionAux = attentionResponses[Math.floor(Math.random()*attentionResponses.length)];
			message.reply(attentionAux);
		}
		
		//Asking how he's doing
		else if (textMessage.includes('how') && textMessage.includes('you') && (textMessage.includes('are') || textMessage.includes('doin'))) {
		
			var howDoingAux = howAreYouResponses[Math.floor(Math.random()*howAreYouResponses.length)];
			message.reply(howDoingAux);
		}
	}
	
	//LOVE AND AFFECTION
	{
		//Saying I love you
		if (textMessage.includes('love you')) {
			
			var loveAux = loveResponses[Math.floor(Math.random()*loveResponses.length)];
			message.reply(loveAux);
		}
		
		//Saying thank you
		else if (textMessage.includes('thank')) {
			
			var thankAux = thankResponses[Math.floor(Math.random()*thankResponses.length)];
			message.reply(thankAux);
		}
		
		//Sending emojis
		else if (message.content.startsWith("❤") || message.content.startsWith("😍") || message.content.startsWith("😘") ||
		message.content.startsWith("💙") || message.content.startsWith("💕") || message.content.startsWith("💖") || message.content.startsWith("😚")) {
			
			var emojiAux = emojiResponses[Math.floor(Math.random()*emojiResponses.length)];
			message.reply(emojiAux);
			
		}
		
		//Calling him cute
		else if (textMessage.includes('you') && (textMessage.includes('cute') || textMessage.includes('cutie') || textMessage.includes('adorable'))) {
			
			var shyAux = shyComplimentResponses[Math.floor(Math.random()*shyComplimentResponses.length)];
			message.reply(shyAux);
			var shyNextAux = shyComplimentNextResponse[Math.floor(Math.random()*shyComplimentNextResponse.length)];
			message.reply(shyNextAux);
		}
		
		//Calling him handsome
		else if (textMessage.includes('you') && (textMessage.includes('handsome') || textMessage.includes('good looking') || 
		textMessage.includes('dashing') || textMessage.includes('hot') || textMessage.includes('sexy') || textMessage.includes('attractive') ||
		textMessage.includes('cool'))) {
			
			var sexyAux = sexyComplimentResponses[Math.floor(Math.random()*sexyComplimentResponses.length)];
			message.reply(sexyAux);
		}
	}
	
	//START SEXY STUFF
	{
		//Tell him you're horny
		if (textMessage.includes('horny') && (textMessage.includes("I'm") || textMessage.includes('I am'))) {
			
			var hornyAux = hornyResponses[Math.floor(Math.random()*hornyResponses.length)];
			message.reply(hornyAux);
			message.reply("What would you want me to do to you darling?");
			message.reply("Touch every single inch of your body? Feast on your sweet nectar? Or perhaps take you and make you mine?");
			continueHorny = true;
		}
	}
	
});

bot.login(process.env.token);
