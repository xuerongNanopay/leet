// 300. Longest Increasing Subsequence

import java.util.Arrays;

class Solution {
    public int lengthOfLIS(int[] nums) {
      int[] cache = new int[nums.length];
      Arrays.fill(cache, 1);

      for ( int i = 1 ; i < nums.length; i++ ) {
        for ( int j = 0 ; j < i ; j++ ) {
          if ( nums[i] > nums[j]) {
            cache[i] = Math.max(cache[i], cache[j] + 1);
          }
        }
      }
      return Arrays.stream(cache).boxed().max(Integer::compare).get();
    }
}