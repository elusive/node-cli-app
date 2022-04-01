const clear = require('clear');
const CommandBase = require('./command.base');

class Clear extends CommandBase {
    constructor() {
        super(
            'clear', ['clear', 'c', 'cls', 'klear'],
            () => clear(),
        );
        this.description = 'Command to clear the screen.';
        this.example = 'cli clear, cli -c';
    }
}

module.exports = new Clear();