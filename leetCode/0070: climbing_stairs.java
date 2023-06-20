class Solution {
  public int climbStairs(int n) {
    int[] cache = new int[n+1];
    cache[0] = 1;
    cache[1] = 1;

    for ( int i = 2 ; i < n+1 ; i++ ) {
      cache[i] = cache[i-1] + cache[i-2];
    }

    return cache[n];
  }
}