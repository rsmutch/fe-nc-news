const { timeFormatter } = require('./timeFormatter');

describe('timeFormatter', () => {
  it('should return a date formatted correctly', () => {
    const input = '2018-05-30T15:59:13.341Z';
    const actualOutput = timeFormatter(input);
    const expectedOutput = '30/05/2018 @ 15:59';
    expect(actualOutput).toEqual(expectedOutput);
  });
});
