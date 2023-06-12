// 9. Palindrome Number

class Solution {
  public boolean isPalindrome(int x) {
    if ( x < 0 ) return false;
    int tmp = x;
    int sum = 0;
    while ( tmp != 0 ) {
      sum = sum * 10 + tmp % 10;
      tmp = tmp / 10; 
    }
    return sum == x;
  }
}