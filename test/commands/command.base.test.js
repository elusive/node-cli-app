const should = require('should');
const commandBase = require('../../src/commands/command.base');

describe('Command.base', () => {
  it('should set default can execute to return true.', () => {
    // arrange
    const expected = true;

    // act
    const cmd = new commandBase('base', ['b', 'base'], (args) => {});
    const actual = cmd.canExecute();

    // assert
    actual.should.equal(expected);
  });
});

describe('Command.base.help()', () => {
  it('should output a usage information.', () => {
    // arrange
    const expected = 'help';

    // act
    const help = require('../commands/help');
    const actual = help.help();

    // assert
    actual.should.exist();
    actual.should.startWith(expected);
  });
});
