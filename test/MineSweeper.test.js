const MineSweeper = require('../src/MineSweeper');

describe('Should execute Mine Sweeper game and validate when the users wins or lost', () => {
  it('Should create an empty board', () => {
    const expectedResult = "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+";;
    expect(MineSweeper()).toBe(expectedResult);
  });
});