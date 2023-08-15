class Solution {
  public String mergeAlternately(String word1, String word2) {
      String s = "";
      int l1 = word1.length();
      int l2 = word2.length();
      int i1 = 0;
      int i2 = 0;

      while ( i1 < l1 && i2 < l2 ) {
          s += word1.charAt(i1);
          s += word2.charAt(i2);

          i1++;
          i2++;
      }

      while ( i1 < l1 ) {
          s += word1.charAt(i1);
          i1++;
      }

      while ( i2 < l2 ) {
          s += word2.charAt(i2);
          i2++;
      }

      return s;
  }
}