// 153. Find Minimum in Rotated Sorted Array

// Brain comsumming question.
class Solution {
  public int findMin(int[] nums) {
    int ret = 100000;

    int l = 0;
    int r = nums.length - 1;

    while ( l <= r ) {
      int m = l + (r-l)/2;

      ret = nums[m] < ret ? nums[m] : ret;

      if ( nums[l] <= nums[r] ) {
        if ( nums[l] < nums[m] ) {
          r = m - 1;
        } else {
          l = m + 1;
        }
      } else {
        if ( nums[r] > nums[m] ) {
          r = m - 1;
        } else {
          l = m + 1;
        }
      }
    }

    return ret;
  }
}