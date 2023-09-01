import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);

        List<List<Integer>> ret = new ArrayList<List<Integer>>();

        for ( int i = 0 ; i <= nums.length - 3 ; i++ ) {
            if ( i > 0 && nums[i] == nums[i-1] ) continue;

            int l = i+1;
            int r = nums.length - 1;
            int target = 0 - nums[i];

            while ( l < r ) {
                if ( nums[l] + nums[r] == target ) {
                    ret.add(Arrays.asList(nums[i], nums[l], nums[r]));
                    while ( l < r && nums[++l] == nums[l-1] ) {};
                    while ( l < r && nums[--r] == nums[r+1] ) {};
                } else if ( nums[l] + nums[r] < target ) {
                    l++;
                } else {
                    r--;
                }
            }
        }
        
        return ret;
    }
}