# Bot-check-out-the-website-down
This project works with node servers on red hat based linux distribution machines
Send a message down the Web, With the Telegram
pm2 module is needed to be installed on your linux server to use this app
to run the project you have to set the needed parameters. first, open the config.js which is located in root directory of the project and add the token you have recieved from @BotFather. Then, go to the script directory and open config.js. Replace '/root/project/rasam_funds' with your project path. 

To recieve a message on your telegram when your server goes down, open server.js from the root directory and replace the 'add site url or ip' in checking_online_site function with your domain or server IP.

Features:
run your projct

restart your project

kill your project

fingure (number of active ssh connections)

history (old user commands)

hdd (hard disk space)

mongo (mongo logs in text format)

redis (redis logs in text format)

security (security logs in text format)

message (message logs in text format)





