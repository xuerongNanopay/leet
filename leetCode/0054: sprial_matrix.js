// 54. Spiral Matrix

var spiralOrder = function(matrix) {
  //Hint: each loop walking four directions.
  let ret = [];
  let width = matrix[0].length;
  let height = matrix.length;

  let i = 0 ;
  let j = 0;

  let top = 0;
  let right = width - 1;
  let bottom = height - 1;
  let left = 0;

  for ( let z = 0 ; z < width * height ; ) {
    for ( ; j <= right && z < width * height; j++ ) {
      ret.push(matrix[i][j]);
      z++;
      if ( j == right ) {
        i++;
        break;
      }
    }
    for ( ; i <= bottom && z < width * height; i++ ) {
      ret.push(matrix[i][j]);
      z++;
      if ( i == bottom ) {
        j--;
        break;
      }
    }
    for ( ; j >= left && z < width * height; j-- ) {
      ret.push(matrix[i][j]);
      z++;
      if ( j == left ) {
        i--;
        break;
      }
    }
    for ( ; i >= top+1 && z < width * height; i-- ) {
      ret.push(matrix[i][j]);
      z++;
      if ( i == top+1 ) {
        j++;
        break;
      }
    }
    top++;
    left++;
    right--;
    bottom--;
  }
  return ret;
};