import java.util.HashMap;

class Solution {
    public int subarraySum(int[] nums, int k) {
        HashMap<Integer, Integer> cache = new HashMap<Integer, Integer>();
        cache.put(0, 1);
        int acc = 0;
        int ret = 0;

        for ( int i = 0 ; i < nums.length ; i++ ) {
            acc += nums[i];
            if ( cache.containsKey(acc - k) ) {
                ret += cache.get(acc - k);
            }
            // Have to put one by one while iteration.
            cache.put(acc, cache.getOrDefault(acc, 0) + 1);
        }
        return ret;
    }
}