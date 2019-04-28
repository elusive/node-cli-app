/**
 * Entry point for mentr-cli.
 */
const minimist = require('minimist');

module.exports = () => {
    const args = minimist(process.argv.slice(2));
    const mainCommand = args._[0] || 'help';

    // command processing based on first argument
    switch(mainCommand) {

        case 'help':
            require('./commands/help/')(args);
            break;

        default:
            console.error(`"${mainCommand}" is not a valid command!`);
            break;
    }
}
