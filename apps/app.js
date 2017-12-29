let printOsInfo = require('../modules/OSInfo').print;


process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSInfo':
                printOsInfo();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});

