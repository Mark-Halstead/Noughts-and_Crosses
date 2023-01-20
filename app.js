// Have a game board as a set of three arrays (maybe add some lines to make it look like tic tac toe grid?)
let board = [  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// Array with X and O where the players can choose to put in an X or an O
let players = ['X', 'O'];


// Which player's turn logic


// Play condition logic


// Have two coordinates x and y (x for rows and y for columns)


// Win condition logic





if (checkForWin()) {
    console.log(`Player ${currentPlayer} wins!`);
} else {
    console.log("It's a draw!");
}

// Draw condition logic


// Play again logic (while win and draw are not true)


// Score of the current player
let currentPlayer = 0;
