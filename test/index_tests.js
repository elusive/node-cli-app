const should = require('should');
const runCommand = require('./helper');
const app = require('../src/index');


describe('mentr-cli ', () => {
    it('should output some helpful text when no args.', () => {
        // arrange
        const expected = 'Mentoring';

        // act
        var result = app('mentr')

        // assert
        should.exist(result);
        console.log(result);
        result.should.startWith(expected);
    });
});
