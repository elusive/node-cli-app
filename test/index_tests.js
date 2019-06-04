const should = require('should');
const runCommand = require('./cli_helper');
const app = require('../src/cli');


describe('mentr-cli ', () => {
    it('should output some helpful text when no args.', () => {
        // arrange
        const expected = 'Mentoring';

        // act
        var result = runCommand('mentr');
        console.log(result);

        // assert
        result.should.exist();
        result.should.startWith(expected);
    });
});
