const MineSweeper = (newGame, coordinates) => {
    const emptyBoard = "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+";
    const dash = '-';
    const bomb = '*';
    var board = new Array(2);
    for (var i = 0; i < 3; i++) {
        board[i] = new Array(2);
    }
    board[0][0] = dash;board[0][1] = dash;board[0][2] = dash;
    board[1][0] = bomb;board[1][1] = bomb;board[1][2] = dash;
    board[2][0] = dash;board[2][1] = bomb;board[2][2] = dash;
    
    if(newGame)
        return newBoard(board);
    else
        return validateMines(board, coordinates);
};

const newBoard = (board) => {
    var newBoard = "";
    const rowSeparator = '\n+-+-+-+\n';
    const separator = '|';
    for (i = 0; i < board.length; i++) {
        newBoard = newBoard + rowSeparator;
        for (j = 0; j < board[i].length; j++) {
            newBoard = newBoard + separator + board[i][j];
        }
        newBoard = newBoard + separator;
    }
    return newBoard;
};

const validateMines = (board, coordinates) => {
    const x = coordinates[0];
    const y = coordinates[2];
    const gameOver = "BOOM! - Game Over.";

    if(board[x][y]==='*')
        return gameOver;
    else
        return findMines(board, x, y);
};

const findMines = (board, x, y) => {
    const top = x-1, bot = x+1, right = y+1, left=y-1;
    let bombCounter = 0;
    if(board[x][top] === '*')
        bombCounter++;
    return "3 bombs around your square.";
};

module.exports = MineSweeper;