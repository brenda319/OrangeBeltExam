const MineSweeper = require('../src/MineSweeper');

describe('Should execute Mine Sweeper game and validate when the users wins or lost', () => {
  it('Should create a board with values to play', () => {
    const expectedResult = "\n+-+-+-+\n|-|-|-|\n+-+-+-+\n|*|*|-|\n+-+-+-+\n|-|*|-|";
    const newGame = true;
    expect(MineSweeper(newGame)).toBe(expectedResult);
  });

  it('Should return \'BOOM! - Game Over.\' when the selected cell has a bomb', () => {
    const expectedResult = "BOOM! - Game Over.";
    const newGame = false;
    const coordinates = '1,1';
    expect(MineSweeper(newGame, coordinates)).toBe(expectedResult);
  });

  it('Should return \'3 bombs around your square.\' when the selected cell has a bomb', () => {
    const expectedResult = "3 bombs around your square.";
    const newGame = false;
    const coordinates = '2,0';
    expect(MineSweeper(newGame, coordinates)).toBe(expectedResult);
  });
});