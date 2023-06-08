// 215. Kth Largest Element in an Array

import java.util.PriorityQueue;
import java.util.Arrays;

class Solution {
    public int findKthLargest(int[] nums, int k) {
      var queue = new PriorityQueue<Integer>(k, (a, b) -> a-b);

      Arrays.stream(nums).boxed().forEach(n -> {
        if ( queue.size() < k ) {
          queue.add(n);
        } else {
          if ( n > queue.peek() ) {
            queue.poll();
            queue.offer(n);
          }
        }
      });
      return queue.peek();
    }
}
