// 48. Rotate Image

var rotate = function(matrix) {
  let width = matrix[0].length;
  let height = matrix.length;

  for ( let i = 0 ; i < height ; i++ ) {
    for ( let j = i ; j < width ; j++ ) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }

  for ( let i = 0 ; i < height ; i++ ) {
    let l = 0;
    let r = width - 1;

    while ( l < r ) {
      let tmp = matrix[i][l];
      matrix[i][l] = matrix[i][r];
      matrix[i][r] = tmp;
      l++;
      r--;
    }
  }

};