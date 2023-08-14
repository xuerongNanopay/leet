import java.util.HashMap;

class Solution {
  public int[] twoSum(int[] nums, int target) {
      var cache = new HashMap<Integer, Integer>();

      for ( int i = 0 ; i < nums.length ; i++ ) {
          var cur = target - nums[i];
          if ( cache.containsKey(cur) ) return new int[]{cache.get(cur), i};
          cache.put(nums[i], i);
      }

      return new int[]{};
  }
}