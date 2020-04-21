'use strict';

const minimist = require('minimist');
const commands = require('./commands');
const loggerFactory = require('./shared/logger');
const chalk = require('chalk');
const figlet = require('figlet');

/**
 * Entry point for expiremental-cli.
 */
module.exports = () => {

    const args = minimist(process.argv.slice(2));
    const mainCommand = args._[0] || 'help';
    const logger = loggerFactory.getLogger();
    logger.debug(`CLI main command value: ${mainCommand}`);
    let firstRun = !0;


    // output
    if (firstRun) {
        console.log(chalk.green(figlet.textSync(
            'CLI-APP', { font: 'Chunky' })));
        firstRun = !firstRun;
    }


    // command processing using main command
    commands.forEach(cmd => {
        logger.debug(cmd.forms);
        if (cmd.forms && cmd.forms.includes(mainCommand)) {
            cmd.invoke(args);
            return;
        }
    });
}
