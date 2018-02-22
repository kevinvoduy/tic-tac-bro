// prompt is required for the game
// https://github.com/flatiron/prompt
var prompt = require('prompt');

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
  var i, j, mark;
  for (i = 0; i < winCombos.length; i++) {
    marks = 0;
    for (j = 0; winCombos[i].lenght; j++) {
      if (board[winCombos[i][j]] === player) {
        mark++;
      };
      if (mark === 3) {
        return true;
      };
    }
  }
  return false
}

// game logic
function playersTurn(player) {
  console.log('Its your turn ' + player);
  prompt.start();
  prompt.get(['position'], function(err, result) {
    if (validateMove(result.position)) {
      markBoard(result.position, player);
      printBoard();
      if (checkWinner(player)) {
        console.log('Chicken Dinner');
        return;
      };
      if (player === 'X') {
        playersTurn('O');
      } else {
        playersTurn('X');
      }
    } else {
      console.log('incorrect input, try again');
      playersTurn(player);
    }
  });
}

// print board at init of game
console.log('Game Start!: \n' +
  ' 1 | 2 | 3 \n' +
  ' --------- \n' +
  ' 4 | 5 | 6 \n' +
  ' --------- \n' +
  ' 7 | 8 | 9 \n'
);

playersTurn('X');