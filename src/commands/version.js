const CommandBase = require('./command.base');
const { version } = require('../../package.json');

/**
 * Command definition for outputting the
 * version of the application.
 */
class Version extends CommandBase {
    constructor(...args) {
        super('version',
            ['v', 'version'],
            (args) => console.log(`v${version}`));
        this.description = 'Command that outputs the application version.';
        this.example = 'cli -v, cli version';
    }
}

module.exports = new Version();