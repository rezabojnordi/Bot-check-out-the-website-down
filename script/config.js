module.exports={
  run:'cd /root/project/rasam_funds; pm2 start index.js',
  restart:'pm2 restart index',
  kill:'pm2 delete index',
  finger:'finger > /home/botServer/server_telegram/script/logserver/finger.txt',
  history:'cat /root/.bash_history > /home/botServer/server_telegram/script/logserver/history.txt',
  hdd:"df -h | grep '/dev/sda*' > /home/botServer/server_telegram/script/logserver/hdd.txt",
  mongo:'tail -n -100 /var/log/mongodb/mongod.log > /home/botServer/server_telegram/script/logserver/mongo.txt',
  redis:'cat /var/log/redis/redis.log > /home/botServer/server_telegram/script/logserver/redis.txt',
  security:'cat /var/log/secure > /home/botServer/server_telegram/script/logserver/security.txt',
  message:'cat /var/log/messages > /home/botServer/server_telegram/script/logserver/messages.txt',
  flushRedis:''
  //redis-cli flushall
}

// /home/botServer/server_telegram/script/logserver
