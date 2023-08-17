class Solution {
  public int compress(char[] chars) {
      
      int idx = 0;
      int w_idx = 0;

      for ( int j = 0 ; j < chars.length+1 ; j++ ) {
          if ( idx == j ) continue;
          if ( j == chars.length || chars[idx] != chars[j]) {
              int count = j - idx;
              chars[w_idx++] = chars[idx];
              if ( count > 1 ) {
                  //TODO: write number
                  String tmp = "" + count;
                  String[] tmps = tmp.split("");

                  for ( int z = 0 ; z < tmps.length ; z++ ) {
                      chars[w_idx++] = tmps[z].charAt(0);
                  }
              }

              //update idx
              idx = j;
          }
      }
      return w_idx;
  }
}