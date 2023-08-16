import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        LinkedList<Boolean> rets = new LinkedList<Boolean>();
        int max = Arrays.stream(candies).max().getAsInt();
        for ( int i = 0 ; i < candies.length ; i++ ) {
            if ( candies[i] + extraCandies >= max ) {
                rets.addLast(true);
            } else {
                rets.addLast(false);
            }
        }

        return rets;
    }
}