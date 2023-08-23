import java.util.HashSet;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.Iterator;

class Solution {
    public boolean canPartition(int[] nums) {
        int sum = Arrays.stream(nums).sum();
        if ( sum % 2 != 0 ) return false;

        int target = sum / 2;

        HashSet<Integer> set = new HashSet<Integer>();
        if ( 0 == target ) return true;
        if ( nums[0] == target ) return true;

        set.add(nums[0]);
        set.add(0);

        for ( int i = 1 ; i < nums.length ; i++ ) {
            int cur = nums[i];
            ArrayList<Integer> tmps = new ArrayList<Integer>();

            Iterator<Integer> itor = set.iterator();

            while ( itor.hasNext() ) {
                Integer s = itor.next();
                if ( s + cur == target ) return true;
                tmps.add(s+cur);
            }

            set.addAll(tmps);
        }

        return false;
    }
}