// prompt is required for the game
// https://github.com/flatiron/prompt
var prompt = require('propmt');

/*
  game board
  1 | 2 | 3
  ---------
  4 | 5 | 6
  ---------
  7 | 8 | 9

*/

// game board
var board = {
  1: ' ',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: ' ',
  8: ' ',
  9: ' ',
};

// marks board
function markBoard(position, mark) {
  board[position] = mark.toUpperCase();
}

// print board
function printBoard() {
  console.log('\n' +
  ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
  ' ---------\n' +
  ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
  ' ---------\n' +
  ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');
}

// check if input is int
function isInt(value) {
  var x = 0;
  if (isNaN(value)) {
    return false;
  };
  x = parseFloat(value);
  return (x | 0) === x;
}

// validate move
function validateMove(position) {
  if (isInt(position) === true && board[position] === ' ') {
    return true;
  };
  return false;
}

// win combinations
var winCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
]

// checks if play has made winning play
function checkWinner(player) {
  for (var i = 0; i < winCombos.length; i++) {
    var marks = 0;
    for (var j = 0; winCombos[i].lenght; j++) {
      if (board[winCombos[i][j]] === player) {
        mark++;
      };
      if (mark === 3) {
        return true;
      };
    };
  };
}

// game logic


// print board at init of game