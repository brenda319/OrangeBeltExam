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
        return findMines(board, parseInt(x), parseInt(y));
};

const findMines = (board, x, y) => {
    const top = findTop(x), bot = findBot(x), right = findRight(y), left = findLeft(y);
    
    var neighboorsArray = new Array();
    let bombCounter = 0;

    findCoordinates(x+''+top, neighboorsArray);
    findCoordinates(x+''+right, neighboorsArray);
    findCoordinates(x+''+bot, neighboorsArray);
    findCoordinates(x+''+left, neighboorsArray);
    findCoordinates(top+''+left, neighboorsArray);
    findCoordinates(top+''+right, neighboorsArray);
    findCoordinates(bot+''+left, neighboorsArray);
    findCoordinates(bot+''+right, neighboorsArray);
    for (let i = 0; i<neighboorsArray.length; i++) {
        const row = neighboorsArray[i][0];
        const col = neighboorsArray[i][1];
        if(board[row][col] === '*')
            bombCounter++;
    }
    return bombCounter + " bombs around your square.";
};

const findCoordinates = (coordinate, neighboorsArray) => {
    if(neighboorsArray.indexOf(coordinate) === -1) 
        neighboorsArray.push(coordinate);
};

const findTop = (x) => {
    return x-1 > -1 ? x-1 : x;
};

const findBot = (x) => {
    return x+1 < 3 ? x+1 : x;
};

const findRight = (y) => {
    return y+1 < 3 ? y+1 : y;
};

const findLeft = (y) => {
    return y-1 > -1 ? y-1 : y;
};

module.exports = MineSweeper;