class Solution {
  public boolean isPalindrome(String s) {
      String temp = "";
      for ( int i = 0 ; i < s.length() ; i++ ) {
          String t = s.substring(i, i+ 1);
          if ( ! t.toUpperCase().equals(t.toLowerCase()) || (t.charAt(0) >= 48 && t.charAt(0)<= 57) ) {
              temp += t.toLowerCase();
          }
      }
      
      int l = 0;
      int r = temp.length() - 1;
      while ( l < r ) {
          if ( temp.charAt(l) != temp.charAt(r) ) return false;
          l++;
          r--;
      }
      return true;
  }
}