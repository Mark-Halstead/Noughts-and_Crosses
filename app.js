// Have a game board as a set of three arrays (maybe add some lines to make it look like tic tac toe grid?)
let board = [  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

// Array with X and O where the players can choose to put in an X or an O
let player = ['X', 'O'];


// Which player's turn logic


// Play condition logic


// Have two coordinates x and y (x for rows and y for columns)





// Code for picking the X or O and the grid position
function playerTurn () {
  const prompt = require("prompt-sync")({ sigint: true });
  userInput = prompt("X or O? ")
  let playerChoice = userInput[0].toUpperCase()
  
 
  if (playerChoice === "X" || playerChoice === "O"){
      return playerChoice
  } else {
      console.log("X or O")
      playerTurn()
  } 
  //
}

function gridPosition(){
  const prompt = require("prompt-sync")({ sigint: true });
  gridInput = prompt("Grid position? ")
  let grid = [[["a1"], ["b1"], ["c1"]], [["a2"], ["b2"], ["c2"]], [["a3"], ["b3"], ["c3"]]]
   for (let i = 0; i < grid.length; i++){
      for (let j =0; j < grid[i].length; j++){
          
      if (grid[i][j]==gridInput){
          let gridPos = grid[i][j][0].toUpperCase()

          console.log(`You have chosen ${gridPos}. Opponents turn!`)

      }}
 } 
}

playerTurn()
gridPosition()


// Win condition logic
board = [  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
function winCondition() {
  // row win condition
  for (let i = 0; i < 3; i++) {
    if (board[i][0] !== "" && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        return true;
    }
  }
  // column win condition
  for (let i = 0; i < 3; i++) {
    if (board[0][i] !== "" && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return true
    }
  }
  // diagonal win condition one
    if (board[0][0] !== "" && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      return true;
  }
  // diagonal win conditom two
    if (board[0][2] !== "" && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      return true;
  }
  return false
}

// if (winCondition()) {
//     console.log(`Player ${currentPlayer} wins!`);
// } else {
//     console.log("It's a draw!");
// }























// Draw condition logic - for later to test!
// function drawCondition() {
//   for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//           if (board[i][j] === "") {
//               return false; // + some kind of logic to play again
//           }
//       }
//     }
//   return true;
// }

// Play again logic (while win and draw are not true)


// Score of the current player
// let currentPlayer = 0;
