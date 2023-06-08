// 373. Find K Pairs with Smallest Sums

import java.util.Arrays;
import java.util.PriorityQueue;
import java.util.ArrayList;

class Pair {
  public int u;
  public int v;
  public int sum;

  Pair(int u, int v, int sum) {
    this.u = u;
    this.v = v;
    this.sum = sum;
  }
  public String toString() {
    return "u: " + u  + " - " + "v: " + v + " - sum: " + sum;
  }
}

class Solution {
  public List<List<Integer>> kSmallestPairs(int[] nums1, int[] nums2, int k) {
    PriorityQueue<Pair> queue = new PriorityQueue<Pair>((a, b) -> a.sum - b.sum);
    List ret = new ArrayList(k);

    for ( int i = 0 ; i < nums1.length && i < k ; i++ ) {
      queue.offer(new Pair(i, 0, nums1[i]+nums2[0]));
    }

    while ( queue.size() != 0 && ret.size() < k ) {
      Pair pair = queue.poll();
      ret.add(Arrays.asList(nums1[pair.u], nums2[pair.v]));
      if ( pair.v + 1 < nums2.length ) {
        queue.offer(new Pair(pair.u, pair.v+1, nums1[pair.u] + nums2[pair.v+1]));
      }
    }

    return ret;
  }
}