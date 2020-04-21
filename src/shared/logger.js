
require('dotenv').config();

const bunyan = require('bunyan');
const logger = bunyan.createLogger({
    name: 'cli-logger',
    level: process.env.LOG_LEVEL,
    stream: process.stdout
});

// add a debug method to the logger that just logs msg only
// versus the bunyan json string that is normally logged.
logger.__proto__.debug = (msg) => console.log(msg);

exports.getLogger = () => logger;