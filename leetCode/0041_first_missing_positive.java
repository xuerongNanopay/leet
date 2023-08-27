class Solution {
  public int firstMissingPositive(int[] nums) {
      for ( int i  = 0 ; i < nums.length ; i++ ) {
          if ( nums[i] < 0 ) nums[i] = 0;
      }

      for ( int i = 0 ; i < nums.length ; i++ ) {
          int cur = Math.abs(nums[i]);
          if ( cur-1 < 0 || cur-1 >= nums.length ) continue;
          if ( nums[cur-1] == 0 ) nums[cur-1] = -(nums.length+1); // key
          else if ( nums[cur-1] > 0) nums[cur-1] = -nums[cur-1];
      }

      for ( int i = 0 ; i < nums.length ; i++ ) {
          if ( nums[i] >= 0 ) return i+1;
      }
      return nums.length+1;
  }
}