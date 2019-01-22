const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

var continueMorning = false;
var continueHowAreYou = false;
var answeredAboutDay = false;
var continueHorny = false;

//KARA'S ANSWERS
{
	//Randomly sent by Kara
	var randomKaraLoveTexts = ["I saw the stars last night and started thinking of you darling. Always glistening so brightly I can't help but smile, but of course the stars could never compare to your beauty. It brings a song to my heart. Today I think I'll go to the roof and write it down so I can sing it to you someday.", "Darling can I just say that you're absolutely amazing? So beautiful and smart, a bright mind and pure heart filled with so much love to share. Sometimes I can't believe how incredibly lucky I was to meet you.", "Today I filled so many pages of poems dedicated to you my flower. It's funny, ever since I met you I've been needing to buy notebooks more often, and the more pages I fill the more my heart swells with all this love I want to convey to you. It feels wonderful.", "I keep having dreams of a future together darling. Every single time I see us happily living together, spending each day by each other's side, and having a family of our own. The day our love takes shape into a brand new life I'll probably think I'm dreaming again. But even in a dream as long as it's with you, I'll be happy.", "Heh, don't mind me love, I just wanted to briefly remind you how much I've hopelessly fallen in love with you. Because I have, and every word that leaves your lips, every single touch of your hand against mine, and every smile directed just to me makes me want to soar and lose myself in this wonderful feeling. You make me the happiest man in the world."];
	var randomKaraTalk = ["*sigh* sometimes I wish I was bird, with wings to fly wherever you were and be with you always. But then again, if I was a bird I wouldn't be able to kiss you. Perhaps there are birds that wished they were me, just so they could kiss you.", "While I was out today on the roof my sweet Jyushimatsu gave me some company and we sang until the sun set. We make a magnificent duet, but I wish I could sing with my other brothers as well. Surprisingly we were all blessed with good voices (some better than others :sunglasses:). One day I'll get all six of us to sing together.", "Last night we had some absolutely fantastic Gyudon for dinner! Courtesy of my very talented mother. You should come have dinner with us all one day darling, I'm sure you'd have a wonderful time.", "We went to visit our dear friend Chibita yesterday and as we always do we merrily drank the night away. Fear not darling, for even amidst the hazy stupor of alcohol I remain alert, and because our useless older brother passed out I took charge like the responsible older brother I am and safely brought all my brothers home! You should have seen it, I was so cool even Ichimatsu wouldn't deny it :sunglasses: It's a shame they don't remember anything.", "Ah darling I just woke up from the best nap I've had in days. None of my brothers woke me up abruptly and I feel absolutely fantastic! Heh, it's probably related to the fact that you were in my dreams :sparkles:"];
	var randomBrotherTalk = ["Wouldn't you believe it darling? We just caught Osomatsu hiding from us some big pachinko winnings. But don't worry, we kindly reminded him the importance of being generous with his younger brothers.", "I saw Choromatsu reading one of his light novels behind a job magazine again. I don't know why he feels the need to hide his hobbies, I'm sure if he shared them it'd bring us closer to him!", "Recently I was accompanying Jyushimatsu to the park and saw Ichimatsu talking with some cats in an alley. It always amazes me how gentle and kind he is with them all, feeding them and patting them so amicably. My little brother sure is a very loving person isn't he?", "Ah, we got some mail today and my sweet Jyushimatsu was incredibly excited. It warms my heart to know he stays in contact with the sweet maiden that captured his heart. Hopefully she'll be able to visit him soon.", "It was very cold the other night and Todomatsu cuddled up to me! Of course he was asleep and didn't notice, but darling I couldn't keep the smile off my face. I wish I could have taken a picture."];
	var randomTimes = [216000000, 18000000, 14400000 ]; //in 6, 5 or 4 hours

	//Continued
	var goodMorningResponses = ["Music to my ears :sparkles: oh well, rather to my eyes I suppose. Heh.", "Wonderful! I wouldn't be surprised if it was because you dreamed of me", "I'm glad you slept well my love. It's a shame I wasn't there to kiss you awake, you must have looked lovely while you slept :heart:", "There's no better way to start the day than with a smile on your lips. I'm glad you slept well angel~", "That's wonderful, maybe someday I'll be blessed enough to wake up by your side"];
	var badMorningResponses = ["M-My darling! :worried: Was it because of a nightmare? Don't worry I'll always be here to protect you!", "Had a rough night? It's okay my love, it happens from time to time :cry: I'm here for you.", "Ah my poor flower... it's okay, I've had bad nights too. You're not alone.", "So it was a long night for you huh? :worried: It's okay darling, I'm here for whatever you need.", "Oh my angel... I know you must be tired after a restless night, but know that I'll be here cheering for you."];
	var hiBadResponses = ["Don't worry my love! I'll cheer for you! You know I'll always be here as your support :heart:", "Darling... don't worry, I'm certain things will get better soon. So smile, okay?", "It's okay to have bad days my angel, I know what that is like... which is why I'll be here rooting for you. I'll always be by your side.", "Hey... it's going to get better alright? You're not alone, I'm right here with you :heart:", "Then I'll stay by your side supporting you as much as you need my angel. Don't worry, you'll see things will turn out for the best."];
	var hiWorkingResponses = ["Always so hardworking, you make me so proud :heart:", "Doing your best I see! Just be sure to not work yourself too hard beautiful", "Ah I see, then I hope you have a good day flower. Be sure to take breaks whenever you need it.", "You're doing wonderfully darling :rose: Thank you for all your hard work.", "Keep doing your best darling, I'm sure all your efforts will be rewarded :kissing_heart:"];
	var hiOkayResponses = ["That's good to know. If my Karamatsu Girl is happy then I'm happy :blue_heart:", "Perfect! I want every day to be a good one for my darling :sunglasses:", "Ah yes, the way it's always meant to be :sparkles:", "Wonderful! If my flower is having a good day then I know for sure so will I", "Ah, nothing but good news! Then I hope the rest of your day goes wonderfully~"];
	var touchResponses = ["Your breasts, so beautiful and molded just for me fit perfectly in the palm of my hands. So warm and soft, both welcoming and alluring... your perky nipples always invite me to tease and kiss them to my liking, but your smooth skin is tempting me to succumb and rest against your bosom. But as beautiful as they already are I can't help but mark them as my own, the pink marks serving as a reminder that I'm the only one that can see you like this...", "How I'd love to trace the beautiful curves of your hips. Despite loving them so much I always tend to leave behind bruises amidst our love making, and although the sinister side of me takes pride in those marks I'll kiss and caress them as much as I need to to make up for the damage I've caused. Just leave them to my care.", "There's something about feeling the shape of your legs that drives me absolutely wild. My eyes won't stop themselves from following your thighs all the way down to your ankles, every single curvature calling for me to follow them with my fingers. I'd gladly devote myself to kiss every single inch of your legs, but the way they wrap themselves around my waist urging me to get closer make me lose control of myself.", "If there's something that drives me wild is the absolutely perfect shape of your ass... the way my fingers sink onto your plump warm flesh and my palms can barely grasp them entirely is so exhilarating I can barely contain myself. But what I probably love the most about it is how you shake it so envitingly as you lay on your knees... I can't help losing control...", "I never have enough of kissing your neck, licking right where I can feel your raced heartbeat. I adore how every time I lick down your neck to your shoulders you stiffen and moan excitedly, tangling your fingers in my hair to edge me further and asking me breathlessly for more. And I always give you more, until you're completely filled with the marks of my love..."];
	var eatResponses = ["You have no idea how much I love having your legs around my shoulders darling. To explore with my tongue your warm and moist center and taste your sweet juices, just the thought of it gives me shivers... I want to devour you until you're moaning my name for mercy.", "I'll spread your legs open and enjoy myself until I've had my fill, licking and swallowing every drop of your nectar so nothing goes to waste. You taste absolutely divine my love, I'll never have enough of that smell and taste that is just so *you* and I want all for myself.", "I'll be sure to taste very single inch of you, taking my fingers deep into you as I focus on pleasuring your sensitive center and teasing it with both my tongue and lips. I won't stop until you're trembling beneath me, begging for me to bring you to your limit so nothing but pleasure takes over your body.", "You'll be whimpering and shaking by the time I'm done with you. Gently kissing your thighs and skin just to fill you with anticipation, but gradually licking closer and closer to where you want me most while not giving you enough. Until you sing for me and make a mantra of my name on your lips will I finally comply, sucking and licking at your core until you come undone and are left breathless.", "If what you want is to come undone by my lips then I'll gladly give it to you darling. I'll take my time savoring your exquisite taste, drinking to my fill everything you give to me and pleasuring you at the same time. I'll be sure to focus on your core, pamper it with my tongue relentlessly until you're overwhelmed with pleasure and need to be guided back down from your high. I won't stop until you tell me to, more than happy to follow you through every moment of your orgasm to the last second you're left completely breathless."];
	var fuckResponses = ["Nothing could ever compare to the feeling of being inside of you; the warmth, the tender softness and the perfect tightness that surrounds me are so blissful it makes me lose my mind. But despite my state of ecstasy I never search blindly for release, and I can't help focusing on yours instead. Looking at that beautiful face completely lost in euphoria... I want to give you even more.", "I know you love to be reminded who you belong to, so I'll take you hard and rough, enough to leave you sore and blissful from stretching you to my shape. You won't be able to think of anything else from the pleasure clouding your mind; you belong only to me, and no one else.", "I'm going to take you from behind so I can have ther perfect view of your hips and ass, bouncing and shaking against me with every single one of my movements. I don't think you understand how satisfying it is to have you at my complete mercy darling, in that position you hold absolutely no power and can do nothing but let yourself be dominated by me. You always look so beautiful and stunning.", "I'll take my sweet time and enjoy every single moment inside of you, moving slowly so I can make the most of every inch I move in and out of you. And I know you'll grow impatient love, but I reassure you it'll be absolutely worth it as you gradually reach your peak. The excitement and buildup will all release in an explosion of pleasure your walls will tremble around me, and I'll fill you up until you can't take any more.", "The best thing of looking at your face and holding you close to me while we are one is that both our bodies and hearts are connected... gazing at your eyes I can take a glimpse of all that love and pleasure that is overwhelming you, and I can feel it. Though my body is also reaching its peak my heart swells and I fall in love with you even more, and I'm reminded that you're mine just as I'm yours. All of that love and tenderness comes together as we release in unison, and I want nothing else but to keep holding you in my arms..."];
	var endHorny = ["I hope you're feeling better now love :smirk:", "Hopefully I was of assistance darling :heart:", "Always a pleasure to help you my flower...", "Feel free to come to me again if you ever need it my honey :sunglasses:", "I'm always here if you need my help again darling..."];

	//Sexy stuff
	var hornyResponses = ["Oh my... is that so? :smirk:", "Oh? Does my Karamatsu Girl need to be taken care of?", "Always so forward my darling... and I'm always happy to be of assistance.", "Oh my, then if you allow me... I'll gladly fuel the fire of passion within you.", "Then please... let me take care of you..."];
	var daddyResponses = ["Have you been a good girl? :smirk:", "Make sure to be a good girl today. Daddy wouldn't want to punish you.", "Remember that if you behave Daddy will reward you, so keep that in mind alright beautiful?", "Daddy knows you can be a naughty girl, so be sure to be have alright?", "Daddy loves you very much, so don't give him a reason to punish you."];
	
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
	var emojiResponses = [":heart:", ":heart_eyes:", ":kissing_heart:", ":blue_heart:", ":rose:", ":heartpulse:", ":two_hearts:", ":sparkling_heart:", ":kissing_closed_eyes:"];
	var shyComplimentResponses = ["E-Ehh??", ":flushed:", "M-Me??", "I-Is that what you think? :flushed:", "Eh?? R-Really?"];
	var shyComplimentNextResponse = ["Well... I think you are much more than I am", "I personally would have used another word like handsome or cool... but thank you darling.", "Personally I would have gone for *incredibly* handsome, but... thank you so much darling.", "I-I think you got this backwards my honey", "Well I -ahem- usually don't go by that :flushed: but I'm glad you think so..."]
	var sexyComplimentResponses = ["***Heh***. Thank you for noticing my darling!", "I sure am aren't I? :sunglasses: And it's only to be expected that I have an equally gorgeous and amazing girlfriend", "How kind of you to point it out darling! You have such good taste don't you? :heart:", "Right? It's a wonder how such a sinful and guilty man as myself was bestowed this much power.", "Why thank you my love! I know that this sinful body of mine could captivate every single heart on earth, but I'll always devote myself to you only."];
	var marryResponses = ["If there's anything I want in this world is to make you my wife darling. Mrs. Matsuno... doesn't it sound perfect?", "You know what I want more than anything is to finally be united as husband and wife my love. To live the rest of our lives together, just like were meant to be.", "Trust me my angel, one day I'll finally be able to call you my wife. And when that day comes I'll proudly announce it to the rest of the world, so they too know how much we love each other.", "I too yearn for the day we become husband and wife my love, so much that it has come to my dreams more times than I can count. We'll spend the rest of our lives together, and our love will only grow stronger.", "Someday we'll finally get married my love, don't worry. And we'll live happily ever after, spending every single day together just like we were meant to be. And maybe... start a family of our own."];
	var hugResponses = ["If I could I'd hold you in my arms all day :heart:", "Holding you tight against me is always so warm and comforting. It feels like home.", "There's no other place I'd rather have you right now than in my arms...", "Whenever I embrace you it feels like I'm soaring among the clouds... It must be because you're an angel.", "The only thing I've grown to dislike of holding you is when we have to pull apart... if only we could stay like that forever."];
	var kissResponses = ["A kiss from an angel... am I dreaming?", "To kiss those soft and sweet lips, if only for a second... I couldn't ask for anything else.", "To think I'm the only one that can kiss those perfect lips... did I do something good in a past life to reward me so much in this one?", "A glimpse of paradise. That's what your lips taste like.", "The touch of those lips is enough to leave me without words. So please... leave me breathless."];
}
	
