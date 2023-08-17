// 345. Reverse Vowels of a String

class Solution {
  public String reverseVowels(String s) {
      char[] chars = new char[s.length()];

      for ( int i = 0 ; i < s.length() ; i++ ) {
          chars[i] = s.charAt(i);
      }

      int l = 0;
      int r = chars.length-1;

      while ( l <= r ) {
          if ( isVowel(chars[l]) && isVowel(chars[r]) ) {
              swap(chars, l, r);
              l++;
              r--;
          } else if ( isVowel(chars[l]) && ! isVowel(chars[r]) ) {
              r--;
          } else if ( ! isVowel(chars[l]) && isVowel(chars[r]) ) {
              l++;
          } else {
              l++;
              r--;
          }
      }
      return new String(chars);
  }

  private void swap(char[] chars, int l, int r) {
      char tmp = chars[l];
      chars[l] = chars[r];
      chars[r] = tmp;
  }
  private boolean isVowel(char c) {
      if ( 
          c == 'a' ||
          c == 'e' || 
          c == 'i' || 
          c == 'o' || 
          c == 'u' || 
          c == 'A' || 
          c == 'E' || 
          c == 'I' || 
          c == 'O' || 
          c == 'U'
      ) return true;

      return false;
  }
}