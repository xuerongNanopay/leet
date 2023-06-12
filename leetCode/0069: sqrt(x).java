// 69. Sqrt(x)

class Solution {
  public int mySqrt(int x) {
    int l = 1;
    int r = x+1;

    while ( l < r ) {
      int m = (l + r) / 2;
      if ( m*m > x) r = m;
      else l = m + 1;
    }

    return  l-1;
  }
}