GIVEN a user starting the game
WHEN the user selects start
THEN a 3x3 board is created

GIVEN the player selects a cell to see
WHEN the player find a bomb
THEN the game will end
AND the game should return 'BOOM! - Game Over'

GIVEN the player selects a cell
WHEN the cell isn't a bomb
THEN the game should return the number of bombs around the selected cell

GIVEN the user opens all cells
WHEN the user find all number none bomb
THEN the game should return the land is cleared! GOOD JOB!