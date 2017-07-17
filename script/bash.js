var fs = require('fs'),
  config = require('./config.js'),
  exec = require('child_process').exec;

/**
 * run linux bash for log server
 * @param script
 * @returns {*}
 * @developer reza bojnordi
 */

function bashScript (script) {

  if (script == '1') {

    exec(config.run, function (error, stdout, stderr) {
      if (error) {

        return console.error('exec error:', error);
      }
     // console.log('stdout', stdout);
    });

  } else if (script == '2') {

    exec(config.restart, function (error, stdout, stderr) {
      if (error) {

        return console.error('exec error:', error);
      }
    });


  }else if(script=='3'){
  
    exec(config.kill, function (error, stdout, stderr) {
      if (error) {

        return console.error('exec error:', error);

      }
    });

  }else if(script=='4'){
    exec(config.finger, function (error, stdout, stderr) {
      if (error) {

        return console.error('exec error:', error);
      }

    });

	const file = fs.createReadStream(__dirname + '/logserver/finger.txt');
      return file;

  }else if(script=='5'){
    exec(config.history, function (error, stdout, stderr) {
      if (error) {

        return console.error('exec error:', error);
      }

    });
    const filee = fs.createReadStream(__dirname + '/logserver/history.txt');

    return filee;

  }else if(script=='6'){
    exec(config.hdd, function (error, stdout, stderr) {
      if (error) {

        return console.error('exec error:', error);
      }
    });
    const file1 = fs.createReadStream(__dirname + '/logserver/hdd.txt');

    return file1;

  }else if(script=='7'){
    exec(config.mongo, function (error, stdout, stderr) {
      if (error) {

        return console.error('exec error:', error);
      }
    });

    const file2 = fs.createReadStream(__dirname + '/logserver/mongo.txt');

    return file2;


  }else if(script=='8'){

    exec(config.redis, function (error, stdout, stderr) {
      if (error) {

        return console.error('exec error:', error);
      }

    });

    const file3 = fs.createReadStream(__dirname + '/logserver/redis.txt');

    return file3;

  }else if(script=='9'){
    exec(config.security, function (error, stdout, stderr) {
      if (error) {

        return console.error('exec error:', error);
      }
    });

    const file4 = fs.createReadStream(__dirname + '/logserver/security.txt');

    return file4;

  }else if(script=='10'){

    exec(config.message, function (error, stdout, stderr) {
      if (error) {

        return console.error('exec error:', error);
      }

    });

    const file5 = fs.createReadStream(__dirname + '/logserver/messages.txt');

    return file5;
  }else{
    console.log('not found command.');
  }




  /*var idScript = script;

  switch (idScript) {

    case '1':

      exec(config.run, function (error, stdout, stderr) {
        if (error) {

          return console.error('exec error:', error);
        }
        console.log('stdout', stdout);
      });
      break;

    case '2':
      exec(config.restart, function (error, stdout, stderr) {
        if (error) {

          return console.error('exec error:', error);
        }
      });
      break;

    case '3':
      exec(config.kill, function (error, stdout, stderr) {
        if (error) {

          return console.error('exec error:', error);

        }
      });

      break;

    case '4':

      exec(config.finger, function (error, stdout, stderr) {
        if (error) {

          return console.error('exec error:', error);
        }

      });

      const file = fs.createReadStream(__dirname + '/logserver/finger.txt');
      return file;

      break;

    case '5':

      exec(config.history, function (error, stdout, stderr) {
        if (error) {

          return console.error('exec error:', error);
        }

      });

      const filee = fs.createReadStream(__dirname + '/logserver/history.txt');

      return filee;

      break;

    case '6':

      exec(config.hdd, function (error, stdout, stderr) {
        if (error) {

          return console.error('exec error:', error);
        }
      });

      const file1 = fs.createReadStream(__dirname + '/logserver/hdd.txt');

      return file1;
      break;

    case '7':
      exec(config.mongo, function (error, stdout, stderr) {
        if (error) {

          return console.error('exec error:', error);
        }

      });

      const file2 = fs.createReadStream(__dirname + '/logserver/mongo.txt');

      return file2;

      break;

    case '8':

      exec(config.redis, function (error, stdout, stderr) {
        if (error) {

          return console.error('exec error:', error);
        }

      });

      const file3 = fs.createReadStream(__dirname + '/logserver/redis.txt');

      return file3;
      break;

    case '9':

      exec(config.security, function (error, stdout, stderr) {
        if (error) {

          return console.error('exec error:', error);
        }
      });

      const file4 = fs.createReadStream(__dirname + '/logserver/security.txt');

      return file4;
      break;

    case '10':

      exec(config.message, function (error, stdout, stderr) {
        if (error) {

          return console.error('exec error:', error);
        }

      });

      const file5 = fs.createReadStream(__dirname + '/logserver/messages.txt');

      return file5;
      break;

    default:
      console.log('not found command.');
  }*/

}

exports.bashScript = bashScript

