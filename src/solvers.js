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

// window.getMajorDiagonal = function(n) {
//   if (n === 0) {
//     return [];
//   }
//   let curSolution = [];
//   for (let i = 0; i < n; i++) {
//     let row = new Array(n).fill(0);
//     row[i] = 1;
//     curSolution.push(row);
//   }
//   return curSolution;
// };

// window.getAllNRooksSolutions = function(n) {
//   let curSolution = getMajorDiagonal(n);
//   let allSolutions = [];
//   var rotateBoard = function(board, prevRows = []) {
//     let newBoard;
//     if (board.length === 2) {
//       let row = board.pop();
//       board.unshift(row);
//       newBoard = prevRows.concat(board);
//       allSolutions.push(newBoard);
//     } else {
//       const remainder = prevRows.length === 0 ? [] : prevRows;
//       for (var i = 0; i < board.length; i++) {
//         newBoard = board.slice();
//         let curRemainder = remainder.slice();
//         curRemainder.push(board[0]);

//         rotateBoard(newBoard.slice(1), curRemainder);

//         let row = board.pop();
//         board.unshift(row);

//         newBoard = prevRows.concat(board);
//         allSolutions.push(newBoard);
//       }
//     }

//   };
//   if (n > 2) {
//     rotateBoard(curSolution);
//   } else if (n === 2) {
//     allSolutions.push(curSolution);
//     rotateBoard(curSolution);
//   } else {
//     allSolutions.push(curSolution);
//   }
//   // let allSolutionsStr = _.map(allSolutions, (val) => JSON.stringify(val));
//   // let uniqSolutions = _.uniq(allSolutions, false, (val) => JSON.stringify(val));
//   // let allSolutionsMapped = _.map(uniqSolutions, (val) => JSON.parse(val));
//   return allSolutions;
// };

// window.findNRooksSolution = function(n) {
//   let allSolutions = getAllNRooksSolutions(n);
//   var solution = allSolutions[Math.floor(Math.random() * allSolutions.length)];

//   console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
//   return solution;
// };

// window._getAllNRooksSolutions = function(n) {
//   let allSolutions = [];

//   var nestedFor = function(board, row) {
//     if (row === n) {
//       if (board.hasAnyRookConflicts() === false) {
//         let strBoard = JSON.stringify(board.rows());
//         allSolutions.push(strBoard);
//       }
//     } else {
//       for (let i = 0; i < n; i++) {
//         board.togglePiece(row, i);
//         nestedFor(startBoard, row + 1);
//         board.togglePiece(row, i);
//       }
//     }
//   };

//   let startBoard = new Board({'n': n});
//   // debugger;
//   nestedFor(startBoard, 0);
//   return allSolutions;
// };

window.findNRooksSolution = function(n) {
  var nestedFor = function(board, row) {
    if (row === n) {
      if (board.hasAnyRookConflicts() === false) {
        solution = board.rows();
      }
    } else {
      for (let i = 0; i < n; i++) {
        board.togglePiece(row, i);
        nestedFor(startBoard, row + 1);
        if (solution === undefined) {
          board.togglePiece(row, i);
        } else {
          return;
        }
      }
    }
  };

  let startBoard = new Board({'n': n});
  let solution;
  nestedFor(startBoard, 0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  let solutionCount = 0;
  var nestedFor = function(board, row) {
    if (row === n) {
      if (board.hasAnyRookConflicts() === false) {
        solutionCount++;
      }
    } else {
      for (let i = 0; i < n; i++) {
        board.togglePiece(row, i);
        nestedFor(startBoard, row + 1);
        board.togglePiece(row, i);
      }
    }
  };

  let startBoard = new Board({'n': n});
  nestedFor(startBoard, 0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var nestedFor = function(board, row) {
    if (row === n) {
      if (board.hasAnyRookConflicts() === false && board.hasAnyQueensConflicts() === false) {
        solution = board.rows();
      }
    } else {
      for (let i = 0; i < n; i++) {
        board.togglePiece(row, i);
        nestedFor(startBoard, row + 1);
        if (solution === undefined) {
          board.togglePiece(row, i);
        } else {
          return;
        }
      }
    }
  };

  let startBoard = new Board({'n': n});
  let solution;
  nestedFor(startBoard, 0);

  if (solution === undefined) {
    return {'n': n};
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  let solutionCount = 0;

  var nestedFor = function(board, row) {
    if (row === n) {
      if (board.hasAnyRookConflicts() === false && board.hasAnyQueensConflicts() === false) {
        solutionCount++;
      }
    } else {
      for (let i = 0; i < n; i++) {
        board.togglePiece(row, i);
        nestedFor(startBoard, row + 1);
        board.togglePiece(row, i);
      }
    }
  };

  let startBoard = new Board({'n': n});
  nestedFor(startBoard, 0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
