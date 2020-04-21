const CommandBase = require('./command.base');
const clear = require('clear');

class Clear extends CommandBase {
    constructor(...args) {
        super(
            'clear',
            ['clear', 'c', 'cls', 'klear'],
            (args) => clear()
        );
        this.description = 'Command to clear the screen.';
        this.example = 'cli clear, cli -c';
    }
}

module.exports = new Clear();