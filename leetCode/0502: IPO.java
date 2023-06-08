// 502. IPO
import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;
import java.util.PriorityQueue;



class Solution {
  public int findMaximizedCapital(int k, int w, int[] profits, int[] capital) {
    int acc = w;
    List<Integer []> list = new ArrayList();
    for ( int i = 0 ; i < profits.length ; i++ ) {
      list.add(new Integer[]{profits[i], capital[i]});
    }

    Collections.sort(list, (a, b) -> a[1] - b[1]);
    
    PriorityQueue<Integer[]> queue = new PriorityQueue<Integer[]>((a, b) -> b[0] - a[0]);

    while ( list.size() > 0 && list.get(0)[1] <= acc ) {
      Integer[] t = list.remove(0);
      queue.offer(new Integer[]{t[0], t[1]});
    }

    for ( int z = 0 ; z < k && queue.size() > 0 ; z++ ) {
      Integer[] cur = queue.poll();
      acc += cur[0];

      while ( list.size() > 0 && list.get(0)[1] <= acc ) {
        Integer[] t = list.remove(0);
        queue.offer(new Integer[]{t[0], t[1]});
      }
    }
    return acc;
  }
}