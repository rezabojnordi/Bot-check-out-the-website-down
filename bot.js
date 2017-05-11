var request = require('request'),
  fs = require('fs');
const exec = require('child_process').exec;
var cron = require('node-cron');
var TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
var token = 'token';

// Create a bot that uses 'polling' to fetch new updates
var bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, function (msg, match) {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    var chatId = msg.chat.id;

    var resp = match[1]; // the captured "whatever"
    //console.log('chatId', chatId,'resp',resp);
    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);

});


// bot.sendMessage()

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', function (msg) {
    var chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, "You will receive a message in case of any problem you can send help?");
    
    console.log('chatId', chatId);
    //console.log(msg.text);

        if (msg.text == 1) {
            // run project node 
            exec('pm2 start /root/project/rasam_funds', function (error, stdout, stderr) {
                if (error) {
                    //console.error(`exec error: ${error}`);
                    return;
                }
                bot.sendMessage('chatId', 'pm2 start server');
                console.log('stdout',stdout);
                // console.log(`stderr: ${stderr}`);
            });
            bot.sendMessage(chatId, '1')
        } else if(msg.text == 2) {
            exec('pm2 reset rasamNew', function (error, stdout, stderr) {
                if (error) {
                    //console.error(`exec error: ${error}`);
                    return;
                }
                bot.sendMessage(chatId, 'pm2 restart all');
                console.log('stdout',stdout);
                // console.log(`stderr: ${stderr}`);
            });
        }else if(msg.text == 3){
            exec('pm2 delete rasam_funds', function (error, stdout, stderr) {
                if (error) {
                    return;
                }
                bot.sendMessage(chatId, 'pm2 delete rasam_funds');
                console.log('stdout',stdout);
                // console.log(`stderr: ${stderr}`);
            });

        } else if (msg.text == 'Help' || msg.text == 'help') {

            bot.sendMessage(chatId, '1:run server \n 2:restart all server \n 3:kill all server \n 4:log mongo');

        }else{
            bot.sendMessage(chatId,'not fount');
        }


});


//cron.schedule('1,2,4,5 * * * *', function(){
cron.schedule('*/1 * * * *', function () {
    checking_online_site();

});

/**
 * @developer reza bojnordi
 * Send the request to the site every half hour
 */
function checking_online_site() {
    // var request = require('request');
    request('http://rasamfunds.com', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //console.log(body); // Show the HTML for the Google homepage.
           // bot.sendMessage('82482512', '???? ???? ???? ???');
        } else {
            bot.sendMessage('82482512', 'Rassam site is down');
        }
    })
}


