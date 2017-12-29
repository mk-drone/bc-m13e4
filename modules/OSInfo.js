var os = require('os');
var time = require('./Time');

function getOsInfo(){
    let type = os.type();
    if(type === 'Windows_NT'){
        type='Windows';
    }else if(type === 'Darwin'){
        type='OSX';
    }
    process.stdout.write(`System: ${type}\n`);
    process.stdout.write(`Release: ${os.release()}\n`);
    process.stdout.write(`CPU: ${os.cpus()[0].model}\n`);
    process.stdout.write(`Uptime: ${time.secondsToHours(os.uptime())}\n`);
    process.stdout.write(`UserName: ${os.userInfo().username}\n`);
    process.stdout.write(`HomeDir: ${os.homedir()}\n`);
}

exports.print = getOsInfo;