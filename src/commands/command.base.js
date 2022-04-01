const chalk = require('chalk');
const loggerFactory = require('../shared/logger');

/**
 * Base command class for defining shared behavior for commands.
 */
class CommandBase {
    /**
     * Create a new instance of the CommandBase class.
     * @param {string} commandName
     * @param {function} commandDelegate
     * @param {function} commandCanExecute
     */
    constructor(commandName, commandForms, commandDelegate, commandCanExecute) {
        this.name = commandName;
        this.delegate = commandDelegate;
        this.example = '';
        this.forms = commandForms;
        if (commandCanExecute) {
            this.canExecute = commandCanExecute;
        }
        this.logger = loggerFactory.getLogger();
    }

    get command() { return this.delegate; }

    set command(value) { this.delegate = value; }

    get description() { return this.description; }

    set description(value) { this.description = value; }

    get example() { return this.example; }

    set example(value) { this.example = value; }

    get forms() { return this.forms; }

    set forms(value) { this.forms = value; }

    /**
     * This method invokes the commands execute delegate.
     */
    invoke(args) {
        if (this.canExecute()) {
            this.logger.info(`Invoking the {this.name} command.`);
            this.command.call(this, args);
        } else {
            this.logger.log.warn(
                `The {this.name} command was invoked but can execute returned false.`);
        }
    }

    /**
     * This method is used to determine if the command can be invoked.
     */
    canExecute() {
        return this.canExecute();
    }

    /**
     * This method outputs the help text for this command.
     */
    help() {
        let helpText = `${this.name.padEnd(20)}${this.forms.join(', ').padEnd(25)}${this.description.padEnd(45)}`;
        console.log(chalk.blue(helpText));
    }
}

module.exports = CommandBase;