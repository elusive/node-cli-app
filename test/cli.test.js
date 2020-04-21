
const should = require('should');
const runCommand = require('./cli_helper');
const app = require('../src/cli').default;


describe('cli-app ', () => {
    it('should output some helpful text when no args.', () => {
        // arrange
        const expected = 'CLI';

        // act
        var result = runCommand('cli help');
        console.log(result.stdout);

        // assert
        should.exist(result.stdout);
        result.stdout.should.startWith(expected);
    });
});
