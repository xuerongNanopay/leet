//4. Median of Two Sorted Arrays


class Solution {
  public double findMedianSortedArrays(int[] nums1, int[] nums2) {
      int[] shortArr;
      int[] longArr;
      int half = (nums1.length + nums2.length) / 2;
      boolean odd = (nums1.length + nums2.length) % 2 == 0 ? false : true;

      if ( nums1.length < nums2.length ) {
          shortArr = nums1;
          longArr = nums2;
      } else {
          shortArr = nums2;
          longArr = nums1;
      }


      int l = 0;
      int r = shortArr.length - 1;
      System.out.println(shortArr.length);
      System.out.println(longArr.length);
      System.out.println(half);
      // We guarantee will find solution.
      while ( true ) {
          int i_short = (l + r) >> 1; // key: -1 / 2 should be -1
          int i_long = half - 1 - (i_short + 1); // short hand: int idx_l = half - idx_s -2;
          System.out.println(i_short + " : " + i_long);
          int shortL = i_short < 0 ? Integer.MIN_VALUE : shortArr[i_short];
          int shortR = i_short + 1 >= shortArr.length ? Integer.MAX_VALUE : shortArr[i_short+1];
          int longL = i_long < 0 ? Integer.MIN_VALUE : longArr[i_long];
          int longR = i_long + 1 >= longArr.length ? Integer.MAX_VALUE : longArr[i_long+1];

          System.out.println(shortL + " : " + shortR + " : " + longL + " : " + longR);
          if ( shortL <= longR && longL <= shortR ) {
              if ( odd ) return Math.min(shortR, longR);
              else return ((float) (Math.max(shortL, longL) + Math.min(shortR, longR))) / 2;
          } else if ( shortL > longR ) {
              r = i_short - 1;
          } else {
              l = i_short + 1;
          }
      } 
  }
}