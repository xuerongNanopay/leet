// 34. Find First and Last Position of Element in Sorted Array

class Solution {
  public int[] searchRange(int[] nums, int target) {
    int[] rets = new int[]{2147483647, -2147483648};
    doFind(nums, 0, nums.length-1, rets, target);
    return rets[0] == 2147483647 ? new int[]{-1, -1} : rets;
  }

  void doFind(int[] nums, int l, int r, int[] rets, int target) {
    if ( l > r ) return;

    int m = l + (r-l)/2;
    if ( nums[m] == target ) {
      rets[0] = m < rets[0] ? m : rets[0];
      rets[1] = m > rets[1] ? m : rets[1];
    }

    doFind(nums, l, m-1, rets, target);
    doFind(nums, m+1, r, rets, target);
  }
}