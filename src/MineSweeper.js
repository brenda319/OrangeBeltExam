const MineSweeper = (newGame, coordinates) => {
    const emptyBoard = "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+";
    var board = new Array(2);
    for (var i = 0; i < 3; i++) {
        board[i] = new Array(2);
    }
    board[0][0] = '-';board[0][1] = '-';board[0][2] = '-';
    board[1][0] = '*';board[1][1] = '*';board[1][2] = '-';
    board[2][0] = '-';board[2][1] = '*';board[2][2] = '-';
    
    if(newGame) {
        return newBoard(board);
    }
    else {
        return validateMines(board, coordinates);
    }
};

const newBoard = (board) => {
    var newBoard = "";
    for (i = 0; i < board.length; i++) {
        newBoard = newBoard + '\n+-+-+-+\n';
        for (j = 0; j < board[i].length; j++) {
            newBoard = newBoard + '|' + board[i][j];
        }
        newBoard = newBoard + '|';
    }
    return newBoard;
};

const validateMines = (board, coordinates) => {
    const x = coordinates[0];
    const y = coordinates[2];
    const gameOver = "BOOM! - Game Over.";

    if(board[x][y]==='*')
        return gameOver;
};

module.exports = MineSweeper;