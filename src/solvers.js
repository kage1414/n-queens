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
  var rotateBoard = function(board, prevRows = []) {
    // console.log(board);
    // console.log(prevRows);
    // if (board.length === 1) {
    //   allSolutions.push(prevRows.concat(board));
    // } else {
    //   for (let i = 0; i < n; i++) {
    //     if (prevRows.length > 0) {
    //       let newBoard = prevRows.concat(board);
    //       allSolutions.push(newBoard);
    //     } else {
    //       let tempBoard = board.slice();
    //       allSolutions.push(tempBoard);
    //       // prevRows = [];
    //     }

    //     let row = board.pop();
    //     board.unshift(row);
    //     // prevRows.push(row);
    //     let a = prevRows.slice();
    //     a.push(row);
    //     rotateBoard(board.slice(1), a);
    //   }
    // }
    let newBoard;
    if (board.length === 2) {
      let row = board.pop();
      board.unshift(row);
      newBoard = prevRows.concat(board);
      allSolutions.push(newBoard);
    } else {
      // console.log(newBoard);
      // allSolutions.push(prevRows.concat(newBoard));
      const remainder = prevRows.length === 0 ? [] : prevRows;
      // remainder.push(board[0]);
      for (var i = 0; i < board.length; i++) {
        newBoard = board.slice();
        let curRemainder = remainder.slice();
        curRemainder.push(board[0]);

        rotateBoard(newBoard.slice(1), curRemainder);

        let row = board.pop();
        board.unshift(row);

        newBoard = prevRows.concat(board);
        allSolutions.push(newBoard);
      }
    }

  };
  if (n > 1) {
    rotateBoard(curSolution);
  } else {
    allSolutions.push(curSolution);
  }

  var solution = allSolutions[Math.floor(Math.random() * allSolutions.length)];

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
