// 74. Search a 2D Matrix

class Solution {
  public boolean searchMatrix(int[][] matrix, int target) {
    int height = matrix.length;
    int width = matrix[0].length;

    int l = 0;
    int r = height * width - 1;

    while ( l <= r ) {
      int m = l + (r - l)/2;
      int i = m / width;
      int j = m % width;
      if ( matrix[i][j] == target ) return true;
      if ( target < matrix[i][j] ) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
    return false;
  }
}