// 162. Find Peak Element

class Solution {
  public int findPeakElement(int[] nums) {
    return doFind(nums, 0, nums.length-1);
  }

  int doFind(int[] nums, int l, int r) {
    if ( l > r ) return -1;

    int m = l + (r-l)/2;
    int ret = -1;
    if ( isPeak(nums, m) ) return m;
    if ( (ret = doFind(nums, l, m-1)) != -1 ) return ret;
    if ( (ret = doFind(nums, m+1, r)) != -1 ) return ret;
    return ret;
  }

  boolean isPeak(int[] nums, int idx) {
    int left = idx-1;
    int right = idx+1;
    int length = nums.length;
    System.out.println(idx);
    if ( left < 0 && right >= length ) return true;
    if ( left < 0 && nums[idx] > nums[right] ) return true;
    if ( left < 0 && nums[idx] < nums[right] ) return false;
    if ( right >= length && nums[idx] > nums[left] ) return true;
    if ( right >= length && nums[idx] < nums[left] ) return false;
    if ( nums[idx] > nums[left] && nums[idx] > nums[right] ) return true;
    return false;
  }
}