const should = require('should');
const runCommand = require('./cli_helper');
const app = require('../src/cli');


describe('mentr ', () => {
    it('should output some helpful text when no args.', () => {
        // arrange
        const expected = 'Mentoring';

        // act
        var result = runCommand('mentr');
        console.log(result.stdout);
        result = result.stdout;

        // assert
        should.exist(result);
        should(result).not.be.empty();
    });
});
