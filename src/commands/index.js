/**
 * endpoint used to export all commands in an array
 */

const commands = [];

commands.push(require('./version'));
commands.push(require('./hello'));
commands.push(require('./help'));
commands.push(require('./clear'));

module.exports = commands;
