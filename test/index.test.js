
const should = require('should');
const runCommand = require('./test_helper');
const app = require('../src').default;


describe('index ', () => {
  it('should output some helpful text when no args.', () => {
    // arrange
    const expected = 'Application Help';

    // act
    const result = runCommand('cli');
    console.log(result.stdout);

    // assert
    should.exist(result.stdout);
  });
});
