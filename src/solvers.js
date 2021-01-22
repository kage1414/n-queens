/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  let curSolution = [];
  // set up major diagonal solution
  for (let i = 0; i < n; i++) {
    let row = new Array(n).fill(0);
    row[i] = 1;
    curSolution.push(row);
  }

  let allSolutions = [];
  var rotateBoard = function(board, prevRows) {
    console.log(board);
    if (board.length === 1) {
      allSolutions.push(prevRows.concat(board));
    } else {
      for (let i = 0; i < n; i++) {
        if (prevRows) {
          let newBoard = prevRows.concat(board);
          allSolutions.push(newBoard);
        } else {
          allSolutions.push(board);
          prevRows = [];
        }

        let row = board.pop();
        board.unshift(row);
        prevRows.push(row);
        rotateBoard(board.slice(1), prevRows);
      }
    }
  };
  rotateBoard(curSolution);

  var randBoard = allSolutions[Math.floor(Math.random() * allSolutions.length)];

  var solution = new Board(randBoard);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
