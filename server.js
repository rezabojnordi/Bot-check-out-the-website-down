//-----------------------variable----------------------
var
  fs = require('fs'),
  cron = require('node-cron'),
  TelegramBot = require('node-telegram-bot-api'),
  config = require('./config'),
  token = config.config.token,
  keyboard = require('./keyboard'),
  script = require('./script/bash'),
  request=require('request'),
  bot = new TelegramBot(token, {
    polling: true
  });
//---------------------------------------------

//---------------------------------------------
bot.onText(/\/start/, function (msg) {
  var chatId = msg.chat.id;
  console.log("start the member with ID :", msg.chat.id);
  bot.sendMessage(chatId, "welcom", keyboard.createInlineKeyboard());
});
//---------------------------------------------






bot.on('message', function (msg) {

//  console.log(msg.text);
  //if (msg.chat.id == '82482512' || msg.chat.id=='101777442' || msg.chat.id=='50827731') {
    // console.log('msg', msg.chat.id);
    if (msg.text == "run") {

      var run = script.bashScript('1');

      bot.sendMessage(msg.chat.id, 'run server....')

      //console.log('333', 333);

    } else if (msg.text == "restart") {
      var run = script.bashScript('2');
      
      bot.sendMessage(msg.chat.id, 'restart server...');

    } else if (msg.text == "kill") {
      var run = script.bashScript('3');

      bot.sendMessage(msg.chat.id, 'kill server.....');

    } else if (msg.text == "finger") {
      
      

      var run = script.bashScript('4');
      //console.log('run', run);
       bot.sendDocument(msg.chat.id, run);
      
      
    } else if (msg.text == "history") {

      var run = script.bashScript('5');
      bot.sendDocument(msg.chat.id, run);

    } else if (msg.text == "hdd") {
      var run = script.bashScript('6');

      bot.sendDocument(msg.chat.id, run);

    } else if (msg.text == "mongo") {

      var run = script.bashScript('7');

      bot.sendDocument(msg.chat.id, run);

    } else if (msg.text == "redis") {
      var run = script.bashScript('8');

      bot.sendDocument(msg.chat.id, run);

    } else if (msg.text == "security") {

      var run = script.bashScript('9');

      bot.sendDocument(msg.chat.id, run);

    } else if (msg.text == "message") {

      var run = script.bashScript('10');

      bot.sendDocument(msg.chat.id, run);

    }else if(msg.text=='help'){

      //var run = script.bashScript('11');

      bot.sendMessage(msg.chat.id, 'developing....');

    } else {
      bot.sendMessage(msg.chat.id, 'not found');
    }
  //} else {
   // console.log(msg.chat.id, 'You do not have access!!!!!');
   // bot.sendMessage(msg.chat.id, 'You do not have access!!!!!')
 // }

});




//cron.schedule('1,2,4,5 * * * *', function(){
cron.schedule('*/10 * * * *', function () {
  checking_online_site();

});

function checking_online_site() {
  // var request = require('request');
  request('http://185.23.129.221', function (error, response, body) {
    if (!error && response.statusCode == 200) {
    
    } else {
      bot.sendMessage('82482512', 'Rassam site is down');
      
    }
  })
}

console.log('..............................runing server bot......dev:reza bojnordi........................');