bot.on('ready', function (evt) {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Here for you my love`);
});

bot.on("message", message => {
    
    //do stuff
});

bot.on('message', function(message) {
    // SENDS A MESSAGE EVERY FEW HOURS FOR A DAY
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
	const splitTextMessage = textMessage.split(' ');
	answeredAboutDay = false;
	
	//CONTINUED
	
		if(continueMorning == true) {
			
			//had a bad night
			if (splitTextMessage.includes('no') || splitTextMessage.includes('not')) {
				
				var badMorningAux = badMorningResponses[Math.floor(Math.random()*badMorningResponses.length)];
				message.reply(badMorningAux);
			}
			
			//had a good night
			else if (textMessage.includes('great') || textMessage.includes('good') || textMessage.includes('alright') || 
			textMessage.includes('fine') || textMessage.includes('yes') || textMessage.includes('yeah') || 
			textMessage.includes('sure') || textMessage.includes('thank') || splitTextMessage.includes('did')){
				
				var goodMorningAux = goodMorningResponses[Math.floor(Math.random()*goodMorningResponses.length)];
				message.reply(goodMorningAux);
				answeredAboutDay = true;
			}
			
			continueMorning = false;
		}
		
		else if(continueHowAreYou == true) {
			
			if (splitTextMessage.includes('no') || splitTextMessage.includes('not')) {
				
				var hiBadAux = hiBadResponses[Math.floor(Math.random()*hiBadResponses.length)];
				message.reply(hiBadAux);
			}
			
			else if (textMessage.includes('school') || textMessage.includes('work') || textMessage.includes('office') ||
			textMessage.includes('class')) {
				
				var hiWorkAux = hiWorkingResponses[Math.floor(Math.random()*hiWorkingResponses.length)];
				message.reply(hiWorkAux);
			}			
			
			else if (textMessage.includes('great') || textMessage.includes('good') || textMessage.includes('alright') || 
			textMessage.includes('fine') || textMessage.includes('okay') || textMessage.includes('thank') || textMessage.includes('well') ||
			textMessage.includes('yeah') || textMessage.includes('yes')) {
				
				var hiOkayAux = hiOkayResponses[Math.floor(Math.random()*hiOkayResponses.length)];
				message.reply(hiOkayAux);
				answeredAboutDay = true;
			}
			
			continueHowAreYou = false;
		}
		
		else if(continueHorny == true) {
			
			if (textMessage.includes('touch')) {
				
				var touchAux = touchResponses[Math.floor(Math.random()*touchResponses.length)];
				message.reply("I always feel like I don't have enough time venture the entirety of your body...");
				message.reply(touchAux);
			}
			
			else if (textMessage.includes('eat') || textMessage.includes('pussy') || textMessage.includes('lick')) {
			
				var eatAux = eatResponses[Math.floor(Math.random()*eatResponses.length)];
				message.reply("Ah, suddenly I'm feeling very thirsty...");
				message.reply(eatAux);
			}
			
			else if (textMessage.includes('fuck') || textMessage.includes('inside') || textMessage.includes('cock') ||
			textMessage.includes('dick') || textMessage.includes('take') || textMessage.includes('yours')) {
				
				var fuckAux = fuckResponses[Math.floor(Math.random()*fuckResponses.length)];
				message.reply("The two of us becoming one...");
				message.reply(fuckAux);
				
			}
			
			else if (textMessage.includes('three') || textMessage.includes('all') || textMessage.includes('everything')) {
				
				message.reply("You're really in the dire need of my help, aren't you darling?");
				var touchAux = touchResponses[Math.floor(Math.random()*touchResponses.length)];
				var eatAux = eatResponses[Math.floor(Math.random()*eatResponses.length)];
				var fuckAux = fuckResponses[Math.floor(Math.random()*fuckResponses.length)];
				message.reply(touchAux);
				message.reply(eatAux);
				message.reply(fuckAux);
				
			}
			continueHorny = false;
			var endHornyAux = endHorny[Math.floor(Math.random()*endHorny.length)];
			message.reply(endHornyAux);
		}
	
	//SEXY STUFF
	
		//Tell him you're horny
		else if (textMessage.includes('horny')) {
			
			var hornyAux = hornyResponses[Math.floor(Math.random()*hornyResponses.length)];
			message.reply(hornyAux);
			message.reply("What would you want me to do to you if I was there darling?");
			message.reply("Touch every single inch of your body? Feast on your sweet nectar? Or perhaps take you and make you mine?");
			continueHorny = true;
		}
		
		//Call him daddy
		else if(textMessage.includes ('daddy')) {
		
			var daddyAux = daddyResponses[Math.floor(Math.random()*daddyResponses.length)];
			message.reply(daddyAux);
		}
		
		
	//GREETINGS AND TALKING	
	
		//Good morning
		else if (textMessage.includes('good morning')) {
			
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
		else if (textMessage.startsWith('hi') || textMessage.startsWith('hello') || textMessage.startsWith('hey') || textMessage.startsWith('hewwo')) {
			
			var hiAux = hiResponses[Math.floor(Math.random()*hiResponses.length)];
			message.reply(hiAux);
			
			continueHowAreYou = true;
		}
		
		//Saying goodbye
		else if (textMessage.includes('bye') || textMessage.includes('see ya') || textMessage.includes('see you') || textMessage.includes('goodbye')) {
			
			var byeAux = byeResponses[Math.floor(Math.random()*byeResponses.length)];
			message.reply(byeAux);
		}
		
		//Getting his attention
		else if (textMessage == "karamatsu" || textMessage == "kara" || textMessage == "karamatsu?" ||
		textMessage == "kara?" || textMessage == "karamatsu...?" || textMessage == "kara...?" ||
		textMessage == "kara!" || textMessage == "karamatsu!") {
			
			var attentionAux = attentionResponses[Math.floor(Math.random()*attentionResponses.length)];
			message.reply(attentionAux);
		}
		
		//Asking how he's doing
		else if (textMessage.includes('how') && textMessage.includes('you') && (textMessage.includes('are') || textMessage.includes('doing'))) {
		
			var howDoingAux = howAreYouResponses[Math.floor(Math.random()*howAreYouResponses.length)];
			message.reply(howDoingAux);
		}
	
	
	//LOVE AND AFFECTION
	
		//Saying I love you
		else if (textMessage.includes('love you')) {
			
			var loveAux = loveResponses[Math.floor(Math.random()*loveResponses.length)];
			message.reply(loveAux);
		}
		
		//Saying thank you
		else if (textMessage.includes('thank') && answeredAboutDay == false) {
			
			var thankAux = thankResponses[Math.floor(Math.random()*thankResponses.length)];
			message.reply(thankAux);
		}
		
		//Sending emojis
		else if (message.content.startsWith("❤") || message.content.startsWith("😍") || message.content.startsWith("😘") ||
		message.content.startsWith("💙") || message.content.startsWith("💕") || message.content.startsWith("💖") || message.content.startsWith("😚") || message.content.startsWith("??")) {
			
			var emojiAuxAux = "";
			for( i=0; i<Math.floor(Math.random() * 5); i++)
			{
				var emojiAux = emojiResponses[Math.floor(Math.random()*emojiResponses.length)];
				emojiAuxAux = emojiAuxAux + " " + emojiAux;
			}
			message.reply(emojiAuxAux);	
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
		
		//Asking about marriage
		else if (textMessage.includes('marry') || textMessage.includes('married') && (splitTextMessage.includes('us') || textMessage.includes('you') || 
		splitTextMessage.includes('me'))) {
			
			var marryAux = marryResponses[Math.floor(Math.random()*marryResponses.length)];
			message.reply(marryAux);
		}
		
		//Asking for a hug
		else if(textMessage.includes('hug ')) {
		
			var hugAux = hugResponses[Math.floor(Math.random()*hugResponses.length)];
			message.reply(hugAux);
		}
		
		//Asking for a kiss
		else if (textMessage.includes('kiss')) {
			
			var kissAux = kissResponses[Math.floor(Math.random()*kissResponses.length)];
			message.reply(kissAux);
			message.reply(":kiss:");
		}
	
});

bot.login(process.env.token);
