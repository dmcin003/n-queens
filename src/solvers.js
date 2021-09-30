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
  // Create solution board (root of decision tree)
  var solution = new Board({'n': n});
  // Recursive function:
  var innerRecursiveFunc = function(row) {
    // Base case: n pieces placed/ row === n
    if (row === n) {
      console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution.rows()));
      return solution.rows();

    }
    for (var col = 0; col < n; col++) {
      //choice or decision
      solution.togglePiece(row, col);
      if (!solution.hasAnyRooksConflicts()) {
        //here is where we will recurse and move to next row
        innerRecursiveFunc((row + 1));
      } else {
        //undoing our choice
        solution.togglePiece(row, col);
      }
    }
  };
  innerRecursiveFunc(0);
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var sum = 1;
  for (var i = n; i > 0; i--) {
    sum *= (i);
  }
  return sum;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  //create board
  var solution = new Board({'n': n});
  var columns = [];
  // Recursive function:

  var innerRecursiveFunc = function(row) {
    // Base case: n pieces placed/ row === n
    if (row === n) {
      // console.log('Single solution for ' + n + ' Queens:', JSON.stringify(solution.rows()));

      // return solution.rows();

    }
    for (var col = 0; col < n; col++) {
      //choice or decision
      solution.togglePiece(row, col);
      if (!solution.hasAnyQueensConflicts()) {
        //here is where we will recurse and move to next row
        innerRecursiveFunc((row + 1));
      } else {
        //undoing our choice
        solution.togglePiece(row, col);

      }

    }
  };
  innerRecursiveFunc(0);

  console.log("solution :" + solution.rows());
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
