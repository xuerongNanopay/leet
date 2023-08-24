import java.util.*;

class Solution {
    private Map<String, Integer> cache = new HashMap<String, Integer>();

    private boolean contains(int index, int target) {
        return cache.containsKey(buildKey(index, target));
    }

    private int get(int index, int target) {
        return cache.get(buildKey(index, target));
    }

    private void put(int index, int target, int value) {
        cache.put(buildKey(index, target), value);
    }

    private String buildKey(int index, int target) {
        return "" + index + " - " + target;
    }

    public int findTargetSumWays(int[] nums, int target) {
        return dfs(nums, 0, target);
    }

    private int dfs(int[] nums, int index, int target) {
        if ( contains(index, target)) {
            return get(index, target);
        }

        if ( index == nums.length )  {
            if ( target == 0 ) return 1;
            return 0;
        }

        int left = dfs(nums, index+1, target-nums[index]);
        int right = dfs(nums, index+1, target+nums[index]);
        put(index, target, left+right);
        return left+right;
    }
}