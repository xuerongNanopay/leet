//322. Coin Change
import java.util.Arrays;
class Solution {
    public int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount+1];
        Arrays.fill(dp, Integer.MAX_VALUE/2);
        dp[0] = 0;

        for ( int i = 1 ; i < dp.length ; i++ ) {
            for ( int c = 0 ; c < coins.length ; c++ ) {
                if ( i < coins[c] ) continue;
                if ( dp[i-coins[c]] + 1 < dp[i] ) dp[i] = dp[i-coins[c]] + 1;
            }
        }

        return dp[dp.length-1] >= Integer.MAX_VALUE/2 ? -1 : dp[dp.length-1];
    }
}