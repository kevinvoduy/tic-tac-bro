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
function printBoard() {
  console.log('\n' +
  ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
  ' ---------\n' +
  ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
  ' ---------\n' +
  ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');
}

// check if input is int

// validate move

// win combinations

// checks if play has made winning play

// game logic

// print board at init of game