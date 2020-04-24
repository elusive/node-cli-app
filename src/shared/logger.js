
require('dotenv').config();

const bunyan = require('bunyan');
const fs = require('fs');
const path = require('path');
const logPath = process.env.LOG_PATH;
const S_IWUSR = 00200; // mask for owner write

//    check for existence of log file
let logFile = path.join(logPath, 'cli.log');
console.warn('- Log file is "%s".', logFile);
if (!fs.existsSync(logFile)) {
        console.warn('- Touch log file.');
        fs.writeFileSync(logFile, 'touch\n');
}


//    make log file readonly
if (fs.statSync(logFile).mode & S_IWUSR) {
        console.warn('- Make log file read-only.');
        fs.chmodSync(logFile, 0444);
}


// create logger instance to return
const logger = bunyan.createLogger({
    name: 'cli-logger',
    level: process.env.LOG_LEVEL,
    streams: [
        {path: logFile}
    ]
});

// add a debug method to the logger that just logs msg only
// versus the bunyan json string that is normally logged.
logger.__proto__.debug = (msg) => console.log(msg);

exports.getLogger = () => logger;