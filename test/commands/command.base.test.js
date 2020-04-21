const should = require('should');
const runCommand = require('../cli_helper');
const commandBase = require('../../src/commands/command.base');

describe('command.base', () => {
    it('should set default can execute to return true.', () => {
        // arrange
        const expected = true;

        // act
        let cmd = new commandBase("base", ['b', 'base'], (args) => {});
        let actual = cmd.canExecute();

        // assert
        actual.should.equal(expected);
    })
})