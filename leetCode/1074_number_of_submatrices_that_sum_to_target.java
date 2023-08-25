import java.util.HashMap;
import java.util.Arrays;

class Solution {
    public int numSubmatrixSumTarget(int[][] matrix, int target) {
        int height = matrix.length;
        int width = matrix[0].length;
        int ret = 0;

        for ( int i = 0 ; i < height ; i++ ) {
            int[] nums = initialArray(width);
            for ( int j = i ; j < height ; j++ ) {
                nums = sumArray(nums, matrix[j]);
                ret += subArraySumTarget(nums, target);
            }
        }
        return ret;
    }

    private int[] initialArray(int length) {
        int[] ret = new int[length];
        Arrays.fill(ret, 0);
        return ret;
    }

    private int[] sumArray(int[] nums, int[] adds) {
        for ( int i = 0 ; i < nums.length ; i++ ) {
            nums[i] += adds[i];
        }
        return nums;
    }

    private int subArraySumTarget(int[] nums, int target) {
        HashMap<Integer, Integer> cache = new HashMap<Integer, Integer>();
        cache.put(0, 1);
        int acc = 0;
        int ret = 0;

        for ( int i = 0 ; i < nums.length ; i++ ) {
            acc += nums[i];
            if ( cache.containsKey(acc - target) ) {
                ret += cache.get(acc - target);
            }

            cache.put(acc, cache.getOrDefault(acc, 0) + 1);
        }
        return ret;
    }
}