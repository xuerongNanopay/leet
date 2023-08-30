class Solution {
  public int findLengthOfLCIS(int[] nums) {
      int ret = 1;
      int tmp = 1;
      for ( int i = 1 ; i < nums.length ; i++ ) {
          if ( nums[i] > nums[i-1] ) {
              tmp++;
              ret = Math.max(ret, tmp);
          } else {
              tmp = 1;
          }
      }

      return ret;
  }
}