'use strict';

const chalk = require('chalk');

/**
 * Base command class for defining shared behavior for commands.
 */
class CommandBase {

    _loggerFactory = require('../shared/logger');
    _name = 'command';
    _description = 'command description';   // default value
    _example = 'command param1 param1';     // default value
    _forms = [];                            // forms which are excepted for the command
    _canExecute = () => true;               // default can execute function


    /**
     * Create a new instance of the CommandBase class.
     * @param {string} commandName
     * @param {function} commandDelegate
     * @param {function} commandCanExecute
     */
    constructor(commandName, commandForms, commandDelegate, commandCanExecute) {
        this._name = commandName;
        this._delegate = commandDelegate;
        this._forms = commandForms;
        if (commandCanExecute) {
            this._canExecute = commandCanExecute;
        }
        this._logger = this._loggerFactory.getLogger();
    }


    get command() { return this._delegate; }
    set command(value) { this._delegate = value; }


    get description() { return this._description; }
    set description(value) { this._description = value; }


    get example() { return this._example; }
    set example(value) { this._example = value; }


    get forms() { return this._forms; }
    set forms(value) { this._forms = value; }


    /**
     * This method invokes the commands execute delegate.
     */
    invoke(args) {
        if (this.canExecute()) {
            this._logger.info(`Invoking the {this._name} command.`);
            this.command.call(this, args);
        } else {
            this._logger.log.warn(
                `The {this._name} command was invoked but can execute returned false.`);
        }
    }


    /**
     * This method is used to determine if the command can be invoked.
     */
    canExecute() {
        return this._canExecute();
    }


    /**
     * This method outputs the help text for this command.
     */
    help() {
        let helpText = `${this._name.padEnd(20)}${this._forms.join(', ').padEnd(25)}${this._description.padEnd(45)}`;
        console.log(chalk.blue(helpText));
    }
}


module.exports = CommandBase;