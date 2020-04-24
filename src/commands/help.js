'use strict';


const CommandBase  = require('./command.base');
const chalk = require('chalk');


/**
 * Command class to output all of the other
 * commands help text to the screen.
 */
class Help extends CommandBase {

    _commands = require('../commands');

    constructor(...args) {
        // Call the base class ctor with the values
        // we need to make this particular command.
        super('Help',
            ['h', 'help'],
            (args) => {
                const target = 90;  // spaces width for help header
                const header = 'CLI Test Application Help';
                let avgDiff = (target - header.length) / 2;
                const commands = require('../commands');
                console.log(
                    chalk.bgBlue(
                        header.padStart(avgDiff + header.length)
                            .padEnd((avgDiff * 2) + header.length)));
                commands.forEach(cmd => cmd.help());
            });
        this._description = "Outputs help information for all commands.";
        this._example = "cli help, cli -h";
    }

    list() {
        return this._commands.map(cmd => cmd.name);
    }

    usage() {
        console.log(chalk.blue(`Usage: cli <command\n`));
        console.log(chalk.blue(`where <command is one of: \n \t ${list.join(', ')}\n`));
    }
 }


module.exports = new Help();