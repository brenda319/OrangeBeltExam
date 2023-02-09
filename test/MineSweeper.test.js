const MineSweeper = require('../src/MineSweeper');

describe('Should execute Mine Sweeper game and validate when the users wins or lost', () => {
  it('Should create a board with values to play', () => {
    const expectedResult = "\n+-+-+-+\n|-|-|-|\n+-+-+-+\n|*|*|-|\n+-+-+-+\n|-|*|-|";
    const newGame = true;
    expect(MineSweeper(newGame)).toBe(expectedResult);
  });
});