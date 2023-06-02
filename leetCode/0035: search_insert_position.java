// 35. Search Insert Position

class Solution {
  public int searchInsert(int[] nums, int target) {
    int len = nums.length;

    int l = 0;
    int r = len-1;
    while ( l <= r ) {
      int m = l + (r-l)/2;
      if ( nums[m] == target ) return m;
      if ( target < nums[m] ) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }

    return l;
  }
}