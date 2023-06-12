// 198. House Robber

class Solution {
  public int rob(int[] nums) {
    int[] cache = new int[nums.length+1];
    cache[0] = 0;
    cache[1] = nums[0];

    for ( int i = 1 ; i < nums.length; i++ ) {
      cache[i+1] = Math.max(cache[i], nums[i] + cache[i-1]);
    }
    return cache[nums.length];
  }
}