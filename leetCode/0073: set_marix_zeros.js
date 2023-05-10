//73. Set Matrix Zeroes.

var setZeroes = function(matrix) {
  let cols = {};
  let rows = {};
  let height = matrix.length;
  let width = matrix[0].length;

  for ( let i = 0 ; i < height ; i++ ) {
    for ( let j = 0 ; j < width ; j++ ) {
      if ( matrix[i][j] === 0 ) {
        cols[j] = true;
        rows[i] = true;
      }
    }
  }

  for ( let i = 0 ; i < height ; i++ ) {
    for ( let j = 0 ; j < width ; j++ ) {
      if ( i in rows || j in cols ) {
        matrix[i][j] = 0;
      }
    }
  }
};