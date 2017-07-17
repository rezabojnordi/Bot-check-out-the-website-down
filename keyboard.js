
function createInlineKeyboard()
{
 var opts = {
        reply_markup: {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: [
              
                ["run","restart","kill"],
                ["finger","history","hdd","help"],
                ["mongo","redis","security","message"]


            ]

        }
    };
    return opts;
    
}



exports.createInlineKeyboard=createInlineKeyboard
