//334. Increasing Triplet Subsequence
// think this case: [3,5,1,6].
class Solution {
  public boolean increasingTriplet(int[] nums) {
      int i = Integer.MAX_VALUE;
      int j = Integer.MAX_VALUE;

      for ( int idx = 0 ; idx < nums.length ; idx++ ) {
          if ( nums[idx] <= i ) {
              i = nums[idx];
          } else if ( nums[idx] <= j ) {
              j = nums[idx];
          } else {
              return true;
          }
      }

      return false;
  }
}