const CommandBase = require('./command.base');

class Hello extends CommandBase {
  constructor(...args) {
    super('Hello', ['hello', '--hello'],
      (args) => {
        console.log('Hello there!\n');
      });
    this.description = 'Example command that says Hello!';
    this.example = 'cli hello';
  }
}

module.exports = new Hello();
